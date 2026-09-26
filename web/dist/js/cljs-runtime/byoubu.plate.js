goog.provide('byoubu.plate');
byoubu.plate.stop = (function byoubu$plate$stop(color,at){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("plate","color","plate/color",914427071),color,new cljs.core.Keyword("plate","at","plate/at",1101651535),at], null);
});
byoubu.plate.p = (function byoubu$plate$p(backdrop,k){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(backdrop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),k], null));
});
/**
 * Where the horizon sits, as a percentage of plate height. Derived from the
 *   camera pitch so T0 and the rendered scene put the skyline in the same
 *   place: a level camera puts it at 62%, and each degree of downward pitch
 *   pushes it down.
 */
byoubu.plate.horizon_pct = (function byoubu$plate$horizon_pct(backdrop){
var pitch = (function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(backdrop,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pitch-deg","pitch-deg",-894325385)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})();
var x__5087__auto__ = 40.0;
var y__5088__auto__ = (function (){var x__5090__auto__ = 80.0;
var y__5091__auto__ = (62.0 - (2.6 * pitch));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
});
/**
 * Ordered background layers, topmost first (CSS `background-image` order).
 * 
 *   Each layer is one of:
 *  {:plate/kind :linear :plate/direction "to bottom" :plate/stops [...]}
 *  {:plate/kind :radial :plate/shape "70% 45% at 50% 62%" :plate/stops [...]}
 * 
 *   and each stop is {:plate/color <css color> :plate/at <css length|percent>}.
 */
byoubu.plate.layers = (function byoubu$plate$layers(backdrop){
var h = byoubu.plate.horizon_pct(backdrop);
var vign = (function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(backdrop,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071),new cljs.core.Keyword(null,"grade","grade",2117054771),new cljs.core.Keyword(null,"vignette","vignette",-336473712)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.25;
}
})();
var pct = (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((Math.round(x) | (0))),"%"].join('');
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("plate","kind","plate/kind",-1424213105),new cljs.core.Keyword(null,"radial","radial",-1334240714),new cljs.core.Keyword("plate","shape","plate/shape",1889905040),"120% 100% at 50% 45%",new cljs.core.Keyword("plate","stops","plate/stops",-1312702775),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [byoubu.plate.stop("rgba(0,0,0,0)","45%"),byoubu.plate.stop(byoubu.color.rgba(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(vign)),"100%")], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("plate","kind","plate/kind",-1424213105),new cljs.core.Keyword(null,"radial","radial",-1334240714),new cljs.core.Keyword("plate","shape","plate/shape",1889905040),["80% 34% at 50% ",pct(h)].join(''),new cljs.core.Keyword("plate","stops","plate/stops",-1312702775),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [byoubu.plate.stop(byoubu.color.rgba(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617)),"0.85"),"0%"),byoubu.plate.stop(byoubu.color.rgba(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"haze","haze",-1024870708)),"0.35"),"45%"),byoubu.plate.stop(byoubu.color.rgba(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"haze","haze",-1024870708)),"0"),"100%")], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("plate","kind","plate/kind",-1424213105),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword("plate","direction","plate/direction",-651904309),"to bottom",new cljs.core.Keyword("plate","stops","plate/stops",-1312702775),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [byoubu.plate.stop(byoubu.color.rgba(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738)),"0"),pct((h - 1.0))),byoubu.plate.stop(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738)),pct((h + 0.5))),byoubu.plate.stop(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115)),pct((h + (0.35 * (100.0 - h))))),byoubu.plate.stop(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330)),"100%")], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("plate","kind","plate/kind",-1424213105),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword("plate","direction","plate/direction",-651904309),"to bottom",new cljs.core.Keyword("plate","stops","plate/stops",-1312702775),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [byoubu.plate.stop(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151)),"0%"),byoubu.plate.stop(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624)),pct((0.62 * h))),byoubu.plate.stop(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617)),pct(h)),byoubu.plate.stop(byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330)),"100%")], null)], null)], null);
});
/**
 * The single color to paint under the layers (`background-color`), so a
 *   plate never flashes white before its gradients resolve.
 */
byoubu.plate.base_color = (function byoubu$plate$base_color(backdrop){
return byoubu.plate.p(backdrop,new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330));
});

//# sourceMappingURL=byoubu.plate.js.map
