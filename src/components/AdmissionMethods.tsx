'use client';

import React from 'react';
import { ADMISSION_METHODS } from '@/data/unexData';
import { CheckCircle, ArrowUpRight, Flame } from 'lucide-react';

export function AdmissionMethods() {
  return (
    <section id="formas-ingresso" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12123c]/5 border border-[#12123c]/10 text-xs font-bold text-[#12123c] uppercase tracking-wider mb-3">
            Escolha como começar
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#12123c]">
            Formas de Ingresso na <span className="text-[#063173]">Unex</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Facilitamos a sua entrada no ensino superior. Descubra a modalidade ideal para o seu momento e garanta benefícios e bolsas exclusivas.
          </p>
        </div>

        {/* Admission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ADMISSION_METHODS.map((method) => (
            <div
              key={method.id}
              className={`rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between relative bg-white border ${
                method.isPopular
                  ? 'border-[#97e700] ring-2 ring-[#97e700]/30 shadow-xl'
                  : 'border-slate-200/80 shadow-md hover:shadow-xl hover:border-slate-300'
              }`}
            >
              {/* Popular Tag */}
              {method.isPopular && (
                <div className="absolute -top-3 right-6 bg-[#12123c] text-[#97e700] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Flame className="w-3.5 h-3.5 text-[#97e700]" />
                  <span>Mais Procurado</span>
                </div>
              )}

              <div>
                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-extrabold tracking-wide uppercase bg-[#12123c]/5 text-[#063173] mb-4">
                  {method.badge}
                </span>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-black text-[#12123c] mb-2">{method.title}</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">{method.subtitle}</p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {method.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-[#97e700] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={method.ctaLink}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  method.isPopular
                    ? 'bg-[#12123c] text-white hover:bg-[#1e1e56] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-[#12123c]'
                }`}
              >
                <span>{method.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Help Banner */}
        <div className="mt-12 bg-[#12123c] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-white">Ficou com alguma dúvida sobre qual opção escolher?</h4>
            <p className="text-sm text-slate-300 mt-1">Nossos consultores educacionais podem te orientar gratuitamente pelo WhatsApp ou telefone.</p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5508007100070&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20escolher%20minha%20forma%20de%20ingresso%20na%20Unex"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] font-black text-sm px-6 py-3 rounded-xl transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Falar com Consultor</span>
          </a>
        </div>
      </div>
    </section>
  );
}
