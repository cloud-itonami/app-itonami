# operator quickstart — app-itonami

**目的: この repo で実際に動く唯一の部分（`kotoba/` の参照実装）を手元で通し、
残り 2 つがなぜ動かないかを実物で確かめる。**

**先に読む: この repo の 3 つの木のうち、そのまま動くのは `kotoba/` だけである**
（理由は [`../README.md`](../README.md) の「現在地」）。`appview/` は build できず、
live な配備も無い。

**全ステップを 2026-08-17 に実際に踏んで出力を確認している。** 所要時間は
**初回 20 分程度**（大半が依存の取得。理由はステップ 2）、2 回目以降は 1 分。

## 0. 前提

```bash
node --version    # 実測: v26.3.0
npm --version     # 実測: 11.16.0
```

Cloudflare の認証は要らない。**この手順は deploy を 1 度もしない**（付録の
`--dry-run` を含む）。

## 1. 取得

```bash
git clone https://github.com/cloud-itonami/app-itonami.git
cd app-itonami/kotoba
```

## 2. 依存を入れる —— このマシンでは `--userconfig` が要る

```bash
npm install --no-audit --no-fund --userconfig=/dev/null
echo "exit=$?"    # 実測: exit=0（75 パッケージ）
```

> **`--userconfig=/dev/null` を落とすと失敗する。** これは **repo の欠陥ではなく、
> このマシンの `~/.npmrc` の問題**である。実測（同じコマンドで 1 変数だけ変えた対照実験）:
>
> | `--userconfig` | 結果 |
> |---|---|
> | 指定なし（`~/.npmrc` を読む） | **exit 1** — `npm error code EALLOWSCRIPTS` / `--allow-scripts is not allowed in project-scoped installs`（2 回とも再現） |
> | `allow-scripts[]=@anthropic-ai/claude-code` の 1 行だけを書いた npmrc | **exit 1** — 同じエラー（**原因をこの 1 行に特定**） |
> | `/dev/null` | **exit 0** |
>
> （空ファイルの npmrc も試したが、こちらは自分で掛けた 600 秒の timeout に当たって
> SIGTERM で終わったので**未測定**。EALLOWSCRIPTS は 85 秒で出るので「そこは越えた」
> とは言えるが、緑を見てはいない。）
>
> `@etzhayyim/sdk` は git 依存で、さらにその依存も git 依存の入れ子になっている。
> npm はそれぞれを「project-scoped install」として準備するが、user レベルの
> `allow-scripts[]` がそこへ引き継がれて拒否される。**`~/.npmrc` にこの行が無い環境では
> 起きない。**

**初回が長いのはこのため**（実測 約 18 分、load average 23 のマシンで）。git 依存の
入れ子を 1 つずつ clone して `prepare`（TypeScript build）を走らせる。**進行中は
`node_modules/@etzhayyim/sdk` が空のディレクトリとして存在する** ——
**そこで型検査を回すと「モジュールが無い」と出るが、それは install 未完了の姿であって
結果ではない**（この誤読は実際に 1 度やった）。完了は `npm` プロセスの終了で判定する:

```bash
ls node_modules/@etzhayyim/sdk    # 実測（完了後）: README.md dist package.json src
```

## 3. 型検査

```bash
npm run typecheck
echo "exit=$?"    # 実測: exit=0（出力なし）
```

> ⚠ `npm run typecheck 2>&1 | tail` のようにパイプで受けると、**`$?` は `tail` の終了
> コードになり必ず 0 に見える**。exit code を見るなら**パイプを挟まないこと**。
> （これも実際に 1 度踏んだ。沈黙が緑として蓄積する典型。）

## 4. テスト

```bash
npm test
echo "exit=$?"
```

**実測**:

```
 RUN  v4.1.10 <...>/app-itonami/kotoba

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Duration  320ms
exit=0
```

4 本のテストが覆う範囲（`test/itonami.test.ts`、`@etzhayyim/sdk-mock` に対して実行）:

| テスト | 何を固定しているか |
|---|---|
| engine design + certification | 整数化した登録・読み出し・一覧、不正な `engineType` / 非正の推力の拒否、`retired` からの遷移拒否 |
| assembly | engine への FK、per-mille 範囲（1500 を拒否）、存在しない engine で `engineNotFound` |
| procurement | UNSPSC 8 桁 / ISIC 4 桁の桁数検証、engine への FK |
| test + coverage | 4 コレクションの集計と、`totalProcurementJpy` などの導出値 |

## 5. デモページを生成する

**ここまでの 4 手は「壊れていない」ことしか示していない。** 何をするものかを見るには、
実装を実際に 1 本走らせる:

```bash
npm run demo
echo "exit=$?"
```

**実測**（2026-08-30、node v26.7.0 / npm 11.19.0）:

```
WROTE     <...>/app-itonami/docs/demo.html
ENGINES   3   PROCUREMENT  3   ASSEMBLIES  2   TESTS  3
ACCEPTED  13  REFUSED      12  PROCUREMENT_JPY  76400000
exit=0
```

`docs/demo.html` をブラウザで開く。**ページの数値は 1 つも手で書かれていない** ——
`tools/gen-demo.ts` が `src/` の関数を呼び、書き込んだあと読み戻した値だけを載せている。

**生成器は 3 つの終了コードを使い分ける。** 「走れなかった」を「走って問題が無かった」と
同じ顔で報告しないためである:

| exit | 意味 | 自分で再現する |
|---|---|---|
| `0` | 書き出した | 上のとおり |
| `1` | 走ったが、実装が生成器の主張どおりに振る舞わなかった | `src/registry.ts` の `invalidUnspscCode` を別名に変えて `npm run demo` |
| `2` | そもそも走れなかった | 下の囲みのとおり（固定パスを使わないこと） |

`2` を自分で出すには、実装ではなく**依存**を外す:

```bash
D=$(mktemp -d)
mv node_modules/@etzhayyim/sdk-mock "$D/"
npm run demo; echo "exit=$?"          # 実測: exit=2
mv "$D/sdk-mock" node_modules/@etzhayyim/sdk-mock; rmdir "$D"
```

> ⚠ **`mv ... /tmp/x && npm run demo` と書かないこと。** `/tmp/x` が既に在ると `mv` が
> 失敗し、`&&` が短絡して **`npm run demo` は 1 度も走らない** —— それでも
> `echo "exit=$?"` は `1` を出すので、**生成器が拒否したのと見分けがつかない**。
> これは実際にこの手順を書いている最中に踏んだ。`mktemp -d` を使う。

**なぜ `1` と `2` を分けるか。** 実測（2026-08-30）で 7 通り壊して確かめたうち、
`@etzhayyim/sdk-mock` を取り去った 1 件だけが `2` を返す。もし両方 `1` なら、
**依存が壊れているだけの実行が「実装が壊れている」として報告される**。逆に両方 `0` なら
最悪で、`docs/demo.html` は前回の内容のまま残り、誰も気づかない。

> **拒否が 0 件なら生成器は書き出さない。** ハッピーパスだけのページは、門が閉まる証拠に
> ならない。同じ理由で、ストアが空・`coverage()` の合計が行の合計と食い違う、のいずれでも
> 書き出さずに終わる。

## 6. 後片付け

`kotoba/.gitignore` が `node_modules/` と `package-lock.json` を無視するので、
**install しただけでは checkout は dirty にならない**。消したいときは:

```bash
cd ..
rm -rf kotoba/node_modules kotoba/package-lock.json
git status --porcelain    # 実測: 空
```

> **`docs/demo.html` は commit される生成物である。** 上の `npm run demo` を回した結果が
> 手元の `docs/demo.html` と一致しなければ、`git diff` に出る —— それは片付け忘れではなく、
> **実装が変わったのにページが追従していない**という報告である。

## 付録: `appview/` が build できないことを自分で確かめる

**deploy はしない。`--dry-run` だけを使う。** blocker は 2 段あり、1 つ目を潰すと
2 つ目が出る —— **片方だけ見て「あと一歩」と読まないため**に、両方見る。

`wrangler` が要る（実測は PATH 上の **4.69.0**。`npx --yes wrangler@4` でも同じはずだが、
そちらは測っていない）。

```bash
cd appview/itonami-it0n4m1x
wrangler deploy --dry-run --outdir /tmp/itonami-dryrun
echo "exit=$?"    # 実測: exit=1
```

**blocker 1**（SPA の成果物が無い）:

```
✘ [ERROR] The directory specified by the "assets.directory" field in your
  configuration file does not exist:
  .../app-itonami/svelte/build
```

プレースホルダを置いて 1 つ目だけ外すと、**本体の blocker が出る**:

```bash
mkdir -p ../../svelte/build
printf '<!doctype html><title>itonami placeholder</title>\n' > ../../svelte/build/index.html
wrangler deploy --dry-run --outdir /tmp/itonami-dryrun
echo "exit=$?"    # 実測: exit=1（通らない）
```

**blocker 2**（`wrangler.jsonc` の `alias` が実在しないパスを指す）:

```
✘ [ERROR] Build failed with 1 error:
  ✘ [ERROR] Cannot find module '/Users/junkawasaki/etzhayyim/etzhayyim-apps-etzhayyim/
    40-engine/kotoba/crates/kotoba-kotodama/sdk/kotodama-host-sdk/src/index.ts' [plugin alias]
      src/app.ts:16:7:
      16 │ } from "@etzhayyim/kotodama-host-sdk";
```

**姉妹 repo の `app-dogaka` では同じ形の alias 表が inert だった**（あちらの `app.ts` は
import を持たないため、在っても無くても dry-run が通る）。**ここでは違う** ——
`src/app.ts` は 5 シンボルを実際に import しており、`appview/` には `package.json` すら
無いので alias 以外の解決経路が無い。**この pass では直していない**（1 反復 1 軸）。

必ず片付ける（`svelte/build` も gitignore されていない）:

```bash
rm -rf ../../svelte/build /tmp/itonami-dryrun
cd ../.. && git status --porcelain    # 実測: 空
```

## この手順で分かること／分からないこと

**分かる**: `kotoba/` の 11 関数は型が通り、mock PDS に対して 4 本のテストが緑になる /
検証規則（engine type・推力・per-mille・UNSPSC 8 桁・ISIC 4 桁・FK・`retired` からの遷移）は
実際に効いている / `appview/` が build できない理由は 2 つあり、本体は alias である /
配備先ホストは DNS に存在しない。

**分からない**: 実物の AT PDS に対する挙動（テストは `@etzhayyim/sdk-mock` に対して走る。
ネットワーク越しの PDS には一度も触れていない）/ `svelte/` の SPA が動くか（**この pass では
一度も build も起動もしていない**）/ `appview/` の 9 個の XRPC が dispatcher の先で何をするか
（`{ok:true, queued:true}` を返すだけで、永続化は downstream）/ `CLAUDE.md` が記述する
RisingWave 側の実体（切り出し対象外で、この repo からは確認できない）。

**ここで緑を見ても、itonami が動くことの証拠にはならない** —— 確かめたのは
`kotoba/` 単体の、mock に対する挙動である。
