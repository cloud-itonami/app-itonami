# app-itonami

**`itonami`（営み）は機能を示さない名前なので、まず名乗る —— これは航空機エンジンの
ライフサイクル・シミュレーションである。** 設計 → 調達 → 組立 → 試験 → デジタルツイン運用
までを模擬して記録し、調達品目を UNSPSC（8 桁 commodity）で、サプライヤー産業を
ISIC Rev.4（4 桁 class）で分類する。

**シミュレーションのデータであって、実物の権威ではない。** PII は無く、決済は起こらず、
ここに記録される「認証」「試験結果」は模擬値である（`axis-clean`。OEM の実際の耐空証明権限
ではない）。

設計の正本は **[`CLAUDE.md`](CLAUDE.md)**（ドメインモデル・XRPC 表・SQL グラフスキーマ）。
この README が書くのは *設計* ではなく **今この repo に何が在って、何が動くか**である ——
そして後述するとおり、**CLAUDE.md には切り出し前のパスと古い方式が残っている。**

## この repo に在るもの（38 ファイル）

`etzhayyim/root` の `60-apps/etzhayyim-project-itonami`（rev `64135b75`、30 ファイル /
105,555 バイト）から切り出した standalone artifact（`migration.edn`）。
`migration.edn` が `:allowed-additions` として申告するのは `README.edn` と `migration.edn` の
2 件だが、**この `README.md` と `docs/operator-quickstart.md` も後から足している** ——
fleet の他の repo（`app-warehouse` / `app-dogaka` など）と同じ扱いで、切り出し契約の
更新漏れであって逸脱ではない。

| パス | 中身 | 手元で動くか |
|---|---|---|
| **`kotoba/`**（10 ファイル / 42 KB） | `@etzhayyim/itonami-kotoba` —— **参照実装**。AT PDS レコードに実際に永続化する 11 関数（engine / assembly / procurement / test / coverage）。`@etzhayyim/sdk-mock` に対する vitest スイートと、**実装を走らせてデモページを生成する `tools/gen-demo.ts`** 付き | **動く**（[quickstart](docs/operator-quickstart.md)） |
| **`docs/demo.html`**（11 KB） | 上の生成器の出力。**手で書かれていない** —— 実装が書き込んで読み戻した値だけで組み立てられている | **生成物**（`cd kotoba && npm run demo`） |
| **`appview/itonami-it0n4m1x/`**（3 ファイル / 16 KB） | Cloudflare Worker + kotodama actor 記述。XRPC を 9 個公開する **edge proxy** —— 書き込みは `{ok:true, queued:true}` を返すだけで永続化せず、読み取りは常に空を返す | **動かない**（`wrangler.jsonc` の alias が実在しないパスを指す） |
| **`svelte/`**（18 ファイル / 51 KB） | SvelteKit SPA（`prerender=true` / `ssr=false`）。4 フェーズのコンポーネントと、**クライアント側だけで完結する**シミュレーション store（215 行） | **未検証**（この pass では触っていない） |
| `CLAUDE.md` | 設計の正本。ただし下記のドリフトあり | — |
| `README.edn` / `migration.edn` / `NOTICE` | 機械可読な同定 / 切り出しの出所 / Apache-2.0 + Charter Rider（**`NOTICE` が参照する `CHARTER-RIDER.md` はこの repo に無い** —— 切り出し対象外） | — |

## 現在地（2026-08-17 実測）

### 1. 永続化の実装は 2 つあり、互いに別物である

**`kotoba/` と `appview/` は同じドメインの別実装で、保存先が違う。**

- `kotoba/` は **AT PDS レコード**に書く（`src/types.ts` が `AT PDS records (replaces RW)` と
  明記）。`defineEngine` は実際に `e.write(...)` を呼び、`listEngines` は実際に読み出す。
  **実測（2026-08-17）: `npm run typecheck` exit 0、`npm test` は 4 本すべて green**
  —— ただし相手は `@etzhayyim/sdk-mock` であって、実物の PDS には一度も触れていない。
- `appview/` は **何も保存しない**。`src/app.ts` 冒頭が `Pure static SPA` / `All domain writes
  are queued downstream` と述べるとおり、コマンドは入力を検証して `{ok:true, queued:true}` を
  返すだけで、`cmdListEngines` は `{items: [], total: 0}` を、`cmdGetEngine` は
  `{error:"notFound"}` を**常に**返す。

一方 **`CLAUDE.md` は 3 つ目の方式（RisingWave の `vertex_itonami_*` テーブルと edge）だけを
記述している。** どれが現行かは、この repo の中だけでは決着しない。**実際に読み書きする
コードは `kotoba/` だけ**なので、動く実装を読みたいならそこから入る。

### 2. `appview/` は committed の状態のままでは build できない —— blocker は 2 段ある

`wrangler deploy --dry-run` を実際に回して確かめた（deploy はしていない）。**1 つ目を
潰すと 2 つ目が出る**ので、片方だけ見て「あと一歩」と読まないこと。

| # | 止まる場所 | 実測されるエラー |
|---|---|---|
| 1 | `assets.directory` = `../../svelte/build` | `The directory specified by the "assets.directory" field in your configuration file does not exist` |
| 2 | `alias` の `@etzhayyim/kotodama-host-sdk` | `Cannot find module '/Users/junkawasaki/etzhayyim/etzhayyim-apps-etzhayyim/40-engine/kotoba/crates/kotoba-kotodama/sdk/kotodama-host-sdk/src/index.ts'` … `src/app.ts:16:7` |

2 つ目が本体である。`wrangler.jsonc` の `alias`（6 件）は**特定マシンのホーム配下の絶対パス**を
指していて、このマシンには無い。**姉妹 repo の `app-dogaka` では同じ alias 表が inert だった**
（あちらの `app.ts` は import を 1 つも持たない）が、**ここでは違う** ——
`src/app.ts` は `@etzhayyim/kotodama-host-sdk` から 5 シンボルを実際に import しており、
`appview/` には `package.json` すら無いので、alias 以外に解決経路が無い。
**alias を直さない限り bundle は生成されない。**

再現手順は [quickstart の付録](docs/operator-quickstart.md#付録-appview-が-build-できないことを自分で確かめる)。

### 3. live な配備は無い

`wrangler.jsonc` の `routes` が主張する 2 ホストは **どちらも DNS に存在しない**（実測）:

| ホスト | 結果 |
|---|---|
| `itonami.etzhayyim.com` | 解決しない |
| `it0n4m1x.etzhayyim.com` | 解決しない |
| `etzhayyim.com`（ゾーン頂点） | 解決する（172.67.179.128 / Cloudflare） |

## 動くものを見る —— `docs/demo.html` は生成物である

**[`docs/demo.html`](docs/demo.html) を開くと、`kotoba/` の実装が実際に何をするかが見える。**
設計 → 調達 → 組立 → 試験 → 認証を 1 本走らせた結果（エンジン 3 / 調達 3 / 組立 2 / 試験 3）と、
**実際に拒否された 12 件**が載っている。

**このページは手で書かれていない。** `kotoba/tools/gen-demo.ts` が `kotoba/src/` の関数を
`@etzhayyim/sdk-mock` に対して呼び、**書き込んだあと読み戻した**値だけで組み立てる:

```bash
cd kotoba && npm run demo
# WROTE     …/docs/demo.html
# ENGINES   3  PROCUREMENT  3  ASSEMBLIES  2  TESTS  3
# ACCEPTED  13 REFUSED      12 PROCUREMENT_JPY  76400000
```

**生成器は書き出しを拒否することがある。** 手書きのデモページは、実装が壊れても緑のまま
飾りとして残る —— 何もページと実装を結んでいないからである。この生成器は結んでいる:

| 終了コード | 意味 |
|---|---|
| `0` | 書き出した |
| `1` | **走ったが、実装が生成器の主張どおりに振る舞わなかった** |
| `2` | **そもそも走れなかった**（実装や mock SDK を import できない） |

`1` と `2` を分けているのは、「測れなかった」を「測って問題が無かった」と同じ顔で
報告しないためである（superproject の ADR-2608136000）。

**拒否の理由文字列を固定している。** 生成器は `invalidUnspscCode` / `engineNotFound` /
`progressPermilleMustBe0to1000` のような**理由そのもの**を突き合わせる —— 「何か拒否された」
では、別の原因で早く落ちた呼び出しを「拒否を実演した」と数えてしまう。上流が理由を改名すれば
これは落ちる。**それがこの検査の効き目であって、欠点ではない。**

実際に壊して確かめてある（2026-08-30、7 通り。無改変では `exit 0`）:

| 壊した箇所 | 生成器の答え |
|---|---|
| `ENGINE_TYPES` が何でも受理する | `exit 1` — engineType の拒否が `defined` になった |
| 理由を `invalidUnspscCode` → `badUnspsc` に改名 | `exit 1` — 理由が変わった |
| `coverage` が数量を掛け忘れる | `exit 1` — 行の合計 76,400,000 と 6,080,000 が食い違う |
| FK 検査を素通しして `GHOST` を実在させる | `exit 1` — `engineNotFound` が `recorded` になった |
| `listEngines` が常に空を返す | `exit 1` — **空のページを書かずに終わる** |
| `coverage` の件数が list とずれる | `exit 1` — 4 と 3 が食い違う |
| `@etzhayyim/sdk-mock` を取り去る | **`exit 2`** — 走れなかった（`1` ではない） |

**このページが主張していないこと。** 相手は mock SDK であって実在の AT PDS ではない。
数値は模擬値で、利用者数も売上も主張していない。`appview/` と `svelte/` の状態は
これで何も変わっていない（下記のとおり）。

## `CLAUDE.md` のドリフト（触る前に知っておくこと）

**古いのは CLAUDE.md の方であって、コードではない。** この pass では直していない（1 反復 1 軸）。

| CLAUDE.md の記述 | 実際 |
|---|---|
| 「XRPC Surface (MVP — **7 methods**)」 | `app.ts` は **9 個**登録している。表に無いのは `addProcurementItem` と `registerSupplier` |
| Lexicon は `00-contracts/lexicons/com/etzhayyim/apps/itonami/` | **この repo に `00-contracts/` は無い**（切り出し前のモノレポのパス） |
| Deploy は `cd 60-apps/etzhayyim-project-itonami/appview/itonami-it0n4m1x && etzhayyim deploy` | **そのパスは存在しない**。この repo での入口は `appview/itonami-it0n4m1x/`。なお上記のとおり build 自体が通らない |
| 永続化は RisingWave の `vertex_itonami_*` テーブル | `kotoba/src/types.ts` は `AT PDS records (replaces RW)` と述べる |
| Migration Backlog の 6 項目が全て `done (2026-05-16)` | 上記の `00-contracts` / RisingWave migration は**この repo からは確認できない**（切り出し対象外） |

## 入口

- **何をするものか見る**: [`docs/demo.html`](docs/demo.html) —— 実装を走らせて生成した
  ライフサイクル 1 本と、拒否された 12 件（`cd kotoba && npm run demo` で再生成）
- **手元で動かす**: [`docs/operator-quickstart.md`](docs/operator-quickstart.md) ——
  `kotoba/` の型検査とテストを実際に通す手順（実測値つき）
- **設計を読む**: [`CLAUDE.md`](CLAUDE.md)（上のドリフト表を先に読むこと）
- **実装を読む**: `kotoba/src/registry.ts`（11 関数）→ `kotoba/src/types.ts`（検証規則と DID 体系）

## 制約

- この repo は CI を持たない。ワークスペースの CI/CD は murakumo fleet であって
  GitHub Actions ではない（superproject の ADR-2607300900）
- 数値は整数化して持つ —— 推力は kN×100（`12100` = 121.00 kN）、進捗は per-mille（0–1000）。
  AT Lexicon に float が無いための設計であって、丸め落ちではない
- マーケティング用の利用者数・売上を捏造しない。ここに在るのは模擬データである
- force-push しない。`NOTICE` の Apache-2.0 + Charter Rider を残す
