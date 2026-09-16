import {
  LayoutDashboard,
  Route,
  ScanSearch,
  MapPin,
  FileBarChart2,
  LineChart,
  BellRing,
  Wrench,
  Users,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  badge?: number;
};

export const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Roads", icon: Route },
  { label: "Detections", icon: ScanSearch },
  { label: "Map View", icon: MapPin },
  { label: "Reports", icon: FileBarChart2 },
  { label: "Analytics", icon: LineChart },
  { label: "Alerts", icon: BellRing, badge: 8 },
  { label: "Maintenance", icon: Wrench },
  { label: "Users", icon: Users },
  { label: "Settings", icon: Settings },
];

export type StatCardData = {
  title: string;
  value: string;
  change: string;
  accent: "teal" | "amber" | "crit" | "good";
  icon: "road" | "warning" | "alert" | "check";
};

export const statCards: StatCardData[] = [
  {
    title: "Total Roads",
    value: "1,284 km",
    change: "12.5% this month",
    accent: "teal",
    icon: "road",
  },
  {
    title: "Defects Detected",
    value: "2,356",
    change: "18.7% this month",
    accent: "amber",
    icon: "warning",
  },
  {
    title: "Critical Defects",
    value: "342",
    change: "8.4% this month",
    accent: "crit",
    icon: "alert",
  },
  {
    title: "Model Accuracy",
    value: "87.6%",
    change: "3.2% this month",
    accent: "good",
    icon: "check",
  },
];

export type Severity = "Severe" | "Moderate" | "Minor" | "Good";

export type Detection = {
  id: string;
  severity: Severity;
  location: string;
  type: string;
  date: string;
  time: string;
  thumbTone: string;
};

export const recentDetections: Detection[] = [
  {
    id: "d1",
    severity: "Severe",
    location: "Central - Queensway",
    type: "Crack",
    date: "10 May 2025",
    time: "10:30 AM",
    thumbTone: "from-crit-glow/40 to-base-900",
  },
  {
    id: "d2",
    severity: "Moderate",
    location: "Kowloon - Nathan Road",
    type: "Pothole",
    date: "10 May 2025",
    time: "09:15 AM",
    thumbTone: "from-amber-glow/40 to-base-900",
  },
  {
    id: "d3",
    severity: "Minor",
    location: "Hong Kong Island",
    type: "Surface Crack",
    date: "10 May 2025",
    time: "08:45 AM",
    thumbTone: "from-teal-glow/30 to-base-900",
  },
  {
    id: "d4",
    severity: "Moderate",
    location: "Sha Tin - Tai Po Road",
    type: "Uneven Surface",
    date: "10 May 2025",
    time: "08:20 AM",
    thumbTone: "from-amber-glow/40 to-base-900",
  },
  {
    id: "d5",
    severity: "Good",
    location: "Tuen Mun Road",
    type: "No Defect",
    date: "10 May 2025",
    time: "07:50 AM",
    thumbTone: "from-good-glow/40 to-base-900",
  },
];

export const severityColor: Record<Severity, string> = {
  Severe: "bg-crit-glow/15 text-crit-glow border border-crit-glow/30",
  Moderate: "bg-amber-glow/15 text-amber-glow border border-amber-glow/30",
  Minor: "bg-teal-glow/15 text-teal-glow border border-teal-glow/30",
  Good: "bg-good-glow/15 text-good-glow border border-good-glow/30",
};

export const defectDistribution = [
  { name: "Severe", value: 342, pct: "14.5%", color: "#F0473F" },
  { name: "Moderate", value: 842, pct: "35.7%", color: "#F5A524" },
  { name: "Minor", value: 652, pct: "27.7%", color: "#F5D024" },
  { name: "Good", value: 520, pct: "22.1%", color: "#22D3C5" },
];

export const defectTypes = [
  { name: "Crack", value: 40, color: "#22D3C5" },
  { name: "Pothole", value: 25, color: "#F0473F" },
  { name: "Uneven Surface", value: 15, color: "#F5A524" },
  { name: "Surface Wear", value: 10, color: "#8B7CF6" },
  { name: "Other", value: 10, color: "#8A97A8" },
];

// 30 days, upward trend with noise
export const defectsOverTime = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  const base = 180 + i * 22;
  const noise = Math.round(Math.sin(i / 2.3) * 40);
  const total = Math.max(120, base + noise);
  const critical = Math.max(20, Math.round(total * 0.18 + Math.cos(i / 3) * 15));
  return {
    day: `${day} May`,
    total,
    critical,
  };
});

export type RoadSegment = {
  id: string;
  d: string;
  severity: "good" | "minor" | "moderate" | "severe";
};

// Stylised road network paths on a 0-0 to 1000-620 canvas
export const roadSegments: RoadSegment[] = [
  { id: "r1", d: "M 60 430 C 160 400, 220 380, 320 380", severity: "good" },
  { id: "r2", d: "M 320 380 C 400 380, 430 340, 470 300", severity: "minor" },
  { id: "r3", d: "M 470 300 C 520 260, 560 250, 620 260", severity: "good" },
  { id: "r4", d: "M 620 260 C 700 275, 740 300, 800 280", severity: "minor" },
  { id: "r5", d: "M 800 280 C 850 265, 900 260, 940 300", severity: "moderate" },
  { id: "r6", d: "M 320 380 C 340 430, 370 460, 420 470", severity: "moderate" },
  { id: "r7", d: "M 420 470 C 480 480, 540 470, 590 460", severity: "severe" },
  { id: "r8", d: "M 590 460 C 650 450, 690 440, 740 460", severity: "severe" },
  { id: "r9", d: "M 740 460 C 800 480, 850 490, 900 470", severity: "moderate" },
  { id: "r10", d: "M 470 300 C 460 350, 440 400, 420 470", severity: "good" },
  { id: "r11", d: "M 590 460 C 610 510, 640 550, 690 560", severity: "moderate" },
  { id: "r12", d: "M 690 560 C 740 555, 790 540, 830 560", severity: "good" },
];

export const severityStroke: Record<RoadSegment["severity"], string> = {
  good: "#2ED990",
  minor: "#F5D024",
  moderate: "#F5A524",
  severe: "#F0473F",
};

export type DefectMarker = {
  id: string;
  x: number;
  y: number;
  severity: RoadSegment["severity"];
};

export const defectMarkers: DefectMarker[] = [
  { id: "m1", x: 320, y: 380, severity: "good" },
  { id: "m2", x: 470, y: 300, severity: "moderate" },
  { id: "m3", x: 620, y: 260, severity: "good" },
  { id: "m4", x: 800, y: 280, severity: "minor" },
  { id: "m5", x: 420, y: 470, severity: "severe" },
  { id: "m6", x: 590, y: 460, severity: "severe" },
  { id: "m7", x: 740, y: 460, severity: "moderate" },
  { id: "m8", x: 900, y: 470, severity: "minor" },
  { id: "m9", x: 690, y: 560, severity: "good" },
];

export const mapLabels = [
  { id: "l1", x: 660, y: 210, text: "Kowloon" },
  { id: "l2", x: 300, y: 415, text: "Victoria Harbour" },
  { id: "l3", x: 730, y: 600, text: "Hong Kong Island" },
];
