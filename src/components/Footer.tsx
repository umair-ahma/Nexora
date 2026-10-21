import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from '@/data/nexoraData';

export default function Footer() {
  return (
    <footer className="bg-[#040710] text-slate-300 border-t border-brandCyan/20 pb-20 lg:pb-0">
      {/* Top Quote Banner Strip */}
      <div className="bg-gradient-to-r from-[#08132B] via-[#0B1E42] to-[#08132B] border-b border-brandCyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brandCyan">
              <BadgePercent className="w-4 h-4" />
              <span>We Beat All Comparable Written Quotes by 5%</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Let&apos;s Get Your Space Clean.
            </h3>
            <p className="text-sm text-slate-300">
              100% free, no-obligation quote within a few minutes — price confirmed before work begins.
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
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
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
          {/* Column 1: Brand & Credentials (4 cols) */}
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
              businesses, builders, and specialist facilities—backed by documented checklists,
              screened staff, and clear upfront pricing.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandCyan shrink-0" />
                <span>WA-Based & Comprehensive Public Liability Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandCyan shrink-0" />
                <span>National Police-Checked & WWCC Screened Personnel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandCyan shrink-0" />
                <span>100% Free Quote Within Minutes • 5% Price-Beat Guarantee</span>
              </div>
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
                  href="/services/kitchen-oven-appliance-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Kitchen & Oven Cleaning</span>
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
                  <span>Carpet & Upholstery</span>
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
              Commercial & Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/office-commercial-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  Office & Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/services/school-education-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  School & Education
                </Link>
              </li>
              <li>
                <Link
                  href="/services/childcare-daycare-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  Childcare & Day-Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/builders-construction-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  Builders & Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/strata-common-area-cleaning"
                  className="text-slate-400 hover:text-brandCyan transition-colors"
                >
                  Strata Common Areas
                </Link>
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
                  Privacy Policy & Terms
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

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brandCyan shrink-0 mt-1" />
                <div className="space-y-1">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-brandCyan block font-semibold">
                      Main Enquiries & Quotes:
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
                      Admin:{' '}
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
                      Accounts:{' '}
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
                    Covering all Northern, Southern, Eastern & Western Suburbs
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

              <div className="pt-2">
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
