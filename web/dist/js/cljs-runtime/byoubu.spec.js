goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22958_SHARP_){
return cljs.core.contains_QMARK_(m,p1__22958_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22962(s__22963){
return (new cljs.core.LazySeq(null,(function (){
var s__22963__$1 = s__22963;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22963__$1);
if(temp__5825__auto__){
var s__22963__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22963__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22963__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22965 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22964 = (0);
while(true){
if((i__22964 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22964);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__22965,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23042 = (i__22964 + (1));
i__22964 = G__23042;
continue;
} else {
var G__23043 = (i__22964 + (1));
i__22964 = G__23043;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22965),byoubu$spec$problems_$_iter__22962(cljs.core.chunk_rest(s__22963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22965),null);
}
} else {
var k = cljs.core.first(s__22963__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22962(cljs.core.rest(s__22963__$2)));
} else {
var G__23054 = cljs.core.rest(s__22963__$2);
s__22963__$1 = G__23054;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22968(s__22969){
return (new cljs.core.LazySeq(null,(function (){
var s__22969__$1 = s__22969;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22969__$1);
if(temp__5825__auto__){
var s__22969__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22969__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22969__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22971 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22970 = (0);
while(true){
if((i__22970 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22970);
cljs.core.chunk_append(b__22971,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23062 = (i__22970 + (1));
i__22970 = G__23062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22971),byoubu$spec$problems_$_iter__22968(cljs.core.chunk_rest(s__22969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22971),null);
}
} else {
var k = cljs.core.first(s__22969__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22968(cljs.core.rest(s__22969__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22974(s__22975){
return (new cljs.core.LazySeq(null,(function (){
var s__22975__$1 = s__22975;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22975__$1);
if(temp__5825__auto__){
var s__22975__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22975__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22975__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22977 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22976 = (0);
while(true){
if((i__22976 < size__5479__auto__)){
var vec__22980 = cljs.core._nth(c__5478__auto__,i__22976);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22980,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__22977,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__23073 = (i__22976 + (1));
i__22976 = G__23073;
continue;
} else {
var G__23074 = (i__22976 + (1));
i__22976 = G__23074;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22977),byoubu$spec$problems_$_iter__22974(cljs.core.chunk_rest(s__22975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22977),null);
}
} else {
var vec__22984 = cljs.core.first(s__22975__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__22974(cljs.core.rest(s__22975__$2)));
} else {
var G__23079 = cljs.core.rest(s__22975__$2);
s__22975__$1 = G__23079;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22988(s__22989){
return (new cljs.core.LazySeq(null,(function (){
var s__22989__$1 = s__22989;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22989__$1);
if(temp__5825__auto__){
var s__22989__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22989__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22989__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22991 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22990 = (0);
while(true){
if((i__22990 < size__5479__auto__)){
var vec__22993 = cljs.core._nth(c__5478__auto__,i__22990);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__22991,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23084 = (i__22990 + (1));
i__22990 = G__23084;
continue;
} else {
var G__23085 = (i__22990 + (1));
i__22990 = G__23085;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22991),byoubu$spec$problems_$_iter__22988(cljs.core.chunk_rest(s__22989__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22991),null);
}
} else {
var vec__22997 = cljs.core.first(s__22989__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22997,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22997,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22988(cljs.core.rest(s__22989__$2)));
} else {
var G__23087 = cljs.core.rest(s__22989__$2);
s__22989__$1 = G__23087;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23001(s__23002){
return (new cljs.core.LazySeq(null,(function (){
var s__23002__$1 = s__23002;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23002__$1);
if(temp__5825__auto__){
var s__23002__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23002__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23002__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23004 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23003 = (0);
while(true){
if((i__23003 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23003);
cljs.core.chunk_append(b__23004,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23090 = (i__23003 + (1));
i__23003 = G__23090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23004),byoubu$spec$problems_$_iter__23001(cljs.core.chunk_rest(s__23002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23004),null);
}
} else {
var k = cljs.core.first(s__23002__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__23001(cljs.core.rest(s__23002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23006(s__23007){
return (new cljs.core.LazySeq(null,(function (){
var s__23007__$1 = s__23007;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23007__$1);
if(temp__5825__auto__){
var s__23007__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23007__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23007__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23009 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23008 = (0);
while(true){
if((i__23008 < size__5479__auto__)){
var vec__23012 = cljs.core._nth(c__5478__auto__,i__23008);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__23009,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__23094 = (i__23008 + (1));
i__23008 = G__23094;
continue;
} else {
var G__23095 = (i__23008 + (1));
i__23008 = G__23095;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23009),byoubu$spec$problems_$_iter__23006(cljs.core.chunk_rest(s__23007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23009),null);
}
} else {
var vec__23015 = cljs.core.first(s__23007__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23015,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23015,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__23006(cljs.core.rest(s__23007__$2)));
} else {
var G__23097 = cljs.core.rest(s__23007__$2);
s__23007__$1 = G__23097;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23019(s__23020){
return (new cljs.core.LazySeq(null,(function (){
var s__23020__$1 = s__23020;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23020__$1);
if(temp__5825__auto__){
var s__23020__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23020__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23020__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23022 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23021 = (0);
while(true){
if((i__23021 < size__5479__auto__)){
var vec__23024 = cljs.core._nth(c__5478__auto__,i__23021);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23024,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23024,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__23022,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__23114 = (i__23021 + (1));
i__23021 = G__23114;
continue;
} else {
var G__23116 = (i__23021 + (1));
i__23021 = G__23116;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23022),byoubu$spec$problems_$_iter__23019(cljs.core.chunk_rest(s__23020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23022),null);
}
} else {
var vec__23028 = cljs.core.first(s__23020__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23028,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23028,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__23019(cljs.core.rest(s__23020__$2)));
} else {
var G__23119 = cljs.core.rest(s__23020__$2);
s__23020__$1 = G__23119;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
