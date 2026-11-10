'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BadgePercent,
  X,
} from 'lucide-react';
import { PERTH_REGIONS, SERVICE_CATEGORIES } from '@/data/nexoraData';
import QuoteForm from '@/components/QuoteForm';

export default function ServiceAreasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [quoteForcedOpen, setQuoteForcedOpen] = useState(false);

  const isQuoteDrawerOpen = searchQuery.trim().length > 0 || quoteForcedOpen;

  const handleSelectRegion = (regionLabel: string) => {
    setSearchQuery(regionLabel);
    setQuoteForcedOpen(true);
    const el = document.getElementById('postcode-quote-drawer');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col bg-white">
      {/* =====================================================================
          HERO SECTION (Driveway Pressure Background + Centerpiece Postcode Bar — PDF p. 10)
      ===================================================================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-24 border-b border-slate-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hero-bg-motion bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg/nexora-driveway-pressure.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/75 to-slate-950/65"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-brandCyan/40 text-brandCyan text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>All Over Perth &amp; Greater Western Australia</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Check Your Perth <span className="text-brandCyan">Postcode &amp; Book</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Enter your postcode or suburb below — our instant quote form will pop down right away
            with your area pre-filled and zero metro travel surcharges.
          </p>

          {/* Centerpiece Postcode / Suburb Bar (PDF p. 10) */}
          <div className="pt-2 max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl border-2 border-brandCyan/60">
              <Search className="w-5 h-5 text-brandBlue ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your Perth postcode or suburb (e.g. 6000, Subiaco, Joondalup)..."
                aria-label="Enter Perth postcode or suburb"
                className="flex-1 px-3 py-3 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setQuoteForcedOpen(false);
                  }}
                  aria-label="Clear postcode"
                  className="p-2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setQuoteForcedOpen(true)}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-xs sm:text-sm shrink-0 shadow-md"
              >
                Start Quote
              </button>
            </div>

            {/* Quick Postcode Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs">
              <span className="text-slate-300">Quick select:</span>
              {['Perth CBD 6000', 'Subiaco 6008', 'Joondalup 6027', 'Fremantle 6160', 'Canning Vale 6155', 'Midland 6056'].map(
                (sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => handleSelectRegion(sample)}
                    className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-brandBlue text-white border border-white/20 transition-colors font-medium"
                  >
                    {sample}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          POP-DOWN QUOTE PROCESS (Appears as soon as Postcode / Suburb is entered — PDF p. 10)
      ===================================================================== */}
      <div id="postcode-quote-drawer" className="bg-sky-50/70 border-b border-sky-100 scroll-mt-24">
        <div className={`pop-down-drawer ${isQuoteDrawerOpen ? 'is-open' : ''}`}>
          <div className="pop-down-inner">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-base text-slate-900">
                      {searchQuery.trim()
                        ? `Yes! Our Perth Crew Services "${searchQuery.trim()}"`
                        : 'Instant Perth Metro Quote'}
                    </p>
                    <p className="text-xs text-slate-600">
                      No extra metro travel surcharge • 100% Free Quote in 3 Minutes • 5% Price Beat
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setQuoteForcedOpen(false);
                  }}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 self-end sm:self-center"
                >
                  Close Drawer ✕
                </button>
              </div>

              <QuoteForm defaultSuburb={searchQuery.trim()} />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          6 MAIN REGION PILLARS (Compact Cards Only — No 120-Tag Wall — PDF p. 10)
      ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="scroll-heading-reveal text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
              6 Core Perth Metro Corridors
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Main Service Regions Across Greater Perth
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Click any region pillar below to pre-fill its postcode corridor into our quote form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERTH_REGIONS.map((region) => (
              <div
                key={region.id}
                id={region.id}
                onClick={() =>
                  handleSelectRegion(`${region.regionName} (${region.postcodeRange})`)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSelectRegion(`${region.regionName} (${region.postcodeRange})`);
                  }
                }}
                className="scroll-card-snap group cursor-pointer bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-brandBlue shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="scroll-icon-bounce hover-icon-bounce w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/80 text-brandBlue group-hover:bg-brandBlue group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-heading font-extrabold px-3 py-1 rounded-full bg-white border border-slate-200 text-brandBlue">
                      Postcodes: {region.postcodeRange}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-brandBlue transition-colors">
                    {region.regionName}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {region.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Zero travel surcharge
                  </span>
                  <span className="inline-flex items-center gap-1 font-heading font-bold text-brandBlue group-hover:translate-x-0.5 transition-transform">
                    Select &amp; Quote <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* All Services Available Strip */}
          <div className="scroll-card-snap bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brandBlue">
                <Sparkles className="w-4 h-4" />
                Full Service Availability Across Perth
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                All Cleaning Divisions Available in Every Suburb
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From End-of-Lease Bond Cleaning and Regular House Cleaning to Office, School,
                Childcare, NDIS Approved Cleaning, Pre-Sale &amp; Builders Cleans, and Pressure
                Washing.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services#${cat.id}`}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-brandBlue hover:text-white text-slate-800 text-xs font-heading font-bold border border-slate-200 transition-colors shadow-sm"
                >
                  {cat.shortName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
