export function ConnectorBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="h-full w-full opacity-[0.35]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="cbg-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.55" />
            <stop offset="55%" stopColor="var(--brand-purple)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--brand-orange)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <g stroke="url(#cbg-line)" strokeWidth="1.2" fill="none">
          <path d="M-40 120 L240 120 L360 240 L700 240 L820 120 L1240 120" />
          <path d="M-40 380 L180 380 L300 500 L640 500 L780 380 L1240 380" />
          <path d="M-40 660 L300 660 L420 540 L820 540 L940 660 L1240 660" />
          <path d="M240 120 L240 380" />
          <path d="M700 240 L700 500" />
          <path d="M420 540 L420 660" />
          <path d="M940 380 L940 660" />
        </g>
        <g stroke="var(--brand-orange)" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <path className="connector-flow" d="M-40 120 L240 120 L360 240 L700 240 L820 120 L1240 120" />
          <path
            className="connector-flow connector-flow-delay-1"
            d="M-40 380 L180 380 L300 500 L640 500 L780 380 L1240 380"
          />
          <path
            className="connector-flow connector-flow-delay-2"
            d="M-40 660 L300 660 L420 540 L820 540 L940 660 L1240 660"
          />
        </g>
        <g fill="var(--brand-blue)">
          <circle className="connector-node" cx="240" cy="120" r="3.5" />
          <circle className="connector-node connector-flow-delay-1" cx="700" cy="240" r="3.5" />
          <circle className="connector-node connector-flow-delay-2" cx="300" cy="500" r="3.5" />
          <circle className="connector-node connector-flow-delay-1" cx="820" cy="540" r="3.5" />
          <circle className="connector-node" cx="940" cy="660" r="3.5" />
        </g>
      </svg>
    </div>
  );
}
