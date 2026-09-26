goog.provide('html.core');
/**
 * Escape &, <, >, and double quotes for HTML text/attribute context.
 */
html.core.esc = (function html$core$esc(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
html.core.void_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["track",null,"br",null,"img",null,"area",null,"base",null,"hr",null,"col",null,"param",null,"input",null,"link",null,"source",null,"meta",null,"wbr",null,"embed",null], null), null);
html.core.raw_text_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["style",null,"script",null], null), null);
/**
 * Elements whose content is whitespace-significant, so the pretty-printer must
 *   not indent their children.
 * 
 *   `<pre>` and `<textarea>` render whitespace literally (HTML Standard: both are
 *   styled `white-space: pre` and `<textarea>`'s content is its raw value). The
 *   block-children indentation below would otherwise turn
 * 
 *    [:pre [:code "ipfs pin remote ls"]]
 * 
 *   into `<pre>\n  <code>…` — a leading blank line plus two spaces of indent that
 *   a reader sees, and that a copy-paste carries. Same for a `<textarea>` whose
 *   value would silently gain surrounding whitespace.
 * 
 *   This is about the RENDERER's own formatting only; children are still escaped
 *   and rendered normally, just without injected newlines.
 */
html.core.preserve_whitespace_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["textarea",null,"pre",null], null), null);
/**
 * Mark trusted markup as unescaped. Never pass untrusted input.
 */
html.core.raw = (function html$core$raw(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
});
html.core.parse_tag = (function html$core$parse_tag(kw){
var s = cljs.core.name(kw);
var id = cljs.core.second(cljs.core.re_find(/#([^.#]+)/,s));
var classes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.re_seq(/\.([^.#]+)/,s));
var tag = (function (){var or__5002__auto__ = cljs.core.second(cljs.core.re_find(/^([^.#]+)/,s));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "div";
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,(function (){var G__21871 = cljs.core.PersistentArrayMap.EMPTY;
var G__21871__$1 = ((cljs.core.seq(classes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21871,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes)):G__21871);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21871__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__21871__$1;
}
})()], null);
});
html.core.class_str = (function html$core$class_str(v){
if(typeof v === 'string'){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
if((v instanceof cljs.core.Symbol)){
return cljs.core.name(v);
} else {
if(cljs.core.coll_QMARK_(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(html.core.class_str,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,v)));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
}
}
});
html.core.style_map__GT_css = (function html$core$style_map__GT_css(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__21875){
var vec__21876 = p__21875;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = v;
if(cljs.core.truth_(and__5000__auto__)){
return (!(v === false));
} else {
return and__5000__auto__;
}
})())){
return [cljs.core.name(k),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((v === true)?"true":v)),";"].join('');
} else {
return null;
}
}),m));
});
html.core.render_attrs = (function html$core$render_attrs(attrs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__21884){
var vec__21886 = p__21884;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21886,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21886,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = v;
if(cljs.core.truth_(and__5000__auto__)){
return (!(v === false));
} else {
return and__5000__auto__;
}
})())){
var k__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,"class")){
return [" ",k__$1,"=\"",html.core.esc(html.core.class_str(v)),"\""].join('');
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,"style")) && (cljs.core.map_QMARK_(v)))){
return [" ",k__$1,"=\"",html.core.esc(html.core.style_map__GT_css(v)),"\""].join('');
} else {
if(v === true){
return [" ",k__$1].join('');
} else {
return [" ",k__$1,"=\"",html.core.esc(v),"\""].join('');

}
}
}
} else {
return null;
}
}),attrs));
});
html.core.element_node_QMARK_ = (function html$core$element_node_QMARK_(x){
if(((cljs.core.vector_QMARK_(x)) && ((((cljs.core.first(x) instanceof cljs.core.Keyword)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),cljs.core.first(x))))))){
var vec__21892 = html.core.parse_tag(cljs.core.first(x));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21892,(0),null);
return (!(cljs.core.contains_QMARK_(html.core.void_tags,tag)));
} else {
return null;
}
});
html.core.block_children_QMARK_ = (function html$core$block_children_QMARK_(children){
return ((cljs.core.seq(children)) && (cljs.core.every_QMARK_(html.core.element_node_QMARK_,children)));
});
html.core.render_node = (function html$core$render_node(var_args){
var G__21907 = arguments.length;
switch (G__21907) {
case 2:
return html.core.render_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return html.core.render_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(html.core.render_node.cljs$core$IFn$_invoke$arity$2 = (function (node,sb){
return html.core.render_node.cljs$core$IFn$_invoke$arity$3(node,sb,(0));
}));

(html.core.render_node.cljs$core$IFn$_invoke$arity$3 = (function (node,sb,ind){
if((node == null)){
return sb;
} else {
if(typeof node === 'string'){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,html.core.esc(node));
} else {
if(typeof node === 'number'){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,cljs.core.str.cljs$core$IFn$_invoke$arity$1(node));
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),cljs.core.first(node))))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node)));
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.first(node))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return html.core.render_node.cljs$core$IFn$_invoke$arity$3(c,s,ind);
}),sb,cljs.core.rest(node));
} else {
if(((cljs.core.vector_QMARK_(node)) && (((cljs.core.seq(node)) && (cljs.core.vector_QMARK_(cljs.core.first(node))))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return html.core.render_node.cljs$core$IFn$_invoke$arity$3(c,s,ind);
}),sb,node);
} else {
if(cljs.core.vector_QMARK_(node)){
var vec__21910 = node;
var seq__21911 = cljs.core.seq(vec__21910);
var first__21912 = cljs.core.first(seq__21911);
var seq__21911__$1 = cljs.core.next(seq__21911);
var t = first__21912;
var body = seq__21911__$1;
var vec__21913 = html.core.parse_tag(t);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21913,(0),null);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21913,(1),null);
var vec__21916 = ((cljs.core.map_QMARK_(cljs.core.first(body)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body),cljs.core.rest(body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21916,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21916,(1),null);
var attrs__$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (a,b){
return [html.core.class_str(a)," ",html.core.class_str(b)].join('');
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base,attrs], 0));
var sb__$1 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html.core.render_attrs(attrs__$1)),">"].join(''));
if(cljs.core.contains_QMARK_(html.core.void_tags,tag)){
return sb__$1;
} else {
var sb__$2 = ((cljs.core.contains_QMARK_(html.core.raw_text_tags,tag))?(function (){var content = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (child){
if(((cljs.core.vector_QMARK_(child)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),cljs.core.first(child))))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(child));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(child);
}
}),children));
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["(?i)</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('')),content))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["html: raw-text content for <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"> contains a closing-tag breakout"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null));
} else {
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb__$1,content);
})():((((html.core.block_children_QMARK_(children)) && ((!(cljs.core.contains_QMARK_(html.core.preserve_whitespace_tags,tag))))))?(function (){var sb__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,child){
return html.core.render_node.cljs$core$IFn$_invoke$arity$3(child,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,"\n"),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((ind + (1)),"  "))),(ind + (1)));
}),sb__$1,children);
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb__$2,"\n"),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ind,"  ")));
})():cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,child){
return html.core.render_node.cljs$core$IFn$_invoke$arity$3(child,s,ind);
}),sb__$1,children)));
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb__$2,["</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">"].join(''));
}
} else {
if(cljs.core.seq_QMARK_(node)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return html.core.render_node.cljs$core$IFn$_invoke$arity$3(c,s,ind);
}),sb,node);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(sb,html.core.esc(node));

}
}
}
}
}
}
}
}
}));

(html.core.render_node.cljs$lang$maxFixedArity = 3);

html.core.__GT_html = (function html$core$__GT_html(node){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(html.core.render_node.cljs$core$IFn$_invoke$arity$2(node,cljs.core.transient$(cljs.core.PersistentVector.EMPTY))));
});
html.core.render = html.core.__GT_html;
/**
 * Render one or more hiccup forms to an HTML fragment.
 */
html.core.html = (function html$core$html(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21984 = arguments.length;
var i__5727__auto___21985 = (0);
while(true){
if((i__5727__auto___21985 < len__5726__auto___21984)){
args__5732__auto__.push((arguments[i__5727__auto___21985]));

var G__21987 = (i__5727__auto___21985 + (1));
i__5727__auto___21985 = G__21987;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return html.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(html.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (forms){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(html.core.__GT_html,forms));
}));

(html.core.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(html.core.html.cljs$lang$applyTo = (function (seq21931){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21931));
}));

/**
 * Render a full HTML document, prepending <!DOCTYPE html>.
 */
html.core.html5 = (function html$core$html5(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21988 = arguments.length;
var i__5727__auto___21989 = (0);
while(true){
if((i__5727__auto___21989 < len__5726__auto___21988)){
args__5732__auto__.push((arguments[i__5727__auto___21989]));

var G__21990 = (i__5727__auto___21989 + (1));
i__5727__auto___21989 = G__21990;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return html.core.html5.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(html.core.html5.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return ["<!DOCTYPE html>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(html.core.html,body))].join('');
}));

(html.core.html5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(html.core.html5.cljs$lang$applyTo = (function (seq21937){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21937));
}));


//# sourceMappingURL=html.core.js.map
