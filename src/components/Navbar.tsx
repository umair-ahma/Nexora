'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BadgePercent,
  Package,
  MessageSquare,
  MessageCircle,
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  CLEANING_SUPPLIES,
  getServicesByCategory,
  ServiceCategoryId,
} from '@/data/nexoraData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<ServiceCategoryId | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Cleaning Supplies', href: CLEANING_SUPPLIES.mailtoHref, isSupplies: true },
    { label: 'Industries', href: '/industries' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900 shadow-sm">
      {/* Slim Top Trust & Announcement Bar */}
      <div className="bg-[#060E20] text-xs py-2 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="inline-flex items-center gap-1.5 font-semibold text-brandCyan">
              <ShieldCheck className="w-3.5 h-3.5" />
              WA-Based • Insured, Police-Checked &amp; NDIS Approved
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              Servicing All Perth Metro Suburbs &amp; Western Australia
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold">
              <BadgePercent className="w-3.5 h-3.5 text-emerald-400" />
              We Beat Any Quote by 5%
            </span>
            <a
              href={`mailto:${BRAND_INFO.mainEmail}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-brandCyan transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-brandCyan" />
              {BRAND_INFO.mainEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Main Light Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-slate-950 flex items-center justify-center shadow-sm group-hover:border-brandBlue transition-colors">
              <img
                src="/images/nexora-logo.jpg"
                alt="Nexora Cleaning Co Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none flex items-center gap-1">
                NEXORA <span className="text-brandBlue">CLEANING</span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mt-1 font-semibold">
                Western Australia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navLinks.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      isActive(item.href)
                        ? 'text-brandBlue bg-sky-50'
                        : 'text-slate-700 hover:text-brandBlue hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-brandBlue' : 'opacity-70'
                      }`}
                    />
                  </Link>

                  {/* Mega Dropdown (4 Service Divisions + Cleaning Supplies Column per PDF p. 12) */}
                  {servicesDropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[980px] max-w-[94vw] z-50">
                      <div className="bg-white border border-slate-200/90 rounded-3xl shadow-2xl p-6 grid grid-cols-5 gap-5">
                        {SERVICE_CATEGORIES.map((category) => {
                          const catServices = getServicesByCategory(category.id);
                          return (
                            <div key={category.id} className="space-y-2.5">
                              <Link
                                href={`/services#${category.id}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="block font-heading font-extrabold text-xs uppercase tracking-wider text-brandBlue hover:underline border-b border-slate-100 pb-2"
                              >
                                {category.shortName}
                              </Link>
                              <ul className="space-y-1.5">
                                {catServices.map((srv) => (
                                  <li key={srv.slug}>
                                    <Link
                                      href={`/services/${srv.slug}`}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      className="text-xs text-slate-600 hover:text-brandBlue font-medium flex items-start justify-between gap-1.5 py-0.5 group"
                                    >
                                      <span className="group-hover:translate-x-0.5 transition-transform">
                                        {srv.shortTitle}
                                      </span>
                                      {srv.badgeType === 'coming-soon' && (
                                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 shrink-0">
                                          Soon
                                        </span>
                                      )}
                                      {srv.badgeType === 'add-on' && (
                                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-sky-100 text-brandBlue shrink-0">
                                          Add-On
                                        </span>
                                      )}
                                      {srv.badgeType === 'partner' && (
                                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 shrink-0">
                                          Partner
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}

                        {/* 5th Column: Cleaning Supplies Tab / Inquiry Card (PDF p. 12) */}
                        <div className="bg-gradient-to-b from-sky-50 to-slate-50 border border-sky-200/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
                          <div className="space-y-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brandBlue/10 text-brandBlue text-[10px] font-extrabold uppercase tracking-wider">
                              <Package className="w-3.5 h-3.5" />
                              Direct Supply
                            </span>
                            <h4 className="font-heading font-extrabold text-sm text-slate-900">
                              Cleaning Supplies &amp; Consumables
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {CLEANING_SUPPLIES.tagline}
                            </p>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-sky-200/60">
                            <a
                              href={CLEANING_SUPPLIES.mailtoHref}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-xs shadow-sm transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span>Email Supply Inquiry</span>
                            </a>
                            <Link
                              href={CLEANING_SUPPLIES.contactHref}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="w-full inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-[11px] transition-colors"
                            >
                              <span>Or Add to Quote Form</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>

                        <div className="col-span-5 pt-3 mt-1 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                          <span className="flex items-center gap-2 font-medium">
                            <Sparkles className="w-4 h-4 text-brandBlue" />
                            100% Free Quote Within Minutes • We Beat All Comparable Quotes by 5%
                          </span>
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="inline-flex items-center gap-1 font-heading font-bold text-brandBlue hover:underline"
                          >
                            Explore All Services <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : item.isSupplies ? (
                <a
                  key={item.label}
                  href={item.href}
                  title="Send Cleaning Supplies Email Enquiry"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-brandBlue bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 transition-colors"
                >
                  <Package className="w-3.5 h-3.5 text-brandBlue" />
                  <span>{item.label}</span>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'text-brandBlue bg-sky-50'
                      : 'text-slate-700 hover:text-brandBlue hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Actions: Phone + Prominent Get a Free Quote Button */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href={BRAND_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-sm font-bold text-slate-800 transition-all"
            >
              <Phone className="w-4 h-4 text-brandBlue" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>

            <Link
              href="/contact#quote-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandRoyal hover:to-brandBlue text-white font-heading font-bold text-sm shadow-[0_6px_18px_rgba(0,128,240,0.3)] hover:shadow-[0_8px_22px_rgba(16,192,255,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BRAND_INFO.phoneHref}
              aria-label="Call Nexora Cleaning"
              className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-brandBlue"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Streamlined Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-8 space-y-2.5 max-h-[85vh] overflow-y-auto shadow-2xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-base font-heading font-bold ${
              isActive('/') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            Home
          </Link>

          {/* Collapsible Cleaning Services Accordion */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2.5">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-heading font-bold text-slate-900"
              >
                Cleaning Services
              </Link>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-label="Expand Services"
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-brandBlue"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="px-3 pb-3 pt-1 space-y-2 border-t border-slate-200/80">
                {SERVICE_CATEGORIES.map((category) => {
                  const isCatOpen = openMobileCategory === category.id;
                  return (
                    <div
                      key={category.id}
                      className="rounded-xl bg-white border border-slate-200/90 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileCategory(isCatOpen ? null : category.id)
                        }
                        className="w-full px-3 py-2.5 text-left flex items-center justify-between text-xs font-heading font-extrabold uppercase tracking-wider text-brandBlue"
                      >
                        <span>{category.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isCatOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isCatOpen && (
                        <div className="px-3 pb-2.5 pt-1 border-t border-slate-100 space-y-1.5">
                          {getServicesByCategory(category.id).map((srv) => (
                            <Link
                              key={srv.slug}
                              href={`/services/${srv.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-slate-700 hover:text-brandBlue font-medium py-1 flex items-center justify-between"
                            >
                              <span>{srv.shortTitle}</span>
                              {srv.badgeType === 'coming-soon' && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                                  Soon
                                </span>
                              )}
                              {srv.badgeType === 'add-on' && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 text-brandBlue font-bold">
                                  Add-On
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-2 text-xs font-heading font-bold text-brandBlue hover:underline"
                >
                  View All Services Overview →
                </Link>
              </div>
            )}
          </div>

          {/* Direct Cleaning Supplies Action (PDF p. 12) */}
          <a
            href={CLEANING_SUPPLIES.mailtoHref}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-3 px-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-brandBlue font-heading font-bold text-sm"
          >
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4 text-brandBlue" />
              Cleaning Supplies (Email Inquiry)
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/industries"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-base font-heading font-bold ${
              isActive('/industries') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            Industries We Serve
          </Link>

          <Link
            href="/service-areas"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-base font-heading font-bold ${
              isActive('/service-areas') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            Perth Service Areas
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-base font-heading font-bold ${
              isActive('/about') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            About Nexora
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-base font-heading font-bold ${
              isActive('/contact') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            Contact Us
          </Link>

          {/* Thumb-Friendly Mobile Contact & Quote Actions */}
          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <Link
              href="/contact#quote-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-sm shadow-md"
            >
              <span>Get a 100% Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-3 gap-2">
              <a
                href={BRAND_INFO.phoneHref}
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-brandBlue" />
                <span>Call</span>
              </a>

              <a
                href={`${BRAND_INFO.smsHref}?body=${encodeURIComponent(
                  "G'day Nexora Cleaning! I'd like a free quote in Perth."
                )}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-sky-50 border border-sky-200 text-brandBlue font-bold text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brandBlue" />
                <span>Text SMS</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "G'day Nexora Cleaning! I'd like a free quote in Perth."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] text-white font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href={`mailto:${BRAND_INFO.mainEmail}`}
              className="w-full flex items-center justify-center gap-2 py-2 text-slate-600 font-medium text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-brandBlue" />
              <span>{BRAND_INFO.mainEmail}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
