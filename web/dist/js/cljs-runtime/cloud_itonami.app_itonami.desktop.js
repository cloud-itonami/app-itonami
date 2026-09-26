goog.provide('cloud_itonami.app_itonami.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.app_itonami !== 'undefined') && (typeof cloud_itonami.app_itonami.desktop !== 'undefined') && (typeof cloud_itonami.app_itonami.desktop.root !== 'undefined')){
} else {
cloud_itonami.app_itonami.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cloud_itonami.app_itonami.desktop.mount_BANG_ = (function cloud_itonami$app_itonami$desktop$mount_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.app_itonami.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.app_itonami.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.app_itonami.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.root], null));
});
cloud_itonami.app_itonami.desktop.init_BANG_ = (function cloud_itonami$app_itonami$desktop$init_BANG_(){
cloud_itonami.app_itonami.desktop.mount_BANG_();

return document.addEventListener("click",(function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state)))){
var t = e.target;
if(cljs.core.truth_((function (){var and__5000__auto__ = t;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(t.closest(".itn-menu"));
} else {
return and__5000__auto__;
}
})())){
return cloud_itonami.app_itonami.state.close_menu_BANG_();
} else {
return null;
}
} else {
return null;
}
}));
});

//# sourceMappingURL=cloud_itonami.app_itonami.desktop.js.map
