'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center shadow-lg border border-slate-700 transition-all duration-200 hover:-translate-y-1"
          title="Voltar ao topo"
          aria-label="Voltar ao topo da página"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href="https://api.whatsapp.com/send?phone=5508007100070&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20e%20vestibulares%20da%20Unex"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-3 py-3 rounded-full shadow-2xl transition-all duration-200 hover:scale-105"
        title="Fale conosco no WhatsApp"
        aria-label="Conversar pelo WhatsApp"
      >
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Atendimento WhatsApp
        </span>
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
      </a>
    </div>
  );
}
