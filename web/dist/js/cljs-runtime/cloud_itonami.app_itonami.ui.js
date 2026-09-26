goog.provide('cloud_itonami.app_itonami.ui');
cloud_itonami.app_itonami.ui.css_text = "\n.itn-app { height: 100vh; display: flex; }\n.itn-sidebar { width: 20rem; border-right: 1px solid var(--liquid-glass-border, rgba(0,0,0,.1)); padding: var(--liquid-glass-space-4); }\n.itn-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }\n.itn-header { display: flex; align-items: center; justify-content: space-between; padding: var(--liquid-glass-space-3) var(--liquid-glass-space-4); border-bottom: 1px solid var(--liquid-glass-border, rgba(0,0,0,.1)); }\n.itn-avatar { width: 2rem; height: 2rem; border-radius: 9999px; border: none; cursor: pointer; font-weight: 600; }\n.itn-menu { position: relative; }\n.itn-dropdown { position: absolute; right: 0; top: 2.6rem; z-index: 50; width: 16rem; border-radius: .75rem; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,.35); }\n.itn-item { display: flex; align-items: center; gap: .6rem; width: 100%; padding: .55rem 1rem; border: none; background: transparent; cursor: pointer; text-align: left; }\n.itn-item.danger { color: var(--liquid-glass-danger, #c0392b); }\n.itn-divider { border: 0; border-top: 1px solid var(--liquid-glass-border, rgba(0,0,0,.1)); margin: .25rem 0; }\n.itn-scrim { position: fixed; inset: 0; background: rgba(0,0,0,.6); z-index: 60; display: flex; align-items: center; justify-content: center; }\n.itn-modal { position: relative; width: 34rem; max-width: 90vw; max-height: 80vh; overflow-y: auto; border-radius: .75rem; padding: var(--liquid-glass-space-4); }\n.itn-progress { height: .5rem; border-radius: 9999px; background: var(--liquid-glass-border, rgba(0,0,0,.1)); overflow: hidden; }\n.itn-progress > div { height: 100%; background: var(--liquid-glass-accent, #0a84ff); }\n";
cloud_itonami.app_itonami.ui.btn = (function cloud_itonami$app_itonami$ui$btn(var_args){
var G__20111 = arguments.length;
switch (G__20111) {
case 2:
return cloud_itonami.app_itonami.ui.btn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloud_itonami.app_itonami.ui.btn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cloud_itonami.app_itonami.ui.btn.cljs$core$IFn$_invoke$arity$2 = (function (label,on_click){
return cloud_itonami.app_itonami.ui.btn.cljs$core$IFn$_invoke$arity$3(label,on_click,cljs.core.PersistentArrayMap.EMPTY);
}));

(cloud_itonami.app_itonami.ui.btn.cljs$core$IFn$_invoke$arity$3 = (function (label,on_click,p__20112){
var map__20113 = p__20112;
var map__20113__$1 = cljs.core.__destructure_map(map__20113);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20113__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20113__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((kotoba_ui.core.class_name.cljs$core$IFn$_invoke$arity$1 ? kotoba_ui.core.class_name.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"button","button",1456579943)) : kotoba_ui.core.class_name.call(null, new cljs.core.Keyword(null,"button","button",1456579943)))),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(disabled_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
}));

(cloud_itonami.app_itonami.ui.btn.cljs$lang$maxFixedArity = 3);

cloud_itonami.app_itonami.ui.menu_item = (function cloud_itonami$app_itonami$ui$menu_item(label,on_click,p__20114){
var map__20115 = p__20114;
var map__20115__$1 = cljs.core.__destructure_map(map__20115);
var danger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20115__$1,new cljs.core.Keyword(null,"danger?","danger?",181682216));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["itn-item",(cljs.core.truth_(danger_QMARK_)?" danger":null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"role","role",-736691072),"menuitem",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
});
cloud_itonami.app_itonami.ui.account_menu = (function cloud_itonami$app_itonami$ui$account_menu(){
var map__20116 = cljs.core.deref(cloud_itonami.app_itonami.state.state);
var map__20116__$1 = cljs.core.__destructure_map(map__20116);
var menu_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itn-menu","div.itn-menu",2097920493),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.itn-avatar","button.itn-avatar",-293045505),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"menu",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),cljs.core.boolean$(menu_open_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cloud_itonami.app_itonami.state.toggle_menu_BANG_], null),"JK"], null),(cljs.core.truth_(menu_open_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itn-dropdown","div.itn-dropdown",148782791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.menu_item,["\u9031\u9593\u4F7F\u7528\u91CF ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloud_itonami.app_itonami.state.progress_percent()),"%"].join(''),cloud_itonami.app_itonami.state.close_menu_BANG_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.menu_item,"iOS\u7248Itonami \u3092\u5165\u624B",cloud_itonami.app_itonami.state.close_menu_BANG_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.itn-divider","hr.itn-divider",466058837)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.menu_item,"\u8A2D\u5B9A",(function (){
return cloud_itonami.app_itonami.state.open_view_BANG_(new cljs.core.Keyword(null,"settings","settings",1556144875));
}),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.menu_item,"\u60C5\u5831",(function (){
return cloud_itonami.app_itonami.state.open_view_BANG_(new cljs.core.Keyword(null,"about","about",1423892543));
}),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.menu_item,"\u30D8\u30EB\u30D7\u30BB\u30F3\u30BF\u30FC",(function (){
return cloud_itonami.app_itonami.state.open_view_BANG_(new cljs.core.Keyword(null,"help","help",-439233446));
}),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.menu_item,"\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u9001\u4FE1",(function (){
return cloud_itonami.app_itonami.state.open_view_BANG_(new cljs.core.Keyword(null,"feedback","feedback",1624587107));
}),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.itn-divider","hr.itn-divider",466058837)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.menu_item,"\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8",cloud_itonami.app_itonami.state.close_menu_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"danger?","danger?",181682216),true], null)], null)], null):null)], null);
});
cloud_itonami.app_itonami.ui.modal = (function cloud_itonami$app_itonami$ui$modal(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itn-scrim","div.itn-scrim",-510634912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cloud_itonami.app_itonami.state.close_view_BANG_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itn-modal","div.itn-modal",-312918270),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-modal","aria-modal",553474260),"true",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null)], null),title], null),body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.btn,"\u9589\u3058\u308B",cloud_itonami.app_itonami.state.close_view_BANG_], null)], null)], null)], null);
});
cloud_itonami.app_itonami.ui.settings_view = (function cloud_itonami$app_itonami$ui$settings_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.modal,"\u8A2D\u5B9A",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9032\u6357"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itn-progress","div.itn-progress",-660120222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloud_itonami.app_itonami.state.progress_percent()),"%"].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\u73FE\u5728\u30D5\u30A7\u30FC\u30BA: ",cljs.core.name(new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u8868\u793A\u8A2D\u5B9A"], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_itonami$ui$settings_view_$_iter__20118(s__20119){
return (new cljs.core.LazySeq(null,(function (){
var s__20119__$1 = s__20119;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20119__$1);
if(temp__5825__auto__){
var s__20119__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20119__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20119__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20121 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20120 = (0);
while(true){
if((i__20120 < size__5479__auto__)){
var vec__20122 = cljs.core._nth(c__5478__auto__,i__20120);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,(1),null);
cljs.core.chunk_append(b__20121,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"padding","padding",1660304693),".4rem 0"], null)], null),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.app_itonami.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),key], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__20120,vec__20122,key,label,c__5478__auto__,size__5479__auto__,b__20121,s__20119__$2,temp__5825__auto__){
return (function (p1__20117_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_itonami.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),key], null),p1__20117_SHARP_.target.checked);
});})(i__20120,vec__20122,key,label,c__5478__auto__,size__5479__auto__,b__20121,s__20119__$2,temp__5825__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__20149 = (i__20120 + (1));
i__20120 = G__20149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20121),cloud_itonami$app_itonami$ui$settings_view_$_iter__20118(cljs.core.chunk_rest(s__20119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20121),null);
}
} else {
var vec__20125 = cljs.core.first(s__20119__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"padding","padding",1660304693),".4rem 0"], null)], null),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.app_itonami.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),key], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__20125,key,label,s__20119__$2,temp__5825__auto__){
return (function (p1__20117_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_itonami.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),key], null),p1__20117_SHARP_.target.checked);
});})(vec__20125,key,label,s__20119__$2,temp__5825__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),cloud_itonami$app_itonami$ui$settings_view_$_iter__20118(cljs.core.rest(s__20119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-log?","event-log?",-781063323),"Event Log \u3092\u5E38\u306B\u8868\u793A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reduce-motion?","reduce-motion?",766362287),"\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u6E1B\u3089\u3059"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jst?","jst?",456752201),"\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092 JST \u8868\u793A"], null)], null));
})()], null)], null);
});
cloud_itonami.app_itonami.ui.about_view = (function cloud_itonami$app_itonami$ui$about_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.modal,"\u60C5\u5831",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Itonami (\u55B6\u307F)"], null)," \u2014 LangGraph Pregel Runtime \u00B7 v0.1.0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"\u30CF\u30F3\u30C9\u30EB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"itonami.etzhayyim.com"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"DID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"did:web:itonami.etzhayyim.com"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"NSID prefix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"com.etzhayyim.apps.itonami.*"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"aerospace-safety"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u822A\u7A7A\u6A5F\u30A8\u30F3\u30B8\u30F3\u306E\u30E9\u30A4\u30D5\u30B5\u30A4\u30AF\u30EB\u5168\u4F53\uFF08\u8A2D\u8A08 \u2192 \u8ABF\u9054 \u2192 \u7D44\u7ACB \u2192 \u8A66\u9A13 \u2192 \u30C7\u30B8\u30BF\u30EB\u30C4\u30A4\u30F3\u904B\u7528\uFF09\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u304A\u3088\u3073\u8A18\u9332\u3059\u308B actor\u3002UNSPSC\uFF08\u90E8\u54C1\u8ABF\u9054\uFF09\u3068 ISIC\uFF08\u30B5\u30D7\u30E9\u30A4\u30E4\u30FC\u7523\u696D\u5206\u985E\uFF09\u3092\u7D71\u5408\u3059\u308B\u3002"], null)], null)], null);
});
cloud_itonami.app_itonami.ui.help_view = (function cloud_itonami$app_itonami$ui$help_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.modal,"\u30D8\u30EB\u30D7\u30BB\u30F3\u30BF\u30FC",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = (function cloud_itonami$app_itonami$ui$help_view_$_iter__20128(s__20129){
return (new cljs.core.LazySeq(null,(function (){
var s__20129__$1 = s__20129;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20129__$1);
if(temp__5825__auto__){
var s__20129__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20129__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20129__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20131 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20130 = (0);
while(true){
if((i__20130 < size__5479__auto__)){
var vec__20132 = cljs.core._nth(c__5478__auto__,i__20130);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20132,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20132,(1),null);
cljs.core.chunk_append(b__20131,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),".5rem 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),q], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),a], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),q], null)));

var G__20150 = (i__20130 + (1));
i__20130 = G__20150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20131),cloud_itonami$app_itonami$ui$help_view_$_iter__20128(cljs.core.chunk_rest(s__20129__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20131),null);
}
} else {
var vec__20135 = cljs.core.first(s__20129__$2);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),".5rem 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),q], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),a], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),q], null)),cloud_itonami$app_itonami$ui$help_view_$_iter__20128(cljs.core.rest(s__20129__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059\u306B\u306F\uFF1F","\u30D8\u30C3\u30C0\u30FC\u306E\u300CReset\u300D\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8 ID \u3068\u30D5\u30A7\u30FC\u30BA\u304C\u521D\u671F\u5316\u3055\u308C\u307E\u3059\u3002"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u5404\u30D5\u30A7\u30FC\u30BA\u3067\u4F55\u3092\u3059\u308C\u3070\u3088\u3044\u3067\u3059\u304B\uFF1F","Design \u2192 Procurement \u2192 Assembly & Testing \u2192 Digital Twin Flight \u306E\u9806\u306B\u9032\u307F\u307E\u3059\u3002"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Event Log \u304C\u6B62\u307E\u3063\u3066\u3044\u308B\u3088\u3046\u306B\u898B\u3048\u308B","LangGraph Pregel \u306E superstep \u5B9F\u884C\u4E2D\u306F\u30ED\u30B0\u304C\u6EDE\u7559\u3057\u307E\u3059\u3002\u51E6\u7406\u5B8C\u4E86\u5F8C\u306B\u307E\u3068\u3081\u3066\u51FA\u529B\u3055\u308C\u307E\u3059\u3002"], null)], null));
})()], null)], null);
});
cloud_itonami.app_itonami.ui.feedback_view = (function cloud_itonami$app_itonami$ui$feedback_view(){
var map__20140 = new cljs.core.Keyword(null,"feedback","feedback",1624587107).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state));
var map__20140__$1 = cljs.core.__destructure_map(map__20140);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20140__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20140__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var sent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20140__$1,new cljs.core.Keyword(null,"sent?","sent?",1251086682));
if(cljs.core.truth_(sent_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.modal,"\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u9001\u4FE1",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u8A18\u9332\u3057\u307E\u3057\u305F\u3002\u3054\u5354\u529B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.btn,"\u3055\u3089\u306B\u9001\u4FE1\u3059\u308B",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_itonami.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"sent?","sent?",1251086682)], null),false);
})], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.modal,"\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u9001\u4FE1",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

var fb_20151 = new cljs.core.Keyword(null,"feedback","feedback",1624587107).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state));
console.info("[itonami feedback]",new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(fb_20151),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fb_20151));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_itonami.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"sent?","sent?",1251086682)], null),true);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"\u7A2E\u985E"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(category),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20138_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_itonami.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"category","category",-593092832)], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20138_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"bug"], null),"\u4E0D\u5177\u5408\u306E\u5831\u544A"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"idea"], null),"\u6539\u5584\u306E\u63D0\u6848"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"other"], null),"\u305D\u306E\u4ED6"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"\u5185\u5BB9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"value","value",305978217),body,new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\u767A\u898B\u3057\u305F\u554F\u984C\u3084\u63D0\u6848\u3092\u8A18\u5165\u3057\u3066\u304F\u3060\u3055\u3044",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20139_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_itonami.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"body","body",-2049205669)], null),p1__20139_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.btn,"\u9001\u4FE1",(function (){
return cljs.core.List.EMPTY;
})], null)], null)], null);
}
});
cloud_itonami.app_itonami.ui.active_view = (function cloud_itonami$app_itonami$ui$active_view(){
var G__20141 = new cljs.core.Keyword(null,"active-view","active-view",-1531689252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state));
var G__20141__$1 = (((G__20141 instanceof cljs.core.Keyword))?G__20141.fqn:null);
switch (G__20141__$1) {
case "settings":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.settings_view], null);

break;
case "about":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.about_view], null);

break;
case "help":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.help_view], null);

break;
case "feedback":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.feedback_view], null);

break;
default:
return null;

}
});
cloud_itonami.app_itonami.ui.root = (function cloud_itonami$app_itonami$ui$root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.app_itonami.ui.css_text], null),(cljs.core.truth_(new cljs.core.Keyword(null,"active-view","active-view",-1531689252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.active_view], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itn-app","div.itn-app",-1681769213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.itn-sidebar","aside.itn-sidebar",1549529505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Itonami (\u55B6\u307F)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"LangGraph Pregel Runtime"], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_itonami$ui$root_$_iter__20142(s__20143){
return (new cljs.core.LazySeq(null,(function (){
var s__20143__$1 = s__20143;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20143__$1);
if(temp__5825__auto__){
var s__20143__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20143__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20143__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20145 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20144 = (0);
while(true){
if((i__20144 < size__5479__auto__)){
var s = cljs.core._nth(c__5478__auto__,i__20144);
cljs.core.chunk_append(b__20145,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s)], null)));

var G__20153 = (i__20144 + (1));
i__20144 = G__20153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20145),cloud_itonami$app_itonami$ui$root_$_iter__20142(cljs.core.chunk_rest(s__20143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20145),null);
}
} else {
var s = cljs.core.first(s__20143__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s)], null)),cloud_itonami$app_itonami$ui$root_$_iter__20142(cljs.core.rest(s__20143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cloud_itonami.app_itonami.state.steps);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.itn-main","main.itn-main",-1612037794),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.itn-header","header.itn-header",-1025715093),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project: ",(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "PENDING";
}
})()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.account_menu], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__20146 = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_itonami.state.state));
var G__20146__$1 = (((G__20146 instanceof cljs.core.Keyword))?G__20146.fqn:null);
switch (G__20146__$1) {
case "init":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_itonami.ui.btn,"Start Simulation Node",(function (){
return cljs.core.List.EMPTY;
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"phase view placeholder"], null);

}
})()], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.app_itonami.ui.js.map
