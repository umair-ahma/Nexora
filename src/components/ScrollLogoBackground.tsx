'use client';

import React, { useEffect, useRef } from 'react';

interface BrushTrack {
  id: string;
  color: string;
  auraColor: string;
  width: number;
  points: [number, number][];
}

// 3 Floor-Scrubber / Marker Brushes that emerge from 3 edges, sweep inward (Pac-Man style),
// write "NEXORA" across the center at 50% scroll, and reverse cleanly back out toward 100% scroll.
// Uses pure straight-line segments (zero SVG filters, zero DOM getPointAtLength calls during scroll)
// for locked 60fps performance on mobile and desktop.
const BRUSH_TRACKS: BrushTrack[] = [
  // Brush 1 (Left Edge -> Writes "N" and "E")
  {
    id: 'brush-ne',
    color: '#0080F0',
    auraColor: '#38BDF8',
    width: 14,
    points: [
      [-60, 120],
      [90, 120],
      [90, 380],
      // Letter N (x: 150..255, y: 220..380)
      [150, 380],
      [150, 220],
      [255, 380],
      [255, 220],
      // Bridge to E + Letter E (x: 300..400, y: 220..380)
      [300, 220],
      [400, 220],
      [300, 220],
      [300, 300],
      [385, 300],
      [300, 300],
      [300, 380],
      [405, 380],
    ],
  },
  // Brush 2 (Bottom Center -> Writes the signature "X" centerpiece of NEXORA)
  {
    id: 'brush-x',
    color: '#10C0FF',
    auraColor: '#0080F0',
    width: 16,
    points: [
      [510, 650],
      [510, 480],
      [445, 480],
      // Letter X (x: 445..575, y: 215..385)
      [445, 215],
      [575, 385],
      [575, 215],
      [445, 385],
    ],
  },
  // Brush 3 (Right Edge -> Writes "A", "R", and "O" moving inward from the right)
  {
    id: 'brush-ora',
    color: '#0284C7',
    auraColor: '#10C0FF',
    width: 14,
    points: [
      [1260, 480],
      [1110, 480],
      [1110, 380],
      // Letter A (Λ style, x: 940..1055, y: 220..380)
      [1055, 380],
      [998, 220],
      [940, 380],
      // Bridge to R + Letter R (x: 785..895, y: 220..380)
      [895, 380],
      [830, 305],
      [890, 305],
      [890, 220],
      [785, 220],
      [785, 380],
      // Bridge to O + Letter O (x: 620..735, y: 220..380)
      [735, 380],
      [735, 220],
      [620, 220],
      [620, 380],
      [735, 380],
    ],
  },
];

interface PrecomputedTrack {
  d: string;
  points: [number, number][];
  cumLengths: number[];
  angles: number[];
  totalLength: number;
}

const PRECOMPUTED_TRACKS: PrecomputedTrack[] = BRUSH_TRACKS.map((track) => {
  const pts = track.points;
  const cumLengths: number[] = [0];
  const angles: number[] = [];
  let total = 0;

  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i][0] - pts[i - 1][0];
    const dy = pts[i][1] - pts[i - 1][1];
    const segLen = Math.hypot(dx, dy);
    total += segLen;
    cumLengths.push(total);
    angles.push((Math.atan2(dy, dx) * 180) / Math.PI);
  }
  angles.push(angles[angles.length - 1] || 0);

  const d = pts
    .map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${pt[0]} ${pt[1]}`)
    .join(' ');

  return {
    d,
    points: pts,
    cumLengths,
    angles,
    totalLength: total,
  };
});

// Pure O(N) math lookup along the 15-vertex polyline (< 0.005ms, zero DOM layout calls!)
function samplePolyline(track: PrecomputedTrack, normProgress: number, reverseHeading: boolean) {
  const targetDist = Math.min(
    track.totalLength,
    Math.max(0, normProgress * track.totalLength)
  );
  const { points, cumLengths, angles } = track;

  let segIdx = 0;
  for (let i = 0; i < cumLengths.length - 1; i++) {
    if (targetDist <= cumLengths[i + 1]) {
      segIdx = i;
      break;
    }
    segIdx = i;
  }

  const segStart = cumLengths[segIdx];
  const segLen = Math.max(0.001, cumLengths[segIdx + 1] - segStart);
  const t = Math.min(1, Math.max(0, (targetDist - segStart) / segLen));

  const x = points[segIdx][0] + (points[segIdx + 1][0] - points[segIdx][0]) * t;
  const y = points[segIdx][1] + (points[segIdx + 1][1] - points[segIdx][1]) * t;
  let angle = angles[segIdx];
  if (reverseHeading) {
    angle += 180;
  }

  return { x, y, angle };
}

export default function ScrollLogoBackground() {
  const mainPathRefs = useRef<(SVGPathElement | null)[]>([]);
  const auraPathRefs = useRef<(SVGPathElement | null)[]>([]);
  const headRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let rafId: number | null = null;

    const updateBrushes = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const scrollRatio = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      // Symmetric 0 -> 1 (at 50% scroll) -> 0 (at 100% scroll)
      // Brief plateau around 46%..54% so "NEXORA" holds readable at the center of the page
      const rawPhase = 1 - Math.abs(scrollRatio * 2 - 1);
      const p = Math.min(1, Math.max(0, rawPhase * 1.1));
      const isReversing = scrollRatio > 0.5;

      // Normalized pathLength is 1000 for all 3 paths
      // Entry corner track is roughly the first 22% (220 units) of each path;
      // The letters of NEXORA occupy 220..1000.
      const headPos = p * 1000;

      // Self-cleaning tail: erases the entry tracks behind the brushes as they glide in,
      // leaving the letters of NEXORA cleanly drawn at the midpoint, then reversing back out.
      let tailPos = 0;
      if (p < 0.35) {
        tailPos = Math.max(0, headPos - 260);
      } else {
        const cleanEntry = Math.min(1, (p - 0.12) / 0.32);
        tailPos = 225 * cleanEntry;
      }

      const visibleLen = Math.max(1, headPos - tailPos);
      const dashArray = `0 ${tailPos.toFixed(1)} ${visibleLen.toFixed(1)} 1200`;
      const headOpacity = p <= 0.015 ? '0' : Math.min(1, p * 4).toFixed(2);

      for (let i = 0; i < PRECOMPUTED_TRACKS.length; i++) {
        const mainEl = mainPathRefs.current[i];
        const auraEl = auraPathRefs.current[i];
        const headEl = headRefs.current[i];

        if (mainEl) mainEl.style.strokeDasharray = dashArray;
        if (auraEl) auraEl.style.strokeDasharray = dashArray;

        if (headEl) {
          headEl.style.opacity = headOpacity;
          if (p > 0.015) {
            const { x, y, angle } = samplePolyline(PRECOMPUTED_TRACKS[i], p, isReversing);
            headEl.setAttribute(
              'transform',
              `translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${angle.toFixed(1)})`
            );
          }
        }
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateBrushes();
        rafId = null;
      });
    };

    updateBrushes();
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
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-w-[1350px] opacity-[0.34] sm:opacity-[0.38]"
      >
        {/* 3 Self-Cleaning Brush Trails Writing "NEXORA" */}
        {BRUSH_TRACKS.map((track, idx) => (
          <g key={track.id}>
            {/* Lightweight translucent wide stroke for wet-clean trail aura (NO SVG filter blur) */}
            <path
              ref={(el) => {
                auraPathRefs.current[idx] = el;
              }}
              d={PRECOMPUTED_TRACKS[idx].d}
              pathLength={1000}
              fill="none"
              stroke={track.auraColor}
              strokeWidth={track.width * 2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.18"
            />

            {/* Crisp Marker / Floor-Brush Stroke */}
            <path
              ref={(el) => {
                mainPathRefs.current[idx] = el;
              }}
              d={PRECOMPUTED_TRACKS[idx].d}
              pathLength={1000}
              fill="none"
              stroke={track.color}
              strokeWidth={track.width}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
            />
          </g>
        ))}

        {/* 3 Animated Floor-Brush Heads */}
        {BRUSH_TRACKS.map((track, idx) => (
          <g
            key={`head-${track.id}`}
            ref={(el) => {
              headRefs.current[idx] = el;
            }}
            style={{ opacity: 0, willChange: 'transform' }}
          >
            <circle r="16" fill={track.auraColor} opacity="0.2" />
            <rect
              x="-7"
              y="-15"
              width="13"
              height="30"
              rx="4"
              fill={track.color}
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <line
              x1="6"
              y1="-12"
              x2="6"
              y2="12"
              stroke="#E0F2FE"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
