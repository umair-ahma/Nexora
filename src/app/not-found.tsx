import React from 'react';
import Link from 'next/link';
import { Home, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { BRAND_INFO } from '@/data/nexoraData';

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 flex-1 flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brandBlue text-xs font-extrabold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>404 — Page Not Found</span>
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          We Couldn&apos;t Find That Page.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          The page you are looking for may have moved or been updated. Explore our Perth cleaning
          services below or request a 100% free quote in 3 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-brandBlue text-white font-heading font-bold text-sm shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/services"
            className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 text-slate-900 font-heading font-bold text-sm shadow-sm transition-colors"
          >
            <span>Browse Services</span>
            <ArrowRight className="w-4 h-4 text-brandBlue" />
          </Link>

          <Link
            href="/contact#quote-form"
            className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-sm shadow-md transition-opacity hover:opacity-95"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-4">
          <a
            href={BRAND_INFO.phoneHref}
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 text-sm font-heading font-bold text-brandBlue hover:underline"
          >
            <Phone className="w-4 h-4" />
            <span>Need help right away? Call {BRAND_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
