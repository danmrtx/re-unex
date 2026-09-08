'use client';

import React from 'react';
import { Award, ArrowRight, CheckCircle2, Sparkles, MapPin, Stethoscope, Users, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#12123c] via-[#0e1236] to-[#0a0d24] text-white pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-800">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#97e700]/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#063173]/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-[#97e700]/30 text-xs font-semibold text-slate-200 mb-6 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#97e700] animate-pulse"></span>
              <span className="text-[#97e700] uppercase tracking-wider font-bold">Vestibular 2026.2</span>
              <span className="text-slate-400">•</span>
              <span>Inscrições gratuitas e bolsas de até 100%</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mb-6">
              Você em evolução: o futuro da sua carreira{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#97e700] via-[#bbf443] to-white">
                começa na Unex.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Muito mais que uma faculdade: uma comunidade de excelência acadêmica com <strong>Nota Máxima no MEC</strong>, metodologia ativa (PBL), simulação realística e os maiores complexos de saúde e tecnologia do interior da Bahia.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#97e700] shrink-0" />
                <span>Medicina UnexMED Nota 5 no MEC</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#97e700] shrink-0" />
                <span>Use sua nota do ENEM e ganhe bolsa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#97e700] shrink-0" />
                <span>4 Unidades com infraestrutura própria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#97e700] shrink-0" />
                <span>Até 50% de bolsa em transferência</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#simulador-bolsa"
                className="bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] px-8 py-4 rounded-xl font-extrabold text-base tracking-wide transition-all duration-200 shadow-xl hover:shadow-lime-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <span>Inscrever-se no Vestibular</span>
                <ArrowRight className="w-5 h-5 text-[#12123c] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#cursos"
                className="bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700 px-6 py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-[#97e700]" />
                <span>Explorar Cursos</span>
              </a>
            </div>

            {/* Locations Pill */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#97e700]" />
              <span className="font-semibold text-slate-300">Presença regional consolidada:</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-medium">Feira de Santana</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-medium">Vitória da Conquista</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-medium">Itabuna</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-medium">Jequié</span>
            </div>
          </div>

          {/* Right Column: Interactive Highlight Card / Hero Banner */}
          <div className="lg:col-span-5 relative">
            {/* Main Visual Card */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-sm p-1">
              <div className="relative h-96 sm:h-[420px] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Estudantes em laboratório de medicina e tecnologia na Unex"
                  className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d24] via-[#0a0d24]/40 to-transparent"></div>

                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4 bg-[#12123c]/90 backdrop-blur-md border border-[#97e700]/40 rounded-lg p-3 text-left shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#97e700]" />
                    <span className="text-xs font-extrabold uppercase tracking-wide text-white">MEC Nota 5</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5">Excelência comprovada em Medicina e Direito</p>
                </div>

                {/* UnexMED Highlight Overlay */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-900/95 backdrop-blur-md rounded-xl p-4 border border-slate-700/80 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#97e700]/20 text-[#97e700] border border-[#97e700]/30">
                      <Stethoscope className="w-3.5 h-3.5" />
                      Destaque UnexMED
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Vestibular Próprio</span>
                  </div>
                  <h2 className="text-base font-bold text-white mb-1">
                    Centro de Simulação Realística & Metodologia PBL
                  </h2>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Aprenda medicina com os mais modernos manequins robotizados, internato de referência e vivência hospitalar intensiva.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Social Proof Pill */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-slate-900/95 border border-slate-700 rounded-xl p-4 shadow-xl backdrop-blur-md items-center gap-3.5 max-w-xs text-left">
              <div className="w-11 h-11 rounded-lg bg-[#97e700]/20 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#97e700]" />
              </div>
              <div>
                <div className="text-base font-black text-white">+15.000 Profissionais</div>
                <div className="text-xs text-slate-400">Formados e atuantes no mercado regional e nacional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
