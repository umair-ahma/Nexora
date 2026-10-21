import React from 'react';
import Link from 'next/link';
import { Phone, FileText, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '@/data/nexoraData';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#050811]/95 backdrop-blur-md border-t border-brandCyan/30 px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={BRAND_INFO.phoneHref}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-xs"
        >
          <Phone className="w-3.5 h-3.5 text-brandCyan shrink-0" />
          <span>Call Now</span>
        </a>

        <Link
          href="/contact#quote-form"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-brandBlue to-brandCyan text-white font-heading font-bold text-xs shadow-md"
        >
          <FileText className="w-3.5 h-3.5 shrink-0" />
          <span>Free Quote</span>
        </Link>

        <a
          href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hi Nexora Cleaning, I would like a free quote in Perth!'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] text-white font-heading font-bold text-xs shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
