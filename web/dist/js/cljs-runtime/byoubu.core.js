goog.provide('byoubu.core');
byoubu.core.__GT_backdrop = (function byoubu$core$__GT_backdrop(x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
return byoubu.catalog.fetch(x);
}
});
byoubu.core.catalog = byoubu.catalog.catalog;
byoubu.core.generator = byoubu.catalog.generator;
byoubu.core.ids = byoubu.catalog.ids;
byoubu.core.lookup = byoubu.catalog.lookup;
byoubu.core.fetch = byoubu.catalog.fetch;
byoubu.core.by_tag = byoubu.catalog.by_tag;
/**
 * Legibility facts for a backdrop (id or map). See byoubu.facts.
 */
byoubu.core.facts = (function byoubu$core$facts(x){
return byoubu.facts.derive_facts(byoubu.core.__GT_backdrop(x));
});
/**
 * Tier-0 gradient layer data for a backdrop (id or map). See byoubu.plate.
 */
byoubu.core.plate_layers = (function byoubu$core$plate_layers(x){
return byoubu.plate.layers(byoubu.core.__GT_backdrop(x));
});
/**
 * The color to paint under the tier-0 layers.
 */
byoubu.core.plate_base_color = (function byoubu$core$plate_base_color(x){
return byoubu.plate.base_color(byoubu.core.__GT_backdrop(x));
});
byoubu.core.wcag_aa_body = byoubu.facts.wcag_aa_body;
/**
 * Validation problems for a backdrop (id or map); empty means valid.
 */
byoubu.core.problems = (function byoubu$core$problems(x){
return byoubu.spec.problems(byoubu.core.__GT_backdrop(x));
});
byoubu.core.valid_QMARK_ = (function byoubu$core$valid_QMARK_(x){
return byoubu.spec.valid_QMARK_(byoubu.core.__GT_backdrop(x));
});
/**
 * Every problem across the whole catalog — what CI asserts is empty.
 */
byoubu.core.catalog_problems = (function byoubu$core$catalog_problems(){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__23086_SHARP_){
return byoubu.spec.problems(byoubu.catalog.fetch(p1__23086_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([byoubu.catalog.ids()], 0)));
});
byoubu.core.posters = byoubu.poster.posters;
/**
 * Tier-1 poster manifest entry for a backdrop id: {:path :bytes :sha256}, or
 *   nil if none has been rendered.
 */
byoubu.core.poster = (function byoubu$core$poster(id){
return byoubu.poster.poster(id);
});
/**
 * Poster URL under a base path, e.g. (poster-url :purple-desert "/assets").
 */
byoubu.core.poster_url = (function byoubu$core$poster_url(id,base){
return byoubu.poster.url(id,base);
});

//# sourceMappingURL=byoubu.core.js.map
