import React from 'react';
import Link from 'next/link';
import { Phone, FileText, MessageCircle, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '@/data/nexoraData';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-2.5 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        <a
          href={BRAND_INFO.phoneHref}
          className="flex items-center justify-center gap-1 py-2.5 px-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-heading font-bold text-[11px]"
        >
          <Phone className="w-3.5 h-3.5 text-brandBlue shrink-0" />
          <span>Call</span>
        </a>

        <a
          href={`${BRAND_INFO.smsHref}?body=${encodeURIComponent(
            "G'day Nexora Cleaning, I would like a free quote in Perth!"
          )}`}
          className="flex items-center justify-center gap-1 py-2.5 px-1.5 rounded-xl bg-sky-50 border border-sky-200 text-brandBlue font-heading font-bold text-[11px]"
        >
          <MessageSquare className="w-3.5 h-3.5 text-brandBlue shrink-0" />
          <span>Text</span>
        </a>

        <Link
          href="/contact#quote-form"
          className="flex items-center justify-center gap-1 py-2.5 px-1.5 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-[11px] shadow-sm"
        >
          <FileText className="w-3.5 h-3.5 shrink-0" />
          <span>Quote</span>
        </Link>

        <a
          href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hi Nexora Cleaning, I would like a free quote in Perth!'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 py-2.5 px-1.5 rounded-xl bg-[#25D366] text-white font-heading font-bold text-[11px] shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
