'use client';

import React, { useState } from 'react';
import { CAMPUSES_DATA } from '@/data/unexData';
import { MapPin, Phone, Mail, CheckCircle, ExternalLink, Calendar, Compass } from 'lucide-react';

export function CampusesSection() {
  const [activeCampusId, setActiveCampusId] = useState<string>('feira-de-santana');

  const currentCampus =
    CAMPUSES_DATA.find((c) => c.id === activeCampusId) || CAMPUSES_DATA[0];

  return (
    <section id="unidades" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#063173]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#97e700]/10 border border-[#97e700]/30 text-xs font-bold text-[#97e700] uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Infraestrutura de Ponta
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Nossas <span className="text-[#97e700]">Unidades</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Quatro campi estrategicamente localizados na Bahia, com clínicas-escola, hospitais veterinários e centros médicos integrados à formação profissional.
          </p>
        </div>

        {/* Campuses Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {CAMPUSES_DATA.map((campus) => (
            <button
              key={campus.id}
              onClick={() => setActiveCampusId(campus.id)}
              className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 ${
                activeCampusId === campus.id
                  ? 'bg-[#97e700] text-[#12123c] shadow-lg shadow-lime-500/20 scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{campus.city}</span>
            </button>
          ))}
        </div>

        {/* Active Campus Card Showcase */}
        <div className="bg-slate-800/80 rounded-3xl border border-slate-700 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Campus Info Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#063173] text-sky-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
                  Polo Universitário {currentCampus.city}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  {currentCampus.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                  {currentCampus.description}
                </p>

                {/* Infrastructure Highlights */}
                <div className="mb-6 bg-slate-900/70 rounded-2xl p-5 border border-slate-700/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#97e700] mb-3">
                    Diferenciais e Estrutura da Unidade
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentCampus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-[#97e700] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact & Address */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#97e700] shrink-0" />
                    <span>{currentCampus.address} - CEP: {currentCampus.cep}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#97e700] shrink-0" />
                    <span>{currentCampus.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#97e700] shrink-0" />
                    <span>{currentCampus.email}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentCampus.address + ' ' + currentCampus.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Como Chegar (Google Maps)</span>
                </a>
                <a
                  href="#simulador-bolsa"
                  className="bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] text-xs sm:text-sm font-black px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Visita Guiada</span>
                </a>
              </div>
            </div>

            {/* Campus Image Right Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 shadow-xl border border-slate-700 group">
                <img
                  src={currentCampus.image}
                  alt={currentCampus.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[11px] font-bold uppercase text-[#97e700] tracking-wider block">
                    Cursos com grande destaque nesta unidade:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {currentCampus.featuredCourses.map((c) => (
                      <span key={c} className="text-xs bg-slate-900/90 text-slate-200 px-2.5 py-1 rounded-md border border-slate-700">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
