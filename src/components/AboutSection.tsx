'use client';

import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Lightbulb, Play, Users2, Building2, Check } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Institutional Mission */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12123c]/5 border border-[#12123c]/10 text-xs font-bold text-[#12123c] uppercase tracking-wider mb-4">
              A Nossa Trajetória
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#12123c] mb-6 leading-tight">
              A Unex: Transformando vocações em{' '}
              <span className="text-[#063173]">carreiras de excelência</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Integrando a conceituada <strong>Rede UniFTC</strong>, a <strong>Unex</strong> consolidou-se como referência incontestável no ensino superior da Bahia. Atuamos fortemente em Feira de Santana, Vitória da Conquista, Itabuna e Jequié, com um projeto pedagógico arrojado centrado na interdisciplinaridade e na prática médica e profissional imediata.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Com o credenciamento de excelência do curso de Medicina e o selo <strong>UnexMED</strong>, expandimos nosso propósito de formar profissionais éticos, globais e humanos, capacitados a resolver os desafios do mundo contemporâneo com tecnologia de ponta e respeito à diversidade.
            </p>

            {/* Institutional Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <Lightbulb className="w-5 h-5 text-[#063173]" />
                  <span className="font-bold text-sm text-[#12123c]">Metodologia Ativa (PBL)</span>
                </div>
                <p className="text-xs text-slate-600">
                  O aluno é protagonista da própria aprendizagem por meio de resolução de problemas clínicos e corporativos reais.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <HeartHandshake className="w-5 h-5 text-[#063173]" />
                  <span className="font-bold text-sm text-[#12123c]">Responsabilidade Social</span>
                </div>
                <p className="text-xs text-slate-600">
                  Mais de 40 mil atendimentos anuais gratuitos em clínicas-escola, hospitais veterinários e núcleos jurídicos.
                </p>
              </div>
            </div>

            {/* Credibility Checklist */}
            <div className="space-y-2.5 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#97e700] shrink-0" />
                <span>Corpo docente composto por mestres, doutores e especialistas do mercado</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#97e700] shrink-0" />
                <span>Convênios internacionais e programas de intercâmbio acadêmico</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#97e700] shrink-0" />
                <span>Centro de Carreiras dedicado com conexão a mais de 300 empresas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Video / Tour Banner & Metrics Grid */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Virtual Tour Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Alunos da Unex em ambiente colaborativo"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12123c]/90 via-[#12123c]/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#97e700] mb-1">
                  Tour Institucional
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Conheça a Experiência Unex por Dentro
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mb-4 max-w-md">
                  Laboratórios de simulação realística, clínicas modernas e espaços desenhados para o seu aprendizado prático.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=LmE7WiWWRGU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] font-black text-xs px-4 py-2.5 rounded-xl self-start transition-colors shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Assistir Vídeo Institucional</span>
                </a>
              </div>
            </div>

            {/* Key Metrics Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#12123c] text-white p-4 rounded-2xl text-center shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-[#97e700]">4</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Campi na Bahia</div>
              </div>
              <div className="bg-[#12123c] text-white p-4 rounded-2xl text-center shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-[#97e700]">Nota 5</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Conceito MEC</div>
              </div>
              <div className="bg-[#12123c] text-white p-4 rounded-2xl text-center shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-[#97e700]">+40</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Laboratórios</div>
              </div>
              <div className="bg-[#12123c] text-white p-4 rounded-2xl text-center shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-[#97e700]">88%</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Empregabilidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
