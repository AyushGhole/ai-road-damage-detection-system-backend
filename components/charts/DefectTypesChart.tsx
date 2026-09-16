"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { defectTypes } from "@/lib/data";

export default function DefectTypesChart() {
  const top = defectTypes[0];

  return (
    <div className="glass-card rounded-2xl p-4 shadow-card sm:p-5">
      <h3 className="text-sm font-semibold text-white/90">Top Defect Types</h3>
      <div className="mt-2 flex items-center gap-4">
        <div className="relative h-[150px] w-[150px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={defectTypes}
                dataKey="value"
                nameKey="name"
                innerRadius={48}
                outerRadius={68}
                paddingAngle={2}
                stroke="none"
              >
                {defectTypes.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm font-semibold text-white">{top.name}</span>
            <span className="text-numeric text-lg font-bold text-teal-glow">
              {top.value}%
            </span>
          </div>
        </div>
        <ul className="flex-1 space-y-2">
          {defectTypes.map((d) => (
            <li
              key={d.name}
              className="flex items-center justify-between text-[12.5px]"
            >
              <span className="flex items-center gap-2 text-white/65">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                {d.name}
              </span>
              <span className="text-numeric text-white/45">{d.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
