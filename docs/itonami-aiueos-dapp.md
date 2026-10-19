# app-itonami — itonami（dapp）上の分散型設計

状態: 第 1 スライス実装 + build 診断（2026-10-19）。正本はこの文書。
追跡: Linear JUN-120（親 JUN-116）。build の fleet 横断 blocker は JUN-131 に分離。

## 位置づけ

app-itonami は itonami（dapp）の app bundle であり、独立 dapp ではない
（ADR 0007 / 0008）。domain は aircraft engine lifecycle simulation
（設計→調達→組立→試験→デジタルツイン運用。UNSPSC 8 桁 / ISIC Rev.4 4 桁）。
層の全体像は network-awai-apex `docs/dapp-architecture-map.md`。

## このスライスで実装したもの

| 層 | 実体 | 状態 |
|---|---|---|
| 判定コア guest | `aiueos/itonami_lifecycle.cljk` — command 入力検証（registerEngine / recordAssembly / logTestResult / logFlightEvent / procurement / supplier の error 規則と 1:1）。スカラーのみ = **KIR v3 / i64/direct ABI**（kernel ホストと selfhost の両方で動く） | **実装済み・実測** |
| アプリ記述子 | `aiueos/itonami.edn`（notes.edn 形） | **実装済み** |
| appview adapter | `app_itonami/lifecycle.cljk`（map API、app.ts の error 規則 parity） | **実装済み・実測** |
| wasm 産物 | `aiueos/itonami_lifecycle.wasm` + provenance | **実装済み** |

## 実測（2026-10-19）

- `amu check` → `:ok true`, `:effects #{}`。
- `amu test` → **27/27 passed**（test 9 本 × `[:jvm-kir :js :wasm]`）。
- kbb adapter parity → 4 tests / 20 assertions / 0 failures。

## build 復旧の実測（README の 2 blocker を追跡）

| # | blocker | 状態 |
|---|---|---|
| 1 | `assets.directory` = `../../svelte/build` が無い | **修正済み** → `../../web/dist`（shadow の :app 出力契約どおり。ビルド産物ができるまで mkdir 必要） |
| 2a | alias が特定マシンの絶対パス | **修正済み** → west シブリング相対パス。`@etzhayyim/xrpc/*` は `kotoba-lang/xrpc` に実在して解決 |
| 2b | **`@etzhayyim/kotodama-host-sdk` の TS 実装が無い** | **未解決（fleet 横断、JUN-131）** — `kotodama-host/sdk` は CLJC facade（`host-contract.cljk`）のみ。`createWorkerExport` 等 5 シンボルの TS 実装は workspace に不在（kotoba-lang の他 7+ appview も同じ import で漂流） |
| 3 | shadow-cljs が `.cljk` を解決できない | **未解決（同 JUN-131）** — cljk 改名（ADR-2609111500）× shadow の tool drift。kaikei でも同根を確認済み。`npx shadow-cljs compile app` → `The required namespace "cloud-itonami.app-itonami.desktop" is not available` |

`wrangler deploy --dry-run` は 1 の修正で assets チェックを通過し、esbuild の
bundle 段で 2b に着弾するところまで実測（= 2a の alias 修正は効いている）。

## 未実装境界

- aiueos app catalog 載せ、mon/ito/nuno 割り当て、接続面（JUN-126）は他 app と同じ。
- command のキューイング・永続（pod 側）はこの dapp スライスの外。
- lifecycle の状態機械判定（phase の順序: design→procurement→assembly→testing→…）は
  app.ts に規則が無いため guest にも入れていない。入れるなら lexicon と同時。

## 次の一手

1. JUN-131: kotodama-host-sdk の TS→CLJC 移行（または facade 実装の復元）と
   shadow×cljk 解決（mirror ワークアラウンド or ツール側対応）。
2. web/dist のビルド産物生成後に wrangler deploy --dry-run の完全通過を再測定。


## build 復旧: dry-run 完全通過（2026-10-19、JUN-131）

`wrangler deploy --dry-run` が **完全通過**（Total Upload 1,967.89 KiB /
gzip 324.99 KiB）。手順（west シブリング前提）:

1. 依存側で `npm install --ignore-scripts`（kotodama-host/sdk/kotodama-host-sdk、
   kotoba-lang/xrpc、kotoba-lang/did-etzhayyim、kotoba-lang/sdk。file: リンクの
   prepare script が tsc を要求するため `--ignore-scripts` が要る — 実測）。
2. この repo で `npm install --ignore-scripts`（kotodama-host-sdk は file: 依存）。
3. `mkdir -p web/dist`（assets ディレクトリ。SPA ビルド産物は shadow×cljk の
   解決待ち = JUN-131 の残り半分）。
4. `cd appview/itonami-it0n4m1x && wrangler deploy --dry-run`。

alias 表は撤去済み。依存解決は node_modules（file: リンク）。app.ts の import
は rename 済み（`@kotoba-lang/kotoba-kotodama-host-sdk`）。

### 追記: shadow×cljk も解決 — build 復旧 完了（2026-10-19、JUN-131）

`npx shadow-cljs release app` が **Build completed**（94 files, 50 compiled,
0 warnings）、`web/dist/js/main.js`（340 KB）を生成し、
`wrangler deploy --dry-run` も完全通過（Total Upload 1,967.89 KiB）。
**JUN-131 の完了条件 2/2 達成。**

手順（上記 1-4 を置き換え）:

1. `npm run build`（= `scripts/shadow-mirror.cljk` で classpath を
   `.shadow-mirror/` へ統合コピー（.cljk → .cljc rename）→ `npx shadow-cljs
   release app`）。依存側の `npm install --ignore-scripts` は同前。
2. `cd appview/itonami-it0n4m1x && wrangler deploy --dry-run`

方式: ソースは .cljk のまま。shadow は拡張子を教えられないため（upstream npm
配布物）、ビルド前に mirror を生成して `deps.edn` の :cljs alias
`:extra-paths [".shadow-mirror"]` で読ませる（shadow-cljs.edn の
:source-paths は :deps モードで無効、--config-merge は build 単位 — いずれも
実測）。撤去条件は scripts/shadow-mirror.cljk のヘッダに記載。
