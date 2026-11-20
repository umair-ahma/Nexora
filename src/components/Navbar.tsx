'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Package,
  MessageSquare,
  MessageCircle,
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  CLEANING_SUPPLIES,
  getServicesByCategory,
} from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Industries', href: '/industries' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden border border-slate-200 bg-slate-950 flex items-center justify-center shadow-sm group-hover:border-brandBlue transition-colors shrink-0">
              <img
                src="/images/nexora-logo.jpg"
                alt="Nexora Cleaning Co Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[13.5px] sm:text-lg lg:text-xl tracking-tight text-slate-900 leading-none whitespace-nowrap">
                NEXORA <span className="text-brandBlue">CLEANING</span>
              </span>
              <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-semibold whitespace-nowrap">
                Perth • WA
              </span>
            </div>
          </Link>

          {/* Clean, Uncrowded Desktop Navigation (5 Links) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                    className={`inline-flex items-center gap-1.5 py-2 text-sm font-heading font-bold transition-colors ${
                      isActive(item.href)
                        ? 'text-brandBlue'
                        : 'text-slate-700 hover:text-brandBlue'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-brandBlue' : 'text-slate-400'
                      }`}
                    />
                  </Link>

                  {/* Clean 5-Column Division Dropdown (4 Core Divisions + Cleaning Supplies Tab) */}
                  {servicesDropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[1080px] max-w-[95vw] z-50">
                      <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 grid grid-cols-5 gap-4">
                        {SERVICE_CATEGORIES.map((category) => {
                          const topServices = getServicesByCategory(category.id).slice(0, 4);
                          return (
                            <div
                              key={category.id}
                              className="p-3.5 rounded-2xl hover:bg-slate-50 transition-colors flex flex-col justify-between space-y-3"
                            >
                              <div className="space-y-2.5">
                                <Link
                                  href={`/services#${category.id}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="flex items-center gap-2 font-heading font-extrabold text-xs uppercase tracking-wider text-brandBlue hover:underline"
                                >
                                  <DynamicIcon name={category.iconName} className="w-4 h-4 shrink-0" />
                                  <span>{category.shortName}</span>
                                </Link>
                                <ul className="space-y-1.5 pt-1 border-t border-slate-100">
                                  {topServices.map((srv) => (
                                    <li key={srv.slug}>
                                      <Link
                                        href={`/services/${srv.slug}`}
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="text-xs text-slate-600 hover:text-brandBlue font-medium block py-1 leading-snug"
                                      >
                                        {srv.shortTitle}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <Link
                                href={`/services#${category.id}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-slate-500 hover:text-brandBlue pt-1"
                              >
                                <span>View all</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          );
                        })}

                        {/* 5th Tab: Cleaning Supplies Form Enquiry (PDF p. 12) */}
                        <div className="bg-sky-50/90 border border-sky-200/80 rounded-2xl p-4 flex flex-col justify-between space-y-3">
                          <div className="space-y-2">
                            <span className="inline-flex items-center gap-1.5 text-brandBlue text-[11px] font-extrabold uppercase tracking-wider">
                              <Package className="w-3.5 h-3.5" />
                              Direct Supply
                            </span>
                            <h4 className="font-heading font-extrabold text-sm text-slate-900">
                              Cleaning Supplies
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Washroom consumables, toilet tissue, towels &amp; commercial supplies.
                            </p>
                          </div>

                          <Link
                            href={CLEANING_SUPPLIES.contactHref}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-xs shadow-sm transition-colors"
                          >
                            <Package className="w-3.5 h-3.5" />
                            <span>Supply Quote Form</span>
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
                  className={`min-h-[44px] inline-flex items-center py-2 text-sm font-heading font-bold transition-colors ${
                    isActive(item.href)
                      ? 'text-brandBlue'
                      : 'text-slate-700 hover:text-brandBlue'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Clean Right Actions: Phone + Get a Quote Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={BRAND_INFO.phoneHref}
              className="min-h-[44px] inline-flex items-center gap-2 text-sm font-heading font-bold text-slate-700 hover:text-brandBlue transition-colors"
            >
              <Phone className="w-4 h-4 text-brandBlue" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>

            <Link
              href="/contact#quote-form"
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-sm shadow-sm hover:shadow-md transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sleek Mobile Header Controls (44px+ Tap Targets) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <Link
              href="/contact#quote-form"
              className="min-h-[44px] inline-flex items-center justify-center px-3 sm:px-3.5 py-2.5 rounded-xl bg-brandBlue text-white font-heading font-bold text-[11px] sm:text-xs shadow-sm whitespace-nowrap"
            >
              Free Quote
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean, Breathable Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 max-h-[82vh] overflow-y-auto shadow-xl"
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`min-h-[44px] flex items-center py-2.5 px-3 rounded-xl text-sm font-heading font-bold ${
              isActive('/') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            Home
          </Link>

          {/* Simple 1-Level Services Expandable */}
          <div className="rounded-xl border border-slate-200/90 overflow-hidden">
            <div className="flex items-center justify-between px-3 min-h-[44px] bg-slate-50/60">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center text-sm font-heading font-bold text-slate-900"
              >
                Cleaning Services
              </Link>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-label="Toggle Service Divisions"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg text-brandBlue"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="p-2.5 bg-white grid grid-cols-1 gap-1.5 border-t border-slate-100">
                {SERVICE_CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    href={`/services#${category.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-xs font-heading font-bold text-slate-800"
                  >
                    <span>{category.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brandBlue" />
                  </Link>
                ))}
                <Link
                  href={CLEANING_SUPPLIES.contactHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg bg-sky-50 text-xs font-heading font-bold text-brandBlue"
                >
                  <span className="flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />
                    Cleaning Supplies Quote
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/industries"
            onClick={() => setMobileMenuOpen(false)}
            className={`min-h-[44px] flex items-center py-2.5 px-3 rounded-xl text-sm font-heading font-bold ${
              isActive('/industries') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            Industries We Serve
          </Link>

          <Link
            href="/service-areas"
            onClick={() => setMobileMenuOpen(false)}
            className={`min-h-[44px] flex items-center py-2.5 px-3 rounded-xl text-sm font-heading font-bold ${
              isActive('/service-areas') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            Perth Service Areas
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`min-h-[44px] flex items-center py-2.5 px-3 rounded-xl text-sm font-heading font-bold ${
              isActive('/about') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            About Nexora
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`min-h-[44px] flex items-center py-2.5 px-3 rounded-xl text-sm font-heading font-bold ${
              isActive('/contact') ? 'text-brandBlue bg-sky-50' : 'text-slate-900'
            }`}
          >
            Contact Us
          </Link>

          <div className="pt-2 border-t border-slate-100 grid grid-cols-3 gap-2">
            <a
              href={BRAND_INFO.phoneHref}
              className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-brandBlue" />
              <span>Call</span>
            </a>
            <a
              href={`${BRAND_INFO.smsHref}?body=${encodeURIComponent(
                "G'day Nexora Cleaning! I'd like a free quote in Perth."
              )}`}
              className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sky-50 text-brandBlue font-bold text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Text SMS</span>
            </a>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                "G'day Nexora Cleaning! I'd like a free quote in Perth."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
