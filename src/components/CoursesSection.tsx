'use client';

import React, { useState, useMemo } from 'react';
import { COURSES_DATA, Course } from '@/data/unexData';
import { Search, Star, Clock, MapPin, X, ArrowRight, BookCheck, Briefcase, Award } from 'lucide-react';

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Cursos' },
    { id: 'saude', label: 'Saúde & Medicina' },
    { id: 'juridico', label: 'Jurídico & Sociais' },
    { id: 'negocios_tech', label: 'Negócios & Tecnologia' },
  ];

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory =
        selectedCategory === 'todos' || course.category === selectedCategory;
      const matchesSearch =
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.highlight.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.campuses.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="cursos" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12123c]/5 border border-[#12123c]/10 text-xs font-bold text-[#12123c] uppercase tracking-wider mb-3">
            Graduação de Excelência
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#12123c]">
            Nossos <span className="text-[#063173]">Cursos</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Formação orientada à prática profissional, inovação pedagógica e alto índice de aprovação nos exames de classe e no mercado de trabalho.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#12123c] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar curso ou cidade..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#12123c] focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-base text-slate-600">Nenhum curso encontrado para os critérios selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchTerm('');
              }}
              className="mt-3 text-sm font-bold text-[#063173] underline"
            >
              Limpar filtros de busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6"
              >
                <div>
                  {/* Top Bar with Badge & MEC Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#12123c]/5 text-[#12123c]">
                      {course.degree}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-xs font-bold border border-amber-200">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>Nota {course.mecRating} MEC</span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-2xl font-black text-[#12123c] group-hover:text-[#063173] transition-colors mb-2">
                    {course.name}
                  </h3>

                  {/* Highlight */}
                  <p className="text-xs font-semibold text-[#063173] mb-4 bg-sky-50 px-2.5 py-1.5 rounded-lg">
                    {course.highlight}
                  </p>

                  {/* Details (Duration & Period) */}
                  <div className="flex items-center gap-4 text-xs text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                    <span>•</span>
                    <div>{course.period}</div>
                  </div>

                  {/* Campuses Pill List */}
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1.5">
                      Unidades com oferta:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.campuses.map((campus) => (
                        <span
                          key={campus}
                          className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                        >
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {campus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalCourse(course)}
                    className="text-xs font-bold text-[#063173] hover:text-[#12123c] hover:underline"
                  >
                    Ver grade & detalhes
                  </button>
                  <a
                    href="#simulador-bolsa"
                    className="bg-[#12123c] hover:bg-[#1e1e56] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span>Inscrever-se</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal: Course Details & Curriculum Overview */}
        {activeModalCourse && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveModalCourse(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalCourse(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded bg-[#12123c]/5 text-[#12123c]">
                  {activeModalCourse.degree}
                </span>
                <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                  Nota {activeModalCourse.mecRating} no MEC
                </span>
              </div>
              <h2 className="text-3xl font-black text-[#12123c] mb-2">{activeModalCourse.name}</h2>
              <p className="text-sm font-semibold text-[#063173] mb-6">{activeModalCourse.highlight}</p>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sobre o Curso</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{activeModalCourse.description}</p>
              </div>

              {/* Curriculum Highlights */}
              <div className="mb-6 bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-3">
                  <BookCheck className="w-4 h-4 text-[#063173]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#12123c]">
                    Destaques da Matriz Curricular & Prática
                  </h4>
                </div>
                <ul className="space-y-2">
                  {activeModalCourse.curriculumHighlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#97e700] shrink-0 mt-2"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Job Market */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-[#063173]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Mercado de Trabalho & Atuação
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeModalCourse.jobMarket}
                </p>
              </div>

              {/* Campuses */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Disponível nos Campi:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalCourse.campuses.map((c) => (
                    <span key={c} className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-lg">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <a
                  href="#simulador-bolsa"
                  onClick={() => setActiveModalCourse(null)}
                  className="flex-1 bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] font-black text-sm py-3 px-6 rounded-xl text-center transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Quero me inscrever neste curso</span>
                  <ArrowRight className="w-4 h-4 text-[#12123c]" />
                </a>
                <button
                  onClick={() => setActiveModalCourse(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3 px-6 rounded-xl transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
