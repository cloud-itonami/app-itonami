(ns cloud-itonami.app-itonami.ui
  "View tree for the itonami cloud app. Structural chrome comes from
  appkit.core / kotoba-ui.core (murakumo-studio構成). Interactive controls
  that need live reagent handlers use small hand-rolled equivalents styled
  via kotoba-ui's exposed class-name (mirroring murakumo-studio.ui/btn and
  gftdcojp/manimani's sbutton) — kotoba-ui's `button` only supports
  shitsuke's :act SSR contract, no on-click.

  The account menu mirrors the Grok desktop app's account menu
  (docs/grok-account-menu-reference.md):
    週間使用量(進捗メーター) / 入手 / 設定 / 情報 / ヘルプセンター /
    フィードバックを送信 / サインアウト(区切り線区切り・赤系)."
  (:require [appkit.core :as shape]
            [kotoba-ui.core :as ui]
            [cloud-itonami.app-itonami.state :as state]))

;; small local helpers

(def css-text
  "
.itn-app { height: 100vh; display: flex; }
.itn-sidebar { width: 20rem; border-right: 1px solid var(--liquid-glass-border, rgba(0,0,0,.1)); padding: var(--liquid-glass-space-4); }
.itn-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.itn-header { display: flex; align-items: center; justify-content: space-between; padding: var(--liquid-glass-space-3) var(--liquid-glass-space-4); border-bottom: 1px solid var(--liquid-glass-border, rgba(0,0,0,.1)); }
.itn-avatar { width: 2rem; height: 2rem; border-radius: 9999px; border: none; cursor: pointer; font-weight: 600; }
.itn-menu { position: relative; }
.itn-dropdown { position: absolute; right: 0; top: 2.6rem; z-index: 50; width: 16rem; border-radius: .75rem; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,.35); }
.itn-item { display: flex; align-items: center; gap: .6rem; width: 100%; padding: .55rem 1rem; border: none; background: transparent; cursor: pointer; text-align: left; }
.itn-item.danger { color: var(--liquid-glass-danger, #c0392b); }
.itn-divider { border: 0; border-top: 1px solid var(--liquid-glass-border, rgba(0,0,0,.1)); margin: .25rem 0; }
.itn-scrim { position: fixed; inset: 0; background: rgba(0,0,0,.6); z-index: 60; display: flex; align-items: center; justify-content: center; }
.itn-modal { position: relative; width: 34rem; max-width: 90vw; max-height: 80vh; overflow-y: auto; border-radius: .75rem; padding: var(--liquid-glass-space-4); }
.itn-progress { height: .5rem; border-radius: 9999px; background: var(--liquid-glass-border, rgba(0,0,0,.1)); overflow: hidden; }
.itn-progress > div { height: 100%; background: var(--liquid-glass-accent, #0a84ff); }
")

(defn- btn
  ([label on-click] (btn label on-click {}))
  ([label on-click {:keys [disabled? class]}]
   [:button {:class (str (ui/class-name :button) (when class (str " " class)))
             :type "button"
             :disabled (boolean disabled?)
             :on-click on-click}
    label]))

;; account menu (Grok-style)

(defn- menu-item [label on-click {:keys [danger?]}]
  [:button {:class (str "itn-item" (when danger? " danger"))
            :type "button" :role "menuitem" :on-click on-click}
   label])

(defn account-menu []
  (let [{:keys [menu-open?]} @state/state]
    [:div.itn-menu
     [:button.itn-avatar {:aria-haspopup "menu"
                          :aria-expanded (boolean menu-open?)
                          :on-click state/toggle-menu!}
      "JK"]
     (when menu-open?
       [:div.itn-dropdown {:role "menu"}
        [menu-item (str "週間使用量 " (state/progress-percent) "%")
         state/close-menu! {}]
        [menu-item "iOS版Itonami を入手" state/close-menu! {}]
        [:hr.itn-divider]
        [menu-item "設定" #(state/open-view! :settings) {}]
        [menu-item "情報" #(state/open-view! :about) {}]
        [menu-item "ヘルプセンター" #(state/open-view! :help) {}]
        [menu-item "フィードバックを送信" #(state/open-view! :feedback) {}]
        [:hr.itn-divider]
        [menu-item "サインアウト" state/close-menu! {:danger? true}]])]))

;; modal views

(defn- modal [title body]
  [:div.itn-scrim {:on-click state/close-view!}
   [:div.itn-modal {:role "dialog" :aria-modal "true" :aria-label title
                    :on-click (fn [e] (.stopPropagation e))}
    [:h2 {:style {:margin-top 0}} title]
    body
    [:div {:style {:margin-top "1rem" :text-align "right"}}
     [btn "閉じる" state/close-view!]]]])

(defn settings-view []
  [modal "設定"
   [:div
    [:h3 "シミュレーション進捗"]
    [:div.itn-progress
     [:div {:style {:width (str (state/progress-percent) "%")}}]]
    [:p (str "現在フェーズ: " (name (:phase @state/state)))]
    [:h3 "表示設定"]
    (for [[key label] [[:event-log? "Event Log を常に表示"]
                       [:reduce-motion? "アニメーションを減らす"]
                       [:jst? "タイムスタンプを JST 表示"]]]
      ^{:key key}
      [:label {:style {:display "flex" :justify-content "space-between"
                       :padding ".4rem 0"}}
       label
       [:input {:type "checkbox"
                :checked (get-in @state/state [:settings key])
                :on-change #(swap! state/state assoc-in [:settings key]
                                   (.. % -target -checked))}]])]])

(defn about-view []
  [modal "情報"
   [:div
    [:p [:strong "Itonami (営み)"] " — LangGraph Pregel Runtime · v0.1.0"]
    [:table
     [:tbody
      [:tr [:td "ハンドル"] [:td "itonami.etzhayyim.com"]]
      [:tr [:td "DID"] [:td "did:web:itonami.etzhayyim.com"]]
      [:tr [:td "NSID prefix"] [:td "com.etzhayyim.apps.itonami.*"]]
      [:tr [:td "コンプライアンス"] [:td "aerospace-safety"]]]]
    [:p "航空機エンジンのライフサイクル全体（設計 → 調達 → 組立 → 試験 → デジタルツイン運用）をシミュレーションおよび記録する actor。UNSPSC（部品調達）と ISIC（サプライヤー産業分類）を統合する。"]]])

(defn help-view []
  [modal "ヘルプセンター"
   [:div
    (for [[q a] [["シミュレーションを最初からやり直すには？"
                  "ヘッダーの「Reset」を実行すると、プロジェクト ID とフェーズが初期化されます。"]
                 ["各フェーズで何をすればよいですか？"
                  "Design → Procurement → Assembly & Testing → Digital Twin Flight の順に進みます。"]
                 ["Event Log が止まっているように見える"
                  "LangGraph Pregel の superstep 実行中はログが滞留します。処理完了後にまとめて出力されます。"]]]
      ^{:key q}
      [:details {:style {:padding ".5rem 0"}}
       [:summary q]
       [:p a]])]])

(defn feedback-view []
  (let [{:keys [category body sent?]} (:feedback @state/state)]
    (if sent?
      [modal "フィードバックを送信"
       [:div
        [:p "フィードバックを記録しました。ご協力ありがとうございます。"]
        [btn "さらに送信する" #(swap! state/state assoc-in [:feedback :sent?] false)]]]
      [modal "フィードバックを送信"
       [:form
        {:on-submit (fn [e]
                      (.preventDefault e)
                      (let [fb (:feedback @state/state)]
                        (js/console.info "[itonami feedback]" (:category fb) (:body fb)))
                      (swap! state/state assoc-in [:feedback :sent?] true))}
        [:label "種類"]
        [:select {:value (name category)
                  :on-change #(swap! state/state assoc-in [:feedback :category]
                                     (keyword (.. % -target -value)))}
         [:option {:value "bug"} "不具合の報告"]
         [:option {:value "idea"} "改善の提案"]
         [:option {:value "other"} "その他"]]
        [:label "内容"]
        [:textarea {:rows 5 :value body :required true
                    :placeholder "発見した問題や提案を記入してください"
                    :on-change #(swap! state/state assoc-in [:feedback :body]
                                       (.. % -target -value))}]
        [btn "送信" #()]]])))

(defn active-view []
  (case (:active-view @state/state)
    :settings [settings-view]
    :about [about-view]
    :help [help-view]
    :feedback [feedback-view]
    nil))

;; root

(defn root []
  [:div
   [:style css-text]
   (when (:active-view @state/state)
     [active-view])
   [:div.itn-app
    [:aside.itn-sidebar
     [shape/panel
      [:div
       [:h2 "Itonami (営み)"]
       [:p "LangGraph Pregel Runtime"]
       (for [s state/steps]
         ^{:key (:id s)}
         [:div [:p (:label s)]])]]]
    [:main.itn-main
     [:header.itn-header
      [:div
       [:span "Project: " (or (:project-id @state/state) "PENDING")]]
      [account-menu]]
     [:div
      (case (:phase @state/state)
        :init [btn "Start Simulation Node" #()]
        [:div "phase view placeholder"])]]]])
