'use client';

import React from 'react';
import { NEWS_DATA } from '@/data/unexData';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';

export function NewsSection() {
  return (
    <section id="noticias" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12123c]/5 border border-[#12123c]/10 text-xs font-bold text-[#12123c] uppercase tracking-wider mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              Atualidades & Eventos
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#12123c]">
              Notícias da <span className="text-[#063173]">Unex</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Fique por dentro das principais conquistas acadêmicas, projetos de extensão comunitária e inovações nos nossos campi.
            </p>
          </div>

          <a
            href="https://unex.edu.br/noticias"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#063173] hover:text-[#12123c] transition-colors self-start md:self-end"
          >
            <span>Ver portal de notícias</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_DATA.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#12123c]/90 backdrop-blur-md text-[#97e700] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#12123c] group-hover:text-[#063173] transition-colors line-clamp-2 leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-50">
                <span className="text-xs font-bold text-[#063173] group-hover:text-[#12123c] flex items-center gap-1 transition-colors">
                  <span>Ler matéria</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
