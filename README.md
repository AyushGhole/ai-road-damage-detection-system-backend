# RoadGuard AI — GeoAI Road Defect Detection Dashboard

A dark, futuristic frontend dashboard for an AI-powered road defect detection
system, built with Next.js (App Router), React, Tailwind CSS, Lucide icons,
and Recharts. No backend, auth, or database — UI only, driven by sample data
in `lib/data.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — Sidebar, Navbar, StatCard, MapPanel, RecentDetections,
  DetectionItem, AiModelStatus, BottomBanner
- `components/charts/` — DefectDistributionChart, DefectsOverTimeChart,
  DefectTypesChart (Recharts)
- `lib/data.ts` — all sample data: nav items, stats, detections, chart data,
  and the stylised road-network map geometry
- `lib/utils.ts` — `cn()` classnames helper

## Notes

- The map is a hand-built SVG (no map API key required) styled to resemble a
  dark GIS view, with colored routes by severity, defect markers, and a
  legend.
- Swap the sample arrays in `lib/data.ts` for live data whenever a backend is
  ready — component props and shapes are already typed for it.
