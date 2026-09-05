(ns cloud-itonami.app-itonami.desktop
  "Entry point for the shadow-cljs :app build (web/dist/js/main.js, loaded
  by web/index.html) — same mount pattern as murakumo-studio.desktop."
  (:require [reagent.dom.client :as rdomc]
            [cloud-itonami.app-itonami.state :as state]
            [cloud-itonami.app-itonami.ui :as ui]))

(defonce root (atom nil))

(defn- mount! []
  (let [el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdomc/create-root el)))
    (rdomc/render @root [ui/root])))

(defn init! []
  ;; reagent's r/atom re-renders subscribed components on change
  ;; (ui/root derefs state/state) — mount once.
  (mount!)
  ;; Click-outside: close the account dropdown when a click lands outside it.
  (.addEventListener js/document
                     "click"
                     (fn [e]
                       (when (:menu-open? @state/state)
                         (let [t (.-target e)]
                           (when (and t (not (-> t (.closest ".itn-menu"))))
                             (state/close-menu!)))))))
