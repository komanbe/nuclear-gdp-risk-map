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
    splash_lead:      "「もし核弾頭が一発、主要都市に届いたら、そこに積み上がった経済と記憶はいくら消えるのか」——その額を地図上で測るプロトタイプ。",
    splash_about:     '都市は、数十年かけて積み上がった<b>経済資本と制度的記憶の密な塊</b>である。核弾頭が一発当たれば、その塊は一瞬で蒸発する。本プロトタイプが計算するのは、現に配備されている核兵器が抱えさせている ——『もし起きたらこれだけの額が消える』という、帳簿に載っていない負債(GDP換算)。<span class="term" data-def-ja="NPT(Nuclear Non-Proliferation Treaty / 核兵器不拡散条約)。1968年署名・1970年発効。核保有国には段階的な軍縮を、非保有国には核兵器取得の禁止を求める国際条約。日本を含む191カ国が加盟。" data-def-en="NPT — Nuclear Non-Proliferation Treaty (signed 1968, in force 1970). Commits nuclear-weapon states to disarmament and non-nuclear states to foregoing weapons. 191 states parties.">NPT</span>議論の中では、この金額はほぼ測られてこなかった。',
    splash_start:     "調査を開始",
    splash_hint:      "Enter キーでも進行",
    splash_footer:    "Outrider 向け議論用スキャフォールド",

    // header
    eyebrow:       "Outrider Foundation 向けリファレンス装置",
    title:         "核兵器 GDP リスクマップ",
    subtitle:      "主要都市に核弾頭が届いた場合に消える経済・人口・記憶を、地図上で概算する。",
    meta_edition:  "EDITION",
    meta_date:     "DATE",
    meta_version:  "VERSION",

    // panels
    scenario:      "シナリオ",
    yield_label:   "弾頭出力",
    burst_label:   "爆発方式",
    hint_click:    "地図上の任意の点をクリックすると起爆。リセットまで何発でも積み上がる。都市バブルをクリックすると露出プロファイル表示。",
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
    layer_gdp:     "都市GDPバブル",
    layer_memory:  "アーカイブ / 文化的記憶の損失",
    layer_fabs:    "半導体ファブ",
    layer_fallout: "フォールアウト・プルーム",
    layers_hint:   "追加の負債レイヤーはスキーマに雛形を確保。Outrider 側と出典を合意次第、差し込み可能。",

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
    about_body:    '本プロトタイプは、都市を<b>経済と制度的記憶の密で非代替な貯蔵庫</b>として扱う。単一の起爆は、数十年にわたる複利的資本・記録・生活史を瞬時に蒸発させる —— 現行の核戦略下で潜在化し、<span class="term" data-def-ja="NPT: 核兵器不拡散条約。1968年成立。保有国に軍縮、非保有国に取得禁止を課す。" data-def-en="NPT — Nuclear Non-Proliferation Treaty (1968). Commits nuclear states to disarmament, others to foregoing weapons.">NPT</span>議論では価格付けされていない負債である。',
    src:           '都市GDP: <span class="term" data-def-ja="Brookings Institution と JPMorgan Chase が共同で発行する、都市GDP・生産性の国際比較データセット。" data-def-en="International dataset of metro-level GDP and productivity, jointly published by Brookings Institution and JPMorgan Chase.">Brookings Global Metro Monitor</span> / Oxford Economics(参考値、2022–2023)。爆発半径: <span class="term" data-def-ja="1977年版『The Effects of Nuclear Weapons』。核兵器効果の標準参考書。本ツールの爆発半径スケーリングもここに基づく。" data-def-en="Glasstone &amp; Dolan (1977), ‘The Effects of Nuclear Weapons’ — standard reference; the blast scaling in this tool follows its airburst tables.">Glasstone &amp; Dolan (1977)</span>.',

    // fig / legend
    fig_label_idle: "入力待ち",
    fig_body_idle:  "左パネルで弾頭出力を選び、地図上の任意の点をクリックすると起爆をシミュレート。3つの標準被害リングと、世界GDP上位40都市の実効メトロ円との重なりから、露出GDPを計算します。",
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
    splash_lead:      "“If a single warhead reaches a major city, how much accumulated economy and memory is erased?” A prototype for pricing that number on the map.",
    splash_about:     'A modern city is a <b>dense cluster of economic capital and institutional memory</b>, compounded over decades. A single warhead vaporizes that cluster in seconds. This prototype prices the latent liability that currently deployed arsenals impose on the world — the “if-it-happens-this-much-disappears” figure, unrecorded on any balance sheet, and largely unpriced in <span class="term" data-def-ja="NPT(Nuclear Non-Proliferation Treaty / 核兵器不拡散条約)。1968年署名・1970年発効。核保有国には段階的な軍縮を、非保有国には核兵器取得の禁止を求める国際条約。日本を含む191カ国が加盟。" data-def-en="NPT — Nuclear Non-Proliferation Treaty (signed 1968, in force 1970). Commits nuclear-weapon states to disarmament and non-nuclear states to foregoing weapons. 191 states parties.">NPT</span> discourse.',
    splash_start:     "Begin inspection",
    splash_hint:      "Press Enter to proceed",
    splash_footer:    "Discussion scaffold for Outrider",

    eyebrow:       "Reference instrument for the Outrider Foundation",
    title:         "Nuclear GDP Risk Map",
    subtitle:      "First-order estimate of the economy, population, and memory erased when a warhead reaches a major metro.",
    meta_edition:  "EDITION",
    meta_date:     "DATE",
    meta_version:  "VERSION",

    scenario:      "Scenario",
    yield_label:   "Warhead yield",
    burst_label:   "Burst type",
    hint_click:    "Click the map to detonate — strikes accumulate until you reset. Click a metro bubble for its exposure profile.",
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
    layer_gdp:     "Metro GDP bubbles",
    layer_memory:  "Archival / cultural memory loss",
    layer_fabs:    "Semiconductor fabs",
    layer_fallout: "Fallout plume",
    layers_hint:   "Additional liability layers stubbed in schema. Drop-in once sources are agreed with Outrider.",

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
    about_body:    'This prototype treats cities as <b>dense, non-substitutable reservoirs of economic and institutional memory</b>. A single detonation vaporizes decades of compounded capital, records, and lived history — a liability made latent by current nuclear posture and largely unpriced in <span class="term" data-def-ja="NPT: 核兵器不拡散条約。1968年成立。保有国に軍縮、非保有国に取得禁止を課す。" data-def-en="NPT — Nuclear Non-Proliferation Treaty (1968). Commits nuclear states to disarmament, others to foregoing weapons.">NPT</span> discourse.',
    src:           'Metro GDP: <span class="term" data-def-ja="Brookings Institution と JPMorgan Chase が共同で発行する、都市GDP・生産性の国際比較データセット。" data-def-en="International dataset of metro-level GDP and productivity, jointly published by Brookings Institution and JPMorgan Chase.">Brookings Global Metro Monitor</span> / Oxford Economics (indicative, 2022–2023). Blast radii: <span class="term" data-def-ja="1977年版『The Effects of Nuclear Weapons』。核兵器効果の標準参考書。本ツールの爆発半径スケーリングもここに基づく。" data-def-en="Glasstone &amp; Dolan (1977), ‘The Effects of Nuclear Weapons’ — standard reference; the blast scaling in this tool follows its airburst tables.">Glasstone &amp; Dolan (1977)</span>.',

    fig_label_idle: "Awaiting input",
    fig_body_idle:  "Select a yield in the left panel, then click any point on the map. Three standard damage rings are overlaid on the effective discs of the top 40 metros by GDP and the exposed economic mass is computed.",
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

    lang_code:     "en",
    unit_b:        "B USD",
    unit_t:        "T USD",
    unit_m:        "M people",
    unit_km:       "km",
  }
};

let LANG = "ja";
const WORLD_GDP_B = 105000; // $105T nominal (2023)

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
  if (typeof cityLayer !== "undefined" && cityLayer) cityLayer.eachLayer(l => l.setTooltipContent ? l.setTooltipContent(l._cityRef.name[LANG]) : null);
  // re-render hazard divIcons in the new language
  if (typeof allDetonations !== "undefined") {
    allDetonations.forEach(d => {
      if (!d.hazard) return;
      const place = d.cityMatch ? d.cityMatch.name : { ja: t("narr_unknown"), en: t("narr_unknown") };
      d.hazard.setIcon(L.divIcon({
        className: "hazard-div",
        html: hazardIconHTML(place.ja, place.en),
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
  setTimeout(() => { splash.remove(); invalidateMap(); }, 950);
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

L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
  { attribution: '&copy; OpenStreetMap &copy; CARTO', subdomains: "abcd", maxZoom: 19 }
).addTo(map);
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
  { subdomains: "abcd", maxZoom: 19, pane: "shadowPane", opacity: 0.9 }
).addTo(map);

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
  return bestD <= maxKm ? best : null;
}

// -------------------- DETONATION --------------------
let shockLayer = L.layerGroup().addTo(map); // transient fx (fireball, shockwaves, dust) — shared
let haltLayer  = L.layerGroup().addTo(map); // halt divIcons for simulator sources
let lastPt = null, lastKt = null, lastBurst = null;
let lastCity = null;

const allDetonations = []; // { id, time, pt, kt, burst, hits, totalGDP, totalPop, layer, cityMatch, story }
const cumulative = { gdpB: 0, pop: 0, count: 0 };
// animation smoothing — displayed values so counter animates from last state (not from 0)
const display = { gdpB: 0, pop: 0, share: 0 };

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
  cumulative.gdpB = 0; cumulative.pop = 0; cumulative.count = 0;
  display.gdpB = 0; display.pop = 0; display.share = 0;
  shockLayer.clearLayers();
  haltLayer.clearLayers();
  rippleLayer && rippleLayer.clearLayers();

  lastPt = null; lastCity = null;
  $result.hidden = true;
  $resultBody.innerHTML = "";
  $cityInfo.hidden = true;
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

  // compute exposure for this strike
  const { hits } = computeHitsFor(pt, lastKt, lastBurst);
  const totalGDP = hits.reduce((s, h) => s + h.gdpExp, 0);
  const totalPop = hits.reduce((s, h) => s + h.popExp, 0);
  const cityMatch = findNearestCity(pt, 150);

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

  // 4. DAMAGE RINGS — persistent, go on detLayer
  const ringSpecs = [
    { km: r.moderate, color: "#ae8b13", fill: "#ae8b13", fillOpacity: 0.08, weight: 1.2, delay: 300, dur: 860 },
    { km: r.thermal,  color: "#c47418", fill: "#c47418", fillOpacity: 0.10, weight: 1.2, delay: 440, dur: 860 },
    { km: r.severe,   color: "#c1292e", fill: "#c1292e", fillOpacity: 0.20, weight: 1.5, delay: 580, dur: 860 },
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

  // 7. HAZARD MARK — persistent divIcon dropped after the animation settles
  const det = {
    id: allDetonations.length + 1,
    time: new Date(),
    pt, kt: lastKt, burst: lastBurst,
    hits, totalGDP, totalPop,
    layer: detLayer, cityMatch,
  };
  setTimeout(() => {
    const placeJa = cityMatch ? cityMatch.name.ja : t("narr_unknown");
    const placeEn = cityMatch ? cityMatch.name.en : t("narr_unknown");
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
  cumulative.pop   += totalPop;

  $legend.hidden = false;
  renderCumulative(det);
}

map.on("click", e => {
  if (e.originalEvent && e.originalEvent.target && e.originalEvent.target.closest(".leaflet-interactive") && e.originalEvent._handled) return;
  detonate(e.latlng);
});

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

// -------------------- NARRATIVE --------------------
function generateDispatch(det) {
  const { cityMatch: c, kt, burst, pt, totalGDP, totalPop } = det;
  const flavor = pickFlavor(c);
  const place = c ? c.name[LANG] : t("narr_unknown");
  const area  = flavor ? flavor[LANG + "_area"] : (LANG === "ja" ? "中心部" : "its central district");
  const sector = flavor ? flavor[LANG + "_sectors"]
                        : (LANG === "ja"
                            ? "企業本社・公共インフラ・教育機関・文化施設の高密度集積"
                            : "a dense cluster of corporate HQs, public infrastructure, schools, and cultural institutions");
  const ripple = flavor ? flavor[LANG + "_ripple"] : null;
  const ktLabel = fmtYieldLabel(kt);
  const modeLabel = burst === "ground" ? t("r_groundburst") : t("r_airburst");

  if (LANG === "ja") {
    const lead = `${place}の${area}に ${ktLabel} 級弾頭が${modeLabel}で着弾。`;
    const lost = `${sector}が失われた。`;
    const imp  = `この一撃で約 ${fmtYen(totalGDP)}（${fmtUSD(totalGDP)} 相当）の経済資本と、${fmtPop(totalPop)}の影響人口が計上される。`;
    const rip  = ripple ? `${ripple}。` : "";
    const cum  = cumulative.count > 1
      ? `ここまでの累積は ${cumulative.count} 発 / ${fmtYen(cumulative.gdpB)}。`
      : "";
    return { lead, lost, imp, rip, cum };
  } else {
    const lead = `A ${ktLabel} warhead struck ${place} (${area}) as a${modeLabel[0] === 'A' ? "n" : ""} ${modeLabel.toLowerCase()}.`;
    const lost = `${sector[0].toUpperCase()}${sector.slice(1)} was erased.`;
    const imp  = `This single strike books approximately ${fmtUSD(totalGDP)} (${fmtYen(totalGDP)}) of economic capital and ${fmtPop(totalPop)} in affected population.`;
    const rip  = ripple ? `${ripple[0].toUpperCase()}${ripple.slice(1)}.` : "";
    const cum  = cumulative.count > 1
      ? `Running total: ${cumulative.count} strikes / ${fmtUSD(cumulative.gdpB)}.`
      : "";
    return { lead, lost, imp, rip, cum };
  }
}

// -------------------- CUMULATIVE PANEL --------------------
function renderCumulative(latestDet) {
  const share = cumulative.gdpB / WORLD_GDP_B;

  const lead = `<p class="cum-lead">${t("cum_lead")}</p>`;
  const headline = `
    <div class="damage-headline">
      <div class="dh-label">${t("cum_loss_label")}</div>
      <div class="dh-money" data-cm="big">—</div>
      <div class="dh-money-sub" data-cm="sub">—</div>
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
    <hr class="rule">
    <div class="dispatch-head">
      <span class="dh-ch">●</span>
      <span>${t("dispatch_head")}</span>
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
      const story = generateDispatch(d);
      const placeName = d.cityMatch ? d.cityMatch.name[LANG] : t("narr_unknown");
      const ktLabel = fmtYieldLabel(d.kt);
      const modeLabel = d.burst === "ground" ? t("r_groundburst") : t("r_airburst");
      const isLatest = idx === 0;
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
          </div>
          <p class="di-story">${story.lead} ${story.lost} ${story.imp} ${story.rip} ${story.cum}</p>
        </li>
      `;
    }).join("");
    list.innerHTML = items;
  }

  // animate big numbers from previous displayed state → current cumulative
  const bigEl   = $resultBody.querySelector('[data-cm="big"]');
  const subEl   = $resultBody.querySelector('[data-cm="sub"]');
  const countEl = $resultBody.querySelector('[data-cm="count"]');
  const popEl   = $resultBody.querySelector('[data-cm="pop"]');
  const shareEl = $resultBody.querySelector('[data-cm="share"]');

  const fromGdp = display.gdpB, toGdp = cumulative.gdpB;
  const fromPop = display.pop,  toPop = cumulative.pop;
  const fromShr = display.share, toShr = share;
  const fromCnt = Math.max(0, cumulative.count - 1), toCnt = cumulative.count;

  animate({
    duration: 1200, ease: "outQuart",
    update: tt => {
      const v = fromGdp + (toGdp - fromGdp) * tt;
      bigEl.textContent = fmtMoney(v);
      subEl.textContent = "≈ " + fmtMoneyAlt(v);
    },
    done: () => { display.gdpB = toGdp; }
  });
  animate({
    duration: 1200, ease: "outQuart",
    update: tt => { popEl.textContent = fmtPop(fromPop + (toPop - fromPop) * tt); },
    done: () => { display.pop = toPop; }
  });
  animate({
    duration: 1200, ease: "outQuart",
    update: tt => { shareEl.textContent = fmtPct(fromShr + (toShr - fromShr) * tt); },
    done: () => { display.share = toShr; }
  });
  animate({
    duration: 900, ease: "outQuart",
    update: tt => { countEl.textContent = Math.round(fromCnt + (toCnt - fromCnt) * tt) + " " + t("narr_detonations"); }
  });

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
    <p class="hint small" style="margin-top:10px;">${t("c_note")}</p>
    <button class="ghost" id="city-detonate" style="margin-top:10px;">
      <span class="pdot"></span><span>${t("c_btn")}</span>
    </button>
  `;
  $cityInfo.hidden = false;
  document.getElementById("city-detonate")?.addEventListener("click", () => {
    detonate({ lat: c.lat, lng: c.lng });
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

// ==================== CITY-HALT SIMULATOR (Layer 3 / GIS ext.) ====================
const $simCity   = document.getElementById("sim-city");
const $simHalt   = document.getElementById("sim-halt");
const $simHaltVal= document.getElementById("sim-halt-val");
const $simDur    = document.getElementById("sim-duration");
const $simRun    = document.getElementById("sim-run");
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

document.querySelectorAll(".shock-chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".shock-chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    $simHalt.value = btn.getAttribute("data-halt");
    $simHaltVal.textContent = $simHalt.value + "%";
    $simDur.value = btn.getAttribute("data-dur");
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

function runSim() {
  const idx = parseInt($simCity.value, 10);
  const src = CITIES[idx];
  if (!src) return;
  const halt = parseFloat($simHalt.value) / 100;
  const days = parseFloat($simDur.value);
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
  const nationalCap = nationalGDP * durFrac * halt;
  const nationalLoss = Math.min(direct * 1.4, nationalCap);

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
  const worldTotal = direct + tradeTotal + globalFin;
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

$simRun.addEventListener("click", runSim);

// When clicking a city bubble, also set it as simulator source
document.addEventListener("DOMContentLoaded", () => {});

// initial language apply (in case of EN query or first render)
applyLang();
