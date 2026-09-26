goog.provide('kotoba_ui.theme');
kotoba_ui.theme.hex_digits = "0123456789abcdef";
kotoba_ui.theme.hex_digit = (function kotoba_ui$theme$hex_digit(c){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(kotoba_ui.theme.hex_digits,clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
});
kotoba_ui.theme.hex_byte = (function kotoba_ui$theme$hex_byte(s,i){
return (((16) * kotoba_ui.theme.hex_digit(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i))) + kotoba_ui.theme.hex_digit(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(i + (1)))));
});
/**
 * "#RRGGBB" (or "#RGB", leading # optional) + alpha (a CSS number
 *   string, e.g. "0.55") -> "rgba(r,g,b,alpha)". Pure; used to derive the
 *   liquid-glass accent tokens from a theme's hex accent with the same alpha
 *   the library defaults carry.
 */
kotoba_ui.theme.hex__GT_rgba = (function kotoba_ui$theme$hex__GT_rgba(hex,alpha){
var h = (function (){var G__23358 = hex;
if(clojure.string.starts_with_QMARK_(hex,"#")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__23358,(1));
} else {
return G__23358;
}
})();
var h__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(h)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([h], 0))):h);
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kotoba_ui.theme.hex_byte(h__$1,(0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kotoba_ui.theme.hex_byte(h__$1,(2))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kotoba_ui.theme.hex_byte(h__$1,(4))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha),")"].join('');
});
/**
 * The alpha component of an "rgba(r,g,b,a)" string, as the literal
 *   substring (so "0.55" stays "0.55").
 */
kotoba_ui.theme.rgba_alpha = (function kotoba_ui$theme$rgba_alpha(rgba){
return cljs.core.second(cljs.core.re_find(/,\s*([0-9.]+)\s*\)\s*$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(rgba)));
});
kotoba_ui.theme.accent_tint_alpha = (function (){var or__5002__auto__ = kotoba_ui.theme.rgba_alpha(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(liquid_glass.tokens.default_tokens,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("liquid-glass","accent","liquid-glass/accent",356924369),new cljs.core.Keyword(null,"tint","tint",-1286736913)], null)));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "0.55";
}
})();
kotoba_ui.theme.accent_tint_strong_alpha = (function (){var or__5002__auto__ = kotoba_ui.theme.rgba_alpha(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(liquid_glass.tokens.default_tokens,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("liquid-glass","accent","liquid-glass/accent",356924369),new cljs.core.Keyword(null,"tint-strong","tint-strong",1566273473)], null)));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "0.85";
}
})();
/**
 * A theme map with a `:backdrop` expanded into the accent / appearance /
 *   ink / page-background it implies.
 * 
 *   Explicit keys always win: `{:backdrop :purple-desert :accent "#ff0000"}`
 *   keeps the red accent and takes the derived appearance and ink. Without
 *   `:backdrop` this is the identity, so nothing changes for themes that do not
 *   use one.
 * 
 *   Every public fn here resolves first, which is what lets an app pass ONE map
 *   — `(theme-css {:backdrop :purple-desert})` — and get a page whose accent,
 *   text colour, browser chrome and backdrop all agree. Deriving those by hand
 *   per page is the failure mode every backdrop asset library has.
 */
kotoba_ui.theme.resolve_theme = (function kotoba_ui$theme$resolve_theme(theme){
var temp__5823__auto__ = new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381).cljs$core$IFn$_invoke$arity$1(theme);
if(cljs.core.truth_(temp__5823__auto__)){
var b = temp__5823__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([byoubu_ui.core.theme_for.cljs$core$IFn$_invoke$arity$1(b),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),b], null)], 0));
} else {
return theme;
}
});
kotoba_ui.theme.dark_accent = (function kotoba_ui$theme$dark_accent(theme){
var or__5002__auto__ = new cljs.core.Keyword(null,"accent-dark","accent-dark",-1829396615).cljs$core$IFn$_invoke$arity$1(theme);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"accent","accent",-1826298468).cljs$core$IFn$_invoke$arity$1(theme);
}
});
/**
 * shitsuke.hig override map for the light appearance: the theme accent as
 *   `{:hig/color {:tint ...}}`, deep-merged with the raw `:hig` escape hatch
 *   (the raw map wins). A `:backdrop` is resolved first.
 */
kotoba_ui.theme.hig_overrides = (function kotoba_ui$theme$hig_overrides(theme){
var theme__$1 = kotoba_ui.theme.resolve_theme(theme);
return shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"accent","accent",-1826298468).cljs$core$IFn$_invoke$arity$1(theme__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var a = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hig","color","hig/color",1011770543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tint","tint",-1286736913),a], null)], null);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"hig","hig",-652701335).cljs$core$IFn$_invoke$arity$1(theme__$1)], 0));
});
/**
 * shitsuke.hig override map for the dark appearance (`:accent-dark`,
 *   defaulting to `:accent`), deep-merged with the raw `:hig-dark` escape
 *   hatch. A `:backdrop` is resolved first.
 */
kotoba_ui.theme.hig_dark_overrides = (function kotoba_ui$theme$hig_dark_overrides(theme){
var theme__$1 = kotoba_ui.theme.resolve_theme(theme);
return shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5825__auto__ = kotoba_ui.theme.dark_accent(theme__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var a = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hig","color","hig/color",1011770543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tint","tint",-1286736913),a], null)], null);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"hig-dark","hig-dark",-263230495).cljs$core$IFn$_invoke$arity$1(theme__$1)], 0));
});
kotoba_ui.theme.accent_glass_tokens = (function kotoba_ui$theme$accent_glass_tokens(accent){
if(cljs.core.truth_(accent)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("liquid-glass","accent","liquid-glass/accent",356924369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tint","tint",-1286736913),kotoba_ui.theme.hex__GT_rgba(accent,kotoba_ui.theme.accent_tint_alpha),new cljs.core.Keyword(null,"tint-strong","tint-strong",1566273473),kotoba_ui.theme.hex__GT_rgba(accent,kotoba_ui.theme.accent_tint_strong_alpha)], null)], null);
} else {
return null;
}
});
/**
 * liquid-glass token override map for the light scheme: the theme accent
 *   converted to the `:liquid-glass/accent` rgba pair (same alphas as the
 *   library defaults), deep-merged with the raw `:glass` escape hatch. A
 *   `:backdrop` is resolved first.
 */
kotoba_ui.theme.glass_overrides = (function kotoba_ui$theme$glass_overrides(theme){
var theme__$1 = kotoba_ui.theme.resolve_theme(theme);
return shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kotoba_ui.theme.accent_glass_tokens(new cljs.core.Keyword(null,"accent","accent",-1826298468).cljs$core$IFn$_invoke$arity$1(theme__$1)),new cljs.core.Keyword(null,"glass","glass",1652756718).cljs$core$IFn$_invoke$arity$1(theme__$1)], 0));
});
/**
 * liquid-glass dark-scheme override map (`:accent-dark`, defaulting to
 *   `:accent`), deep-merged with the raw `:glass-dark` escape hatch. Applied
 *   inside the dark media query / attribute blocks by liquid-glass's own
 *   variable-redeclaration mechanism. A `:backdrop` is resolved first.
 */
kotoba_ui.theme.glass_dark_overrides = (function kotoba_ui$theme$glass_dark_overrides(theme){
var theme__$1 = kotoba_ui.theme.resolve_theme(theme);
return shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kotoba_ui.theme.accent_glass_tokens(kotoba_ui.theme.dark_accent(theme__$1)),new cljs.core.Keyword(null,"glass-dark","glass-dark",-1116790221).cljs$core$IFn$_invoke$arity$1(theme__$1)], 0));
});
/**
 * The resolved page background per appearance — the color the browser
 *   should paint its own chrome with (`<meta name=theme-color>`; kotoba-ui.
 *   shell/page emits the metas from this). Follows the same override chain as
 *   `theme-css`: shitsuke.hig's `:system-background` semantic color with the
 *   theme's `:hig` / `:hig-dark` escape hatches threaded in.
 *   Returns {:light "#RRGGBB" :dark "#RRGGBB"}.
 */
kotoba_ui.theme.theme_colors = (function kotoba_ui$theme$theme_colors(theme){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shitsuke.hig.resolve_hig_tokens.cljs$core$IFn$_invoke$arity$1(kotoba_ui.theme.hig_overrides(theme)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hig","color","hig/color",1011770543),new cljs.core.Keyword(null,"system-background","system-background",970043794)], null)),new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shitsuke.hig.resolve_dark_hig_tokens.cljs$core$IFn$_invoke$arity$1(kotoba_ui.theme.hig_dark_overrides(theme)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hig","color","hig/color",1011770543),new cljs.core.Keyword(null,"system-background","system-background",970043794)], null))], null);
});
/**
 * Value for the `data-appearance` attribute on `:root`/[:html]: nil for
 *   :auto (follow prefers-color-scheme — attribute omitted), "light"/"dark"
 *   for a forced appearance.
 */
kotoba_ui.theme.appearance_attr = (function kotoba_ui$theme$appearance_attr(theme){
var G__23410 = new cljs.core.Keyword(null,"appearance","appearance",-216383432).cljs$core$IFn$_invoke$arity$2(kotoba_ui.theme.resolve_theme(theme),new cljs.core.Keyword(null,"auto","auto",-566279492));
var G__23410__$1 = (((G__23410 instanceof cljs.core.Keyword))?G__23410.fqn:null);
switch (G__23410__$1) {
case "light":
return "light";

break;
case "dark":
return "dark";

break;
default:
return null;

}
});
/**
 * The complete page CSS for a theme map, in canonical order:
 * 
 *  1. the cascade-layer order declaration (exactly once, first)
 *  2. shitsuke.hig's full bundle — `--hig-*` vars (light + dark + forced
 *     appearance), element base CSS, the 11 text-style utility classes —
 *     with the theme's HIG overrides threaded in
 *  3. liquid-glass's layered material bundle with the theme's accent/glass
 *     overrides threaded in
 *  4. kotoba-ui.shell's structural rules
 * 
 *   Apps embed this once per page (kotoba-ui.shell/page does it for you) and
 *   write only unlayered app CSS on top — which always wins over every rule
 *   in here, because everything below the order declaration lives inside
 *   `@layer kotoba.hig` / `@layer kotoba.glass`.
 */
kotoba_ui.theme.theme_css = (function kotoba_ui$theme$theme_css(var_args){
var G__23418 = arguments.length;
switch (G__23418) {
case 0:
return kotoba_ui.theme.theme_css.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return kotoba_ui.theme.theme_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kotoba_ui.theme.theme_css.cljs$core$IFn$_invoke$arity$0 = (function (){
return kotoba_ui.theme.theme_css.cljs$core$IFn$_invoke$arity$1(null);
}));

(kotoba_ui.theme.theme_css.cljs$core$IFn$_invoke$arity$1 = (function (theme){
var theme__$1 = kotoba_ui.theme.resolve_theme(theme);
var ho = kotoba_ui.theme.hig_overrides(theme__$1);
var hdo = kotoba_ui.theme.hig_dark_overrides(theme__$1);
var go = kotoba_ui.theme.glass_overrides(theme__$1);
var gdo = kotoba_ui.theme.glass_dark_overrides(theme__$1);
var glass = clojure.string.replace_first(liquid_glass.style.layered_css.cljs$core$IFn$_invoke$arity$1([liquid_glass.style.root_css.cljs$core$IFn$_invoke$arity$2(go,gdo),"\n",liquid_glass.style.component_css()].join('')),[liquid_glass.style.layer_order,"\n"].join(''),"");
return [shitsuke.hig.layer_order_css,"\n","@layer kotoba.hig {\n",shitsuke.hig.css_variables.cljs$core$IFn$_invoke$arity$1(ho),"\n",shitsuke.hig.dark_css_variables.cljs$core$IFn$_invoke$arity$2(ho,hdo),"\n","}\n",shitsuke.hig.base_css.cljs$core$IFn$_invoke$arity$1(ho),"\n",shitsuke.hig.text_style_classes,"\n",glass,"\n",kotoba_ui.shell.style.shell_css(),"\n",kotoba_ui.product.product_css,(cljs.core.truth_(new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381).cljs$core$IFn$_invoke$arity$1(theme__$1))?["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((byoubu_ui.core.root_css.cljs$core$IFn$_invoke$arity$0 ? byoubu_ui.core.root_css.cljs$core$IFn$_invoke$arity$0() : byoubu_ui.core.root_css.call(null, ))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((byoubu_ui.core.component_css.cljs$core$IFn$_invoke$arity$0 ? byoubu_ui.core.component_css.cljs$core$IFn$_invoke$arity$0() : byoubu_ui.core.component_css.call(null, )))].join(''):null)].join('');
}));

(kotoba_ui.theme.theme_css.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=kotoba_ui.theme.js.map
