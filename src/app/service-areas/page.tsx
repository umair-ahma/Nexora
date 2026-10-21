'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BadgePercent,
} from 'lucide-react';
import { PERTH_REGIONS, SERVICE_CATEGORIES } from '@/data/nexoraData';
import QuoteForm from '@/components/QuoteForm';

export default function ServiceAreasPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRegions = PERTH_REGIONS.map((region) => {
    if (!searchQuery.trim()) return region;
    const q = searchQuery.toLowerCase();
    const matchingSuburbs = region.suburbs.filter(
      (s) =>
        s.toLowerCase().includes(q) ||
        region.regionName.toLowerCase().includes(q) ||
        region.postcodeRange.toLowerCase().includes(q)
    );
    return {
      ...region,
      suburbs: matchingSuburbs,
    };
  }).filter((r) => r.suburbs.length > 0);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#040814] via-[#08132B] to-[#0B1936] text-white py-16 sm:py-20 border-b border-brandCyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandCyan/15 border border-brandCyan/30 text-brandCyan text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>All Over Perth &amp; Greater Western Australia</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Areas We Service Across <span className="text-brandCyan">Perth, WA</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Our mobile cleaning teams cover the entire Perth metropolitan area—from Yanchep and
              Joondalup in the north to Fremantle, Rockingham, and Mandurah in the south, and out
              to Midland, Ellenbrook, and the Perth Hills in the east.
            </p>

            {/* Interactive Suburb Search Bar */}
            <div className="pt-2 max-w-xl">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search your Perth suburb or postcode (e.g. Subiaco, Joondalup, 6000)..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-brandCyan"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Suburb Directory */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filteredRegions.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 space-y-4">
              <MapPin className="w-10 h-10 text-brandBlue mx-auto" />
              <h2 className="font-heading font-bold text-2xl text-slate-900">
                Don&apos;t see &ldquo;{searchQuery}&rdquo; listed? We still cover your area!
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                We service all suburbs across Greater Perth and surrounding WA regions. Enter your
                suburb or postcode in the quote form below and we&apos;ll confirm availability
                within minutes.
              </p>
              <a
                href="#area-quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brandBlue text-white font-heading font-bold text-sm"
              >
                <span>Request a Quote for {searchQuery}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRegions.map((region) => (
                <div
                  key={region.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="font-heading font-extrabold text-xl text-slate-900">
                            {region.regionName}
                          </h2>
                          <span className="text-xs font-semibold text-brandBlue">
                            Postcodes: {region.postcodeRange}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {region.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {region.suburbs.map((suburb) => (
                        <a
                          key={suburb}
                          href="#area-quote"
                          className="text-xs px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-brandBlue hover:text-white border border-slate-200/90 text-slate-700 font-medium transition-colors"
                        >
                          {suburb}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      No extra metro travel surcharge
                    </span>
                    <a
                      href="#area-quote"
                      className="inline-flex items-center gap-1 font-bold text-brandBlue hover:underline"
                    >
                      Book in this region <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Services Available in All Regions */}
          <div className="bg-gradient-to-r from-[#071022] to-[#0D1E40] rounded-3xl p-6 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brandCyan">
                <Sparkles className="w-4 h-4" />
                Full Service Availability Across Perth
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                All 25 Cleaning Services Available in Every Suburb
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                From End-of-Lease Bond Cleaning and Regular House Cleaning to Office, School,
                Childcare, Builders Cleans, Pressure Washing, and Oven Add-Ons.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services#${cat.id}`}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-brandBlue text-white text-xs font-heading font-bold border border-white/15 transition-colors"
                >
                  {cat.shortName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        id="area-quote"
        className="py-20 bg-white border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brandBlue">
              <BadgePercent className="w-4 h-4" />
              We Beat All Comparable Quotes by 5%
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Get a Free Quote for Your Perth Suburb
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Enter your Name, Phone, and Suburb/Postcode below — we&apos;ll respond within minutes.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
