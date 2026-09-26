goog.provide('kotoba_ui.core');
/**
 * SSR: render kotoba-ui hiccup to an HTML string. Same fn browser reagent
 *   renders (shitsuke.reagent.core) consumes, per shitsuke's dual-render contract.
 */
kotoba_ui.core.__GT_html = shitsuke.hiccup.__GT_html;
kotoba_ui.core.resolve_tokens = liquid_glass.tokens.resolve_tokens;
kotoba_ui.core.resolve_dark_tokens = liquid_glass.tokens.resolve_dark_tokens;
kotoba_ui.core.css_variables = liquid_glass.tokens.css_variables;
kotoba_ui.core.dark_css_variables = liquid_glass.tokens.dark_css_variables;
kotoba_ui.core.spring_linear_easing = liquid_glass.tokens.spring_linear_easing;
kotoba_ui.core.class_name = liquid_glass.style.class_name;
kotoba_ui.core.root_css = liquid_glass.style.root_css;
kotoba_ui.core.component_rules = liquid_glass.style.component_rules;
kotoba_ui.core.component_css = liquid_glass.style.component_css;
kotoba_ui.core.inline_style = liquid_glass.style.inline_style;
kotoba_ui.core.inline_style_hiccup = liquid_glass.style.inline_style_hiccup;
kotoba_ui.core.panel = liquid_glass.components.panel;
kotoba_ui.core.toolbar = liquid_glass.components.toolbar;
kotoba_ui.core.nav_bar = liquid_glass.components.nav_bar;
kotoba_ui.core.tab_bar = liquid_glass.components.tab_bar;
kotoba_ui.core.sheet = liquid_glass.components.sheet;
kotoba_ui.core.alert = liquid_glass.components.alert;
kotoba_ui.core.menu = liquid_glass.components.menu;
kotoba_ui.core.scrim = liquid_glass.components.scrim;
kotoba_ui.core.list_view = liquid_glass.components.list_view;
kotoba_ui.core.list_row = liquid_glass.components.list_row;
kotoba_ui.core.disclosure = liquid_glass.components.disclosure;
kotoba_ui.core.button = liquid_glass.components.button;
kotoba_ui.core.icon_button = liquid_glass.components.icon_button;
kotoba_ui.core.text_field = liquid_glass.components.text_field;
kotoba_ui.core.text_area = liquid_glass.components.text_area;
kotoba_ui.core.search_field = liquid_glass.components.search_field;
kotoba_ui.core.menu_select = liquid_glass.components.menu_select;
kotoba_ui.core.toggle = liquid_glass.components.toggle;
kotoba_ui.core.checkbox = liquid_glass.components.checkbox;
kotoba_ui.core.radio = liquid_glass.components.radio;
kotoba_ui.core.slider = liquid_glass.components.slider;
kotoba_ui.core.stepper = liquid_glass.components.stepper;
kotoba_ui.core.progress_bar = liquid_glass.components.progress_bar;
kotoba_ui.core.progress_circle = liquid_glass.components.progress_circle;
kotoba_ui.core.gauge = liquid_glass.components.gauge;
kotoba_ui.core.badge = liquid_glass.components.badge;
kotoba_ui.core.chip = liquid_glass.components.chip;
kotoba_ui.core.label = liquid_glass.components.label;
kotoba_ui.core.avatar = liquid_glass.components.avatar;
kotoba_ui.core.divider = liquid_glass.components.divider;
kotoba_ui.core.tooltip = liquid_glass.components.tooltip;
kotoba_ui.core.lens_filter_defs = liquid_glass.components.lens_filter_defs;
kotoba_ui.core.theme_css = kotoba_ui.theme.theme_css;
kotoba_ui.core.appearance_attr = kotoba_ui.theme.appearance_attr;
kotoba_ui.core.hig_overrides = kotoba_ui.theme.hig_overrides;
kotoba_ui.core.hig_dark_overrides = kotoba_ui.theme.hig_dark_overrides;
kotoba_ui.core.glass_overrides = kotoba_ui.theme.glass_overrides;
kotoba_ui.core.glass_dark_overrides = kotoba_ui.theme.glass_dark_overrides;
kotoba_ui.core.hex__GT_rgba = kotoba_ui.theme.hex__GT_rgba;
kotoba_ui.core.stack = kotoba_ui.shell.stack;
kotoba_ui.core.spacer = kotoba_ui.shell.spacer;
kotoba_ui.core.section = kotoba_ui.shell.section;
kotoba_ui.core.hero = kotoba_ui.shell.hero;
kotoba_ui.core.grid = kotoba_ui.shell.grid;
kotoba_ui.core.app_shell = kotoba_ui.shell.app_shell;
kotoba_ui.core.page = kotoba_ui.shell.page;
kotoba_ui.core.shell_css = kotoba_ui.shell.shell_css;
kotoba_ui.core.metric = kotoba_ui.product.metric;
kotoba_ui.core.empty_state = kotoba_ui.product.empty_state;
kotoba_ui.core.data_table = kotoba_ui.product.data_table;
kotoba_ui.core.backdrop = byoubu_ui.core.backdrop;
kotoba_ui.core.backdrop_css = byoubu_ui.core.component_css;
kotoba_ui.core.backdrop_theme = byoubu_ui.core.theme_for;
kotoba_ui.core.backdrop_glass_surface = byoubu_ui.core.glass_surface;
kotoba_ui.core.backdrops = byoubu.core.ids;
kotoba_ui.core.backdrop_facts = byoubu.core.facts;
kotoba_ui.core.backdrop_poster_url = byoubu.core.poster_url;
/**
 * Viewport width at (and under) which `app-shell`'s sidebar collapses to a
 *   single column. Use this in an app's own media queries so they switch in
 *   lockstep with the shell (`(str "(max-width: " ui/sidebar-breakpoint ")")`).
 */
kotoba_ui.core.sidebar_breakpoint = kotoba_ui.shell.style.sidebar_breakpoint;
/**
 * Fixed sidebar column width in the two-column app-shell layout.
 */
kotoba_ui.core.sidebar_width = kotoba_ui.shell.style.sidebar_width;
/**
 * The one-call SSR entry: a complete refined HTML document string —
 *   doctype + shell/page (charset/viewport/title/theme CSS/data-appearance)
 *   rendered via ->html. opts as kotoba-ui.shell/page (:title :description
 *   :lang :theme :head).
 */
kotoba_ui.core.__GT_page = (function kotoba_ui$core$__GT_page(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23503 = arguments.length;
var i__5727__auto___23505 = (0);
while(true){
if((i__5727__auto___23505 < len__5726__auto___23503)){
args__5732__auto__.push((arguments[i__5727__auto___23505]));

var G__23506 = (i__5727__auto___23505 + (1));
i__5727__auto___23505 = G__23506;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return kotoba_ui.core.__GT_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(kotoba_ui.core.__GT_page.cljs$core$IFn$_invoke$arity$variadic = (function (opts,body){
return ["<!doctype html>",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23497 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(kotoba_ui.shell.page,opts,body);
return (kotoba_ui.core.__GT_html.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.core.__GT_html.cljs$core$IFn$_invoke$arity$1(G__23497) : kotoba_ui.core.__GT_html.call(null, G__23497));
})())].join('');
}));

(kotoba_ui.core.__GT_page.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kotoba_ui.core.__GT_page.cljs$lang$applyTo = (function (seq23494){
var G__23495 = cljs.core.first(seq23494);
var seq23494__$1 = cljs.core.next(seq23494);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23495,seq23494__$1);
}));


//# sourceMappingURL=kotoba_ui.core.js.map
