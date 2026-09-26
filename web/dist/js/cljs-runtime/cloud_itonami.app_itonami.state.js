goog.provide('cloud_itonami.app_itonami.state');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.app_itonami !== 'undefined') && (typeof cloud_itonami.app_itonami.state !== 'undefined') && (typeof cloud_itonami.app_itonami.state.state !== 'undefined')){
} else {
cloud_itonami.app_itonami.state.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"processing?","processing?",1968866327),false,new cljs.core.Keyword(null,"project-id","project-id",206449307),null,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),null,new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-log?","event-log?",-781063323),true,new cljs.core.Keyword(null,"reduce-motion?","reduce-motion?",766362287),false,new cljs.core.Keyword(null,"jst?","jst?",456752201),true], null),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"bug","bug",51265549),new cljs.core.Keyword(null,"body","body",-2049205669),"",new cljs.core.Keyword(null,"sent?","sent?",1251086682),false], null)], null));
}
cloud_itonami.app_itonami.state.steps = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"label","label",1718410804),"Initialization"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"design","design",1241338903),new cljs.core.Keyword(null,"label","label",1718410804),"Engine CAD & RTL"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"procure","procure",-1712913588),new cljs.core.Keyword(null,"label","label",1718410804),"Procurement"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"manufacture-test","manufacture-test",1795470956),new cljs.core.Keyword(null,"label","label",1718410804),"Assembly & Testing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"operate","operate",995947956),new cljs.core.Keyword(null,"label","label",1718410804),"Digital Twin Flight"], null)], null);
cloud_itonami.app_itonami.state.progress_percent = (function cloud_itonami$app_itonami$state$progress_percent(){
var idx = cljs.core.some((function (p__22632){
var vec__22633 = p__22632;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s))){
return i;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cloud_itonami.app_itonami.state.steps));
var idx__$1 = (function (){var or__5002__auto__ = idx;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var x__5087__auto__ = (0);
var y__5088__auto__ = (function (){var x__5090__auto__ = (100);
var y__5091__auto__ = ((((idx__$1 + (1)) * (100)) / cljs.core.count(cloud_itonami.app_itonami.state.steps)) | (0));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
});
cloud_itonami.app_itonami.state.toggle_menu_BANG_ = (function cloud_itonami$app_itonami$state$toggle_menu_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_itonami.state.state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),cljs.core.not),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),null);
}));
});
cloud_itonami.app_itonami.state.close_menu_BANG_ = (function cloud_itonami$app_itonami$state$close_menu_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_itonami.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false);
});
cloud_itonami.app_itonami.state.open_view_BANG_ = (function cloud_itonami$app_itonami$state$open_view_BANG_(view){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_itonami.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active-view","active-view",-1531689252),view], 0));
});
cloud_itonami.app_itonami.state.close_view_BANG_ = (function cloud_itonami$app_itonami$state$close_view_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_itonami.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),null);
});

//# sourceMappingURL=cloud_itonami.app_itonami.state.js.map
