import { MapPin } from "lucide-react";
import type { Detection } from "@/lib/data";
import { severityColor } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function DetectionItem({ detection }: { detection: Detection }) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-white/[0.03]">
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br",
          detection.thumbTone
        )}
      >
        <MapPin size={16} className="text-white/50" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10.5px] font-semibold",
              severityColor[detection.severity]
            )}
          >
            {detection.severity}
          </span>
        </div>
        <p className="mt-1 truncate text-[13px] font-medium text-white/85">
          {detection.location}
        </p>
        <p className="truncate text-[11.5px] text-white/40">{detection.type}</p>
      </div>
      <div className="shrink-0 text-right">
        <p className="flex items-center justify-end gap-1 text-[11px] text-white/45">
          <MapPin size={10} />
          {detection.date}
        </p>
        <p className="text-numeric mt-0.5 text-[11px] text-white/35">
          {detection.time}
        </p>
      </div>
    </div>
  );
}
