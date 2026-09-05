(ns cloud-itonami.app-itonami.state
  "App state for the itonami cloud app webview UI. Single reagent atom —
  the Grok-style account menu (docs/grok-account-menu-reference.md) and its
  four views (settings/about/help/feedback) live here."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:phase :init                 ; :init :design :procure :manufacture-test :operate
    :processing? false
    :project-id nil
    :menu-open? false
    :active-view nil             ; nil : :settings :about :help :feedback
    :settings {:event-log? true :reduce-motion? false :jst? true}
    :feedback {:category :bug :body "" :sent? false}}))

(def steps
  [{:id :init :label "Initialization"}
   {:id :design :label "Engine CAD & RTL"}
   {:id :procure :label "Procurement"}
   {:id :manufacture-test :label "Assembly & Testing"}
   {:id :operate :label "Digital Twin Flight"}])

(defn progress-percent []
  (let [idx (some (fn [[i s]] (when (= (:phase @state) (:id s)) i))
                  (map-indexed vector steps))
        idx (or idx 0)]
    (max 0 (min 100 (int (/ (* (+ idx 1) 100) (count steps)))))))

(defn toggle-menu! []
  (swap! state (fn [s] (-> s (update :menu-open? not) (assoc :active-view nil)))))

(defn close-menu! []
  (swap! state assoc :menu-open? false))

(defn open-view! [view]
  (swap! state assoc :menu-open? false :active-view view))

(defn close-view! []
  (swap! state assoc :active-view nil))
