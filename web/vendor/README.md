# web/vendor — JUN-149: kototama browser host runtime と guest wasm

- `browser-host.mjs` — copied unmodified from
  [kotoba-lang/amu](https://github.com/kotoba-lang/amu) `runtime/browser-host.mjs`
  (Apache-2.0). SHA-256 (copy): `03e0a5a64136ce57…`（`shasum -a 256` で再確認）。
  kototama-browser-host-v1（:wasm32-browser-kotoba-v1）の typed host runtime。
  `instantiateKotoba(source, options)` が admission（typed section /
  compatibility / import allowlist / capability 拒否）を担う。
- `kotodama-load.mjs` — この appview 用の薄いローダ（instantiateKotoba +
  判定核 export の呼び出し補助）。

## web/wasm — guest wasm（判定核）

kotoba-lang/kotodama-host の guest モジュール 6 本（host_util / host_types /
host_cadence / host_model / host_lexicon / host_heartbeat）を
`scripts/build-guest-wasm.sh`（kotodama-host 側）で wasm32-browser にビルド
した物を同梱。`.wasm.provenance.edn` は成果物と同じ単位で扱う（JUN-128 の
流儀: 成果物と provenance は一緒に・毎回再ビルド）。

更新手順:

```sh
git -C ../../../../kotoba-lang/kotodama-host worktree add /tmp/kdh FETCH_HEAD
(cd /tmp/kdh && sh scripts/build-guest-wasm.sh)
cp /tmp/kdh/dist/*.wasm /tmp/kdh/dist/*.provenance.edn web/wasm/
```

読み込み検証: `node scripts/verify-vendor-wasm.mjs`（vendored 資材だけで
6/6 ALL ADMITTED であることを確認する）。
