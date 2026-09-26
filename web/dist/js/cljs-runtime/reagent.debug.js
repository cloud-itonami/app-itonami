goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21567__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21568__i = 0, G__21568__a = new Array(arguments.length -  0);
while (G__21568__i < G__21568__a.length) {G__21568__a[G__21568__i] = arguments[G__21568__i + 0]; ++G__21568__i;}
  args = new cljs.core.IndexedSeq(G__21568__a,0,null);
} 
return G__21567__delegate.call(this,args);};
G__21567.cljs$lang$maxFixedArity = 0;
G__21567.cljs$lang$applyTo = (function (arglist__21569){
var args = cljs.core.seq(arglist__21569);
return G__21567__delegate(args);
});
G__21567.cljs$core$IFn$_invoke$arity$variadic = G__21567__delegate;
return G__21567;
})()
);

(o.error = (function() { 
var G__21571__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21572__i = 0, G__21572__a = new Array(arguments.length -  0);
while (G__21572__i < G__21572__a.length) {G__21572__a[G__21572__i] = arguments[G__21572__i + 0]; ++G__21572__i;}
  args = new cljs.core.IndexedSeq(G__21572__a,0,null);
} 
return G__21571__delegate.call(this,args);};
G__21571.cljs$lang$maxFixedArity = 0;
G__21571.cljs$lang$applyTo = (function (arglist__21573){
var args = cljs.core.seq(arglist__21573);
return G__21571__delegate(args);
});
G__21571.cljs$core$IFn$_invoke$arity$variadic = G__21571__delegate;
return G__21571;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
