import { ShieldHalf, FileText } from "lucide-react";

export default function BottomBanner() {
  return (
    <div className="glass-card relative overflow-hidden rounded-2xl border border-teal-glow/15 p-5 shadow-card sm:p-6">
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-teal-glow/10 blur-3xl" />
      <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-glow/12 text-teal-glow shadow-glow">
            <ShieldHalf size={22} />
          </div>
          <div>
            <p className="text-base font-semibold text-white sm:text-lg">
              Building Safer Roads with AI &amp; Geo Intelligence
            </p>
            <p className="mt-0.5 text-[13px] text-white/50">
              Detect. Analyze. Act.
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-teal-glow px-4 py-2.5 text-sm font-semibold text-base-950 shadow-glow hover:bg-teal-glow/90">
          <FileText size={16} />
          Generate Report
        </button>
      </div>
    </div>
  );
}
