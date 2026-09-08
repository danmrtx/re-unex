'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, User, ZoomIn, ZoomOut, Contrast, GraduationCap, ChevronRight } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'lg' | 'xl'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFontSize = (action: 'increase' | 'decrease') => {
    const html = document.documentElement;
    if (action === 'increase') {
      if (fontSizeLevel === 'normal') {
        html.classList.remove('font-xl');
        html.classList.add('font-lg');
        setFontSizeLevel('lg');
      } else if (fontSizeLevel === 'lg') {
        html.classList.remove('font-lg');
        html.classList.add('font-xl');
        setFontSizeLevel('xl');
      }
    } else {
      if (fontSizeLevel === 'xl') {
        html.classList.remove('font-xl');
        html.classList.add('font-lg');
        setFontSizeLevel('lg');
      } else if (fontSizeLevel === 'lg') {
        html.classList.remove('font-lg');
        setFontSizeLevel('normal');
      }
    }
  };

  const toggleContrast = () => {
    const html = document.documentElement;
    if (highContrast) {
      html.classList.remove('high-contrast');
      setHighContrast(false);
    } else {
      html.classList.add('high-contrast');
      setHighContrast(true);
    }
  };

  const navLinks = [
    { label: 'Cursos', href: '#cursos' },
    { label: 'Formas de Ingresso', href: '#formas-ingresso' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'Sobre a Unex', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Notícias', href: '#noticias' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Utility Bar */}
      <div className="bg-[#0a0d24] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Support & Contact */}
          <div className="flex items-center gap-4">
            <a
              href="tel:08007100070"
              className="flex items-center gap-1.5 hover:text-[#97e700] transition-colors"
              title="Ligue gratuitamente"
            >
              <Phone className="w-3.5 h-3.5 text-[#97e700]" />
              <span className="font-semibold tracking-wide">0800 710 0070</span>
              <span className="hidden sm:inline text-slate-400">| Central de Atendimento</span>
            </a>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-400">
              Feira de Santana • Vitória da Conquista • Itabuna • Jequié
            </span>
          </div>

          {/* Accessibility & Student Portal */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Accessibility Controls */}
            <div className="flex items-center bg-slate-800/80 rounded px-2 py-0.5 gap-2 border border-slate-700/50">
              <button
                onClick={() => toggleFontSize('decrease')}
                className="hover:text-[#97e700] p-0.5 transition-colors"
                title="Diminuir fonte (A-)"
                aria-label="Diminuir tamanho da fonte"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => toggleFontSize('increase')}
                className="hover:text-[#97e700] p-0.5 transition-colors"
                title="Aumentar fonte (A+)"
                aria-label="Aumentar tamanho da fonte"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={toggleContrast}
                className="hover:text-[#97e700] p-0.5 transition-colors border-l border-slate-700 pl-1.5"
                title="Alto contraste"
                aria-label="Alternar modo de alto contraste"
              >
                <Contrast className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href="https://aluno.unex.edu.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
            >
              <User className="w-3.5 h-3.5 text-[#97e700]" />
              <span className="font-medium">Portal do Aluno</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg py-3 border-b border-slate-800/80'
            : 'bg-[#12123c] py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#97e700] to-[#76b800] flex items-center justify-center font-black text-[#12123c] text-2xl shadow-md group-hover:scale-105 transition-transform">
              U
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                UNEX
                <span className="w-2 h-2 rounded-full bg-[#97e700]"></span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold -mt-1">
                Você em evolução
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#97e700] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#97e700] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#simulador-bolsa"
              className="bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lime-500/20 hover:scale-[1.02] flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-[#12123c]" />
              <span>Inscreva-se Já</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[96px] bg-[#0a0d24] border-b border-slate-800 p-6 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Navegação
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-slate-200 hover:text-[#97e700] py-2 border-b border-slate-800/60"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#simulador-bolsa"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] py-3 rounded-xl font-bold text-base shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5 text-[#12123c]" />
                  <span>Inscreva-se no Vestibular</span>
                </a>
                <a
                  href="https://aluno.unex.edu.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-slate-800 text-slate-200 py-2.5 rounded-xl font-medium text-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4 text-[#97e700]" />
                  <span>Acessar Portal do Aluno</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
