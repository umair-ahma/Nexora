import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  BadgePercent,
  Sparkles,
  ArrowRight,
  ClipboardCheck,
  UserCheck,
  FileText,
} from 'lucide-react';
import {
  BRAND_INFO,
  TRUST_CREDENTIALS,
  WHY_CHOOSE_NEXORA,
} from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'About Nexora Cleaning Co | Trusted WA Cleaning Company',
  description:
    'Learn about Nexora Cleaning Co in Perth, Western Australia. Structured around Trust (insurance, police checks, WWCC), Dedicated Service Standards, and Easy Mobile Enquiries.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#040814] via-[#08132B] to-[#0B1936] text-white py-16 sm:py-20 border-b border-brandCyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandCyan/15 border border-brandCyan/30 text-brandCyan text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Nexora Cleaning Co • Perth WA</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Raising the Standard of Professional Cleaning Across{' '}
                <span className="text-brandCyan">Western Australia.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Nexora Cleaning Co was founded to deliver what Western Australian homeowners,
                tenants, builders, and facility managers value most: screened staff you can trust,
                documented checklists on every job, and honest quotes confirmed before work begins.
              </p>

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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-bold text-sm"
                >
                  <span>Explore All 25 Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#071124] border border-brandCyan/30 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brandCyan bg-black shrink-0">
                    <img
                      src="/images/nexora-logo.jpg"
                      alt="Nexora Cleaning Co Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-heading font-extrabold text-xl text-white">
                      {BRAND_INFO.companyName}
                    </h2>
                    <p className="text-xs text-brandCyan font-semibold uppercase tracking-wider">
                      {BRAND_INFO.domain}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our operations are structured around three foundational pillars so every client—from
                  a single-bedroom apartment tenant to a multi-site school or strata manager—receives
                  consistent, verifiable quality.
                </p>

                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-heading font-bold text-sm text-brandCyan">
                      1. Verified Trust
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Public Liability Insurance, National Police Checks, relevant Working With
                      Children Checks (WWCC), trained staff, and clear service standards.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-heading font-bold text-sm text-brandCyan">
                      2. Dedicated Service Scope
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      25 specialised cleaning services across Residential, Commercial, Builders &amp;
                      Events, and Exterior/Add-On care—each with its own documented checklist.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-heading font-bold text-sm text-brandCyan">
                      3. Effortless Mobile Enquiries
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      100% free quotes within minutes, confirmed upfront pricing, and a 5%
                      Price-Beat Guarantee on any comparable written quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Operational Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                At <strong>Nexora Cleaning Co</strong>, we do things properly. Every booking begins
                with a free, no-obligation quote where your price is confirmed before work begins.
                On the day of service, our police-checked team follows a documented room-by-room
                checklist and conducts quality inspections to ensure nothing is missed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <ClipboardCheck className="w-6 h-6 text-brandBlue" />
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Documented Checklists
                  </h3>
                  <p className="text-xs text-slate-600">
                    Structured task lists for bond cleans, regular homes, schools, and builders.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <UserCheck className="w-6 h-6 text-brandBlue" />
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Screened WA Personnel
                  </h3>
                  <p className="text-xs text-slate-600">
                    Police-checked, insured, and WWCC-screened cleaners matched to your site.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_NEXORA.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center">
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
        </div>
      </section>

      {/* Verified Credentials Strip */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brandCyan">
              Compliance &amp; Peace of Mind
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white">
              Credentials We Hold &amp; Maintain
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TRUST_CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2"
              >
                <DynamicIcon name={cred.iconName} className="w-6 h-6 text-brandCyan" />
                <h3 className="font-heading font-bold text-base text-white">
                  {cred.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cred.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Enquiry Section */}
      <section
        id="about-quote"
        className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20"
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
