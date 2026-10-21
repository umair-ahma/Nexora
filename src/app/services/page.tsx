import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  BadgePercent,
  ShieldCheck,
  ArrowRight,
  Phone,
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import ServiceCard from '@/components/ServiceCard';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Cleaning Services Overview | 25 Residential, Commercial & Specialist Services',
  description:
    'Explore all 25 professional cleaning services across Perth & Western Australia: Residential, End-of-Lease Bond Cleaning, Office, School, Childcare, Builders, Pressure Washing, Oven Add-Ons & Partner Carpet Cleaning.',
};

export default function ServicesOverviewPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#040814] via-[#08132B] to-[#0B1936] text-white py-16 sm:py-20 border-b border-brandCyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandCyan/15 border border-brandCyan/30 text-brandCyan text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Service Pages • Clear Checklists</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Our Cleaning Services Across{' '}
              <span className="text-brandCyan">Western Australia</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every major cleaning service has its own dedicated page with a clear 1-liner
              overview, documented cleaning checklist, and instant quote request option. Select a
              category or service below to view full details.
            </p>

            {/* Quick Category Jump Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-brandBlue text-white text-xs sm:text-sm font-heading font-bold border border-white/15 transition-colors"
                >
                  <DynamicIcon name={cat.iconName} className="w-4 h-4 text-brandCyan" />
                  <span>{cat.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="bg-slate-900 text-white py-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-2 font-semibold text-brandCyan">
            <Sparkles className="w-4 h-4" />
            100% Free Quote Within a Few Minutes
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-emerald-300">
            <BadgePercent className="w-4 h-4 text-emerald-400" />
            We Beat All Comparable Written Quotes by 5%
          </span>
          <span className="inline-flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-brandCyan" />
            Price Confirmed Before Work Begins
          </span>
        </div>
      </section>

      {/* All 4 Service Categories & All 25 Service Cards */}
      <div className="py-16 bg-slate-50 space-y-20">
        {SERVICE_CATEGORIES.map((category, index) => {
          const services = getServicesByCategory(category.id);
          return (
            <section
              key={category.id}
              id={category.id}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#070E20] to-[#0D1E40] text-brandCyan flex items-center justify-center shrink-0 shadow-md">
                    <DynamicIcon name={category.iconName} className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                      Division 0{index + 1} • {services.length} Dedicated Services
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {category.name}
                    </h2>
                    <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <a
                  href="#services-quote"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-xs sm:text-sm shrink-0 shadow-md"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Enquiry Section */}
      <section
        id="services-quote"
        className="py-20 bg-white border-t border-slate-200 scroll-mt-20"
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
                Tell us what needs cleaning using our quick mobile form. Remember: you can combine
                any house or end-of-lease clean with our{' '}
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
                  Prefer to speak directly with our Perth team?
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-brandCyan" />
                    <span>{BRAND_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${BRAND_INFO.mainEmail}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold"
                  >
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
