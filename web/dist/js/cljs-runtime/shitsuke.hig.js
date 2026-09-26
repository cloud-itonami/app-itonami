goog.provide('shitsuke.hig');
/**
 * SF Pro Text stack (HIG text sizes, < 20px). Emitted as `--hig-font-text`.
 */
shitsuke.hig.font_family_text = "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Hiragino Sans\", \"Noto Sans JP\", system-ui, sans-serif";
/**
 * SF Pro Display stack (HIG display sizes, >= 20px). Emitted as
 *   `--hig-font-display`.
 */
shitsuke.hig.font_family_display = "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"Hiragino Sans\", \"Noto Sans JP\", system-ui, sans-serif";
/**
 * Monospace stack (code/pre, `.hig-mono`). Emitted as `--hig-font-mono`.
 */
shitsuke.hig.font_family_mono = "ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, monospace";
/**
 * The 11 Apple text styles, largest first (stable emission/class order).
 */
shitsuke.hig.text_style_order = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"large-title","large-title",700694173),new cljs.core.Keyword(null,"title1","title1",-199250310),new cljs.core.Keyword(null,"title2","title2",1875732837),new cljs.core.Keyword(null,"title3","title3",288262247),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"callout","callout",1420070683),new cljs.core.Keyword(null,"subheadline","subheadline",2056406244),new cljs.core.Keyword(null,"footnote","footnote",-1569223153),new cljs.core.Keyword(null,"caption1","caption1",-564969442),new cljs.core.Keyword(null,"caption2","caption2",1011729414)], null);
/**
 * Apple text styles: px font-size / line-height, HIG default font-weight.
 */
shitsuke.hig.text_styles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"subheadline","subheadline",2056406244),new cljs.core.Keyword(null,"title2","title2",1875732837),new cljs.core.Keyword(null,"caption2","caption2",1011729414),new cljs.core.Keyword(null,"title3","title3",288262247),new cljs.core.Keyword(null,"footnote","footnote",-1569223153),new cljs.core.Keyword(null,"title1","title1",-199250310),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"callout","callout",1420070683),new cljs.core.Keyword(null,"large-title","large-title",700694173),new cljs.core.Keyword(null,"caption1","caption1",-564969442)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"17px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"22px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"20px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"22px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"28px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"13px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"25px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"18px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"28px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"34px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"17px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"22px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"21px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"34px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"41px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null)]);
/**
 * Styles at >= 20px use the SF Pro Display stack; the rest use SF Pro Text.
 */
shitsuke.hig.display_styles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title2","title2",1875732837),null,new cljs.core.Keyword(null,"title3","title3",288262247),null,new cljs.core.Keyword(null,"title1","title1",-199250310),null,new cljs.core.Keyword(null,"large-title","large-title",700694173),null], null), null);
/**
 * The display-scale styles, largest first (stable emission/class order).
 *   These sit ABOVE the 11 Apple text styles: the web analogue of the larger
 *   display styles some Apple platforms add (e.g. visionOS/tvOS extra-large
 *   titles). Opt-in only — `base-css` keeps h1 at :large-title; use the
 *   `.hig-display*` classes (or the `--hig-text-display*-*` vars) explicitly.
 */
shitsuke.hig.display_style_order = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display3","display3",-396309940),new cljs.core.Keyword(null,"display2","display2",1908261093),new cljs.core.Keyword(null,"display1","display1",-1032048578)], null);
/**
 * Display-scale text styles for hero/marketing typography. All weight 700 on
 *   the SF Pro Display stack, with FLUID font sizes so one token works from
 *   phone to desktop without hand-written clamp()s in apps.
 * 
 *   Fluid formula (per style, max size M in px):
 * 
 *  font-size: clamp(5M/8, (5M/64)vw + M/8, M)
 * 
 *   i.e. min = 62.5% of max; the preferred value ramps linearly from min at a
 *   640px viewport to max at a 1120px viewport. Concretely:
 * 
 *  :display3  clamp(40px, 5vw + 8px, 64px)       ; 64/68
 *  :display2  clamp(30px, 3.75vw + 6px, 48px)    ; 48/52
 *  :display1  clamp(25px, 3.125vw + 5px, 40px)   ; 40/44
 * 
 *   Line-height is `calc(1em + 4px)` so it tracks the fluid font-size and
 *   equals the design pairs at max size (68px, 52px, 44px). Letter-spacing
 *   tightens as size grows (display type is tracked tighter):
 *   :display1 -0.01em, :display2 -0.015em, :display3 -0.02em.
 * 
 *   Pure data — values are plain CSS strings; merged into the :hig/text token
 *   group by `default-hig-tokens` (vars emit as `--hig-text-display3-*` etc.).
 */
shitsuke.hig.display_text_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display3","display3",-396309940),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"clamp(40px, 5vw + 8px, 64px)",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"calc(1em + 4px)",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.02em"], null),new cljs.core.Keyword(null,"display2","display2",1908261093),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"clamp(30px, 3.75vw + 6px, 48px)",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"calc(1em + 4px)",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.015em"], null),new cljs.core.Keyword(null,"display1","display1",-1032048578),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"clamp(25px, 3.125vw + 5px, 40px)",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"calc(1em + 4px)",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em"], null)], null);
/**
 * UIKit semantic color tokens: token -> {:light <css-color> :dark <css-color>}.
 *   :tint is the default accent (#007AFF/#0A84FF = systemBlue) — the theme
 *   override point.
 */
shitsuke.hig.semantic_colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"secondary-label","secondary-label",-878314395),new cljs.core.Keyword(null,"tertiary-system-background","tertiary-system-background",349884486),new cljs.core.Keyword(null,"tertiary-label","tertiary-label",-544266746),new cljs.core.Keyword(null,"system-grouped-background","system-grouped-background",484275976),new cljs.core.Keyword(null,"secondary-system-fill","secondary-system-fill",-1787777048),new cljs.core.Keyword(null,"secondary-system-grouped-background","secondary-system-grouped-background",-1449437110),new cljs.core.Keyword(null,"quaternary-system-fill","quaternary-system-fill",-1611780565),new cljs.core.Keyword(null,"secondary-system-background","secondary-system-background",1299279502),new cljs.core.Keyword(null,"tint","tint",-1286736913),new cljs.core.Keyword(null,"opaque-separator","opaque-separator",-6545552),new cljs.core.Keyword(null,"system-fill","system-fill",-239899791),new cljs.core.Keyword(null,"quaternary-label","quaternary-label",-1574526574),new cljs.core.Keyword(null,"system-background","system-background",970043794),new cljs.core.Keyword(null,"tertiary-system-fill","tertiary-system-fill",1413321523),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"placeholder-text","placeholder-text",-1533768392),new cljs.core.Keyword(null,"tertiary-system-grouped-background","tertiary-system-grouped-background",1521943193),new cljs.core.Keyword(null,"separator","separator",-1628749125)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(60,60,67,0.6)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(235,235,245,0.6)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#FFFFFF",new cljs.core.Keyword(null,"dark","dark",1818973999),"#2C2C2E"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(60,60,67,0.3)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(235,235,245,0.3)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#F2F2F7",new cljs.core.Keyword(null,"dark","dark",1818973999),"#000000"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(120,120,128,0.16)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(120,120,128,0.32)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#FFFFFF",new cljs.core.Keyword(null,"dark","dark",1818973999),"#1C1C1E"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(116,116,128,0.08)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(118,118,128,0.18)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#F2F2F7",new cljs.core.Keyword(null,"dark","dark",1818973999),"#1C1C1E"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#007AFF",new cljs.core.Keyword(null,"dark","dark",1818973999),"#0A84FF"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#C6C6C8",new cljs.core.Keyword(null,"dark","dark",1818973999),"#38383A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(120,120,128,0.2)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(120,120,128,0.36)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(60,60,67,0.18)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(235,235,245,0.16)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#FFFFFF",new cljs.core.Keyword(null,"dark","dark",1818973999),"#000000"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(118,118,128,0.12)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(118,118,128,0.24)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#000000",new cljs.core.Keyword(null,"dark","dark",1818973999),"#FFFFFF"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(60,60,67,0.3)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(235,235,245,0.3)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#F2F2F7",new cljs.core.Keyword(null,"dark","dark",1818973999),"#2C2C2E"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(60,60,67,0.36)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(84,84,88,0.65)"], null)]);
/**
 * UIKit system colors: token -> {:light <css-color> :dark <css-color>}.
 */
shitsuke.hig.system_palette = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"gray3","gray3",-617553786),new cljs.core.Keyword(null,"gray4","gray4",460735815),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"mint","mint",-1303049165),new cljs.core.Keyword(null,"gray2","gray2",-1424527469),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"gray6","gray6",-2106469670),new cljs.core.Keyword(null,"gray5","gray5",1481094938),new cljs.core.Keyword(null,"brown","brown",1414854429)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#FF9500",new cljs.core.Keyword(null,"dark","dark",1818973999),"#FF9F0A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#8E8E93",new cljs.core.Keyword(null,"dark","dark",1818973999),"#8E8E93"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#C7C7CC",new cljs.core.Keyword(null,"dark","dark",1818973999),"#48484A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#D1D1D6",new cljs.core.Keyword(null,"dark","dark",1818973999),"#3A3A3C"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#FFCC00",new cljs.core.Keyword(null,"dark","dark",1818973999),"#FFD60A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#34C759",new cljs.core.Keyword(null,"dark","dark",1818973999),"#30D158"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#5856D6",new cljs.core.Keyword(null,"dark","dark",1818973999),"#5E5CE6"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#32ADE6",new cljs.core.Keyword(null,"dark","dark",1818973999),"#64D2FF"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#00C7BE",new cljs.core.Keyword(null,"dark","dark",1818973999),"#63E6E2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#AEAEB2",new cljs.core.Keyword(null,"dark","dark",1818973999),"#636366"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#FF3B30",new cljs.core.Keyword(null,"dark","dark",1818973999),"#FF453A"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#007AFF",new cljs.core.Keyword(null,"dark","dark",1818973999),"#0A84FF"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#FF2D55",new cljs.core.Keyword(null,"dark","dark",1818973999),"#FF375F"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#30B0C7",new cljs.core.Keyword(null,"dark","dark",1818973999),"#40CBE0"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#AF52DE",new cljs.core.Keyword(null,"dark","dark",1818973999),"#BF5AF2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#F2F2F7",new cljs.core.Keyword(null,"dark","dark",1818973999),"#1C1C1E"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#E5E5EA",new cljs.core.Keyword(null,"dark","dark",1818973999),"#2C2C2E"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),"#A2845E",new cljs.core.Keyword(null,"dark","dark",1818973999),"#AC8E68"], null)]);
/**
 * {token {:light l :dark d}} -> {token <value for side>}.
 */
shitsuke.hig.pick_appearance = (function shitsuke$hig$pick_appearance(m,side){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__23157){
var vec__23158 = p__23157;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23158,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,side)], null);
})),m);
});
/**
 * The HIG token set, light appearance. One map:
 *   {:hig/font {...} :hig/text {...} :hig/color {...} :hig/palette {...}
 * :hig/spacing {...} :hig/radius {...} :hig/hairline "0.5px"}
 * 
 *   :hig/font is the three font stacks as first-class tokens
 *   (--hig-font-text / --hig-font-display / --hig-font-mono); the per-style
 *   :hig/text font-family values reference them via var(), so overriding a
 *   stack in one place re-fonts every style that uses it.
 */
shitsuke.hig.default_hig_tokens = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("hig","font","hig/font",-1506004751),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),shitsuke.hig.font_family_text,new cljs.core.Keyword(null,"display","display",242065432),shitsuke.hig.font_family_display,new cljs.core.Keyword(null,"mono","mono",-1777958350),shitsuke.hig.font_family_mono], null),new cljs.core.Keyword("hig","text","hig/text",-1790736923),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__23161){
var vec__23162 = p__23161;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23162,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23162,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [style,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"font-family","font-family",-667419874),((cljs.core.contains_QMARK_(shitsuke.hig.display_styles,style))?"var(--hig-font-display)":"var(--hig-font-text)"))], null);
})),shitsuke.hig.text_styles),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__23165){
var vec__23166 = p__23165;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [style,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"font-family","font-family",-667419874),"var(--hig-font-display)")], null);
})),shitsuke.hig.display_text_styles),new cljs.core.Keyword("hig","color","hig/color",1011770543),shitsuke.hig.pick_appearance(shitsuke.hig.semantic_colors,new cljs.core.Keyword(null,"light","light",1918998747)),new cljs.core.Keyword("hig","palette","hig/palette",-456392793),shitsuke.hig.pick_appearance(shitsuke.hig.system_palette,new cljs.core.Keyword(null,"light","light",1918998747)),new cljs.core.Keyword("hig","spacing","hig/spacing",204262309),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"10","10",-333527256),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"6","6",-1107752709),new cljs.core.Keyword(null,"content-margin","content-margin",1900526365)],["64px","16px","32px","4px","40px","48px","8px","20px","12px","24px","16px"]),new cljs.core.Keyword("hig","radius","hig/radius",-2073221464),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xs","xs",649443341),"6px",new cljs.core.Keyword(null,"sm","sm",-1402575065),"10px",new cljs.core.Keyword(null,"md","md",707286655),"14px",new cljs.core.Keyword(null,"lg","lg",-80787836),"20px",new cljs.core.Keyword(null,"xl","xl",-1689552936),"28px",new cljs.core.Keyword(null,"capsule","capsule",-798292454),"999px"], null),new cljs.core.Keyword("hig","hairline","hig/hairline",-1981222672),"0.5px"], null);
/**
 * Partial override map: the dark-appearance color/palette values.
 */
shitsuke.hig.dark_hig_tokens = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hig","color","hig/color",1011770543),shitsuke.hig.pick_appearance(shitsuke.hig.semantic_colors,new cljs.core.Keyword(null,"dark","dark",1818973999)),new cljs.core.Keyword("hig","palette","hig/palette",-456392793),shitsuke.hig.pick_appearance(shitsuke.hig.system_palette,new cljs.core.Keyword(null,"dark","dark",1818973999))], null);
/**
 * default-hig-tokens deep-merged with overrides (a partial map of the same
 *   shape).
 */
shitsuke.hig.resolve_hig_tokens = (function shitsuke$hig$resolve_hig_tokens(var_args){
var G__23171 = arguments.length;
switch (G__23171) {
case 0:
return shitsuke.hig.resolve_hig_tokens.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.hig.resolve_hig_tokens.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.resolve_hig_tokens.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.hig.resolve_hig_tokens.cljs$core$IFn$_invoke$arity$1(null);
}));

(shitsuke.hig.resolve_hig_tokens.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
return shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shitsuke.hig.default_hig_tokens,overrides], 0));
}));

(shitsuke.hig.resolve_hig_tokens.cljs$lang$maxFixedArity = 1);

/**
 * default-hig-tokens deep-merged with dark-hig-tokens, then overrides.
 */
shitsuke.hig.resolve_dark_hig_tokens = (function shitsuke$hig$resolve_dark_hig_tokens(var_args){
var G__23176 = arguments.length;
switch (G__23176) {
case 0:
return shitsuke.hig.resolve_dark_hig_tokens.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.hig.resolve_dark_hig_tokens.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.resolve_dark_hig_tokens.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.hig.resolve_dark_hig_tokens.cljs$core$IFn$_invoke$arity$1(null);
}));

(shitsuke.hig.resolve_dark_hig_tokens.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
return shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shitsuke.hig.default_hig_tokens,shitsuke.hig.dark_hig_tokens,overrides], 0));
}));

(shitsuke.hig.resolve_dark_hig_tokens.cljs$lang$maxFixedArity = 1);

shitsuke.hig.css_var_name = (function shitsuke$hig$css_var_name(group,k){
return ["--hig-",cljs.core.name(group),"-",cljs.core.name(k)].join('');
});
/**
 * One `--hig-...: value;` line for a scalar; nested maps (text styles) expand
 *   per-prop (`--hig-text-body-font-size`).
 */
shitsuke.hig.pair__GT_css = (function shitsuke$hig$pair__GT_css(group,k,v){
if(cljs.core.map_QMARK_(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = (function shitsuke$hig$pair__GT_css_$_iter__23189(s__23191){
return (new cljs.core.LazySeq(null,(function (){
var s__23191__$1 = s__23191;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23191__$1);
if(temp__5825__auto__){
var s__23191__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23191__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23191__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23193 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23192 = (0);
while(true){
if((i__23192 < size__5479__auto__)){
var vec__23198 = cljs.core._nth(c__5478__auto__,i__23192);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23198,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23198,(1),null);
cljs.core.chunk_append(b__23193,["  ",shitsuke.hig.css_var_name(group,k),"-",cljs.core.name(pk),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pv),";"].join(''));

var G__23400 = (i__23192 + (1));
i__23192 = G__23400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23193),shitsuke$hig$pair__GT_css_$_iter__23189(cljs.core.chunk_rest(s__23191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23193),null);
}
} else {
var vec__23202 = cljs.core.first(s__23191__$2);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23202,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23202,(1),null);
return cljs.core.cons(["  ",shitsuke.hig.css_var_name(group,k),"-",cljs.core.name(pk),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pv),";"].join(''),shitsuke$hig$pair__GT_css_$_iter__23189(cljs.core.rest(s__23191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(v);
})());
} else {
return ["  ",shitsuke.hig.css_var_name(group,k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}
});
/**
 * All `--hig-*` declaration lines for a token map. A scalar group value
 *   (e.g. :hig/hairline) emits a single `--hig-<group>` var.
 */
shitsuke.hig.tokens__GT_css_lines = (function shitsuke$hig$tokens__GT_css_lines(tokens){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = (function shitsuke$hig$tokens__GT_css_lines_$_iter__23210(s__23211){
return (new cljs.core.LazySeq(null,(function (){
var s__23211__$1 = s__23211;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23211__$1);
if(temp__5825__auto__){
var s__23211__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23211__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23211__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23213 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23212 = (0);
while(true){
if((i__23212 < size__5479__auto__)){
var vec__23214 = cljs.core._nth(c__5478__auto__,i__23212);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23214,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23214,(1),null);
if((!((m == null)))){
cljs.core.chunk_append(b__23213,((cljs.core.map_QMARK_(m))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = ((function (i__23212,s__23211__$1,vec__23214,group,m,c__5478__auto__,size__5479__auto__,b__23213,s__23211__$2,temp__5825__auto__){
return (function shitsuke$hig$tokens__GT_css_lines_$_iter__23210_$_iter__23217(s__23218){
return (new cljs.core.LazySeq(null,((function (i__23212,s__23211__$1,vec__23214,group,m,c__5478__auto__,size__5479__auto__,b__23213,s__23211__$2,temp__5825__auto__){
return (function (){
var s__23218__$1 = s__23218;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__23218__$1);
if(temp__5825__auto____$1){
var s__23218__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23218__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__23218__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__23220 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__23219 = (0);
while(true){
if((i__23219 < size__5479__auto____$1)){
var vec__23222 = cljs.core._nth(c__5478__auto____$1,i__23219);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23222,(1),null);
if((!((v == null)))){
cljs.core.chunk_append(b__23220,shitsuke.hig.pair__GT_css(group,k,v));

var G__23416 = (i__23219 + (1));
i__23219 = G__23416;
continue;
} else {
var G__23417 = (i__23219 + (1));
i__23219 = G__23417;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23220),shitsuke$hig$tokens__GT_css_lines_$_iter__23210_$_iter__23217(cljs.core.chunk_rest(s__23218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23220),null);
}
} else {
var vec__23226 = cljs.core.first(s__23218__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23226,(1),null);
if((!((v == null)))){
return cljs.core.cons(shitsuke.hig.pair__GT_css(group,k,v),shitsuke$hig$tokens__GT_css_lines_$_iter__23210_$_iter__23217(cljs.core.rest(s__23218__$2)));
} else {
var G__23419 = cljs.core.rest(s__23218__$2);
s__23218__$1 = G__23419;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__23212,s__23211__$1,vec__23214,group,m,c__5478__auto__,size__5479__auto__,b__23213,s__23211__$2,temp__5825__auto__))
,null,null));
});})(i__23212,s__23211__$1,vec__23214,group,m,c__5478__auto__,size__5479__auto__,b__23213,s__23211__$2,temp__5825__auto__))
;
return iter__5480__auto__(m);
})()):["  --hig-",cljs.core.name(group),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m),";"].join('')));

var G__23423 = (i__23212 + (1));
i__23212 = G__23423;
continue;
} else {
var G__23424 = (i__23212 + (1));
i__23212 = G__23424;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23213),shitsuke$hig$tokens__GT_css_lines_$_iter__23210(cljs.core.chunk_rest(s__23211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23213),null);
}
} else {
var vec__23231 = cljs.core.first(s__23211__$2);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23231,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23231,(1),null);
if((!((m == null)))){
return cljs.core.cons(((cljs.core.map_QMARK_(m))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = ((function (s__23211__$1,vec__23231,group,m,s__23211__$2,temp__5825__auto__){
return (function shitsuke$hig$tokens__GT_css_lines_$_iter__23210_$_iter__23234(s__23235){
return (new cljs.core.LazySeq(null,((function (s__23211__$1,vec__23231,group,m,s__23211__$2,temp__5825__auto__){
return (function (){
var s__23235__$1 = s__23235;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__23235__$1);
if(temp__5825__auto____$1){
var s__23235__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23235__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23235__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23237 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23236 = (0);
while(true){
if((i__23236 < size__5479__auto__)){
var vec__23254 = cljs.core._nth(c__5478__auto__,i__23236);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23254,(1),null);
if((!((v == null)))){
cljs.core.chunk_append(b__23237,shitsuke.hig.pair__GT_css(group,k,v));

var G__23427 = (i__23236 + (1));
i__23236 = G__23427;
continue;
} else {
var G__23428 = (i__23236 + (1));
i__23236 = G__23428;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23237),shitsuke$hig$tokens__GT_css_lines_$_iter__23210_$_iter__23234(cljs.core.chunk_rest(s__23235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23237),null);
}
} else {
var vec__23261 = cljs.core.first(s__23235__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23261,(1),null);
if((!((v == null)))){
return cljs.core.cons(shitsuke.hig.pair__GT_css(group,k,v),shitsuke$hig$tokens__GT_css_lines_$_iter__23210_$_iter__23234(cljs.core.rest(s__23235__$2)));
} else {
var G__23430 = cljs.core.rest(s__23235__$2);
s__23235__$1 = G__23430;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23211__$1,vec__23231,group,m,s__23211__$2,temp__5825__auto__))
,null,null));
});})(s__23211__$1,vec__23231,group,m,s__23211__$2,temp__5825__auto__))
;
return iter__5480__auto__(m);
})()):["  --hig-",cljs.core.name(group),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m),";"].join('')),shitsuke$hig$tokens__GT_css_lines_$_iter__23210(cljs.core.rest(s__23211__$2)));
} else {
var G__23431 = cljs.core.rest(s__23211__$2);
s__23211__$1 = G__23431;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tokens);
})());
});
/**
 * Emit `:root { --hig-...: ...; }` (light appearance) from tokens
 *   (default-hig-tokens merged with overrides).
 */
shitsuke.hig.css_variables = (function shitsuke$hig$css_variables(var_args){
var G__23273 = arguments.length;
switch (G__23273) {
case 0:
return shitsuke.hig.css_variables.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.hig.css_variables.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.css_variables.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.hig.css_variables.cljs$core$IFn$_invoke$arity$1(null);
}));

(shitsuke.hig.css_variables.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
return [":root {\n",shitsuke.hig.tokens__GT_css_lines(shitsuke.hig.resolve_hig_tokens.cljs$core$IFn$_invoke$arity$1(overrides)),"\n}"].join('');
}));

(shitsuke.hig.css_variables.cljs$lang$maxFixedArity = 1);

shitsuke.hig.appearance_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hig","color","hig/color",1011770543),new cljs.core.Keyword("hig","palette","hig/palette",-456392793)], null);
/**
 * Dark-appearance var blocks, three ways:
 *   1. `@media (prefers-color-scheme: dark) { :root {...} }` — OS preference.
 *   2. `:root[data-appearance="dark"] {...}` — page forces dark via attribute.
 *   3. `:root[data-appearance="light"] {...}` — resets to light values, so a
 *   forced light attribute wins over the dark media query (the attribute
 *   selector out-specifies the bare `:root` inside the media query).
 * 
 *   2-arity `(dark-css-variables overrides dark-overrides)`: `overrides` shapes
 *   the forced-light reset (same map as `css-variables`), `dark-overrides` the
 *   dark values. 1-arity treats the argument as dark-overrides.
 */
shitsuke.hig.dark_css_variables = (function shitsuke$hig$dark_css_variables(var_args){
var G__23279 = arguments.length;
switch (G__23279) {
case 0:
return shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$1 = (function (dark_overrides){
return shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$2(null,dark_overrides);
}));

(shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$2 = (function (overrides,dark_overrides){
var dark = cljs.core.select_keys(shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shitsuke.hig.dark_hig_tokens,dark_overrides], 0)),shitsuke.hig.appearance_groups);
var light = cljs.core.select_keys(shitsuke.hig.resolve_hig_tokens.cljs$core$IFn$_invoke$arity$1(overrides),shitsuke.hig.appearance_groups);
var dark_body = shitsuke.hig.tokens__GT_css_lines(dark);
var light_body = shitsuke.hig.tokens__GT_css_lines(light);
return ["@media (prefers-color-scheme: dark) {\n",":root {\n",dark_body,"\n}\n","}\n",":root[data-appearance=\"dark\"] {\n",dark_body,"\n}\n",":root[data-appearance=\"light\"] {\n",light_body,"\n}"].join('');
}));

(shitsuke.hig.dark_css_variables.cljs$lang$maxFixedArity = 2);

/**
 * Cascade-layer order declaration. kotoba.hig is this base layer;
 *   kotoba.glass is filled by liquid-glass-ui; app CSS stays unlayered so it
 *   always beats both layers. Emit this FIRST (before any @layer block).
 */
shitsuke.hig.layer_order_css = "@layer kotoba.hig, kotoba.glass;";
/**
 * CSS declarations that apply one text style via its `--hig-text-*` vars.
 *   `weight` (optional) overrides the token font-weight (headings).
 */
shitsuke.hig.text_style_props = (function shitsuke$hig$text_style_props(var_args){
var G__23286 = arguments.length;
switch (G__23286) {
case 1:
return shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$1 = (function (style){
return shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$2(style,null);
}));

(shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$2 = (function (style,weight){
var n = cljs.core.name(style);
return ["  font-family: var(--hig-text-",n,"-font-family);\n","  font-size: var(--hig-text-",n,"-font-size);\n","  line-height: var(--hig-text-",n,"-line-height);\n","  font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = weight;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ["var(--hig-text-",n,"-font-weight)"].join('');
}
})()),";\n","  letter-spacing: var(--hig-text-",n,"-letter-spacing, normal);"].join('');
}));

(shitsuke.hig.text_style_props.cljs$lang$maxFixedArity = 2);

/**
 * Element-level defaults wrapped in `@layer kotoba.hig { ... }`. Everything
 *   references `--hig-*` vars, so appearance/overrides flow in via
 *   css-variables / dark-css-variables; margins sit on the 4pt grid.
 */
shitsuke.hig.base_css = (function shitsuke$hig$base_css(var_args){
var G__23296 = arguments.length;
switch (G__23296) {
case 0:
return shitsuke.hig.base_css.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.hig.base_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.base_css.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.hig.base_css.cljs$core$IFn$_invoke$arity$1(null);
}));

(shitsuke.hig.base_css.cljs$core$IFn$_invoke$arity$1 = (function (_overrides){
return ["@layer kotoba.hig {\n",":root { color-scheme: light dark; }\n",":root[data-appearance=\"dark\"] { color-scheme: dark; }\n",":root[data-appearance=\"light\"] { color-scheme: light; }\n","body {\n","  margin: 0;\n","  background: var(--hig-color-system-background);\n","  color: var(--hig-color-label);\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669))),"\n","  -webkit-font-smoothing: antialiased;\n","  text-rendering: optimizeLegibility;\n","}\n","h1 {\n",shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"large-title","large-title",700694173),(700)),"\n  margin: 0 0 12px;\n}\n","h2 {\n",shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title1","title1",-199250310),(700)),"\n  margin: 0 0 12px;\n}\n","h3 {\n",shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title2","title2",1875732837),(600)),"\n  margin: 0 0 8px;\n}\n","h4 {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"headline","headline",-157157727))),"\n  margin: 0 0 8px;\n}\n","p, ul, ol {\n  margin: 0 0 16px;\n}\n","small {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"footnote","footnote",-1569223153))),"\n}\n","code, pre {\n","  font-family: var(--hig-font-mono);\n","  font-size: var(--hig-text-footnote-font-size);\n","  background: var(--hig-color-secondary-system-background);\n","  border-radius: var(--hig-radius-xs);\n","  padding: 2px 5px;\n","}\n","a {\n","  color: var(--hig-color-tint);\n","  text-decoration: none;\n","}\n","a:hover {\n","  text-decoration: underline;\n","}\n","hr {\n","  border: none;\n","  border-top: var(--hig-hairline) solid var(--hig-color-separator);\n","}\n","::selection {\n","  background: color-mix(in srgb, var(--hig-color-tint) 25%, transparent);\n","}\n",":focus-visible {\n","  outline: 2px solid var(--hig-color-tint);\n","  outline-offset: 2px;\n","}\n","@media (prefers-reduced-motion: reduce) {\n","  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }\n","}\n","}"].join('');
}));

(shitsuke.hig.base_css.cljs$lang$maxFixedArity = 1);

/**
 * Utility class rules `.hig-display3` ... `.hig-display1` (fluid display
 *   scale, opt-in — base-css keeps h1 at :large-title) and `.hig-large-title`
 *   ... `.hig-caption2` (one per Apple text style) plus `.hig-mono` (mono stack
 *   + footnote size, the code/pre typography treatment), inside
 *   `@layer kotoba.hig`.
 */
shitsuke.hig.text_style_classes = ["@layer kotoba.hig {\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = (function shitsuke$hig$iter__23311(s__23312){
return (new cljs.core.LazySeq(null,(function (){
var s__23312__$1 = s__23312;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23312__$1);
if(temp__5825__auto__){
var s__23312__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23312__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23312__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23314 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23313 = (0);
while(true){
if((i__23313 < size__5479__auto__)){
var style = cljs.core._nth(c__5478__auto__,i__23313);
cljs.core.chunk_append(b__23314,[".hig-",cljs.core.name(style)," {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$1(style)),"\n}"].join(''));

var G__23475 = (i__23313 + (1));
i__23313 = G__23475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23314),shitsuke$hig$iter__23311(cljs.core.chunk_rest(s__23312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23314),null);
}
} else {
var style = cljs.core.first(s__23312__$2);
return cljs.core.cons([".hig-",cljs.core.name(style)," {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shitsuke.hig.text_style_props.cljs$core$IFn$_invoke$arity$1(style)),"\n}"].join(''),shitsuke$hig$iter__23311(cljs.core.rest(s__23312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(shitsuke.hig.display_style_order,shitsuke.hig.text_style_order));
})()),"\n.hig-mono {\n","  font-family: var(--hig-font-mono);\n","  font-size: var(--hig-text-footnote-font-size);\n","}","\n}"].join('');
/**
 * The full HIG CSS bundle in correct order: layer-order declaration, then
 *   `--hig-*` vars (light + dark, layered), then element base CSS, then the
 *   text-style utility classes.
 */
shitsuke.hig.hig_css = (function shitsuke$hig$hig_css(var_args){
var G__23331 = arguments.length;
switch (G__23331) {
case 0:
return shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
return shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$2(overrides,null);
}));

(shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$2 = (function (overrides,dark_overrides){
return [shitsuke.hig.layer_order_css,"\n","@layer kotoba.hig {\n",shitsuke.hig.css_variables.cljs$core$IFn$_invoke$arity$1(overrides),"\n",shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$2(overrides,dark_overrides),"\n","}\n",shitsuke.hig.base_css.cljs$core$IFn$_invoke$arity$1(overrides),"\n",shitsuke.hig.text_style_classes].join('');
}));

(shitsuke.hig.hig_css.cljs$lang$maxFixedArity = 2);

/**
 * Wrap a CSS string (default: the full hig-css bundle) in a <style> tag for
 *   inline SSR embedding (mirrors shitsuke.style/inline-style).
 */
shitsuke.hig.inline_style = (function shitsuke$hig$inline_style(var_args){
var G__23338 = arguments.length;
switch (G__23338) {
case 0:
return shitsuke.hig.inline_style.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.hig.inline_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.inline_style.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.hig.inline_style.cljs$core$IFn$_invoke$arity$1(shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$0());
}));

(shitsuke.hig.inline_style.cljs$core$IFn$_invoke$arity$1 = (function (css__$1){
return ["<style>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(css__$1),"\n</style>"].join('');
}));

(shitsuke.hig.inline_style.cljs$lang$maxFixedArity = 1);

/**
 * Hiccup form of inline-style: [:style [:hiccup/raw css]] (raw so the CSS is
 *   not escaped by shitsuke.hiccup/->html).
 */
shitsuke.hig.inline_style_hiccup = (function shitsuke$hig$inline_style_hiccup(var_args){
var G__23340 = arguments.length;
switch (G__23340) {
case 0:
return shitsuke.hig.inline_style_hiccup.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.hig.inline_style_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.hig.inline_style_hiccup.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.hig.inline_style_hiccup.cljs$core$IFn$_invoke$arity$1(shitsuke.hig.hig_css.cljs$core$IFn$_invoke$arity$0());
}));

(shitsuke.hig.inline_style_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (css__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),css__$1], null)], null);
}));

(shitsuke.hig.inline_style_hiccup.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=shitsuke.hig.js.map
