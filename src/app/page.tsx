import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AdmissionMethods } from '@/components/AdmissionMethods';
import { CoursesSection } from '@/components/CoursesSection';
import { CampusesSection } from '@/components/CampusesSection';
import { AboutSection } from '@/components/AboutSection';
import { LeadCaptureSection } from '@/components/LeadCaptureSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { NewsSection } from '@/components/NewsSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#97e700] selection:text-[#12123c]">
      {/* Top Accessible Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Hero Section com Headline, Badges MEC e Destaques */}
        <HeroSection />

        {/* 2. Formas de Ingresso (Vestibular, ENEM, Transferência, 2ª Graduação) */}
        <AdmissionMethods />

        {/* 3. Catálogo Dinâmico de Cursos com Filtros, Busca e Modal */}
        <CoursesSection />

        {/* 4. Unidades e Campi (Feira de Santana, Conquista, Itabuna, Jequié) */}
        <CampusesSection />

        {/* 5. Sobre a Unex (História, Metodologia PBL e Métricas) */}
        <AboutSection />

        {/* 6. Simulador de Bolsa & Captação de Leads */}
        <LeadCaptureSection />

        {/* 7. Depoimentos de Alunos com Avaliações */}
        <TestimonialsSection />

        {/* 8. Notícias Institucionais e Vida Acadêmica */}
        <NewsSection />

        {/* 9. Perguntas Frequentes (FAQ Accordion) */}
        <FaqSection />
      </main>

      {/* Footer Completo e Rodapé Institucional */}
      <Footer />

      {/* Botões Flutuantes (WhatsApp e Voltar ao Topo) */}
      <FloatingActions />
    </div>
  );
}
