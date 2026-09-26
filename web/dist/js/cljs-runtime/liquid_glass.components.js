goog.provide('liquid_glass.components');
liquid_glass.components.act__GT_str = (function liquid_glass$components$act__GT_str(a){
if((a == null)){
return null;
} else {
if(typeof a === 'string'){
return a;
} else {
if((a instanceof cljs.core.Keyword)){
var temp__5823__auto__ = cljs.core.namespace(a);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [ns,"/",cljs.core.name(a)].join('');
} else {
return cljs.core.name(a);
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);

}
}
}
});
liquid_glass.components.add_class = (function liquid_glass$components$add_class(attrs,extra){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),(function (c){
if(cljs.core.seq(c)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra)].join('');
} else {
return extra;
}
}));
});
/**
 * Join a required liquid-glass class with an optional consumer :class opt.
 */
liquid_glass.components.cls = (function liquid_glass$components$cls(base,extra){
if(cljs.core.seq(extra)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra)].join('');
} else {
return base;
}
});
liquid_glass.components.specular = (function liquid_glass$components$specular(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"specular","specular",1475677228))], null)], null);
});
/**
 * Take a hiccup node `[tag attrs & children]` (as returned by a shitsuke.components
 *   fn), add `lg-class` to its :class, and append the specular decoration span as
 *   a final child.
 */
liquid_glass.components.glassify = (function liquid_glass$components$glassify(p__22805,lg_class){
var vec__22806 = p__22805;
var seq__22807 = cljs.core.seq(vec__22806);
var first__22808 = cljs.core.first(seq__22807);
var seq__22807__$1 = cljs.core.next(seq__22807);
var tag = first__22808;
var first__22808__$1 = cljs.core.first(seq__22807__$1);
var seq__22807__$2 = cljs.core.next(seq__22807__$1);
var attrs = first__22808__$1;
var children = seq__22807__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,liquid_glass.components.add_class(attrs,lg_class)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [liquid_glass.components.specular()], null)));
});
/**
 * Glass pill button. Same opts as shitsuke.components/button (:act, :disabled,
 *   :title, :type, :class).
 */
liquid_glass.components.button = (function liquid_glass$components$button(var_args){
var G__22810 = arguments.length;
switch (G__22810) {
case 1:
return liquid_glass.components.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.button.cljs$core$IFn$_invoke$arity$1 = (function (label){
return liquid_glass.components.button.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(liquid_glass.components.button.cljs$core$IFn$_invoke$arity$2 = (function (label,opts){
return liquid_glass.components.glassify(shitsuke.components.button.cljs$core$IFn$_invoke$arity$2(label,opts),liquid_glass.style.class_name(new cljs.core.Keyword(null,"button","button",1456579943)));
}));

(liquid_glass.components.button.cljs$lang$maxFixedArity = 2);

/**
 * Glass icon button. Same opts as shitsuke.components/icon-button.
 */
liquid_glass.components.icon_button = (function liquid_glass$components$icon_button(var_args){
var G__22812 = arguments.length;
switch (G__22812) {
case 1:
return liquid_glass.components.icon_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.icon_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.icon_button.cljs$core$IFn$_invoke$arity$1 = (function (icon){
return liquid_glass.components.icon_button.cljs$core$IFn$_invoke$arity$2(icon,null);
}));

(liquid_glass.components.icon_button.cljs$core$IFn$_invoke$arity$2 = (function (icon,opts){
return liquid_glass.components.glassify(shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$2(icon,opts),liquid_glass.style.class_name(new cljs.core.Keyword(null,"icon-button","icon-button",-1094997778)));
}));

(liquid_glass.components.icon_button.cljs$lang$maxFixedArity = 2);

/**
 * Glass toolbar / floating navbar. `actions` is a seq of hiccup (typically
 *   liquid-glass/button or icon-button). Same opts as shitsuke.components/toolbar.
 */
liquid_glass.components.toolbar = (function liquid_glass$components$toolbar(var_args){
var G__22817 = arguments.length;
switch (G__22817) {
case 1:
return liquid_glass.components.toolbar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.toolbar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.toolbar.cljs$core$IFn$_invoke$arity$1 = (function (actions){
return liquid_glass.components.toolbar.cljs$core$IFn$_invoke$arity$2(actions,null);
}));

(liquid_glass.components.toolbar.cljs$core$IFn$_invoke$arity$2 = (function (actions,opts){
return liquid_glass.components.glassify(shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$2(actions,opts),liquid_glass.style.class_name(new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)));
}));

(liquid_glass.components.toolbar.cljs$lang$maxFixedArity = 2);

/**
 * Glass segmented control. `tabs` is [id label] pairs; `current` is the active
 *   id. Same shape as shitsuke.components/mode-tabs (same `data-act` per-tab
 *   contract) but classed entirely under `liquid-glass__tab`/`tab--active` — the
 *   visual is fully owned by liquid-glass.style, so it does not also carry the
 *   shitsuke__mode-tabs/tab classes. opts: :class (container).
 */
liquid_glass.components.tab_bar = (function liquid_glass$components$tab_bar(var_args){
var G__22824 = arguments.length;
switch (G__22824) {
case 2:
return liquid_glass.components.tab_bar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return liquid_glass.components.tab_bar.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.tab_bar.cljs$core$IFn$_invoke$arity$2 = (function (tabs,current){
return liquid_glass.components.tab_bar.cljs$core$IFn$_invoke$arity$3(tabs,current,null);
}));

(liquid_glass.components.tab_bar.cljs$core$IFn$_invoke$arity$3 = (function (tabs,current,opts){
var map__22829 = opts;
var map__22829__$1 = cljs.core.__destructure_map(map__22829);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22829__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[liquid_glass.style.class_name(new cljs.core.Keyword(null,"tab-bar","tab-bar",-787971209)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join('')], null),(function (){var iter__5480__auto__ = (function liquid_glass$components$iter__22830(s__22831){
return (new cljs.core.LazySeq(null,(function (){
var s__22831__$1 = s__22831;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22831__$1);
if(temp__5825__auto__){
var s__22831__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22831__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22831__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22833 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22832 = (0);
while(true){
if((i__22832 < size__5479__auto__)){
var vec__22839 = cljs.core._nth(c__5478__auto__,i__22832);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22839,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22839,(1),null);
cljs.core.chunk_append(b__22833,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(id),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[liquid_glass.style.class_name(new cljs.core.Keyword(null,"tab","tab",-559583621)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current))?[" ",liquid_glass.style.class_name(new cljs.core.Keyword(null,"tab--active","tab--active",-1453423711))].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22842 = id;
if((G__22842 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__22842);
}
})()], null),label], null));

var G__23317 = (i__22832 + (1));
i__22832 = G__23317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22833),liquid_glass$components$iter__22830(cljs.core.chunk_rest(s__22831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22833),null);
}
} else {
var vec__22844 = cljs.core.first(s__22831__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(id),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[liquid_glass.style.class_name(new cljs.core.Keyword(null,"tab","tab",-559583621)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current))?[" ",liquid_glass.style.class_name(new cljs.core.Keyword(null,"tab--active","tab--active",-1453423711))].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22854 = id;
if((G__22854 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__22854);
}
})()], null),label], null),liquid_glass$components$iter__22830(cljs.core.rest(s__22831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabs);
})(),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.tab_bar.cljs$lang$maxFixedArity = 3);

/**
 * Glass surface container. `body` is hiccup or a seq. opts: :class, :id,
 *   :surface (:clear | :regular (default) | :thick), :elevation (:flat | :raised
 *   (default) | :overlay | :floating).
 */
liquid_glass.components.panel = (function liquid_glass$components$panel(var_args){
var G__22870 = arguments.length;
switch (G__22870) {
case 1:
return liquid_glass.components.panel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.panel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.panel.cljs$core$IFn$_invoke$arity$1 = (function (body){
return liquid_glass.components.panel.cljs$core$IFn$_invoke$arity$2(body,null);
}));

(liquid_glass.components.panel.cljs$core$IFn$_invoke$arity$2 = (function (body,opts){
var map__22875 = opts;
var map__22875__$1 = cljs.core.__destructure_map(map__22875);
var surface = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22875__$1,new cljs.core.Keyword(null,"surface","surface",699915646));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22875__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var base = shitsuke.components.card.cljs$core$IFn$_invoke$arity$2(body,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"surface","surface",699915646),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"elevation","elevation",-1609348796)], 0)));
var variants = (function (){var G__22879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [liquid_glass.style.class_name(new cljs.core.Keyword(null,"panel","panel",-558637456))], null);
var G__22879__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = surface;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(surface,new cljs.core.Keyword(null,"regular","regular",-1153375582));
} else {
return and__5000__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22879,liquid_glass.style.class_name(["panel--",cljs.core.name(surface)].join(''))):G__22879);
if(cljs.core.truth_((function (){var and__5000__auto__ = elevation;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(elevation,new cljs.core.Keyword(null,"raised","raised",1890794098));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22879__$1,liquid_glass.style.class_name(["panel--",cljs.core.name(elevation)].join('')));
} else {
return G__22879__$1;
}
})();
return liquid_glass.components.glassify(base,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",variants));
}));

(liquid_glass.components.panel.cljs$lang$maxFixedArity = 2);

/**
 * Bottom sheet / floating modal surface. `body` is hiccup or a seq. opts:
 *   :id, :class, :label (aria-label).
 */
liquid_glass.components.sheet = (function liquid_glass$components$sheet(var_args){
var G__22891 = arguments.length;
switch (G__22891) {
case 1:
return liquid_glass.components.sheet.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.sheet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.sheet.cljs$core$IFn$_invoke$arity$1 = (function (body){
return liquid_glass.components.sheet.cljs$core$IFn$_invoke$arity$2(body,null);
}));

(liquid_glass.components.sheet.cljs$core$IFn$_invoke$arity$2 = (function (body,opts){
var map__22897 = opts;
var map__22897__$1 = cljs.core.__destructure_map(map__22897);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22897__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22897__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22897__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-modal","aria-modal",553474260),true,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"class","class",-2030961996),[liquid_glass.style.class_name(new cljs.core.Keyword(null,"sheet","sheet",-2059155794)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join('')], null),liquid_glass.components.specular(),body], null);
}));

(liquid_glass.components.sheet.cljs$lang$maxFixedArity = 2);

/**
 * Full-viewport dismiss backdrop behind a sheet/modal. opts: :act (portable
 *   dismiss interaction — same `act` contract as shitsuke.components), :class.
 */
liquid_glass.components.scrim = (function liquid_glass$components$scrim(var_args){
var G__22914 = arguments.length;
switch (G__22914) {
case 0:
return liquid_glass.components.scrim.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.components.scrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.scrim.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.components.scrim.cljs$core$IFn$_invoke$arity$1(null);
}));

(liquid_glass.components.scrim.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var map__22928 = opts;
var map__22928__$1 = cljs.core.__destructure_map(map__22928);
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22928__$1,new cljs.core.Keyword(null,"act","act",190231886));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22928__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"class","class",-2030961996),[liquid_glass.style.class_name(new cljs.core.Keyword(null,"scrim","scrim",1532594430)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22941 = act;
if((G__22941 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__22941);
}
})()], null)], null);
}));

(liquid_glass.components.scrim.cljs$lang$maxFixedArity = 1);

/**
 * Small glass pill badge/counter. `label` is string or hiccup. opts: :class.
 */
liquid_glass.components.badge = (function liquid_glass$components$badge(var_args){
var G__22948 = arguments.length;
switch (G__22948) {
case 1:
return liquid_glass.components.badge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.badge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.badge.cljs$core$IFn$_invoke$arity$1 = (function (label){
return liquid_glass.components.badge.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(liquid_glass.components.badge.cljs$core$IFn$_invoke$arity$2 = (function (label,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[liquid_glass.style.class_name(new cljs.core.Keyword(null,"badge","badge",-1277997221)),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return null;
}
})()].join('')], null),label], null);
}));

(liquid_glass.components.badge.cljs$lang$maxFixedArity = 2);

/**
 * Attrs map for a native text control (`<input>`/`<textarea>`), built from
 *   caller opts. Every opt passes through untouched (:value :placeholder
 *   :on-key-down :disabled :aria-label :aria-describedby :maxLength :min :id
 *   :rows ...) except:
 * 
 *   - :class is dropped (it belongs to the *wrapper*; the control itself
 *  carries no class hook — the material CSS uses the
 *  `.liquid-glass__text-field input` descendant selector),
 *   - :act is mapped to :data-act (shitsuke's portable SSR interaction
 *  contract),
 *   - a caller :on-input is re-attached as :on-change when no :on-change is
 *  given (kept as-is when the caller wired both). React's `onChange` on text
 *  controls fires on the native `input` event, so the caller-visible
 *  semantics (per-keystroke, `(.. e -target -value)`) are identical — but
 *  the rename matters under reagent: reagent's async-rendering-safe
 *  controlled-input path (reagent.impl.input/input-render-setup) only
 *  engages when the props carry BOTH `value` and `onChange`. With
 *  :value + :on-input the control is a plain React controlled input under
 *  reagent's asynchronous (requestAnimationFrame-batched) re-rendering:
 *  after every keystroke React restores the DOM value to the last-*rendered*
 *  (stale) prop, so any keystroke that lands before the next render is typed
 *  into a reverted field and everything but the last keystroke is lost.
 *  Reproduced against reagent 1.2.0/React 18; reported live by net-babiniku
 *  (every text field, since its liquid-glass-ui adoption). Root cause lives
 *  in shitsuke.components/input|textarea (same :value + :on-input shape) —
 *  fixed here by building the control hiccup directly; shitsuke follow-up
 *  noted in the PR.
 * 
 *   Also normalizes a present-but-nil :value to "" (a controlled control
 *   never renders the string "null"), and omits :value entirely when the
 *   caller didn't pass one (an uncontrolled field stays uncontrolled).
 */
liquid_glass.components.control_attrs = (function liquid_glass$components$control_attrs(opts){
var map__22953 = opts;
var map__22953__$1 = cljs.core.__destructure_map(map__22953);
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,new cljs.core.Keyword(null,"act","act",190231886));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var G__22954 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"act","act",190231886),new cljs.core.Keyword(null,"on-input","on-input",-267523366)], 0));
var G__22954__$1 = (((!((act == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22954,new cljs.core.Keyword(null,"data-act","data-act",-318247081),liquid_glass.components.act__GT_str(act)):G__22954);
var G__22954__$2 = (cljs.core.truth_((function (){var and__5000__auto__ = on_input;
if(cljs.core.truth_(and__5000__auto__)){
return (on_change == null);
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22954__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_input):G__22954__$1);
var G__22954__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = on_input;
if(cljs.core.truth_(and__5000__auto__)){
return (!((on_change == null)));
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22954__$2,new cljs.core.Keyword(null,"on-input","on-input",-267523366),on_input):G__22954__$2);
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"value","value",305978217))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__22954__$3,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__22951_SHARP_){
var or__5002__auto__ = p1__22951_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
}));
} else {
return G__22954__$3;
}
});
/**
 * Glass text input: `[:div.liquid-glass__text-field [:input attrs] specular]`.
 *   opts go to the `<input>` via `control-attrs` (full passthrough — :id :value
 *   :placeholder :type :on-input/:on-change :on-key-down :disabled :aria-label
 *   :aria-describedby :maxLength :min :act ...); :class on the *wrapper* comes
 *   from wrap-opts (the input itself carries no class hook — style it via the
 *   wrapper). The emitted hiccup is pure data: equal opts produce `=` hiccup,
 *   and the `<input>` sits at index 2 regardless of which opts are present, so
 *   React/reagent never remounts it across renders.
 */
liquid_glass.components.text_field = (function liquid_glass$components$text_field(var_args){
var G__22957 = arguments.length;
switch (G__22957) {
case 1:
return liquid_glass.components.text_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.text_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.text_field.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return liquid_glass.components.text_field.cljs$core$IFn$_invoke$arity$2(opts,null);
}));

(liquid_glass.components.text_field.cljs$core$IFn$_invoke$arity$2 = (function (opts,wrap_opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"text-field","text-field",1955422445)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(wrap_opts))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(liquid_glass.components.control_attrs(opts),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "text";
}
})())], null),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.text_field.cljs$lang$maxFixedArity = 2);

/**
 * Glass textarea: `[:div.liquid-glass__text-area [:textarea attrs] specular]`.
 *   Same opts contract as `text-field` (plus :rows, default 6). :value rides as
 *   an attribute (not element content) so reagent keeps the control in sync with
 *   app state — value-as-child made the textarea silently uncontrolled after
 *   mount under React. Caveat: shitsuke.hiccup/->html prints :value as an HTML
 *   attribute, which browsers ignore on <textarea>, so a *pre-filled* SSR
 *   textarea needs a shitsuke.hiccup follow-up; live (reagent) rendering — where
 *   the keystroke-loss bug lived — is correct.
 */
liquid_glass.components.text_area = (function liquid_glass$components$text_area(var_args){
var G__22960 = arguments.length;
switch (G__22960) {
case 1:
return liquid_glass.components.text_area.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.text_area.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.text_area.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return liquid_glass.components.text_area.cljs$core$IFn$_invoke$arity$2(opts,null);
}));

(liquid_glass.components.text_area.cljs$core$IFn$_invoke$arity$2 = (function (opts,wrap_opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"text-area","text-area",-1481158655)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(wrap_opts))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(liquid_glass.components.control_attrs(opts),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (6);
}
})())], null),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.text_area.cljs$lang$maxFixedArity = 2);

/**
 * Glass search input: a text-field with a leading search glyph and
 *   type="search". Same opts as text-field; the `<input>` sits at index 3
 *   (after the glyph span), fixed regardless of opts.
 */
liquid_glass.components.search_field = (function liquid_glass$components$search_field(var_args){
var G__22967 = arguments.length;
switch (G__22967) {
case 1:
return liquid_glass.components.search_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.search_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.search_field.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return liquid_glass.components.search_field.cljs$core$IFn$_invoke$arity$2(opts,null);
}));

(liquid_glass.components.search_field.cljs$core$IFn$_invoke$arity$2 = (function (opts,wrap_opts){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"search-field","search-field",546910583)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(wrap_opts))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"search-icon","search-icon",1417211402))], null),"\u2315"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(liquid_glass.components.control_attrs(opts),new cljs.core.Keyword(null,"type","type",1174270348),"search")], null),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.search_field.cljs$lang$maxFixedArity = 2);

/**
 * Glass dropdown. Wraps shitsuke.components/select; `options` is [value
 *   label] pairs. opts: :id, :value, :on-change, :act, plus :class on the wrapper.
 */
liquid_glass.components.menu_select = (function liquid_glass$components$menu_select(var_args){
var G__22973 = arguments.length;
switch (G__22973) {
case 1:
return liquid_glass.components.menu_select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.menu_select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.menu_select.cljs$core$IFn$_invoke$arity$1 = (function (options){
return liquid_glass.components.menu_select.cljs$core$IFn$_invoke$arity$2(options,null);
}));

(liquid_glass.components.menu_select.cljs$core$IFn$_invoke$arity$2 = (function (options,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"menu-select","menu-select",494064095)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))], null),shitsuke.components.select(options,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"class","class",-2030961996))),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.menu_select.cljs$lang$maxFixedArity = 2);

/**
 * Glass switch (no shitsuke equivalent). A visually-hidden native
 *   `<input type="checkbox">` inside a `<label>` so click/keyboard/screen-reader
 *   behavior stays native; the glass track+thumb is a styled sibling `<span>`.
 *   opts: :id, :checked, :on-change (cljs), :act (ssr — fires on the underlying
 *   `change` event), :disabled, :class.
 */
liquid_glass.components.toggle = (function liquid_glass$components$toggle(var_args){
var G__22979 = arguments.length;
switch (G__22979) {
case 0:
return liquid_glass.components.toggle.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.components.toggle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.toggle.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.components.toggle.cljs$core$IFn$_invoke$arity$1(null);
}));

(liquid_glass.components.toggle.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var map__22983 = opts;
var map__22983__$1 = cljs.core.__destructure_map(map__22983);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,new cljs.core.Keyword(null,"act","act",190231886));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"toggle","toggle",1291842030)),class$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"toggle-input","toggle-input",-1215066547)),new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(checked)?true:null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?true:null),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22987 = act;
if((G__22987 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__22987);
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"toggle-track","toggle-track",-190387329))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"toggle-thumb","toggle-thumb",-1485492918))], null)], null)], null)], null);
}));

(liquid_glass.components.toggle.cljs$lang$maxFixedArity = 1);

/**
 * Glass checkbox (no shitsuke equivalent). `label` is optional trailing
 *   text/hiccup. opts: :id, :checked, :on-change (cljs), :act (ssr), :disabled,
 *   :class.
 */
liquid_glass.components.checkbox = (function liquid_glass$components$checkbox(var_args){
var G__22996 = arguments.length;
switch (G__22996) {
case 0:
return liquid_glass.components.checkbox.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.components.checkbox.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.checkbox.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.checkbox.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.components.checkbox.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(liquid_glass.components.checkbox.cljs$core$IFn$_invoke$arity$1 = (function (label){
return liquid_glass.components.checkbox.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(liquid_glass.components.checkbox.cljs$core$IFn$_invoke$arity$2 = (function (label,opts){
var map__23000 = opts;
var map__23000__$1 = cljs.core.__destructure_map(map__23000);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"act","act",190231886));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)),class$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"checkbox-input","checkbox-input",1758508708)),new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(checked)?true:null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?true:null),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__23005 = act;
if((G__23005 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__23005);
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"checkbox-box","checkbox-box",-701768868))], null)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"checkbox-text","checkbox-text",1323584981))], null),label], null):null)], null);
}));

(liquid_glass.components.checkbox.cljs$lang$maxFixedArity = 2);

/**
 * Glass radio button (no shitsuke equivalent). `label` is optional trailing
 *   text/hiccup. opts: :id, :group (give multiple radios the same :group to tie
 *   them into one native radio group), :value, :checked, :on-change (cljs),
 *   :act (ssr), :disabled, :class.
 */
liquid_glass.components.radio = (function liquid_glass$components$radio(var_args){
var G__23011 = arguments.length;
switch (G__23011) {
case 0:
return liquid_glass.components.radio.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.components.radio.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.radio.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.radio.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.components.radio.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(liquid_glass.components.radio.cljs$core$IFn$_invoke$arity$1 = (function (label){
return liquid_glass.components.radio.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(liquid_glass.components.radio.cljs$core$IFn$_invoke$arity$2 = (function (label,opts){
var map__23018 = opts;
var map__23018__$1 = cljs.core.__destructure_map(map__23018);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"group","group",582596132));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"act","act",190231886));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"radio","radio",1323726374)),class$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"data-act","data-act",-318247081),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[(cljs.core.truth_(disabled)?true:null),group,value,"radio",id,liquid_glass.style.class_name(new cljs.core.Keyword(null,"radio-input","radio-input",846370748)),(cljs.core.truth_(checked)?true:null),(function (){var G__23023 = act;
if((G__23023 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__23023);
}
})(),on_change])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"radio-box","radio-box",7123078))], null)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"radio-text","radio-text",172284250))], null),label], null):null)], null);
}));

(liquid_glass.components.radio.cljs$lang$maxFixedArity = 2);

/**
 * Glass range slider (native `<input type="range">`, no shitsuke
 *   equivalent — styled via vendor-prefixed track/thumb pseudo-elements, see
 *   docs/design.md). opts: :id, :min, :max, :value, :step, :on-input (cljs),
 *   :act (ssr), :class.
 */
liquid_glass.components.slider = (function liquid_glass$components$slider(var_args){
var G__23031 = arguments.length;
switch (G__23031) {
case 0:
return liquid_glass.components.slider.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.components.slider.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.slider.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.components.slider.cljs$core$IFn$_invoke$arity$1(null);
}));

(liquid_glass.components.slider.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var map__23032 = opts;
var map__23032__$1 = cljs.core.__destructure_map(map__23032);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,new cljs.core.Keyword(null,"max","max",61366548));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,new cljs.core.Keyword(null,"value","value",305978217));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,new cljs.core.Keyword(null,"act","act",190231886));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"data-act","data-act",-318247081),new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"step","step",1288888124)],[(function (){var or__5002__auto__ = min;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),(function (){var or__5002__auto__ = value;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),"range",(function (){var or__5002__auto__ = max;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})(),id,liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"slider","slider",-472668865)),class$),(function (){var G__23033 = act;
if((G__23033 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__23033);
}
})(),on_input,step])], null);
}));

(liquid_glass.components.slider.cljs$lang$maxFixedArity = 1);

/**
 * Glass +/- stepper (no shitsuke equivalent, built from `icon-button`).
 *   `value` is displayed as-is (string/number — the caller owns the count).
 *   opts: :dec-act, :inc-act (portable `act` for the -/+ buttons), :dec-disabled,
 *   :inc-disabled, :class.
 */
liquid_glass.components.stepper = (function liquid_glass$components$stepper(var_args){
var G__23037 = arguments.length;
switch (G__23037) {
case 1:
return liquid_glass.components.stepper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.stepper.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.stepper.cljs$core$IFn$_invoke$arity$1 = (function (value){
return liquid_glass.components.stepper.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(liquid_glass.components.stepper.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
var map__23038 = opts;
var map__23038__$1 = cljs.core.__destructure_map(map__23038);
var dec_act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23038__$1,new cljs.core.Keyword(null,"dec-act","dec-act",-567663688));
var inc_act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23038__$1,new cljs.core.Keyword(null,"inc-act","inc-act",889943778));
var dec_disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23038__$1,new cljs.core.Keyword(null,"dec-disabled","dec-disabled",871457147));
var inc_disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23038__$1,new cljs.core.Keyword(null,"inc-disabled","inc-disabled",-1858287757));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23038__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"stepper","stepper",-481368231)),class$)], null),liquid_glass.components.icon_button.cljs$core$IFn$_invoke$arity$2("\u2013",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"act","act",190231886),dec_act,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),dec_disabled], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"stepper-value","stepper-value",-180773154))], null),value], null),liquid_glass.components.icon_button.cljs$core$IFn$_invoke$arity$2("+",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"act","act",190231886),inc_act,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),inc_disabled], null)),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.stepper.cljs$lang$maxFixedArity = 2);

/**
 * Glass linear progress track (no shitsuke equivalent). `value`/opts :max
 *   (default 100) determine the fill percentage. opts: :max, :class.
 */
liquid_glass.components.progress_bar = (function liquid_glass$components$progress_bar(var_args){
var G__23050 = arguments.length;
switch (G__23050) {
case 1:
return liquid_glass.components.progress_bar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.progress_bar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.progress_bar.cljs$core$IFn$_invoke$arity$1 = (function (value){
return liquid_glass.components.progress_bar.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(liquid_glass.components.progress_bar.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
var map__23061 = opts;
var map__23061__$1 = cljs.core.__destructure_map(map__23061);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23061__$1,new cljs.core.Keyword(null,"max","max",61366548));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23061__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max__$1 = (function (){var or__5002__auto__ = max;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})();
var pct = ((function (){var x__5090__auto__ = (function (){var x__5087__auto__ = (value / max__$1);
var y__5088__auto__ = 0.0;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = 1.0;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})() * (100));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"progress-bar","progress-bar",-123877022)),class$),new cljs.core.Keyword(null,"role","role",-736691072),"progressbar",new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658),value,new cljs.core.Keyword(null,"aria-valuemin","aria-valuemin",138532158),(0),new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),max__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"progress-bar-fill","progress-bar-fill",-1451625812)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct),"%"].join('')], null)], null)], null)], null);
}));

(liquid_glass.components.progress_bar.cljs$lang$maxFixedArity = 2);

/**
 * Glass indeterminate spinner (no shitsuke equivalent). opts: :class,
 *   :label (aria-label, default "Loading").
 */
liquid_glass.components.progress_circle = (function liquid_glass$components$progress_circle(var_args){
var G__23075 = arguments.length;
switch (G__23075) {
case 0:
return liquid_glass.components.progress_circle.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.components.progress_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.progress_circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.components.progress_circle.cljs$core$IFn$_invoke$arity$1(null);
}));

(liquid_glass.components.progress_circle.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var map__23083 = opts;
var map__23083__$1 = cljs.core.__destructure_map(map__23083);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23083__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23083__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"role","role",-736691072),"status",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(function (){var or__5002__auto__ = label;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Loading";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"progress-circle","progress-circle",-1390459805)),class$)], null)], null);
}));

(liquid_glass.components.progress_circle.cljs$lang$maxFixedArity = 1);

/**
 * Glass hairline divider (no shitsuke equivalent).
 */
liquid_glass.components.divider = (function liquid_glass$components$divider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"divider","divider",1265972657))], null)], null);
});
/**
 * Icon + text row, SwiftUI `Label`-shaped (no shitsuke equivalent). `icon`
 *   and `text` are string/hiccup. opts: :class.
 */
liquid_glass.components.label = (function liquid_glass$components$label(var_args){
var G__23089 = arguments.length;
switch (G__23089) {
case 2:
return liquid_glass.components.label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return liquid_glass.components.label.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.label.cljs$core$IFn$_invoke$arity$2 = (function (icon,text){
return liquid_glass.components.label.cljs$core$IFn$_invoke$arity$3(icon,text,null);
}));

(liquid_glass.components.label.cljs$core$IFn$_invoke$arity$3 = (function (icon,text,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"label-icon","label-icon",-958355682))], null),icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"label-text","label-text",-1566972381))], null),text], null)], null);
}));

(liquid_glass.components.label.cljs$lang$maxFixedArity = 3);

/**
 * Glass avatar (no shitsuke equivalent). `content` is initials/hiccup shown
 *   when no :src is given. opts: :src, :alt, :class.
 */
liquid_glass.components.avatar = (function liquid_glass$components$avatar(var_args){
var G__23093 = arguments.length;
switch (G__23093) {
case 1:
return liquid_glass.components.avatar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.avatar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.avatar.cljs$core$IFn$_invoke$arity$1 = (function (content){
return liquid_glass.components.avatar.cljs$core$IFn$_invoke$arity$2(content,null);
}));

(liquid_glass.components.avatar.cljs$core$IFn$_invoke$arity$2 = (function (content,opts){
var map__23096 = opts;
var map__23096__$1 = cljs.core.__destructure_map(map__23096);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"avatar","avatar",-1607499307)),class$)], null),(cljs.core.truth_(src)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"alt","alt",-3214426),(function (){var or__5002__auto__ = alt;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})()], null)], null):content)], null);
}));

(liquid_glass.components.avatar.cljs$lang$maxFixedArity = 2);

/**
 * Glass top navigation bar (no shitsuke equivalent). `title` is string/hiccup,
 *   centered. opts: :leading, :trailing (hiccup, typically icon-button(s)),
 *   :class.
 */
liquid_glass.components.nav_bar = (function liquid_glass$components$nav_bar(var_args){
var G__23099 = arguments.length;
switch (G__23099) {
case 1:
return liquid_glass.components.nav_bar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.nav_bar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.nav_bar.cljs$core$IFn$_invoke$arity$1 = (function (title){
return liquid_glass.components.nav_bar.cljs$core$IFn$_invoke$arity$2(title,null);
}));

(liquid_glass.components.nav_bar.cljs$core$IFn$_invoke$arity$2 = (function (title,opts){
var map__23100 = opts;
var map__23100__$1 = cljs.core.__destructure_map(map__23100);
var leading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23100__$1,new cljs.core.Keyword(null,"leading","leading",-1239035032));
var trailing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23100__$1,new cljs.core.Keyword(null,"trailing","trailing",-1987290406));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23100__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"nav-bar","nav-bar",190676456)),class$)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"nav-bar-leading","nav-bar-leading",460065971))], null),leading], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"nav-bar-title","nav-bar-title",1381554669))], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"nav-bar-trailing","nav-bar-trailing",933570779))], null),trailing], null),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.nav_bar.cljs$lang$maxFixedArity = 2);

/**
 * Centered glass modal dialog (no shitsuke equivalent; distinct from `sheet`,
 *   which anchors to the bottom edge). Pair with `scrim` for the dismiss
 *   backdrop. `body` is hiccup or a seq. opts: :id, :class, :label (aria-label).
 */
liquid_glass.components.alert = (function liquid_glass$components$alert(var_args){
var G__23102 = arguments.length;
switch (G__23102) {
case 1:
return liquid_glass.components.alert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.alert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.alert.cljs$core$IFn$_invoke$arity$1 = (function (body){
return liquid_glass.components.alert.cljs$core$IFn$_invoke$arity$2(body,null);
}));

(liquid_glass.components.alert.cljs$core$IFn$_invoke$arity$2 = (function (body,opts){
var map__23103 = opts;
var map__23103__$1 = cljs.core.__destructure_map(map__23103);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23103__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23103__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23103__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"role","role",-736691072),"alertdialog",new cljs.core.Keyword(null,"aria-modal","aria-modal",553474260),true,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"alert","alert",-571950580)),class$)], null),body,liquid_glass.components.specular()], null);
}));

(liquid_glass.components.alert.cljs$lang$maxFixedArity = 2);

/**
 * Glass popover action menu (no shitsuke equivalent). `items` is a seq of
 *   {:label :act :disabled?} maps. Positioning is the consumer's responsibility
 *   (an absolutely-positioned menu next to a `position:relative` trigger).
 *   opts: :class.
 */
liquid_glass.components.menu = (function liquid_glass$components$menu(var_args){
var G__23107 = arguments.length;
switch (G__23107) {
case 1:
return liquid_glass.components.menu.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.menu.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.menu.cljs$core$IFn$_invoke$arity$1 = (function (items){
return liquid_glass.components.menu.cljs$core$IFn$_invoke$arity$2(items,null);
}));

(liquid_glass.components.menu.cljs$core$IFn$_invoke$arity$2 = (function (items,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"menu",new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"menu","menu",352255198)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))], null),(function (){var iter__5480__auto__ = (function liquid_glass$components$iter__23120(s__23121){
return (new cljs.core.LazySeq(null,(function (){
var s__23121__$1 = s__23121;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23121__$1);
if(temp__5825__auto__){
var s__23121__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23121__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23121__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23123 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23122 = (0);
while(true){
if((i__23122 < size__5479__auto__)){
var map__23133 = cljs.core._nth(c__5478__auto__,i__23122);
var map__23133__$1 = cljs.core.__destructure_map(map__23133);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23133__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23133__$1,new cljs.core.Keyword(null,"act","act",190231886));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23133__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
cljs.core.chunk_append(b__23123,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"menuitem",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"menu-item","menu-item",-1371111773)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?true:null),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__23137 = act;
if((G__23137 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__23137);
}
})()], null),label], null));

var G__23440 = (i__23122 + (1));
i__23122 = G__23440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23123),liquid_glass$components$iter__23120(cljs.core.chunk_rest(s__23121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23123),null);
}
} else {
var map__23142 = cljs.core.first(s__23121__$2);
var map__23142__$1 = cljs.core.__destructure_map(map__23142);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23142__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23142__$1,new cljs.core.Keyword(null,"act","act",190231886));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23142__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"menuitem",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"menu-item","menu-item",-1371111773)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?true:null),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__23143 = act;
if((G__23143 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__23143);
}
})()], null),label], null),liquid_glass$components$iter__23120(cljs.core.rest(s__23121__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(items);
})(),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.menu.cljs$lang$maxFixedArity = 2);

/**
 * Glass tooltip pill (no shitsuke equivalent). `text` is string/hiccup.
 *   Positioning (top/left/etc.) is the consumer's responsibility — this returns
 *   an absolutely-positioned span with no default offset. opts: :class.
 */
liquid_glass.components.tooltip = (function liquid_glass$components$tooltip(var_args){
var G__23183 = arguments.length;
switch (G__23183) {
case 1:
return liquid_glass.components.tooltip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.tooltip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.tooltip.cljs$core$IFn$_invoke$arity$1 = (function (text){
return liquid_glass.components.tooltip.cljs$core$IFn$_invoke$arity$2(text,null);
}));

(liquid_glass.components.tooltip.cljs$core$IFn$_invoke$arity$2 = (function (text,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"tooltip",new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))], null),text], null);
}));

(liquid_glass.components.tooltip.cljs$lang$maxFixedArity = 2);

/**
 * Glass list container (no shitsuke equivalent). `rows` is a seq of
 *   `list-row` (or other hiccup) — an empty collection is fine (renders no
 *   rows). opts: :surface (:regular (default) | :thick), :class.
 */
liquid_glass.components.list_view = (function liquid_glass$components$list_view(var_args){
var G__23186 = arguments.length;
switch (G__23186) {
case 1:
return liquid_glass.components.list_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.list_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.list_view.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return liquid_glass.components.list_view.cljs$core$IFn$_invoke$arity$2(rows,null);
}));

(liquid_glass.components.list_view.cljs$core$IFn$_invoke$arity$2 = (function (rows,opts){
var map__23187 = opts;
var map__23187__$1 = cljs.core.__destructure_map(map__23187);
var surface = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187__$1,new cljs.core.Keyword(null,"surface","surface",699915646));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var variant = (cljs.core.truth_((function (){var and__5000__auto__ = surface;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(surface,new cljs.core.Keyword(null,"regular","regular",-1153375582));
} else {
return and__5000__auto__;
}
})())?liquid_glass.style.class_name(["list--",cljs.core.name(surface)].join('')):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [liquid_glass.style.class_name(new cljs.core.Keyword(null,"list","list",765357683)),variant,class$], null))),new cljs.core.Keyword(null,"role","role",-736691072),"list"], null),cljs.core.seq(rows),liquid_glass.components.specular()], null);
}));

(liquid_glass.components.list_view.cljs$lang$maxFixedArity = 2);

/**
 * A row inside `list-view` (no shitsuke equivalent). `content` is
 *   hiccup/string. opts: :act (clickable row), :trailing (hiccup shown at the
 *   row's end), :class, :attrs.
 * 
 *   `:attrs` is merged onto the row element with the component's own generated
 *   attrs winning on conflict — the same contract `kotoba-ui.shell` uses — so it
 *   can add `aria-selected` / `aria-current` / `data-*` but can never clobber
 *   the row's :class, :role or :data-act.
 * 
 *   It exists because a selectable list has no other way to say a row is
 *   selected. A CSS class tells the eye and nothing else; `aria-selected`
 *   belongs on this element, which is the one carrying `role="listitem"`.
 *   Before this opt, passing `:attrs` here was silently dropped, so consuming
 *   code read as accessible while rendering nothing of the sort — reported from
 *   `kotoba-lang/mokuroku-ui`, where every app in the `app-*` suite needs it.
 */
liquid_glass.components.list_row = (function liquid_glass$components$list_row(var_args){
var G__23196 = arguments.length;
switch (G__23196) {
case 1:
return liquid_glass.components.list_row.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.list_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.list_row.cljs$core$IFn$_invoke$arity$1 = (function (content){
return liquid_glass.components.list_row.cljs$core$IFn$_invoke$arity$2(content,null);
}));

(liquid_glass.components.list_row.cljs$core$IFn$_invoke$arity$2 = (function (content,opts){
var map__23197 = opts;
var map__23197__$1 = cljs.core.__destructure_map(map__23197);
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197__$1,new cljs.core.Keyword(null,"act","act",190231886));
var trailing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197__$1,new cljs.core.Keyword(null,"trailing","trailing",-1987290406));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"list-row","list-row",506261234)),class$),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__23201 = act;
if((G__23201 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__23201);
}
})(),new cljs.core.Keyword(null,"role","role",-736691072),"listitem"], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.seq(attrs))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,base], 0)):base),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"list-row-content","list-row-content",1998212147))], null),content], null),(cljs.core.truth_(trailing)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"list-row-trailing","list-row-trailing",-1197062247))], null),trailing], null):null)], null);
}));

(liquid_glass.components.list_row.cljs$lang$maxFixedArity = 2);

/**
 * Glass filter/tag chip (no shitsuke equivalent). `label` is string/hiccup.
 *   opts: :act (the chip's own click), :on-remove-act (portable act for a
 *   dismiss × button — omit to render without one), :class.
 */
liquid_glass.components.chip = (function liquid_glass$components$chip(var_args){
var G__23206 = arguments.length;
switch (G__23206) {
case 1:
return liquid_glass.components.chip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.chip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.chip.cljs$core$IFn$_invoke$arity$1 = (function (label){
return liquid_glass.components.chip.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(liquid_glass.components.chip.cljs$core$IFn$_invoke$arity$2 = (function (label,opts){
var map__23207 = opts;
var map__23207__$1 = cljs.core.__destructure_map(map__23207);
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23207__$1,new cljs.core.Keyword(null,"act","act",190231886));
var on_remove_act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23207__$1,new cljs.core.Keyword(null,"on-remove-act","on-remove-act",1568995654));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23207__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"chip","chip",-558209167)),class$),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__23208 = act;
if((G__23208 == null)){
return null;
} else {
return liquid_glass.components.act__GT_str(G__23208);
}
})()], null),liquid_glass.components.specular(),label,(cljs.core.truth_(on_remove_act)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"chip-remove","chip-remove",492702448)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Remove",new cljs.core.Keyword(null,"data-act","data-act",-318247081),liquid_glass.components.act__GT_str(on_remove_act)], null),"\u00D7"], null):null)], null);
}));

(liquid_glass.components.chip.cljs$lang$maxFixedArity = 2);

/**
 * Glass collapsible group (no shitsuke equivalent; SwiftUI `DisclosureGroup`-
 *   shaped). Built on native `<details>`/`<summary>` — open/close needs no JS.
 *   `summary` is the always-visible header (string/hiccup); `body` is the
 *   collapsible content. opts: :open? (default closed), :class.
 */
liquid_glass.components.disclosure = (function liquid_glass$components$disclosure(var_args){
var G__23229 = arguments.length;
switch (G__23229) {
case 2:
return liquid_glass.components.disclosure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return liquid_glass.components.disclosure.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.disclosure.cljs$core$IFn$_invoke$arity$2 = (function (summary,body){
return liquid_glass.components.disclosure.cljs$core$IFn$_invoke$arity$3(summary,body,null);
}));

(liquid_glass.components.disclosure.cljs$core$IFn$_invoke$arity$3 = (function (summary,body,opts){
var map__23230 = opts;
var map__23230__$1 = cljs.core.__destructure_map(map__23230);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),(cljs.core.truth_(open_QMARK_)?true:null),new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"disclosure","disclosure",1613252777)),class$)], null),liquid_glass.components.specular(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"disclosure-summary","disclosure-summary",-1657037003))], null),summary,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"disclosure-chevron","disclosure-chevron",1254574711))], null),"\u2304"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"disclosure-body","disclosure-body",-1840874015))], null),body], null)], null);
}));

(liquid_glass.components.disclosure.cljs$lang$maxFixedArity = 3);

/**
 * Inline SVG filter definition for the optional `.liquid-glass--lens`
 *   refraction treatment (feTurbulence + feDisplacementMap, id
 *   `liquid-glass-lens`). Emit ONCE per page, anywhere in <body>; the element is
 *   0×0, aria-hidden and paints nothing itself. Engines whose backdrop-filter
 *   accepts url() (Chromium — partial; see docs/design.md "Motion & dynamic
 *   effects") composite the displacement into the glass backdrop via the
 *   CSS @supports upgrade in liquid-glass.style; everything else keeps the plain
 *   blur fallback, so this is safe to emit unconditionally but the *class* is
 *   opt-in per showcase surface (displacement over a live backdrop is not free).
 * 
 *   Values come from the `:liquid-glass/lens` token group. SVG filter-primitive
 *   attributes cannot reference CSS custom properties, so they are resolved here
 *   at hiccup-emit time — pass a partial token override map to retune, e.g.
 *   `(lens-filter-defs {:liquid-glass/lens {:scale "12"}})`.
 */
liquid_glass.components.lens_filter_defs = (function liquid_glass$components$lens_filter_defs(var_args){
var G__23239 = arguments.length;
switch (G__23239) {
case 0:
return liquid_glass.components.lens_filter_defs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return liquid_glass.components.lens_filter_defs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.lens_filter_defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return liquid_glass.components.lens_filter_defs.cljs$core$IFn$_invoke$arity$1(null);
}));

(liquid_glass.components.lens_filter_defs.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
var map__23240 = new cljs.core.Keyword("liquid-glass","lens","liquid-glass/lens",-450169446).cljs$core$IFn$_invoke$arity$1(liquid_glass.tokens.resolve_tokens(overrides));
var map__23240__$1 = cljs.core.__destructure_map(map__23240);
var frequency = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23240__$1,new cljs.core.Keyword(null,"frequency","frequency",-1408891382));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23240__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var octaves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23240__$1,new cljs.core.Keyword(null,"octaves","octaves",955457820));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"focusable","focusable",1031236480),"false",new cljs.core.Keyword(null,"width","width",-384071477),"0",new cljs.core.Keyword(null,"height","height",1025178622),"0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"liquid-glass-lens",new cljs.core.Keyword(null,"x","x",2099068185),"-20%",new cljs.core.Keyword(null,"y","y",-1757859776),"-20%",new cljs.core.Keyword(null,"width","width",-384071477),"140%",new cljs.core.Keyword(null,"height","height",1025178622),"140%",new cljs.core.Keyword(null,"color-interpolation-filters","color-interpolation-filters",-519168139),"sRGB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feTurbulence","feTurbulence",2079450215),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"fractalNoise",new cljs.core.Keyword(null,"baseFrequency","baseFrequency",-1013443755),frequency,new cljs.core.Keyword(null,"numOctaves","numOctaves",810606547),octaves,new cljs.core.Keyword(null,"seed","seed",68613327),"7",new cljs.core.Keyword(null,"result","result",1415092211),"liquid-glass-lens-noise"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feDisplacementMap","feDisplacementMap",176959495),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),"SourceGraphic",new cljs.core.Keyword(null,"in2","in2",782506768),"liquid-glass-lens-noise",new cljs.core.Keyword(null,"scale","scale",-230427353),scale,new cljs.core.Keyword(null,"xChannelSelector","xChannelSelector",778404855),"R",new cljs.core.Keyword(null,"yChannelSelector","yChannelSelector",42690605),"G"], null)], null)], null)], null);
}));

(liquid_glass.components.lens_filter_defs.cljs$lang$maxFixedArity = 1);

/**
 * Glass circular gauge (no shitsuke equivalent; SwiftUI `Gauge`-shaped —
 *   determinate, unlike `progress-circle`'s indeterminate spinner). `value`/
 *   opts :max (default 100) set the ring fill via an inline conic-gradient
 *   (computed once per render — no CSS custom-property trick needed, so it
 *   works identically across every reagent/SSR target). opts: :max, :label
 *   (shown inside the ring; default "<pct>%"), :class.
 */
liquid_glass.components.gauge = (function liquid_glass$components$gauge(var_args){
var G__23265 = arguments.length;
switch (G__23265) {
case 1:
return liquid_glass.components.gauge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return liquid_glass.components.gauge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(liquid_glass.components.gauge.cljs$core$IFn$_invoke$arity$1 = (function (value){
return liquid_glass.components.gauge.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(liquid_glass.components.gauge.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
var map__23268 = opts;
var map__23268__$1 = cljs.core.__destructure_map(map__23268);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23268__$1,new cljs.core.Keyword(null,"max","max",61366548));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23268__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23268__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max__$1 = (function (){var or__5002__auto__ = max;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (100);
}
})();
var pct = ((function (){var x__5090__auto__ = (function (){var x__5087__auto__ = (value / max__$1);
var y__5088__auto__ = 0.0;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = 1.0;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})() * (100));
var ring = ["conic-gradient(var(--liquid-glass-accent-tint-strong) 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct),"%,","var(--liquid-glass-surface-regular-tint) ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct),"% 100%)"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.components.cls(liquid_glass.style.class_name(new cljs.core.Keyword(null,"gauge","gauge",63470758)),class$),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),ring], null),new cljs.core.Keyword(null,"role","role",-736691072),"meter",new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658),value,new cljs.core.Keyword(null,"aria-valuemin","aria-valuemin",138532158),(0),new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),max__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),liquid_glass.style.class_name(new cljs.core.Keyword(null,"gauge-label","gauge-label",1978690427))], null),(function (){var or__5002__auto__ = label;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((pct | (0))),"%"].join('');
}
})()], null)], null);
}));

(liquid_glass.components.gauge.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=liquid_glass.components.js.map
