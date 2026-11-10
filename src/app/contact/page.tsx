import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  MessageSquare,
  BadgePercent,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { BRAND_INFO, TRUST_BADGE_PILLS } from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact & Request a Free Quote | Nexora Cleaning Co Perth WA',
  description:
    'Contact Nexora Cleaning Co in Perth, Western Australia. Get a 100% free quote within a few minutes at info@nexoracleaning.au or via our short mobile quote form. We beat any comparable quote by 5%.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner with Translucent Background Photo (/images/bg/nexora-collage-squeegee.jpg) */}
      <section className="relative overflow-hidden bg-[#061024] text-white py-14 sm:py-20 border-b border-slate-200/20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url('/images/bg/nexora-collage-squeegee.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#040B1A]/90 via-[#071530]/85 to-[#040B1A]/90"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-brandCyan/40 text-brandCyan text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Free Quote Within a Few Minutes</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s Get Your <span className="text-brandCyan">Space Clean.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Free, no-obligation quote — price confirmed before work begins. Fill out our short
              mobile-friendly form below, send a text message, chat on WhatsApp, or email our Perth
              team directly.
            </p>

            {/* Compliance Badge Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {TRUST_BADGE_PILLS.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-heading font-bold text-white"
                >
                  <DynamicIcon name={badge.iconName} className="w-3.5 h-3.5 text-brandCyan" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid + Quote Form */}
      <section className="py-16 sm:py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: All 3 Required Client Emails, Phone, SMS, WhatsApp & Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="scroll-card-snap bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                    Direct Perth Contacts
                  </span>
                  <h2 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
                    Get in Touch With Nexora
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Reach the right department directly or submit our quick enquiry form for an
                    immediate quote.
                  </p>
                </div>

                {/* 3 Departmental Emails Required by Client (nexoracleaning.au) */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${BRAND_INFO.mainEmail}`}
                    className="block p-4 rounded-2xl bg-sky-50/80 border border-brandBlue/30 hover:border-brandBlue transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brandBlue text-white flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-brandBlue block">
                          General Enquiries &amp; Customer Quotes
                        </span>
                        <span className="font-heading font-bold text-base text-slate-900">
                          {BRAND_INFO.mainEmail}
                        </span>
                        <span className="block text-xs text-slate-600 mt-0.5">
                          Primary inbox for customer quotes, bookings &amp; cleaning supplies
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BRAND_INFO.adminEmail}`}
                    className="block p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brandBlue/50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                          Management &amp; Commercial Contracts
                        </span>
                        <span className="font-heading font-bold text-base text-slate-900">
                          {BRAND_INFO.adminEmail}
                        </span>
                        <span className="block text-xs text-slate-600 mt-0.5">
                          Commercial tenders, builder partnerships &amp; executive enquiries
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BRAND_INFO.accountsEmail}`}
                    className="block p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brandBlue/50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                          Customer Support, Accounts &amp; NDIS Billing
                        </span>
                        <span className="font-heading font-bold text-base text-slate-900">
                          {BRAND_INFO.accountsEmail}
                        </span>
                        <span className="block text-xs text-slate-600 mt-0.5">
                          Support, invoicing, NDIS Plan Managers &amp; strata accounts
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Phone, SMS Text & WhatsApp */}
                <div className="pt-2 border-t border-slate-100 space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={BRAND_INFO.phoneHref}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900 text-white hover:bg-brandBlue transition-colors"
                    >
                      <Phone className="w-5 h-5 text-brandCyan shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-300 block">
                          Call Our Team
                        </span>
                        <span className="font-heading font-bold text-sm">
                          {BRAND_INFO.phoneDisplay}
                        </span>
                      </div>
                    </a>

                    <a
                      href={`${BRAND_INFO.smsHref}?body=${encodeURIComponent(
                        "G'day Nexora Cleaning! I would like to request a free quote in Perth."
                      )}`}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-brandBlue hover:bg-sky-100 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5 text-brandBlue shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-bold">
                          Send Text / SMS
                        </span>
                        <span className="font-heading font-bold text-sm">
                          {BRAND_INFO.mobileDisplay}
                        </span>
                      </div>
                    </a>
                  </div>

                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                      'Hi Nexora Cleaning! I would like to request a free quote in Perth.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-white/90 block font-semibold">
                        Instant WhatsApp Chat
                      </span>
                      <span className="font-heading font-bold text-base">
                        Chat With Us on WhatsApp
                      </span>
                    </div>
                  </a>
                </div>

                {/* Hours & Coverage */}
                <div className="pt-2 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-brandBlue shrink-0" />
                    <span>
                      <strong className="text-slate-900">Hours:</strong> {BRAND_INFO.businessHours}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-brandBlue shrink-0" />
                    <span>
                      <strong className="text-slate-900">Service Area:</strong> All Perth Metro
                      Suburbs &amp; Surrounds, WA
                    </span>
                  </div>
                </div>
              </div>

              {/* Light 5% Price Beat Guarantee Card */}
              <div className="scroll-card-snap bg-emerald-50/90 text-slate-900 rounded-3xl p-6 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-heading font-bold text-base">
                  <BadgePercent className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>We Will Beat All Quotes by 5%</span>
                </div>
                <p className="text-xs text-emerald-800/90 leading-relaxed">
                  Already received a written quote from another insured Perth cleaning business?
                  Let us know in the form notes and we will beat their price by 5%.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 pt-1 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Free Quote • Price Confirmed Before Work Begins</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quote Form (7 Cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-10 text-center">Loading form...</div>}>
                <QuoteForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
