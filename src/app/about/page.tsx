import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ClipboardCheck,
  UserCheck,
  HeartHandshake,
  Mail,
} from 'lucide-react';
import {
  BRAND_INFO,
  TRUST_CREDENTIALS,
  TRUST_BADGE_PILLS,
  WHY_CHOOSE_NEXORA,
} from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'About Nexora Cleaning Co | Trusted WA Cleaning Company',
  description:
    'Learn about Nexora Cleaning Co in Perth, Western Australia. Police-checked, WWCC-screened, White Card certified & NDIS approved cleaning across Perth Metro.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section with Translucent Background Photo (/images/bg/nexora-collage-window.jpg) */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-24 border-b border-slate-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hero-bg-motion bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg/nexora-collage-window.jpg')",
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
              <span>About Nexora Cleaning Co • Perth WA</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Raising the Standard of Professional Cleaning Across{' '}
              <span className="text-brandCyan">Western Australia.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Nexora Cleaning Co was founded to deliver what Western Australian homeowners, tenants,
              builders, and facility managers value most: screened staff you can trust, documented
              checklists on every job, and honest quotes confirmed before work begins.
            </p>

            {/* Compliance Badge Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {TRUST_BADGE_PILLS.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-heading font-bold text-white"
                >
                  <DynamicIcon name={badge.iconName} className="w-4 h-4 text-brandCyan" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#about-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-sm shadow-lg"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/20 border border-white/25 text-white font-heading font-bold text-sm backdrop-blur-sm"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Light Verified Credentials Strip (Icon + Heading) */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="scroll-heading-reveal text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
              Compliance &amp; Peace of Mind
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
              Credentials We Hold &amp; Maintain
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TRUST_CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className="scroll-card-snap group bg-white border border-slate-200/90 hover:border-brandBlue/50 rounded-2xl p-5 flex flex-col items-center text-center justify-center gap-3 shadow-sm hover:shadow-md transition-all"
              >
                <div className="scroll-icon-bounce hover-icon-bounce w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/80 text-brandBlue flex items-center justify-center">
                  <DynamicIcon name={cred.iconName} className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                  {cred.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Operational Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
                Built on Checklists, Screening &amp; Clear Communication
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Across Perth, too many customers experience cleaners who arrive late, rush through
                rooms without a checklist, or add unexpected fees after the job is done.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At <strong>Nexora Cleaning Co</strong> ({BRAND_INFO.domain}), every booking begins
                with a free, no-obligation quote where your price is confirmed before work begins.
                On the day of service, our fully vaccinated, police-checked team follows a
                documented room-by-room checklist and conducts quality inspections to ensure nothing
                is missed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="scroll-card-snap p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <ClipboardCheck className="w-6 h-6 text-brandBlue" />
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Documented Checklists
                  </h3>
                  <p className="text-xs text-slate-600">
                    Structured task lists for bond cleans, regular homes, schools, and builders.
                  </p>
                </div>

                <div className="scroll-card-snap p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <UserCheck className="w-6 h-6 text-brandBlue" />
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Screened WA Personnel
                  </h3>
                  <p className="text-xs text-slate-600">
                    Police-checked, insured, WWCC-screened &amp; NDIS approved cleaners.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_NEXORA.map((item) => (
                <div
                  key={item.title}
                  className="scroll-card-snap group bg-slate-50/80 hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-brandBlue/50 shadow-sm transition-all space-y-2"
                >
                  <div className="scroll-icon-bounce hover-icon-bounce w-10 h-10 rounded-xl bg-sky-100 text-brandBlue flex items-center justify-center">
                    <DynamicIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Aboriginal & Torres Strait Islander Inclusivity & Employment Banner (Oct 23 Meeting Notes + PDF p. 8 & 9) */}
          <div className="scroll-card-snap rounded-3xl bg-gradient-to-r from-slate-50 via-sky-50/60 to-slate-50 border border-slate-200 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2.5">
                <svg
                  width="28"
                  height="18"
                  viewBox="0 0 24 16"
                  aria-label="Australian Aboriginal Flag"
                  className="rounded-[2px] border border-slate-300 shrink-0"
                >
                  <rect width="24" height="8" y="0" fill="#000000" />
                  <rect width="24" height="8" y="8" fill="#CC0000" />
                  <circle cx="12" cy="8" r="4" fill="#FFCC00" />
                </svg>
                <svg
                  width="28"
                  height="18"
                  viewBox="0 0 24 16"
                  aria-label="Torres Strait Islander Flag"
                  className="rounded-[2px] border border-slate-300 shrink-0"
                >
                  <rect width="24" height="3.2" y="0" fill="#009966" />
                  <rect width="24" height="1" y="3.2" fill="#000000" />
                  <rect width="24" height="7.6" y="4.2" fill="#003399" />
                  <rect width="24" height="1" y="11.8" fill="#000000" />
                  <rect width="24" height="3.2" y="12.8" fill="#009966" />
                  <path
                    d="M9 10.5 C9 7, 15 7, 15 10.5 L13.6 10.5 C13.6 8.5, 10.4 8.5, 10.4 10.5 Z"
                    fill="#FFFFFF"
                  />
                  <circle cx="12" cy="8.2" r="0.9" fill="#FFFFFF" />
                </svg>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-brandBlue">
                  Community Inclusivity &amp; Equal Opportunity
                </span>
              </div>

              <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                Proudly Supporting Aboriginal &amp; Torres Strait Islander Communities
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We acknowledge and pay respect to the Traditional Custodians and Elders of this
                nation, both past, present and emerging. We honour the continuation of cultural and
                educational practices of Aboriginal and Torres Strait Islander peoples, and actively
                encourage applications from Indigenous Australians across our Perth operations.
              </p>
            </div>

            <a
              href={`mailto:${BRAND_INFO.mainEmail}?subject=Careers%20%26%20Employment%20Enquiry%20-%20Nexora%20Cleaning`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-xs sm:text-sm shrink-0 shadow-md transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Careers &amp; Employment Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Enquiry Section */}
      <section
        id="about-quote"
        className="py-20 bg-slate-50/70 border-t border-slate-100 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Let&apos;s Get Your Space Clean.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Request your 100% free quote below — we beat any comparable written quote by 5%.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
