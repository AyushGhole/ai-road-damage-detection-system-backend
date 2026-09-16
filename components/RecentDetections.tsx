import { recentDetections } from "@/lib/data";
import DetectionItem from "./DetectionItem";

export default function RecentDetections() {
  return (
    <div className="glass-card flex flex-col rounded-2xl p-4 shadow-card sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white/90">
          Recent Detections
        </h3>
        <button className="text-xs font-medium text-teal-glow hover:underline">
          View All
        </button>
      </div>
      <div className="mt-2 divide-y divide-white/[0.04]">
        {recentDetections.map((d) => (
          <DetectionItem key={d.id} detection={d} />
        ))}
      </div>
    </div>
  );
}
