/**
 * itonami kotoba — demo page generator.
 *
 * Runs the REAL registry (`../src/index.js`) against `@etzhayyim/sdk-mock` and
 * writes `docs/demo.html` out of what the registry actually returned. Nothing on
 * the page is typed by hand: every engine row, every refusal, every rollup number
 * is read back out of the store after the actor wrote it.
 *
 * WHY A GENERATOR AND NOT A PAGE. A hand-written demo page is a drawing of the
 * software. It stays green while the software rots, because nothing connects the
 * two. This one cannot: regenerate and it either tells the truth or it refuses.
 *
 * WHAT IT REFUSES TO DO (each is a distinct exit code, so "could not run" is
 * never reported as "ran and found nothing"):
 *
 *   exit 0  wrote the page
 *   exit 1  the actor disagreed with what this generator asserts about it
 *   exit 2  could not run at all (actor or mock SDK unimportable / unusable)
 *
 * The refusal set is the point. `EXPECTED_REFUSALS` pins the actual error
 * literals the registry returns (`invalidEngineType`, `engineNotFound`, …), not
 * merely "some error came back". If upstream renames a reason, this fails — that
 * is the assertion working, not a defect in it. A negative test that only checks
 * "it was rejected" passes for the wrong reason the moment the call starts
 * failing earlier for an unrelated cause.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, "..", "..", "docs", "demo.html");

/** exit 2 — we never got far enough to have an opinion. */
function cannotRun(what: string, err: unknown): never {
  const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
  console.error(`REFUSING to report a demo: ${what}\n  ${detail}`);
  process.exit(2);
}

/** exit 1 — we ran, and the actor did not behave as this generator claims. */
function disagrees(what: string): never {
  console.error(`FAILED: ${what}`);
  process.exit(1);
}

const registry = await import("../src/index.js").catch((e) => cannotRun("cannot import the registry under test", e));
const mockMod = await import("@etzhayyim/sdk-mock").catch((e) => cannotRun("cannot import @etzhayyim/sdk-mock", e));

const { MockEtzhayyim } = mockMod as { MockEtzhayyim: new (o: { did: string }) => unknown };
if (typeof MockEtzhayyim !== "function") cannotRun("@etzhayyim/sdk-mock exports no MockEtzhayyim constructor", "not a constructor");

const {
  defineEngine, setCertification, getEngine, listEngines,
  recordAssembly, listAssemblies, addProcurement, listProcurement,
  recordTest, listTests, coverage,
} = registry as any;

for (const [name, fn] of Object.entries({
  defineEngine, setCertification, getEngine, listEngines, recordAssembly,
  listAssemblies, addProcurement, listProcurement, recordTest, listTests, coverage,
})) {
  if (typeof fn !== "function") cannotRun(`the registry does not export ${name}()`, typeof fn);
}

const e: any = new (MockEtzhayyim as any)({ did: "did:web:itonami.etzhayyim.com" });

// ─── the scenario. One engine, walked design → procurement → assembly → test ──
//
// Values are the simulation's own integerized units: thrust is kN×100
// (12100 = 121.00 kN) and progress is per-mille. Costs are simulated JPY; this
// repo records no real settlement.

type Step = { label: string; call: () => Promise<any> };

const happyPath: Step[] = [
  { label: "defineEngine CFM56-7B", call: () => defineEngine(e, { engineId: "CFM56-7B", designCode: "CFM56-7B", engineType: "turbofan", thrustRatingKn: 12100, massKg: 2380 }) },
  { label: "defineEngine PW1100G", call: () => defineEngine(e, { engineId: "PW1100G", designCode: "PW1100G-JM", engineType: "turbofan", thrustRatingKn: 14700, massKg: 2857 }) },
  { label: "defineEngine H3-EPU", call: () => defineEngine(e, { engineId: "H3-EPU", designCode: "H3-EPU-1", engineType: "electric", thrustRatingKn: 900, massKg: 210 }) },
  { label: "addProcurement fan blades (UNSPSC 25171700 / ISIC 3030)", call: () => addProcurement(e, { itemId: "P-FAN-1", engineId: "CFM56-7B", unspscCode: "25171700", supplierIsicCode: "3030", quantity: 24, unitCostJpy: 1500000 }) },
  { label: "addProcurement turbine discs", call: () => addProcurement(e, { itemId: "P-DISC-1", engineId: "CFM56-7B", unspscCode: "25171701", supplierIsicCode: "2591", quantity: 6, unitCostJpy: 4200000 }) },
  { label: "addProcurement stator vanes for PW1100G", call: () => addProcurement(e, { itemId: "P-VANE-1", engineId: "PW1100G", unspscCode: "25171702", supplierIsicCode: "3030", quantity: 40, unitCostJpy: 380000 }) },
  { label: "recordAssembly core module 65%", call: () => recordAssembly(e, { assemblyId: "A-CORE-1", engineId: "CFM56-7B", phaseCode: "assembly", progressPermille: 650, notes: "core module mated" }) },
  { label: "recordAssembly into testing 80%", call: () => recordAssembly(e, { assemblyId: "A-TEST-1", engineId: "CFM56-7B", phaseCode: "testing", progressPermille: 800 }) },
  { label: "recordTest bench (pass)", call: () => recordTest(e, { testId: "T-BENCH-1", engineId: "CFM56-7B", testType: "bench", outcomeCode: "pass", thrustAchievedKn: 12050, durationSeconds: 3600 }) },
  { label: "recordTest flight (conditional)", call: () => recordTest(e, { testId: "T-FLIGHT-1", engineId: "CFM56-7B", testType: "flight", outcomeCode: "conditional", thrustAchievedKn: 11900, durationSeconds: 7200 }) },
  { label: "recordTest ground on PW1100G (fail)", call: () => recordTest(e, { testId: "T-GND-1", engineId: "PW1100G", testType: "ground", outcomeCode: "fail", thrustAchievedKn: 13100, durationSeconds: 1800 }) },
  { label: "setCertification CFM56-7B → in_progress", call: () => setCertification(e, { engineId: "CFM56-7B", certificationStatus: "in_progress" }) },
  { label: "setCertification CFM56-7B → certified", call: () => setCertification(e, { engineId: "CFM56-7B", certificationStatus: "certified" }) },
];

/**
 * The gate. Each entry pins the LITERAL reason the registry gives, so this
 * catches a renamed reason and a call that starts failing for a different cause.
 * `status` is checked too: `rejected` (validation) and `engineNotFound`
 * (referential integrity) are different refusals and must not be conflated.
 */
const EXPECTED_REFUSALS: { label: string; status: string; error?: string; call: () => Promise<any> }[] = [
  { label: "engineType outside the closed vocabulary", status: "rejected", error: "invalidEngineType",
    call: () => defineEngine(e, { engineId: "BAD-1", designCode: "bad", engineType: "warp" as any, thrustRatingKn: 1000, massKg: 100 }) },
  { label: "thrust must be a positive integer (kN×100)", status: "rejected", error: "thrustRatingKnMustBePosInt",
    call: () => defineEngine(e, { engineId: "BAD-2", designCode: "bad", engineType: "turbofan", thrustRatingKn: 0, massKg: 100 }) },
  { label: "an engine already defined is not redefined", status: "alreadyExists",   // idempotent: carries no error literal
    call: () => defineEngine(e, { engineId: "CFM56-7B", designCode: "CFM56-7B", engineType: "turbofan", thrustRatingKn: 12100, massKg: 2380 }) },
  { label: "progress outside 0..1000 per-mille", status: "rejected", error: "progressPermilleMustBe0to1000",
    call: () => recordAssembly(e, { assemblyId: "BAD-A", engineId: "CFM56-7B", phaseCode: "assembly", progressPermille: 1500 }) },
  { label: "assembly against an engine that does not exist", status: "engineNotFound", error: "engineNotFound:GHOST",
    call: () => recordAssembly(e, { assemblyId: "BAD-A2", engineId: "GHOST", phaseCode: "assembly", progressPermille: 100 }) },
  { label: "UNSPSC must be 8 digits", status: "rejected", error: "invalidUnspscCode",
    call: () => addProcurement(e, { itemId: "BAD-P", engineId: "CFM56-7B", unspscCode: "123", supplierIsicCode: "3030", quantity: 1, unitCostJpy: 1 }) },
  { label: "ISIC Rev.4 class must be 4 digits", status: "rejected", error: "invalidSupplierIsicCode",
    call: () => addProcurement(e, { itemId: "BAD-P2", engineId: "CFM56-7B", unspscCode: "25171700", supplierIsicCode: "30", quantity: 1, unitCostJpy: 1 }) },
  { label: "procurement against an engine that does not exist", status: "engineNotFound", error: "engineNotFound:GHOST",
    call: () => addProcurement(e, { itemId: "BAD-P3", engineId: "GHOST", unspscCode: "25171700", supplierIsicCode: "3030", quantity: 1, unitCostJpy: 1 }) },
  { label: "test outcome outside the closed vocabulary", status: "rejected", error: "invalidOutcomeCode",
    call: () => recordTest(e, { testId: "BAD-T", engineId: "CFM56-7B", testType: "bench", outcomeCode: "exploded" as any, thrustAchievedKn: 1, durationSeconds: 1 }) },
  { label: "test against an engine that does not exist", status: "engineNotFound", error: "engineNotFound:GHOST",
    call: () => recordTest(e, { testId: "BAD-T2", engineId: "GHOST", testType: "bench", outcomeCode: "pass", thrustAchievedKn: 1, durationSeconds: 1 }) },
  { label: "certification cannot leave the retired terminal state", status: "rejected", error: "engineRetired",
    call: async () => { await setCertification(e, { engineId: "H3-EPU", certificationStatus: "retired" });
                        return setCertification(e, { engineId: "H3-EPU", certificationStatus: "certified" }); } },
  { label: "certification of an engine that does not exist", status: "notFound", error: "engineNotFound",
    call: () => setCertification(e, { engineId: "GHOST", certificationStatus: "certified" }) },
];

// ─── walk it ─────────────────────────────────────────────────────────────────

const accepted: { label: string; status: string; uri: string }[] = [];
for (const s of happyPath) {
  let r: any;
  try { r = await s.call(); } catch (err) { cannotRun(`the actor threw during "${s.label}"`, err); }
  const ok = ["defined", "recorded", "added", "updated"].includes(r?.status);
  if (!ok) disagrees(`"${s.label}" was expected to be accepted, got status=${JSON.stringify(r?.status)} error=${JSON.stringify(r?.error)}`);
  accepted.push({ label: s.label, status: r.status, uri: r.engineUri ?? r.assemblyUri ?? r.procurementUri ?? r.testUri ?? "" });
}

const refusals: { label: string; status: string; error: string }[] = [];
for (const r of EXPECTED_REFUSALS) {
  let got: any;
  try { got = await r.call(); } catch (err) { cannotRun(`the actor threw while refusing "${r.label}"`, err); }
  if (got?.status !== r.status) {
    disagrees(`"${r.label}" should refuse with status=${r.status}, got status=${JSON.stringify(got?.status)} error=${JSON.stringify(got?.error)}`);
  }
  if (r.error !== undefined && got?.error !== r.error) {
    disagrees(`"${r.label}" should refuse with error=${r.error}, got error=${JSON.stringify(got?.error)} — a renamed reason is a real change, not noise`);
  }
  refusals.push({ label: r.label, status: got.status, error: String(got.error ?? "—") });
}

// ─── read it all back out of the store ───────────────────────────────────────

const engines = await listEngines(e, {}).catch((err: unknown) => cannotRun("listEngines failed", err));
const assemblies = await listAssemblies(e, {}).catch((err: unknown) => cannotRun("listAssemblies failed", err));
const procurement = await listProcurement(e, {}).catch((err: unknown) => cannotRun("listProcurement failed", err));
const tests = await listTests(e, {}).catch((err: unknown) => cannotRun("listTests failed", err));
const cov = await coverage(e).catch((err: unknown) => cannotRun("coverage failed", err));

// ─── evidence floor ──────────────────────────────────────────────────────────
//
// An empty page is the failure this whole file exists to prevent: a generator
// that runs, finds nothing, and writes a document that looks exactly like a
// successful one. Zero is never clean here.

if (!engines.total) disagrees("the store came back with zero engines — refusing to write an empty demo");
if (!refusals.length) disagrees("zero refusals were demonstrated — a page that only shows the happy path is not evidence the gate closes");
if (cov.engineCount !== engines.total) disagrees(`coverage says ${cov.engineCount} engines, listEngines says ${engines.total}`);
if (cov.truncated) disagrees("coverage truncated its scan — the rollup on the page would understate the store");

// The rollup must be derived, not asserted: recompute it here from the rows we
// read back, and refuse if the actor's own number disagrees.
const recomputedJpy = procurement.items.reduce((n: number, p: any) => n + p.unitCostJpy * p.quantity, 0);
if (cov.totalProcurementJpy !== recomputedJpy) {
  disagrees(`coverage totalProcurementJpy=${cov.totalProcurementJpy} but the rows sum to ${recomputedJpy}`);
}

// ─── render ──────────────────────────────────────────────────────────────────

const esc = (s: unknown) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));
const kn = (v: number) => (v / 100).toFixed(2);
const jpy = (v: number) => v.toLocaleString("en-US");

const rows = <T,>(xs: T[], cells: (x: T) => string[]) => xs.map((x) => `<tr>${cells(x).map((c) => `<td>${c}</td>`).join("")}</tr>`).join("\n");

const html = `<!DOCTYPE html>
<html lang="ja">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>app-itonami — 生成されたデモ</title>
<style>
:root {
  --ink: #1a1a1c; --dim: #5b5b60; --line: #d9d9de; --bg: #fbfbfc; --panel: #fff;
  --ok: #0b6b3a; --no: #8a1c1c; --accent: #1a4f9c; --space: 1rem;
}
@media (prefers-color-scheme: dark) {
  :root { --ink: #ececef; --dim: #a0a0a8; --line: #34343a; --bg: #131316; --panel: #1b1b20;
          --ok: #5fd39a; --no: #f08a8a; --accent: #7fb0f5; }
}
* { box-sizing: border-box; }
body { margin: 0; padding: calc(var(--space) * 2) var(--space); background: var(--bg); color: var(--ink);
       font: 15px/1.65 system-ui, -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif; }
main { max-width: 60rem; margin: 0 auto; }
h1 { font-size: 1.6rem; margin: 0 0 .3rem; }
h2 { font-size: 1.1rem; margin: calc(var(--space) * 2) 0 .5rem; padding-top: var(--space); border-top: 1px solid var(--line); }
p { margin: .5rem 0; }
.lede { color: var(--dim); }
.warn { border-left: 3px solid var(--accent); padding: .6rem .9rem; background: var(--panel); margin: var(--space) 0; }
table { width: 100%; border-collapse: collapse; margin: .6rem 0; font-size: .9rem; }
th, td { text-align: left; padding: .4rem .6rem; border-bottom: 1px solid var(--line); vertical-align: top; }
th { color: var(--dim); font-weight: 600; white-space: nowrap; }
td.n { text-align: right; font-variant-numeric: tabular-nums; }
code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .87em; }
.ok { color: var(--ok); font-weight: 600; }
.no { color: var(--no); font-weight: 600; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); gap: .6rem; margin: .8rem 0; }
.stat { background: var(--panel); border: 1px solid var(--line); border-radius: 6px; padding: .7rem .9rem; }
.stat b { display: block; font-size: 1.5rem; font-variant-numeric: tabular-nums; }
.stat span { color: var(--dim); font-size: .8rem; }
footer { color: var(--dim); font-size: .85rem; margin-top: calc(var(--space) * 2);
         padding-top: var(--space); border-top: 1px solid var(--line); }
</style>
<main>
<h1>app-itonami — 生成されたデモ</h1>
<p class="lede">航空機エンジンのライフサイクル・シミュレーション。設計 → 調達 → 組立 → 試験 → 認証。</p>

<div class="warn">
<p><strong>このページは手で書かれていない。</strong> <code>kotoba/tools/gen-demo.ts</code> が
<code>kotoba/src/</code> の実装を <code>@etzhayyim/sdk-mock</code> に対して実際に走らせ、
<em>書き込んだあと読み戻した</em>値だけで組み立てている。数値を 1 つも打っていないので、
実装が変われば次の生成でこのページも変わる。</p>
<p><strong>これはシミュレーションであって実物の権威ではない。</strong> PII は無く、決済は
起こらず、ここでの「認証」「試験結果」は模擬値である。相手は mock SDK であって実在の
AT PDS ではない。</p>
</div>

<h2>ロールアップ（<code>coverage()</code> が返した値）</h2>
<div class="grid">
  <div class="stat"><b>${cov.engineCount}</b><span>エンジン設計</span></div>
  <div class="stat"><b>${cov.procurementCount}</b><span>調達品目</span></div>
  <div class="stat"><b>${cov.assemblyCount}</b><span>組立記録</span></div>
  <div class="stat"><b>${cov.testCount}</b><span>試験結果</span></div>
  <div class="stat"><b>¥${jpy(cov.totalProcurementJpy)}</b><span>調達額（模擬）</span></div>
</div>
<p class="lede">調達額は行から再計算して <code>coverage()</code> の値と突き合わせている
（一致しなければ生成器は書き出さずに終わる）。</p>

<h2>エンジン設計 — <code>listEngines()</code> ${engines.total} 件</h2>
<table>
<tr><th>engineId</th><th>設計コード</th><th>形式</th><th>定格推力</th><th>質量</th><th>認証</th><th>DID</th></tr>
${rows(engines.items, (x: any) => [
  `<code>${esc(x.engineId)}</code>`, esc(x.designCode), esc(x.engineType),
  `<span class="n">${kn(x.thrustRatingKn)} kN</span>`, `<span class="n">${jpy(x.massKg)} kg</span>`,
  esc(x.certificationStatus), `<code>${esc(x.did)}</code>`,
])}
</table>
<p class="lede">推力は kN×100 の整数で保持されている（<code>${engines.items[0]?.thrustRatingKn}</code>
= ${kn(engines.items[0]?.thrustRatingKn ?? 0)} kN）。AT Lexicon に float が無いための設計であって、
丸め落ちではない。</p>

<h2>調達 — <code>listProcurement()</code> ${procurement.total} 件</h2>
<table>
<tr><th>itemId</th><th>engineId</th><th>UNSPSC</th><th>供給者 ISIC</th><th>数量</th><th>単価（模擬）</th><th>小計</th></tr>
${rows(procurement.items, (x: any) => [
  `<code>${esc(x.itemId)}</code>`, `<code>${esc(x.engineId)}</code>`,
  `<code>${esc(x.unspscCode)}</code>`, `<code>${esc(x.supplierIsicCode)}</code>`,
  `<span class="n">${x.quantity}</span>`, `<span class="n">¥${jpy(x.unitCostJpy)}</span>`,
  `<span class="n">¥${jpy(x.unitCostJpy * x.quantity)}</span>`,
])}
</table>
<p class="lede">調達品目は UNSPSC の 8 桁 commodity、供給者は ISIC Rev.4 の 4 桁 class で分類される。
どちらも桁数が検証されている（下の拒否表）。</p>

<h2>組立 — <code>listAssemblies()</code> ${assemblies.total} 件</h2>
<table>
<tr><th>assemblyId</th><th>engineId</th><th>フェーズ</th><th>進捗</th><th>備考</th></tr>
${rows(assemblies.items, (x: any) => [
  `<code>${esc(x.assemblyId)}</code>`, `<code>${esc(x.engineId)}</code>`, esc(x.phaseCode),
  `<span class="n">${(x.progressPermille / 10).toFixed(1)} %</span>`, esc(x.notes ?? "—"),
])}
</table>
<p class="lede">進捗は per-mille（0–1000）の整数。</p>

<h2>試験 — <code>listTests()</code> ${tests.total} 件</h2>
<table>
<tr><th>testId</th><th>engineId</th><th>種別</th><th>結果</th><th>達成推力</th><th>時間</th></tr>
${rows(tests.items, (x: any) => [
  `<code>${esc(x.testId)}</code>`, `<code>${esc(x.engineId)}</code>`, esc(x.testType),
  `<span class="${x.outcomeCode === "pass" ? "ok" : "no"}">${esc(x.outcomeCode)}</span>`,
  `<span class="n">${kn(x.thrustAchievedKn)} kN</span>`, `<span class="n">${jpy(x.durationSeconds)} s</span>`,
])}
</table>

<h2>門が閉まること — 実際に拒否された ${refusals.length} 件</h2>
<p>ハッピーパスだけを見せるページは、門が閉まる証拠にならない。以下は生成器が実際に
呼んで <em>拒否された</em>もので、返ってきた理由の文字列をそのまま載せている。
理由が改名されれば生成器は失敗する —— それがこの表の効き目である。</p>
<table>
<tr><th>試したこと</th><th>status</th><th>理由</th></tr>
${rows(refusals, (x) => [esc(x.label), `<span class="no">${esc(x.status)}</span>`, `<code>${esc(x.error)}</code>`])}
</table>

<h2>受理された ${accepted.length} 件</h2>
<table>
<tr><th>呼び出し</th><th>status</th></tr>
${rows(accepted, (x) => [esc(x.label), `<span class="ok">${esc(x.status)}</span>`])}
</table>

<footer>
<p>生成: <code>cd kotoba &amp;&amp; npm run demo</code> —— 実装は <code>kotoba/src/registry.ts</code>、
生成器は <code>kotoba/tools/gen-demo.ts</code>。生成器は、ストアが空・拒否が 0 件・
ロールアップが行の合計と食い違う、のいずれでも書き出さずに終了する。</p>
<p>この repo に live な配備は無い（<a href="../README.md">README</a> の「現在地」）。
数値は模擬値であり、利用者数・売上を主張していない。</p>
</footer>
</main>
</html>
`;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html, "utf8");
console.log(`WROTE\t${OUT}`);
console.log(`ENGINES\t${engines.total}\tPROCUREMENT\t${procurement.total}\tASSEMBLIES\t${assemblies.total}\tTESTS\t${tests.total}`);
console.log(`ACCEPTED\t${accepted.length}\tREFUSED\t${refusals.length}\tPROCUREMENT_JPY\t${cov.totalProcurementJpy}`);
