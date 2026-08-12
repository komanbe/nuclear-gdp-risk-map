/* ============================================================
   Nuclear GDP Risk Map — app.js
   Reference prototype for the Outrider Foundation.
   ============================================================ */

// -------------------- I18N --------------------
const I18N = {
  ja: {
    // splash
    splash_eyebrow:   "EDITION 01 · 2026",
    splash_title_main:"核兵器 GDP リスクマップ",
    splash_title_sub: "Nuclear GDP Risk Map",
    splash_lead:      "「もし核弾頭が一発、主要都市——あるいは港湾・海峡・油田——に届いたら、積み上がった経済と、いま世界を流れている供給はいくら消えるのか」——その額を地図上で測るプロトタイプ。",
    splash_about:     '都市は、数十年かけて積み上がった<b>経済資本と制度的記憶の密な塊</b>である。だが世界経済はそれだけではない——港湾・工場・資源・海峡を毎日流れる<b>供給のフロー</b>が、塊同士を繋いでいる。本プロトタイプは、核弾頭が消し去る両方——都市の〈ストック蒸発〉と供給網の〈フロー遮断〉——を、帳簿に載っていない負債(GDP換算)として測る。<span class="term" data-def-ja="NPT(Nuclear Non-Proliferation Treaty / 核兵器不拡散条約)。1968年署名・1970年発効。核保有国には段階的な軍縮を、非保有国には核兵器取得の禁止を求める国際条約。日本を含む191カ国が加盟。" data-def-en="NPT — Nuclear Non-Proliferation Treaty (signed 1968, in force 1970). Commits nuclear-weapon states to disarmament and non-nuclear states to foregoing weapons. 191 states parties.">NPT</span>議論の中では、この金額はほぼ測られてこなかった。',
    splash_start:     "調査を開始",
    splash_hint:      "Enter キーでも進行",
    splash_footer:    "Outrider 向け議論用スキャフォールド",

    // header
    eyebrow:       "Outrider Foundation 向けリファレンス装置",
    title:         "核兵器 GDP リスクマップ",
    subtitle:      "都市に積み上がったストックと、港湾・資源・海峡を流れるフロー——核弾頭が消し去る両方を地図上で概算する。",
    meta_edition:  "EDITION",
    meta_date:     "DATE",
    meta_version:  "VERSION",

    // panels
    scenario:      "シナリオ",
    yield_label:   "弾頭出力",
    burst_label:   "爆発方式",
    target_label:  "標的",
    fire_btn:      "シミュレーション実行",
    mode_label:    "シナリオ種別",
    target_group_city: "都市(GDP上位40)",
    hint_click:    "標的は都市40+戦略資産55から選択。地図上のマーカーをクリックしても標的に設定できる。",
    clear_btn:     "すべてリセット",

    result:        "累積被害",
    cum_lead:      "起爆した都市の経済資本と人口が、ここに積み上がる。リセットを押すまで消えない。",
    cum_loss_label:"累積経済損失",
    cum_count:     "起爆回数",
    cum_pop:       "累積影響人口",
    cum_share:     "世界年GDP比",
    reset_btn:     "すべてリセット",
    dispatch_head: "配信タイムライン",
    dispatch_empty:"まだ起爆はありません。左で弾頭出力を選び、地図をクリック。",
    jpy_rate_note: "日本円換算は ¥150/$ の概算。",
    hazard_tag:    "既爆",
    halt_prefix:   "機能停止",
    narr_unknown:  "任意地点",
    narr_detonations:"発",
    ripple_legend: "線 = 貿易依存と金融ハブ連鎖による被害の流れ。太さ/濃さ=被害額。",
    layers:        "レイヤー",
    basemap_label: "背景地図",
    bm_color:      "カラー",
    bm_terrain:    "地形",
    bm_sat:        "衛星",
    layer_gdp:     "都市GDPバブル",
    layer_port:    "港湾・物流ハブ",
    layer_factory: "工場・製造クラスタ",
    layer_energy:  "エネルギー・資源",
    layer_choke:   "海上チョークポイント",
    layer_memory:  "アーカイブ / 文化的記憶の損失",
    layer_fallout: "フォールアウト・プルーム",
    layers_hint:   "戦略資産マーカーはクリックで詳細。被弾すると年間フロー額×途絶期間の『フロー遮断損失』を別建てで計上。",

    cat_port:      "港湾・物流",
    cat_factory:   "工場・製造",
    cat_energy:    "エネルギー・資源",
    cat_choke:     "チョークポイント",
    a_stat:        "基礎データ",
    a_flow:        "年間フロー額(参考値)",
    a_recovery:    "想定途絶期間",
    a_loss1:       "全損時のフロー遮断損失",
    a_deps:        "主要依存先(供給シェア)",
    a_src:         "出典",
    a_note:        "全損時損失 = 年間フロー額 × 途絶期間。被弾時は被害リングとの重なりから損傷率を乗算。",
    a_btn:         "この拠点に起爆",
    sv_head:       "現地の光景 — 偵察衛星ビュー",
    sv_open:       "Googleマップで開く",
    target_sv_head:"標的の現況 — 偵察衛星ビュー",
    cum_stock:     "ストック蒸発(都市GDP)",
    cum_flow:      "フロー遮断(供給網)",
    century_label: "100年展望(復興30年)",
    century_def:   "復興に30年(線形回復)を仮定した逸失生産の概算: 蒸発したストック(単年GDP)×15年分+フロー遮断。制度的記憶・文化資本の恒久喪失は数値化できないため含まない——実際の世紀スケール損失はこれより大きい。",
    ledger_head:   "喪失リスト(累積)",
    r_assets:      "被弾インフラ",
    dep_flow_label:"供給停止の配分",
    mo_unit:       "か月",

    sim_title:     "拡張モデル · 都市停止シミュレータ",
    sim_lead:      "核・地震・原発事故・港湾封鎖・紛争 —— 原因を問わず『都市機能停止率』に統一。貿易依存(OECD ICIO 水準の近似)と金融ハブ連鎖から、世界GDPへの波及を概算。",
    sim_city_label:"対象都市",
    sim_halt_label:"機能停止率",
    sim_duration_label:"継続期間",
    preset_nuclear:"核起爆",
    preset_quake:  "大地震",
    preset_npp:    "原発事故",
    preset_port:   "港湾封鎖",
    preset_conflict:"地域紛争",
    sim_run:       "シミュレーション実行",
    sim_r_direct:  "都市GDP損失(直接)",
    sim_r_national:"国GDP損失",
    sim_r_world:   "世界GDP損失(合計)",
    sim_r_fin:     "金融ハブ波及",
    sim_r_share:   "世界GDP比",
    sim_r_ripple:  "波及上位都市",
    sim_r_formula: "CC<sub>macro</sub> = α·直接 + β·貿易波及 + γ·金融波及(本実装は expectation を省略)。",

    about:         "概要",
    about_body:    '本プロトタイプは、都市を<b>経済と制度的記憶の密で非代替な貯蔵庫</b>(ストック)として、港湾・工場・資源・海峡を<b>世界を巡る供給フローの結節点</b>として扱う。単一の起爆はストックを蒸発させ、フローを寸断する —— 現行の核戦略下で潜在化し、<span class="term" data-def-ja="NPT: 核兵器不拡散条約。1968年成立。保有国に軍縮、非保有国に取得禁止を課す。" data-def-en="NPT — Nuclear Non-Proliferation Treaty (1968). Commits nuclear states to disarmament, others to foregoing weapons.">NPT</span>議論では価格付けされていない負債である。',
    src:           '都市GDP: <span class="term" data-def-ja="Brookings Institution と JPMorgan Chase が共同で発行する、都市GDP・生産性の国際比較データセット。" data-def-en="International dataset of metro-level GDP and productivity, jointly published by Brookings Institution and JPMorgan Chase.">Brookings Global Metro Monitor</span> / Oxford Economics(参考値、2022–2023)。爆発半径: <span class="term" data-def-ja="1977年版『The Effects of Nuclear Weapons』。核兵器効果の標準参考書。本ツールの爆発半径スケーリングもここに基づく。" data-def-en="Glasstone &amp; Dolan (1977), ‘The Effects of Nuclear Weapons’ — standard reference; the blast scaling in this tool follows its airburst tables.">Glasstone &amp; Dolan (1977)</span>. 戦略資産: UNCTAD / Lloyd\'s List・企業報告・EIA/JODI・USGS(いずれも参考値)。',

    // fig / legend
    fig_label_idle: "入力待ち",
    fig_body_idle:  "「01 シナリオ」で弾頭と標的(都市または戦略資産)を選び「シミュレーション実行」。被害を二層(ストック+フロー)で計算し、起爆後は地図下部に実況が流れ、カメラが被害の広がりを追います。",
    legend_title:   "被害リング",
    legend_severe:  "5 psi · 深刻な構造破壊",
    legend_thermal: "3度熱傷",
    legend_moderate:"1 psi · 軽度被害",

    // result
    r_target:       "標的",
    r_yield:        "出力",
    r_mode:         "方式",
    r_airburst:     "エアバースト",
    r_groundburst:  "地表爆発",
    r_radii:        "被害半径(severe / thermal / moderate)",
    r_hits:         "主要メトロへの露出(上位)",
    r_total_gdp:    "露出GDP合計",
    r_total_pop:    "露出人口合計",
    r_share:        "世界GDPに占める比率",
    r_none:         "被害リング内に上位メトロは存在しません。",
    fig_label_hot:  "起爆点 固定",
    fig_body_hot:   (y, mode) => `弾頭出力 <b>${y}</b>・<b>${mode}</b>。3リングが固定され、露出するメトロ経済質量を算出しました。`,

    // city panel
    c_gdp:         "GDP(参考値)",
    c_pop:         "人口",
    c_radius:      "実効メトロ半径",
    c_share:       "世界GDPの概算比率",
    c_note:        "単独露出の概算には上記シナリオの弾頭出力・方式を使用。",
    c_btn:         "この都市の中心に起爆",

    // guide
    guide_btn:     "使い方",
    guide_eyebrow: "FIELD MANUAL · 操作手引",
    guide_title:   "使い方ガイド",
    guide_lead:    "世界はGDPバブル(都市のストック)だけでなく、港湾・工場・資源・海峡を流れるフローでつながっている——このマップはその両方の消失を測ります。3クリックで開始。",
    guide_shapes_title: "地図記号",
    guide_close:   "閉じて開始",
    guide_hint:    "Esc でも閉じられます · 右上の「? 使い方」からいつでも再表示",
    guide_steps: [
      { t: "弾頭を設定する",
        b: "左パネル「01 シナリオ」で弾頭出力(15 kt〜25 Mt)と爆発方式を選ぶ。" },
      { t: "シミュレーション実行",
        b: "「01 シナリオ」で標的を選んで実行。地図のマーカーをクリックして標的に設定もできる。被害リングと爆心マークはリセットまで何発でも積み上がる。" },
      { t: "マーカーをクリックで詳細",
        b: "赤い円 = 都市GDPバブル。丸いバッジのピクトグラム = 戦略資産——錨は港湾・物流、工場マークは製造クラスタ、雫はエネルギー・資源、船は海上チョークポイント。クリックすると詳細パネルと「この拠点に起爆」ボタン。" },
      { t: "二層の損失を読む",
        b: "「02 累積被害」に、都市GDPの〈ストック蒸発〉と供給網の〈フロー遮断〉(年間フロー額×途絶期間)を別建てで集計。連鎖フェーズでは、被弾資産から破線アーク、被弾都市から貿易・金融の波及網(紺の実線)が世界へ伸びる。" },
      { t: "レイヤーで整理する",
        b: "「03 レイヤー」でカテゴリごとに表示を切替。マーカーサイズは経済的な重み。" },
      { t: "核以外のシナリオ",
        b: "「シナリオ種別」チップで地震・原発事故・港湾封鎖・紛争に切替。『機能停止率』に統一し、貿易依存と金融連鎖から世界GDPへの波及を概算。実行ボタンは同じ。" },
    ],

    // misc
    lang_code:     "ja",
    unit_b:        "B USD",
    unit_t:        "T USD",
    unit_m:        "百万人",
    unit_km:       "km",
  },
  en: {
    splash_eyebrow:   "EDITION 01 · 2026",
    splash_title_main:"Nuclear GDP Risk Map",
    splash_title_sub: "核兵器 GDP リスクマップ",
    splash_lead:      "“If a single warhead reaches a major city — or a port, a strait, an oil field — how much accumulated economy and flowing supply is erased?” A prototype for pricing that number on the map.",
    splash_about:     'A modern city is a <b>dense cluster of economic capital and institutional memory</b>, compounded over decades. But the world economy is more than its cities — a daily <b>flow of supply</b> through ports, factories, resources, and straits binds the clusters together. This prototype prices both erasures — metro <b>stock vaporized</b> and supply-chain <b>flow severed</b> — as the latent liability of deployed arsenals, unrecorded on any balance sheet and largely unpriced in <span class="term" data-def-ja="NPT(Nuclear Non-Proliferation Treaty / 核兵器不拡散条約)。1968年署名・1970年発効。核保有国には段階的な軍縮を、非保有国には核兵器取得の禁止を求める国際条約。日本を含む191カ国が加盟。" data-def-en="NPT — Nuclear Non-Proliferation Treaty (signed 1968, in force 1970). Commits nuclear-weapon states to disarmament and non-nuclear states to foregoing weapons. 191 states parties.">NPT</span> discourse.',
    splash_start:     "Begin inspection",
    splash_hint:      "Press Enter to proceed",
    splash_footer:    "Discussion scaffold for Outrider",

    eyebrow:       "Reference instrument for the Outrider Foundation",
    title:         "Nuclear GDP Risk Map",
    subtitle:      "First-order estimate of both losses a warhead inflicts: the stock piled up in metros, and the flow moving through ports, resources, and straits.",
    meta_edition:  "EDITION",
    meta_date:     "DATE",
    meta_version:  "VERSION",

    scenario:      "Scenario",
    yield_label:   "Warhead yield",
    burst_label:   "Burst type",
    target_label:  "Target",
    fire_btn:      "Run simulation",
    mode_label:    "Scenario type",
    target_group_city: "Metros (top-40 GDP)",
    hint_click:    "Pick from 40 metros + 55 strategic assets. Clicking a marker on the map also sets it as the target.",
    clear_btn:     "Reset all",

    result:        "Cumulative damage",
    cum_lead:      "Every detonation leaves its economic mass here. It persists until you reset.",
    cum_loss_label:"Cumulative economic loss",
    cum_count:     "Detonations",
    cum_pop:       "Affected population",
    cum_share:     "Share of world annual GDP",
    reset_btn:     "Reset all",
    dispatch_head: "Dispatch timeline",
    dispatch_empty:"No detonations yet. Select a yield on the left and click the map.",
    jpy_rate_note: "JPY conversion at ¥150/$ (indicative).",
    hazard_tag:    "STRUCK",
    halt_prefix:   "HALT",
    narr_unknown:  "an arbitrary point",
    narr_detonations:"strikes",
    ripple_legend: "Lines = damage flowing through trade dependency and the finance-hub channel. Thicker / more opaque = larger loss.",
    layers:        "Layers",
    basemap_label: "Basemap",
    bm_color:      "Color",
    bm_terrain:    "Terrain",
    bm_sat:        "Satellite",
    layer_gdp:     "Metro GDP bubbles",
    layer_port:    "Ports & logistics hubs",
    layer_factory: "Factory & manufacturing clusters",
    layer_energy:  "Energy & resources",
    layer_choke:   "Maritime chokepoints",
    layer_memory:  "Archival / cultural memory loss",
    layer_fallout: "Fallout plume",
    layers_hint:   "Click any asset marker for details. A strike books a separate flow-disruption loss: annual flow value × outage duration.",

    cat_port:      "Port / Logistics",
    cat_factory:   "Factory / Mfg.",
    cat_energy:    "Energy / Resources",
    cat_choke:     "Chokepoint",
    a_stat:        "Key figure",
    a_flow:        "Annual flow value (ref.)",
    a_recovery:    "Assumed outage",
    a_loss1:       "Flow loss if destroyed",
    a_deps:        "Top dependents (supply share)",
    a_src:         "Sources",
    a_note:        "Full loss = annual flow × outage duration. On a strike, scaled by the damage fraction from ring overlap.",
    a_btn:         "Detonate at this site",
    sv_head:       "Site view — recon satellite",
    sv_open:       "Open in Google Maps",
    target_sv_head:"Target now — recon satellite",
    cum_stock:     "Stock vaporized (metro GDP)",
    cum_flow:      "Flow severed (supply chains)",
    century_label: "100-year view (30-yr rebuild)",
    century_def:   "Forgone output assuming a 30-year linear recovery: vaporized stock (one year of GDP) × 15, plus the severed flow. Permanent loss of institutional memory and cultural capital is unquantifiable and excluded — the true century-scale loss is larger.",
    ledger_head:   "Loss ledger (cumulative)",
    r_assets:      "Infrastructure struck",
    dep_flow_label:"Allocated supply halt",
    mo_unit:       "mo",

    sim_title:     "Extension model · City-halt simulator",
    sim_lead:      "Nuclear / earthquake / NPP accident / port blockade / conflict — all unified as a single ‘city-function halt rate’. Ripple to world GDP is estimated from a trade-dependency matrix (OECD ICIO-scale approximation) plus a finance-hub channel.",
    sim_city_label:"Target city",
    sim_halt_label:"Halt rate",
    sim_duration_label:"Duration",
    preset_nuclear:"Nuclear",
    preset_quake:  "Earthquake",
    preset_npp:    "NPP accident",
    preset_port:   "Port blockade",
    preset_conflict:"Regional conflict",
    sim_run:       "Run simulation",
    sim_r_direct:  "Direct metro-GDP loss",
    sim_r_national:"National GDP loss",
    sim_r_world:   "World GDP loss (total)",
    sim_r_fin:     "Finance-hub ripple",
    sim_r_share:   "Share of world GDP",
    sim_r_ripple:  "Top affected metros",
    sim_r_formula: "CC<sub>macro</sub> = α·direct + β·trade ripple + γ·finance ripple (expectation omitted in this build).",

    about:         "About",
    about_body:    'This prototype treats cities as <b>dense, non-substitutable reservoirs of economic and institutional memory</b> (stock) and ports, factories, resources, and straits as <b>the junctions of the world\'s supply flow</b>. A single detonation vaporizes the stock and severs the flow — a liability made latent by current nuclear posture and largely unpriced in <span class="term" data-def-ja="NPT: 核兵器不拡散条約。1968年成立。保有国に軍縮、非保有国に取得禁止を課す。" data-def-en="NPT — Nuclear Non-Proliferation Treaty (1968). Commits nuclear states to disarmament, others to foregoing weapons.">NPT</span> discourse.',
    src:           'Metro GDP: <span class="term" data-def-ja="Brookings Institution と JPMorgan Chase が共同で発行する、都市GDP・生産性の国際比較データセット。" data-def-en="International dataset of metro-level GDP and productivity, jointly published by Brookings Institution and JPMorgan Chase.">Brookings Global Metro Monitor</span> / Oxford Economics (indicative, 2022–2023). Blast radii: <span class="term" data-def-ja="1977年版『The Effects of Nuclear Weapons』。核兵器効果の標準参考書。本ツールの爆発半径スケーリングもここに基づく。" data-def-en="Glasstone &amp; Dolan (1977), ‘The Effects of Nuclear Weapons’ — standard reference; the blast scaling in this tool follows its airburst tables.">Glasstone &amp; Dolan (1977)</span>. Strategic assets: UNCTAD / Lloyd\'s List, company reports, EIA/JODI, USGS (all indicative).',

    fig_label_idle: "Awaiting input",
    fig_body_idle:  "Pick a warhead and target (metro or strategic asset) in panel 01 and run the simulation. Damage is computed on two tiers (stock + flow); live commentary plays along the bottom of the map while the camera follows the spread.",
    legend_title:   "Damage rings",
    legend_severe:  "5 psi · severe structural damage",
    legend_thermal: "3rd-degree burns",
    legend_moderate:"1 psi · light damage",

    r_target:       "Target",
    r_yield:        "Yield",
    r_mode:         "Mode",
    r_airburst:     "Airburst",
    r_groundburst:  "Ground burst",
    r_radii:        "Damage radii (severe / thermal / moderate)",
    r_hits:         "Metro exposure (top)",
    r_total_gdp:    "Total exposed GDP",
    r_total_pop:    "Total exposed population",
    r_share:        "Share of world GDP",
    r_none:         "No top metro falls within the damage rings.",
    fig_label_hot:  "Detonation fixed",
    fig_body_hot:   (y, mode) => `Yield <b>${y}</b>, <b>${mode}</b>. Three rings fixed; exposed metro economic mass tallied in the side panel.`,

    c_gdp:         "GDP (reference)",
    c_pop:         "Population",
    c_radius:      "Effective metro radius",
    c_share:       "Approx. share of world GDP",
    c_note:        "Standalone exposure uses the yield and burst type above.",
    c_btn:         "Detonate at this metro center",

    guide_btn:     "How to",
    guide_eyebrow: "FIELD MANUAL",
    guide_title:   "How to use",
    guide_lead:    "The world is bound together not only by GDP bubbles (metro stock) but by flows of logistics and resources through ports, factories, and straits — this map prices the erasure of both. Three clicks to start.",
    guide_shapes_title: "Map symbols",
    guide_close:   "Close & begin",
    guide_hint:    "Esc also closes · reopen anytime from “? How to” in the header",
    guide_steps: [
      { t: "Set the warhead",
        b: "In panel 01, choose a yield (15 kt – 25 Mt) and burst type." },
      { t: "Run the simulation",
        b: "Pick a target in panel 01 and run. Clicking any marker on the map also sets it as the target. Damage rings and epicenter marks accumulate until you reset." },
      { t: "Click markers for detail",
        b: "Red circles = metro GDP bubbles. Round pictogram badges = strategic assets — anchor for ports & logistics, factory for manufacturing, droplet for energy & resources, ship for maritime chokepoints. Each opens a detail panel with a “detonate here” button." },
      { t: "Read the two-tier loss",
        b: "Panel 02 books metro-GDP stock vaporized and supply-chain flow severed (annual flow × outage) separately. In the cascade phase, struck assets draw dashed dependency arcs and struck metros spin a navy trade-and-finance web across the world." },
      { t: "Organize with layers",
        b: "Panel 03 toggles each category. Marker size = economic weight." },
      { t: "Non-nuclear scenarios",
        b: "The scenario-type chips switch to earthquake, NPP accident, port blockade, or conflict — unified into a halt rate with a world-GDP ripple estimate. Same run button." },
    ],

    lang_code:     "en",
    unit_b:        "B USD",
    unit_t:        "T USD",
    unit_m:        "M people",
    unit_km:       "km",
  }
};

let LANG = "ja";
const WORLD_GDP_B = 105000; // $105T nominal (2023)
// Century view: forgone output under a 30-year linear recovery ≈ area under
// the recovery curve = 15 years of the vaporized annual stock, plus the
// severed flow. Permanent memory/cultural losses are unquantifiable and excluded.
const CENTURY_MULT = 15;

function t(key) { return I18N[LANG][key]; }

function applyLang() {
  document.documentElement.setAttribute("lang", LANG);
  document.documentElement.setAttribute("data-lang", LANG);

  // text / html swaps
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[LANG][key];
    if (val == null) return;
    if (typeof val === "string") {
      if (/<[a-z][^>]*>/i.test(val)) el.innerHTML = val;
      else el.textContent = val;
    }
  });

  // select option labels
  document.querySelectorAll("select").forEach(sel => {
    [...sel.options].forEach(opt => {
      const v = opt.getAttribute("data-" + LANG);
      if (v) opt.textContent = v;
    });
  });

  // lang buttons active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === LANG);
  });

  // re-render dynamic content if active
  if (typeof cumulative !== "undefined" && cumulative.count > 0) renderCumulative(allDetonations[allDetonations.length - 1]);
  if (lastCity) showCity(lastCity);
  if (typeof lastAsset !== "undefined" && lastAsset) showAsset(lastAsset);
  if (guideModal && !guideModal.hidden) renderGuide();
  if (typeof populateTargets === "function") populateTargets(); // rebuild optgroup labels in the new language
  if (typeof updateTargetPreview === "function") updateTargetPreview();
  if (typeof cityLayer !== "undefined" && cityLayer) cityLayer.eachLayer(l => l.setTooltipContent ? l.setTooltipContent(l._cityRef.name[LANG]) : null);
  // re-render hazard divIcons in the new language
  if (typeof allDetonations !== "undefined") {
    allDetonations.forEach(d => {
      if (!d.hazard) return;
      const cm = d.cityMatch;
      const km = cm ? Math.round(cm.distKm) : 0;
      const placeJa = cm
        ? (cm.near ? `${cm.city.name.ja}近郊 ${km}km` : cm.city.name.ja)
        : "任意地点";
      const placeEn = cm
        ? (cm.near ? `near ${cm.city.name.en} (${km} km)` : cm.city.name.en)
        : "Off-metro";
      d.hazard.setIcon(L.divIcon({
        className: "hazard-div",
        html: hazardIconHTML(placeJa, placeEn),
        iconSize: [88, 68], iconAnchor: [44, 34],
      }));
    });
  }
  const simResultEl = document.getElementById("sim-result");
  if (simResultEl && !simResultEl.hidden && typeof runSim === "function") runSim();
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    LANG = btn.getAttribute("data-lang");
    applyLang();
  });
});

// -------------------- DATE STAMP --------------------
function setDate() {
  const d = new Date();
  const s = d.toISOString().slice(0, 10);
  const el1 = document.getElementById("date-stamp"); if (el1) el1.textContent = s;
  const el2 = document.getElementById("splash-date"); if (el2) el2.textContent = s;
}
setDate();

// -------------------- TERM TOOLTIP --------------------
const tip = document.getElementById("tip");
function showTip(term, e) {
  const text = term.getAttribute("data-def-" + LANG) || term.getAttribute("data-def-ja");
  if (!text) return;
  tip.textContent = text;
  tip.style.display = "block";
  requestAnimationFrame(() => {
    const rect = term.getBoundingClientRect();
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = rect.left + rect.width / 2 - tw / 2;
    let top = rect.top - th - 10;
    const pad = 8;
    if (left < pad) left = pad;
    if (left + tw > window.innerWidth - pad) left = window.innerWidth - pad - tw;
    if (top < pad) top = rect.bottom + 10;
    tip.style.left = left + "px";
    tip.style.top = top + "px";
    tip.classList.add("show");
  });
}
function hideTip() {
  tip.classList.remove("show");
  setTimeout(() => { if (!tip.classList.contains("show")) tip.style.display = "none"; }, 180);
}
document.addEventListener("mouseover", e => {
  const term = e.target.closest(".term");
  if (term) showTip(term, e);
});
document.addEventListener("mouseout", e => {
  if (e.target.closest(".term")) hideTip();
});

// -------------------- SPLASH DISMISS --------------------
const splash = document.getElementById("splash");
function dismissSplash() {
  if (!splash || splash.classList.contains("splash-off")) return;
  splash.classList.add("splash-off");
  setTimeout(() => { splash.remove(); invalidateMap(); maybeAutoGuide(); }, 950);
}
document.getElementById("splash-enter")?.addEventListener("click", dismissSplash);
document.addEventListener("keydown", e => {
  if (splash && !splash.classList.contains("splash-off") && (e.key === "Enter" || e.key === " ")) {
    // don't capture if focus is in a button lang-toggle inside splash
    if (e.target && e.target.classList.contains("lang-btn") && e.target.closest("#splash")) return;
    e.preventDefault();
    dismissSplash();
  }
});

// -------------------- USAGE GUIDE MODAL --------------------
const guideModal = document.getElementById("guide-modal");

function renderGuide() {
  const steps = I18N[LANG].guide_steps;
  document.getElementById("guide-steps").innerHTML = steps.map((s, i) => `
    <li>
      <span class="g-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="g-body">
        <div class="g-t">${s.t}</div>
        <div class="g-b">${s.b}</div>
      </div>
    </li>`).join("");
  const shapes = [
    ['<span class="legend-dot" style="--sw:#a8231f"></span>', t("layer_gdp")],
    [pictoSwatchSVG("port"),    t("layer_port")],
    [pictoSwatchSVG("factory"), t("layer_factory")],
    [pictoSwatchSVG("energy"),  t("layer_energy")],
    [pictoSwatchSVG("choke"),   t("layer_choke")],
  ];
  document.getElementById("guide-shapes-grid").innerHTML =
    shapes.map(([sw, label]) => `<div class="gs-item"><span class="gs-swatch">${sw}</span><span>${label}</span></div>`).join("");
}

let guideHideTimer = null;
function openGuide() {
  clearTimeout(guideHideTimer);
  renderGuide();
  guideModal.hidden = false;
  requestAnimationFrame(() => guideModal.classList.add("open"));
}
function closeGuide() {
  guideModal.classList.remove("open");
  guideHideTimer = setTimeout(() => { guideModal.hidden = true; }, 240);
}
function maybeAutoGuide() {
  let seen = false;
  try { seen = !!localStorage.getItem("ngrm_guide_seen"); } catch (e) {}
  if (seen) return;
  try { localStorage.setItem("ngrm_guide_seen", "1"); } catch (e) {}
  setTimeout(openGuide, 500);
}
document.getElementById("guide-btn")?.addEventListener("click", openGuide);
guideModal?.querySelectorAll("[data-guide-close]").forEach(el => el.addEventListener("click", closeGuide));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && guideModal && !guideModal.hidden) closeGuide();
});

// -------------------- MATH --------------------
function blastRadii(kt, burst) {
  const W = Math.max(0.1, kt);
  const factor = (burst === "ground") ? 0.6 : 1.0;
  return {
    severe:   2.2 * Math.cbrt(W) * factor,
    thermal:  2.9 * Math.pow(W, 0.41) * factor,
    moderate: 5.9 * Math.cbrt(W) * factor,
  };
}
const R_EARTH = 6371;
function haversine(a, b) {
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const la1 = a.lat * Math.PI / 180;
  const la2 = b.lat * Math.PI / 180;
  const h = Math.sin(dLat/2)**2 + Math.cos(la1)*Math.cos(la2)*Math.sin(dLng/2)**2;
  return 2 * R_EARTH * Math.asin(Math.sqrt(h));
}
// overlap area of two discs with radii r1,r2 whose centers are d apart, as fraction of disc-2 area
function overlapFraction(d, r1, r2) {
  if (d >= r1 + r2) return 0;
  if (d + r2 <= r1) return 1; // metro fully inside blast ring
  if (d + r1 <= r2) return (Math.PI * r1 * r1) / (Math.PI * r2 * r2);
  const a = (d*d + r1*r1 - r2*r2) / (2*d*r1);
  const b = (d*d + r2*r2 - r1*r1) / (2*d*r2);
  const ac = Math.max(-1, Math.min(1, a));
  const bc = Math.max(-1, Math.min(1, b));
  const A = r1*r1 * Math.acos(ac)
          + r2*r2 * Math.acos(bc)
          - 0.5 * Math.sqrt(Math.max(0,(-d+r1+r2)*(d+r1-r2)*(d-r1+r2)*(d+r1+r2)));
  return A / (Math.PI * r2 * r2);
}

// -------------------- FORMATTERS --------------------
const JPY_PER_USD = 150;

function fmtYen(vUsdB) {
  // vUsdB → yen: $1B USD = ¥150B = ¥1,500億 = ¥0.15兆
  if (vUsdB < 0.0001) return "¥0";
  const chouyen = vUsdB * JPY_PER_USD / 1000; // 兆円
  const okuyen  = vUsdB * JPY_PER_USD * 10;   // 億円
  if (chouyen >= 100)   return "¥" + chouyen.toFixed(0) + "兆";
  if (chouyen >= 10)    return "¥" + chouyen.toFixed(1) + "兆";
  if (chouyen >= 1)     return "¥" + chouyen.toFixed(2) + "兆";
  if (okuyen >= 100)    return "¥" + Math.round(okuyen).toLocaleString() + "億";
  if (okuyen >= 1)      return "¥" + okuyen.toFixed(1) + "億";
  return "¥" + (okuyen * 10000).toFixed(0) + "万";
}
function fmtUSD(vUsdB) {
  if (vUsdB >= 1000) return "$" + (vUsdB/1000).toFixed(2) + " T";
  if (vUsdB >= 10)   return "$" + vUsdB.toFixed(0) + " B";
  if (vUsdB >= 1)    return "$" + vUsdB.toFixed(1) + " B";
  return "$" + vUsdB.toFixed(2) + " B";
}
function fmtMoney(vUsdB) {
  return LANG === "ja" ? fmtYen(vUsdB) : fmtUSD(vUsdB);
}
function fmtMoneyAlt(vUsdB) {
  // the other currency for parenthetical display
  return LANG === "ja" ? fmtUSD(vUsdB) : fmtYen(vUsdB);
}
// legacy alias used in a few places
function fmtGDP(v) { return fmtMoney(v); }

function fmtPop(v) { return v.toFixed(1) + " " + t("unit_m"); }
function fmtKm(v)  { return v.toFixed(1) + " " + t("unit_km"); }
function fmtPct(v) { return (v*100).toFixed(2) + "%"; }

function fmtTime(d) {
  const pad = n => String(n).padStart(2, "0");
  if (LANG === "ja") {
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} JST`;
  }
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
function fmtYieldLabel(kt) {
  return kt >= 1000 ? (kt/1000).toFixed(1) + " Mt" : kt + " kt";
}

// -------------------- EASINGS + ANIMATE --------------------
const eases = {
  outQuart: t => 1 - Math.pow(1 - t, 4),
  outCubic: t => 1 - Math.pow(1 - t, 3),
  outBack:  t => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t-1,3) + c1 * Math.pow(t-1,2); },
};
function animate({ duration=600, delay=0, ease="outCubic", update, done }) {
  update(eases[ease](0));
  const start = performance.now() + delay;
  function step(now) {
    const t = Math.max(0, Math.min(1, (now - start) / duration));
    if (now < start) { requestAnimationFrame(step); return; }
    update(eases[ease](t));
    if (t < 1) requestAnimationFrame(step);
    else if (done) done();
  }
  requestAnimationFrame(step);
}

// -------------------- MAP --------------------
const map = L.map("map", {
  worldCopyJump: true,
  zoomControl: true,
  attributionControl: true,
  minZoom: 2,
}).setView([30, 15], 2);
function invalidateMap() { setTimeout(() => map.invalidateSize(), 50); }

// Basemap: switchable tile styles online (colored Google-Maps-like street map
// by default, hillshaded terrain, or satellite); a bundled vector world
// (WORLD_GEOJSON) in the self-contained/offline build, where the CSP blocks
// tile requests. Real Google Maps tiles would need a billed API key — the
// Esri street style is the closest freely usable look.
const BASEMAPS = {
  color: {
    dark: false, bg: "#cfe0ea",
    make: () => [L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      { attribution: 'Map &copy; Esri &amp; contributors', maxZoom: 18 }
    )],
  },
  terrain: {
    dark: false, bg: "#cfe0ea",
    make: () => [L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      { attribution: 'Map &copy; Esri &amp; contributors', maxZoom: 18 }
    )],
  },
  sat: {
    dark: true, bg: "#0c1116",
    make: () => [
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { attribution: 'Imagery &copy; Esri &amp; contributors', maxZoom: 18 }
      ),
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/dark_only_labels/{z}/{x}/{y}{r}.png",
        { attribution: '&copy; OpenStreetMap &copy; CARTO', subdomains: "abcd", maxZoom: 19, pane: "shadowPane", opacity: 0.95 }
      ),
    ],
  },
};
let baseLayers = [];

function setBasemap(key) {
  const def = BASEMAPS[key];
  if (!def) return;
  baseLayers.forEach(l => map.removeLayer(l));
  baseLayers = def.make();
  baseLayers.forEach(l => l.addTo(map));
  document.body.classList.toggle("sat-basemap", def.dark);
  document.getElementById("map").style.background = def.bg;
}

if (window.NGRM_OFFLINE && window.WORLD_GEOJSON) {
  document.getElementById("basemap-row")?.setAttribute("hidden", "");
  document.getElementById("map").style.background = "#dbe2e6";
  L.geoJSON(window.WORLD_GEOJSON, {
    style: {
      color: "#c2bdae", weight: 0.7, opacity: 0.9,
      fillColor: "#efede4", fillOpacity: 1,
    },
    interactive: false,
  }).addTo(map);
} else {
  setBasemap("sat");
  document.querySelectorAll('input[name="basemap"]').forEach(r => {
    r.addEventListener("change", e => { if (e.target.checked) setBasemap(e.target.value); });
  });
}

// -------------------- CITY BUBBLES --------------------
const maxGDP = Math.max(...CITIES.map(c => c.gdp));
function cityRadiusPx(c) { return 3 + Math.sqrt(c.gdp / maxGDP) * 14; }

let cityLayer = L.layerGroup().addTo(map);

function renderCities() {
  cityLayer.clearLayers();
  CITIES.forEach((c, i) => {
    const m = L.circleMarker([c.lat, c.lng], {
      radius: 0,
      color: "#c1292e",
      weight: 1.5,
      fillColor: "#c1292e",
      fillOpacity: 0.18,
      className: "city-bubble",
    });
    m._cityRef = c;
    m.bindTooltip(() => c.name[LANG], { direction: "top", offset: [0, -6], opacity: 1 });
    m.on("click", e => {
      L.DomEvent.stopPropagation(e);
      showCity(c);
      const simSel = document.getElementById("sim-city");
      if (simSel) simSel.value = CITIES.indexOf(c);
      const tgtSel = document.getElementById("target-city");
      if (tgtSel) { tgtSel.value = "c:" + CITIES.indexOf(c); if (typeof updateTargetPreview === "function") updateTargetPreview(); }
      map.flyTo([c.lat, c.lng], Math.max(map.getZoom(), 4), { duration: 0.7 });
    });
    cityLayer.addLayer(m);
    const target = cityRadiusPx(c);
    animate({
      duration: 550, delay: 40 * i + 200, ease: "outBack",
      update: t => m.setRadius(target * t)
    });
  });
}
renderCities();

// -------------------- STRATEGIC ASSET MARKERS --------------------
// Flow tier: sites outside the GDP bubbles whose destruction severs supply
// chains — ports, factory clusters, energy/resources, maritime chokepoints.
const ASSET_CAT_COLOR = { port: "#163a5f", factory: "#6b4423", energy: "#8b5a1a", choke: "#2d5a3f" };
const maxFlow = Math.max(...ASSETS.map(a => a.flow_busd));
function assetSizePx(a) { return 11 + Math.sqrt(a.flow_busd / maxFlow) * 15; }

// Recognizable pictograms (24×24 viewBox, stroke-based):
// anchor = port/logistics, factory = manufacturing, droplet = energy/resources, ship = chokepoint.
const ASSET_PICTO = {
  port: `
    <circle cx="12" cy="5" r="2.1"/>
    <line x1="12" y1="7.1" x2="12" y2="20"/>
    <line x1="8.4" y1="10.2" x2="15.6" y2="10.2"/>
    <path d="M 5 14.5 C 5 18.6 8.2 20.6 12 20.6 C 15.8 20.6 19 18.6 19 14.5"/>
    <path d="M 5 14.5 L 3.2 16.6 M 5 14.5 L 7.2 16.2"/>
    <path d="M 19 14.5 L 20.8 16.6 M 19 14.5 L 16.8 16.2"/>`,
  factory: `
    <path d="M 4.5 20 V 12.2 L 9.3 15 V 12.2 L 14.1 15 V 12.2 L 19.5 15.4 V 20 Z"/>
    <path d="M 6 12.2 V 5.4 H 8.8 V 12"/>
    <line x1="11" y1="17.6" x2="13" y2="17.6"/>
    <line x1="15.4" y1="17.6" x2="17.4" y2="17.6"/>`,
  energy: `
    <path d="M 12 3.6 C 9.2 8 6.6 10.9 6.6 14.3 A 5.4 5.4 0 0 0 17.4 14.3 C 17.4 10.9 14.8 8 12 3.6 Z"/>
    <path d="M 9.4 14.6 A 2.6 2.6 0 0 0 12 17.2"/>`,
  choke: `
    <path d="M 4.2 14.6 H 19.8 L 17.6 18.4 H 6.4 Z"/>
    <path d="M 9 14.6 V 11.2 H 15 V 14.6"/>
    <line x1="11" y1="11.2" x2="11" y2="8.6"/>
    <line x1="10" y1="8.6" x2="12" y2="8.6"/>
    <path d="M 4 21 C 5.4 20 6.8 20 8.2 21 C 9.6 22 11 22 12.4 21 C 13.8 20 15.2 20 16.6 21 C 17.6 21.7 18.8 21.8 20 21"/>`,
};

function assetShapeSVG(a, s) {
  const c = ASSET_CAT_COLOR[a.cat];
  return `<svg class="asset-sym" width="${s}" height="${s}" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#fdfcf8" fill-opacity="0.94" stroke="${c}" stroke-width="1.5"/>
    <g transform="translate(12 12) scale(0.66) translate(-12 -12)"
       fill="none" stroke="${c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      ${ASSET_PICTO[a.cat]}
    </g>
  </svg>`;
}

// Small swatch version for the layers panel and the guide legend.
function pictoSwatchSVG(cat, size = 15) {
  const c = ASSET_CAT_COLOR[cat];
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#fdfcf8" stroke="${c}" stroke-width="1.6"/>
    <g transform="translate(12 12) scale(0.66) translate(-12 -12)"
       fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${ASSET_PICTO[cat]}
    </g>
  </svg>`;
}
document.querySelectorAll(".legend-shape[data-cat]").forEach(el => {
  el.innerHTML = pictoSwatchSVG(el.getAttribute("data-cat"));
});

function aname(a) { return LANG === "ja" ? a.name_ja : a.name_en; }
function astat(a) { return LANG === "ja" ? a.stat_ja : a.stat_en; }

const assetLayers = {
  port:    L.layerGroup().addTo(map),
  factory: L.layerGroup().addTo(map),
  energy:  L.layerGroup().addTo(map),
  choke:   L.layerGroup().addTo(map),
};
let lastAsset = null;

function renderAssets() {
  Object.values(assetLayers).forEach(g => g.clearLayers());
  ASSETS.forEach(a => {
    const s = assetSizePx(a);
    const m = L.marker([a.lat, a.lng], {
      icon: L.divIcon({
        className: "asset-div asset-" + a.cat,
        html: assetShapeSVG(a, s),
        iconSize: [s, s], iconAnchor: [s / 2, s / 2],
      }),
      keyboard: false, zIndexOffset: 400,
    });
    m._assetRef = a;
    m.bindTooltip(() => `<b>${aname(a)}</b><br>${astat(a)}`, { direction: "top", offset: [0, -s / 2], opacity: 1 });
    m.on("click", e => {
      L.DomEvent.stopPropagation(e);
      showAsset(a);
      const tgtSel = document.getElementById("target-city");
      if (tgtSel) { tgtSel.value = "a:" + ASSETS.indexOf(a); if (typeof updateTargetPreview === "function") updateTargetPreview(); }
      map.flyTo([a.lat, a.lng], Math.max(map.getZoom(), 4), { duration: 0.7 });
    });
    assetLayers[a.cat].addLayer(m);
  });
}
renderAssets();

function metroForCC(cc) {
  let best = null;
  CITIES.forEach(c => { if (c.cc === cc && (!best || c.gdp > best.gdp)) best = c; });
  return best;
}

// Dependency-arc anchors for countries with no metro in the top-40 sample —
// arcs land on the capital / main economic city instead of being dropped.
const COUNTRY_ANCHOR = {
  NL: { ja: "オランダ",   en: "Netherlands", lat:  52.37, lng:   4.90 },
  BE: { ja: "ベルギー",   en: "Belgium",     lat:  50.85, lng:   4.35 },
  PL: { ja: "ポーランド", en: "Poland",      lat:  52.23, lng:  21.01 },
  MY: { ja: "マレーシア", en: "Malaysia",    lat:   3.14, lng: 101.69 },
  VN: { ja: "ベトナム",   en: "Vietnam",     lat:  10.82, lng: 106.63 },
  CZ: { ja: "チェコ",     en: "Czechia",     lat:  50.08, lng:  14.44 },
  CL: { ja: "チリ",       en: "Chile",       lat: -33.45, lng: -70.67 },
  RO: { ja: "ルーマニア", en: "Romania",     lat:  44.43, lng:  26.10 },
};
function depTarget(cc) {
  const m = metroForCC(cc);
  if (m) return { lat: m.lat, lng: m.lng, name: m.name[LANG] };
  const f = COUNTRY_ANCHOR[cc];
  if (f) return { lat: f.lat, lng: f.lng, name: LANG === "ja" ? f.ja : f.en };
  return null;
}

// -------------------- NARRATIVE FLAVORS --------------------
const CITY_FLAVOR = {
  "Tokyo": {
    ja_area: "皇居・丸の内",
    ja_sectors: "東証と主要メガバンク本店の物理インフラ、中央省庁の決裁機能、国立公文書館の半世紀分の原本",
    ja_ripple: "アジア時間の円為替と日経先物の一次取引が停止する見通し",
    en_area: "Imperial District / Marunouchi",
    en_sectors: "the physical infrastructure of the Tokyo Stock Exchange and major megabank HQs, the ministries' decision apparatus, and half a century of originals at the National Archives",
    en_ripple: "JPY forex and Nikkei futures are expected to halt for the entire Asia session",
  },
  "New York": {
    ja_area: "マンハッタン南端",
    ja_sectors: "NYSE・NASDAQ 取引所、主要投資銀行の本社オフィス、国連本部、NY連銀の金準備庫",
    ja_ripple: "世界のドル建て資産取引が一時停止し、翌日のロンドン時間は主要参照レートなしで開くことになる",
    en_area: "Lower Manhattan",
    en_sectors: "the NYSE and NASDAQ trading floors, major investment-bank offices, UN Headquarters, and the NY Fed gold vault",
    en_ripple: "Dollar-denominated markets halt and London opens the next day with no reference rate",
  },
  "London": {
    ja_area: "シティ・ウェストミンスター",
    ja_sectors: "ロンドン証券取引所、ロイズ保険市場、イングランド銀行、ウェストミンスター宮殿と大英博物館",
    ja_ripple: "欧州時間の金融取引が午前を通じて停止し、再保険市場が連鎖的に機能不全に陥る",
    en_area: "The City / Westminster",
    en_sectors: "the London Stock Exchange, Lloyd's insurance market, the Bank of England, the Palace of Westminster, and the British Museum",
    en_ripple: "European-hours trading halts through the morning and the reinsurance market collapses in cascade",
  },
  "Shanghai": {
    ja_area: "浦東新区・外灘",
    ja_sectors: "上海証券取引所、国有四大銀行の国際本部、世界最大級の上海港コンテナ管制",
    ja_ripple: "人民元のオフショア取引が停止し、中国の輸出港湾機能が連動して崩壊する",
    en_area: "Pudong / The Bund",
    en_sectors: "the Shanghai Stock Exchange, the international HQs of China's big-four state banks, and the control center of the world's largest container port",
    en_ripple: "Offshore RMB trading halts and China's export-port throughput collapses in tandem",
  },
  "Seoul": {
    ja_area: "中区・江南",
    ja_sectors: "サムスン・現代・LG の本社機能、韓国取引所、龍山の大統領執務室",
    ja_ripple: "半導体・自動車サプライチェーンが数か月単位で寸断され、ウォン通貨制度が事実上停止する",
    en_area: "Jung-gu / Gangnam",
    en_sectors: "Samsung, Hyundai, and LG headquarters, the Korea Exchange, and the presidential office in Yongsan",
    en_ripple: "Semiconductor and auto supply chains sever for months and the KRW regime effectively halts",
  },
  "Paris": {
    ja_area: "セーヌ右岸・ラ・デファンス",
    ja_sectors: "ルーヴル美術館、フランス国立図書館、欧州宇宙機関本部、主要保険・エネルギー企業の本社",
    ja_ripple: "ユーロ圏南部の金融・エネルギー決裁が遅延し、人類史最大級の美術コレクションが消失する",
    en_area: "Right Bank / La Défense",
    en_sectors: "the Louvre, the French National Library, ESA headquarters, and the HQs of major insurance and energy firms",
    en_ripple: "Southern-eurozone settlements are delayed and some of humanity's largest art holdings are destroyed",
  },
  "Hong Kong": {
    ja_area: "中環・金鐘",
    ja_sectors: "香港証券取引所、HSBC本店、主要投資銀行のアジア統括機能",
    ja_ripple: "アジア時間の株式・為替中継機能が失われ、上海・東京セッションが断絶する",
    en_area: "Central / Admiralty",
    en_sectors: "the Hong Kong Stock Exchange, HSBC headquarters, and the Asian HQs of major investment banks",
    en_ripple: "The Asian-session equity and FX hub disappears, disconnecting Shanghai from Tokyo",
  },
  "Singapore": {
    ja_area: "マリーナベイ・中央ビジネス区",
    ja_sectors: "シンガポール取引所、世界最大級のコンテナ港湾、アジアの大宗商品決済ハブ",
    ja_ripple: "マラッカ海峡の航路管制が崩壊し、東アジア向けの原油・LNG供給が数週間止まる",
    en_area: "Marina Bay / CBD",
    en_sectors: "the Singapore Exchange, one of the world's largest container ports, and Asia's commodity-clearing hub",
    en_ripple: "Malacca Strait traffic control collapses, stalling crude and LNG flows to East Asia for weeks",
  },
  "Beijing": {
    ja_area: "天安門・長安街",
    ja_sectors: "中央政府の意思決定機能、中国人民銀行、主要国有企業本社",
    ja_ripple: "中国の対外通貨政策と主要国有企業の指揮命令系統が一時的に失われる",
    en_area: "Tiananmen / Chang'an Avenue",
    en_sectors: "the central government's decision apparatus, the People's Bank of China, and major state-owned enterprise HQs",
    en_ripple: "China's external monetary policy and state-enterprise command chains go temporarily dark",
  },
  "Los Angeles": {
    ja_area: "ダウンタウン・ハリウッド",
    ja_sectors: "ハリウッドの撮影インフラ、主要メディア企業の物理倉庫、ロサンゼルス港の管制",
    ja_ripple: "北米西岸の映像・コンテンツ産業が停滞し、輸入物流のボトルネックが長期化する",
    en_area: "Downtown / Hollywood",
    en_sectors: "Hollywood production infrastructure, media-company physical archives, and the Port of Los Angeles control",
    en_ripple: "The West Coast media industry stalls and import-logistics bottlenecks persist",
  },
  "San Francisco Bay": {
    ja_area: "サンフランシスコ半島・シリコンバレー",
    ja_sectors: "主要テック企業の本社機能、VCの意思決定、世界のクラウド・AI研究の中枢",
    ja_ripple: "世界のAI研究・クラウド開発が数年単位で後退し、主要オンライン決済が停止する",
    en_area: "SF Peninsula / Silicon Valley",
    en_sectors: "the HQs of major tech firms, VC decision-making, and the global center of cloud and AI research",
    en_ripple: "Global AI research and cloud development regress by years and major online payment rails halt",
  },
  "Chicago": {
    ja_area: "ループ地区",
    ja_sectors: "シカゴ・マーカンタイル取引所、主要穀物先物、連邦準備銀行シカゴ支店",
    ja_ripple: "穀物・金利先物取引が停止し、北米中西部の農業決済が数週間機能不全に陥る",
    en_area: "The Loop",
    en_sectors: "the Chicago Mercantile Exchange, major grain futures, and the Chicago Fed branch",
    en_ripple: "Grain and rate futures halt; Midwest agricultural settlement stalls for weeks",
  },
  "Washington DC": {
    ja_area: "ワシントン・モール",
    ja_sectors: "連邦議会議事堂、ホワイトハウス、各省庁、国立公文書館と議会図書館",
    ja_ripple: "米連邦政府の意思決定機能が一時停止し、国際機関・同盟国への指揮命令が空白化する",
    en_area: "The National Mall",
    en_sectors: "the US Capitol, the White House, cabinet departments, and the National Archives and Library of Congress",
    en_ripple: "Federal decision-making halts; direction to allies and international bodies goes dark",
  },
  "Moscow": {
    ja_area: "クレムリン・赤の広場",
    ja_sectors: "大統領府、主要国有エネルギー企業本社、ロシア中央銀行",
    ja_ripple: "ロシアの指揮命令系統と欧州向けエネルギー輸送の管理機能が空白化する",
    en_area: "Kremlin / Red Square",
    en_sectors: "the presidential administration, major state energy-company HQs, and the Central Bank of Russia",
    en_ripple: "Russian command chains and European-bound energy-transport control go dark",
  },
  "Taipei": {
    ja_area: "台北・新竹",
    ja_sectors: "TSMC本社・先端ノード試作ライン、世界の先端ロジック供給の中枢",
    ja_ripple: "世界の半導体先端プロセスが数年単位で停止し、主要スマートフォン・サーバーの供給が途絶する",
    en_area: "Taipei / Hsinchu",
    en_sectors: "TSMC headquarters and advanced-node pilot lines — the center of global advanced-logic supply",
    en_ripple: "Advanced semiconductor processes stall for years worldwide, cutting smartphone and server supply",
  },
  "Mumbai": {
    ja_area: "南ムンバイ・ナリマンポイント",
    ja_sectors: "ボンベイ証券取引所、インド準備銀行、タタ・リライアンスなど主要企業本社",
    ja_ripple: "南アジアの金融決済が停止し、インド洋海運経由の物流が混乱する",
    en_area: "South Mumbai / Nariman Point",
    en_sectors: "the Bombay Stock Exchange, the Reserve Bank of India, and the HQs of Tata, Reliance and other major firms",
    en_ripple: "South Asian clearing halts and Indian-Ocean shipping is disrupted",
  },
  "Dubai": {
    ja_area: "ダウンタウン・DIFC",
    ja_sectors: "ドバイ国際金融センター、エミレーツ航空のハブ、湾岸の国際決済機能",
    ja_ripple: "中東の航空ハブ機能が消失し、湾岸の国際金融決済が一時停止する",
    en_area: "Downtown / DIFC",
    en_sectors: "Dubai International Financial Centre, Emirates Airlines' hub, and Gulf settlement functions",
    en_ripple: "The Middle-East aviation hub disappears and Gulf international settlements halt",
  },
  "Osaka": {
    ja_area: "梅田・中之島",
    ja_sectors: "関西の金融・製造業本社、大阪証券取引所派生機能、重化学工業クラスター",
    ja_ripple: "西日本の産業決済と京阪神圏の物流ネットワークが停止する",
    en_area: "Umeda / Nakanoshima",
    en_sectors: "Kansai's financial and manufacturing HQs, the Osaka Exchange's derivative functions, and the heavy-chemical industrial cluster",
    en_ripple: "Western-Japan industrial settlement and the Keihanshin logistics network halt",
  },
  "Delhi": {
    ja_area: "ニューデリー中心部",
    ja_sectors: "インド中央政府と議会、主要省庁、国立博物館と図書館",
    ja_ripple: "インドの中央政府機能が一時停止し、南アジア全体の外交・経済指揮が空白化する",
    en_area: "Central New Delhi",
    en_sectors: "India's central government and parliament, the ministries, and the national museums and libraries",
    en_ripple: "India's central-government functions halt; South Asian diplomatic and economic command goes dark",
  },
};

function pickFlavor(city) {
  return city && CITY_FLAVOR[city.name.en] ? CITY_FLAVOR[city.name.en] : null;
}

function findNearestCity(pt, maxKm = 120) {
  let best = null, bestD = Infinity;
  CITIES.forEach(c => {
    const d = haversine(pt, { lat: c.lat, lng: c.lng });
    if (d < bestD) { bestD = d; best = c; }
  });
  if (bestD > maxKm) return null;
  return { city: best, distKm: bestD, near: bestD > 150 };
}

function placeLabel(cityMatch) {
  if (!cityMatch) return t("narr_unknown");
  const cname = cityMatch.city.name[LANG];
  if (!cityMatch.near) return cname;
  const km = Math.round(cityMatch.distKm);
  return LANG === "ja" ? `${cname}近郊 ${km}km` : `near ${cname} (${km} km)`;
}

// -------------------- DETONATION --------------------
let shockLayer = L.layerGroup().addTo(map); // transient fx (fireball, shockwaves, dust) — shared
let haltLayer  = L.layerGroup().addTo(map); // halt divIcons for simulator sources
let lastPt = null, lastKt = null, lastBurst = null;
let lastCity = null;

const allDetonations = []; // { id, time, pt, kt, burst, hits, totalGDP, totalPop, assetHits, totalFlow, layer, cityMatch, story }
const cumulative = { gdpB: 0, flowB: 0, pop: 0, count: 0 };
// animation smoothing — displayed values so counter animates from last state (not from 0)
const display = { gdpB: 0, flowB: 0, pop: 0, share: 0 };

// -------------------- HAZARD / HALT ICONS --------------------
function hazardIconHTML(labelJa, labelEn) {
  return `
    <div class="hazard-mark">
      <div class="hazard-ring"></div>
      <svg class="hazard-sym" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2.5 2"/>
        <line x1="2"  y1="16" x2="10" y2="16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <line x1="22" y1="16" x2="30" y2="16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <line x1="16" y1="2"  x2="16" y2="10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <line x1="16" y1="22" x2="16" y2="30" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="16" cy="16" r="2.6" fill="currentColor"/>
      </svg>
      <div class="hazard-tag">${LANG === "ja" ? labelJa : labelEn}</div>
    </div>
  `;
}
function haltIconHTML(cityNameJa, cityNameEn, haltPct) {
  const cityName = LANG === "ja" ? cityNameJa : cityNameEn;
  const label = (LANG === "ja" ? "機能停止 " : "HALT ") + haltPct + "%";
  return `
    <div class="halt-mark">
      <div class="halt-ring"></div>
      <svg class="halt-sym" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2.5 2"/>
        <rect x="10.5" y="9" width="3" height="14" fill="currentColor" rx="0.5"/>
        <rect x="18.5" y="9" width="3" height="14" fill="currentColor" rx="0.5"/>
      </svg>
      <div class="halt-tag">${label}</div>
      <div class="halt-city">${cityName}</div>
    </div>
  `;
}

const $yield = document.getElementById("yield");
const $burst = document.getElementById("burst");
const $result = document.getElementById("result");
const $resultBody = document.getElementById("result-body");
const $cityInfo = document.getElementById("city-info");
const $cityName = document.getElementById("city-name");
const $cityBody = document.getElementById("city-body");
const $legend = document.getElementById("legend");
const $flash = document.getElementById("flash");
const $figLabel = document.getElementById("fig-label");
const $figBody  = document.getElementById("fig-body");

function clearAll() {
  // wipe every persisted detonation (rings + hazard mark) by removing its layer group
  allDetonations.forEach(d => { if (d.layer) map.removeLayer(d.layer); });
  allDetonations.length = 0;
  cumulative.gdpB = 0; cumulative.flowB = 0; cumulative.pop = 0; cumulative.count = 0;
  display.gdpB = 0; display.flowB = 0; display.pop = 0; display.share = 0;
  cancelStory(false);
  shockLayer.clearLayers();
  haltLayer.clearLayers();
  rippleLayer && rippleLayer.clearLayers();

  lastPt = null; lastCity = null; lastAsset = null;
  $result.hidden = true;
  $resultBody.innerHTML = "";
  $cityInfo.hidden = true;
  $assetInfo.hidden = true;
  $legend.hidden = true;
  $figLabel.setAttribute("data-i18n", "fig_label_idle");
  $figBody.setAttribute("data-i18n", "fig_body_idle");
  $figLabel.textContent = t("fig_label_idle");
  $figBody.textContent = t("fig_body_idle");
}
document.getElementById("reset-inline")?.addEventListener("click", clearAll);

function triggerFlash(containerPoint) {
  const r = document.getElementById("map").getBoundingClientRect();
  const x = containerPoint.x + r.left;
  const y = containerPoint.y + r.top;
  $flash.style.setProperty("--x", x + "px");
  $flash.style.setProperty("--y", y + "px");
  $flash.classList.remove("fire");
  void $flash.offsetWidth;
  $flash.classList.add("fire");
}

function triggerShake() {
  const mapEl = document.getElementById("map");
  mapEl.classList.remove("shake");
  void mapEl.offsetWidth;
  mapEl.classList.add("shake");
  setTimeout(() => mapEl.classList.remove("shake"), 520);
}

function detonate(pt, opts = {}) {
  lastPt = pt;
  lastKt = parseFloat($yield.value);
  lastBurst = $burst.value;

  const cp = map.latLngToContainerPoint(pt);
  triggerFlash(cp);
  triggerShake();

  const r = blastRadii(lastKt, lastBurst);
  const mToKm = r.moderate * 1000;

  // per-detonation layer — everything persistent goes here, removed on reset
  const detLayer = L.layerGroup().addTo(map);

  // compute exposure for this strike — stock tier (metro GDP) + flow tier (strategic assets)
  const { hits } = computeHitsFor(pt, lastKt, lastBurst);
  const totalGDP = hits.reduce((s, h) => s + h.gdpExp, 0);
  const totalPop = hits.reduce((s, h) => s + h.popExp, 0);
  const assetHits = computeAssetHitsFor(pt, lastKt, lastBurst);
  const totalFlow = assetHits.reduce((s, h) => s + h.flowLoss, 0);
  const cityMatch = findNearestCity(pt, 500);

  // trade/finance web from the hardest-hit metro — the "world on strings"
  // visual, drawn at the story's cascade phase (indicative, not tallied)
  let cityRipple = null, rippleSrc = null;
  if (hits.length) {
    rippleSrc = hits[0].c;
    cityRipple = computeHaltRipple(rippleSrc, 0.9 * hits[0].f, 365).cityRipple.slice(0, 8);
    if (!cityRipple.length) { cityRipple = null; rippleSrc = null; }
  }

  // 1. FIREBALL CORE — transient pinhole
  const fireballCore = L.circleMarker(pt, {
    radius: 0, color: "#fffbea", weight: 0, fillColor: "#fffbea",
    fillOpacity: 1, interactive: false
  }).addTo(shockLayer);
  animate({ duration: 180, ease: "outQuart", update: tt => fireballCore.setRadius(10 * tt + 2) });
  animate({
    duration: 700, delay: 180, ease: "outQuart",
    update: tt => { fireballCore.setStyle({ fillOpacity: 1 - tt }); fireballCore.setRadius(12 + 24 * tt); },
    done: () => shockLayer.removeLayer(fireballCore)
  });

  // 2. THERMAL NOVA — transient amber halo
  const nova = L.circleMarker(pt, {
    radius: 0, color: "#c47418", weight: 0, fillColor: "#c47418",
    fillOpacity: 0.55, interactive: false
  }).addTo(shockLayer);
  animate({
    duration: 600, delay: 80, ease: "outQuart",
    update: tt => { nova.setRadius(42 * tt); nova.setStyle({ fillOpacity: 0.55 * (1 - tt*0.9) }); },
    done: () => shockLayer.removeLayer(nova)
  });

  // 3. EPICENTER DOT — persistent, lives on detLayer
  const epi = L.circleMarker(pt, {
    radius: 0, color: "#17181a", weight: 1.5,
    fillColor: "#17181a", fillOpacity: 1, interactive: false
  }).addTo(detLayer);
  animate({ duration: 520, delay: 220, ease: "outBack", update: tt => epi.setRadius(4.5 * tt) });
  // one-shot halo pulse (transient)
  const epiHalo = L.circleMarker(pt, {
    radius: 0, color: "#17181a", weight: 1, fill: false, opacity: 0.5, interactive: false
  }).addTo(shockLayer);
  animate({
    duration: 1100, delay: 280, ease: "outQuart",
    update: tt => { epiHalo.setRadius(22 * tt); epiHalo.setStyle({ opacity: 0.5 * (1 - tt) }); },
    done: () => shockLayer.removeLayer(epiHalo)
  });

  // 4. DAMAGE RINGS — persistent, go on detLayer.
  // Staged across the impact phase (severe → thermal → moderate) so the
  // spread reads as a story beat, not a single burst.
  const ringSpecs = [
    { km: r.moderate, color: "#ae8b13", fill: "#ae8b13", fillOpacity: 0.08, weight: 1.2, delay: 3000, dur: 1500 },
    { km: r.thermal,  color: "#c47418", fill: "#c47418", fillOpacity: 0.10, weight: 1.2, delay: 1600, dur: 1500 },
    { km: r.severe,   color: "#c1292e", fill: "#c1292e", fillOpacity: 0.20, weight: 1.5, delay: 300,  dur: 1400 },
  ];
  ringSpecs.forEach(spec => {
    const ring = L.circle(pt, {
      radius: 10, color: spec.color, weight: spec.weight,
      fillColor: spec.fill, fillOpacity: 0, opacity: 0, interactive: false
    }).addTo(detLayer);
    animate({
      duration: spec.dur, delay: spec.delay, ease: "outQuart",
      update: tt => {
        ring.setRadius(spec.km * 1000 * tt);
        ring.setStyle({ fillOpacity: spec.fillOpacity * tt, opacity: 0.2 + 0.7 * tt });
      }
    });
  });

  // 5. SHOCKWAVES — transient double pulse
  const mkShock = (delay, dur, maxScale, opacity, color) => {
    const s = L.circle(pt, { radius: 0, color, weight: 1.2, fill: false, opacity, interactive: false }).addTo(shockLayer);
    animate({
      duration: dur, delay, ease: "outQuart",
      update: tt => {
        s.setRadius(mToKm * maxScale * tt);
        s.setStyle({ opacity: opacity * (1 - tt) });
      },
      done: () => shockLayer.removeLayer(s)
    });
  };
  mkShock(160, 1600, 1.55, 0.45, "#17181a");
  mkShock(620, 1900, 1.95, 0.22, "#6a6f77");

  // 6. DUST EJECTIONS — transient radial scatter
  const dustCount = 12;
  const latRad = pt.lat * Math.PI / 180;
  const latScale = 111000;
  const lngScale = 111000 * Math.cos(latRad);
  for (let i = 0; i < dustCount; i++) {
    const ang = (i / dustCount) * 2 * Math.PI + Math.random() * 0.35;
    const reach = mToKm * (0.55 + Math.random() * 0.55);
    const d = L.circleMarker(pt, {
      radius: 1.4, color: "#45474a", weight: 0,
      fillColor: "#45474a", fillOpacity: 0.7, interactive: false
    }).addTo(shockLayer);
    animate({
      duration: 1100 + Math.random() * 500,
      delay: 320 + Math.random() * 320,
      ease: "outQuart",
      update: tt => {
        const lat = pt.lat + (reach/latScale) * Math.sin(ang) * tt;
        const lng = pt.lng + (reach/(lngScale||1)) * Math.cos(ang) * tt;
        d.setLatLng([lat, lng]);
        d.setStyle({ fillOpacity: 0.7 * (1 - tt) });
      },
      done: () => shockLayer.removeLayer(d)
    });
  }

  // 7. SUPPLY-DEPENDENCY ARCS are drawn later, at the story's "cascade" phase.

  // 8. HAZARD MARK — persistent divIcon dropped after the animation settles
  const det = {
    id: allDetonations.length + 1,
    time: new Date(),
    pt, kt: lastKt, burst: lastBurst,
    hits, totalGDP, totalPop,
    assetHits, totalFlow,
    cityRipple, rippleSrc,
    layer: detLayer, cityMatch,
  };
  setTimeout(() => {
    const prevLang = LANG;
    const km = cityMatch ? Math.round(cityMatch.distKm) : 0;
    const placeJa = cityMatch
      ? (cityMatch.near ? `${cityMatch.city.name.ja}近郊 ${km}km` : cityMatch.city.name.ja)
      : (prevLang === "ja" ? "任意地点" : "");
    const placeEn = cityMatch
      ? (cityMatch.near ? `near ${cityMatch.city.name.en} (${km} km)` : cityMatch.city.name.en)
      : "Off-metro";
    const hazardMark = L.marker([pt.lat, pt.lng], {
      icon: L.divIcon({
        className: "hazard-div",
        html: hazardIconHTML(placeJa, placeEn),
        iconSize: [88, 68],
        iconAnchor: [44, 34],
      }),
      interactive: false, keyboard: false, zIndexOffset: 800,
    }).addTo(detLayer);
    det.hazard = hazardMark;
  }, 1900);

  // record + accumulate + render
  allDetonations.push(det);
  cumulative.count += 1;
  cumulative.gdpB  += totalGDP;
  cumulative.flowB += totalFlow;
  cumulative.pop   += totalPop;
  // absolute tally snapshot for this strike — the story phases animate the
  // displayed counters toward it, and fast-forward lands exactly on it
  det.snap = { gdpB: cumulative.gdpB, flowB: cumulative.flowB, pop: cumulative.pop, count: cumulative.count };

  $legend.hidden = false;
  renderCumulative(det, true);
}

// Free-form map-click detonation removed: strikes on empty terrain read as
// ¥0 non-events. Targets are chosen in panel 01 (or by clicking a marker,
// which sets the selector) and fired with the simulation button.

// -------------------- RESULT / HITS --------------------
function computeHitsFor(pt, kt, burst) {
  const r = blastRadii(kt, burst);
  const hits = CITIES.map(c => {
    const d = haversine(pt, { lat: c.lat, lng: c.lng });
    const fs = overlapFraction(d, r.severe,   c.r_km);
    const ft = overlapFraction(d, r.thermal,  c.r_km);
    const fm = overlapFraction(d, r.moderate, c.r_km);
    const f = Math.max(fs, ft, fm);
    return { c, d, fs, ft, fm, f, gdpExp: c.gdp * f, popExp: c.pop * f };
  }).filter(h => h.f > 0.001);
  hits.sort((a, b) => b.gdpExp - a.gdpExp);
  return { hits, r };
}
function computeHits() { return computeHitsFor(lastPt, lastKt, lastBurst); }

// Flow tier: damage fraction weighted by ring severity — a severe-ring overlap
// destroys throughput outright; thermal/moderate overlap degrades it.
function computeAssetHitsFor(pt, kt, burst) {
  const r = blastRadii(kt, burst);
  const hits = ASSETS.map(a => {
    const d = haversine(pt, { lat: a.lat, lng: a.lng });
    const fs = overlapFraction(d, r.severe,   a.r_km);
    const ft = overlapFraction(d, r.thermal,  a.r_km);
    const fm = overlapFraction(d, r.moderate, a.r_km);
    const f = Math.min(1, Math.max(fs, 0.6 * ft, 0.2 * fm));
    const flowLoss = a.flow_busd * (a.recovery_mo / 12) * f;
    return { a, d, f, flowLoss };
  }).filter(h => h.f > 0.005 && h.flowLoss > 0.05);
  hits.sort((x, y) => y.flowLoss - x.flowLoss);
  return hits;
}

// Dashed arcs from a struck asset to the metros that depend on its flow.
// The booked flow loss is *allocated* along these arcs (no double counting).
// Drawn at the story's "cascade" phase; instant=true fast-forwards (no animation).
function drawAssetDeps(hit, layer, instant = false) {
  const a = hit.a;
  if (hit._arcsDrawn) return;
  hit._arcsDrawn = true;
  const color = ASSET_CAT_COLOR[a.cat];
  const entries = Object.entries(a.deps || {})
    .map(([cc, w]) => ({ tgt: depTarget(cc), w }))
    .filter(x => x.tgt && x.w > 0)
    .sort((x, y) => y.w - x.w)
    .slice(0, 5);
  if (!entries.length) return;
  const maxW = entries[0].w;
  entries.forEach((x, i) => {
    const pts = buildArcPoints({ lat: a.lat, lng: a.lng }, x.tgt, 28);
    const finalOp = 0.25 + 0.45 * (x.w / maxW);
    const line = L.polyline(pts, {
      color, weight: 0.6 + (x.w / maxW) * 2.4, opacity: instant ? finalOp : 0,
      dashArray: "4 5", smoothFactor: 1,
    });
    line.addTo(layer);
    line.bindTooltip(
      `<b>${aname(a)} → ${x.tgt.name}</b><br>${t("dep_flow_label")}: ${fmtMoney(hit.flowLoss * x.w)}`,
      { sticky: true, direction: "top", className: "ripple-tip" }
    );
    if (!instant) {
      animate({
        duration: 1100, delay: 650 * i, ease: "outQuart",
        update: tt => line.setStyle({ opacity: finalOp * tt })
      });
      pulseAt(x.tgt.lat, x.tgt.lng, color, 650 * i + 900, 22);
    }
  });
}

// -------------------- NARRATIVE (cascade feed) --------------------
// Each detonation becomes a staged sequence of log lines — impact →
// metro loss → infrastructure down → supply-chain cascade → world markets —
// rendered like a live dispatch feed so the chain of damage reads as a story.
function generateDispatch(det) {
  const { cityMatch: cm, kt, burst, totalGDP, totalPop } = det;
  const c = cm ? cm.city : null;
  const near = cm ? cm.near : false;
  const distKm = cm ? Math.round(cm.distKm) : 0;
  const flavor = (c && !near) ? pickFlavor(c) : null;
  const cityName = c ? c.name[LANG] : null;
  const place = placeLabel(cm);
  const area  = flavor ? flavor[LANG + "_area"] : (LANG === "ja" ? "中心部" : "its central district");
  const sector = flavor ? flavor[LANG + "_sectors"]
                        : (LANG === "ja"
                            ? "企業本社・公共インフラ・教育機関・文化施設の高密度集積"
                            : "a dense cluster of corporate HQs, public infrastructure, schools, and cultural institutions");
  const ripple = flavor ? flavor[LANG + "_ripple"] : null;
  const ktLabel = fmtYieldLabel(kt);
  const modeLabel = burst === "ground" ? t("r_groundburst") : t("r_airburst");
  const topAsset = (det.assetHits && det.assetHits.length) ? det.assetHits[0] : null;
  const totalCum = cumulative.gdpB + cumulative.flowB;
  const ja = LANG === "ja";

  // top-3 destinations of the severed flow, for the cascade line
  const flowDest = topAsset
    ? Object.entries(topAsset.a.deps || {})
        .map(([cc, w]) => ({ tgt: depTarget(cc), w }))
        .filter(x => x.tgt && x.w > 0)
        .sort((x, y) => y.w - x.w)
        .slice(0, 3)
    : [];

  const phases = [];
  const push = (t_ja, t_en, tagKey, txt) => {
    if (txt) phases.push({ t: ja ? t_ja : t_en, tag: tagKey, text: txt });
  };

  // T+0 — impact
  push("T+0秒", "T+0s", "impact", ja
    ? (near
        ? `${cityName}から約 ${distKm}km の郊外に ${ktLabel} 級弾頭が${modeLabel}で着弾。閃光を検知、衝撃波が同心円状に展開中。`
        : (cm ? `${place}の${area}に ${ktLabel} 級弾頭が${modeLabel}で着弾。閃光を検知、衝撃波が同心円状に展開中。`
               : `海上・非集積地に ${ktLabel} 級弾頭が${modeLabel}で着弾。閃光を検知。`))
    : (near
        ? `A ${ktLabel} warhead detonates ~${distKm} km outside ${cityName} (${modeLabel.toLowerCase()}). Flash detected; shockwave expanding.`
        : (cm ? `A ${ktLabel} warhead detonates over ${place} (${area}), ${modeLabel.toLowerCase()}. Flash detected; shockwave expanding.`
               : `A ${ktLabel} warhead detonates over open sea / off-metro terrain (${modeLabel.toLowerCase()}). Flash detected.`)));

  // T+8min — metro stock loss
  if (totalGDP > 0.5) {
    push("T+8分", "T+8min", "metro", ja
      ? (near
          ? `郊外の住宅地・物流拠点・中小工業団地が熱風圏に入った。経済資本 約 ${fmtYen(totalGDP)}（${fmtUSD(totalGDP)}）と影響人口 ${fmtPop(totalPop)} を計上。`
          : `${sector}が失われた。経済資本 約 ${fmtYen(totalGDP)}（${fmtUSD(totalGDP)}）と影響人口 ${fmtPop(totalPop)} を計上。`)
      : (near
          ? `Suburban residences, logistics depots, and industrial belts catch the thermal pulse. Booked: ~${fmtUSD(totalGDP)} of capital, ${fmtPop(totalPop)} affected.`
          : `${sector[0].toUpperCase()}${sector.slice(1)} is erased. Booked: ~${fmtUSD(totalGDP)} of capital, ${fmtPop(totalPop)} affected.`));
  } else if (!topAsset) {
    push("T+8分", "T+8min", "survey", ja
      ? `射程内に主要な経済集積は確認されず。降下物と大気擾乱のみ広域に拡散。`
      : `No major economic mass in range. Only fallout and atmospheric disturbance spread.`);
  }

  // T+3h — infrastructure down (flow tier)
  if (topAsset) {
    push("T+3時間", "T+3h", "infra", ja
      ? `${topAsset.a.name_ja} 損傷率${Math.round(topAsset.f * 100)}%。${topAsset.a.desc_ja} フロー遮断 計 ${fmtYen(det.totalFlow)}（${fmtUSD(det.totalFlow)}）。`
      : `${topAsset.a.name_en} at ${Math.round(topAsset.f * 100)}% damage. ${topAsset.a.desc_en} Flow severed: ~${fmtUSD(det.totalFlow)} (${fmtYen(det.totalFlow)}).`);
  }

  // T+72h — supply-chain cascade
  const cascadeBits = [];
  if (flowDest.length) {
    const list = flowDest.map(x => ja
      ? `${x.tgt.name}向け ${fmtYen(topAsset.flowLoss * x.w)}`
      : `${fmtUSD(topAsset.flowLoss * x.w)} bound for ${x.tgt.name}`).join(ja ? "、" : ", ");
    cascadeBits.push(ja
      ? `供給網が断面を見せる——${list} の流れが行き先を失った。`
      : `The supply web shows its cross-section — flows lose their destination: ${list}.`);
  }
  if (det.cityRipple && det.cityRipple.length) {
    const t3 = det.cityRipple.slice(0, 3).map(h => ja
      ? `${h.c.name[LANG]}へ ${fmtYen(h.loss)}`
      : `${fmtUSD(h.loss)} to ${h.c.name[LANG]}`).join(ja ? "、" : ", ");
    cascadeBits.push(ja
      ? `貿易と金融の糸が世界中で引き攣れる——波及上位: ${t3}(概算)。`
      : `The threads of trade and finance snap taut across the world — top spillovers: ${t3} (indicative).`);
  }
  if (ripple && !near) cascadeBits.push(ja ? `${ripple}。` : `${ripple[0].toUpperCase()}${ripple.slice(1)}.`);
  if (cascadeBits.length) push("T+72時間", "T+72h", "cascade", cascadeBits.join(" "));

  // T+2wk — world markets, then the century-scale reckoning
  const share = totalCum / WORLD_GDP_B;
  const century = cumulative.gdpB * CENTURY_MULT + cumulative.flowB;
  push("T+2週間", "T+2wk", "global", ja
    ? `世界市場が再価格設定に入る。累積損失 ${fmtYen(totalCum)}（${fmtUSD(totalCum)}）——世界年GDP比 ${fmtPct(share)}、${cumulative.count} ${t("narr_detonations")}分が帳簿から消えた。百年の尺度では傷はさらに開く——復興30年を仮定した逸失生産は ${fmtYen(century)}（${fmtUSD(century)}）に達し、公文書と文化資本の喪失は帳簿外に残り続ける。`
    : `World markets begin repricing. Cumulative loss ${fmtUSD(totalCum)} (${fmtYen(totalCum)}) — ${fmtPct(share)} of world annual GDP across ${cumulative.count} ${t("narr_detonations")}. On a century scale the wound widens: forgone output under a 30-year rebuild reaches ${fmtUSD(century)} (${fmtYen(century)}), while the loss of archives and cultural capital never enters the books.`);

  return phases;
}

const CASCADE_TAG_LABEL = {
  impact:  { ja: "着弾",     en: "IMPACT" },
  metro:   { ja: "都市被害", en: "METRO" },
  survey:  { ja: "観測",     en: "SURVEY" },
  infra:   { ja: "インフラ", en: "INFRA" },
  cascade: { ja: "連鎖",     en: "CASCADE" },
  global:  { ja: "世界",     en: "GLOBAL" },
};

function cascadeHTML(phases) {
  return `<ol class="cascade">${phases.map(p => `
    <li class="cl-line cl-${p.tag}" data-tag="${p.tag}">
      <span class="cl-t">${p.t}</span>
      <span class="cl-tag">${CASCADE_TAG_LABEL[p.tag][LANG]}</span>
      <span class="cl-x">${p.text}</span>
    </li>`).join("")}</ol>`;
}

// -------------------- STORY SEQUENCER --------------------
// Live-commentary mode: each phase owns a ~5 s window. The feed types the
// comment while the map plays the matching stage — city bubbles pulse, the
// struck asset flashes, dependency arcs crawl out, then a world-scale ring.
const PHASE_MS = 5000;
const TAG_COLOR = { impact: "#a8231f", metro: "#8b5a1a", survey: "#6a6f77", infra: "#163a5f", cascade: "#2d5a3f", global: "#1a1d22" };
let storyTimers = [];
let storyTypers = [];
let storyPending = [];
let storyDet = null;

const $storyBar = document.getElementById("story-bar");
const $sbTag    = document.getElementById("sb-tag");
const $sbT      = document.getElementById("sb-t");
const $sbText   = document.getElementById("sb-text");
const $sbStrike = document.getElementById("sb-strike");

// -------------------- LIVE TALLY --------------------
// The cumulative counters climb in sync with the story: impact bumps the
// strike count, the metro phase books the stock, the infra phase books the
// flow. `display` always holds what is currently painted on screen.
function tallyEls() {
  return {
    big:     $resultBody.querySelector('[data-cm="big"]'),
    sub:     $resultBody.querySelector('[data-cm="sub"]'),
    stock:   $resultBody.querySelector('[data-cm="stock"]'),
    flow:    $resultBody.querySelector('[data-cm="flow"]'),
    century: $resultBody.querySelector('[data-cm="century"]'),
    count:   $resultBody.querySelector('[data-cm="count"]'),
    pop:     $resultBody.querySelector('[data-cm="pop"]'),
    share:   $resultBody.querySelector('[data-cm="share"]'),
  };
}
function writeTally(g, f, p, c) {
  const e = tallyEls();
  if (!e.big) return;
  e.big.textContent   = fmtMoney(g + f);
  e.sub.textContent   = "≈ " + fmtMoneyAlt(g + f);
  e.stock.textContent = fmtMoney(g);
  e.flow.textContent  = fmtMoney(f);
  if (e.century) e.century.textContent = fmtMoney(g * CENTURY_MULT + f);
  e.pop.textContent   = fmtPop(p);
  e.share.textContent = fmtPct((g + f) / WORLD_GDP_B);
  if (c != null && e.count) e.count.textContent = c + " " + t("narr_detonations");
}
function setTallyDisplay(snap) {
  display.gdpB = snap.gdpB; display.flowB = snap.flowB; display.pop = snap.pop;
  writeTally(snap.gdpB, snap.flowB, snap.pop, snap.count);
}
function tallyAnimateTo(tgt, dur = 1800) {
  const from = { g: display.gdpB, f: display.flowB, p: display.pop };
  const to = {
    g: tgt.gdpB  != null ? tgt.gdpB  : from.g,
    f: tgt.flowB != null ? tgt.flowB : from.f,
    p: tgt.pop   != null ? tgt.pop   : from.p,
  };
  const start = performance.now();
  const iv = setInterval(() => {
    const tt = Math.min(1, (performance.now() - start) / dur);
    const k = 1 - Math.pow(1 - tt, 3);
    display.gdpB  = from.g + (to.g - from.g) * k;
    display.flowB = from.f + (to.f - from.f) * k;
    display.pop   = from.p + (to.p - from.p) * k;
    writeTally(display.gdpB, display.flowB, display.pop, null);
    if (tt >= 1) clearInterval(iv);
  }, 66);
  storyTypers.push(iv);
}

function hideStoryBar() {
  if ($storyBar) $storyBar.hidden = true;
  $storyBar?.classList.remove("sb-typing");
  destroyRecon("story");
  const sbMedia = document.getElementById("sb-media");
  if (sbMedia) { sbMedia.innerHTML = ""; sbMedia.hidden = true; }
  document.getElementById("map-wrap")?.classList.remove("story-active");
}

function cancelStory(finalize) {
  storyTimers.forEach(id => clearTimeout(id));
  storyTypers.forEach(id => clearInterval(id));
  storyTimers = []; storyTypers = [];
  if (finalize && storyDet) {
    storyPending.forEach(p => {
      if (!p.typed && p.el) {
        p.el.classList.remove("cl-pending", "cl-typing");
        p.el.classList.add("cl-done");
        const xEl = p.el.querySelector(".cl-x");
        if (xEl) xEl.textContent = p.full;
      }
      if (!p.staged) runStageEffect(p.tag, storyDet, true);
    });
    if (storyDet.snap) setTallyDisplay(storyDet.snap); // land counters exactly on this strike's totals
  }
  storyPending = [];
  storyDet = null;
  hideStoryBar();
  const chip = document.getElementById("live-chip");
  if (chip) chip.hidden = true;
}

function typeLine(p) {
  const xEl = p.el.querySelector(".cl-x");
  p.el.classList.remove("cl-pending");
  p.el.classList.add("cl-typing");
  p.el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  $storyBar?.classList.add("sb-typing");
  const dur = 2400, start = performance.now();
  xEl.textContent = "";
  // progress is time-based so throttled timers (hidden tab) still finish on schedule
  const iv = setInterval(() => {
    const prog = Math.min(1, (performance.now() - start) / dur);
    const sliced = p.full.slice(0, Math.ceil(p.full.length * prog));
    xEl.textContent = sliced;
    if ($sbText) $sbText.textContent = sliced;
    if (prog >= 1) {
      clearInterval(iv);
      p.el.classList.remove("cl-typing");
      p.el.classList.add("cl-done");
      $storyBar?.classList.remove("sb-typing");
      p.typed = true;
    }
  }, 66);
  storyTypers.push(iv);
}

function startStory(det, container) {
  cancelStory(true); // fast-forward any running story before starting the next
  storyDet = det;
  const chip = document.getElementById("live-chip");
  if (chip) chip.hidden = false;

  // prominent commentary bar at the bottom of the map
  if ($storyBar) {
    $storyBar.hidden = false;
    $sbStrike.textContent = `#${String(det.id).padStart(2, "0")} · ${placeLabel(det.cityMatch)}`;
    $sbText.textContent = "";
    document.getElementById("map-wrap")?.classList.add("story-active");
    // recon close-up of ground zero — "this is what is there"
    const sbMedia = document.getElementById("sb-media");
    if (sbMedia) {
      if (!window.NGRM_OFFLINE) {
        sbMedia.innerHTML = reconHTML("story", det.pt.lat, det.pt.lng);
        sbMedia.hidden = false;
        initRecon("story", det.pt.lat, det.pt.lng, 13);
      } else {
        sbMedia.hidden = true;
      }
    }
  }

  const lines = [...container.querySelectorAll(".cl-line")];
  lines.forEach(l => l.classList.add("cl-pending"));
  storyPending = lines.map(l => ({
    el: l,
    tag: l.getAttribute("data-tag"),
    t: l.querySelector(".cl-t")?.textContent || "",
    full: l.querySelector(".cl-x").textContent,
    typed: false, staged: false,
  }));
  storyPending.forEach((p, i) => {
    storyTimers.push(setTimeout(() => {
      p.staged = true;
      if ($sbTag) {
        $sbTag.textContent = CASCADE_TAG_LABEL[p.tag][LANG];
        $sbTag.style.setProperty("--sbc", TAG_COLOR[p.tag]);
        $sbT.textContent = p.t;
      }
      runStageEffect(p.tag, det, false);
      typeLine(p);
    }, 700 + i * PHASE_MS));
  });
  storyTimers.push(setTimeout(() => {
    const c = document.getElementById("live-chip");
    if (c) c.hidden = true;
    hideStoryBar();
    storyDet = null; storyPending = [];
  }, 700 + storyPending.length * PHASE_MS + 1800));
}

// transient expanding ring used by stage effects
function pulseAt(lat, lng, color, delay = 0, maxPx = 34) {
  const ring = L.circleMarker([lat, lng], {
    radius: 2, color, weight: 2, fill: false, opacity: 0, interactive: false
  }).addTo(shockLayer);
  animate({
    duration: 1500, delay, ease: "outQuart",
    update: tt => { ring.setRadius(2 + maxPx * tt); ring.setStyle({ opacity: 0.75 * (1 - tt) }); },
    done: () => shockLayer.removeLayer(ring)
  });
}

function worldPulse(pt) {
  const mk = (delay, dur, reach, op) => {
    const ring = L.circle(pt, { radius: 80000, color: "#1a1d22", weight: 1.1, fill: false, opacity: 0, interactive: false }).addTo(shockLayer);
    animate({
      duration: dur, delay, ease: "outQuart",
      update: tt => { ring.setRadius(80000 + reach * tt); ring.setStyle({ opacity: op * (1 - tt) }); },
      done: () => shockLayer.removeLayer(ring)
    });
  };
  mk(0, 4200, 7500000, 0.45);
  mk(900, 4200, 7500000, 0.28);
}

// Live camera: fly to where the current phase is spreading.
function focusStage(latlngs, maxZoom) {
  if (!latlngs || !latlngs.length) return;
  if (latlngs.length === 1) {
    map.flyTo(latlngs[0], Math.max(map.getZoom(), maxZoom), { duration: 1.1 });
  } else {
    map.flyToBounds(L.latLngBounds(latlngs).pad(0.3), { duration: 1.2, maxZoom });
  }
}

// Solid navy arcs from the struck metro to its trade/finance dependents —
// the "world on strings" web, persistent on the detonation layer.
function drawTradeWeb(det, layer, instant) {
  if (!det.cityRipple || !det.cityRipple.length || det._webDrawn) return;
  det._webDrawn = true;
  const src = det.rippleSrc;
  const maxLoss = det.cityRipple[0].loss || 1;
  det.cityRipple.forEach((h, i) => {
    const ratio = h.loss / maxLoss;
    const pts = buildArcPoints({ lat: src.lat, lng: src.lng }, h.c, 28);
    const finalOp = 0.3 + 0.5 * ratio;
    const line = L.polyline(pts, {
      color: "#163a5f", weight: 0.6 + ratio * 3.0,
      opacity: instant ? finalOp : 0, smoothFactor: 1,
    });
    line.addTo(layer);
    line.bindTooltip(
      `<b>${src.name[LANG]} → ${h.c.name[LANG]}</b><br>${LANG === "ja" ? "波及損失" : "Spillover"}: ${fmtMoney(h.loss)}`,
      { sticky: true, direction: "top", className: "ripple-tip" }
    );
    if (!instant) {
      animate({ duration: 1000, delay: 420 * i, ease: "outQuart", update: tt => line.setStyle({ opacity: finalOp * tt }) });
      pulseAt(h.c.lat, h.c.lng, "#163a5f", 420 * i + 800, 18);
    }
  });
}

function runStageEffect(tag, det, instant) {
  // only the dependency arcs are persistent — when fast-forwarding, draw
  // them immediately and skip the transient pulses / camera moves.
  if (tag === "cascade") {
    if (det.assetHits && det.assetHits.length) drawAssetDeps(det.assetHits[0], det.layer, instant);
    drawTradeWeb(det, det.layer, instant);
    if (!instant) {
      const pts = [];
      if (det.assetHits && det.assetHits.length) {
        const a = det.assetHits[0].a;
        pts.push([a.lat, a.lng]);
        Object.keys(a.deps || {}).forEach(cc => { const tt = depTarget(cc); if (tt) pts.push([tt.lat, tt.lng]); });
      }
      if (det.cityRipple) {
        if (det.rippleSrc) pts.push([det.rippleSrc.lat, det.rippleSrc.lng]);
        pts.push(...det.cityRipple.map(h => [h.c.lat, h.c.lng]));
      }
      if (pts.length) focusStage(pts, 5);
    }
    return;
  }
  if (instant) return;
  if (tag === "impact") {
    // exact zoom sized to the light-damage ring so the rings fill the view
    const r = blastRadii(det.kt, det.burst);
    const z = Math.max(4, Math.min(10, Math.round(13 - Math.log2(r.moderate))));
    map.flyTo([det.pt.lat, det.pt.lng], z, { duration: 1.1 });
    if (det.snap) writeTally(display.gdpB, display.flowB, display.pop, det.snap.count);
  } else if (tag === "metro" || tag === "survey") {
    const hits = (det.hits || []).slice(0, 4);
    focusStage([[det.pt.lat, det.pt.lng], ...hits.map(h => [h.c.lat, h.c.lng])], 7);
    hits.forEach((h, i) => pulseAt(h.c.lat, h.c.lng, "#a8231f", 900 + i * 380));
    if (tag === "metro" && det.snap) tallyAnimateTo({ gdpB: det.snap.gdpB, pop: det.snap.pop });
  } else if (tag === "infra") {
    const hits = (det.assetHits || []).slice(0, 3);
    focusStage([[det.pt.lat, det.pt.lng], ...hits.map(h => [h.a.lat, h.a.lng])], 8);
    hits.forEach((h, i) => pulseAt(h.a.lat, h.a.lng, ASSET_CAT_COLOR[h.a.cat], 900 + i * 380, 28));
    if (det.snap) tallyAnimateTo({ flowB: det.snap.flowB });
  } else if (tag === "global") {
    map.flyTo([25, det.pt.lng], 2, { duration: 1.4 });
    setTimeout(() => { if (storyDet === det) worldPulse(det.pt); }, 1000);
    if (det.snap) tallyAnimateTo({ gdpB: det.snap.gdpB, flowB: det.snap.flowB, pop: det.snap.pop }, 1200);
  }
}

// -------------------- CUMULATIVE PANEL --------------------
// Dedup destroyed cities/assets across all strikes into one loss ledger.
function buildLedger() {
  const cities = new Map(), assets = new Map();
  allDetonations.forEach(d => {
    (d.hits || []).forEach(h => {
      const e = cities.get(h.c.name.en) || { c: h.c, loss: 0, f: 0 };
      e.loss += h.gdpExp; e.f = Math.max(e.f, h.f);
      cities.set(h.c.name.en, e);
    });
    (d.assetHits || []).forEach(h => {
      const e = assets.get(h.a.id) || { a: h.a, loss: 0, f: 0 };
      e.loss += h.flowLoss; e.f = Math.max(e.f, h.f);
      assets.set(h.a.id, e);
    });
  });
  return [
    ...[...cities.values()].map(e => ({ type: "city", name: e.c.name[LANG], cat: null, loss: e.loss, f: e.f })),
    ...[...assets.values()].map(e => ({ type: "asset", name: aname(e.a), cat: e.a.cat, loss: e.loss, f: e.f })),
  ].sort((x, y) => y.loss - x.loss);
}

function renderCumulative(latestDet, freshStrike = false) {
  const totalLoss = cumulative.gdpB + cumulative.flowB;
  const share = totalLoss / WORLD_GDP_B;

  const ledgerRows = buildLedger();
  const LEDGER_MAX = 12;
  const ledgerHtml = ledgerRows.length ? `
    <hr class="rule">
    <div class="dispatch-head">
      <span class="dh-ch">◆</span>
      <span>${t("ledger_head")}</span>
    </div>
    <ul class="ledger">
      ${ledgerRows.slice(0, LEDGER_MAX).map(r => `
        <li>
          <span class="lg-ico">${r.type === "city" ? '<span class="legend-dot" style="--sw:#a8231f"></span>' : pictoSwatchSVG(r.cat, 13)}</span>
          <span class="lg-name">${r.name}</span>
          <span class="lg-dmg">${Math.round(r.f * 100)}%</span>
          <span class="lg-v">${fmtMoney(r.loss)}</span>
        </li>`).join("")}
    </ul>
    ${ledgerRows.length > LEDGER_MAX
      ? `<p class="hint small ledger-more">${LANG === "ja" ? `ほか ${ledgerRows.length - LEDGER_MAX} 件` : `+ ${ledgerRows.length - LEDGER_MAX} more`}</p>`
      : ""}` : "";

  const lead = `<p class="cum-lead">${t("cum_lead")}</p>`;
  const headline = `
    <div class="damage-headline">
      <div class="dh-label">${t("cum_loss_label")}</div>
      <div class="dh-money" data-cm="big">—</div>
      <div class="dh-money-sub" data-cm="sub">—</div>
      <div class="dh-split">
        <div class="dh-tier"><span class="dt-k stock">${t("cum_stock")}</span><span class="dt-v" data-cm="stock">—</span></div>
        <div class="dh-tier"><span class="dt-k flow">${t("cum_flow")}</span><span class="dt-v" data-cm="flow">—</span></div>
      </div>
      <div class="dh-century">
        <span class="dt-k century"><span class="term" data-def-ja="${I18N.ja.century_def}" data-def-en="${I18N.en.century_def}">${t("century_label")}</span></span>
        <span class="dt-v dt-century" data-cm="century">—</span>
      </div>
      <div class="dh-rate">${t("jpy_rate_note")}</div>
    </div>
    <div class="damage-meta">
      <div class="dm-cell">
        <div class="dm-k">${t("cum_count")}</div>
        <div class="dm-v" data-cm="count">0</div>
      </div>
      <div class="dm-cell">
        <div class="dm-k">${t("cum_pop")}</div>
        <div class="dm-v" data-cm="pop">0</div>
      </div>
      <div class="dm-cell">
        <div class="dm-k">${t("cum_share")}</div>
        <div class="dm-v" data-cm="share">0%</div>
      </div>
    </div>
    ${ledgerHtml}
    <hr class="rule">
    <div class="dispatch-head">
      <span class="dh-ch">●</span>
      <span>${t("dispatch_head")}</span>
      <span class="live-chip" id="live-chip" hidden><span class="lc-dot">●</span>LIVE</span>
    </div>
    <ol class="dispatch-list" id="dispatch-list"></ol>
  `;

  // rebuild body (preserving dispatch-list DOM nodes isn't necessary — we re-render from allDetonations)
  $resultBody.innerHTML = lead + headline;
  $result.hidden = false;

  // render timeline (most-recent first)
  const list = document.getElementById("dispatch-list");
  if (allDetonations.length === 0) {
    list.innerHTML = `<li class="dispatch-empty">${t("dispatch_empty")}</li>`;
  } else {
    const items = [...allDetonations].reverse().map((d, idx) => {
      const phases = generateDispatch(d);
      const placeName = placeLabel(d.cityMatch);
      const ktLabel = fmtYieldLabel(d.kt);
      const modeLabel = d.burst === "ground" ? t("r_groundburst") : t("r_airburst");
      const isLatest = idx === 0;
      const assetRow = (d.assetHits && d.assetHits.length)
        ? `<span class="dif-k">${t("r_assets")}</span><span class="dif-v">${aname(d.assetHits[0].a)}${
            d.assetHits.length > 1
              ? (LANG === "ja" ? ` ほか${d.assetHits.length - 1}拠点` : ` +${d.assetHits.length - 1}`)
              : ""
          } · <span class="dif-money">${fmtMoney(d.totalFlow)}</span></span>`
        : "";
      return `
        <li class="dispatch-item${isLatest ? " is-latest" : ""}">
          <div class="di-top">
            <span class="di-num">#${String(d.id).padStart(2, "0")}</span>
            <span class="di-time">${fmtTime(d.time)}</span>
          </div>
          <div class="di-location">
            <span class="di-place">${placeName}</span>
            <span class="di-coord">(${d.pt.lat.toFixed(2)}, ${d.pt.lng.toFixed(2)})</span>
          </div>
          <div class="di-figures">
            <span class="dif-k">${t("r_yield")}</span><span class="dif-v">${ktLabel} / ${modeLabel}</span>
            <span class="dif-k">${t("r_total_gdp")}</span><span class="dif-v dif-money">${fmtMoney(d.totalGDP)}</span>
            <span class="dif-k">${t("r_total_pop")}</span><span class="dif-v">${fmtPop(d.totalPop)}</span>
            ${assetRow}
          </div>
          ${cascadeHTML(phases)}
        </li>
      `;
    }).join("");
    list.innerHTML = items;

    // stage the newest strike's log like live commentary
    if (freshStrike && latestDet) {
      const latestEl = list.querySelector(".dispatch-item.is-latest");
      if (latestEl) startStory(latestDet, latestEl);
    }
  }

  // Counters do NOT jump to the new totals here — the story phases drive
  // them up live (impact → count, metro → stock, infra → flow). We only
  // paint the current displayed state as the baseline.
  writeTally(display.gdpB, display.flowB, display.pop,
             freshStrike ? Math.max(0, cumulative.count - 1) : cumulative.count);

  // figcaption
  if (latestDet) {
    const ktLabel = fmtYieldLabel(latestDet.kt);
    const modeLabel = latestDet.burst === "ground" ? t("r_groundburst") : t("r_airburst");
    $figLabel.textContent = t("fig_label_hot");
    $figBody.innerHTML = t("fig_body_hot")(ktLabel, modeLabel);
  }
}

// kept for applyLang re-render compatibility
function renderResult() { renderCumulative(allDetonations[allDetonations.length - 1]); }

// -------------------- CITY PANEL --------------------
function showCity(c) {
  lastCity = c;
  $cityName.textContent = c.name[LANG];
  const kt = parseFloat($yield.value);
  const burst = $burst.value;
  const r = blastRadii(kt, burst);
  // approximate: disc at center, severe ring as upper bound
  const fs = overlapFraction(0, r.severe, c.r_km);
  const ft = overlapFraction(0, r.thermal, c.r_km);
  const fm = overlapFraction(0, r.moderate, c.r_km);
  const f = Math.max(fs, ft, fm);
  const gdpExp = c.gdp * f;
  const popExp = c.pop * f;
  const share = c.gdp / WORLD_GDP_B;

  $cityBody.innerHTML = `
    <dl>
      <dt>${t("c_gdp")}</dt><dd>${fmtGDP(c.gdp)}</dd>
      <dt>${t("c_pop")}</dt><dd>${fmtPop(c.pop)}</dd>
      <dt>${t("c_radius")}</dt><dd>${fmtKm(c.r_km)}</dd>
      <dt>${t("c_share")}</dt><dd>${fmtPct(share)}</dd>
    </dl>
    <hr class="rule">
    <dl>
      <dt>${t("r_total_gdp")}</dt><dd><strong>${fmtGDP(gdpExp)}</strong></dd>
      <dt>${t("r_total_pop")}</dt><dd><strong>${fmtPop(popExp)}</strong></dd>
    </dl>
    ${reconSectionHTML("sv_head", "city", c.lat, c.lng)}
    <p class="hint small" style="margin-top:10px;">${t("c_note")}</p>
    <button class="ghost" id="city-detonate" style="margin-top:10px;">
      <span class="pdot"></span><span>${t("c_btn")}</span>
    </button>
  `;
  $cityInfo.hidden = false;
  initRecon("city", c.lat, c.lng, 12);
  document.getElementById("city-detonate")?.addEventListener("click", () => {
    detonate({ lat: c.lat, lng: c.lng });
  });
}

// -------------------- RECON VIEW (偵察衛星ビュー) --------------------
// Close-up satellite mini-map with a slow Ken Burns drift — reads like
// reconnaissance footage of the target. Replaces the Street View embeds:
// works for every site including open-sea chokepoints, uses the imagery
// tiles we already rely on, and needs no API key.
const reconMaps = {};
function destroyRecon(key) {
  const r = reconMaps[key];
  if (!r) return;
  clearInterval(r.drift);
  try { r.map.remove(); } catch (e) {}
  delete reconMaps[key];
}
function svOpenURL(lat, lng) {
  return `https://www.google.com/maps/@?api=1&map_action=map&center=${lat},${lng}&zoom=15&basemap=satellite`;
}
function fmtCoordTag(lat, lng) {
  return `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? "N" : "S"} ${Math.abs(lng).toFixed(2)}°${lng >= 0 ? "E" : "W"}`;
}
function reconHTML(key, lat, lng) {
  if (window.NGRM_OFFLINE) return "";
  return `
    <div class="recon-box">
      <div class="recon-map" id="recon-map-${key}"></div>
      <div class="recon-overlay" aria-hidden="true">
        <span class="recon-cross"></span>
        <span class="recon-corner rc-tl"></span><span class="recon-corner rc-tr"></span>
        <span class="recon-corner rc-bl"></span><span class="recon-corner rc-br"></span>
        <span class="recon-tag">RECON · ${fmtCoordTag(lat, lng)}</span>
      </div>
    </div>`;
}
function initRecon(key, lat, lng, zoom = 14) {
  if (window.NGRM_OFFLINE) return;
  destroyRecon(key);
  const el = document.getElementById("recon-map-" + key);
  if (!el) return;
  const m = L.map(el, {
    zoomControl: false, attributionControl: false, dragging: false,
    scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false,
    keyboard: false, touchZoom: false, zoomSnap: 0,
  }).setView([lat, lng], zoom);
  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 18 }
  ).addTo(m);
  setTimeout(() => { try { m.invalidateSize(); } catch (e) {} }, 60);
  // slow drift + gentle push-in; direction is deterministic per site
  const t0 = performance.now();
  const ang = ((lat * 7 + lng * 13) % 360) * Math.PI / 180;
  const span = 180 / Math.pow(2, zoom) * ((el.clientHeight || 170) / 256);
  const spd = span * 0.01;
  const drift = setInterval(() => {
    const tt = (performance.now() - t0) / 1000;
    if (tt > 40 || !el.isConnected) { clearInterval(drift); return; }
    m.setView(
      [lat + Math.sin(ang) * spd * tt, lng + Math.cos(ang) * spd * tt],
      zoom + Math.min(0.5, tt * 0.02),
      { animate: false }
    );
  }, 90);
  reconMaps[key] = { map: m, drift };
}
// category-tuned zoom: fields and straits are huge, factory clusters are tight
const RECON_ZOOM = { port: 14, factory: 15, energy: 13, choke: 11 };
function reconZoomFor(sel) {
  if (sel.startsWith("c:")) return 12;
  const a = ASSETS[+sel.slice(2)];
  return (a && RECON_ZOOM[a.cat]) || 14;
}
function reconSectionHTML(headKey, key, lat, lng) {
  if (window.NGRM_OFFLINE) return "";
  return `<hr class="rule"><div class="sv-headline">${t(headKey)}</div>${reconHTML(key, lat, lng)}
    <a class="sv-open" href="${svOpenURL(lat, lng)}" target="_blank" rel="noopener">${t("sv_open")} ↗</a>`;
}

// -------------------- ASSET PANEL --------------------
const $assetInfo = document.getElementById("asset-info");
const $assetName = document.getElementById("asset-name");
const $assetCat  = document.getElementById("asset-cat");
const $assetBody = document.getElementById("asset-body");

function showAsset(a) {
  lastAsset = a;
  $assetName.textContent = aname(a);
  $assetCat.textContent = t("cat_" + a.cat);
  $assetCat.style.setProperty("--ac", ASSET_CAT_COLOR[a.cat]);

  const fullLoss = a.flow_busd * (a.recovery_mo / 12);
  const deps = Object.entries(a.deps || {}).sort((x, y) => y[1] - x[1]).slice(0, 6);
  const maxW = deps.length ? deps[0][1] : 1;
  const depHtml = deps.map(([cc, w]) => {
    const tgt = depTarget(cc);
    const label = tgt ? tgt.name : cc;
    return `<li>
      <span class="city">${label}<span class="dep-cc">${cc}</span></span>
      <span class="bar bar-flow" style="--p:${(w / maxW).toFixed(3)}"></span>
      <span class="pct">${Math.round(w * 100)}%</span>
    </li>`;
  }).join("");

  $assetBody.innerHTML = `
    <p class="asset-desc">${LANG === "ja" ? a.desc_ja : a.desc_en}</p>
    <dl>
      <dt>${t("a_stat")}</dt><dd>${astat(a)}</dd>
      <dt>${t("a_flow")}</dt><dd>${fmtMoney(a.flow_busd)} / ${LANG === "ja" ? "年" : "yr"}</dd>
      <dt>${t("a_recovery")}</dt><dd>${a.recovery_mo} ${t("mo_unit")}</dd>
      <dt>${t("a_loss1")}</dt><dd><strong>${fmtMoney(fullLoss)}</strong></dd>
    </dl>
    ${deps.length ? `<hr class="rule"><div class="ripple-heading">${t("a_deps")}</div><ul class="hits">${depHtml}</ul>` : ""}
    ${reconSectionHTML("sv_head", "asset", a.lat, a.lng)}
    <p class="hint small" style="margin-top:10px;">${t("a_note")} ${t("a_src")}: ${a.src_note}.</p>
    <button class="ghost" id="asset-detonate" style="margin-top:10px;">
      <span class="pdot"></span><span>${t("a_btn")}</span>
    </button>
  `;
  $assetInfo.hidden = false;
  initRecon("asset", a.lat, a.lng, RECON_ZOOM[a.cat] || 14);
  document.getElementById("asset-detonate")?.addEventListener("click", () => {
    detonate({ lat: a.lat, lng: a.lng });
  });
}

// -------------------- SIDE EFFECTS --------------------
// Changing yield / burst only updates the standalone city preview.
// (Past detonations persist with their own yield — clicking a new point uses the new yield.)
[$yield, $burst].forEach(el => el.addEventListener("change", () => {
  if (lastCity) showCity(lastCity);
}));

document.getElementById("layer-gdp").addEventListener("change", e => {
  if (e.target.checked) map.addLayer(cityLayer);
  else map.removeLayer(cityLayer);
});

[["layer-port", "port"], ["layer-factory", "factory"], ["layer-energy", "energy"], ["layer-choke", "choke"]].forEach(([id, cat]) => {
  document.getElementById(id)?.addEventListener("change", e => {
    if (e.target.checked) map.addLayer(assetLayers[cat]);
    else map.removeLayer(assetLayers[cat]);
  });
});

// -------------------- SIMULATION BUTTON (panel 01) --------------------
// Single entry point: the target (metro or strategic asset) is chosen in the
// selector, then the run button fires. Marker clicks pre-set the selector.
const $targetCity = document.getElementById("target-city");

function populateTargets() {
  if (!$targetCity) return;
  const prev = $targetCity.value;
  $targetCity.innerHTML = "";

  const ogCity = document.createElement("optgroup");
  ogCity.label = t("target_group_city");
  [...CITIES]
    .map((c, i) => ({ c, i }))
    .sort((x, y) => y.c.gdp - x.c.gdp)
    .forEach(({ c, i }) => {
      const opt = document.createElement("option");
      opt.value = "c:" + i;
      opt.setAttribute("data-ja", c.name.ja);
      opt.setAttribute("data-en", c.name.en);
      opt.textContent = c.name[LANG];
      if (c.name.en === "Tokyo") opt.selected = true;
      ogCity.appendChild(opt);
    });
  $targetCity.appendChild(ogCity);

  ["port", "factory", "energy", "choke"].forEach(cat => {
    const og = document.createElement("optgroup");
    og.label = t("cat_" + cat);
    ASSETS
      .map((a, i) => ({ a, i }))
      .filter(({ a }) => a.cat === cat)
      .sort((x, y) => y.a.flow_busd - x.a.flow_busd)
      .forEach(({ a, i }) => {
        const opt = document.createElement("option");
        opt.value = "a:" + i;
        opt.setAttribute("data-ja", a.name_ja);
        opt.setAttribute("data-en", a.name_en);
        opt.textContent = aname(a);
        og.appendChild(opt);
      });
    $targetCity.appendChild(og);
  });

  if (prev) {
    $targetCity.value = prev;
    if ($targetCity.selectedIndex < 0) $targetCity.selectedIndex = 0;
  }
}
populateTargets();

function targetLatLng() {
  const v = $targetCity ? $targetCity.value : "";
  if (v.startsWith("c:")) { const c = CITIES[+v.slice(2)]; return c && { lat: c.lat, lng: c.lng }; }
  if (v.startsWith("a:")) { const a = ASSETS[+v.slice(2)]; return a && { lat: a.lat, lng: a.lng }; }
  return null;
}

// Street-level preview of the selected target — "this is what the place
// looks like right now", shown before the strike is ever run.
function updateTargetPreview() {
  const box = document.getElementById("target-sv");
  if (!box) return;
  if (window.NGRM_OFFLINE) { box.hidden = true; return; }
  const tgt = targetLatLng();
  if (!tgt) { box.hidden = true; return; }
  box.innerHTML = `
    <div class="sv-headline">${t("target_sv_head")}</div>
    ${reconHTML("target", tgt.lat, tgt.lng)}
    <a class="sv-open" href="${svOpenURL(tgt.lat, tgt.lng)}" target="_blank" rel="noopener">${t("sv_open")} ↗</a>`;
  box.hidden = false;
  initRecon("target", tgt.lat, tgt.lng, reconZoomFor($targetCity.value));
}

$targetCity?.addEventListener("change", () => {
  updateTargetPreview();
  const tgt = targetLatLng();
  if (tgt) map.flyTo([tgt.lat, tgt.lng], Math.max(map.getZoom(), 4), { duration: 0.8 });
});
updateTargetPreview();

document.getElementById("fire-btn")?.addEventListener("click", () => {
  if (scenarioMode !== "nuclear") { runSim(); return; }
  const tgt = targetLatLng();
  if (!tgt) return;
  map.flyTo([tgt.lat, tgt.lng], Math.max(map.getZoom(), 5), { duration: 0.8 });
  setTimeout(() => detonate(tgt), 850);
});

// ==================== CITY-HALT SIMULATOR (Layer 3 / GIS ext.) ====================
const $simCity   = document.getElementById("sim-city");
const $simHalt   = document.getElementById("sim-halt");
const $simHaltVal= document.getElementById("sim-halt-val");
const $simDur    = document.getElementById("sim-duration");
const $simResult = document.getElementById("sim-result");
const $simRipple = document.getElementById("sim-ripple");

// Pre-compute: sum of our-sample city GDPs within each country
const COUNTRY_CITY_GDP = {};
CITIES.forEach(c => { COUNTRY_CITY_GDP[c.cc] = (COUNTRY_CITY_GDP[c.cc] || 0) + c.gdp; });

function populateSimCity() {
  $simCity.innerHTML = "";
  [...CITIES]
    .map((c, i) => ({ c, i }))
    .sort((a, b) => b.c.gdp - a.c.gdp)
    .forEach(({ c, i }) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.setAttribute("data-ja", c.name.ja + " · " + c.cc + " · $" + c.gdp + "B");
      opt.setAttribute("data-en", c.name.en + " · " + c.cc + " · $" + c.gdp + "B");
      opt.textContent = (LANG === "ja" ? c.name.ja : c.name.en) + " · " + c.cc + " · $" + c.gdp + "B";
      $simCity.appendChild(opt);
    });
}
populateSimCity();

$simHalt.addEventListener("input", () => { $simHaltVal.textContent = $simHalt.value + "%"; });

// -------------------- SCENARIO MODE (one set, one run button) --------------------
// The old standalone panel 04 is folded into panel 01: the chips pick the
// scenario type, the fields swap accordingly, and the single simulation
// button dispatches to the strike story or the city-halt ripple model.
const $scenarioPanel = document.getElementById("scenario-panel");
let scenarioMode = "nuclear";
document.querySelectorAll("#mode-chips .shock-chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#mode-chips .shock-chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    scenarioMode = btn.getAttribute("data-mode");
    if ($scenarioPanel) $scenarioPanel.setAttribute("data-mode", scenarioMode);
    if (scenarioMode !== "nuclear") {
      const h = btn.getAttribute("data-halt"), d = btn.getAttribute("data-dur");
      if (h) { $simHalt.value = h; $simHaltVal.textContent = h + "%"; }
      if (d) $simDur.value = d;
    }
  });
});

// Ripple layer (polylines + destination dots)
const rippleLayer = L.layerGroup().addTo(map);

function buildArcPoints(a, b, N = 28) {
  // Quadratic-bezier curve with perpendicular offset for a gentle arc
  const dLat = b.lat - a.lat;
  const dLng = b.lng - a.lng;
  const dist = Math.hypot(dLat, dLng);
  const nx = -dLng / (dist || 1);
  const ny =  dLat / (dist || 1);
  const off = dist * 0.18;
  const cx = (a.lat + b.lat) / 2 + nx * off;
  const cy = (a.lng + b.lng) / 2 + ny * off;
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const tt = i / N;
    const u = 1 - tt;
    pts.push([ u*u*a.lat + 2*u*tt*cx + tt*tt*b.lat,
               u*u*a.lng + 2*u*tt*cy + tt*tt*b.lng ]);
  }
  return pts;
}

function drawRipple(src, tops, haltPct) {
  rippleLayer.clearLayers();

  // source pulse
  const srcRing = L.circleMarker([src.lat, src.lng], {
    radius: 0, color: "#a8231f", weight: 2, fill: false, opacity: 0.7, interactive: false
  }).addTo(rippleLayer);
  animate({
    duration: 1400, ease: "outQuart",
    update: tt => { srcRing.setRadius(4 + 40 * tt); srcRing.setStyle({ opacity: 0.7 * (1 - tt) }); }
  });
  L.circleMarker([src.lat, src.lng], {
    radius: 7, color: "#a8231f", weight: 2, fillColor: "#a8231f", fillOpacity: 0.85, interactive: false
  }).addTo(rippleLayer);

  // source halt divIcon (persistent, moved to haltLayer so sequential runs stack cleanly)
  haltLayer.clearLayers();
  const haltMark = L.marker([src.lat, src.lng], {
    icon: L.divIcon({
      className: "halt-div",
      html: haltIconHTML(src.name.ja, src.name.en, Math.round(haltPct)),
      iconSize: [96, 72], iconAnchor: [48, 36],
    }),
    interactive: false, keyboard: false, zIndexOffset: 900,
  }).addTo(haltLayer);

  const maxLoss = tops[0] ? tops[0].loss : 1;
  tops.forEach((h, i) => {
    const ratio = h.loss / maxLoss;
    const pts = buildArcPoints({ lat: src.lat, lng: src.lng }, h.c, 28);
    const line = L.polyline(pts, {
      color: "#163a5f",
      weight: 0.6 + ratio * 3.2,
      opacity: 0,
      smoothFactor: 1,
    });
    line.addTo(rippleLayer);
    line.bindTooltip(
      `<b>${src.name[LANG]} → ${h.c.name[LANG]}</b><br>${LANG === "ja" ? "波及損失" : "Spillover"}: ${fmtMoney(h.loss)}`,
      { sticky: true, direction: "top", className: "ripple-tip" }
    );
    animate({
      duration: 900, delay: 100 + 70*i, ease: "outQuart",
      update: tt => line.setStyle({ opacity: (0.3 + 0.55 * ratio) * tt })
    });
    const dst = L.circleMarker([h.c.lat, h.c.lng], {
      radius: 0, color: "#163a5f", weight: 1.4,
      fillColor: "#163a5f", fillOpacity: 0.75,
    }).addTo(rippleLayer);
    dst.bindTooltip(`${h.c.name[LANG]} · ${fmtMoney(h.loss)}`, { direction: "top", opacity: 1 });
    animate({
      duration: 700, delay: 520 + 70*i, ease: "outBack",
      update: tt => dst.setRadius((3 + 9 * ratio) * tt)
    });
    // only label the top 3 to keep the map legible
    if (i < 3) {
      const labelMarker = L.marker([h.c.lat, h.c.lng], {
        icon: L.divIcon({
          className: "ripple-label-div",
          html: `<div class="ripple-label"><span class="rl-city">${h.c.name[LANG]}</span><span class="rl-loss">${fmtMoney(h.loss)}</span></div>`,
          iconSize: [120, 32], iconAnchor: [-8, 8],
        }),
        interactive: false, keyboard: false, zIndexOffset: 700,
      }).addTo(rippleLayer);
    }
  });
}

// Shared halt-ripple model: how a halted city tugs the strings of the world
// economy through trade dependency and the finance-hub channel. Used by both
// the shock-scenario run and the nuclear story's cascade phase.
function computeHaltRipple(src, halt, days) {
  const durFrac = days / 365;
  const countryCityGDP = COUNTRY_CITY_GDP[src.cc] || src.gdp;
  const srcShareOfCountry = src.gdp / countryCityGDP;

  // --- Layer 1: direct ---
  const direct = src.gdp * halt * durFrac;

  // --- Layer 2: trade ripple ---
  const deps = TRADE_DEPS[src.cc] || {};
  const tradeByCountry = {};
  Object.entries(deps).forEach(([dstCC, weight]) => {
    if (dstCC === src.cc) return;
    const dstGDP = COUNTRY_GDP[dstCC];
    if (!dstGDP) return;
    tradeByCountry[dstCC] = weight * dstGDP * halt * durFrac * srcShareOfCountry;
  });

  // --- National: direct + partial country spillover (crude: 1.4× direct, capped at country annualized) ---
  const nationalGDP = COUNTRY_GDP[src.cc] || countryCityGDP;
  const nationalLoss = Math.min(direct * 1.4, nationalGDP * durFrac * halt);

  // --- Finance ripple: global credit/liquidity channel ---
  const finWeight = (src.fin || 0) / 100;
  const globalFin = finWeight * halt * durFrac * FIN_CHANNEL * WORLD_GDP_B;

  // Allocate finance loss by country (fin_score × gdp weights)
  const finByCountry = {};
  let finWS = 0;
  Object.keys(COUNTRY_GDP).forEach(cc => {
    if (cc === src.cc) return;
    finByCountry[cc] = (COUNTRY_FIN[cc] || 30) / 100 * COUNTRY_GDP[cc];
    finWS += finByCountry[cc];
  });
  Object.keys(finByCountry).forEach(cc => { finByCountry[cc] = globalFin * finByCountry[cc] / finWS; });

  // Allocate country-level losses to cities in our sample
  const cityRipple = [];
  const allCC = new Set([...Object.keys(tradeByCountry), ...Object.keys(finByCountry)]);
  allCC.forEach(cc => {
    const countryLoss = (tradeByCountry[cc] || 0) + (finByCountry[cc] || 0);
    const ccGdp = COUNTRY_CITY_GDP[cc];
    if (!ccGdp || countryLoss <= 0) return;
    CITIES.forEach(c => {
      if (c.cc !== cc || c === src) return;
      const loss = countryLoss * (c.gdp / ccGdp);
      if (loss > 0.05) cityRipple.push({ c, loss });
    });
  });
  cityRipple.sort((a, b) => b.loss - a.loss);

  const tradeTotal = Object.values(tradeByCountry).reduce((a, b) => a + b, 0);
  return { direct, nationalLoss, globalFin, tradeTotal, worldTotal: direct + tradeTotal + globalFin, cityRipple };
}

function runSim() {
  const idx = parseInt($simCity.value, 10);
  const src = CITIES[idx];
  if (!src) return;
  const halt = parseFloat($simHalt.value) / 100;
  const days = parseFloat($simDur.value);

  const { direct, nationalLoss, globalFin, worldTotal, cityRipple } = computeHaltRipple(src, halt, days);
  const share = worldTotal / WORLD_GDP_B;

  // --- render ---
  const setV = (key, html) => { const el = $simResult.querySelector(`[data-sc="${key}"]`); if (el) el.innerHTML = html; };
  setV("direct",   fmtGDP(direct));
  setV("national", fmtGDP(nationalLoss));
  setV("world",    fmtGDP(worldTotal));
  setV("fin",      fmtGDP(globalFin));
  setV("share",    fmtPct(share));

  const top = cityRipple.slice(0, 8);
  const maxLoss = top[0] ? top[0].loss : 1;
  $simRipple.innerHTML = top.length
    ? top.map(h => `
      <li>
        <span class="city">${h.c.name[LANG]}</span>
        <span class="bar" style="--p:${(h.loss/maxLoss).toFixed(3)}"></span>
        <span class="pct">${fmtGDP(h.loss)}</span>
      </li>`).join("")
    : '<li style="color:var(--ink-3);padding:8px 0;">—</li>';

  $simResult.hidden = false;

  // --- animate counters on the big numbers ---
  const worldEl = $simResult.querySelector('[data-sc="world"]');
  const directEl = $simResult.querySelector('[data-sc="direct"]');
  animate({ duration: 900, ease: "outQuart", update: tt => worldEl.textContent = fmtGDP(worldTotal * tt) });
  animate({ duration: 900, ease: "outQuart", update: tt => directEl.textContent = fmtGDP(direct * tt) });

  // --- map visual ---
  map.flyTo([src.lat, src.lng], Math.max(map.getZoom(), 3), { duration: 0.8 });
  drawRipple(src, top, parseFloat($simHalt.value));
}

// (the shared simulation button in panel 01 dispatches to runSim in shock modes)

// initial language apply (in case of EN query or first render)
applyLang();
