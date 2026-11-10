'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimator() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Always-active Scroll Progress Bar
    const updateProgressBar = () => {
      if (!barRef.current) return;
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const ratio = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      barRef.current.style.transform = `scaleX(${ratio})`;
    };

    updateProgressBar();
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    window.addEventListener('resize', updateProgressBar, { passive: true });

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let observer: IntersectionObserver | null = null;
    let rafId: number | null = null;

    const initScrollReveals = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        '.scroll-card-snap, .scroll-heading-reveal, .scroll-icon-bounce'
      );

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('is-inview'));
        return;
      }

      // Assign staggered cascade delays to sibling cards inside the same grid/flex parent
      const parentCounts = new Map<Element, number>();
      elements.forEach((el) => {
        if (el.classList.contains('scroll-card-snap') && el.parentElement) {
          const parent = el.parentElement;
          const idx = parentCounts.get(parent) || 0;
          const delayMs = (idx % 6) * 85;
          el.style.setProperty('--stagger-delay', `${delayMs}ms`);
          parentCounts.set(parent, idx + 1);
        }
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              target.classList.add('is-inview');
            } else {
              // If element scrolled back down below viewport, reset so scrolling down replays animation
              const rect = entry.boundingClientRect;
              if (rect.top > window.innerHeight * 0.96) {
                target.classList.remove('is-inview');
              }
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -36px 0px',
        }
      );

      elements.forEach((el) => {
        observer?.observe(el);
      });
    };

    // Run after paint so all client components on the route have mounted
    rafId = window.requestAnimationFrame(() => {
      initScrollReveals();
    });

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      window.removeEventListener('resize', updateProgressBar);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return (
    <div
      id="nexora-scroll-progress"
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3.5px] z-50 bg-gradient-to-r from-brandCyan via-brandBlue to-emerald-400 pointer-events-none shadow-[0_1px_8px_rgba(16,192,255,0.6)]"
    />
  );
}
