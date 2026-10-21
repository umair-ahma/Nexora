import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BadgePercent,
} from 'lucide-react';
import { INDUSTRIES_DATA } from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Industries We Serve | Homes, Offices, Schools, Childcare, Aged Care & Builders WA',
  description:
    'Nexora Cleaning Co supports homes, corporate offices, construction builders, schools, childcare centres, aged care, NDIS participants, events, and property managers across Western Australia.',
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#040814] via-[#08132B] to-[#0B1936] text-white py-16 sm:py-20 border-b border-brandCyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandCyan/15 border border-brandCyan/30 text-brandCyan text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Equipped &amp; Screened for Western Australia</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Industries We <span className="text-brandCyan">Serve</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Homes, offices, construction, education, childcare, aged care, events, property
              managers and other facilities that Nexora is equipped and trained to service across
              Perth and Western Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detailed Breakdown */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {INDUSTRIES_DATA.map((industry) => (
            <div
              key={industry.id}
              id={industry.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Info (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#070E20] to-[#0D1E40] text-brandCyan flex items-center justify-center shadow-md shrink-0">
                    <DynamicIcon name={industry.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brandBlue">
                      WA Sector Solution
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {industry.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {industry.fullDescription}
                </p>

                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Compliance &amp; Operational Standards:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {industry.complianceHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200/80"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Recommended Services & CTA (5 Cols) */}
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                <h3 className="font-heading font-bold text-base text-slate-900">
                  Dedicated Services for This Sector:
                </h3>

                <ul className="space-y-2">
                  {industry.recommendedServices.map((srv) => (
                    <li key={srv.slug}>
                      <Link
                        href={`/services/${srv.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-brandBlue text-xs sm:text-sm font-semibold text-slate-800 hover:text-brandBlue transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brandBlue shrink-0" />
                          {srv.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href="#industry-quote"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-xs sm:text-sm shadow-md"
                  >
                    <span>Request a Sector Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Quote Form */}
      <section
        id="industry-quote"
        className="py-20 bg-white border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brandBlue">
              <BadgePercent className="w-4 h-4" />
              We Beat All Comparable Written Quotes by 5%
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Request a Free Quote for Your Home or Facility
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              100% free quote within a few minutes — price confirmed before work begins.
            </p>
          </div>

          <QuoteForm defaultService="Office & Commercial Cleaning" />
        </div>
      </section>
    </div>
  );
}
