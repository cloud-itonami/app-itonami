goog.provide('liquid_glass.tokens');
/**
 * Generate a CSS `linear(...)` easing string approximating a damped spring.
 * 
 *   CSS has no native spring timing function; `linear()` (a piecewise-linear
 *   easing, Chrome 113+/Safari 17.2+/Firefox 112+) can approximate one from
 *   sampled points. This is a pure fn so the curve is *generated*, not a magic
 *   string: it samples the classic under-damped spring step response
 * 
 *    x(t) = 1 - e^(-ζωt) (cos(ω_d t) + (ζω/ω_d) sin(ω_d t)),  ω_d = ω√(1-ζ²)
 * 
 *   at `samples` evenly-spaced points over the normalized duration t ∈ [0,1]
 *   (evenly-spaced linear() stops need no percentage suffixes). Defaults
 *   (ζ=0.55, ω=13, 16 points) give one visible overshoot to ~1.12 that settles
 *   back to 1 — the "press releases and the glass bounces once" feel. The
 *   emitted literal lands in `default-tokens` under `[:liquid-glass/motion
 *   :spring :easing]` (→ `--liquid-glass-motion-spring-easing`); engines without
 *   linear() keep the cubic-bezier fallback via the @supports structure in
 *   liquid-glass.style. Portable .cljc (Math/* works on both hosts); rounding is
 *   done without `format` so it stays cljs/babashka-safe.
 */
liquid_glass.tokens.spring_linear_easing = (function liquid_glass$tokens$spring_linear_easing(var_args){
var G__22098 = arguments.length;
switch (G__22098) {
case 0:
return liquid_glass.tokens.spring_linear_easing.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.tokens.spring_linear_easing.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.tokens.spring_linear_easing.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.tokens.spring_linear_easing.cljs$core$IFn$_invoke$arity$1(null);
}));

(liquid_glass.tokens.spring_linear_easing.cljs$core$IFn$_invoke$arity$1 = (function (p__22102){
var map__22103 = p__22102;
var map__22103__$1 = cljs.core.__destructure_map(map__22103);
var zeta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22103__$1,new cljs.core.Keyword(null,"zeta","zeta",257464678),0.55);
var omega = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22103__$1,new cljs.core.Keyword(null,"omega","omega",277265652),13.0);
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22103__$1,new cljs.core.Keyword(null,"samples","samples",635504833),(16));
var wd = (omega * Math.sqrt((1.0 - (zeta * zeta))));
var pos = (function (t){
return (1.0 - (Math.exp((- ((zeta * omega) * t))) * (Math.cos((wd * t)) + (((zeta * omega) / wd) * Math.sin((wd * t))))));
});
var fmt = (function (v){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((Math.round((v * 1000.0)) / 1000.0));
});
return ["linear(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",(function (){var iter__5480__auto__ = (function liquid_glass$tokens$iter__22117(s__22118){
return (new cljs.core.LazySeq(null,(function (){
var s__22118__$1 = s__22118;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22118__$1);
if(temp__5825__auto__){
var s__22118__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22118__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22118__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22120 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22119 = (0);
while(true){
if((i__22119 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__22119);
cljs.core.chunk_append(b__22120,fmt(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(samples - (1))))?1.0:pos((i / (samples - (1)))))));

var G__22184 = (i__22119 + (1));
i__22119 = G__22184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22120),liquid_glass$tokens$iter__22117(cljs.core.chunk_rest(s__22118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22120),null);
}
} else {
var i = cljs.core.first(s__22118__$2);
return cljs.core.cons(fmt(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(samples - (1))))?1.0:pos((i / (samples - (1)))))),liquid_glass$tokens$iter__22117(cljs.core.rest(s__22118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(samples));
})()),")"].join('');
}));

(liquid_glass.tokens.spring_linear_easing.cljs$lang$maxFixedArity = 1);

/**
 * v1 light-scheme material. `:clear` (barely-there — sheet scrims, tooltips),
 *   `:regular` (the default control surface), `:thick` (toolbars/sheets that sit
 *   over busy content and need more optical separation).
 */
liquid_glass.tokens.default_tokens = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("liquid-glass","surface","liquid-glass/surface",-1503374377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blur","blur",-453500461),"12px",new cljs.core.Keyword(null,"saturate","saturate",-931011338),"160%",new cljs.core.Keyword(null,"tint","tint",-1286736913),"rgba(255,255,255,0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"rgba(255,255,255,0.22)"], null),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blur","blur",-453500461),"20px",new cljs.core.Keyword(null,"saturate","saturate",-931011338),"180%",new cljs.core.Keyword(null,"tint","tint",-1286736913),"rgba(255,255,255,0.14)",new cljs.core.Keyword(null,"border","border",1444987323),"rgba(255,255,255,0.35)"], null),new cljs.core.Keyword(null,"thick","thick",-1141078578),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blur","blur",-453500461),"32px",new cljs.core.Keyword(null,"saturate","saturate",-931011338),"200%",new cljs.core.Keyword(null,"tint","tint",-1286736913),"rgba(255,255,255,0.22)",new cljs.core.Keyword(null,"border","border",1444987323),"rgba(255,255,255,0.45)"], null)], null),new cljs.core.Keyword("liquid-glass","elevation","liquid-glass/elevation",530489583),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow","shadow",873231803),"none"], null),new cljs.core.Keyword(null,"raised","raised",1890794098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow","shadow",873231803),"0 1px 2px rgba(0,0,0,.12), 0 4px 10px rgba(0,0,0,.10)"], null),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow","shadow",873231803),"0 8px 24px rgba(0,0,0,.18), 0 2px 6px rgba(0,0,0,.12)"], null),new cljs.core.Keyword(null,"floating","floating",-1978091029),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow","shadow",873231803),"0 20px 48px rgba(0,0,0,.28), 0 6px 16px rgba(0,0,0,.16)"], null)], null),new cljs.core.Keyword("liquid-glass","specular","liquid-glass/specular",-683100803),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.55"], null),new cljs.core.Keyword(null,"rim","rim",-267368855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-opacity","top-opacity",2000896567),"0.9",new cljs.core.Keyword(null,"bottom-opacity","bottom-opacity",131751078),"0.05"], null),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5",new cljs.core.Keyword(null,"size","size",1098693007),"160px"], null)], null),new cljs.core.Keyword("liquid-glass","radius","liquid-glass/radius",76223033),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sm","sm",-1402575065),"10px",new cljs.core.Keyword(null,"md","md",707286655),"16px",new cljs.core.Keyword(null,"lg","lg",-80787836),"24px",new cljs.core.Keyword(null,"pill","pill",-37707000),"999px"], null),new cljs.core.Keyword("liquid-glass","motion","liquid-glass/motion",-2125366884),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"press","press",-1963096513),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"duration","duration",1444101068),"120ms",new cljs.core.Keyword(null,"easing","easing",735372043),"cubic-bezier(.32,.72,0,1)",new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),"1.02",new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),".95"], null),new cljs.core.Keyword(null,"settle","settle",-114502371),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),"420ms",new cljs.core.Keyword(null,"easing","easing",735372043),"cubic-bezier(.22,1,.36,1)"], null),new cljs.core.Keyword(null,"overlay-enter","overlay-enter",558013660),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"duration","duration",1444101068),"300ms",new cljs.core.Keyword(null,"easing","easing",735372043),"cubic-bezier(.05,.7,.1,1)",new cljs.core.Keyword(null,"distance","distance",-1671893894),"12px",new cljs.core.Keyword(null,"scale","scale",-230427353),".98",new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),".9"], null),new cljs.core.Keyword(null,"overlay-exit","overlay-exit",2083126003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),"200ms",new cljs.core.Keyword(null,"easing","easing",735372043),"cubic-bezier(.3,0,.8,.15)"], null),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),"500ms",new cljs.core.Keyword(null,"easing","easing",735372043),liquid_glass.tokens.spring_linear_easing.cljs$core$IFn$_invoke$arity$0()], null)], null),new cljs.core.Keyword("liquid-glass","accent","liquid-glass/accent",356924369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tint","tint",-1286736913),"rgba(10,132,255,0.55)",new cljs.core.Keyword(null,"tint-strong","tint-strong",1566273473),"rgba(10,132,255,0.85)"], null),new cljs.core.Keyword("liquid-glass","lens","liquid-glass/lens",-450169446),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frequency","frequency",-1408891382),"0.008",new cljs.core.Keyword(null,"scale","scale",-230427353),"8",new cljs.core.Keyword(null,"octaves","octaves",955457820),"2"], null),new cljs.core.Keyword("liquid-glass","ink","liquid-glass/ink",-395056073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),"#1c1c1e",new cljs.core.Keyword(null,"shadow","shadow",873231803),"0 1px 2px rgba(255,255,255,.4)"], null)], null);
/**
 * Partial override applied inside `@media (prefers-color-scheme: dark)`. Only
 *   the entries a dark background actually changes — blur/saturate/radius/motion
 *   are scheme-independent so they are omitted here (default-tokens values carry
 *   through unchanged).
 */
liquid_glass.tokens.dark_tokens = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("liquid-glass","surface","liquid-glass/surface",-1503374377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tint","tint",-1286736913),"rgba(18,18,22,0.30)",new cljs.core.Keyword(null,"border","border",1444987323),"rgba(255,255,255,0.08)"], null),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tint","tint",-1286736913),"rgba(20,20,24,0.42)",new cljs.core.Keyword(null,"border","border",1444987323),"rgba(255,255,255,0.12)"], null),new cljs.core.Keyword(null,"thick","thick",-1141078578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tint","tint",-1286736913),"rgba(16,16,20,0.58)",new cljs.core.Keyword(null,"border","border",1444987323),"rgba(255,255,255,0.16)"], null)], null),new cljs.core.Keyword("liquid-glass","specular","liquid-glass/specular",-683100803),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.30"], null),new cljs.core.Keyword(null,"rim","rim",-267368855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-opacity","top-opacity",2000896567),"0.5",new cljs.core.Keyword(null,"bottom-opacity","bottom-opacity",131751078),"0.02"], null),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.28"], null)], null),new cljs.core.Keyword("liquid-glass","ink","liquid-glass/ink",-395056073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),"#f5f5f7",new cljs.core.Keyword(null,"shadow","shadow",873231803),"0 1px 3px rgba(0,0,0,.45)"], null)], null);
/**
 * Re-exported from shitsuke.tokens: right-biased recursive merge for token maps.
 */
liquid_glass.tokens.deep_merge = shitsuke.tokens.deep_merge;
/**
 * default-tokens deep-merged with overrides (a partial token map of the same shape).
 */
liquid_glass.tokens.resolve_tokens = (function liquid_glass$tokens$resolve_tokens(overrides){
return (liquid_glass.tokens.deep_merge.cljs$core$IFn$_invoke$arity$2 ? liquid_glass.tokens.deep_merge.cljs$core$IFn$_invoke$arity$2(liquid_glass.tokens.default_tokens,overrides) : liquid_glass.tokens.deep_merge.call(null, liquid_glass.tokens.default_tokens,overrides));
});
/**
 * dark-tokens deep-merged with dark-overrides (a partial token map, same shape
 *   as dark-tokens — i.e. only the scheme-sensitive groups).
 */
liquid_glass.tokens.resolve_dark_tokens = (function liquid_glass$tokens$resolve_dark_tokens(dark_overrides){
return (liquid_glass.tokens.deep_merge.cljs$core$IFn$_invoke$arity$2 ? liquid_glass.tokens.deep_merge.cljs$core$IFn$_invoke$arity$2(liquid_glass.tokens.dark_tokens,dark_overrides) : liquid_glass.tokens.deep_merge.call(null, liquid_glass.tokens.dark_tokens,dark_overrides));
});
liquid_glass.tokens.css_var_name = (function liquid_glass$tokens$css_var_name(group,k){
return ["--liquid-glass-",cljs.core.name(group),"-",cljs.core.name(k)].join('');
});
liquid_glass.tokens.pair__GT_css = (function liquid_glass$tokens$pair__GT_css(group,k,v){
if(cljs.core.map_QMARK_(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = (function liquid_glass$tokens$pair__GT_css_$_iter__22137(s__22138){
return (new cljs.core.LazySeq(null,(function (){
var s__22138__$1 = s__22138;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22138__$1);
if(temp__5825__auto__){
var s__22138__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22138__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22138__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22140 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22139 = (0);
while(true){
if((i__22139 < size__5479__auto__)){
var vec__22144 = cljs.core._nth(c__5478__auto__,i__22139);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22144,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22144,(1),null);
cljs.core.chunk_append(b__22140,["  ",liquid_glass.tokens.css_var_name(group,k),"-",cljs.core.name(pk),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pv),";"].join(''));

var G__22191 = (i__22139 + (1));
i__22139 = G__22191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22140),liquid_glass$tokens$pair__GT_css_$_iter__22137(cljs.core.chunk_rest(s__22138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22140),null);
}
} else {
var vec__22149 = cljs.core.first(s__22138__$2);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(1),null);
return cljs.core.cons(["  ",liquid_glass.tokens.css_var_name(group,k),"-",cljs.core.name(pk),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pv),";"].join(''),liquid_glass$tokens$pair__GT_css_$_iter__22137(cljs.core.rest(s__22138__$2)));
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
return ["  ",liquid_glass.tokens.css_var_name(group,k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');

}
});
liquid_glass.tokens.tokens__GT_body = (function liquid_glass$tokens$tokens__GT_body(tokens){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = (function liquid_glass$tokens$tokens__GT_body_$_iter__22153(s__22154){
return (new cljs.core.LazySeq(null,(function (){
var s__22154__$1 = s__22154;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22154__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__22159 = cljs.core.first(xs__6385__auto__);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22159,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22159,(1),null);
var iterys__5476__auto__ = ((function (s__22154__$1,vec__22159,group,m,xs__6385__auto__,temp__5825__auto__){
return (function liquid_glass$tokens$tokens__GT_body_$_iter__22153_$_iter__22155(s__22156){
return (new cljs.core.LazySeq(null,((function (s__22154__$1,vec__22159,group,m,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__22156__$1 = s__22156;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22156__$1);
if(temp__5825__auto____$1){
var s__22156__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22156__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22156__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22158 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22157 = (0);
while(true){
if((i__22157 < size__5479__auto__)){
var vec__22166 = cljs.core._nth(c__5478__auto__,i__22157);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22166,(1),null);
if((!((v == null)))){
cljs.core.chunk_append(b__22158,liquid_glass.tokens.pair__GT_css(group,k,v));

var G__22196 = (i__22157 + (1));
i__22157 = G__22196;
continue;
} else {
var G__22198 = (i__22157 + (1));
i__22157 = G__22198;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22158),liquid_glass$tokens$tokens__GT_body_$_iter__22153_$_iter__22155(cljs.core.chunk_rest(s__22156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22158),null);
}
} else {
var vec__22169 = cljs.core.first(s__22156__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22169,(1),null);
if((!((v == null)))){
return cljs.core.cons(liquid_glass.tokens.pair__GT_css(group,k,v),liquid_glass$tokens$tokens__GT_body_$_iter__22153_$_iter__22155(cljs.core.rest(s__22156__$2)));
} else {
var G__22199 = cljs.core.rest(s__22156__$2);
s__22156__$1 = G__22199;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__22154__$1,vec__22159,group,m,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__22154__$1,vec__22159,group,m,xs__6385__auto__,temp__5825__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(m));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,liquid_glass$tokens$tokens__GT_body_$_iter__22153(cljs.core.rest(s__22154__$1)));
} else {
var G__22200 = cljs.core.rest(s__22154__$1);
s__22154__$1 = G__22200;
continue;
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
 * Emit a `:root { ... }` CSS string from the light material (default merged
 *   with overrides).
 */
liquid_glass.tokens.css_variables = (function liquid_glass$tokens$css_variables(var_args){
var G__22174 = arguments.length;
switch (G__22174) {
case 0:
return liquid_glass.tokens.css_variables.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.tokens.css_variables.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.tokens.css_variables.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.tokens.css_variables.cljs$core$IFn$_invoke$arity$1(null);
}));

(liquid_glass.tokens.css_variables.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
return [":root {\n",liquid_glass.tokens.tokens__GT_body(liquid_glass.tokens.resolve_tokens(overrides)),"\n}"].join('');
}));

(liquid_glass.tokens.css_variables.cljs$lang$maxFixedArity = 1);

/**
 * Dark-appearance var blocks, three ways (mirrors shitsuke.hig's
 *   dark-css-variables — the two token layers must agree on how dark is
 *   selected, or a page that FORCES dark via `data-appearance="dark"` gets
 *   hig's dark labels but light-mode glass ink; net-babiniku shipped exactly
 *   that: #1c1c1e ink on forced-dark glass, an invisible chat panel for every
 *   visitor whose OS was in light mode):
 *   1. `@media (prefers-color-scheme: dark) { :root {...} }` — OS preference.
 *   2. `:root[data-appearance="dark"] {...}` — page forces dark.
 *   3. `:root[data-appearance="light"] {...}` — forced light beats the dark
 *   media query (the attribute selector out-specifies bare `:root`).
 */
liquid_glass.tokens.dark_css_variables = (function liquid_glass$tokens$dark_css_variables(var_args){
var G__22177 = arguments.length;
switch (G__22177) {
case 0:
return liquid_glass.tokens.dark_css_variables.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.tokens.dark_css_variables.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.tokens.dark_css_variables.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.tokens.dark_css_variables.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.tokens.dark_css_variables.cljs$core$IFn$_invoke$arity$1(null);
}));

(liquid_glass.tokens.dark_css_variables.cljs$core$IFn$_invoke$arity$1 = (function (dark_overrides){
return liquid_glass.tokens.dark_css_variables.cljs$core$IFn$_invoke$arity$2(null,dark_overrides);
}));

(liquid_glass.tokens.dark_css_variables.cljs$core$IFn$_invoke$arity$2 = (function (overrides,dark_overrides){
var dark_body = liquid_glass.tokens.tokens__GT_body(liquid_glass.tokens.resolve_dark_tokens(dark_overrides));
var light_body = liquid_glass.tokens.tokens__GT_body(cljs.core.select_keys(liquid_glass.tokens.resolve_tokens(overrides),cljs.core.keys(liquid_glass.tokens.resolve_dark_tokens(null))));
return ["@media (prefers-color-scheme: dark) {\n:root {\n",dark_body,"\n}\n}\n",":root[data-appearance=\"dark\"] {\n",dark_body,"\n}\n",":root[data-appearance=\"light\"] {\n",light_body,"\n}"].join('');
}));

(liquid_glass.tokens.dark_css_variables.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=liquid_glass.tokens.js.map
