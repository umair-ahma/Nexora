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
    let timerId: number | null = null;

    const revealAboveFoldNow = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        '.scroll-card-snap, .scroll-heading-reveal, .scroll-icon-bounce'
      );
      const viewportLimit = window.innerHeight + 120;
      elements.forEach((el) => {
        if (el.getAttribute('data-inview') === 'true') return;
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportLimit && rect.bottom > -40) {
          el.style.setProperty('--stagger-delay', '0ms');
          el.setAttribute('data-instant', 'true');
          el.setAttribute('data-inview', 'true');
        }
      });
    };

    const initScrollReveals = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        '.scroll-card-snap, .scroll-heading-reveal, .scroll-icon-bounce'
      );

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        elements.forEach((el) => {
          el.setAttribute('data-instant', 'true');
          el.setAttribute('data-inview', 'true');
        });
        return;
      }

      // Immediately reveal anything already visible in the initial viewport (critical for tall 4K screens)
      // and assign staggered cascade delays only to below-the-fold sibling cards
      const parentCounts = new Map<Element, number>();
      const viewportLimit = window.innerHeight + 120;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportLimit) {
          el.style.setProperty('--stagger-delay', '0ms');
          el.setAttribute('data-instant', 'true');
          el.setAttribute('data-inview', 'true');
          return;
        }
        if (el.classList.contains('scroll-card-snap') && el.parentElement) {
          const parent = el.parentElement;
          const idx = parentCounts.get(parent) || 0;
          const delayMs = (idx % 6) * 70;
          el.style.setProperty('--stagger-delay', `${delayMs}ms`);
          parentCounts.set(parent, idx + 1);
        }
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              target.setAttribute('data-inview', 'true');
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: '0px 0px 80px 0px',
        }
      );

      elements.forEach((el) => {
        observer?.observe(el);
      });
    };

    // Reveal immediately, then re-verify after paint and layout settlement
    initScrollReveals();
    rafId = window.requestAnimationFrame(() => {
      revealAboveFoldNow();
    });
    timerId = window.setTimeout(() => {
      revealAboveFoldNow();
    }, 150);

    window.addEventListener('resize', revealAboveFoldNow, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      window.removeEventListener('resize', updateProgressBar);
      window.removeEventListener('resize', revealAboveFoldNow);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (timerId !== null) window.clearTimeout(timerId);
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
