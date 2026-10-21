import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { CleaningServiceItem } from '@/data/nexoraData';
import DynamicIcon from './DynamicIcon';

interface ServiceCardProps {
  service: CleaningServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getBadgeStyles = () => {
    switch (service.badgeType) {
      case 'coming-soon':
        return 'bg-amber-500/15 text-amber-700 border-amber-500/30';
      case 'add-on':
        return 'bg-sky-500/15 text-brandBlue border-brandCyan/40';
      case 'partner':
        return 'bg-purple-500/15 text-purple-700 border-purple-500/30';
      case 'popular':
        return 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-brandBlue/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6">
      <div>
        {/* Top Row: Icon + Status Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#070E20] to-[#0D1E40] text-brandCyan flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <DynamicIcon name={service.iconName} className="w-6 h-6" />
          </div>
          <span
            className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getBadgeStyles()}`}
          >
            {service.badgeText}
          </span>
        </div>

        {/* Category Label */}
        <p className="text-xs font-semibold uppercase tracking-wider text-brandBlue mb-1">
          {service.categoryName}
        </p>

        {/* Service Title */}
        <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-brandBlue transition-colors mb-2">
          <Link href={`/services/${service.slug}`}>{service.title}</Link>
        </h3>

        {/* 1-Liner Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.oneLiner}</p>

        {/* Top 3 Checklist Preview */}
        <ul className="space-y-1.5 mb-6 border-t border-slate-100 pt-4">
          {service.checklist.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Action Links: Learn More + Get a Quote */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-brandBlue transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}#quote-form`}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-brandBlue text-white text-xs font-heading font-semibold transition-colors"
        >
          <FileText className="w-3.5 h-3.5 text-brandCyan group-hover:text-white" />
          <span>{service.badgeType === 'coming-soon' ? 'Register Interest' : 'Get a Quote'}</span>
        </Link>
      </div>
    </div>
  );
}
