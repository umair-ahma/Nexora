import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import {
  BRAND_INFO,
  CLEANING_SUPPLIES,
  getServicesByCategory,
} from '@/data/nexoraData';

export default function Footer() {
  return (
    <footer className="bg-[#040710] text-slate-300 border-t border-brandCyan/20 pb-20 lg:pb-0">
      {/* Top Quote Banner Strip with Translucent Background Photo (PDF p. 8) */}
      <div className="relative overflow-hidden bg-slate-900 border-b border-brandCyan/20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hero-bg-motion bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg/nexora-residential-surface.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-950/50"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brandCyan">
              <BadgePercent className="w-4 h-4" />
              <span>We Beat All Comparable Written Quotes by 5%</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Let&apos;s Get Your Space Clean.
            </h3>
            <p className="text-sm text-slate-200">
              100% free, no-obligation quote within a few minutes — price confirmed before work
              begins.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact#quote-form"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-sm shadow-[0_8px_25px_rgba(0,128,240,0.4)] hover:opacity-95 transition-all"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={BRAND_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm backdrop-blur-sm transition-all"
            >
              <Phone className="w-4 h-4 text-brandCyan" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand, Credentials & Acknowledgement of Country (4 cols — PDF p. 8 & 9) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-brandCyan/40 bg-black flex items-center justify-center">
                <img
                  src="/images/nexora-logo.jpg"
                  alt="Nexora Cleaning Co Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white block leading-none">
                  NEXORA <span className="text-brandCyan">CLEANING CO</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  Perth • Western Australia
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Professional Cleaning Solutions Across Western Australia. Reliable cleaning for homes,
              businesses, builders, and NDIS participants—backed by documented checklists, screened
              staff, and clear upfront pricing.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandCyan shrink-0" />
                <span>WA-Based • $20M Public Liability Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandCyan shrink-0" />
                <span>Police-Checked, WWCC, White Card &amp; NDIS Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandCyan shrink-0" />
                <span>Fully Vaccinated Staff • 5% Price-Beat Guarantee</span>
              </div>
            </div>

            {/* Acknowledgement of Country with Mini Flags (PDF p. 8 & p. 9) */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                {/* Mini Australian Aboriginal Flag SVG */}
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  aria-label="Australian Aboriginal Flag"
                  className="rounded-[2px] border border-white/20 shrink-0"
                >
                  <rect width="24" height="8" y="0" fill="#000000" />
                  <rect width="24" height="8" y="8" fill="#CC0000" />
                  <circle cx="12" cy="8" r="4" fill="#FFCC00" />
                </svg>

                {/* Mini Torres Strait Islander Flag SVG */}
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  aria-label="Torres Strait Islander Flag"
                  className="rounded-[2px] border border-white/20 shrink-0"
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

                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-300">
                  Acknowledgement of Country
                </span>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                We acknowledge and pay respect to the Traditional Custodians and Elders of this
                nation, both past, present and emerging. We honour the continuation of cultural and
                educational practices of Aboriginal and Torres Strait Islander peoples.
              </p>

              <p className="text-[11px] text-slate-400">
                Proudly supporting Indigenous employment opportunities —{' '}
                <a
                  href={`mailto:${BRAND_INFO.mainEmail}?subject=Careers%20%26%20Employment%20Enquiry%20-%20Nexora%20Cleaning`}
                  className="text-brandCyan hover:underline"
                >
                  enquire about joining our team
                </a>
                .
              </p>
            </div>
          </div>

          {/* Column 2: Residential & Specialist Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Popular Cleaning Services
            </h4>
            <ul className="space-y-2 text-sm">
              {getServicesByCategory('residential').map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-slate-400 hover:text-brandCyan transition-colors block"
                  >
                    {srv.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/pre-sale-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors block"
                >
                  Pre-Sale &amp; Open-Home Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kitchen-oven-appliance-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Kitchen &amp; Oven Cleaning</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-brandCyan/20 text-brandCyan font-semibold">
                    Add-On
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/carpet-upholstery-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Carpet &amp; Upholstery</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">
                    Partner
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/high-pressure-washing"
                  className="text-slate-400 hover:text-brandCyan transition-colors block"
                >
                  High-Pressure Washing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial, Builders & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Commercial &amp; Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/office-commercial-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  Office &amp; Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/services/school-education-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  School &amp; Education
                </Link>
              </li>
              <li>
                <Link
                  href="/services/childcare-daycare-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  Childcare &amp; Day-Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ndis-domestic-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  NDIS Approved Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/builders-construction-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  Builders &amp; Construction
                </Link>
              </li>
              <li>
                <a
                  href={CLEANING_SUPPLIES.mailtoHref}
                  className="text-brandCyan hover:underline font-medium"
                >
                  Cleaning Supplies
                </a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link
                  href="/industries"
                  className="text-slate-300 hover:text-brandCyan font-medium transition-colors"
                >
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas"
                  className="text-slate-300 hover:text-brandCyan font-medium transition-colors"
                >
                  Perth Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-brandCyan font-medium transition-colors"
                >
                  About Nexora
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-terms"
                  className="text-slate-300 hover:text-brandCyan font-medium transition-colors"
                >
                  Privacy Policy &amp; Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details & All 3 Required Emails (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Contact Our WA Team
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href={BRAND_INFO.phoneHref}
                className="flex items-start gap-3 text-slate-300 hover:text-brandCyan transition-colors"
              >
                <Phone className="w-4 h-4 text-brandCyan shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-white">
                    {BRAND_INFO.phoneDisplay}
                  </span>
                  <span className="text-xs text-slate-400">Click to call for fast enquiries</span>
                </div>
              </a>

              <a
                href={`${BRAND_INFO.smsHref}?body=${encodeURIComponent(
                  "G'day Nexora Cleaning! I'd like a free quote in Perth."
                )}`}
                className="flex items-start gap-3 text-slate-300 hover:text-brandCyan transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-brandCyan shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-white">
                    Text / SMS: {BRAND_INFO.mobileDisplay}
                  </span>
                  <span className="text-xs text-slate-400">Send a quick text message</span>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brandCyan shrink-0 mt-1" />
                <div className="space-y-1">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-brandCyan block font-semibold">
                      Enquiries &amp; Quotes:
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.mainEmail}`}
                      className="text-white hover:text-brandCyan font-medium transition-colors"
                    >
                      {BRAND_INFO.mainEmail}
                    </a>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">
                      Management:{' '}
                      <a
                        href={`mailto:${BRAND_INFO.adminEmail}`}
                        className="text-slate-300 hover:text-brandCyan"
                      >
                        {BRAND_INFO.adminEmail}
                      </a>
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">
                      Support &amp; Accounts:{' '}
                      <a
                        href={`mailto:${BRAND_INFO.accountsEmail}`}
                        className="text-slate-300 hover:text-brandCyan"
                      >
                        {BRAND_INFO.accountsEmail}
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brandCyan shrink-0 mt-1" />
                <div>
                  <span className="block text-white font-medium">
                    Perth Metropolitan Area, WA
                  </span>
                  <span className="text-xs text-slate-400">
                    Covering all Northern, Southern, Eastern &amp; Western Suburbs
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brandCyan shrink-0 mt-1" />
                <div>
                  <span className="block text-white font-medium">
                    {BRAND_INFO.businessHours}
                  </span>
                  <span className="text-xs text-slate-400">
                    {BRAND_INFO.commercialHours}
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="https://www.google.com/maps/search/Nexora+Cleaning+Perth+WA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brandCyan hover:underline"
                >
                  <span>Find Us on Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#020409] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">Nexora Cleaning Co</strong> (
            {BRAND_INFO.domain}). All rights reserved. Western Australia.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-terms" className="hover:text-brandCyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy-terms#terms" className="hover:text-brandCyan transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-brandCyan transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
