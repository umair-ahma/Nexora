import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  BadgePercent,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { BRAND_INFO } from '@/data/nexoraData';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact & Request a Free Quote | Nexora Cleaning Co Perth WA',
  description:
    'Contact Nexora Cleaning Co in Perth, Western Australia. Get a 100% free quote within a few minutes at cleaning@nexora.com or via our short mobile quote form. We beat any comparable quote by 5%.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#040814] via-[#08132B] to-[#0B1936] text-white py-14 sm:py-20 border-b border-brandCyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandCyan/15 border border-brandCyan/30 text-brandCyan text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Free Quote Within a Few Minutes</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s Get Your <span className="text-brandCyan">Space Clean.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Free, no-obligation quote — price confirmed before work begins. Fill out our short
              mobile-friendly form below, message us on WhatsApp, or email our Perth team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid + Quote Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: All 3 Required Client Emails, Phone, WhatsApp & Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
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

                {/* 3 Departmental Emails Required by Client */}
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
                          Main Enquiries &amp; Customer Quotes
                        </span>
                        <span className="font-heading font-bold text-base text-slate-900">
                          {BRAND_INFO.mainEmail}
                        </span>
                        <span className="block text-xs text-slate-600 mt-0.5">
                          Primary website email for all customer quotes &amp; bookings
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
                          Administration &amp; Compliance
                        </span>
                        <span className="font-heading font-bold text-base text-slate-900">
                          {BRAND_INFO.adminEmail}
                        </span>
                        <span className="block text-xs text-slate-600 mt-0.5">
                          Commercial contracts, WWCC/Police Check docs &amp; partnerships
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
                          Accounts &amp; Invoicing
                        </span>
                        <span className="font-heading font-bold text-base text-slate-900">
                          {BRAND_INFO.accountsEmail}
                        </span>
                        <span className="block text-xs text-slate-600 mt-0.5">
                          Billing, NDIS Plan Managers, strata &amp; commercial accounts
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Phone & WhatsApp */}
                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900 text-white hover:bg-brandBlue transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brandCyan shrink-0" />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-300 block">
                        Click to Call Our Perth Team
                      </span>
                      <span className="font-heading font-bold text-lg">
                        {BRAND_INFO.phoneDisplay}
                      </span>
                    </div>
                  </a>

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

              {/* 5% Price Beat Guarantee Card */}
              <div className="bg-gradient-to-br from-emerald-950 to-slate-950 text-white rounded-3xl p-6 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-heading font-bold text-base">
                  <BadgePercent className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>We Will Beat All Quotes by 5%</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Already received a written quote from another insured Perth cleaning business?
                  Let us know in the form notes and we will beat their price by 5%.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-brandCyan pt-1 font-semibold">
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
