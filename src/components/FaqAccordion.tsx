'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '@/data/nexoraData';

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex((prev) => (prev === index ? null : prev))}
            className={`scroll-card-snap rounded-2xl border transition-all duration-200 ${
              isOpen
                ? 'bg-white border-brandBlue/50 shadow-md'
                : 'bg-white border-slate-200/90 hover:border-brandBlue/40 shadow-sm'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
            >
              <span className="font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center gap-3">
                <HelpCircle
                  className={`w-5 h-5 shrink-0 transition-colors ${
                    isOpen ? 'text-brandBlue' : 'text-slate-400'
                  }`}
                />
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-brandBlue' : ''
                }`}
              />
            </button>

            <div className={`pop-down-drawer ${isOpen ? 'is-open' : ''}`}>
              <div className="pop-down-inner">
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
