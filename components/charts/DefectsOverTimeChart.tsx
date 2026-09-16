"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { defectsOverTime } from "@/lib/data";

export default function DefectsOverTimeChart() {
  const [period, setPeriod] = useState("This Month");

  return (
    <div className="glass-card rounded-2xl p-4 shadow-card sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white/90">
          Defects Over Time
        </h3>
        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="appearance-none rounded-lg border border-white/10 bg-white/[0.03] py-1.5 pl-3 pr-8 text-xs text-white/70 outline-none hover:bg-white/5"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 90 Days</option>
          </select>
          <ChevronDown
            size={13}
            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40"
          />
        </div>
      </div>

      <div className="mt-3 h-[190px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={defectsOverTime} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3C5" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#22D3C5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="critGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F0473F" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#F0473F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              interval={4}
            />
            <YAxis
              tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={38}
            />
            <Tooltip
              contentStyle={{
                background: "#0D1622",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: "rgba(255,255,255,0.6)" }}
            />
            <Area
              type="monotone"
              dataKey="total"
              name="Total Defects"
              stroke="#22D3C5"
              strokeWidth={2}
              fill="url(#totalGrad)"
            />
            <Area
              type="monotone"
              dataKey="critical"
              name="Critical Defects"
              stroke="#F0473F"
              strokeWidth={2}
              fill="url(#critGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 flex items-center gap-4 text-[11.5px] text-white/55">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-teal-glow" /> Total Defects
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-crit-glow" /> Critical Defects
        </span>
      </div>
    </div>
  );
}
