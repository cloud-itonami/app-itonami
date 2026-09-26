goog.provide('byoubu.color');
byoubu.color.hex_digits = "0123456789abcdef";
byoubu.color.hex_digit = (function byoubu$color$hex_digit(c){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(byoubu.color.hex_digits,clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
});
byoubu.color.pow = (function byoubu$color$pow(x,e){
return Math.pow(x,e);
});
byoubu.color.clamp01 = (function byoubu$color$clamp01(x){
var x__5087__auto__ = 0.0;
var y__5088__auto__ = (function (){var x__5090__auto__ = 1.0;
var y__5091__auto__ = x;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
});
byoubu.color.abs_STAR_ = (function byoubu$color$abs_STAR_(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * "#RRGGBB" or "#RGB" (leading # optional) -> [r g b], each 0-255.
 *   Returns nil for anything that is not a well-formed hex triple, so callers
 *   can validate rather than silently render black.
 */
byoubu.color.hex__GT_rgb = (function byoubu$color$hex__GT_rgb(hex){
var h = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex));
var h__$1 = (function (){var G__22692 = h;
if(clojure.string.starts_with_QMARK_(h,"#")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__22692,(1));
} else {
return G__22692;
}
})();
var h__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),((h__$1).length)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([h__$1], 0))):h__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),cljs.core.count(h__$2))) && (cljs.core.every_QMARK_(byoubu.color.hex_digit,h__$2)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((16) * byoubu.color.hex_digit(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(h__$2,(0)))) + byoubu.color.hex_digit(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(h__$2,(1)))),(((16) * byoubu.color.hex_digit(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(h__$2,(2)))) + byoubu.color.hex_digit(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(h__$2,(3)))),(((16) * byoubu.color.hex_digit(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(h__$2,(4)))) + byoubu.color.hex_digit(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(h__$2,(5))))], null);
} else {
return null;
}
});
/**
 * Channel value -> two hex digits. Rounds rather than truncates: mixing
 *   black and white in equal parts must land on 0x80, not 0x7f.
 */
byoubu.color.byte__GT_hex = (function byoubu$color$byte__GT_hex(n){
var n__$1 = (Math.round((function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (function (){var x__5090__auto__ = (255);
var y__5091__auto__ = n;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()) | (0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(byoubu.color.hex_digits,cljs.core.quot(n__$1,(16)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(byoubu.color.hex_digits,cljs.core.rem(n__$1,(16))))].join('');
});
/**
 * [r g b] (0-255, rounded) -> "#rrggbb".
 */
byoubu.color.rgb__GT_hex = (function byoubu$color$rgb__GT_hex(p__22722){
var vec__22724 = p__22722;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22724,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22724,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22724,(2),null);
return ["#",byoubu.color.byte__GT_hex(r),byoubu.color.byte__GT_hex(g),byoubu.color.byte__GT_hex(b)].join('');
});
/**
 * sRGB channel (0-255) -> linear-light value, per WCAG 2.x.
 */
byoubu.color.channel_luminance = (function byoubu$color$channel_luminance(c){
var s = (c / 255.0);
if((s <= 0.04045)){
return (s / 12.92);
} else {
return byoubu.color.pow(((s + 0.055) / 1.055),2.4);
}
});
/**
 * WCAG relative luminance of a hex color, 0.0 (black) - 1.0 (white).
 */
byoubu.color.relative_luminance = (function byoubu$color$relative_luminance(hex){
var temp__5825__auto__ = byoubu.color.hex__GT_rgb(hex);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__22728 = temp__5825__auto__;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(2),null);
return (((0.2126 * byoubu.color.channel_luminance(r)) + (0.7152 * byoubu.color.channel_luminance(g))) + (0.0722 * byoubu.color.channel_luminance(b)));
} else {
return null;
}
});
/**
 * WCAG contrast ratio between two hex colors, 1.0 - 21.0. nil if either
 *   color is unparseable.
 */
byoubu.color.contrast_ratio = (function byoubu$color$contrast_ratio(a,b){
var temp__5825__auto__ = byoubu.color.relative_luminance(a);
if(cljs.core.truth_(temp__5825__auto__)){
var la = temp__5825__auto__;
var temp__5825__auto____$1 = byoubu.color.relative_luminance(b);
if(cljs.core.truth_(temp__5825__auto____$1)){
var lb = temp__5825__auto____$1;
var hi = (function (){var x__5087__auto__ = la;
var y__5088__auto__ = lb;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var lo = (function (){var x__5090__auto__ = la;
var y__5091__auto__ = lb;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((hi + 0.05) / (lo + 0.05));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Weighted mean of hex colors in sRGB space.
 * 
 *   `weighted` is a seq of [hex weight]. Weights need not sum to 1 — they are
 *   normalized — but a caller that means them as proportions should check that
 *   they do (byoubu.spec does).
 * 
 *   sRGB (not linear-light) is deliberate: this approximates what a *viewer*
 *   reads off a rendered plate, and the plate itself is composited by the
 *   browser in sRGB.
 */
byoubu.color.mix = (function byoubu$color$mix(weighted){
var pairs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__22740){
var vec__22741 = p__22740;
var hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22741,(0),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22741,(1),null);
var temp__5825__auto__ = byoubu.color.hex__GT_rgb(hex);
if(cljs.core.truth_(temp__5825__auto__)){
var rgb = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgb,w], null);
} else {
return null;
}
}),weighted);
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs));
if((total > (0))){
return byoubu.color.rgb__GT_hex((function (){var iter__5480__auto__ = (function byoubu$color$mix_$_iter__22758(s__22759){
return (new cljs.core.LazySeq(null,(function (){
var s__22759__$1 = s__22759;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22759__$1);
if(temp__5825__auto__){
var s__22759__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22759__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22759__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22761 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22760 = (0);
while(true){
if((i__22760 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__22760);
cljs.core.chunk_append(b__22761,(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__22760,i,c__5478__auto__,size__5479__auto__,b__22761,s__22759__$2,temp__5825__auto__,pairs,total){
return (function (p__22782){
var vec__22783 = p__22782;
var rgb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22783,(0),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22783,(1),null);
return (w * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rgb,i));
});})(i__22760,i,c__5478__auto__,size__5479__auto__,b__22761,s__22759__$2,temp__5825__auto__,pairs,total))
,pairs)) / total));

var G__22955 = (i__22760 + (1));
i__22760 = G__22955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22761),byoubu$color$mix_$_iter__22758(cljs.core.chunk_rest(s__22759__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22761),null);
}
} else {
var i = cljs.core.first(s__22759__$2);
return cljs.core.cons((cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i,s__22759__$2,temp__5825__auto__,pairs,total){
return (function (p__22786){
var vec__22787 = p__22786;
var rgb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22787,(0),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22787,(1),null);
return (w * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rgb,i));
});})(i,s__22759__$2,temp__5825__auto__,pairs,total))
,pairs)) / total),byoubu$color$mix_$_iter__22758(cljs.core.rest(s__22759__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})());
} else {
return null;
}
});
/**
 * Hue angle in degrees (0-360) of a hex color; 0 for achromatic colors.
 *   Used to record a backdrop's dominant hue as a queryable fact.
 */
byoubu.color.hue = (function byoubu$color$hue(hex){
var temp__5825__auto__ = byoubu.color.hex__GT_rgb(hex);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__22791 = temp__5825__auto__;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22791,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22791,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22791,(2),null);
var r__$1 = (r / 255.0);
var g__$1 = (g / 255.0);
var b__$1 = (b / 255.0);
var mx = (function (){var x__5087__auto__ = (function (){var x__5087__auto__ = r__$1;
var y__5088__auto__ = g__$1;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5088__auto__ = b__$1;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var mn = (function (){var x__5090__auto__ = (function (){var x__5090__auto__ = r__$1;
var y__5091__auto__ = g__$1;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5091__auto__ = b__$1;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var d = (mx - mn);
if((d === (0))){
return 0.0;
} else {
var h = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,r__$1))?(60.0 * cljs.core.mod(((g__$1 - b__$1) / d),6.0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,g__$1))?(60.0 * (((b__$1 - r__$1) / d) + 2.0)):(60.0 * (((r__$1 - g__$1) / d) + 4.0))
));
return cljs.core.mod(h,360.0);
}
} else {
return null;
}
});
/**
 * HSL saturation (0.0-1.0) of a hex color. Used to pick which palette entry
 *   is the backdrop's accent.
 */
byoubu.color.saturation = (function byoubu$color$saturation(hex){
var temp__5825__auto__ = byoubu.color.hex__GT_rgb(hex);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__22794 = temp__5825__auto__;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(2),null);
var r__$1 = (r / 255.0);
var g__$1 = (g / 255.0);
var b__$1 = (b / 255.0);
var mx = (function (){var x__5087__auto__ = (function (){var x__5087__auto__ = r__$1;
var y__5088__auto__ = g__$1;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5088__auto__ = b__$1;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var mn = (function (){var x__5090__auto__ = (function (){var x__5090__auto__ = r__$1;
var y__5091__auto__ = g__$1;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5091__auto__ = b__$1;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var d = (mx - mn);
var l = ((mx + mn) / 2.0);
if((d === (0))){
return 0.0;
} else {
return byoubu.color.clamp01((d / (1.0 - byoubu.color.abs_STAR_(((2.0 * l) - 1.0)))));
}
} else {
return null;
}
});
/**
 * "#RRGGBB" + alpha (a CSS number string) -> "rgba(r,g,b,a)", the form
 *   gradient stops need when a layer has to fade to nothing.
 */
byoubu.color.rgba = (function byoubu$color$rgba(hex,alpha){
var temp__5825__auto__ = byoubu.color.hex__GT_rgb(hex);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__22801 = temp__5825__auto__;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22801,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22801,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22801,(2),null);
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha),")"].join('');
} else {
return null;
}
});

//# sourceMappingURL=byoubu.color.js.map
