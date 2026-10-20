// web/vendor/kotodama-load.mjs — appview 用の薄い guest ローダ（JUN-149）。
// browser-host.mjs（kototama-browser-host-v1 typed host runtime）経由で
// guest wasm を admission し、判定核 export を呼ぶ補助を出す。
import { instantiateKotoba } from "./browser-host.mjs";

/**
 * guest wasm を読み込んで admission を通す。
 * @param {ArrayBuffer|Uint8Array} bytes web/wasm/<name>.wasm の内容
 * @param {object} [options] instantiateKotoba のオプション（allowCapabilities 等）
 */
export async function loadGuest(bytes, options = { allowCapabilities: [] }) {
  const result = await instantiateKotoba(bytes, options);
  return Object.freeze({
    instance: result.instance,
    exports: result.instance.exports,
    typedValues: result.typedValues,
    typedAbi: result.typedAbi,
    sha256: result.sha256 ?? null,
  });
}

/** 判定核 export が在ることを確認する（無いときは throw）。 */
export function expectExports(guest, names) {
  const got = Object.keys(guest.exports);
  const missing = names.filter((n) => !got.includes(n));
  if (missing.length > 0)
    throw new Error(`guest exports missing: ${missing.join(", ")} (got: ${got.join(", ")})`);
  return guest;
}
