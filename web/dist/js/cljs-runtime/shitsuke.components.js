goog.provide('shitsuke.components');
/**
 * Render an `act` value to the data-act attribute string, preserving the
 *   keyword namespace: :cart/add → "cart/add", :new-deck → "new-deck".
 *   Strings pass through; nil stays nil (attribute dropped).
 */
shitsuke.components.act__GT_str = (function shitsuke$components$act__GT_str(a){
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
/**
 * Plain button. `label` may be string or hiccup. opts: :class, :act, :disabled,
 *   :title, :type.
 */
shitsuke.components.button = (function shitsuke$components$button(var_args){
var G__22522 = arguments.length;
switch (G__22522) {
case 1:
return shitsuke.components.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.components.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.button.cljs$core$IFn$_invoke$arity$1 = (function (label){
return shitsuke.components.button.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(shitsuke.components.button.cljs$core$IFn$_invoke$arity$2 = (function (label,opts){
var map__22525 = opts;
var map__22525__$1 = cljs.core.__destructure_map(map__22525);
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,new cljs.core.Keyword(null,"act","act",190231886));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"button","button",1456579943)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "button";
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?true:null),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22530 = act;
if((G__22530 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22530);
}
})()], null),label], null);
}));

(shitsuke.components.button.cljs$lang$maxFixedArity = 2);

/**
 * Button whose label is an icon glyph (string/hiccup). Same opts as button.
 */
shitsuke.components.icon_button = (function shitsuke$components$icon_button(var_args){
var G__22534 = arguments.length;
switch (G__22534) {
case 1:
return shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$1 = (function (icon){
return shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$2(icon,null);
}));

(shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$2 = (function (icon,opts){
return shitsuke.components.button.cljs$core$IFn$_invoke$arity$2(icon,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"icon-button","icon-button",-1094997778)),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return null;
}
})()].join('')));
}));

(shitsuke.components.icon_button.cljs$lang$maxFixedArity = 2);

/**
 * Label + control row. `control` is hiccup (input/textarea/select).
 */
shitsuke.components.field = (function shitsuke$components$field(var_args){
var G__22539 = arguments.length;
switch (G__22539) {
case 2:
return shitsuke.components.field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shitsuke.components.field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.field.cljs$core$IFn$_invoke$arity$2 = (function (label_text,control){
return shitsuke.components.field.cljs$core$IFn$_invoke$arity$3(label_text,control,null);
}));

(shitsuke.components.field.cljs$core$IFn$_invoke$arity$3 = (function (label_text,control,opts){
var map__22541 = opts;
var map__22541__$1 = cljs.core.__destructure_map(map__22541);
var for_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22541__$1,new cljs.core.Keyword(null,"for-id","for-id",-1264833830));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22541__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"field","field",-1302436500)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join('')], null),(cljs.core.truth_(label_text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),for_id], null),label_text], null):null),control], null);
}));

(shitsuke.components.field.cljs$lang$maxFixedArity = 3);

/**
 * Shared attrs builder for the native text controls (`input`/`textarea`).
 * 
 *   - A caller `:on-input` is re-attached as `:on-change` when no `:on-change`
 *  is given (kept as-is when the caller wired both — an explicit `:on-change`
 *  always wins, never clobbered). React's `onChange` on text controls fires
 *  on the native `input` event, so the caller-visible semantics
 *  (per-keystroke, `(.. e -target -value)`) are identical — but the rename
 *  matters under reagent: reagent's async-rendering-safe controlled-input
 *  path (reagent.impl.input/input-render-setup) only engages when the props
 *  carry BOTH `value` and `onChange`. With `:value` + `:on-input` the control
 *  is a plain React controlled input under reagent's rAF-batched re-rendering:
 *  after every keystroke React restores the DOM to the last-*rendered* (stale)
 *  value, so any keystroke landing before the next render is typed into a
 *  reverted field and everything but the last keystroke is lost. Reproduced
 *  against reagent 1.2.0/React 18; root-caused downstream in
 *  kotoba-lang/liquid-glass-ui PR #3 (net-babiniku text fields).
 *   - Every other caller opt passes through untouched (`:on-key-down`,
 *  `:disabled`, `:aria-label`, `:maxLength`, ...); `:class` is appended to
 *  the base `shitsuke__<component>` class; `:act` maps to `:data-act`.
 *   - Pure data in → pure data out: equal opts produce `=` hiccup.
 * 
 *   `base` is the control-specific leading attrs (:id/:class/:type/:rows),
 *   passed pre-built so the emitted attribute order — and therefore the SSR
 *   HTML string — stays stable.
 */
shitsuke.components.control_attrs = (function shitsuke$components$control_attrs(opts,base){
var map__22548 = opts;
var map__22548__$1 = cljs.core.__destructure_map(map__22548);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22548__$1,new cljs.core.Keyword(null,"value","value",305978217));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22548__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22548__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22548__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22548__$1,new cljs.core.Keyword(null,"act","act",190231886));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = value;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){var or__5002__auto__ = on_change;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return on_input;
}
})(),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(cljs.core.truth_(on_change)?on_input:null),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22551 = act;
if((G__22551 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22551);
}
})()], 0)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"act","act",190231886)], 0))], 0));
});
/**
 * Text input. opts: :id, :value, :placeholder, :type, :on-input (cljs — see
 *   `control-attrs`: attached to the hiccup as :on-change so reagent's
 *   async-safe controlled-input path engages; an explicit :on-change wins),
 *   :act (ssr), :class, plus full attr passthrough (:disabled, :aria-*, ...).
 */
shitsuke.components.input = (function shitsuke$components$input(opts){
var map__22553 = opts;
var map__22553__$1 = cljs.core.__destructure_map(map__22553);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22553__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22553__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22553__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),shitsuke.components.control_attrs(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"input","input",556931961)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "text";
}
})()], null))], null);
});
/**
 * Textarea. Same opts contract as `input` (plus :rows, default 6; no :type).
 *   :value rides as an *attribute* (not element content) so reagent keeps the
 *   control following app state — value-as-child is read by React only at mount
 *   and the field silently stops being controlled. For SSR,
 *   shitsuke.hiccup/->html special-cases <textarea>: a :value attribute renders
 *   as escaped element content (real HTML has no value attribute on textarea).
 */
shitsuke.components.textarea = (function shitsuke$components$textarea(opts){
var map__22554 = opts;
var map__22554__$1 = cljs.core.__destructure_map(map__22554);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22554__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22554__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22554__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),shitsuke.components.control_attrs(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"textarea","textarea",-650375824)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join(''),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var or__5002__auto__ = rows;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (6);
}
})()], null))], null);
});
/**
 * `options` is a vec of [value label] pairs. opts: :id, :value, :on-change, :act.
 */
shitsuke.components.select = (function shitsuke$components$select(options,opts){
var map__22555 = opts;
var map__22555__$1 = cljs.core.__destructure_map(map__22555);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22555__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22555__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22555__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22555__$1,new cljs.core.Keyword(null,"act","act",190231886));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),shitsuke.style.class_name(new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22556 = act;
if((G__22556 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22556);
}
})()], null),(function (){var iter__5480__auto__ = (function shitsuke$components$select_$_iter__22558(s__22559){
return (new cljs.core.LazySeq(null,(function (){
var s__22559__$1 = s__22559;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22559__$1);
if(temp__5825__auto__){
var s__22559__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22559__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22559__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22561 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22560 = (0);
while(true){
if((i__22560 < size__5479__auto__)){
var vec__22563 = cljs.core._nth(c__5478__auto__,i__22560);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22563,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22563,(1),null);
cljs.core.chunk_append(b__22561,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))], null),l], null));

var G__22864 = (i__22560 + (1));
i__22560 = G__22864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22561),shitsuke$components$select_$_iter__22558(cljs.core.chunk_rest(s__22559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22561),null);
}
} else {
var vec__22678 = cljs.core.first(s__22559__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22678,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22678,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))], null),l], null),shitsuke$components$select_$_iter__22558(cljs.core.rest(s__22559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(options);
})()], null);
});
/**
 * Box container. `body` is hiccup or seq. opts: :class, :id.
 */
shitsuke.components.card = (function shitsuke$components$card(var_args){
var G__22698 = arguments.length;
switch (G__22698) {
case 1:
return shitsuke.components.card.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.components.card.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.card.cljs$core$IFn$_invoke$arity$1 = (function (body){
return shitsuke.components.card.cljs$core$IFn$_invoke$arity$2(body,null);
}));

(shitsuke.components.card.cljs$core$IFn$_invoke$arity$2 = (function (body,opts){
var map__22705 = opts;
var map__22705__$1 = cljs.core.__destructure_map(map__22705);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22705__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"card","card",-1430355152)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join('')], null),body], null);
}));

(shitsuke.components.card.cljs$lang$maxFixedArity = 2);

/**
 * Horizontal action row. `actions` is a seq of hiccup (typically buttons).
 */
shitsuke.components.toolbar = (function shitsuke$components$toolbar(var_args){
var G__22723 = arguments.length;
switch (G__22723) {
case 1:
return shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$1 = (function (actions){
return shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$2(actions,null);
}));

(shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$2 = (function (actions,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return null;
}
})()].join('')], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477)], null),actions)], null);
}));

(shitsuke.components.toolbar.cljs$lang$maxFixedArity = 2);

/**
 * Tab strip. `tabs` is [id label] pairs; `current` is the active id.
 */
shitsuke.components.mode_tabs = (function shitsuke$components$mode_tabs(var_args){
var G__22731 = arguments.length;
switch (G__22731) {
case 2:
return shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$2 = (function (tabs,current){
return shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$3(tabs,current,null);
}));

(shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$3 = (function (tabs,current,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),shitsuke.style.class_name(new cljs.core.Keyword(null,"mode-tabs","mode-tabs",955511815))], null),(function (){var iter__5480__auto__ = (function shitsuke$components$iter__22732(s__22733){
return (new cljs.core.LazySeq(null,(function (){
var s__22733__$1 = s__22733;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22733__$1);
if(temp__5825__auto__){
var s__22733__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22733__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22733__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22735 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22734 = (0);
while(true){
if((i__22734 < size__5479__auto__)){
var vec__22736 = cljs.core._nth(c__5478__auto__,i__22734);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22736,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22736,(1),null);
cljs.core.chunk_append(b__22735,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(id),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"tab","tab",-559583621)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current))?[" ",shitsuke.style.class_name(new cljs.core.Keyword(null,"tab--active","tab--active",-1453423711))].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22739 = id;
if((G__22739 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22739);
}
})()], null),label], null));

var G__22934 = (i__22734 + (1));
i__22734 = G__22934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22735),shitsuke$components$iter__22732(cljs.core.chunk_rest(s__22733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22735),null);
}
} else {
var vec__22744 = cljs.core.first(s__22733__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22744,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22744,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(id),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"tab","tab",-559583621)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current))?[" ",shitsuke.style.class_name(new cljs.core.Keyword(null,"tab--active","tab--active",-1453423711))].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22747 = id;
if((G__22747 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22747);
}
})()], null),label], null),shitsuke$components$iter__22732(cljs.core.rest(s__22733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabs);
})()], null);
}));

(shitsuke.components.mode_tabs.cljs$lang$maxFixedArity = 3);

/**
 * Selectable thumbnail. `active?` toggles the active class. `body` is hiccup.
 */
shitsuke.components.thumb = (function shitsuke$components$thumb(var_args){
var G__22753 = arguments.length;
switch (G__22753) {
case 2:
return shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$2 = (function (body,active_QMARK_){
return shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$3(body,active_QMARK_,null);
}));

(shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$3 = (function (body,active_QMARK_,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"thumb","thumb",1718947232)),(cljs.core.truth_(active_QMARK_)?[" ",shitsuke.style.class_name(new cljs.core.Keyword(null,"thumb--active","thumb--active",1524288554))].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22790 = new cljs.core.Keyword(null,"act","act",190231886).cljs$core$IFn$_invoke$arity$1(opts);
if((G__22790 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22790);
}
})()], null),body], null);
}));

(shitsuke.components.thumb.cljs$lang$maxFixedArity = 3);

/**
 * Visibility-toggled pane. `hidden?` hides it. `body` is hiccup.
 */
shitsuke.components.pane = (function shitsuke$components$pane(hidden_QMARK_,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),shitsuke.style.class_name(new cljs.core.Keyword(null,"pane","pane",1593450723)),new cljs.core.Keyword(null,"hidden","hidden",-312506092),(cljs.core.truth_(hidden_QMARK_)?true:null)], null),body], null);
});

//# sourceMappingURL=shitsuke.components.js.map
