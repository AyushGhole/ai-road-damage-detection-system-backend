import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal disabled:opacity-50 disabled:pointer-events-none",
          variant === "primary" &&
            "bg-accent-teal text-base-950 hover:bg-accent-teal/90 shadow-glow",
          variant === "outline" &&
            "border border-border-soft text-ink-secondary hover:text-ink-primary hover:border-accent-teal/40 bg-base-900/40",
          variant === "ghost" &&
            "text-ink-secondary hover:text-ink-primary hover:bg-white/5",
          size === "md" && "h-10 px-4 text-sm",
          size === "sm" && "h-8 px-3 text-xs",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
