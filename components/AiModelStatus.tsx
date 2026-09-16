export default function AiModelStatus() {
  return (
    <div className="glass-card mx-4 mb-4 rounded-2xl p-4">
      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-16 w-16">
          <defs>
            <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22D3C5" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#22D3C5" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="30" fill="url(#aiGlow)" />
          <g stroke="#22D3C5" strokeWidth="1" opacity="0.5" fill="none">
            <path d="M32 6 L32 16 M32 48 L32 58 M6 32 L16 32 M48 32 L58 32" />
            <circle cx="32" cy="32" r="22" strokeDasharray="2 4" />
          </g>
          <rect
            x="20"
            y="20"
            width="24"
            height="24"
            rx="4"
            transform="rotate(45 32 32)"
            fill="#0D1622"
            stroke="#22D3C5"
            strokeWidth="1.5"
          />
          <text
            x="32"
            y="37"
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill="#22D3C5"
            fontFamily="var(--font-jetbrains)"
          >
            AI
          </text>
        </svg>
      </div>
      <p className="text-center text-xs font-medium text-white/60">
        AI Model Status
      </p>
      <div className="mt-1.5 flex items-center justify-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good-glow opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-good-glow" />
        </span>
        <span className="text-sm font-semibold text-good-glow">Active</span>
      </div>
      <p className="mt-1 text-center text-[11px] text-numeric text-white/40">
        Model v2.4.1
      </p>
    </div>
  );
}
