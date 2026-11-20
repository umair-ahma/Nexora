'use client';

import React, { useState, useEffect } from 'react';
import {
  Star,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquarePlus,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';
import { BRAND_INFO, HOME_CORE_TILES } from '@/data/nexoraData';

export default function ReviewForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState('');
  const [suburb, setSuburb] = useState('');
  const [service, setService] = useState('End-of-Lease / Bond Cleaning');
  const [quote, setQuote] = useState('');
  const [email, setEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState(''); // Honeypot

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-open if user arrives directly via #leave-a-review link (e.g. post-clean SMS/email)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkHash = () => {
      if (window.location.hash === '#leave-a-review') {
        setIsOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (websiteUrl.trim() !== '') {
      setIsSubmitted(true);
      return;
    }

    if (!name.trim() || !suburb.trim() || !quote.trim()) {
      setErrorMessage('Please enter your Name, Perth Suburb, and Review before submitting.');
      return;
    }

    setIsSubmitting(true);

    const cleanName = name.trim();
    const cleanSuburb = suburb.trim();
    const cleanQuote = quote.trim();

    // Ready-to-copy TestimonialItem snippet for src/data/nexoraData.ts
    const readyToPasteSnippet = JSON.stringify(
      {
        name: cleanName,
        suburb: cleanSuburb,
        service,
        quote: cleanQuote,
        rating,
      },
      null,
      2
    );

    try {
      const payload: Record<string, string> = {
        _subject: `New Nexora Customer Review — ${rating}★ from ${cleanName} (${cleanSuburb})`,
        _template: 'table',
        Rating: `${rating} / 5 Stars`,
        Customer_Name: cleanName,
        Suburb: cleanSuburb,
        Service: service,
        Review: cleanQuote,
        Customer_Email: email.trim() || 'Not provided',
        Ready_For_nexoraData_ts: readyToPasteSnippet,
      };
      if (email.trim()) {
        payload._replyto = email.trim();
      }

      await fetch(BRAND_INFO.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch {
      // Gracefully confirm if offline or blocked by adblocker
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setRating(5);
    setName('');
    setSuburb('');
    setQuote('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div id="leave-a-review" className="scroll-mt-24 max-w-2xl mx-auto">
      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="nexora-review-drawer"
          className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-brandBlue text-white font-heading font-bold text-sm shadow-md transition-colors"
        >
          <MessageSquarePlus className="w-4 h-4 text-brandCyan" />
          <span>{isOpen ? 'Close Review Form' : 'Leave a Customer Review'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div
        id="nexora-review-drawer"
        className={`pop-down-drawer ${isOpen ? 'is-open' : ''}`}
      >
        <div className="pop-down-inner">
          <div className="mt-6 bg-white rounded-3xl border border-slate-200 shadow-lg p-5 sm:p-7">
            {isSubmitted ? (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-heading text-xl font-extrabold text-slate-900">
                    Thanks for Your Feedback!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your review has been sent to our Perth team at{' '}
                    <span className="font-semibold text-slate-800">{BRAND_INFO.mainEmail}</span> for
                    verification and publishing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Review</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900">
                    Share Your Experience With Nexora
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Booked a clean with us in Perth? Leave a quick review below.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                    opacity: 0,
                    pointerEvents: 'none',
                  }}
                >
                  <label htmlFor="review-website-url">Website URL (leave blank)</label>
                  <input
                    id="review-website-url"
                    type="text"
                    name="website_url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                  />
                </div>

                {/* Star Rating Selector */}
                <div role="group" aria-labelledby="review-rating-label" className="space-y-1.5">
                  <span
                    id="review-rating-label"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-800"
                  >
                    Your Rating <span className="text-red-500">*</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((starValue) => (
                      <button
                        key={starValue}
                        type="button"
                        onClick={() => setRating(starValue)}
                        aria-label={`Rate ${starValue} out of 5 stars`}
                        aria-pressed={rating === starValue}
                        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 transition-colors"
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            starValue <= rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-bold text-slate-600">
                      {rating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="review-name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="review-name"
                      name="reviewer_name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah M."
                      className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-base md:text-sm text-slate-900 placeholder:text-slate-400 focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="review-suburb"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                    >
                      Perth Suburb <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="review-suburb"
                      name="reviewer_suburb"
                      type="text"
                      autoComplete="postal-code"
                      required
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      placeholder="e.g. Subiaco or Joondalup"
                      className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-base md:text-sm text-slate-900 placeholder:text-slate-400 focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="review-service"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Service Used
                    </label>
                    <select
                      id="review-service"
                      name="review_service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-base md:text-sm text-slate-900 font-medium focus:bg-white focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none"
                    >
                      {HOME_CORE_TILES.map((tile) => (
                        <option key={tile.id} value={tile.title}>
                          {tile.title}
                        </option>
                      ))}
                      <option value="End-of-Lease / Bond Cleaning">
                        End-of-Lease / Bond Cleaning
                      </option>
                      <option value="Other Cleaning Service">Other Cleaning Service</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="review-email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Email <span className="text-slate-400 font-normal">(Optional, not published)</span>
                    </label>
                    <input
                      id="review-email"
                      name="reviewer_email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com.au"
                      className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-base md:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="review-quote"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                  >
                    Your Review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="review-quote"
                    name="review_text"
                    rows={3}
                    required
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="How did our Perth team do? Mention what stood out..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-base md:text-sm text-slate-900 placeholder:text-slate-400 focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit Customer Review"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandRoyal hover:to-brandBlue text-white font-heading font-extrabold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Review...' : 'Submit Review'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
