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
    hint_click:    "地図上の任意の点をクリックすると起爆。都市バブルをクリックすると単独の露出プロファイルを表示。",
    clear_btn:     "起爆をクリア",

    result:        "露出する経済質量",
    layers:        "レイヤー",
    layer_gdp:     "都市GDPバブル",
    layer_memory:  "アーカイブ / 文化的記憶の損失",
    layer_fabs:    "半導体ファブ",
    layer_fallout: "フォールアウト・プルーム",
    layers_hint:   "追加の負債レイヤーはスキーマに雛形を確保。Outrider 側と出典を合意次第、差し込み可能。",

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
    hint_click:    "Click anywhere on the map to detonate. Click a metro bubble to view its standalone exposure profile.",
    clear_btn:     "Clear detonation",

    result:        "Economic mass at risk",
    layers:        "Layers",
    layer_gdp:     "Metro GDP bubbles",
    layer_memory:  "Archival / cultural memory loss",
    layer_fabs:    "Semiconductor fabs",
    layer_fallout: "Fallout plume",
    layers_hint:   "Additional liability layers stubbed in schema. Drop-in once sources are agreed with Outrider.",

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
  if (lastPt) renderResult();
  if (lastCity) showCity(lastCity);
  if (cityLayer) cityLayer.eachLayer(l => l.setTooltipContent ? l.setTooltipContent(l._cityRef.name[LANG]) : null);
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
function fmtGDP(v) {
  if (v >= 1000) return (v/1000).toFixed(2) + " " + t("unit_t");
  return Math.round(v).toLocaleString() + " " + t("unit_b");
}
function fmtPop(v) { return v.toFixed(1) + " " + t("unit_m"); }
function fmtKm(v)  { return v.toFixed(1) + " " + t("unit_km"); }
function fmtPct(v) { return (v*100).toFixed(2) + "%"; }

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

// -------------------- DETONATION --------------------
let ringsLayer = L.layerGroup().addTo(map);
let shockLayer = L.layerGroup().addTo(map);
let epicenter = null;
let lastPt = null, lastKt = null, lastBurst = null;
let lastCity = null;

const $yield = document.getElementById("yield");
const $burst = document.getElementById("burst");
const $clear = document.getElementById("clear");
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
  ringsLayer.clearLayers();
  shockLayer.clearLayers();
  if (epicenter) { map.removeLayer(epicenter); epicenter = null; }
  lastPt = null;
  $result.hidden = true;
  $resultBody.innerHTML = "";
  $cityInfo.hidden = true;
  $legend.hidden = true;
  $clear.hidden = true;
  lastCity = null;
  $figLabel.setAttribute("data-i18n", "fig_label_idle");
  $figBody.setAttribute("data-i18n", "fig_body_idle");
  $figLabel.textContent = t("fig_label_idle");
  $figBody.textContent = t("fig_body_idle");
}
$clear.addEventListener("click", clearAll);

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

function detonate(pt, opts = {}) {
  clearAll();
  lastPt = pt;
  lastKt = parseFloat($yield.value);
  lastBurst = $burst.value;

  const cp = map.latLngToContainerPoint(pt);
  triggerFlash(cp);

  const r = blastRadii(lastKt, lastBurst);
  // epicenter
  epicenter = L.circleMarker(pt, { radius: 0, color: "#17181a", weight: 1.5, fillColor: "#17181a", fillOpacity: 1 }).addTo(map);
  animate({ duration: 500, ease: "outBack", update: t => epicenter.setRadius(4.5 * t) });

  // rings (draw in order: moderate first for stacking, then thermal, then severe on top)
  const ringSpecs = [
    { km: r.moderate, color: "#ae8b13", fill: "#ae8b13", fillOpacity: 0.08, weight: 1.2, delay: 120 },
    { km: r.thermal,  color: "#c47418", fill: "#c47418", fillOpacity: 0.10, weight: 1.2, delay: 260 },
    { km: r.severe,   color: "#c1292e", fill: "#c1292e", fillOpacity: 0.18, weight: 1.5, delay: 400 },
  ];
  ringSpecs.forEach(spec => {
    const ring = L.circle(pt, { radius: 10, color: spec.color, weight: spec.weight, fillColor: spec.fill, fillOpacity: 0 }).addTo(ringsLayer);
    animate({
      duration: 720, delay: spec.delay, ease: "outQuart",
      update: tt => {
        ring.setRadius(spec.km * 1000 * tt);
        ring.setStyle({ fillOpacity: spec.fillOpacity * tt });
      }
    });
  });

  // shockwave
  const shock = L.circle(pt, { radius: 0, color: "#17181a", weight: 1, fill: false, opacity: 0.35 }).addTo(shockLayer);
  animate({
    duration: 1400, delay: 100, ease: "outQuart",
    update: tt => {
      shock.setRadius(r.moderate * 1000 * 1.4 * tt);
      shock.setStyle({ opacity: 0.35 * (1 - tt) });
    },
    done: () => shockLayer.removeLayer(shock)
  });

  $legend.hidden = false;
  $clear.hidden = false;

  // result after rings have started
  setTimeout(() => renderResult(), 450);
}

map.on("click", e => {
  if (e.originalEvent && e.originalEvent.target && e.originalEvent.target.closest(".leaflet-interactive") && e.originalEvent._handled) return;
  detonate(e.latlng);
});

// -------------------- RESULT PANEL --------------------
function computeHits() {
  const r = blastRadii(lastKt, lastBurst);
  const hits = CITIES.map(c => {
    const d = haversine(lastPt, { lat: c.lat, lng: c.lng });
    const fs = overlapFraction(d, r.severe,   c.r_km);
    const ft = overlapFraction(d, r.thermal,  c.r_km);
    const fm = overlapFraction(d, r.moderate, c.r_km);
    const f = Math.max(fs, ft, fm);
    return { c, d, fs, ft, fm, f, gdpExp: c.gdp * f, popExp: c.pop * f };
  }).filter(h => h.f > 0.001);
  hits.sort((a, b) => b.gdpExp - a.gdpExp);
  return { hits, r };
}

function renderResult() {
  if (!lastPt) return;
  const { hits, r } = computeHits();
  const totalGDP = hits.reduce((s, h) => s + h.gdpExp, 0);
  const totalPop = hits.reduce((s, h) => s + h.popExp, 0);
  const share = totalGDP / WORLD_GDP_B;
  const modeLabel = lastBurst === "ground" ? t("r_groundburst") : t("r_airburst");
  const ktLabel = lastKt >= 1000 ? (lastKt/1000).toFixed(1) + " Mt" : lastKt + " kt";

  const top = hits.slice(0, 6);
  const maxExp = top[0] ? top[0].gdpExp : 1;

  const hitsHtml = top.length ? `
    <hr class="rule">
    <div style="font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-3);margin-bottom:6px;font-weight:600;">${t("r_hits")}</div>
    <ul class="hits">
      ${top.map(h => `
        <li>
          <span class="city">${h.c.name[LANG]}</span>
          <span class="bar" style="--p:${(h.gdpExp/maxExp).toFixed(3)}"></span>
          <span class="pct">${fmtPct(h.f)}</span>
        </li>`).join("")}
    </ul>
  ` : `<p class="hint" style="margin-top:10px;">${t("r_none")}</p>`;

  $resultBody.innerHTML = `
    <dl>
      <dt>${t("r_target")}</dt><dd><span class="mono-target">${lastPt.lat.toFixed(2)}, ${lastPt.lng.toFixed(2)}</span></dd>
      <dt>${t("r_yield")}</dt><dd>${ktLabel}</dd>
      <dt>${t("r_mode")}</dt><dd>${modeLabel}</dd>
      <dt>${t("r_radii")}</dt><dd>${fmtKm(r.severe)} / ${fmtKm(r.thermal)} / ${fmtKm(r.moderate)}</dd>
    </dl>
    <hr class="rule">
    <dl>
      <dt>${t("r_total_gdp")}</dt><dd><strong data-counter="gdp">0</strong></dd>
      <dt>${t("r_total_pop")}</dt><dd><strong data-counter="pop">0</strong></dd>
      <dt>${t("r_share")}</dt><dd><strong data-counter="share">0</strong></dd>
    </dl>
    ${hitsHtml}
  `;
  $result.hidden = false;

  // animate the big numbers
  const gdpEl = $resultBody.querySelector('[data-counter="gdp"]');
  const popEl = $resultBody.querySelector('[data-counter="pop"]');
  const shareEl = $resultBody.querySelector('[data-counter="share"]');
  animate({ duration: 900, ease: "outQuart", update: tt => { gdpEl.textContent = fmtGDP(totalGDP * tt); } });
  animate({ duration: 900, ease: "outQuart", update: tt => { popEl.textContent = fmtPop(totalPop * tt); } });
  animate({ duration: 900, ease: "outQuart", update: tt => { shareEl.textContent = fmtPct(share * tt); } });

  // figcaption update
  const mode = lastBurst === "ground" ? t("r_groundburst") : t("r_airburst");
  $figLabel.textContent = t("fig_label_hot");
  $figBody.innerHTML = t("fig_body_hot")(ktLabel, mode);
}

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
[$yield, $burst].forEach(el => el.addEventListener("change", () => {
  if (lastPt) detonate(lastPt);
  else if (lastCity) showCity(lastCity);
}));

document.getElementById("layer-gdp").addEventListener("change", e => {
  if (e.target.checked) map.addLayer(cityLayer);
  else map.removeLayer(cityLayer);
});

// initial language apply (in case of EN query or first render)
applyLang();
