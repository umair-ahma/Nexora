import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BadgePercent,
  Sparkles,
  Phone,
  ClipboardCheck,
  Info,
} from 'lucide-react';
import {
  BRAND_INFO,
  CLEANING_SERVICES,
  getServiceBySlug,
  getServicesByCategory,
} from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import QuoteForm from '@/components/QuoteForm';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CLEANING_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: 'Service Not Found | Nexora Cleaning Co',
    };
  }

  return {
    title: `${service.title} Perth WA | Free Quote Within Minutes`,
    description: `${service.oneLiner} Insured, police-checked staff across Perth & Western Australia. We beat any comparable quote by 5%.`,
  };
}

export default function IndividualServicePage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getServicesByCategory(service.categoryId).filter(
    (s) => s.slug !== service.slug
  );

  const getBadgeStyle = () => {
    switch (service.badgeType) {
      case 'coming-soon':
        return 'bg-amber-500/20 text-amber-300 border-amber-400/40';
      case 'add-on':
        return 'bg-brandCyan/20 text-brandCyan border-brandCyan/40';
      case 'partner':
        return 'bg-purple-500/20 text-purple-300 border-purple-400/40';
      default:
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40';
    }
  };

  return (
    <div className="flex flex-col">
      {/* =====================================================================
          HERO BANNER: 1-Liner Intro + Immediate Request a Quote / Book Now CTA
      ===================================================================== */}
      <section className="bg-gradient-to-b from-[#040814] via-[#08132B] to-[#0B1936] text-white py-14 sm:py-20 border-b border-brandCyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-brandCyan transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brandCyan transition-colors">
              Cleaning Services
            </Link>
            <span>/</span>
            <Link
              href={`/services#${service.categoryId}`}
              className="hover:text-brandCyan transition-colors"
            >
              {service.categoryName}
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider">
                  <DynamicIcon name={service.iconName} className="w-3.5 h-3.5 text-brandCyan" />
                  {service.categoryName}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-extrabold uppercase tracking-wider ${getBadgeStyle()}`}
                >
                  {service.badgeText}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              {/* Client-Specified 1-Liner Intro */}
              <p className="text-lg sm:text-xl text-brandCyan font-medium leading-relaxed">
                {service.oneLiner}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {service.overview}
              </p>

              {/* Special Status Callout Box if Coming Soon / Add-On / Trusted Partner */}
              {service.addOnNote && (
                <div className="p-4 rounded-2xl bg-white/10 border border-brandCyan/40 text-xs sm:text-sm text-slate-100 flex items-start gap-3">
                  <Info className="w-5 h-5 text-brandCyan shrink-0 mt-0.5" />
                  <span>{service.addOnNote}</span>
                </div>
              )}

              {/* Primary CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#book-this-service"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandRoyal hover:to-brandBlue text-white font-heading font-extrabold text-sm sm:text-base shadow-[0_10px_25px_rgba(0,128,240,0.45)] transition-all"
                >
                  <span>
                    {service.badgeType === 'coming-soon'
                      ? 'Register Your Interest Now'
                      : 'Request a Quote / Book Now'}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-bold text-sm sm:text-base transition-all"
                >
                  <Phone className="w-4 h-4 text-brandCyan" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Trust Summary Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#071022] border border-brandCyan/30 rounded-3xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-brandCyan font-heading font-bold text-sm uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Nexora Service Guarantee</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <BadgePercent className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-white">Beat All Quotes by 5%:</strong> Show us any
                      comparable written quote in Perth and we&apos;ll beat it by 5%.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brandCyan shrink-0" />
                    <span>
                      <strong className="text-white">100% Free Quote Within Minutes:</strong> Fast
                      turnaround with price confirmed before work begins.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-brandCyan shrink-0" />
                    <span>
                      <strong className="text-white">Screened &amp; Insured WA Crew:</strong>{' '}
                      Public Liability Insurance, Police Checks, and WWCC where required.
                    </span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-white/10">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-brandCyan"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to All 25 Cleaning Services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          DOCUMENTED CHECKLIST & IDEAL FOR SECTION
      ===================================================================== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: 8-Point Documented Checklist (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brandBlue">
                    Documented Cleaning Checklist
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                    What&apos;s Included in {service.shortTitle}
                  </h2>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our team works systematically through this documented checklist on every booking.
                Need custom tasks added or specific areas prioritised? Simply mention them in the
                notes section of our quote form below.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom CTA Banner Inside Checklist Card (Per Client Sheet 3 Instruction) */}
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#071022] to-[#0D1E40] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Ready to book {service.title}?
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    100% free quote within a few minutes • Price confirmed before work begins.
                  </p>
                </div>
                <a
                  href="#book-this-service"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-xs sm:text-sm shrink-0 shadow-md"
                >
                  <span>Request a Quote / Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Who It's For + Popular Add-Ons + Related Services (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Who This Service Is Ideal For
                </h3>
                <ul className="space-y-2.5">
                  {service.whoItsFor.map((target, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brandBlue shrink-0 mt-0.5" />
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Bundle Callout */}
              <div className="bg-sky-50 rounded-3xl p-6 border border-sky-200 space-y-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brandBlue text-white">
                  Popular Add-Ons &amp; Bundles
                </span>
                <h3 className="font-heading font-bold text-base text-slate-900">
                  Complete Your Clean in One Booking
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Combine any Nexora service with our signature add-on or partner services:
                </p>
                <div className="space-y-2 pt-1">
                  <Link
                    href="/services/kitchen-oven-appliance-cleaning"
                    className="block p-3 rounded-xl bg-white border border-sky-200 hover:border-brandBlue text-xs font-bold text-slate-900 transition-colors"
                  >
                    🔥 Kitchen, Oven &amp; Appliance Cleaning (Add-On) →
                  </Link>
                  <Link
                    href="/services/carpet-upholstery-cleaning"
                    className="block p-3 rounded-xl bg-white border border-sky-200 hover:border-brandBlue text-xs font-bold text-slate-900 transition-colors"
                  >
                    🛋️ Carpet &amp; Upholstery Steam Cleaning (Trusted Partner) →
                  </Link>
                </div>
              </div>

              {/* Related Services in Same Category */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="font-heading font-bold text-base text-slate-900">
                  Other {service.categoryName} Services
                </h3>
                <ul className="space-y-2">
                  {relatedServices.map((rel) => (
                    <li key={rel.slug}>
                      <Link
                        href={`/services/${rel.slug}`}
                        className="text-xs sm:text-sm text-slate-700 hover:text-brandBlue font-medium flex items-center justify-between py-1 border-b border-slate-100 last:border-0"
                      >
                        <span>{rel.shortTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BOTTOM REQUEST A QUOTE / BOOK NOW SECTION
      ===================================================================== */}
      <section
        id="book-this-service"
        className="py-20 bg-white border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
              Fast Mobile Booking &amp; Enquiry
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Request a Free Quote for {service.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Only your <strong>Name</strong>, <strong>Phone</strong>, and{' '}
              <strong>Suburb/Postcode</strong> are required. We&apos;ll confirm your details and
              provide a 100% free quote within a few minutes.
            </p>
          </div>

          <QuoteForm defaultService={service.title} />
        </div>
      </section>
    </div>
  );
}
