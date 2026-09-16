"use client";

import { useState } from "react";
import { ShieldHalf, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import AiModelStatus from "./AiModelStatus";

type SidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-white/5 bg-base-950/95 transition-transform duration-200 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between gap-2 px-5 py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-glow/10 text-teal-glow shadow-glow">
              <ShieldHalf size={20} strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight text-white">
                ROADGUARD <span className="text-teal-glow">AI</span>
              </p>
              <p className="text-[10.5px] leading-tight text-white/40">
                GeoAI Road Defect Detection System
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-white/50 hover:bg-white/5 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-teal-glow/12 text-teal-glow shadow-[0_0_20px_-6px_rgba(34,211,197,0.6)]"
                    : "text-white/60 hover:bg-white/[0.04] hover:text-white/90"
                )}
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} strokeWidth={2} />
                  {item.label}
                </span>
                {item.badge && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-crit-glow px-1 text-[11px] font-semibold text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <AiModelStatus />
      </aside>
    </>
  );
}
