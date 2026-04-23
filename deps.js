/* ============================================================
   Dependency network (Layer 2) — first-order approximation.

   Calibration notes
   -----------------
   COUNTRY_GDP   — 2023 nominal GDP in $B, rounded. World Bank / IMF.
   COUNTRY_FIN   — 0–100 financial centrality (GFCI-informed, rough).
   TRADE_DEPS    — sparse country-pair dependency matrix.
                   TRADE_DEPS[src][dst] = the fraction of dst's annual
                   GDP that would be erased by a 100% one-year halt of
                   src's output, holding everything else fixed.
                   Figures are order-of-magnitude only — drop-in a real
                   OECD ICIO extraction in production.
   FIN_MULT      — scaling factor on the finance-hub channel (β/γ).
   ============================================================ */

const COUNTRY_GDP = {
  US: 27400, CN: 17800, DE: 4500, JP: 4200, IN: 3730, GB: 3340, FR: 3050,
  IT: 2180, BR: 2170, CA: 2140, RU: 2240, KR: 1710, MX: 1790, AU: 1680,
  ES: 1580, ID: 1370, TR: 1100, TW:  760, CH: 870, NL: 1090, SA: 1070,
  PL:  840, SE:  585, BE:  625, AR:  620, NO:  545, IR:  360, AE:  510,
  EG:  470, SG:  500, IL:  510, HK:  380, TH:  515, ZA:  410, NG:  375,
  PK:  340, MY:  420, PH:  440, VN:  430, CL:  340, CO:  360, BD:  460,
  FI:  300, DK:  400, IE:  560, RO:  330, CZ:  335, GR:  240
};

const COUNTRY_FIN = {
  US: 92, GB: 92, SG: 88, HK: 86, JP: 78, CH: 84, AE: 74, DE: 72, FR: 70,
  CN: 70, KR: 66, CA: 72, AU: 68, TW: 62, IL: 66, SA: 58, IN: 60, MX: 48,
  BR: 52, RU: 48, TR: 46, ES: 56, IT: 56, ID: 44, TH: 48, ZA: 52, AR: 42,
  EG: 38, NG: 36, PK: 32, IR: 28
};

// Sparse dependency matrix — TRADE_DEPS[src][dst] = weight (0–1).
// Reading: if src halts 100% for a full year, dst loses `weight` of annual GDP.
// Cross-pair values are intentionally asymmetric.
const TRADE_DEPS = {
  CN: { US: 0.035, JP: 0.048, KR: 0.060, TW: 0.048, DE: 0.024, GB: 0.013,
        FR: 0.013, IT: 0.014, ES: 0.010, CA: 0.012, MX: 0.015, BR: 0.013,
        IN: 0.018, ID: 0.020, SG: 0.030, HK: 0.060, AU: 0.028, VN: 0.045,
        RU: 0.020, TH: 0.022, MY: 0.025, PH: 0.020, SA: 0.010, AE: 0.010,
        ZA: 0.015, TR: 0.009 },

  US: { CN: 0.024, JP: 0.020, KR: 0.022, CA: 0.058, MX: 0.060, GB: 0.022,
        DE: 0.018, FR: 0.015, IT: 0.012, BR: 0.018, AU: 0.018, SG: 0.014,
        HK: 0.012, IN: 0.016, TW: 0.024, IL: 0.028, CH: 0.014, ES: 0.008,
        PH: 0.016, TH: 0.012, MY: 0.014, VN: 0.018, AR: 0.010, NL: 0.012,
        IE: 0.022, SA: 0.008, AE: 0.006, EG: 0.006, ZA: 0.007 },

  JP: { CN: 0.028, KR: 0.018, TW: 0.022, US: 0.014, DE: 0.008, GB: 0.006,
        FR: 0.005, TH: 0.028, SG: 0.013, HK: 0.016, AU: 0.014, ID: 0.016,
        PH: 0.022, MY: 0.014, VN: 0.020, IN: 0.008, CA: 0.005, MX: 0.006 },

  KR: { CN: 0.024, JP: 0.016, US: 0.013, TW: 0.016, DE: 0.006, VN: 0.028,
        IN: 0.009, SG: 0.008, TH: 0.010, PH: 0.009, MY: 0.011, HK: 0.010,
        AU: 0.006 },

  TW: { CN: 0.040, US: 0.020, JP: 0.016, KR: 0.014, DE: 0.010, SG: 0.011,
        HK: 0.022, MY: 0.011, NL: 0.008, IE: 0.008, IL: 0.006 },

  DE: { US: 0.014, FR: 0.026, GB: 0.020, IT: 0.022, ES: 0.015, CN: 0.010,
        JP: 0.005, NL: 0.024, PL: 0.030, BE: 0.020, CH: 0.018, AT: 0.028,
        CZ: 0.032, RU: 0.008, TR: 0.008 },

  GB: { US: 0.016, DE: 0.013, FR: 0.011, NL: 0.008, IT: 0.007, IE: 0.016,
        BE: 0.007, ES: 0.006, CH: 0.006, SG: 0.005, HK: 0.006, AE: 0.005 },

  FR: { US: 0.010, DE: 0.016, IT: 0.014, GB: 0.012, ES: 0.012, BE: 0.014,
        CH: 0.008, NL: 0.008 },

  IT: { DE: 0.014, FR: 0.013, US: 0.007, ES: 0.008, CH: 0.006 },

  IN: { US: 0.013, GB: 0.007, DE: 0.005, CN: 0.008, AE: 0.012, SA: 0.010,
        SG: 0.006, HK: 0.005, JP: 0.004, BD: 0.018 },

  RU: { DE: 0.010, CN: 0.010, TR: 0.014, IT: 0.006, FR: 0.004, NL: 0.006,
        KZ: 0.020, BY: 0.030 },

  BR: { US: 0.007, CN: 0.010, AR: 0.022, DE: 0.004, IT: 0.003, JP: 0.002,
        CL: 0.008 },

  CA: { US: 0.058, CN: 0.005, GB: 0.006, JP: 0.004, MX: 0.005, DE: 0.003 },

  MX: { US: 0.056, CA: 0.006, CN: 0.003, DE: 0.003 },

  SG: { MY: 0.022, CN: 0.020, US: 0.010, ID: 0.020, TH: 0.014, HK: 0.010,
        JP: 0.008, VN: 0.010, PH: 0.008, AU: 0.006, IN: 0.006 },

  HK: { CN: 0.044, US: 0.005, TW: 0.008, SG: 0.006, JP: 0.005, KR: 0.005 },

  AE: { IN: 0.010, GB: 0.004, US: 0.003, SA: 0.010, EG: 0.008, PK: 0.006,
        SG: 0.004, HK: 0.003 },

  SA: { US: 0.008, CN: 0.011, JP: 0.009, IN: 0.012, AE: 0.010, KR: 0.007,
        EG: 0.006 },

  TR: { DE: 0.007, GB: 0.004, US: 0.003, RU: 0.008, IR: 0.010, EG: 0.006,
        FR: 0.003, IT: 0.004 },

  AU: { CN: 0.030, JP: 0.010, KR: 0.008, US: 0.005, GB: 0.003, SG: 0.004 },

  ID: { CN: 0.010, US: 0.005, JP: 0.007, SG: 0.008, MY: 0.005, KR: 0.004 },

  ES: { DE: 0.008, FR: 0.012, IT: 0.007, US: 0.005, GB: 0.005, PT: 0.024 },

  IL: { US: 0.020, GB: 0.005, DE: 0.004, CN: 0.004, IN: 0.003 },

  EG: { US: 0.003, SA: 0.012, AE: 0.010, IT: 0.005, DE: 0.003, TR: 0.006 },

  NG: { US: 0.004, CN: 0.006, IN: 0.004, GB: 0.003, ZA: 0.003 },

  PK: { US: 0.004, CN: 0.008, AE: 0.008, IN: 0.003 },

  IR: { CN: 0.008, TR: 0.006, AE: 0.005, IN: 0.004 },

  AR: { BR: 0.020, US: 0.005, CN: 0.008 },

  TH: { CN: 0.015, JP: 0.018, US: 0.008, MY: 0.010, SG: 0.006, VN: 0.008,
        HK: 0.004, KR: 0.005 },

  ZA: { CN: 0.008, US: 0.004, DE: 0.005, GB: 0.004, JP: 0.003 }
};

// Finance-hub channel scalar — full 100% halt of a top-tier fin hub
// (fin=100) shaves ~1.5% off world annualized GDP through credit/liquidity.
const FIN_CHANNEL = 0.015;
