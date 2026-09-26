goog.provide('byoubu_ui.core');
byoubu_ui.core.class_name = byoubu_ui.style.class_name;
byoubu_ui.core.root_css = byoubu_ui.style.root_css;
byoubu_ui.core.component_rules = byoubu_ui.style.component_rules;
byoubu_ui.core.component_css = byoubu_ui.style.component_css;
byoubu_ui.core.plate_style = byoubu_ui.style.plate_style;
/**
 * The `kotoba-ui` theme map for a backdrop: accent, appearance, ink and
 *   page background all derived from the backdrop's palette.
 * 
 *   `overrides` (optional) is merged last, so an app can keep its own accent
 *   while still taking the derived appearance and ink.
 * 
 *   The light and dark HIG overrides are set to the *same* values on purpose.
 *   The backdrop does not change when the OS switches scheme — the picture
 *   behind the text is the same picture — so content over it must resolve the
 *   same way in both. Letting the OS flip the ink here is how you get white
 *   text on a salt flat.
 */
byoubu_ui.core.theme_for = (function byoubu_ui$core$theme_for(var_args){
var G__23156 = arguments.length;
switch (G__23156) {
case 1:
return byoubu_ui.core.theme_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return byoubu_ui.core.theme_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(byoubu_ui.core.theme_for.cljs$core$IFn$_invoke$arity$1 = (function (id_or_backdrop){
return byoubu_ui.core.theme_for.cljs$core$IFn$_invoke$arity$2(id_or_backdrop,null);
}));

(byoubu_ui.core.theme_for.cljs$core$IFn$_invoke$arity$2 = (function (id_or_backdrop,overrides){
var f = byoubu.core.facts(id_or_backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var bg = new cljs.core.Keyword("byoubu.facts","content-color","byoubu.facts/content-color",324221864).cljs$core$IFn$_invoke$arity$1(f);
var acc = new cljs.core.Keyword("byoubu.facts","accent","byoubu.facts/accent",-875976237).cljs$core$IFn$_invoke$arity$1(f);
var hig = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hig","color","hig/color",1011770543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),ink,new cljs.core.Keyword(null,"system-background","system-background",970043794),bg], null)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"accent","accent",-1826298468),acc,new cljs.core.Keyword(null,"accent-dark","accent-dark",-1829396615),acc,new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.Keyword("byoubu.facts","appearance","byoubu.facts/appearance",-1138027971).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"hig","hig",-652701335),hig,new cljs.core.Keyword(null,"hig-dark","hig-dark",-263230495),hig], null),overrides], 0));
}));

(byoubu_ui.core.theme_for.cljs$lang$maxFixedArity = 2);

/**
 * The liquid-glass surface tier this backdrop wants under content
 *   (`:thin` / `:regular` / `:thick`). A busier backdrop needs more material
 *   between itself and the text.
 */
byoubu_ui.core.glass_surface = (function byoubu_ui$core$glass_surface(id_or_backdrop){
return new cljs.core.Keyword("byoubu.facts","glass-surface","byoubu.facts/glass-surface",-1696773134).cljs$core$IFn$_invoke$arity$1(byoubu.core.facts(id_or_backdrop));
});
/**
 * Poster `<img>` or looping `<video>` for the rendered tiers.
 * 
 *   Both start at opacity 0 and are faded in by the `--ready` class once the
 *   asset has decoded (`onload` / `oncanplay`); until then the reader sees the
 *   tier-0 gradients. A consumer rendering server-side without JS simply never
 *   adds the class, and the gradients stay — which is a correct page, not a
 *   broken one.
 */
byoubu_ui.core.media_element = (function byoubu_ui$core$media_element(p__23173){
var map__23174 = p__23173;
var map__23174__$1 = cljs.core.__destructure_map(map__23174);
var poster = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23174__$1,new cljs.core.Keyword(null,"poster","poster",-1616913550));
var loop_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23174__$1,new cljs.core.Keyword(null,"loop-src","loop-src",1606654863));
var loop_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23174__$1,new cljs.core.Keyword(null,"loop-type","loop-type",136589048));
var base = (byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1 ? byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plate-media","plate-media",-1434967628)) : byoubu_ui.core.class_name.call(null, new cljs.core.Keyword(null,"plate-media","plate-media",-1434967628)));
if(cljs.core.truth_(loop_src)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1 ? byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1("plate-media--motion") : byoubu_ui.core.class_name.call(null, "plate-media--motion")))].join(''),new cljs.core.Keyword(null,"poster","poster",-1616913550),poster,new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991),true,new cljs.core.Keyword(null,"muted","muted",1275109029),true,new cljs.core.Keyword(null,"loop","loop",-395552849),true,new cljs.core.Keyword(null,"playsinline","playsinline",-1954962654),true,new cljs.core.Keyword(null,"preload","preload",1646824722),"metadata",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),loop_src,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5002__auto__ = loop_type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "video/webm";
}
})()], null)], null)], null);
} else {
if(cljs.core.truth_(poster)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),base,new cljs.core.Keyword(null,"src","src",-1651076051),poster,new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"decoding","decoding",-568180903),"async",new cljs.core.Keyword(null,"loading","loading",-737050189),"eager"], null)], null);
} else {
return null;
}
}
});
/**
 * Stage with a backdrop plate behind `content`.
 * 
 *   opts:
 *  :backdrop    backdrop id (or an already-fetched backdrop map) — required
 *  :assets-base URL prefix the catalog's posters are served under, e.g.
 *               "/assets". With it, the tier-1 poster is resolved from the
 *               catalog manifest — no per-page URL bookkeeping.
 *  :poster      explicit poster URL; wins over :assets-base
 *  :loop-src    URL of a looping video (tier 2 delivery), optional
 *  :loop-type   MIME type for :loop-src, default "video/webm"
 *  :scrim?      add the legibility veil element (opacity comes from tokens)
 *  :id :class :attrs   passed through to the stage element
 * 
 *   With neither :assets-base nor :poster the stage still paints: tier 0 needs
 *   no assets. That is the intended default for a page that has not decided how
 *   it serves static files yet.
 * 
 *   An unknown backdrop id throws here rather than rendering an empty stage:
 *   a page with no backdrop looks like a styling bug and gets debugged for an
 *   hour; an exception names the typo.
 */
byoubu_ui.core.backdrop = (function byoubu_ui$core$backdrop(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23188 = arguments.length;
var i__5727__auto___23190 = (0);
while(true){
if((i__5727__auto___23190 < len__5726__auto___23188)){
args__5732__auto__.push((arguments[i__5727__auto___23190]));

var G__23194 = (i__5727__auto___23190 + (1));
i__5727__auto___23190 = G__23194;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return byoubu_ui.core.backdrop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(byoubu_ui.core.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (opts,content){
var map__23179 = opts;
var map__23179__$1 = cljs.core.__destructure_map(map__23179);
var backdrop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381));
var assets_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"assets-base","assets-base",418340355));
var loop_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"loop-src","loop-src",1606654863));
var poster = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"poster","poster",-1616913550));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scrim_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"scrim?","scrim?",744210580));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var loop_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"loop-type","loop-type",136589048));
var b = (function (){var G__23180 = ((cljs.core.map_QMARK_(backdrop))?new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop):backdrop);
return (byoubu.core.fetch.cljs$core$IFn$_invoke$arity$1 ? byoubu.core.fetch.cljs$core$IFn$_invoke$arity$1(G__23180) : byoubu.core.fetch.call(null, G__23180));
})();
var poster__$1 = (function (){var or__5002__auto__ = poster;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.truth_(assets_base)){
return byoubu.core.poster_url(new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(b),assets_base);
} else {
return null;
}
}
})();
var media = byoubu_ui.core.media_element(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"poster","poster",-1616913550),poster__$1,new cljs.core.Keyword(null,"loop-src","loop-src",1606654863),loop_src,new cljs.core.Keyword(null,"loop-type","loop-type",136589048),loop_type], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__23181 = (byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1 ? byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stage","stage",1843544772)) : byoubu_ui.core.class_name.call(null, new cljs.core.Keyword(null,"stage","stage",1843544772)));
if(cljs.core.truth_(class$)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23181)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return G__23181;
}
})(),new cljs.core.Keyword(null,"data-byoubu","data-byoubu",-1928717303),cljs.core.name(new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(b))], null),(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null):null),attrs], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1 ? byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plate","plate",-1920178141)) : byoubu_ui.core.class_name.call(null, new cljs.core.Keyword(null,"plate","plate",-1920178141))),new cljs.core.Keyword(null,"style","style",-496642736),(byoubu_ui.core.plate_style.cljs$core$IFn$_invoke$arity$1 ? byoubu_ui.core.plate_style.cljs$core$IFn$_invoke$arity$1(b) : byoubu_ui.core.plate_style.call(null, b)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),media,(cljs.core.truth_(scrim_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1 ? byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scrim","scrim",1532594430)) : byoubu_ui.core.class_name.call(null, new cljs.core.Keyword(null,"scrim","scrim",1532594430)))], null)], null):null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1 ? byoubu_ui.core.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224)) : byoubu_ui.core.class_name.call(null, new cljs.core.Keyword(null,"content","content",15833224)))], null)], null),content)], null);
}));

(byoubu_ui.core.backdrop.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(byoubu_ui.core.backdrop.cljs$lang$applyTo = (function (seq23177){
var G__23178 = cljs.core.first(seq23177);
var seq23177__$1 = cljs.core.next(seq23177);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23178,seq23177__$1);
}));


//# sourceMappingURL=byoubu_ui.core.js.map
