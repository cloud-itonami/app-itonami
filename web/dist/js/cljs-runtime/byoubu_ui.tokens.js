goog.provide('byoubu_ui.tokens');
byoubu_ui.tokens.default_tokens = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("byoubu","plate","byoubu/plate",1535429299),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"0",new cljs.core.Keyword(null,"content-z","content-z",-268017743),"1",new cljs.core.Keyword(null,"fit","fit",869444807),"cover",new cljs.core.Keyword(null,"position","position",-2011731912),"center",new cljs.core.Keyword(null,"media-fade","media-fade",1142420228),"480ms",new cljs.core.Keyword(null,"media-easing","media-easing",1146484515),"cubic-bezier(0.2, 0, 0, 1)"], null),new cljs.core.Keyword("byoubu","scrim","byoubu/scrim",1794983790),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0",new cljs.core.Keyword(null,"color","color",1011675173),"var(--byoubu-scrim-color, #000)"], null)], null);
byoubu_ui.tokens.deep_merge = (function byoubu_ui$tokens$deep_merge(a,b){
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(byoubu_ui.tokens.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if((!((b == null)))){
return b;
} else {
return a;

}
}
});
byoubu_ui.tokens.resolve_tokens = (function byoubu_ui$tokens$resolve_tokens(var_args){
var G__23036 = arguments.length;
switch (G__23036) {
case 0:
return byoubu_ui.tokens.resolve_tokens.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return byoubu_ui.tokens.resolve_tokens.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(byoubu_ui.tokens.resolve_tokens.cljs$core$IFn$_invoke$arity$0 = (function (){
return byoubu_ui.tokens.resolve_tokens.cljs$core$IFn$_invoke$arity$1(null);
}));

(byoubu_ui.tokens.resolve_tokens.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
return byoubu_ui.tokens.deep_merge(byoubu_ui.tokens.default_tokens,overrides);
}));

(byoubu_ui.tokens.resolve_tokens.cljs$lang$maxFixedArity = 1);

byoubu_ui.tokens.var_name = (function byoubu_ui$tokens$var_name(group,k){
return ["--byoubu-",cljs.core.name(group),"-",cljs.core.name(k)].join('');
});
/**
 * `:root{...}` custom properties from the resolved token map.
 */
byoubu_ui.tokens.css_variables = (function byoubu_ui$tokens$css_variables(var_args){
var G__23040 = arguments.length;
switch (G__23040) {
case 0:
return byoubu_ui.tokens.css_variables.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return byoubu_ui.tokens.css_variables.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(byoubu_ui.tokens.css_variables.cljs$core$IFn$_invoke$arity$0 = (function (){
return byoubu_ui.tokens.css_variables.cljs$core$IFn$_invoke$arity$1(null);
}));

(byoubu_ui.tokens.css_variables.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
var tokens = byoubu_ui.tokens.resolve_tokens.cljs$core$IFn$_invoke$arity$1(overrides);
return [":root { ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__5480__auto__ = (function byoubu_ui$tokens$iter__23063(s__23064){
return (new cljs.core.LazySeq(null,(function (){
var s__23064__$1 = s__23064;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23064__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__23070 = cljs.core.first(xs__6385__auto__);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(1),null);
var iterys__5476__auto__ = ((function (s__23064__$1,vec__23070,group,ks,xs__6385__auto__,temp__5825__auto__,tokens){
return (function byoubu_ui$tokens$iter__23063_$_iter__23065(s__23066){
return (new cljs.core.LazySeq(null,((function (s__23064__$1,vec__23070,group,ks,xs__6385__auto__,temp__5825__auto__,tokens){
return (function (){
var s__23066__$1 = s__23066;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__23066__$1);
if(temp__5825__auto____$1){
var s__23066__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23066__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23066__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23068 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23067 = (0);
while(true){
if((i__23067 < size__5479__auto__)){
var vec__23076 = cljs.core._nth(c__5478__auto__,i__23067);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23076,(1),null);
cljs.core.chunk_append(b__23068,[byoubu_ui.tokens.var_name(cljs.core.name(group),k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join(''));

var G__23150 = (i__23067 + (1));
i__23067 = G__23150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23068),byoubu_ui$tokens$iter__23063_$_iter__23065(cljs.core.chunk_rest(s__23066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23068),null);
}
} else {
var vec__23080 = cljs.core.first(s__23066__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23080,(1),null);
return cljs.core.cons([byoubu_ui.tokens.var_name(cljs.core.name(group),k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join(''),byoubu_ui$tokens$iter__23063_$_iter__23065(cljs.core.rest(s__23066__$2)));
}
} else {
return null;
}
break;
}
});})(s__23064__$1,vec__23070,group,ks,xs__6385__auto__,temp__5825__auto__,tokens))
,null,null));
});})(s__23064__$1,vec__23070,group,ks,xs__6385__auto__,temp__5825__auto__,tokens))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.key),ks)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,byoubu_ui$tokens$iter__23063(cljs.core.rest(s__23064__$1)));
} else {
var G__23152 = cljs.core.rest(s__23064__$1);
s__23064__$1 = G__23152;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.key),tokens));
})())," }"].join('');
}));

(byoubu_ui.tokens.css_variables.cljs$lang$maxFixedArity = 1);

/**
 * `var(--byoubu-<group>-<k>)` reference, so style rules never inline a
 *   literal token value.
 */
byoubu_ui.tokens.token = (function byoubu_ui$tokens$token(group,k){
return ["var(",byoubu_ui.tokens.var_name(cljs.core.name(group),k),")"].join('');
});

//# sourceMappingURL=byoubu_ui.tokens.js.map
