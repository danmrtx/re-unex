'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/data/unexData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12123c]/5 border border-[#12123c]/10 text-xs font-bold text-[#12123c] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#12123c]">
            Perguntas <span className="text-[#063173]">Frequentes</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Respostas diretas para as principais dúvidas sobre inscrições, bolsas, vestibulares e matrículas na Unex.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#12123c] hover:text-[#063173] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-500 shrink-0">
                      {item.category}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#063173]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact fallback */}
        <div className="text-center mt-10 text-xs text-slate-500">
          Não encontrou a resposta que procurava?{' '}
          <a
            href="https://api.whatsapp.com/send?phone=5508007100070&text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20a%20Unex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#063173] font-bold underline hover:text-[#12123c]"
          >
            Fale conosco diretamente pelo WhatsApp no 0800 710 0070
          </a>
        </div>
      </div>
    </section>
  );
}
