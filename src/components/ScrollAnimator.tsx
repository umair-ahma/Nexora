'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimator() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    // 1. Scroll progress bar JS fallback when animation-timeline: scroll() is unsupported
    const supportsScrollTimeline =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline: scroll()');

    let onScroll: (() => void) | null = null;
    if (!supportsScrollTimeline && barRef.current) {
      onScroll = () => {
        if (!barRef.current) return;
        const doc = document.documentElement;
        const total = doc.scrollHeight - doc.clientHeight;
        const ratio = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
        barRef.current.style.transform = `scaleX(${ratio})`;
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // 2. View-timeline IntersectionObserver fallback when native view() is unsupported
    const supportsViewTimeline =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('(animation-timeline: view()) and (animation-range: entry)');

    let observer: IntersectionObserver | null = null;

    if (!supportsViewTimeline && 'IntersectionObserver' in window) {
      const elements = document.querySelectorAll<HTMLElement>(
        '.scroll-card-snap, .scroll-heading-reveal, .scroll-icon-bounce'
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('js-scroll-visible');
              entry.target.classList.remove('js-scroll-hidden');
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('js-scroll-visible');
        } else {
          el.classList.add('js-scroll-hidden');
          observer?.observe(el);
        }
      });
    }

    return () => {
      if (onScroll) window.removeEventListener('scroll', onScroll);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return (
    <div
      id="nexora-scroll-progress"
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-gradient-to-r from-brandCyan via-brandBlue to-emerald-400 pointer-events-none"
    />
  );
}
