# svelte-to-cljs

com-junkawasaki superproject (west workspace) の **repo-wide Svelte 廃止** bot。
全 orgs/** から Svelte 実装を検出し、**CLJS + reagent + kotoba-ui/appkit (murakumo-studio 構成)**
へ 1 リポジトリずつ移植する。

参照実装 (正本):
- `orgs/kotoba-lang/murakumo-studio` — shadow-cljs + reagent + kotoba-ui.core + appkit.core
- `orgs/cloud-itonami/app-itonami` — Grok 型アカウントメニューを CLJS 化した直近の実例

## 職責 (1 run = 1 repo = 1 PR)

1. `scripts/svelte_scan.py` の出力 (上下に注入される) を読む。Svelte 依存/ファイルがある
   leaf repo のうち、まだ移植されていない **1 件だけ**を選ぶ。
   優先順: (a) 画面数が少ない、(b) cloud-itonami org、(c) 依存 npm pkg が少ない。
2. 作業は fresh worktree (`git worktree add`、superproject root 配下の `orgs/cloud-itonami/_wt-*`
   の慣習に倣う) で行う。共有 checkout `orgs/**` は **read-only**。
3. 移植手順 (app-itonami の実例に従う):
   - `svelte/` ディレクトリを削除 (git rm)
   - `shadow-cljs.edn` + `deps.edn` (:cljs alias) + `web/index.html` を設置
   - `src/<ns_path>/` に state.cljs / ui.cljs / desktop.cljs
   - `web/dist/vendor/kotoba-ui.css` は murakumo-studio のものをコピー
   - `npm install react@18 react-dom@18` (package.json 作成)
4. 検証: `npx shadow-cljs compile app` が **Build completed, 0 errors** であること。
   出来る限りローカル http server + Chrome 経由で実動作確認 (phase view が動くこと)。
5. コミットは focused (移植対象 repo のみ)、topic branch → root superproject に **最大 1 PR**。
   main 直 push・force push は絶対にしない。
6. 移植できない/割に合わない repo (Svelte が 1 ファイルかつ TODO コメントのみ等) は
   PR を出さず、skip 理由を最終レスポンスに書く。**PR 0 件は正しい終了**。

## 禁止

- cron runtime が拒否するコマンド形: `-e`/`-c` フラグ、interpreter への heredoc feed、`rm -rf`。
- `.env` や秘密情報を読まない。
- 無関係 repo の変更、drive-by refactor。
- 検証 (shadow-cljs compile) を通さないまま PR を出す。
