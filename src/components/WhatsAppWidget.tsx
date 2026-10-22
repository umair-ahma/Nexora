'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '@/data/nexoraData';

const QUICK_STARTERS = [
  {
    label: '🏠 End-of-Lease / Bond Clean Quote',
    message:
      "G'day Nexora Cleaning! I need a fast quote for an End-of-Lease / Bond Clean in Perth so I get my full deposit back.",
  },
  {
    label: '✨ Regular House Clean (Save my weekend!)',
    message:
      "G'day Nexora! Looking for a reliable regular house cleaner in Perth. What's your availability?",
  },
  {
    label: '🏢 Office / Commercial Cleaning',
    message:
      "Hi Nexora Cleaning team! We need a quote for regular office / commercial facility cleaning in WA.",
  },
  {
    label: '🏷️ Beat My Existing Written Quote by 5%',
    message:
      "G'day! I have a written cleaning quote from another WA company and want to use your 5% Price-Beat Guarantee.",
  },
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(
      `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encoded}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageToSend =
      customMessage.trim() ||
      "G'day Nexora Cleaning! I would like to request a free cleaning quote in Perth.";
    openWhatsApp(messageToSend);
    setCustomMessage('');
  };

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] rounded-2xl overflow-hidden bg-white shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#070D1D] to-[#0B1933] p-4 text-white flex items-center justify-between border-b border-brandCyan/30">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brandCyan bg-black shrink-0">
                <img
                  src="/images/nexora-logo.jpg"
                  alt="Nexora Cleaning WhatsApp"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#070D1D]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  Nexora Cleaning WA
                  <CheckCircle2 className="w-3.5 h-3.5 text-brandCyan" />
                </h4>
                <p className="text-[11px] text-emerald-300 font-medium">
                  Online • Typically replies within minutes
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp Chat"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-[340px] overflow-y-auto">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-slate-200/80 text-xs text-slate-700 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-slate-900">G&apos;day from Perth! 👋</p>
              <p>
                Got red dust, bore stains, moving out, or need the office sorted? We provide{' '}
                <strong>100% free quotes in minutes</strong>.
              </p>
              <p className="text-emerald-700 font-semibold">
                🔥 Found cheaper? We beat any comparable quote by 5%!
              </p>
              <p className="text-slate-500 text-[11px]">Tap a quick option below or type a message:</p>
            </div>

            {/* Quick Starter Buttons */}
            <div className="space-y-1.5">
              {QUICK_STARTERS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => openWhatsApp(item.message)}
                  className="w-full text-left text-xs font-medium px-3 py-2 rounded-xl bg-white hover:bg-brandBlue/5 text-slate-800 hover:text-brandBlue border border-slate-200 hover:border-brandBlue/40 transition-all flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <Send className="w-3 h-3 text-slate-400 group-hover:text-brandBlue transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Input */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Type your suburb or question..."
              className="flex-1 text-xs px-3 py-2.5 rounded-xl bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-sm transition-colors shrink-0"
            >
              <span>Chat</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat"
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-sm shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-0.5"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white text-[#128C7E] text-[10px] font-extrabold items-center justify-center">
            1
          </span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">WhatsApp Chat</span>
      </button>
    </div>
  );
}
