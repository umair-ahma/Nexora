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
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from '@/data/nexoraData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Industries', href: '/industries' },
    { label: 'About Us', href: '/about' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050811]/95 backdrop-blur-md border-b border-brandCyan/20 text-white">
      {/* Top Announcement Bar */}
      <div className="bg-[#03050B] border-b border-white/10 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium text-brandCyan">
              <ShieldCheck className="w-3.5 h-3.5" />
              WA-Based • Insured & Police-Checked
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              Servicing All Perth Metro Suburbs & Western Australia
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold">
              <BadgePercent className="w-3.5 h-3.5 text-emerald-400" />
              We Beat Any Quote by 5%
            </span>
            <a
              href={`mailto:${BRAND_INFO.mainEmail}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-brandCyan transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brandCyan" />
              {BRAND_INFO.mainEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the Left */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-brandCyan/40 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(16,192,255,0.25)] group-hover:border-brandCyan transition-colors">
              <img
                src="/images/nexora-logo.jpg"
                alt="Nexora Cleaning Co Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none flex items-center gap-1">
                NEXORA <span className="text-brandCyan">CLEANING</span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mt-1 font-medium">
                Western Australia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                    className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-brandCyan bg-white/5'
                        : 'text-slate-200 hover:text-brandCyan hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 opacity-80" />
                  </Link>

                  {/* Mega Dropdown */}
                  {servicesDropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[880px] z-50">
                      <div className="bg-[#080E1E] border border-brandCyan/30 rounded-2xl shadow-2xl p-6 grid grid-cols-4 gap-5">
                        {SERVICE_CATEGORIES.map((category) => {
                          const catServices = getServicesByCategory(category.id);
                          return (
                            <div key={category.id} className="space-y-3">
                              <Link
                                href={`/services#${category.id}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="block font-heading font-bold text-sm text-brandCyan hover:underline border-b border-white/10 pb-2"
                              >
                                {category.name}
                              </Link>
                              <ul className="space-y-1.5">
                                {catServices.map((srv) => (
                                  <li key={srv.slug}>
                                    <Link
                                      href={`/services/${srv.slug}`}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      className="text-xs text-slate-300 hover:text-white flex items-start justify-between gap-1.5 py-1 group"
                                    >
                                      <span className="group-hover:translate-x-0.5 transition-transform">
                                        {srv.shortTitle}
                                      </span>
                                      {srv.badgeType === 'coming-soon' && (
                                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                                          Soon
                                        </span>
                                      )}
                                      {srv.badgeType === 'add-on' && (
                                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-brandCyan/20 text-brandCyan border border-brandCyan/30 shrink-0">
                                          Add-On
                                        </span>
                                      )}
                                      {srv.badgeType === 'partner' && (
                                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
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

                        <div className="col-span-4 pt-3 mt-1 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                          <span className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-brandCyan" />
                            100% Free Quote Within a Few Minutes • We Beat All Comparable Quotes by 5%
                          </span>
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="inline-flex items-center gap-1 font-semibold text-brandCyan hover:underline"
                          >
                            View All 25 Services <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-brandCyan bg-white/5'
                      : 'text-slate-200 hover:text-brandCyan hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Actions: Phone + Prominent Get a Free Quote Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BRAND_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-sm font-semibold text-white transition-all"
            >
              <Phone className="w-4 h-4 text-brandCyan" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>

            <Link
              href="/contact#quote-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandRoyal hover:to-brandBlue text-white font-heading font-bold text-sm shadow-[0_6px_20px_rgba(0,128,240,0.45)] hover:shadow-[0_8px_25px_rgba(16,192,255,0.55)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BRAND_INFO.phoneHref}
              aria-label="Call Nexora Cleaning"
              className="p-2.5 rounded-xl bg-brandBlue/20 border border-brandCyan/30 text-brandCyan"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060B17] border-t border-white/10 px-4 pt-4 pb-8 space-y-3 max-h-[85vh] overflow-y-auto">
          {navLinks.map((item) =>
            item.hasDropdown ? (
              <div key={item.href} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-white py-2"
                  >
                    Cleaning Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-2 text-brandCyan"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-3 border-l-2 border-brandCyan/30 space-y-4 py-2">
                    {SERVICE_CATEGORIES.map((category) => (
                      <div key={category.id} className="space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-brandCyan">
                          {category.name}
                        </p>
                        <div className="grid grid-cols-1 gap-1">
                          {getServicesByCategory(category.id).map((srv) => (
                            <Link
                              key={srv.slug}
                              href={`/services/${srv.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-slate-300 hover:text-white py-1 flex items-center justify-between"
                            >
                              <span>{srv.shortTitle}</span>
                              {srv.badgeType === 'coming-soon' && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                                  Coming Soon
                                </span>
                              )}
                              {srv.badgeType === 'add-on' && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-brandCyan/20 text-brandCyan">
                                  Add-On
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 text-base font-semibold border-b border-white/5 ${
                  isActive(item.href) ? 'text-brandCyan' : 'text-slate-200'
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <div className="pt-4 space-y-3">
            <Link
              href="/contact#quote-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-base shadow-lg"
            >
              <span>Get a Free Quote (Within Minutes)</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={BRAND_INFO.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-brandCyan" />
              <span>Call {BRAND_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${BRAND_INFO.mainEmail}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-5 text-slate-300 text-xs"
            >
              <Mail className="w-4 h-4 text-brandCyan" />
              <span>{BRAND_INFO.mainEmail}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
