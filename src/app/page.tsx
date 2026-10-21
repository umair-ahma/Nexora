import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  BadgePercent,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  CLEANING_SERVICES,
  INDUSTRIES_DATA,
  TRUST_CREDENTIALS,
  WHY_CHOOSE_NEXORA,
  HOW_IT_WORKS_STEPS,
  PERTH_REGIONS,
  HOME_FAQS,
} from '@/data/nexoraData';
import DynamicIcon from '@/components/DynamicIcon';
import ServiceCard from '@/components/ServiceCard';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const featuredServices = CLEANING_SERVICES.filter((srv) => srv.featuredOnHome);

  return (
    <div className="flex flex-col">
      {/* =====================================================================
          SECTION 2: HERO SECTION (The First Thing Visitors See)
      ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#040711] via-[#071126] to-[#0A1835] text-white py-16 sm:py-24 lg:py-28 border-b border-brandCyan/20">
        {/* Decorative Electric Cyan Glow */}
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[520px] h-[520px] rounded-full bg-brandCyan/15 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 left-10 w-[420px] h-[420px] rounded-full bg-brandBlue/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Copy (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-brandCyan/30 text-xs sm:text-sm font-semibold text-brandCyan">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Perth &amp; Western Australia • Residential, Commercial &amp; Specialist</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Professional Cleaning Solutions Across{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandCyan via-sky-300 to-brandBlue">
                  Western Australia.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Reliable cleaning for homes, businesses, builders and specialist facilities.
                Tailored services, clear communication and a team focused on quality.
              </p>

              {/* Key Value Proposition Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                  <Sparkles className="w-5 h-5 text-brandCyan shrink-0" />
                  <span className="text-xs font-bold text-white leading-snug">
                    100% Free Quote Within a Few Minutes
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-400/30 rounded-xl px-3.5 py-2.5">
                  <BadgePercent className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-emerald-200 leading-snug">
                    We Will Beat All Quotes by 5%
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                  <ShieldCheck className="w-5 h-5 text-brandCyan shrink-0" />
                  <span className="text-xs font-bold text-white leading-snug">
                    Price Confirmed Before Work Begins
                  </span>
                </div>
              </div>

              {/* Exact Required Hero Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <a
                  href="#final-enquiry"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandRoyal hover:to-brandBlue text-white font-heading font-extrabold text-base shadow-[0_10px_30px_rgba(0,128,240,0.45)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-bold text-base backdrop-blur-sm transition-all"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Direct Contact Strip */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-brandCyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-brandCyan" />
                  <span>
                    Call <strong className="text-white">{BRAND_INFO.phoneDisplay}</strong>
                  </span>
                </a>
                <a
                  href={`mailto:${BRAND_INFO.mainEmail}`}
                  className="inline-flex items-center gap-2 hover:text-brandCyan transition-colors"
                >
                  <Mail className="w-4 h-4 text-brandCyan" />
                  <span>{BRAND_INFO.mainEmail}</span>
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brandCyan" />
                  <span>All Perth Metro Suburbs</span>
                </span>
              </div>
            </div>

            {/* Hero Right Column: Brand Showcase & Fast Quote Preview Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#081226]/90 border border-brandCyan/30 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6">
                <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brandCyan bg-black shrink-0 shadow-lg">
                    <img
                      src="/images/nexora-logo.jpg"
                      alt="Nexora Cleaning Co Emblem"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brandCyan block">
                      Western Australia Standard
                    </span>
                    <h2 className="font-heading text-xl font-extrabold text-white">
                      Nexora Cleaning Co
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Trust • Dedicated Service Pages • Fast Mobile Quotes
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    4 Specialist Cleaning Divisions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/services#${cat.id}`}
                        className="p-3.5 rounded-xl bg-white/5 hover:bg-brandBlue/20 border border-white/10 hover:border-brandCyan/40 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <DynamicIcon
                            name={cat.iconName}
                            className="w-4 h-4 text-brandCyan"
                          />
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brandCyan transition-colors" />
                        </div>
                        <p className="font-heading font-bold text-xs text-white">
                          {cat.shortName}
                        </p>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {cat.tagline}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-emerald-500/15 to-brandCyan/15 border border-emerald-400/30 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-heading font-bold text-sm">
                    <BadgePercent className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>5% Price-Beat Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Have a written quote from another insured Perth cleaner? Send it through—we
                    will beat it by 5% while delivering our full documented checklist.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#final-enquiry"
                    className="flex-1 py-3.5 px-4 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-xs sm:text-sm text-center transition-colors"
                  >
                    Fill 60-Second Quote Form
                  </a>
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                      'Hi Nexora Cleaning! I would like a free quote in Perth.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: TRUST & CREDENTIALS
      ===================================================================== */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brandCyan">
              Verified Trust &amp; Credentials
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Screened, Insured &amp; Ready for Your Property or Facility
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TRUST_CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className="bg-[#0B1224] border border-white/10 hover:border-brandCyan/40 rounded-2xl p-5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brandBlue/20 border border-brandCyan/30 text-brandCyan flex items-center justify-center mb-3">
                  <DynamicIcon name={cred.iconName} className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-1.5">
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

      {/* =====================================================================
          SECTION 4: OUR CLEANING SERVICES
      ===================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                Our Cleaning Services
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
                Dedicated Service Pages for Every Cleaning Need
              </h2>
              <p className="text-base text-slate-600">
                Rather than putting every detail on one long page, each major Nexora cleaning
                service has its own dedicated page with a clear checklist and instant quote option.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-brandBlue text-white font-heading font-bold text-sm transition-colors shrink-0"
            >
              <span>View All 25 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Category Overview Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {SERVICE_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/services#${category.id}`}
                className="group bg-gradient-to-br from-[#070E20] to-[#0D1D3A] text-white rounded-2xl p-6 border border-brandCyan/20 hover:border-brandCyan transition-all shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-brandCyan/15 border border-brandCyan/30 text-brandCyan flex items-center justify-center mb-4">
                  <DynamicIcon name={category.iconName} className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-brandCyan transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {category.tagline}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-brandCyan mt-4">
                  Explore Category <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {/* Featured Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {/* Complete Quick-Jump Directory of All 25 Services */}
          <div className="mt-14 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Complete Directory of All 25 Nexora Cleaning Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Click any service below to open its dedicated scope page and request a free quote.
                </p>
              </div>
              <a
                href="#final-enquiry"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brandBlue hover:underline"
              >
                <span>Need a custom bundle? Enquire below</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
              {SERVICE_CATEGORIES.map((category) => (
                <div key={category.id} className="space-y-3">
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brandBlue">
                    {category.name}
                  </h4>
                  <ul className="space-y-2">
                    {CLEANING_SERVICES.filter((s) => s.categoryId === category.id).map((srv) => (
                      <li key={srv.slug}>
                        <Link
                          href={`/services/${srv.slug}`}
                          className="text-xs sm:text-sm text-slate-700 hover:text-brandBlue font-medium flex items-center justify-between gap-2 py-0.5 group"
                        >
                          <span className="group-hover:translate-x-0.5 transition-transform">
                            {srv.title}
                          </span>
                          {srv.badgeType === 'coming-soon' && (
                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800 shrink-0">
                              Coming Soon
                            </span>
                          )}
                          {srv.badgeType === 'add-on' && (
                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-sky-100 text-brandBlue shrink-0">
                              Add-On
                            </span>
                          )}
                          {srv.badgeType === 'partner' && (
                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-800 shrink-0">
                              Partner
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: INDUSTRIES WE SUPPORT
      ===================================================================== */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
              Industries We Support
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Tailored Cleaning Across Western Australia&apos;s Key Sectors
            </h2>
            <p className="text-base text-slate-600">
              Homes, offices, construction, education, childcare, aged care, events, property
              managers and other facilities that Nexora is equipped and screened to service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_DATA.map((industry) => (
              <div
                key={industry.id}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-brandBlue/50 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center mb-4">
                    <DynamicIcon name={industry.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {industry.shortDesc}
                  </p>
                </div>

                <Link
                  href={`/industries#${industry.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brandBlue hover:underline pt-2 border-t border-slate-200/60"
                >
                  <span>Sector Standards &amp; Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: WHY CHOOSE NEXORA?
      ===================================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#050914] to-[#0A1429] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brandCyan">
              Why Choose Nexora?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              The Real Operational Differences
            </h2>
            <p className="text-base text-slate-300">
              A documented cleaning checklist, quality inspections, clear quotes, reliable
              communication, suitable screening and a consistent service standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_NEXORA.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-brandCyan/40 rounded-2xl p-6 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandBlue to-brandCyan text-white flex items-center justify-center mb-4 shadow-md">
                  <DynamicIcon name={item.iconName} className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: HOW IT WORKS (4 Steps)
      ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
              Simple 4-Step Process
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              How It Works
            </h2>
            <p className="text-base text-slate-600">
              Booking a reliable clean in Perth takes just minutes—with no obligation and zero
              hidden surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 text-brandCyan font-heading font-extrabold text-lg mb-4 shadow-sm">
                    {step.stepNumber}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: SERVICE COMMITMENTS, PERTH SUBURBS & FAQS
      ===================================================================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Part A: Honest Service Guarantees + Perth Suburbs Coverage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Perth Suburbs We Cover (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                  Areas We Service
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-slate-900">
                  Covering All Suburbs Across Perth &amp; Surrounds
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Our mobile cleaning crews service the entire Perth metropolitan area—from
                  Joondalup and Yanchep in the north to Fremantle, Rockingham, and Mandurah in the
                  south, and out to Midland, Ellenbrook, and the Perth Hills.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERTH_REGIONS.map((region) => (
                  <div
                    key={region.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-sm text-slate-900">
                        {region.regionName}
                      </h3>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {region.postcodeRange}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {region.suburbs.slice(0, 8).map((suburb) => (
                        <span
                          key={suburb}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700"
                        >
                          {suburb}
                        </span>
                      ))}
                      <Link
                        href="/service-areas"
                        className="text-[11px] px-2 py-0.5 rounded-md bg-brandBlue/10 text-brandBlue font-semibold hover:underline"
                      >
                        +{region.suburbs.length - 8} more
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 text-sm font-bold text-brandBlue hover:underline"
              >
                <span>View Full Perth Suburb &amp; Postcode Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Verified Service Commitments (5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#070E20] to-[#0B1833] text-white rounded-3xl p-6 sm:p-8 border border-brandCyan/30 shadow-xl space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-brandCyan">
                  Our Service Standard
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white">
                  Transparent Commitments You Can Count On
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  We believe in earning your trust through verified credentials, clear written
                  checklists, and honest guarantees.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-brandCyan font-heading font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Price Confirmed Before Work Begins</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every quote is 100% free and no-obligation. We confirm your exact scope and
                    price upfront so there are never surprise charges on completion.
                  </p>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-300 font-heading font-bold text-sm">
                    <BadgePercent className="w-4 h-4 shrink-0" />
                    <span>We Beat Any Comparable Quote by 5%</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Send us any current written quote from an insured WA cleaning provider for an
                    identical checklist and we will beat it by 5%.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-brandCyan font-heading font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Post-Clean Follow-Up &amp; Inspection Support</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our team follows up after completing your clean. For end-of-lease bookings, we
                    stand behind our documented checklist for your property manager&apos;s inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Frequently Asked Questions */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brandBlue">
                Common Questions
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our quotes, screening, equipment, and Perth
                service coverage.
              </p>
            </div>

            <FaqAccordion items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: FINAL ENQUIRY SECTION ("Let's Get Your Space Clean.")
      ===================================================================== */}
      <section
        id="final-enquiry"
        className="py-20 bg-gradient-to-b from-white to-slate-100 border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Prominent Heading, Contact Info & Business Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brandBlue/10 text-brandBlue text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  100% Free Quote Within a Few Minutes
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Let&apos;s Get Your Space Clean.
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  Request a quote without having to call first. Only your{' '}
                  <strong className="text-slate-900">Name</strong>,{' '}
                  <strong className="text-slate-900">Phone</strong>, and{' '}
                  <strong className="text-slate-900">Suburb/Postcode</strong> are required—all
                  other fields are optional for your convenience.
                </p>
              </div>

              {/* Price Beat Highlight Box */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-800 font-heading font-bold text-sm">
                  <BadgePercent className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>We Will Beat All Quotes by 5%</span>
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Free, no-obligation quote — price confirmed before work begins. Mention any
                  comparable written quote in the notes and we&apos;ll beat it by 5%.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-3 pt-2">
                <a
                  href={BRAND_INFO.phoneHref}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-brandBlue transition-all shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Phone Enquiries
                    </span>
                    <span className="font-heading font-bold text-lg text-slate-900">
                      {BRAND_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_INFO.mainEmail}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-brandBlue transition-all shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Main Website Email
                    </span>
                    <span className="font-heading font-bold text-base text-slate-900">
                      {BRAND_INFO.mainEmail}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      Admin: {BRAND_INFO.adminEmail} • Accounts: {BRAND_INFO.accountsEmail}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Business Hours
                    </span>
                    <span className="font-heading font-bold text-sm text-slate-900 block">
                      {BRAND_INFO.businessHours}
                    </span>
                    <span className="text-xs text-slate-500">
                      {BRAND_INFO.commercialHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Mobile-Friendly Quote Form (7 Cols) */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
