goog.provide('css.core');
css.core.unitless = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 28, [new cljs.core.Keyword(null,"border-image-slice","border-image-slice",-4957056),null,new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"columns","columns",1998437288),null,new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"border-image-outset","border-image-outset",-335977867),null,new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),null,new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),null,new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),null,new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),null,new cljs.core.Keyword(null,"border-image-width","border-image-width",-478445793),null], null), null);
/**
 * Property values and selectors are spliced into `prop: VALUE;` / `SELECTOR {
 *   ... }` text with no other escaping. `{` `}` let attacker-controlled data
 *   close the current declaration/rule block and inject entirely new,
 *   arbitrary sibling CSS rules (verified against tinycss2, a real CSS
 *   parser: a value like "red; } .evil[href^=http] { background: url(...)"
 *   parses as TWO distinct rules, not one -- genuine rule injection, not a
 *   cosmetic issue); `;` lets a value inject extra declarations within the
 *   same rule; `/*` starts a comment that can swallow the rest of the
 *   intended rule. Throw rather than silently producing that output.
 */
css.core.assert_no_css_breakout_BANG_ = (function css$core$assert_no_css_breakout_BANG_(what,s){
if(cljs.core.truth_(cljs.core.re_find(/[{};]|\/\*/,s))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["css: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(what)," contains a character ({ } ; or a /* ","comment start) that could break out of the ","current rule and inject arbitrary sibling CSS"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),s], null));
} else {
}

return s;
});
css.core.css_name = (function css$core$css_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.name(x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);

}
}
});
css.core.value_str = (function css$core$value_str(prop,v){
if((v == null)){
return null;
} else {
if(typeof v === 'number'){
if(cljs.core.truth_((function (){var or__5002__auto__ = (css.core.unitless.cljs$core$IFn$_invoke$arity$1 ? css.core.unitless.cljs$core$IFn$_invoke$arity$1(prop) : css.core.unitless.call(null, prop));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (v === (0));
}
})())){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
}
} else {
if(cljs.core.vector_QMARK_(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__22218_SHARP_){
return (css.core.value_str.cljs$core$IFn$_invoke$arity$2 ? css.core.value_str.cljs$core$IFn$_invoke$arity$2(prop,p1__22218_SHARP_) : css.core.value_str.call(null, prop,p1__22218_SHARP_));
}),v));
} else {
if((v instanceof cljs.core.Keyword)){
return css.core.assert_no_css_breakout_BANG_(["value for ",css.core.css_name(prop)].join(''),cljs.core.name(v));
} else {
return css.core.assert_no_css_breakout_BANG_(["value for ",css.core.css_name(prop)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));

}
}
}
}
});
css.core.declarations = (function css$core$declarations(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__22220){
var vec__22221 = p__22220;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221,(1),null);
var temp__5829__auto__ = css.core.value_str(k,v);
if((temp__5829__auto__ == null)){
return null;
} else {
var s = temp__5829__auto__;
return [css.core.css_name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),";"].join('');
}
}),m));
});
css.core.style = css.core.declarations;
css.core.rule = (function css$core$rule(selector,decls){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css.core.assert_no_css_breakout_BANG_("selector",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)))," { ",css.core.declarations(decls)," }"].join('');
});
css.core.media = (function css$core$media(query,rules){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)," { ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__5480__auto__ = (function css$core$media_$_iter__22313(s__22314){
return (new cljs.core.LazySeq(null,(function (){
var s__22314__$1 = s__22314;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22314__$1);
if(temp__5825__auto__){
var s__22314__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22314__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22314__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22316 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22315 = (0);
while(true){
if((i__22315 < size__5479__auto__)){
var vec__22319 = cljs.core._nth(c__5478__auto__,i__22315);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22319,(0),null);
var decls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22319,(1),null);
cljs.core.chunk_append(b__22316,css.core.rule(sel,decls));

var G__22420 = (i__22315 + (1));
i__22315 = G__22420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22316),css$core$media_$_iter__22313(cljs.core.chunk_rest(s__22314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22316),null);
}
} else {
var vec__22323 = cljs.core.first(s__22314__$2);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22323,(0),null);
var decls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22323,(1),null);
return cljs.core.cons(css.core.rule(sel,decls),css$core$media_$_iter__22313(cljs.core.rest(s__22314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(rules);
})())," }"].join('');
});
css.core.keyframes = (function css$core$keyframes(nm,frames){
return ["@keyframes ",css.core.css_name(nm)," { ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__5480__auto__ = (function css$core$keyframes_$_iter__22343(s__22344){
return (new cljs.core.LazySeq(null,(function (){
var s__22344__$1 = s__22344;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22344__$1);
if(temp__5825__auto__){
var s__22344__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22344__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22344__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22346 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22345 = (0);
while(true){
if((i__22345 < size__5479__auto__)){
var vec__22349 = cljs.core._nth(c__5478__auto__,i__22345);
var at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22349,(0),null);
var decls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22349,(1),null);
cljs.core.chunk_append(b__22346,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(at),"% { ",css.core.declarations(decls)," }"].join(''));

var G__22440 = (i__22345 + (1));
i__22345 = G__22440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22346),css$core$keyframes_$_iter__22343(cljs.core.chunk_rest(s__22344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22346),null);
}
} else {
var vec__22354 = cljs.core.first(s__22344__$2);
var at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22354,(0),null);
var decls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22354,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(at),"% { ",css.core.declarations(decls)," }"].join(''),css$core$keyframes_$_iter__22343(cljs.core.rest(s__22344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(frames);
})())," }"].join('');
});
css.core.kf = css.core.keyframes;
css.core.css = (function css$core$css(p__22359){
var map__22360 = p__22359;
var map__22360__$1 = cljs.core.__destructure_map(map__22360);
var sheet = map__22360__$1;
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22360__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var keyframes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22360__$1,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function css$core$css_$_iter__22361(s__22362){
return (new cljs.core.LazySeq(null,(function (){
var s__22362__$1 = s__22362;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22362__$1);
if(temp__5825__auto__){
var s__22362__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22362__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22362__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22364 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22363 = (0);
while(true){
if((i__22363 < size__5479__auto__)){
var vec__22371 = cljs.core._nth(c__5478__auto__,i__22363);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22371,(0),null);
var decls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22371,(1),null);
cljs.core.chunk_append(b__22364,css.core.rule(sel,decls));

var G__22444 = (i__22363 + (1));
i__22363 = G__22444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22364),css$core$css_$_iter__22361(cljs.core.chunk_rest(s__22362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22364),null);
}
} else {
var vec__22374 = cljs.core.first(s__22362__$2);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22374,(0),null);
var decls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22374,(1),null);
return cljs.core.cons(css.core.rule(sel,decls),css$core$css_$_iter__22361(cljs.core.rest(s__22362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(rules);
})(),(function (){var iter__5480__auto__ = (function css$core$css_$_iter__22378(s__22379){
return (new cljs.core.LazySeq(null,(function (){
var s__22379__$1 = s__22379;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22379__$1);
if(temp__5825__auto__){
var s__22379__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22379__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22379__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22381 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22380 = (0);
while(true){
if((i__22380 < size__5479__auto__)){
var vec__22389 = cljs.core._nth(c__5478__auto__,i__22380);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22389,(0),null);
var frames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22389,(1),null);
cljs.core.chunk_append(b__22381,(css.core.kf.cljs$core$IFn$_invoke$arity$2 ? css.core.kf.cljs$core$IFn$_invoke$arity$2(nm,frames) : css.core.kf.call(null, nm,frames)));

var G__22463 = (i__22380 + (1));
i__22380 = G__22463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22381),css$core$css_$_iter__22378(cljs.core.chunk_rest(s__22379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22381),null);
}
} else {
var vec__22392 = cljs.core.first(s__22379__$2);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22392,(0),null);
var frames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22392,(1),null);
return cljs.core.cons((css.core.kf.cljs$core$IFn$_invoke$arity$2 ? css.core.kf.cljs$core$IFn$_invoke$arity$2(nm,frames) : css.core.kf.call(null, nm,frames)),css$core$css_$_iter__22378(cljs.core.rest(s__22379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(keyframes);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5480__auto__ = (function css$core$css_$_iter__22395(s__22396){
return (new cljs.core.LazySeq(null,(function (){
var s__22396__$1 = s__22396;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22396__$1);
if(temp__5825__auto__){
var s__22396__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22396__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22396__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22398 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22397 = (0);
while(true){
if((i__22397 < size__5479__auto__)){
var vec__22399 = cljs.core._nth(c__5478__auto__,i__22397);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22399,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22399,(1),null);
cljs.core.chunk_append(b__22398,css.core.media(query,rules__$1));

var G__22464 = (i__22397 + (1));
i__22397 = G__22464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22398),css$core$css_$_iter__22395(cljs.core.chunk_rest(s__22396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22398),null);
}
} else {
var vec__22403 = cljs.core.first(s__22396__$2);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22403,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22403,(1),null);
return cljs.core.cons(css.core.media(query,rules__$1),css$core$css_$_iter__22395(cljs.core.rest(s__22396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"media","media",-1066138403).cljs$core$IFn$_invoke$arity$1(sheet));
})()], 0)));
});
css.core.style_node = (function css$core$style_node(sheet){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),css.core.css(sheet)], null)], null);
});
/**
 * Base CSS rules shared by every cloud-itonami operator console: page
 *   chrome (body, header.bar, main), cards, tables, status badges and muted
 *   text. Capability UIs merge domain-specific rules on top.
 */
css.core.operator_theme = cljs.core.PersistentHashMap.fromArrays(["table",".ok","body","header.bar","th, td","h2","td.amt",".warn","main","header.bar h1",".muted",".critical",".card",".err","th","header.bar .badge"],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#137a3f"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"system-ui,-apple-system,sans-serif",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#1a1a1a",new cljs.core.Keyword(null,"background","background",-863952629),"#fafafa"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),(12),new cljs.core.Keyword(null,"padding","padding",1660304693),"12px 20px",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e5e5e5"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 10px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #f0f0f0"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-variant-numeric","font-variant-numeric",-749791),new cljs.core.Keyword(null,"tabular-nums","tabular-nums",1794763022),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#b25c00",new cljs.core.Keyword(null,"background","background",-863952629),"#fff8e1",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 6px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(980),new cljs.core.Keyword(null,"margin","margin",-995903681),"24px auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 20px"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"background","background",-863952629),"#b3261e",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 6px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e5e5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8),new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(16)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#b3261e",new cljs.core.Keyword(null,"background","background",-863952629),"#fbe9e7",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 6px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"color","color",1011675173),"#555",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"uppercase","uppercase",2080890922),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.04em"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)]);
/**
 * Merge a domain sheet's extra rules over the operator-theme base. Returns
 *   a sheet map {:rules ...} suitable for css/style-node.
 */
css.core.merge_theme = (function css$core$merge_theme(extra_rules){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([css.core.operator_theme,extra_rules], 0))], null);
});

//# sourceMappingURL=css.core.js.map
