goog.provide('byoubu_ui.style');
/**
 * Stable class for a part or part--modifier, e.g. (class-name :plate)
 *   => "byoubu__plate". Two-part convention shared with shitsuke.style and
 *   liquid-glass.style.
 */
byoubu_ui.style.class_name = (function byoubu_ui$style$class_name(part){
return ["byoubu__",cljs.core.name(part)].join('');
});
byoubu_ui.style.root_css = (function byoubu_ui$style$root_css(var_args){
var G__23105 = arguments.length;
switch (G__23105) {
case 0:
return byoubu_ui.style.root_css.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return byoubu_ui.style.root_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(byoubu_ui.style.root_css.cljs$core$IFn$_invoke$arity$0 = (function (){
return byoubu_ui.style.root_css.cljs$core$IFn$_invoke$arity$1(null);
}));

(byoubu_ui.style.root_css.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
return byoubu_ui.tokens.css_variables.cljs$core$IFn$_invoke$arity$1(overrides);
}));

(byoubu_ui.style.root_css.cljs$lang$maxFixedArity = 1);

byoubu_ui.style.stops_str = (function byoubu_ui$style$stops_str(stops){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",(function (){var iter__5480__auto__ = (function byoubu_ui$style$stops_str_$_iter__23108(s__23109){
return (new cljs.core.LazySeq(null,(function (){
var s__23109__$1 = s__23109;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23109__$1);
if(temp__5825__auto__){
var s__23109__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23109__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23109__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23111 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23110 = (0);
while(true){
if((i__23110 < size__5479__auto__)){
var map__23112 = cljs.core._nth(c__5478__auto__,i__23110);
var map__23112__$1 = cljs.core.__destructure_map(map__23112);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23112__$1,new cljs.core.Keyword("plate","color","plate/color",914427071));
var at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23112__$1,new cljs.core.Keyword("plate","at","plate/at",1101651535));
cljs.core.chunk_append(b__23111,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(at)].join(''));

var G__23153 = (i__23110 + (1));
i__23110 = G__23153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23111),byoubu_ui$style$stops_str_$_iter__23108(cljs.core.chunk_rest(s__23109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23111),null);
}
} else {
var map__23113 = cljs.core.first(s__23109__$2);
var map__23113__$1 = cljs.core.__destructure_map(map__23113);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23113__$1,new cljs.core.Keyword("plate","color","plate/color",914427071));
var at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23113__$1,new cljs.core.Keyword("plate","at","plate/at",1101651535));
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(at)].join(''),byoubu_ui$style$stops_str_$_iter__23108(cljs.core.rest(s__23109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(stops);
})());
});
/**
 * One byoubu.plate layer -> one CSS gradient function.
 */
byoubu_ui.style.layer_str = (function byoubu_ui$style$layer_str(p__23115){
var map__23117 = p__23115;
var map__23117__$1 = cljs.core.__destructure_map(map__23117);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23117__$1,new cljs.core.Keyword("plate","kind","plate/kind",-1424213105));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23117__$1,new cljs.core.Keyword("plate","direction","plate/direction",-651904309));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23117__$1,new cljs.core.Keyword("plate","shape","plate/shape",1889905040));
var stops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23117__$1,new cljs.core.Keyword("plate","stops","plate/stops",-1312702775));
var G__23125 = kind;
var G__23125__$1 = (((G__23125 instanceof cljs.core.Keyword))?G__23125.fqn:null);
switch (G__23125__$1) {
case "linear":
return ["linear-gradient(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(direction),", ",byoubu_ui.style.stops_str(stops),")"].join('');

break;
case "radial":
return ["radial-gradient(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),", ",byoubu_ui.style.stops_str(stops),")"].join('');

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["byoubu-ui: unknown plate layer kind ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kind], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind], null));

}
});
/**
 * Inline style map for one plate: the backdrop's tier-0 gradient stack plus
 *   the base color underneath it.
 * 
 *   `background-color` is not decoration — without it the plate paints white
 *   for one frame on a cold load, which is the single most visible way a dark
 *   backdrop goes wrong.
 */
byoubu_ui.style.plate_style = (function byoubu_ui$style$plate_style(id_or_backdrop){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),byoubu.core.plate_base_color(id_or_backdrop),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(byoubu_ui.style.layer_str,byoubu.core.plate_layers(id_or_backdrop)))], null);
});
/**
 * [[selector declarations] ...] for the non-media rules.
 */
byoubu_ui.style.component_rules = (function byoubu_ui$style$component_rules(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name(new cljs.core.Keyword(null,"stage","stage",1843544772))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"isolation","isolation",-1230029596),"isolate",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name(new cljs.core.Keyword(null,"plate","plate",-1920178141))].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"inset","inset",-396367740),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),byoubu_ui.tokens.token(new cljs.core.Keyword("byoubu","plate","byoubu/plate",1535429299),new cljs.core.Keyword(null,"z-index","z-index",1892827090)),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),"no-repeat",new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name(new cljs.core.Keyword(null,"plate-media","plate-media",-1434967628))].join(''),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"inset","inset",-396367740),"0",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),byoubu_ui.tokens.token(new cljs.core.Keyword("byoubu","plate","byoubu/plate",1535429299),new cljs.core.Keyword(null,"fit","fit",869444807)),new cljs.core.Keyword(null,"object-position","object-position",-598884937),byoubu_ui.tokens.token(new cljs.core.Keyword("byoubu","plate","byoubu/plate",1535429299),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.Keyword(null,"opacity","opacity",397153780),"0",new cljs.core.Keyword(null,"transition","transition",765692007),["opacity ",byoubu_ui.tokens.token(new cljs.core.Keyword("byoubu","plate","byoubu/plate",1535429299),new cljs.core.Keyword(null,"media-fade","media-fade",1142420228))," ",byoubu_ui.tokens.token(new cljs.core.Keyword("byoubu","plate","byoubu/plate",1535429299),new cljs.core.Keyword(null,"media-easing","media-easing",1146484515))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name("plate-media--ready")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name(new cljs.core.Keyword(null,"scrim","scrim",1532594430))].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"inset","inset",-396367740),"0",new cljs.core.Keyword(null,"background-color","background-color",570434026),byoubu_ui.tokens.token(new cljs.core.Keyword("byoubu","scrim","byoubu/scrim",1794983790),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.Keyword(null,"opacity","opacity",397153780),byoubu_ui.tokens.token(new cljs.core.Keyword("byoubu","scrim","byoubu/scrim",1794983790),new cljs.core.Keyword(null,"opacity","opacity",397153780)),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name(new cljs.core.Keyword(null,"content","content",15833224))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),byoubu_ui.tokens.token(new cljs.core.Keyword("byoubu","plate","byoubu/plate",1535429299),new cljs.core.Keyword(null,"content-z","content-z",-268017743))], null)], null)], null);
});
/**
 * [[query [[selector declarations] ...]] ...]
 */
byoubu_ui.style.media_rules = (function byoubu_ui$style$media_rules(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(prefers-reduced-motion: reduce)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name("plate-media--motion")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["print",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name(new cljs.core.Keyword(null,"plate","plate",-1920178141))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",byoubu_ui.style.class_name(new cljs.core.Keyword(null,"content","content",15833224))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"auto"], null)], null)], null)], null)], null);
});
/**
 * The complete plate stylesheet as a string, ready to inline in SSR or
 *   concatenate into main.css. No build step required — same choice
 *   liquid-glass-ui made for its material.
 */
byoubu_ui.style.component_css = (function byoubu_ui$style$component_css(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5480__auto__ = (function byoubu_ui$style$component_css_$_iter__23126(s__23127){
return (new cljs.core.LazySeq(null,(function (){
var s__23127__$1 = s__23127;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23127__$1);
if(temp__5825__auto__){
var s__23127__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23127__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23127__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23129 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23128 = (0);
while(true){
if((i__23128 < size__5479__auto__)){
var vec__23130 = cljs.core._nth(c__5478__auto__,i__23128);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23130,(0),null);
var decls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23130,(1),null);
cljs.core.chunk_append(b__23129,css.core.rule(sel,decls));

var G__23169 = (i__23128 + (1));
i__23128 = G__23169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23129),byoubu_ui$style$component_css_$_iter__23126(cljs.core.chunk_rest(s__23127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23129),null);
}
} else {
var vec__23134 = cljs.core.first(s__23127__$2);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23134,(0),null);
var decls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23134,(1),null);
return cljs.core.cons(css.core.rule(sel,decls),byoubu_ui$style$component_css_$_iter__23126(cljs.core.rest(s__23127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu_ui.style.component_rules());
})(),(function (){var iter__5480__auto__ = (function byoubu_ui$style$component_css_$_iter__23138(s__23139){
return (new cljs.core.LazySeq(null,(function (){
var s__23139__$1 = s__23139;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23139__$1);
if(temp__5825__auto__){
var s__23139__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23139__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23139__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23141 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23140 = (0);
while(true){
if((i__23140 < size__5479__auto__)){
var vec__23144 = cljs.core._nth(c__5478__auto__,i__23140);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144,(0),null);
var rules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144,(1),null);
cljs.core.chunk_append(b__23141,css.core.media(q,rules));

var G__23172 = (i__23140 + (1));
i__23140 = G__23172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23141),byoubu_ui$style$component_css_$_iter__23138(cljs.core.chunk_rest(s__23139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23141),null);
}
} else {
var vec__23147 = cljs.core.first(s__23139__$2);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23147,(0),null);
var rules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23147,(1),null);
return cljs.core.cons(css.core.media(q,rules),byoubu_ui$style$component_css_$_iter__23138(cljs.core.rest(s__23139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu_ui.style.media_rules());
})()));
});

//# sourceMappingURL=byoubu_ui.style.js.map
