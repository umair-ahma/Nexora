'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  BadgePercent,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Star,
  ChevronDown,
  Search,
  Package,
} from 'lucide-react';
import {
  BRAND_INFO,
  HOME_CORE_TILES,
  TRUST_BADGE_PILLS,
  INDUSTRIES_DATA,
  TRUST_CREDENTIALS,
  WHY_CHOOSE_NEXORA,
  HOW_IT_WORKS_STEPS,
  PERTH_REGIONS,
  HOME_FAQS,
  TESTIMONIALS,
  CLEANING_SUPPLIES,
} from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const [activeTileId, setActiveTileId] = useState<string | null>(null);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>(
    'End-of-Lease / Bond / Vacate Cleaning'
  );
  const [homePostcodeQuery, setHomePostcodeQuery] = useState<string>('');

  const canHover = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const handleTileQuoteClick = (serviceTitle: string) => {
    setSelectedQuoteService(serviceTitle);
    const el = document.getElementById('final-enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById('final-enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col bg-white">
      {/* =====================================================================
          SECTION 1: HERO SECTION (Dual Background Photos + Icon Trust Pills — PDF p. 1)
      ===================================================================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-14 sm:py-24 lg:py-28 border-b border-slate-200">
        {/* Dual Side Background Photos at Full Base Opacity Behind Translucent Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-hidden"
        >
          <div
            className="hero-bg-motion bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/bg/nexora-driveway-pressure.jpg')",
            }}
          />
          <div
            className="hero-bg-motion bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/bg/nexora-van-crew.jpg')",
            }}
          />
        </div>

        {/* Translucent Overlay: Clear on Left/Right Flanks so Both Photos Show, Darker in Center for Crisp Text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/75 to-slate-950/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/40"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Compact Compliance Icon Badges Above Headline (PDF p. 1) */}
            <div className="scroll-heading-reveal flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {TRUST_BADGE_PILLS.map((badge) => (
                <div
                  key={badge.label}
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/60 hover:bg-slate-950/80 border border-white/25 backdrop-blur-md text-[11px] sm:text-xs font-heading font-bold text-white shadow-sm transition-all"
                >
                  <span className="hover-icon-bounce text-brandCyan">
                    <DynamicIcon name={badge.iconName} className="w-3.5 h-3.5" />
                  </span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="scroll-heading-reveal font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-sm">
              Professional Cleaning Solutions Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandCyan via-sky-200 to-brandCyan">
                Western Australia.
              </span>
            </h1>

            <p className="scroll-heading-reveal text-sm sm:text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
              Reliable, police-checked cleaning for Perth homes, offices, schools, builders, and
              NDIS participants — with upfront pricing locked in before work begins.
            </p>

            {/* Primary CTAs */}
            <div className="scroll-heading-reveal flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
              <a
                href="#final-enquiry"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandRoyal hover:to-brandBlue text-white font-heading font-extrabold text-sm sm:text-base shadow-[0_10px_30px_rgba(0,128,240,0.45)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-heading font-bold text-sm sm:text-base backdrop-blur-md transition-all"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Concise Price-Beat Guarantee Strip */}
            <div className="scroll-heading-reveal pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-white">
              <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-300 bg-slate-950/60 border border-emerald-400/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                <BadgePercent className="w-4 h-4 text-emerald-400 shrink-0" />
                100% Free Quote in 3 Minutes • We Beat Any Comparable Quote by 5%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: TRUST & CREDENTIALS STRIP — Icon + Heading ONLY (PDF p. 2)
      ===================================================================== */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="scroll-heading-reveal text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
              Verified Trust &amp; Credentials
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
              Screened, Insured &amp; Accredited Across WA
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5">
            {TRUST_CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className="scroll-card-snap group bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-brandBlue/50 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="scroll-icon-bounce hover-icon-bounce w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-50 border border-sky-200/80 text-brandBlue flex items-center justify-center shadow-sm">
                  <DynamicIcon name={cred.iconName} className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  {cred.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: OUR CLEANING SERVICES — 6 Hover/Tap Pop-Down Tiles (PDF p. 3 & 7)
      ===================================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="scroll-heading-reveal flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                Our Cleaning Services
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
                Tailored Cleaning Solutions Across Perth &amp; WA
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Tap or hover any division below to reveal our specialised services, or request a
                free upfront quote in under 60 seconds.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={CLEANING_SUPPLIES.mailtoHref}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 text-brandBlue font-heading font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Package className="w-4 h-4" />
                <span>Cleaning Supplies</span>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-brandBlue text-white font-heading font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 6 Core Hover / Tap Pop-Down Service Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-start">
            {HOME_CORE_TILES.map((tile) => {
              const isExpanded = activeTileId === tile.id;
              return (
                <div
                  key={tile.id}
                  onMouseEnter={() => {
                    if (canHover()) setActiveTileId(tile.id);
                  }}
                  onMouseLeave={() => {
                    if (canHover()) setActiveTileId((prev) => (prev === tile.id ? null : prev));
                  }}
                  className={`scroll-card-snap group bg-white rounded-3xl border transition-all duration-300 p-5 sm:p-7 ${
                    isExpanded
                      ? 'border-brandBlue shadow-xl ring-1 ring-brandBlue/20'
                      : 'border-slate-200/90 hover:border-brandBlue/50 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTileId(isExpanded ? null : tile.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left flex items-start justify-between gap-3.5"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="scroll-icon-bounce hover-icon-bounce w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brandBlue to-brandCyan text-white flex items-center justify-center shrink-0 shadow-md">
                        <DynamicIcon name={tile.iconName} className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-heading font-extrabold text-base sm:text-xl text-slate-900 group-hover:text-brandBlue transition-colors">
                          {tile.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {tile.tag}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`mt-1 p-1.5 rounded-xl bg-slate-100 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isExpanded ? 'rotate-180 bg-sky-50 text-brandBlue' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Smooth Pop-Down Sub-Services Drawer */}
                  <div className={`pop-down-drawer ${isExpanded ? 'is-open' : ''}`}>
                    <div className="pop-down-inner">
                      <div className="pt-4 mt-4 border-t border-slate-100 space-y-4">
                        <ul className="space-y-1.5">
                          {tile.links.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-700 hover:text-brandBlue py-1.5 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                              >
                                <span className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                  <span>{sub.label}</span>
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              </Link>
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100">
                          <Link
                            href={tile.href}
                            className="inline-flex items-center gap-1 text-xs font-heading font-bold text-slate-700 hover:text-brandBlue"
                          >
                            <span>Explore Division</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <button
                            type="button"
                            onClick={() => handleTileQuoteClick(tile.quoteService)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-xs shadow-sm transition-colors"
                          >
                            <span>Get a Quote</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: INDUSTRIES WE SUPPORT — Icon + Heading Only + Hover Pop (PDF p. 4)
      ===================================================================== */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="scroll-heading-reveal text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
              Industries We Support
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
              Equipped &amp; Screened for WA&apos;s Core Sectors
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Select any sector below to view our tailored compliance standards and service packages.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {INDUSTRIES_DATA.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries#${industry.id}`}
                className="scroll-card-snap group bg-slate-50/70 hover:bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 hover:border-brandBlue/50 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center justify-center"
              >
                <div className="scroll-icon-bounce hover-icon-bounce w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-50 border border-sky-200/80 text-brandBlue group-hover:bg-brandBlue group-hover:text-white flex items-center justify-center mb-3 transition-colors shadow-sm">
                  <DynamicIcon name={industry.iconName} className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <h3 className="font-heading font-bold text-sm sm:text-lg text-slate-900 group-hover:text-brandBlue transition-colors leading-snug">
                  {industry.title}
                </h3>

                {/* Concise 1-liner smoothly pops down on desktop hover */}
                <div className="pop-down-drawer hover-open w-full">
                  <div className="pop-down-inner">
                    <p className="text-xs text-slate-600 leading-relaxed pt-2.5 mt-2.5 border-t border-slate-100">
                      {industry.shortDesc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: WHY CHOOSE NEXORA (Light, High-Whitespace Layout)
      ===================================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="scroll-heading-reveal text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
              Why Choose Nexora?
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
              The Real Differences That Set Us Apart
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Documented checklists, supervisor quality inspections, locked-in upfront quotes, and
              fully screened WA staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {WHY_CHOOSE_NEXORA.map((item) => (
              <div
                key={item.title}
                className="scroll-card-snap group bg-white border border-slate-200/90 hover:border-brandBlue/50 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="scroll-icon-bounce hover-icon-bounce w-12 h-12 rounded-2xl bg-gradient-to-br from-brandBlue to-brandCyan text-white flex items-center justify-center mb-4 shadow-md">
                  <DynamicIcon name={item.iconName} className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: HOW IT WORKS (4 Simple Steps + Client Reviews)
      ===================================================================== */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-10 sm:space-y-12">
            <div className="scroll-heading-reveal text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                Simple 4-Step Process
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
                How It Works
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Booking professional cleaning across Perth takes under 60 seconds with zero
                obligation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="scroll-card-snap group bg-slate-50/80 hover:bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-brandBlue/40 shadow-sm hover:shadow-md transition-all"
                >
                  <span className="scroll-icon-bounce hover-icon-bounce inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brandBlue text-white font-heading font-extrabold text-base mb-4 shadow-sm">
                    {step.stepNumber}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Perth Customer Reviews */}
          <div className="pt-8 border-t border-slate-100 space-y-8">
            <div className="scroll-heading-reveal text-center max-w-2xl mx-auto space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                Local Client Feedback
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Trusted Across Perth Suburbs
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="scroll-card-snap bg-slate-50/70 rounded-3xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60">
                    <p className="font-heading font-bold text-sm text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.suburb}, WA • <span className="text-brandBlue">{t.service}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: COMBINED PERTH COVERAGE + HOVER-OPENING FAQS (PDF p. 5 & 6)
      ===================================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50/80 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column (5 Cols): Concise Tailored Perth Coverage + Postcode Check */}
            <div className="lg:col-span-5 space-y-6">
              <div className="scroll-heading-reveal space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                  Areas We Service
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tailored Across Perth &amp; WA
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  From Joondalup and Yanchep in the north down to Fremantle, Rockingham, and
                  Mandurah in the south, and out east to Midland, Ellenbrook, and the Perth Hills.
                </p>
              </div>

              {/* Quick Postcode / Suburb Bar that pre-fills Quote Form */}
              <form
                onSubmit={handlePostcodeCheck}
                className="scroll-card-snap bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2"
              >
                <Search className="w-5 h-5 text-brandBlue ml-2 shrink-0" />
                <input
                  type="text"
                  value={homePostcodeQuery}
                  onChange={(e) => setHomePostcodeQuery(e.target.value)}
                  placeholder="Enter your Perth postcode or suburb..."
                  className="flex-1 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none py-2 min-w-0"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-xs shrink-0 transition-colors"
                >
                  Get Quote
                </button>
              </form>

              {/* Compact 6 Region Badges */}
              <div className="grid grid-cols-2 gap-2.5">
                {PERTH_REGIONS.map((region) => (
                  <Link
                    key={region.id}
                    href={`/service-areas#${region.id}`}
                    className="scroll-card-snap p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-brandBlue/50 shadow-sm transition-all group"
                  >
                    <p className="font-heading font-bold text-xs text-slate-900 group-hover:text-brandBlue line-clamp-1">
                      {region.regionName}
                    </p>
                    <p className="text-[11px] font-semibold text-brandBlue mt-0.5">
                      Postcodes {region.postcodeRange}
                    </p>
                  </Link>
                ))}
              </div>

              {/* 3 Concise Service Commitments */}
              <div className="scroll-card-snap bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brandBlue shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700">
                    <strong className="text-slate-900">Upfront Fixed Quotes:</strong> Confirmed
                    before work begins with zero hidden callout fees.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <BadgePercent className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700">
                    <strong className="text-slate-900">5% Price-Beat Guarantee:</strong> We beat any
                    comparable written WA quote by 5%.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-brandBlue shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700">
                    <strong className="text-slate-900">72-Hr Bond Rectification:</strong> Free
                    return support if your property manager flags a checklist item.
                  </p>
                </div>
              </div>

              <Link
                href="/service-areas"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-brandBlue hover:underline"
              >
                <span>Check Postcode on Our Service Areas Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column (7 Cols): Hover-Opening FAQs (PDF p. 6) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="scroll-heading-reveal space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                  Common Questions
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Tap or hover any question below to view the answer right away.
                </p>
              </div>

              <FaqAccordion items={HOME_FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: FINAL ENQUIRY SECTION ("Let's Get Your Space Clean.")
      ===================================================================== */}
      <section
        id="final-enquiry"
        className="py-16 sm:py-24 bg-white border-t border-slate-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="scroll-heading-reveal space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-brandBlue text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  100% Free Quote in 3 Minutes
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Let&apos;s Get Your Space Clean.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Request a quote without having to call first. Only your{' '}
                  <strong className="text-slate-900">Name</strong>,{' '}
                  <strong className="text-slate-900">Phone</strong>, and{' '}
                  <strong className="text-slate-900">Suburb/Postcode</strong> are required — all
                  other fields are optional.
                </p>
              </div>

              {/* Price Beat Highlight Box */}
              <div className="scroll-card-snap p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-800 font-heading font-bold text-sm">
                  <BadgePercent className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>We Will Beat All Quotes by 5%</span>
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Free, no-obligation quote — price confirmed before work begins. Mention any
                  comparable written quote in the notes and we will beat it by 5%.
                </p>
              </div>

              {/* Direct Contact Cards (Phone, SMS, Email) */}
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="scroll-card-snap flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-brandBlue transition-all shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-brandBlue flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Call Us
                      </span>
                      <span className="font-heading font-bold text-sm text-slate-900">
                        {BRAND_INFO.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`${BRAND_INFO.smsHref}?body=${encodeURIComponent(
                      "G'day Nexora Cleaning! I'd like a free quote in Perth."
                    )}`}
                    className="scroll-card-snap flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-brandBlue transition-all shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-brandBlue flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Text / SMS
                      </span>
                      <span className="font-heading font-bold text-sm text-slate-900">
                        {BRAND_INFO.mobileDisplay}
                      </span>
                    </div>
                  </a>
                </div>

                <a
                  href={`mailto:${BRAND_INFO.mainEmail}`}
                  className="scroll-card-snap flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-brandBlue transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-brandBlue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Email Enquiries
                    </span>
                    <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      {BRAND_INFO.mainEmail}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      Management: {BRAND_INFO.adminEmail} • Support: {BRAND_INFO.accountsEmail}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column (7 Cols) */}
            <div className="lg:col-span-7">
              <QuoteForm
                defaultService={selectedQuoteService}
                defaultSuburb={homePostcodeQuery}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
