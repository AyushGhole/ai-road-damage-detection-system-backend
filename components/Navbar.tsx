"use client";

import { useState } from "react";
import { Menu, Search, Bell, Sun, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/5 bg-base-950/80 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="flex flex-1 items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg border border-white/5 p-2 text-white/60 hover:bg-white/5 lg:hidden"
        >
          <Menu size={18} />
        </button>
        <div className="relative hidden w-full max-w-md sm:block">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/35"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search road, location, or project..."
            className="w-full rounded-lg border border-white/5 bg-white/[0.03] py-2 pl-9 pr-3 text-sm text-white/80 placeholder:text-white/35 outline-none focus:border-teal-glow/40 focus:ring-1 focus:ring-teal-glow/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="relative rounded-lg border border-white/5 p-2 text-white/60 hover:bg-white/5">
          <Bell size={17} />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-crit-glow text-[10px] font-semibold text-white">
            1
          </span>
        </button>
        <button className="rounded-lg border border-white/5 p-2 text-white/60 hover:bg-white/5">
          <Sun size={17} />
        </button>

        <div className="relative">
          <button
            onClick={() => setProfileOpen((v) => !v)}
            className="flex items-center gap-2 rounded-lg border border-white/5 py-1.5 pl-1.5 pr-2.5 hover:bg-white/5"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-teal-glow/40 to-base-800 text-xs font-semibold text-white">
              AU
            </div>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-xs font-medium text-white/90">
                Admin User
              </span>
              <span className="block text-[10.5px] text-white/40">
                Super Admin
              </span>
            </span>
            <ChevronDown
              size={14}
              className={cn(
                "text-white/40 transition-transform",
                profileOpen && "rotate-180"
              )}
            />
          </button>
          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-lg border border-white/10 bg-base-900 py-1 shadow-card">
              <button className="block w-full px-3 py-2 text-left text-sm text-white/70 hover:bg-white/5">
                Profile
              </button>
              <button className="block w-full px-3 py-2 text-left text-sm text-white/70 hover:bg-white/5">
                Preferences
              </button>
              <button className="block w-full px-3 py-2 text-left text-sm text-crit-glow hover:bg-white/5">
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
