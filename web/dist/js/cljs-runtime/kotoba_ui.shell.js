goog.provide('kotoba_ui.shell');
/**
 * Stable `kotoba-shell__*` class for a component or component--modifier
 *   (re-exported from kotoba-ui.shell.style).
 */
kotoba_ui.shell.class_name = kotoba_ui.shell.style.class_name;
/**
 * All kotoba-shell__* structural rules wrapped in `@layer kotoba.hig {...}`
 *   (re-exported from kotoba-ui.shell.style; already included in
 *   kotoba-ui.theme/theme-css).
 */
kotoba_ui.shell.shell_css = kotoba_ui.shell.style.shell_css;
/**
 * [opts children] from a variadic arg list whose first element may be an
 *   opts map. Hiccup children are never maps, so map? is unambiguous.
 */
kotoba_ui.shell.split_opts = (function kotoba_ui$shell$split_opts(args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null);
}
});
/**
 * Join a required kotoba-shell class with an optional consumer :class opt
 *   (same helper shape as liquid-glass.components).
 */
kotoba_ui.shell.cls = (function kotoba_ui$shell$cls(base,extra){
if(cljs.core.not(cljs.core.seq(extra))){
return base;
} else {
if(cljs.core.not(cljs.core.seq(base))){
return extra;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra)].join('');

}
}
});
/**
 * Consumer :class opt (string, keyword, or vector of those) -> a
 *   space-joined class string (nil-safe: nil in, nil out; nils in a vector
 *   are skipped).
 */
kotoba_ui.shell.class_opt__GT_str = (function kotoba_ui$shell$class_opt__GT_str(c){
if((c == null)){
return null;
} else {
if(typeof c === 'string'){
return c;
} else {
if((c instanceof cljs.core.Keyword)){
return cljs.core.name(c);
} else {
if(cljs.core.sequential_QMARK_(c)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(kotoba_ui.shell.class_opt__GT_str,c)));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(c);

}
}
}
}
});
/**
 * Merge the shared root-element opts (`:id` / `:class` / `:attrs`, see the
 *   ns docstring) into a component's own generated attr map `base`.
 * 
 *   Merge semantics: consumer `:class` is appended to the component's own
 *   class; `:id` is assoc'd; `:attrs` is merged in with `base` winning on
 *   conflict, so `:attrs` can never clobber the component's generated
 *   :class/:style (nor the top-level :id/:class opts).
 */
kotoba_ui.shell.with_root_attrs = (function kotoba_ui$shell$with_root_attrs(base,p__23441){
var map__23442 = p__23441;
var map__23442__$1 = cljs.core.__destructure_map(map__23442);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var G__23443 = ((cljs.core.seq(attrs))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,base], 0)):base);
var G__23443__$1 = (((!((class$ == null))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__23443,new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.shell.cls,kotoba_ui.shell.class_opt__GT_str(class$)):G__23443);
if((!((id == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23443__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__23443__$1;
}
});
/**
 * Keyword or string opt value -> CSS string (:center -> "center").
 */
kotoba_ui.shell.css_value = (function kotoba_ui$shell$css_value(v){
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
});
/**
 * Spacing token keyword -> its `--hig-spacing-*` var reference
 *   (:6 -> "var(--hig-spacing-6)").
 */
kotoba_ui.shell.spacing_var = (function kotoba_ui$shell$spacing_var(k){
return ["var(--hig-spacing-",cljs.core.name(k),")"].join('');
});
/**
 * Flex column (row with `:direction :horizontal`). opts: :gap (spacing
 *   token keyword, default :4 via the stylesheet), :align (align-items),
 *   :justify (justify-content), plus the shared root opts :id / :class /
 *   :attrs (ns docstring).
 */
kotoba_ui.shell.stack = (function kotoba_ui$shell$stack(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23491 = arguments.length;
var i__5727__auto___23492 = (0);
while(true){
if((i__5727__auto___23492 < len__5726__auto___23491)){
args__5732__auto__.push((arguments[i__5727__auto___23492]));

var G__23493 = (i__5727__auto___23492 + (1));
i__5727__auto___23492 = G__23493;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return kotoba_ui.shell.stack.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(kotoba_ui.shell.stack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__23445 = kotoba_ui.shell.split_opts(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23445,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23445,(1),null);
var map__23448 = opts;
var map__23448__$1 = cljs.core.__destructure_map(map__23448);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(gap)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),kotoba_ui.shell.spacing_var(gap)], null):null),(cljs.core.truth_(align)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),kotoba_ui.shell.css_value(align)], null):null),(cljs.core.truth_(justify)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),kotoba_ui.shell.css_value(justify)], null):null)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kotoba_ui.shell.with_root_attrs((function (){var G__23449 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stack","stack",-793405930)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"stack","stack",-793405930)))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1("stack--horizontal") : kotoba_ui.shell.class_name.call(null, "stack--horizontal")))].join(''):null)].join('')], null);
if(cljs.core.seq(style)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23449,new cljs.core.Keyword(null,"style","style",-496642736),style);
} else {
return G__23449;
}
})(),opts)], null),children);
}));

(kotoba_ui.shell.stack.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kotoba_ui.shell.stack.cljs$lang$applyTo = (function (seq23444){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23444));
}));

/**
 * Flex-grow filler — pushes siblings apart inside a stack/toolbar row.
 *   Optional opts map: the shared root opts :id / :class / :attrs
 *   (ns docstring).
 */
kotoba_ui.shell.spacer = (function kotoba_ui$shell$spacer(var_args){
var G__23451 = arguments.length;
switch (G__23451) {
case 0:
return kotoba_ui.shell.spacer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return kotoba_ui.shell.spacer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kotoba_ui.shell.spacer.cljs$core$IFn$_invoke$arity$0 = (function (){
return kotoba_ui.shell.spacer.cljs$core$IFn$_invoke$arity$1(null);
}));

(kotoba_ui.shell.spacer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kotoba_ui.shell.with_root_attrs(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spacer","spacer",2067425139)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"spacer","spacer",2067425139))),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),opts)], null);
}));

(kotoba_ui.shell.spacer.cljs$lang$maxFixedArity = 1);

/**
 * Semantic content section: hairline top border, content-margin padding,
 *   readable max-width column centered by default. opts: :title (rendered as a
 *   `.hig-title2` heading), :wide (true opts out of the readable max-width),
 *   plus the shared root opts :id / :class / :attrs (ns docstring).
 */
kotoba_ui.shell.section = (function kotoba_ui$shell$section(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23499 = arguments.length;
var i__5727__auto___23500 = (0);
while(true){
if((i__5727__auto___23500 < len__5726__auto___23499)){
args__5732__auto__.push((arguments[i__5727__auto___23500]));

var G__23501 = (i__5727__auto___23500 + (1));
i__5727__auto___23500 = G__23501;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return kotoba_ui.shell.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(kotoba_ui.shell.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__23455 = kotoba_ui.shell.split_opts(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23455,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23455,(1),null);
var map__23458 = opts;
var map__23458__$1 = cljs.core.__destructure_map(map__23458);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23458__$1,new cljs.core.Keyword(null,"title","title",636505583));
var wide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23458__$1,new cljs.core.Keyword(null,"wide","wide",-151772487));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),kotoba_ui.shell.with_root_attrs(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section","section",-300141526)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"section","section",-300141526)))),(cljs.core.truth_(wide)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1("section--wide") : kotoba_ui.shell.class_name.call(null, "section--wide")))].join(''):null)].join('')], null),opts),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section-title","section-title",1261938902)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"section-title","section-title",1261938902))))," hig-title2"].join('')], null),title], null):null)], null),children);
}));

(kotoba_ui.shell.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kotoba_ui.shell.section.cljs$lang$applyTo = (function (seq23454){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23454));
}));

/**
 * Page-entrance block: `.hig-large-title` title, `.hig-title3`
 *   secondary-label tagline, centered action row, generous 4pt-grid padding
 *   and a subtle radial accent wash (color-mix over the tint token — follows
 *   the theme accent, no hardcoded gradient). opts: :title, :tagline,
 *   :actions (seq of hiccup, typically kotoba-ui buttons), plus the shared
 *   root opts :id / :class / :attrs (ns docstring).
 */
kotoba_ui.shell.hero = (function kotoba_ui$shell$hero(opts){
var map__23461 = opts;
var map__23461__$1 = cljs.core.__destructure_map(map__23461);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23461__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23461__$1,new cljs.core.Keyword(null,"tagline","tagline",281987682));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23461__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),kotoba_ui.shell.with_root_attrs(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hero","hero",1983137057)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"hero","hero",1983137057)))], null),opts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hero-title","hero-title",-569688454)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"hero-title","hero-title",-569688454))))," hig-large-title"].join('')], null),title], null),(cljs.core.truth_(tagline)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hero-tagline","hero-tagline",1481444226)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"hero-tagline","hero-tagline",1481444226))))," hig-title3"].join('')], null),tagline], null):null),((cljs.core.seq(actions))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hero-actions","hero-actions",-705643455)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"hero-actions","hero-actions",-705643455)))], null)], null),actions):null)], null);
});
/**
 * Responsive card grid: `repeat(auto-fill, minmax(min, 1fr))` columns.
 *   opts: :min (CSS length string, default 260px via the stylesheet), :gap
 *   (spacing token keyword), plus the shared root opts :id / :class / :attrs
 *   (ns docstring). Children get `min-width: 0` from the stylesheet — long
 *   content can't blow a track out.
 */
kotoba_ui.shell.grid = (function kotoba_ui$shell$grid(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23510 = arguments.length;
var i__5727__auto___23511 = (0);
while(true){
if((i__5727__auto___23511 < len__5726__auto___23510)){
args__5732__auto__.push((arguments[i__5727__auto___23511]));

var G__23513 = (i__5727__auto___23511 + (1));
i__5727__auto___23511 = G__23513;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return kotoba_ui.shell.grid.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(kotoba_ui.shell.grid.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__23464 = kotoba_ui.shell.split_opts(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23464,(0),null);
var cards = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23464,(1),null);
var map__23467 = opts;
var map__23467__$1 = cljs.core.__destructure_map(map__23467);
var min_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23467__$1,new cljs.core.Keyword(null,"min","min",444991522));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23467__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(min_w)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),["repeat(auto-fill, minmax(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_w),", 1fr))"].join('')], null):null),(cljs.core.truth_(gap)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),kotoba_ui.shell.spacing_var(gap)], null):null)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kotoba_ui.shell.with_root_attrs((function (){var G__23468 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)))], null);
if(cljs.core.seq(style)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23468,new cljs.core.Keyword(null,"style","style",-496642736),style);
} else {
return G__23468;
}
})(),opts)], null),cards);
}));

(kotoba_ui.shell.grid.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kotoba_ui.shell.grid.cljs$lang$applyTo = (function (seq23463){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23463));
}));

/**
 * Whole-app frame. opts: :nav (typically a kotoba-ui nav-bar/toolbar —
 *   rendered sticky at the top), :sidebar (optional; fixed-width desktop
 *   column that collapses to single-column under the breakpoint), plus the
 *   shared root opts :id / :class / :attrs (ns docstring).
 *   `content` renders in a `<main>` with `min-width: 0` +
 *   `overflow-wrap: break-word` (the grid-item overflow guard — this exact
 *   bug shipped in production).
 */
kotoba_ui.shell.app_shell = (function kotoba_ui$shell$app_shell(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23519 = arguments.length;
var i__5727__auto___23520 = (0);
while(true){
if((i__5727__auto___23520 < len__5726__auto___23519)){
args__5732__auto__.push((arguments[i__5727__auto___23520]));

var G__23521 = (i__5727__auto___23520 + (1));
i__5727__auto___23520 = G__23521;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return kotoba_ui.shell.app_shell.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(kotoba_ui.shell.app_shell.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__23471 = kotoba_ui.shell.split_opts(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23471,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23471,(1),null);
var map__23474 = opts;
var map__23474__$1 = cljs.core.__destructure_map(map__23474);
var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23474__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var sidebar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23474__$1,new cljs.core.Keyword(null,"sidebar","sidebar",35784458));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kotoba_ui.shell.with_root_attrs(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app","app",-560961707)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"app","app",-560961707)))),(cljs.core.truth_(sidebar)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1("app--with-sidebar") : kotoba_ui.shell.class_name.call(null, "app--with-sidebar")))].join(''):null)].join('')], null),opts),(cljs.core.truth_(nav)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-nav","app-nav",-2025265152)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"app-nav","app-nav",-2025265152)))], null),nav], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-body","app-body",1999385840)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"app-body","app-body",1999385840)))], null),(cljs.core.truth_(sidebar)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-sidebar","app-sidebar",-1799314023)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"app-sidebar","app-sidebar",-1799314023)))], null),sidebar], null):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.shell.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-main","app-main",-1283283271)) : kotoba_ui.shell.class_name.call(null, new cljs.core.Keyword(null,"app-main","app-main",-1283283271)))], null)], null),content)], null)], null);
}));

(kotoba_ui.shell.app_shell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kotoba_ui.shell.app_shell.cljs$lang$applyTo = (function (seq23470){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23470));
}));

/**
 * The full document hiccup: `[:html ...]` with charset/viewport meta,
 *   title, optional description meta, theme-color metas (browser chrome
 *   matches the theme's page background; per-scheme media-gated when the
 *   appearance is :auto), the theme's complete CSS bundle
 *   (kotoba-ui.theme/theme-css) inlined, and `data-appearance` stamped when
 *   the theme forces an appearance. opts: :title, :description, :lang
 *   (default "en"), :theme (a kotoba-ui.theme map), :head (extra head
 *   hiccup), plus the shared root opts :id / :class / :attrs (ns docstring) —
 *   for `page` they land on the `<body>` element (the `<html>` root keeps
 *   only :lang + data-appearance). Render with `(->html (page ...))` — or use
 *   kotoba-ui.core/->page, which prepends the doctype.
 */
kotoba_ui.shell.page = (function kotoba_ui$shell$page(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23527 = arguments.length;
var i__5727__auto___23528 = (0);
while(true){
if((i__5727__auto___23528 < len__5726__auto___23527)){
args__5732__auto__.push((arguments[i__5727__auto___23528]));

var G__23529 = (i__5727__auto___23528 + (1));
i__5727__auto___23528 = G__23529;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return kotoba_ui.shell.page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(kotoba_ui.shell.page.cljs$core$IFn$_invoke$arity$variadic = (function (opts,body){
var map__23481 = opts;
var map__23481__$1 = cljs.core.__destructure_map(map__23481);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body_attrs = cljs.core.not_empty(kotoba_ui.shell.with_root_attrs(cljs.core.PersistentArrayMap.EMPTY,opts));
var appearance = kotoba_ui.theme.appearance_attr(theme);
var map__23482 = kotoba_ui.theme.theme_colors(theme);
var map__23482__$1 = cljs.core.__destructure_map(map__23482);
var light = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23482__$1,new cljs.core.Keyword(null,"light","light",1918998747));
var dark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23482__$1,new cljs.core.Keyword(null,"dark","dark",1818973999));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),(function (){var or__5002__auto__ = lang;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "en";
}
})(),new cljs.core.Keyword(null,"data-appearance","data-appearance",-1241208536),appearance], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"charset","charset",-1063822193),"utf-8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width=device-width, initial-scale=1, viewport-fit=cover"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5002__auto__ = title;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})()], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"description",new cljs.core.Keyword(null,"content","content",15833224),description], null)], null):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(appearance,"dark"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),(function (){var G__23485 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"theme-color",new cljs.core.Keyword(null,"content","content",15833224),light], null);
if((appearance == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23485,new cljs.core.Keyword(null,"media","media",-1066138403),"(prefers-color-scheme: light)");
} else {
return G__23485;
}
})()], null):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(appearance,"light"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),(function (){var G__23487 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"theme-color",new cljs.core.Keyword(null,"content","content",15833224),dark], null);
if((appearance == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23487,new cljs.core.Keyword(null,"media","media",-1066138403),"(prefers-color-scheme: dark)");
} else {
return G__23487;
}
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),kotoba_ui.theme.theme_css.cljs$core$IFn$_invoke$arity$1(theme)], null)], null),head], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body_attrs)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),body_attrs], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)),body)], null);
}));

(kotoba_ui.shell.page.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kotoba_ui.shell.page.cljs$lang$applyTo = (function (seq23478){
var G__23479 = cljs.core.first(seq23478);
var seq23478__$1 = cljs.core.next(seq23478);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23479,seq23478__$1);
}));


//# sourceMappingURL=kotoba_ui.shell.js.map
