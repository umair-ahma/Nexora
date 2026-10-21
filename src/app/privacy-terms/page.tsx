import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileText, Mail } from 'lucide-react';
import { BRAND_INFO } from '@/data/nexoraData';

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Service | Nexora Cleaning Co WA',
  description:
    'Privacy Policy (compliant with the Australian Privacy Principles) and Service Terms & Conditions for Nexora Cleaning Co across Perth and Western Australia.',
};

export default function PrivacyTermsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#040814] to-[#09152E] text-white py-14 sm:py-16 border-b border-brandCyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brandCyan">
            <ShieldCheck className="w-4 h-4" />
            Australian Privacy Principles &amp; Service Standards
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Privacy Policy &amp; Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Clear, transparent policies governing how {BRAND_INFO.companyName} ({BRAND_INFO.domain})
            protects your personal information and delivers cleaning services across Western
            Australia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* PART 1: PRIVACY POLICY */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <ShieldCheck className="w-7 h-7 text-brandBlue shrink-0" />
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-slate-900">
                  1. Privacy Policy (Australia)
                </h2>
                <p className="text-xs text-slate-500">
                  Compliant with the Privacy Act 1988 (Cth) &amp; Australian Privacy Principles
                  (APPs)
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <h3 className="font-heading font-bold text-base text-slate-900">
                1.1 Information We Collect
              </h3>
              <p>
                When you request a free quote or book a service with{' '}
                <strong>{BRAND_INFO.companyName}</strong> via our website ({BRAND_INFO.domain}),
                phone, WhatsApp chat, or email, we collect the information necessary to prepare
                your quote and deliver your service. This includes your <strong>Name</strong>,{' '}
                <strong>Phone Number</strong>, and <strong>Suburb/Postcode/Address</strong>{' '}
                (required), as well as any optional details you choose to provide such as your
                email address, preferred date, preferred time, property size, and special access or
                cleaning notes.
              </p>

              <h3 className="font-heading font-bold text-base text-slate-900">
                1.2 How We Use &amp; Protect Your Information
              </h3>
              <p>
                Your personal information is used strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Prepare and send your 100% free, no-obligation cleaning quote;</li>
                <li>Confirm booking dates, times, and documented cleaning checklists;</li>
                <li>
                  Coordinate your assigned police-checked cleaning crew (or our vetted Perth
                  specialist partner when you book Carpet &amp; Upholstery Cleaning);
                </li>
                <li>
                  Issue tax invoices or NDIS Plan Manager statements via{' '}
                  <a
                    href={`mailto:${BRAND_INFO.accountsEmail}`}
                    className="text-brandBlue underline"
                  >
                    {BRAND_INFO.accountsEmail}
                  </a>
                  ; and
                </li>
                <li>Follow up after service completion to ensure your satisfaction.</li>
              </ul>
              <p>
                We never sell, rent, or trade your personal details to third-party marketers.
              </p>

              <h3 className="font-heading font-bold text-base text-slate-900">
                1.3 Website Analytics &amp; Security
              </h3>
              <p>
                Our website uses spam protection on all enquiry forms and may use Google Analytics
                and Google Search Console to measure page speed, mobile usability, and aggregate
                visitor traffic across Western Australia.
              </p>

              <h3 className="font-heading font-bold text-base text-slate-900">
                1.4 Accessing or Updating Your Details
              </h3>
              <p>
                You may request access to, correction of, or deletion of your personal information
                at any time by emailing{' '}
                <a href={`mailto:${BRAND_INFO.mainEmail}`} className="text-brandBlue underline">
                  {BRAND_INFO.mainEmail}
                </a>{' '}
                or{' '}
                <a href={`mailto:${BRAND_INFO.adminEmail}`} className="text-brandBlue underline">
                  {BRAND_INFO.adminEmail}
                </a>
                .
              </p>
            </div>
          </div>

          {/* PART 2: TERMS OF SERVICE */}
          <div
            id="terms"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 scroll-mt-24"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <FileText className="w-7 h-7 text-brandBlue shrink-0" />
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-slate-900">
                  2. Terms &amp; Conditions of Service
                </h2>
                <p className="text-xs text-slate-500">
                  Clear, fair service terms for residential, commercial &amp; specialist bookings
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <h3 className="font-heading font-bold text-base text-slate-900">
                2.1 Free Quotes &amp; Upfront Price Confirmation
              </h3>
              <p>
                All quotes provided by {BRAND_INFO.companyName} are 100% free and carry no
                obligation. Your price is confirmed with you before work begins based on the
                property size, scope, and condition described. If on-site conditions differ
                materially from the description provided, we will always communicate with you
                before proceeding.
              </p>

              <h3 className="font-heading font-bold text-base text-slate-900">
                2.2 5% Price-Beat Guarantee
              </h3>
              <p>
                We will beat any comparable written quote by 5% when you present a current written
                quote from an ABN-registered, insured Western Australian cleaning company covering
                an identical scope of work prior to booking confirmation.
              </p>

              <h3 className="font-heading font-bold text-base text-slate-900">
                2.3 Safe Site Access, Power &amp; Water
              </h3>
              <p>
                Clients agree to provide safe access to the property at the agreed date and time,
                along with working electricity and running water (particularly important for
                end-of-lease, move-in, builders, and pressure washing services). Services such as
                exterior window cleaning, gutter cleaning, and industrial cleaning are performed
                strictly within safe working limits.
              </p>

              <h3 className="font-heading font-bold text-base text-slate-900">
                2.4 Add-On &amp; Partner Services
              </h3>
              <p>
                <strong>Kitchen, Oven &amp; Appliance Cleaning</strong> is available as an optional
                add-on to residential and vacate cleans.{' '}
                <strong>Carpet &amp; Upholstery Cleaning</strong> is delivered via our vetted
                specialist partner and coordinated directly by Nexora for your convenience.
              </p>

              <h3 className="font-heading font-bold text-base text-slate-900">
                2.5 Quality Follow-Up &amp; Inspection Support
              </h3>
              <p>
                Our team follows a documented checklist on every service and follows up after work
                is completed. If you or your property manager have any feedback regarding a
                checklist item, please notify us at{' '}
                <a href={`mailto:${BRAND_INFO.mainEmail}`} className="text-brandBlue underline">
                  {BRAND_INFO.mainEmail}
                </a>{' '}
                within 72 hours so we can promptly assist.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Mail className="w-4 h-4 text-brandBlue" />
                <span>Questions? Contact {BRAND_INFO.mainEmail}</span>
              </div>
              <Link
                href="/contact#quote-form"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brandBlue text-white font-heading font-bold text-xs"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
