const streams = [
  { d: "M-60 90 L280 90 L400 210 L760 210 L880 90 L1260 90", delay: "0s" },
  { d: "M-60 330 L200 330 L320 450 L680 450 L800 330 L1260 330", delay: "1.1s" },
  { d: "M-60 600 L340 600 L460 480 L860 480 L980 600 L1260 600", delay: "2.2s" },
  { d: "M-60 760 L160 760 L280 640 L620 640 L740 760 L1260 760", delay: "3.1s" },
];

const nodes = [
  { cx: 280, cy: 90, delay: "0s" },
  { cx: 760, cy: 210, delay: "0.6s" },
  { cx: 320, cy: 450, delay: "1.2s" },
  { cx: 860, cy: 480, delay: "1.8s" },
  { cx: 980, cy: 600, delay: "2.4s" },
  { cx: 620, cy: 640, delay: "3s" },
];

const bits = ["1011", "0110", "1101", "0011", "1001", "0101"];

export function AiDataBackground() {
  return (
    <div aria-hidden className="ai-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="ai-bg-grid absolute inset-0" />
      <div className="ai-bg-orb ai-bg-orb-blue" />
      <div className="ai-bg-orb ai-bg-orb-purple" />
      <div className="ai-bg-orb ai-bg-orb-orange" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.4]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="aibg-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.5" />
            <stop offset="55%" stopColor="var(--brand-purple)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--brand-orange)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <g stroke="url(#aibg-line)" strokeWidth="1" fill="none">
          {streams.map((s) => (
            <path key={s.d} d={s.d} />
          ))}
          <path d="M280 90 L280 330" />
          <path d="M760 210 L760 450" />
          <path d="M460 480 L460 640" />
          <path d="M980 330 L980 600" />
        </g>

        <g fill="none" strokeLinecap="round" strokeWidth="2">
          {streams.map((s, i) => (
            <path
              key={`flow-${s.d}`}
              className="connector-flow"
              stroke={i % 2 === 0 ? "var(--brand-orange)" : "var(--brand-blue)"}
              style={{ animationDelay: s.delay }}
              d={s.d}
            />
          ))}
        </g>

        <g fill="var(--brand-blue)">
          {nodes.map((n) => (
            <circle
              key={`${n.cx}-${n.cy}`}
              className="connector-node"
              style={{ animationDelay: n.delay }}
              cx={n.cx}
              cy={n.cy}
              r="3"
            />
          ))}
        </g>

        <g className="ai-bg-rings" stroke="var(--brand-purple)" fill="none" strokeOpacity="0.5">
          <circle cx="1010" cy="180" r="70" strokeDasharray="4 10" />
          <circle cx="1010" cy="180" r="112" strokeDasharray="2 14" strokeOpacity="0.3" />
          <circle cx="190" cy="700" r="58" strokeDasharray="4 10" strokeOpacity="0.35" />
        </g>
      </svg>

      <div className="absolute inset-0">
        {bits.map((b, i) => (
          <span
            key={b}
            className="ai-bg-bit font-mono"
            style={{ left: `${8 + i * 15}%`, animationDelay: `${i * 1.7}s` }}
          >
            {b}
          </span>
        ))}
      </div>

      <div className="ai-bg-scan" />
    </div>
  );
}
