# Nuclear GDP Risk Map

A reference prototype framing major world metros as **geographically-indexed reservoirs of latent economic liability** under nuclear detonation scenarios.

Built as a discussion scaffold for the [Outrider Foundation](https://outrider.org) team — extending NUKEMAP-style blast visualization with a **GDP-at-risk layer** that quantifies what a single detonation removes from the global economy.

## Framing

Current NPT and deterrence discourse treats nuclear arsenals as strategic *assets*. This prototype inverts the frame: the same warhead, pointed at a modern metro, represents a **civilizational liability** — trillions of USD of compounded capital, infrastructure, institutional memory, and archival records that a ~30 km circle can permanently vaporize.

Three observations drive the design:

1. **Economic mass is extremely concentrated.** The top ~30 metros account for roughly half of global GDP, within areas smaller than a single modern strategic warhead's 1-psi radius.
2. **Blast effects scale sub-linearly**, but urban GDP density does not — so exposed economic mass grows non-linearly with targeting choices.
3. **This asymmetry is unpriced.** Neither NPT review conferences nor national posture documents attach a dollar figure to the civilizational liability a given warhead represents. Giving this liability a first-order number may shift the conversation.

## What the prototype does

- Click any point on the map to detonate a warhead (yield + burst type selectable).
- Renders three standard damage rings (5 psi / 3rd-degree thermal / 1 psi).
- For each of the top 35 metros, computes the overlap between each damage ring and the metro's effective disc, and aggregates **exposed GDP and population** as a first-order liability estimate.
- Click any metro bubble to inspect its standalone exposure profile.

## Data and scaling

- **Metro GDP** — illustrative 2022–2023 nominal figures drawn from Brookings Global Metro Monitor and Oxford Economics Global Cities. Rounded to $10B. See [`cities.js`](cities.js).
- **Blast radii** — Glasstone & Dolan (1977), *The Effects of Nuclear Weapons*:
  - `r_5psi  = 2.2 · W^(1/3) km`  (severe structural damage)
  - `r_therm = 2.9 · W^0.41 km`  (3rd-degree burns)
  - `r_1psi  = 5.9 · W^(1/3) km`  (light damage / broken glass)
  - Ground bursts: ~0.6× airburst optimal (first-order correction).

All figures are illustrative. Production use would replace the city-point list with a **gridded GDP raster** (e.g. Kummu et al. 2018 downscaled GDP, G-Econ 4.0, or nightlights-derived economic activity) for continuous exposure estimates.

## Layers stubbed for drop-in

Visible in the UI, disabled until data sources are agreed:

- **Archival / cultural memory loss** — per-metro inventory of irreplaceable records (national archives, libraries, religious manuscripts, hospital records, corporate headquarters document stores). This is the layer that gives teeth to the "civilizational liability" framing — it makes the non-monetary portion of the loss concretely countable.
- **Semiconductor fabs** — node-weighted exposure of the global chip supply chain.
- **SWIFT / clearing infrastructure**, global HQ concentration, R&D spend — supporting layers for a total liability index beyond GDP.
- **Fallout plume** conditional on prevailing winds — already present in Outrider's existing toolkit; integrate rather than re-implement.

## Running locally

```bash
cd nuclear-gdp-risk-map
python3 -m http.server 8000
# open http://localhost:8000
```

No build step. Leaflet is loaded from CDN.

## Why this is interesting for Outrider

- Outrider already communicates the *human* cost of nuclear use compellingly. This prototype adds the **financial and structural** cost in a frame that policy audiences (treasuries, central banks, finance committees, insurers) can price.
- Extends, rather than duplicates, existing NUKEMAP-style tooling.
- Every design decision is a hook for further collaboration: gridded rasters, multi-warhead SIOP/RISOP scenarios, cultural-memory layer, counterfactual deterrence-economy comparisons.

## Companion work

Accompanies an unpublished working paper (Japanese): *"Redefining Nuclear Weapons as Civilizational Liability — an Integrated Model of Urban Risk and Latent Liability Grounded in Hiroshima–Nagasaki Empirics"* (author's private draft, 2026).

---

**Status**: v0.1 reference prototype, private. Not for redistribution while upstream work is under revision.
