goog.provide('byoubu.poster');
byoubu.poster.dimensions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1600),new cljs.core.Keyword(null,"height","height",1025178622),(900)], null);
/**
 * Repo pins of what produced these artifacts. Unlike
 *   byoubu.catalog/generator's nil pin before any render existed, these
 *   are the shas that actually ran.
 */
byoubu.poster.generated_by = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terrain","terrain",704966005),"73b8ae27af8b376dc9b5ef73b68f631e35ca2b74",new cljs.core.Keyword(null,"byoubu","byoubu",966672923),"519e3f73a6ab043f69f41869eafffddc302454ae"], null);
/**
 * id -> {:path :bytes :sha256}. :path is relative to the classpath
 *   resource root, i.e. resources/<path>.
 */
byoubu.poster.posters = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cobalt-dune","cobalt-dune",-1023118062),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),"byoubu/posters/cobalt-dune.svg",new cljs.core.Keyword(null,"bytes","bytes",1175866680),(19207),new cljs.core.Keyword(null,"sha256","sha256",1890611800),"572ead7b21d113004cca2a703e1b064945599ac63136ddda3d167b990c55514d"], null),new cljs.core.Keyword(null,"ember-mesa","ember-mesa",-506499753),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),"byoubu/posters/ember-mesa.svg",new cljs.core.Keyword(null,"bytes","bytes",1175866680),(19075),new cljs.core.Keyword(null,"sha256","sha256",1890611800),"b247bd8a9efc50575381006eca2c39f63d57ded5d9c456dbb3368f19cabf883c"], null),new cljs.core.Keyword(null,"purple-desert","purple-desert",2067343471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),"byoubu/posters/purple-desert.svg",new cljs.core.Keyword(null,"bytes","bytes",1175866680),(25276),new cljs.core.Keyword(null,"sha256","sha256",1890611800),"632b104c90143574be4f299c48839b83e6878af5f57984e904da27ba06aa7638"], null),new cljs.core.Keyword(null,"salt-flat","salt-flat",1068471725),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),"byoubu/posters/salt-flat.svg",new cljs.core.Keyword(null,"bytes","bytes",1175866680),(9544),new cljs.core.Keyword(null,"sha256","sha256",1890611800),"aeb3f1bbb4dd11864cc4576bc9194fd8cef60e938b5e1999723d15f797ac0042"], null)], null);
/**
 * Manifest entry for a backdrop id, or nil.
 */
byoubu.poster.poster = (function byoubu$poster$poster(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(byoubu.poster.posters,id);
});
/**
 * Poster URL under a base path, e.g. (url :purple-desert "/assets")
 *   => "/assets/byoubu/posters/purple-desert.svg". Returns nil for an
 *   id with no rendered poster.
 */
byoubu.poster.url = (function byoubu$poster$url(id,base){
var temp__5825__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(byoubu.poster.poster(id));
if(cljs.core.truth_(temp__5825__auto__)){
var p = temp__5825__auto__;
return [clojure.string.replace((function (){var or__5002__auto__ = base;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),/\/$/,""),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
} else {
return null;
}
});

//# sourceMappingURL=byoubu.poster.js.map
