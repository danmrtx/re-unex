'use client';

import React from 'react';
import { TESTIMONIALS_DATA } from '@/data/unexData';
import { Star, Quote, GraduationCap } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12123c]/5 border border-[#12123c]/10 text-xs font-bold text-[#12123c] uppercase tracking-wider mb-3">
            Histórias de Sucesso
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#12123c]">
            O que dizem os nossos <span className="text-[#063173]">Alunos</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A experiência acadêmica contada por quem vive diariamente o acolhimento, a tecnologia e a metodologia transformadora da Unex.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-slate-200 absolute -top-3 -left-1 -z-0 opacity-50" />
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed relative z-10">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Student Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#97e700] shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-[#12123c]">{item.name}</h4>
                  <div className="text-[11px] text-[#063173] font-semibold flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" />
                    <span>{item.course} • {item.period}</span>
                  </div>
                  <div className="text-[10px] text-slate-400">Campus {item.campus}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
