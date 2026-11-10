'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Clock,
  Calendar,
  Sparkles,
  BadgePercent,
  ShieldCheck,
  Send,
  MessageCircle,
  MessageSquare,
  RotateCcw,
  AlertCircle,
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  CLEANING_SUPPLIES,
  getServicesByCategory,
} from '@/data/nexoraData';

interface QuoteFormProps {
  defaultService?: string;
  defaultSuburb?: string;
  compact?: boolean;
}

export default function QuoteForm({
  defaultService = 'End-of-Lease / Bond / Vacate Cleaning',
  defaultSuburb = '',
  compact = false,
}: QuoteFormProps) {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [suburb, setSuburb] = useState(defaultSuburb);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeMode, setPreferredTimeMode] = useState<'flexible' | 'specific'>('flexible');
  const [preferredTimeValue, setPreferredTimeValue] = useState('09:00');
  const [propertySize, setPropertySize] = useState('');
  const [notes, setNotes] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState(''); // Honeypot

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    if (defaultSuburb !== undefined && defaultSuburb !== '') {
      setSuburb(defaultSuburb);
    }
  }, [defaultSuburb]);

  // Read URL query params (?service=...&suburb=...) on client mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const suburbParam = params.get('suburb');
    if (serviceParam) setService(serviceParam);
    if (suburbParam) setSuburb(suburbParam);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (websiteUrl.trim() !== '') {
      setIsSubmitted(true);
      return;
    }

    if (!name.trim() || !phone.trim() || !suburb.trim()) {
      setErrorMessage(
        'Please enter your Name, Phone Number, and Suburb/Postcode so we can send your quote.'
      );
      return;
    }

    setIsSubmitting(true);

    const preferredTimeFormatted =
      preferredTimeMode === 'specific'
        ? `Specific Time (${preferredTimeValue})`
        : 'Flexible';

    const submissionData = {
      service,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || 'Not provided',
      suburb: suburb.trim(),
      preferredDate: preferredDate || 'Flexible',
      preferredTime: preferredTimeFormatted,
      propertySize: propertySize || 'Not specified',
      notes: notes.trim() || 'None',
      submittedAt: new Date().toISOString(),
    };

    // 1. Store in localStorage for local audit & fallback
    try {
      if (typeof window !== 'undefined') {
        const existing = JSON.parse(
          localStorage.getItem('nexora_enquiries') || '[]'
        );
        existing.push(submissionData);
        localStorage.setItem('nexora_enquiries', JSON.stringify(existing));
      }
    } catch {
      // ignore storage error
    }

    // 2. Relay to Nexora main inbox via FormSubmit AJAX endpoint (non-blocking)
    try {
      await fetch(BRAND_INFO.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Nexora Quote Request — ${submissionData.service} (${submissionData.suburb})`,
          _template: 'table',
          Service: submissionData.service,
          Name: submissionData.name,
          Phone: submissionData.phone,
          Suburb_Postcode: submissionData.suburb,
          Email: submissionData.email,
          Preferred_Date: submissionData.preferredDate,
          Preferred_Time: submissionData.preferredTime,
          Property_Size: submissionData.propertySize,
          Notes: submissionData.notes,
        }),
      });
    } catch {
      // Fallback gracefully if offline or blocked by adblocker
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setSuburb(defaultSuburb || '');
    setPreferredDate('');
    setPreferredTimeMode('flexible');
    setPreferredTimeValue('09:00');
    setPropertySize('');
    setNotes('');
    setErrorMessage('');
  };

  const buildSummaryText = () => {
    const timeText =
      preferredTimeMode === 'specific'
        ? `Specific Time (${preferredTimeValue})`
        : 'Flexible';
    return `G'day Nexora Cleaning! I just submitted an online quote request:
- Service: ${service}
- Name: ${name}
- Phone: ${phone}
- Suburb: ${suburb}
- Preferred Date: ${preferredDate || 'Flexible'}
- Time: ${timeText}
${notes ? `- Notes: ${notes}` : ''}`;
  };

  const getWhatsAppEnquiryLink = () => {
    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
      buildSummaryText()
    )}`;
  };

  const getSmsEnquiryLink = () => {
    return `${BRAND_INFO.smsHref}?body=${encodeURIComponent(buildSummaryText())}`;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl border-2 border-emerald-500/40 shadow-xl p-6 sm:p-10 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Enquiry Received • Perth WA Team
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
            NEXORA CLEANING — ENQUIRY CONFIRMED
          </h3>
          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-xl mx-auto leading-relaxed bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4">
            &ldquo;{BRAND_INFO.confirmationMessage}&rdquo;
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs sm:text-sm text-slate-600 max-w-lg mx-auto space-y-1.5 border border-slate-200">
          <p className="font-bold text-slate-900 uppercase tracking-wider text-xs pb-1 border-b border-slate-200">
            Enquiry Summary:
          </p>
          <p>
            <strong className="text-slate-800">Service:</strong> {service || 'General Cleaning'}
          </p>
          <p>
            <strong className="text-slate-800">Name:</strong> {name}
          </p>
          <p>
            <strong className="text-slate-800">Phone:</strong> {phone}
          </p>
          <p>
            <strong className="text-slate-800">Suburb / Address:</strong> {suburb}
          </p>
          <p>
            <strong className="text-slate-800">Preferred Time:</strong>{' '}
            {preferredTimeMode === 'flexible'
              ? 'Flexible'
              : `Specific Time (${preferredTimeValue})`}
          </p>
          {notes && (
            <p>
              <strong className="text-slate-800">Notes:</strong> {notes}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={getWhatsAppEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fast-Track via WhatsApp</span>
          </a>

          <a
            href={getSmsEnquiryLink()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brandBlue hover:bg-brandRoyal text-white font-heading font-bold text-sm shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send via Text / SMS</span>
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Submit Another Quote</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="quote-form"
      className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden"
    >
      {/* Clean Header Bar */}
      <div className="bg-gradient-to-r from-[#071126] via-[#0B1B3B] to-[#071126] p-6 sm:p-7 text-white border-b border-brandCyan/30">
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brandCyan/20 border border-brandCyan/40 text-brandCyan text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            100% Free Quote in 3 Minutes
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
            <BadgePercent className="w-3.5 h-3.5" />
            We Beat All Quotes by 5%
          </span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          NEXORA CLEANING — FREE QUOTE
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Free, no-obligation quote — price confirmed upfront before work begins.
        </p>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className={compact ? 'p-5 space-y-4' : 'p-6 sm:p-8 space-y-5'}>
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Honeypot Spam Trap */}
        <input
          type="text"
          name="website_url"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Service Selection (Optional) */}
        <div>
          <label
            htmlFor="nexora-service"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Service Required <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <select
            id="nexora-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 font-medium focus:bg-white focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none transition-all"
          >
            <option value="End-of-Lease / Bond / Vacate Cleaning">
              End-of-Lease / Bond / Vacate Cleaning (Popular)
            </option>
            {SERVICE_CATEGORIES.map((cat) => (
              <optgroup key={cat.id} label={cat.name}>
                {getServicesByCategory(cat.id).map((srv) => (
                  <option key={srv.slug} value={srv.title}>
                    {srv.title}
                    {srv.badgeType === 'add-on'
                      ? ' (Add-On)'
                      : srv.badgeType === 'coming-soon'
                      ? ' (Coming Soon - Register)'
                      : srv.badgeType === 'partner'
                      ? ' (Trusted Partner)'
                      : ''}
                  </option>
                ))}
              </optgroup>
            ))}
            <optgroup label="Supplies & Custom Bundles">
              <option value={CLEANING_SUPPLIES.quoteValue}>
                {CLEANING_SUPPLIES.quoteValue}
              </option>
              <option value="Custom / Multiple Cleaning Services">
                Custom / Multiple Cleaning Services
              </option>
            </optgroup>
          </select>
        </div>

        {/* Required Fields: Name, Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nexora-name"
              className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="nexora-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Liam Walker"
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="nexora-phone"
              className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="nexora-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 0412 345 678"
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Required Suburb + Optional Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nexora-suburb"
              className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
            >
              Suburb / Postcode <span className="text-red-500">*</span>
            </label>
            <input
              id="nexora-suburb"
              type="text"
              required
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
              placeholder="e.g. Subiaco 6008 or Joondalup"
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="nexora-email"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Email <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="nexora-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com.au"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Optional Date & Property Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nexora-date"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Preferred Date <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="nexora-date"
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 focus:bg-white focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="nexora-size"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Property Size <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <select
              id="nexora-size"
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 focus:bg-white focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none transition-all"
            >
              <option value="">Select size (optional)...</option>
              <option value="Studio / 1 Bed, 1 Bath">Studio / 1 Bed, 1 Bath</option>
              <option value="2 Bed, 1–2 Bath">2 Bed, 1–2 Bath</option>
              <option value="3 Bed, 2 Bath">3 Bed, 2 Bath</option>
              <option value="4+ Bed / Large Family Home">4+ Bed / Large Family Home</option>
              <option value="Double-Storey Residence">Double-Storey Residence</option>
              <option value="Small Office / Retail (< 200m²)">Small Office / Retail (&lt; 200m²)</option>
              <option value="Commercial / School / Childcare / Strata">
                Commercial / School / Childcare / Strata
              </option>
              <option value="Builders / Pre-Sale / Handover">
                Builders / Pre-Sale / Handover
              </option>
            </select>
          </div>
        </div>

        {/* Preferred Time: 2 Explicit Options (Option 1: Flexible | Option 2: Time & Clock) */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Preferred Time <span className="text-slate-400 font-normal">(Optional — Choose 1 of 2 Options)</span>
          </label>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setPreferredTimeMode('flexible')}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                preferredTimeMode === 'flexible'
                  ? 'bg-brandBlue text-white border-brandBlue shadow-sm'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-brandBlue/50'
              }`}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>1. Flexible</span>
            </button>

            <button
              type="button"
              onClick={() => setPreferredTimeMode('specific')}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                preferredTimeMode === 'specific'
                  ? 'bg-brandBlue text-white border-brandBlue shadow-sm'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-brandBlue/50'
              }`}
            >
              <Clock className="w-4 h-4 shrink-0" />
              <span>2. Time &amp; Clock</span>
            </button>
          </div>

          {preferredTimeMode === 'specific' && (
            <div className="pt-2 space-y-2.5 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label
                  htmlFor="nexora-time-clock"
                  className="text-xs font-semibold text-slate-700 shrink-0"
                >
                  Pick Clock Time:
                </label>
                <input
                  id="nexora-time-clock"
                  type="time"
                  value={preferredTimeValue}
                  onChange={(e) => setPreferredTimeValue(e.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-900 focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: '8:00 AM (Early)', value: '08:00' },
                  { label: '10:00 AM', value: '10:00' },
                  { label: '12:00 PM (Midday)', value: '12:00' },
                  { label: '2:00 PM', value: '14:00' },
                  { label: '4:00 PM', value: '16:00' },
                  { label: 'After-Hours (6:00 PM)', value: '18:00' },
                ].map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setPreferredTimeValue(preset.value)}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                      preferredTimeValue === preset.value
                        ? 'bg-brandCyan/20 border-brandBlue text-brandBlue'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notes with Disappearing Placeholder */}
        <div>
          <label
            htmlFor="nexora-notes"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Notes <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="nexora-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Let us know if we need to know anything like property size, special requirements, bore water glass stains, oven add-on, or lockbox code..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandRoyal hover:to-brandBlue text-white font-heading font-extrabold text-base shadow-[0_10px_25px_rgba(0,128,240,0.35)] hover:shadow-[0_12px_30px_rgba(16,192,255,0.45)] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          <span>
            {isSubmitting ? 'Confirming Your Quote...' : 'Request My 100% Free Quote →'}
          </span>
        </button>

        {/* Bottom Trust Micro-Copy */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-500 text-center pt-1">
          <span className="inline-flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Price confirmed before work begins
          </span>
          <span>•</span>
          <span>We beat any comparable written quote by 5%</span>
          <span>•</span>
          <span>Direct to {BRAND_INFO.mainEmail}</span>
        </div>
      </form>
    </div>
  );
}
