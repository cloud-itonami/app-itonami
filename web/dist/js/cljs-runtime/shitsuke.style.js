goog.provide('shitsuke.style');
/**
 * Stable scoped class for a component: `shitsuke__button`. Used both as the
 *   hiccup :class and as the shadow-css extraction anchor.
 */
shitsuke.style.class_name = (function shitsuke$style$class_name(component){
return ["shitsuke__",cljs.core.name(component)].join('');
});
/**
 * :root{...} CSS string from tokens (default merged with overrides).
 */
shitsuke.style.root_css = (function shitsuke$style$root_css(var_args){
var G__22434 = arguments.length;
switch (G__22434) {
case 0:
return shitsuke.style.root_css.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.style.root_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.style.root_css.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.tokens.css_variables.cljs$core$IFn$_invoke$arity$0();
}));

(shitsuke.style.root_css.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
return shitsuke.tokens.css_variables.cljs$core$IFn$_invoke$arity$1(overrides);
}));

(shitsuke.style.root_css.cljs$lang$maxFixedArity = 1);

/**
 * Wrap a CSS string in a <style> tag for inline SSR embedding.
 */
shitsuke.style.inline_style = (function shitsuke$style$inline_style(var_args){
var G__22439 = arguments.length;
switch (G__22439) {
case 0:
return shitsuke.style.inline_style.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.style.inline_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.style.inline_style.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.style.inline_style.cljs$core$IFn$_invoke$arity$1(shitsuke.style.root_css.cljs$core$IFn$_invoke$arity$0());
}));

(shitsuke.style.inline_style.cljs$core$IFn$_invoke$arity$1 = (function (css__$1){
return ["<style>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(css__$1),"\n</style>"].join('');
}));

(shitsuke.style.inline_style.cljs$lang$maxFixedArity = 1);

/**
 * Hiccup form of inline-style: [:style [:hiccup/raw css]] (the raw form is
 *   understood by shitsuke.hiccup/->html so the CSS is not escaped).
 */
shitsuke.style.inline_style_hiccup = (function shitsuke$style$inline_style_hiccup(var_args){
var G__22442 = arguments.length;
switch (G__22442) {
case 0:
return shitsuke.style.inline_style_hiccup.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.style.inline_style_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.style.inline_style_hiccup.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.style.inline_style_hiccup.cljs$core$IFn$_invoke$arity$1(shitsuke.style.root_css.cljs$core$IFn$_invoke$arity$0());
}));

(shitsuke.style.inline_style_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (css__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hiccup","raw","hiccup/raw",936857988),css__$1], null)], null);
}));

(shitsuke.style.inline_style_hiccup.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=shitsuke.style.js.map
