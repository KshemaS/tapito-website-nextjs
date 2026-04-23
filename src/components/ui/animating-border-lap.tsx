export default function AnimatedBorderLapSVG() {
  return (
    <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 960 640"
          style={{ zIndex: 3 }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="vstrip_gradient" y2="1" x2="0">
              <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
              <stop offset=".2" stopColor="#fff"></stop>
              <stop offset=".8" stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <mask id="vstrip_fade_mask" maskContentUnits="objectBoundingBox">
              <path fill="url(#vstrip_gradient)" d="M0 0h2v1H0z"></path>
            </mask>
          </defs>

          {/* Top Side Curves */}
          <g transform="translate(480, 0) rotate(0) scale(1.5, 1) translate(-160, 80)">
            <g stroke="#05a0ec" strokeDasharray="0.1 5" strokeDashoffset="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <animate attributeName="stroke-dashoffset" values="0;5000" dur="300s" calcMode="linear" repeatCount="indefinite"></animate>
              <path d="M148 81V49a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1"></path>
              <path d="M172 81V49a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1"></path>
            </g>
          </g>

          {/* Bottom Side Curves */}
          <g transform="translate(480, 510) rotate(180) scale(1.5, 1.2) translate(-160, -49)">
            <g stroke="#05a0ec" strokeDasharray="0.1 5" strokeDashoffset="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <animate attributeName="stroke-dashoffset" values="0;5000" dur="300s" calcMode="linear" repeatCount="indefinite"></animate>
              <path d="M148 81V49a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1"></path>
              <path d="M172 81V49a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1"></path>
            </g>
          </g>

          {/* Left Side Curves */}
          <g transform="translate(180, 240) rotate(270) scale(1.3, 1) translate(-216, 56)">
            <g stroke="#05a0ec" strokeDasharray="0.1 5" strokeDashoffset="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <animate attributeName="stroke-dashoffset" values="0;5000" dur="300s" calcMode="linear" repeatCount="indefinite"></animate>
              <path d="M148 81V49a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1"></path>
              <path d="M172 81V49a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1"></path>
            </g>
          </g>

          {/* Right Side Curves */}
          <g transform="translate(786, 245) rotate(90) scale(1.3, 1.1) translate(-110, 56)">
            <g stroke="#05a0ec" strokeDasharray="0.1 5" strokeDashoffset="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <animate attributeName="stroke-dashoffset" values="0;5000" dur="300s" calcMode="linear" repeatCount="indefinite"></animate>
              <path d="M148 81V49a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1"></path>
              <path d="M160 80V0"></path>
              <path d="M172 81V49a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1"></path>
            </g>
          </g>
    </svg>
  );
}