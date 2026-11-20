'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  X,
} from 'lucide-react';
import { PERTH_REGIONS, SERVICE_CATEGORIES } from '@/data/nexoraData';
import QuoteForm from '@/components/QuoteForm';

type CoverageStatus = 'idle' | 'in-area' | 'regional-wa' | 'out-of-area' | 'unverified';

interface CoverageResult {
  status: CoverageStatus;
  heading: string;
  subtext: string;
}

function evaluateServiceAreaQuery(raw: string): CoverageResult {
  const query = raw.trim();
  if (!query) {
    return {
      status: 'idle',
      heading: 'Instant Perth Metro Quote',
      subtext:
        'No extra metro travel surcharge • 100% Free Quote in 3 Minutes • 5% Price Beat',
    };
  }

  // 1. Check 4-digit Australian postcode if present
  const postcodeMatch = query.match(/\b(\d{4})\b/);
  if (postcodeMatch) {
    const code = parseInt(postcodeMatch[1], 10);
    if (code >= 6000 && code <= 6214) {
      return {
        status: 'in-area',
        heading: `Yes! Our Perth Crew Services "${query}"`,
        subtext:
          'Greater Perth & Peel corridor (6000–6214) • Zero metro travel surcharge • Free quote in 3 minutes',
      };
    }
    if (code >= 6215 && code <= 6799) {
      return {
        status: 'regional-wa',
        heading: `"${query}" Is Regional WA (Outside Standard Perth Metro)`,
        subtext:
          'Our standard metro coverage is postcodes 6000–6214. Submit your details below to check regional WA availability.',
      };
    }
    return {
      status: 'out-of-area',
      heading: `"${query}" Is Outside Our Perth & WA Service Area`,
      subtext:
        'Nexora Cleaning Co operates in Greater Perth & Peel, WA (postcodes 6000–6214). Please double-check your WA postcode or contact us below.',
    };
  }

  // 2. Reject purely numeric non-4-digit inputs (e.g. "999", "123456")
  if (/^\d+$/.test(query)) {
    return {
      status: 'out-of-area',
      heading: `"${query}" Is Not a Valid Perth Metro Postcode`,
      subtext:
        'Enter a 4-digit Perth Metro / Peel postcode (6000–6214) or suburb name (e.g. Subiaco, Joondalup, Fremantle).',
    };
  }

  // 3. Match against known Perth suburbs, regions, or WA metro keywords
  const lower = query.toLowerCase();
  const matchedRegion = PERTH_REGIONS.find(
    (r) =>
      r.regionName.toLowerCase().includes(lower) ||
      lower.includes(r.regionName.toLowerCase()) ||
      r.suburbs.some(
        (s) =>
          s.toLowerCase() === lower ||
          (lower.length >= 3 && s.toLowerCase().includes(lower)) ||
          (s.length >= 4 && lower.includes(s.toLowerCase()))
      )
  );

  const metroKeywords = [
    'perth',
    'western australia',
    'fremantle',
    'joondalup',
    'mandurah',
    'rockingham',
    'midland',
    'subiaco',
    'peel',
    'swan valley',
    'hills',
  ];

  if (matchedRegion || metroKeywords.some((kw) => lower.includes(kw))) {
    return {
      status: 'in-area',
      heading: `Yes! Our Perth Crew Services "${query}"`,
      subtext: matchedRegion
        ? `${matchedRegion.regionName} (${matchedRegion.postcodeRange}) • Zero metro travel surcharge • Free quote in 3 minutes`
        : 'Greater Perth Metro coverage • Zero metro travel surcharge • Free quote in 3 minutes',
    };
  }

  return {
    status: 'unverified',
    heading: `We Couldn't Confirm "${query}" as a Perth Metro Suburb`,
    subtext:
      'We cover Greater Perth & Peel, WA (postcodes 6000–6214). Enter your 4-digit WA postcode or submit below so our coordinator can confirm.',
  };
}

export default function ServiceAreasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [quoteForcedOpen, setQuoteForcedOpen] = useState(false);

  const isQuoteDrawerOpen = searchQuery.trim().length > 0 || quoteForcedOpen;
  const coverage = evaluateServiceAreaQuery(searchQuery);

  const scrollDrawerIntoView = () => {
    window.requestAnimationFrame(() => {
      const el = document.getElementById('postcode-quote-drawer');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleStartQuote = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setQuoteForcedOpen(true);
    scrollDrawerIntoView();
  };

  const handleSelectRegion = (regionLabel: string) => {
    setSearchQuery(regionLabel);
    setQuoteForcedOpen(true);
    scrollDrawerIntoView();
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
            <span>Check Your Perth </span>
            <span className="text-brandCyan">Postcode &amp; Book</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Enter your postcode or suburb below — our instant quote form will pop down right away
            with your area pre-filled and zero metro travel surcharges.
          </p>

          {/* Centerpiece Postcode / Suburb Bar (PDF p. 10) */}
          <div className="pt-2 max-w-2xl mx-auto">
            <form
              onSubmit={handleStartQuote}
              className="relative flex items-center bg-white rounded-2xl p-1.5 sm:p-2 shadow-2xl border-2 border-brandCyan/60"
            >
              <label htmlFor="service-area-postcode-input" className="sr-only">
                Enter Perth postcode or suburb
              </label>
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-brandBlue ml-2.5 sm:ml-3 shrink-0" />
              <input
                id="service-area-postcode-input"
                name="postcode"
                type="text"
                autoComplete="postal-code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Perth postcode or suburb..."
                aria-label="Enter Perth postcode or suburb"
                className="flex-1 min-w-0 min-h-[44px] px-2.5 sm:px-3 py-2.5 sm:py-3 text-slate-900 placeholder:text-slate-400 text-base font-medium focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setQuoteForcedOpen(false);
                  }}
                  aria-label="Clear postcode"
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 text-slate-400 hover:text-slate-700 shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="min-h-[44px] px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-xs sm:text-sm shrink-0 shadow-md whitespace-nowrap"
              >
                Start Quote
              </button>
            </form>

            {/* Quick Postcode Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs">
              <span className="text-slate-300">Quick select:</span>
              {['Perth CBD 6000', 'Subiaco 6008', 'Joondalup 6027', 'Fremantle 6160', 'Canning Vale 6155', 'Midland 6056'].map(
                (sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => handleSelectRegion(sample)}
                    className="min-h-[44px] px-3.5 py-2 rounded-full bg-white/10 hover:bg-brandBlue text-white border border-white/20 transition-colors font-medium inline-flex items-center"
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
      <div id="postcode-quote-drawer" className="bg-sky-50/70 border-b border-sky-100 scroll-mt-20">
        <div className={`pop-down-drawer ${isQuoteDrawerOpen ? 'is-open' : ''}`}>
          <div className="pop-down-inner">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-6">
              <div
                role="status"
                aria-live="polite"
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border shadow-sm ${
                  coverage.status === 'out-of-area' || coverage.status === 'regional-wa' || coverage.status === 'unverified'
                    ? 'border-amber-300 bg-amber-50/40'
                    : 'border-emerald-200'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      coverage.status === 'out-of-area' || coverage.status === 'regional-wa' || coverage.status === 'unverified'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {coverage.status === 'out-of-area' || coverage.status === 'regional-wa' || coverage.status === 'unverified' ? (
                      <AlertTriangle className="w-6 h-6" />
                    ) : (
                      <CheckCircle2 className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-base text-slate-900">
                      {coverage.heading}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      {coverage.subtext}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setQuoteForcedOpen(false);
                  }}
                  className="min-h-[44px] px-3 inline-flex items-center text-xs font-semibold text-slate-600 hover:text-slate-900 self-end sm:self-center shrink-0"
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
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="scroll-icon-bounce hover-icon-bounce w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-50 border border-sky-200/80 text-brandBlue group-hover:bg-brandBlue group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-heading font-extrabold text-brandBlue block">
                          Postcodes: {region.postcodeRange}
                        </span>
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-brandBlue transition-colors leading-snug">
                          {region.regionName}
                        </h3>
                      </div>
                    </div>
                  </div>

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
                Childcare, NDIS Cleaning (Self &amp; Plan-Managed), Pre-Sale &amp; Builders Cleans,
                and Pressure Washing.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services#${cat.id}`}
                  className="min-h-[44px] inline-flex items-center px-4 py-2.5 rounded-xl bg-white hover:bg-brandBlue hover:text-white text-slate-800 text-xs font-heading font-bold border border-slate-200 transition-colors shadow-sm"
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
