'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  BadgePercent,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  Package,
  MessageSquare,
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  TRUST_BADGE_PILLS,
  CLEANING_SUPPLIES,
  getServicesByCategory,
  ServiceCategoryId,
} from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import ServiceCard from '@/components/ServiceCard';
import QuoteForm from '@/components/QuoteForm';

export default function ServicesOverviewPage() {
  const [openDivisionId, setOpenDivisionId] = useState<ServiceCategoryId | null>(null);

  const canHover = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // If user arrives via /services#commercial etc., automatically open that division
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '') as ServiceCategoryId;
      if (SERVICE_CATEGORIES.some((c) => c.id === hash)) {
        setOpenDivisionId(hash);
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* =====================================================================
          HERO BANNER (Van & Crew Background Behind Translucent Overlay + Compliance Pills — PDF p. 14)
      ===================================================================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-24 border-b border-slate-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hero-bg-motion bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg/nexora-van-crew.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-950/45"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-brandCyan/40 text-brandCyan text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Service Directory • Hover or Tap a Division Below</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Professional Cleaning Services Across{' '}
              <span className="text-brandCyan">Western Australia</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Every service comes with transparent scope, documented task checklists, and our 5%
              price beat guarantee. Hover or click any division below to reveal its services.
            </p>

            {/* Sleek Icon + Text Compliance Pills (PDF p. 14) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {TRUST_BADGE_PILLS.map((badge) => (
                <div
                  key={badge.label}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-heading font-bold text-white"
                >
                  <span className="scroll-icon-bounce hover-icon-bounce text-brandCyan">
                    <DynamicIcon name={badge.iconName} className="w-4 h-4" />
                  </span>
                  <span>{badge.label}</span>
                </div>
              ))}
              <a
                href={CLEANING_SUPPLIES.mailtoHref}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-brandBlue/90 hover:bg-brandBlue border border-brandCyan/40 text-xs font-heading font-bold text-white transition-colors"
              >
                <Package className="w-4 h-4 text-brandCyan" />
                <span>Cleaning Supplies</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Light Value Proposition Strip */}
      <section className="bg-sky-50/70 text-slate-800 py-3.5 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-2 font-semibold text-brandBlue">
            <Sparkles className="w-4 h-4" />
            100% Free Quote Within a Few Minutes
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-emerald-700">
            <BadgePercent className="w-4 h-4 text-emerald-600" />
            We Beat All Comparable Written Quotes by 5%
          </span>
          <span className="inline-flex items-center gap-2 text-slate-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-brandBlue" />
            Price Confirmed Before Work Begins
          </span>
        </div>
      </section>

      {/* =====================================================================
          4 MAIN DIVISIONS — HOVER / CLICK POP-DOWN ACCORDIONS (PDF p. 13)
      ===================================================================== */}
      <div className="py-16 sm:py-20 bg-slate-50/70 space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-6">
            Hover or click any division below to pop down all specialized services in that category:
          </p>

          <div className="space-y-5">
            {SERVICE_CATEGORIES.map((category, index) => {
              const services = getServicesByCategory(category.id);
              const isOpen = openDivisionId === category.id;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  onMouseEnter={() => {
                    if (canHover()) setOpenDivisionId(category.id);
                  }}
                  onMouseLeave={() => {
                    if (canHover())
                      setOpenDivisionId((prev) => (prev === category.id ? null : prev));
                  }}
                  className="scroll-card-snap scroll-mt-28"
                >
                  <div
                    className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                      isOpen
                        ? 'border-brandBlue shadow-xl ring-1 ring-brandBlue/20'
                        : 'border-slate-200/90 hover:border-brandBlue/50 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {/* Division Header Bar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <button
                        type="button"
                        onClick={() => setOpenDivisionId(isOpen ? null : category.id)}
                        aria-expanded={isOpen}
                        className="flex-1 text-left flex items-start gap-4 group"
                      >
                        <div className="scroll-icon-bounce hover-icon-bounce w-14 h-14 rounded-2xl bg-gradient-to-br from-brandBlue to-brandCyan text-white flex items-center justify-center shrink-0 shadow-md">
                          <DynamicIcon name={category.iconName} className="w-7 h-7" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                            Division 0{index + 1} • {services.length} Specialised Services
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-brandBlue transition-colors flex items-center gap-2">
                            <span>{category.name}</span>
                            <ChevronDown
                              className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-brandBlue' : ''
                              }`}
                            />
                          </h2>
                          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </button>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => setOpenDivisionId(isOpen ? null : category.id)}
                          className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-bold text-xs transition-colors"
                        >
                          {isOpen ? 'Hide Services' : `Show ${services.length} Services`}
                        </button>
                        <a
                          href="#services-quote"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-xs sm:text-sm shadow-md"
                        >
                          <span>Get Quote</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Smooth Pop-Down Services Grid */}
                    <div className={`pop-down-drawer ${isOpen ? 'is-open' : ''}`}>
                      <div className="pop-down-inner">
                        <div className="pt-8 mt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {services.map((service) => (
                            <ServiceCard key={service.slug} service={service} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}

            {/* 5th Banner Card: Cleaning Supplies & Washroom Consumables (PDF p. 12 & Meeting Notes) */}
            <section id="cleaning-supplies" className="scroll-card-snap scroll-mt-28">
              <div className="bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="scroll-icon-bounce w-14 h-14 rounded-2xl bg-brandBlue text-white flex items-center justify-center shrink-0 shadow-md">
                    <Package className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                      Commercial &amp; Facility Consumables • Direct Supply
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Cleaning Supplies &amp; Washroom Consumables
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                      Need toilet tissue, hand towels, soap refills, bin liners, or commercial
                      cleaning supplies delivered alongside your scheduled clean? Send us an email
                      enquiry for bulk pricing.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href={CLEANING_SUPPLIES.mailtoHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-xs sm:text-sm shadow-md transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Supply Inquiry</span>
                  </a>
                  <Link
                    href={CLEANING_SUPPLIES.contactHref}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-heading font-bold text-xs sm:text-sm transition-colors"
                  >
                    <span>Enquire via Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom Enquiry Section */}
      <section
        id="services-quote"
        className="py-20 bg-white border-t border-slate-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                Book Now or Request a Quote
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
                Not Sure Which Cleaning Package Fits Best?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Tell us what needs cleaning using our quick mobile form. You can combine any house,
                pre-sale, or end-of-lease clean with our{' '}
                <Link
                  href="/services/kitchen-oven-appliance-cleaning"
                  className="text-brandBlue font-semibold underline"
                >
                  Kitchen, Oven &amp; Appliance Add-On
                </Link>{' '}
                or{' '}
                <Link
                  href="/services/carpet-upholstery-cleaning"
                  className="text-brandBlue font-semibold underline"
                >
                  Trusted Partner Carpet &amp; Upholstery Cleaning
                </Link>
                .
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <p className="font-heading font-bold text-sm text-slate-900">
                  Prefer to speak or text directly with our Perth team?
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-brandCyan" />
                    <span>{BRAND_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href={`${BRAND_INFO.smsHref}?body=${encodeURIComponent(
                      "G'day Nexora Cleaning! I'd like a free quote in Perth."
                    )}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-50 border border-sky-200 text-brandBlue text-xs font-bold"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Text SMS</span>
                  </a>
                  <a
                    href={`mailto:${BRAND_INFO.mainEmail}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold"
                  >
                    <Mail className="w-3.5 h-3.5 text-brandBlue" />
                    <span>{BRAND_INFO.mainEmail}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
