"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import MapPanel from "@/components/MapPanel";
import RecentDetections from "@/components/RecentDetections";
import DefectDistributionChart from "@/components/charts/DefectDistributionChart";
import DefectsOverTimeChart from "@/components/charts/DefectsOverTimeChart";
import DefectTypesChart from "@/components/charts/DefectTypesChart";
import BottomBanner from "@/components/BottomBanner";
import { statCards } from "@/lib/data";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="lg:ml-64">
        <Navbar onMenuClick={() => setMobileOpen(true)} />

        <main className="space-y-5 p-4 sm:p-6">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((card) => (
              <StatCard key={card.title} {...card} />
            ))}
          </section>

          <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <MapPanel />
            <RecentDetections />
          </section>

          <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <DefectDistributionChart />
            <DefectsOverTimeChart />
            <DefectTypesChart />
          </section>

          <BottomBanner />
        </main>
      </div>
    </div>
  );
}
