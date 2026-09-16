import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type Severity = "Good" | "Minor" | "Moderate" | "Severe";

const severityStyles: Record<Severity, string> = {
  Good: "bg-accent-green/15 text-accent-green border-accent-green/25",
  Minor: "bg-accent-amber/15 text-accent-amber border-accent-amber/25",
  Moderate: "bg-accent-orange/15 text-accent-orange border-accent-orange/25",
  Severe: "bg-accent-red/15 text-accent-red border-accent-red/25",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  severity: Severity;
}

export function SeverityBadge({ severity, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium",
        severityStyles[severity],
        className
      )}
      {...props}
    >
      {severity}
    </span>
  );
}
