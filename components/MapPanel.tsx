"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal, LocateFixed, Plus, Minus } from "lucide-react";
import {
  roadSegments,
  severityStroke,
  defectMarkers,
  mapLabels,
} from "@/lib/data";

const legendItems: { label: string; color: string }[] = [
  { label: "Good", color: severityStroke.good },
  { label: "Minor", color: severityStroke.minor },
  { label: "Moderate", color: severityStroke.moderate },
  { label: "Severe", color: severityStroke.severe },
];

export default function MapPanel() {
  const [zoom, setZoom] = useState(1);
  const [roadFilter, setRoadFilter] = useState("All Roads");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="glass-card flex flex-col rounded-2xl p-4 shadow-card sm:p-5 lg:col-span-2">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-white/90">
          Road Network Overview
        </h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={roadFilter}
              onChange={(e) => setRoadFilter(e.target.value)}
              className="appearance-none rounded-lg border border-white/10 bg-white/[0.03] py-1.5 pl-3 pr-8 text-xs text-white/70 outline-none hover:bg-white/5"
            >
              <option>All Roads</option>
              <option>Highways</option>
              <option>Urban Roads</option>
              <option>Rural Roads</option>
            </select>
            <ChevronDown
              size={13}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40"
            />
          </div>
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 hover:bg-white/5"
          >
            <SlidersHorizontal size={13} />
            Filters
          </button>
        </div>
      </div>

      <div className="relative mt-4 h-[380px] w-full overflow-hidden rounded-xl border border-white/5 bg-[#060D14]">
        {/* base grid / faux geo texture */}
        <svg
          viewBox="0 0 1000 620"
          className="absolute inset-0 h-full w-full"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
        >
          <defs>
            <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="rgba(255,255,255,0.035)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="mapVignette" cx="45%" cy="45%" r="75%">
              <stop offset="0%" stopColor="#0B1A24" stopOpacity="0" />
              <stop offset="100%" stopColor="#020608" stopOpacity="0.9" />
            </radialGradient>
          </defs>
          <rect width="1000" height="620" fill="url(#grid)" />

          {/* soft landmass blobs for a geographic feel */}
          <path
            d="M -40 120 C 150 60, 320 90, 420 180 C 500 250, 480 340, 380 380 C 280 420, 140 400, 60 460 C -20 510, -60 300, -40 120 Z"
            fill="#0B1721"
            opacity="0.7"
          />
          <path
            d="M 640 40 C 780 20, 920 60, 1010 150 C 1060 230, 1000 300, 900 280 C 820 265, 760 200, 700 160 C 650 130, 610 90, 640 40 Z"
            fill="#0B1721"
            opacity="0.6"
          />
          <path
            d="M 580 480 C 700 440, 840 470, 900 540 C 940 590, 860 620, 760 620 C 680 620, 600 600, 560 560 C 540 530, 550 500, 580 480 Z"
            fill="#0B1721"
            opacity="0.6"
          />

          {/* roads */}
          {roadSegments.map((seg) => (
            <path
              key={seg.id}
              d={seg.d}
              fill="none"
              stroke={severityStroke[seg.severity]}
              strokeWidth={4}
              strokeLinecap="round"
              opacity={0.85}
            />
          ))}

          {/* defect markers */}
          {defectMarkers.map((m) => (
            <g key={m.id}>
              <circle
                cx={m.x}
                cy={m.y}
                r="10"
                fill={severityStroke[m.severity]}
                opacity="0.18"
              />
              <circle
                cx={m.x}
                cy={m.y}
                r="5"
                fill={severityStroke[m.severity]}
                stroke="#050B12"
                strokeWidth="1.5"
              />
            </g>
          ))}

          {/* labels */}
          {mapLabels.map((l) => (
            <text
              key={l.id}
              x={l.x}
              y={l.y}
              fill="rgba(255,255,255,0.45)"
              fontSize="13"
              fontFamily="var(--font-inter)"
            >
              {l.text}
            </text>
          ))}

          <rect width="1000" height="620" fill="url(#mapVignette)" />
        </svg>

        {/* legend */}
        <div className="glass-card absolute bottom-3 left-3 rounded-lg p-3">
          <p className="mb-2 text-[11px] font-semibold text-white/70">
            Defect Severity
          </p>
          <ul className="space-y-1.5">
            {legendItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-[11px] text-white/60">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* controls */}
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button className="glass-card rounded-lg p-2 text-white/60 hover:text-teal-glow">
            <LocateFixed size={15} />
          </button>
          <button
            onClick={() => setZoom((z) => Math.min(1.6, z + 0.15))}
            className="glass-card rounded-lg p-2 text-white/60 hover:text-teal-glow"
          >
            <Plus size={15} />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(0.8, z - 0.15))}
            className="glass-card rounded-lg p-2 text-white/60 hover:text-teal-glow"
          >
            <Minus size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
