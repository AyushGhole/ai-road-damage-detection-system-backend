import { Route, TriangleAlert, OctagonAlert, CheckCircle2, ArrowUp } from "lucide-react";
import type { StatCardData } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons = {
  road: Route,
  warning: TriangleAlert,
  alert: OctagonAlert,
  check: CheckCircle2,
};

const accentStyles = {
  teal: {
    ring: "text-teal-glow bg-teal-glow/12",
    glow: "shadow-[0_0_28px_-8px_rgba(34,211,197,0.55)]",
  },
  amber: {
    ring: "text-amber-glow bg-amber-glow/12",
    glow: "shadow-[0_0_28px_-8px_rgba(245,165,36,0.55)]",
  },
  crit: {
    ring: "text-crit-glow bg-crit-glow/12",
    glow: "shadow-[0_0_28px_-8px_rgba(240,71,63,0.55)]",
  },
  good: {
    ring: "text-good-glow bg-good-glow/12",
    glow: "shadow-[0_0_28px_-8px_rgba(46,217,144,0.55)]",
  },
};

export default function StatCard({ title, value, change, accent, icon }: StatCardData) {
  const Icon = icons[icon];
  const style = accentStyles[accent];

  return (
    <div className="glass-card flex items-center gap-4 rounded-2xl p-4 shadow-card sm:p-5">
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
          style.ring,
          style.glow
        )}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-white/50">{title}</p>
        <p className="text-numeric mt-0.5 text-2xl font-semibold text-white sm:text-[26px]">
          {value}
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-[11.5px] font-medium text-good-glow">
          <ArrowUp size={12} strokeWidth={2.5} />
          {change}
        </p>
      </div>
    </div>
  );
}
