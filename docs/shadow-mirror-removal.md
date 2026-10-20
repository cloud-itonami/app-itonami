# JUN-133 item 4 — shadow-mirror 撤去条件の判定（2026-10-20）

## 結論: **mirror は現時点で必要**（撤去条件は未達）

撤去条件（JUN-133）: 「shadow が .cljk を直接解決したら、または
amu/kbb toolchain へ移行したら」。

1. **shadow が .cljk を直接解決するか** → しない（実測: 最小ビルドで
   `The required namespace "probe-ns" is not available`）。shadow-cljs は
   upstream の npm 配布物で拡張子を教えられない。
2. **amu/kbb toolchain へ移行するか** → 現時点で非対応。amu の guest は
   スカラーの KIRv3/wasm/js であり、reagent/re-frame の SPA バンドルを
   作れない。amu のバンドル能力が育てば再判定。

## 監視（撤去の自動化）

`scripts/probe-shadow-cljk.cljk`（npm run build:probe）が撤去条件を
ビルド前に判定する:

- `OK:` — shadow が .cljk を直接解決 → `build:mirror` を build から外して
  mirror を撤去してよい。
- `NEED:`（現状）— mirror がまだ必要。

probe は repo 直下の一時ディレクトリに .cljk のみの最小ビルドを置いて
`npx shadow-cljs compile probe` を実行する（node_modules 解決のため tmpdir
ではなく repo 直下に置く — tmp では npx が shadow を見つけない）。

## 実測ログ（2026-10-20）

```
NEED: shadow-cljs は .cljk を解決できない - mirror がまだ必要
shadow-cljs - config: .probe-shadow-.../shadow-cljs.edn
The required namespace "probe-ns" is not available.
```
