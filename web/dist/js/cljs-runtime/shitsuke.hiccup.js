goog.provide('shitsuke.hiccup');
/**
 * Escape &, <, >, " for safe inclusion in HTML text/attribute context.
 *   Delegates to kotoba-lang/html (html.core/esc).
 */
shitsuke.hiccup.esc = html.core.esc;
shitsuke.hiccup.void_tags = html.core.void_tags;
shitsuke.hiccup.raw_text_tags = html.core.raw_text_tags;
shitsuke.hiccup.parse_tag = html.core.parse_tag;
shitsuke.hiccup.class_str = html.core.class_str;
shitsuke.hiccup.render_attrs = html.core.render_attrs;
/**
 * Flatten <script>/<style> children to their verbatim RAWTEXT payload,
 *   unwrapping [:hiccup/raw ...] children to their string content -- the
 *   long-standing convention wrapped-content callers (css.core/style-node,
 *   kototama/web, etc.) already rely on.
 */
shitsuke.hiccup.raw_text_content = (function shitsuke$hiccup$raw_text_content(children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if(((cljs.core.vector_QMARK_(c)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),cljs.core.first(c))))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(c));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(c);
}
}),children));
});
/**
 * HTML5 RAWTEXT parsing: a <script>/<style> element terminates at the FIRST
 *   literal, case-insensitive "</tag" sequence in its content, regardless of
 *   surrounding quotes/strings/comments in the raw text -- emitting that
 *   sequence verbatim lets a raw payload break out of the element and inject
 *   markup after it (a script-context XSS vector).
 */
shitsuke.hiccup.assert_no_rawtext_breakout_BANG_ = (function shitsuke$hiccup$assert_no_rawtext_breakout_BANG_(tag,content){
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["(?i)</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('')),content))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["shitsuke.hiccup: raw-text content for <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"> must not contain \"</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"\" ","case-insensitively -- that sequence terminates the element early ","per HTML5's RAWTEXT rule and can break out into injected markup"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null));
} else {
return null;
}
});
shitsuke.hiccup.render_node = (function shitsuke$hiccup$render_node(node,sb){
if((node == null)){
return sb;
} else {
if(typeof node === 'string'){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,(shitsuke.hiccup.esc.cljs$core$IFn$_invoke$arity$1 ? shitsuke.hiccup.esc.cljs$core$IFn$_invoke$arity$1(node) : shitsuke.hiccup.esc.call(null, node)));
} else {
if(typeof node === 'number'){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,cljs.core.str.cljs$core$IFn$_invoke$arity$1(node));
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),cljs.core.first(node))))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node)));
} else {
if(((cljs.core.vector_QMARK_(node)) && ((((!(cljs.core.empty_QMARK_(node)))) && (cljs.core.vector_QMARK_(cljs.core.first(node))))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return (shitsuke.hiccup.render_node.cljs$core$IFn$_invoke$arity$2 ? shitsuke.hiccup.render_node.cljs$core$IFn$_invoke$arity$2(c,s) : shitsuke.hiccup.render_node.call(null, c,s));
}),sb,node);
} else {
if(cljs.core.vector_QMARK_(node)){
var vec__21959 = node;
var seq__21960 = cljs.core.seq(vec__21959);
var first__21961 = cljs.core.first(seq__21960);
var seq__21960__$1 = cljs.core.next(seq__21960);
var t = first__21961;
var body = seq__21960__$1;
var vec__21962 = (shitsuke.hiccup.parse_tag.cljs$core$IFn$_invoke$arity$1 ? shitsuke.hiccup.parse_tag.cljs$core$IFn$_invoke$arity$1(t) : shitsuke.hiccup.parse_tag.call(null, t));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21962,(0),null);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21962,(1),null);
var vec__21965 = ((cljs.core.map_QMARK_(cljs.core.first(body)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body),cljs.core.rest(body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21965,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21965,(1),null);
var attrs__$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (a,b){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((shitsuke.hiccup.class_str.cljs$core$IFn$_invoke$arity$1 ? shitsuke.hiccup.class_str.cljs$core$IFn$_invoke$arity$1(a) : shitsuke.hiccup.class_str.call(null, a)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((shitsuke.hiccup.class_str.cljs$core$IFn$_invoke$arity$1 ? shitsuke.hiccup.class_str.cljs$core$IFn$_invoke$arity$1(b) : shitsuke.hiccup.class_str.call(null, b)))].join('');
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base,attrs], 0));
var textarea_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,"textarea"))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs__$1):null);
var attrs__$2 = (function (){var G__21969 = attrs__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,"textarea")){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21969,new cljs.core.Keyword(null,"value","value",305978217));
} else {
return G__21969;
}
})();
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1((shitsuke.hiccup.render_attrs.cljs$core$IFn$_invoke$arity$1 ? shitsuke.hiccup.render_attrs.cljs$core$IFn$_invoke$arity$1(attrs__$2) : shitsuke.hiccup.render_attrs.call(null, attrs__$2))),">"].join(''));

if(cljs.core.contains_QMARK_(shitsuke.hiccup.void_tags,tag)){
} else {
if(cljs.core.contains_QMARK_(shitsuke.hiccup.raw_text_tags,tag)){
var content_21983 = shitsuke.hiccup.raw_text_content(children);
shitsuke.hiccup.assert_no_rawtext_breakout_BANG_(tag,content_21983);

cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,content_21983);
} else {
if((!((textarea_value == null)))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,(shitsuke.hiccup.esc.cljs$core$IFn$_invoke$arity$1 ? shitsuke.hiccup.esc.cljs$core$IFn$_invoke$arity$1(textarea_value) : shitsuke.hiccup.esc.call(null, textarea_value)));
} else {
}

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return (shitsuke.hiccup.render_node.cljs$core$IFn$_invoke$arity$2 ? shitsuke.hiccup.render_node.cljs$core$IFn$_invoke$arity$2(c,s) : shitsuke.hiccup.render_node.call(null, c,s));
}),sb,children);
}

cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,["</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">"].join(''));
}

return sb;
} else {
if(cljs.core.seq_QMARK_(node)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return (shitsuke.hiccup.render_node.cljs$core$IFn$_invoke$arity$2 ? shitsuke.hiccup.render_node.cljs$core$IFn$_invoke$arity$2(c,s) : shitsuke.hiccup.render_node.call(null, c,s));
}),sb,node);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,(shitsuke.hiccup.esc.cljs$core$IFn$_invoke$arity$1 ? shitsuke.hiccup.esc.cljs$core$IFn$_invoke$arity$1(node) : shitsuke.hiccup.esc.call(null, node)));

}
}
}
}
}
}
}
});
/**
 * Render a hiccup node (or seq of nodes) to an HTML string.
 */
shitsuke.hiccup.__GT_html = (function shitsuke$hiccup$__GT_html(node){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(shitsuke.hiccup.render_node(node,cljs.core.transient$(cljs.core.PersistentVector.EMPTY))));
});

//# sourceMappingURL=shitsuke.hiccup.js.map
