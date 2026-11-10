'use client';

import React, { useEffect, useRef } from 'react';

interface BrushHeadInfo {
  x: number;
  y: number;
  angle: number;
}

const BRUSH_PATHS = [
  // Brush 0 (Top-Left Corner -> Sweeps Pacman-style -> Draws Outer Water Droplet + Swoosh)
  {
    id: 'droplet',
    color: '#0080F0',
    glowColor: '#10C0FF',
    width: 11,
    d: 'M -90 -60 L -90 220 L 140 220 L 140 430 L 340 430 C 375 330, 440 230, 500 115 C 555 215, 610 295, 635 370 C 660 280, 620 265, 585 280 C 675 290, 685 375, 595 450 C 520 505, 445 525, 455 568 C 470 610, 585 590, 638 495 C 595 605, 495 628, 435 588 C 335 535, 305 385, 340 430',
  },
  // Brush 1 (Top-Right Corner -> Sweeps Pacman-style -> Draws Inner House Roof, Wall, Window & Sparkle Star)
  {
    id: 'house',
    color: '#10C0FF',
    glowColor: '#38BDF8',
    width: 9.5,
    d: 'M 1090 -60 L 820 -60 L 820 195 L 665 195 L 642 150 L 652 192 L 690 202 L 652 212 L 642 254 L 632 212 L 594 202 L 632 192 L 642 150 L 585 295 L 492 232 L 418 298 L 418 538 L 448 558 L 448 328 L 492 288 L 595 378 L 520 385 L 472 385 L 472 340 L 515 340 L 515 385 L 493 385 L 493 340',
  },
  // Brush 2 (Bottom-Left Corner -> Sweeps Pacman-style -> Draws NEX + Main Cyan Forward Slash of X)
  {
    id: 'x-cyan',
    color: '#10C0FF',
    glowColor: '#0080F0',
    width: 12,
    d: 'M -90 1060 L 95 1060 L 95 815 L 155 815 L 155 755 L 155 645 L 245 755 L 245 645 L 285 645 L 285 755 L 365 755 L 285 700 L 350 700 L 285 645 L 370 645 L 365 755 L 465 640 L 498 635 L 395 755',
  },
  // Brush 3 (Bottom-Right Corner -> Sweeps Pacman-style -> Draws VXA <- R <- O <- Backslash of X)
  {
    id: 'x-navy',
    color: '#0284C7',
    glowColor: '#10C0FF',
    width: 11,
    d: 'M 1090 1060 L 1090 830 L 895 830 L 845 755 L 795 645 L 745 755 L 710 755 L 675 702 L 712 702 C 735 702, 735 645, 712 645 L 635 645 L 635 755 L 555 755 C 505 755, 505 645, 555 645 C 605 645, 605 755, 555 755 L 492 755 L 385 645 L 420 645 L 522 755',
  },
];

export default function ScrollLogoBackground() {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const glowPathRefs = useRef<(SVGPathElement | null)[]>([]);
  const headGroupRefs = useRef<(SVGGElement | null)[]>([]);
  const centerBadgeRef = useRef<SVGGElement | null>(null);
  const pathLengthsRef = useRef<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure exact total SVG path lengths once mounted
    pathRefs.current.forEach((p, idx) => {
      if (p) {
        try {
          pathLengthsRef.current[idx] = p.getTotalLength();
        } catch {
          pathLengthsRef.current[idx] = 2400;
        }
      }
    });

    let rafId: number | null = null;

    const updateBrushPositions = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const scrollRatio = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      // Symmetric 0 -> 1 (at 50% scroll) -> 0 (at 100% scroll)
      // With a subtle plateau around 0.45..0.55 so the completed Nexora logo + X holds cleanly at the midpoint
      let rawPhase = 1 - Math.abs(scrollRatio * 2 - 1);
      // Smooth ease-in-out curve with brief midpoint lock
      const p = Math.min(1, Math.max(0, rawPhase * 1.12));

      // Self-cleaning trail window:
      // As the brush moves from 0 -> 0.65, the tail chases behind it (Pac-Man style self-cleaning trail).
      // As p approaches 1.0 (midpoint of page), the logo strokes lock into full view so the completed
      // Nexora droplet + house + NEXORA "X" mark are clearly recognizable at the center of the scroll!
      // When scrolling past 50% toward the footer, p reverses 1 -> 0, so the brushes retrace and vanish back into their corners.
      pathRefs.current.forEach((pathEl, idx) => {
        const totalLen = pathLengthsRef.current[idx] || 2400;
        if (!pathEl || totalLen === 0) return;

        // Head of the brush travels from 0 to totalLen
        const headDist = p * totalLen;

        // Self-cleaning tail calculation:
        // Early/mid travel (p < 0.72): tail erases behind the brush leaving a 34% active wet-clean trail.
        // Near midpoint (p >= 0.72 -> 1.0): the logo portion (last 62% of path) stays visible while the corner entry tracks self-clean!
        const cornerTrackLen = totalLen * 0.36;
        let tailDist = 0;
        if (p < 0.42) {
          tailDist = Math.max(0, headDist - totalLen * 0.28);
        } else {
          // Corner entry tracks have finished self-cleaning; keep the logo strokes visible up to the midpoint
          const cleanCornerProgress = Math.min(1, (p - 0.15) / 0.35);
          tailDist = cornerTrackLen * cleanCornerProgress;
        }

        const visibleLen = Math.max(2, headDist - tailDist);
        const dashArray = `0 ${tailDist.toFixed(1)} ${visibleLen.toFixed(1)} ${totalLen.toFixed(1)}`;

        pathEl.style.strokeDasharray = dashArray;
        const glowEl = glowPathRefs.current[idx];
        if (glowEl) {
          glowEl.style.strokeDasharray = dashArray;
        }

        // Compute brush head (x, y) and tangent angle along the path
        const headGroup = headGroupRefs.current[idx];
        if (headGroup) {
          if (p <= 0.015) {
            headGroup.style.opacity = '0';
          } else {
            const clampedDist = Math.min(totalLen, Math.max(0, headDist));
            const pt = pathEl.getPointAtLength(clampedDist);
            const prevPt = pathEl.getPointAtLength(Math.max(0, clampedDist - 8));
            const nextPt = pathEl.getPointAtLength(Math.min(totalLen, clampedDist + 8));

            // Flip heading direction when reversing (scrollRatio > 0.5) so the brush faces its direction of travel
            const dx = scrollRatio <= 0.5 ? nextPt.x - prevPt.x : prevPt.x - nextPt.x;
            const dy = scrollRatio <= 0.5 ? nextPt.y - prevPt.y : prevPt.y - nextPt.y;
            const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

            headGroup.style.opacity = Math.min(1, p * 4).toFixed(2);
            headGroup.setAttribute(
              'transform',
              `translate(${pt.x.toFixed(1)}, ${pt.y.toFixed(1)}) rotate(${angleDeg.toFixed(1)})`
            );
          }
        }
      });

      // Subtle center completion glow when scroll is near the middle (p > 0.78)
      if (centerBadgeRef.current) {
        const badgeOpacity = p > 0.72 ? Math.min(1, (p - 0.72) / 0.22) : 0;
        centerBadgeRef.current.style.opacity = badgeOpacity.toFixed(2);
        centerBadgeRef.current.style.transform = `scale(${(0.92 + badgeOpacity * 0.08).toFixed(3)})`;
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateBrushPositions();
        rafId = null;
      });
    };

    updateBrushPositions();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none flex items-center justify-center"
    >
      {/* Subtle blueprint grid / floor tile texture in negative z-space */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(16, 192, 255, 0.14) 0%, transparent 70%), linear-gradient(to right, rgba(14, 165, 233, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.06) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      />

      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full max-w-[1150px] max-h-[1150px] opacity-[0.38] sm:opacity-[0.42]"
      >
        <defs>
          <filter id="nexora-wet-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="nexora-x-slash-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0060E0" />
            <stop offset="50%" stopColor="#0080F0" />
            <stop offset="100%" stopColor="#10C0FF" />
          </linearGradient>

          <linearGradient id="nexora-droplet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10C0FF" />
            <stop offset="60%" stopColor="#0080F0" />
            <stop offset="100%" stopColor="#0050C8" />
          </linearGradient>
        </defs>

        {/* Faint guide ghost of the center X and droplet when brushes converge at midpoint */}
        <g
          ref={centerBadgeRef}
          style={{
            opacity: 0,
            transformOrigin: '500px 520px',
            transition: 'opacity 120ms linear',
          }}
        >
          {/* Soft ambient halo behind completed logo at scroll midpoint */}
          <circle
            cx="500"
            cy="430"
            r="240"
            fill="url(#nexora-droplet-grad)"
            opacity="0.08"
          />
          {/* Prominent Stylized NEXORA "X" Centerpiece Highlight at Midpoint */}
          <path
            d="M 385 645 L 522 755"
            stroke="#0F172A"
            strokeWidth="22"
            strokeLinecap="round"
            opacity="0.22"
          />
          <path
            d="M 388 758 L 495 636"
            stroke="url(#nexora-x-slash-grad)"
            strokeWidth="24"
            strokeLinecap="round"
            filter="url(#nexora-wet-glow)"
            opacity="0.55"
          />
          <text
            x="500"
            y="810"
            textAnchor="middle"
            fill="#0284C7"
            opacity="0.35"
            className="font-heading font-extrabold tracking-[0.45em] text-[22px]"
          >
            CLEANING CO. • WA
          </text>
        </g>

        {/* 4 Self-Cleaning Brush Trails (2 draw the Droplet + House Emblem, 2 draw NEXORA + Center X) */}
        {BRUSH_PATHS.map((bp, idx) => (
          <g key={bp.id}>
            {/* Soft Wet-Clean Foam Aura */}
            <path
              ref={(el) => {
                glowPathRefs.current[idx] = el;
              }}
              d={bp.d}
              fill="none"
              stroke={bp.glowColor}
              strokeWidth={bp.width * 2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.22"
              filter="url(#nexora-wet-glow)"
            />

            {/* Crisp Floor-Brush / Marker Track */}
            <path
              ref={(el) => {
                pathRefs.current[idx] = el;
              }}
              d={bp.d}
              fill="none"
              stroke={bp.color}
              strokeWidth={bp.width}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.72"
            />
          </g>
        ))}

        {/* 4 Animated Floor-Scrubber / Squeegee Brush Heads ("Pac-Man & Ghosts" gliding along tracks) */}
        {BRUSH_PATHS.map((bp, idx) => (
          <g
            key={`head-${bp.id}`}
            ref={(el) => {
              headGroupRefs.current[idx] = el;
            }}
            style={{ opacity: 0 }}
          >
            {/* Outer Squeegee / Rotary Scrubber Halo */}
            <circle r="18" fill={bp.glowColor} opacity="0.2" />

            {/* Rotary Floor Scrubber / Squeegee Head */}
            <rect
              x="-8"
              y="-16"
              width="14"
              height="32"
              rx="5"
              fill={bp.color}
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />

            {/* Bristle / Squeegee Blade Edge */}
            <line
              x1="6"
              y1="-14"
              x2="6"
              y2="14"
              stroke="#E0F2FE"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Trailing Bubble Sparkles */}
            <circle cx="-16" cy="-7" r="3.5" fill={bp.glowColor} opacity="0.75" />
            <circle cx="-24" cy="5" r="2.5" fill={bp.color} opacity="0.55" />
            <circle cx="-14" cy="9" r="2" fill="#38BDF8" opacity="0.65" />
          </g>
        ))}
      </svg>
    </div>
  );
}
