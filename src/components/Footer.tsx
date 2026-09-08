'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { CAMPUSES_DATA } from '@/data/unexData';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#0a0d24] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Column 1: Brand & Presentation (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#97e700] to-[#76b800] flex items-center justify-center font-black text-[#12123c] text-2xl shadow-md">
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

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              A Unex é uma instituição de ensino superior de excelência (integrante da Rede UniFTC), presente em Feira de Santana, Vitória da Conquista, Itabuna e Jequié, com formação médica e profissional orientada à prática e nota máxima no MEC.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/unex.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#97e700] hover:text-[#12123c] flex items-center justify-center transition-colors"
                title="Instagram da Unex"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/oficialunex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#97e700] hover:text-[#12123c] flex items-center justify-center transition-colors"
                title="Facebook da Unex"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@canalunex8273"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#97e700] hover:text-[#12123c] flex items-center justify-center transition-colors"
                title="YouTube da Unex"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Cursos em Destaque (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-[#97e700] pl-2.5">
              Cursos em Destaque
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#cursos" className="hover:text-[#97e700] transition-colors">
                  Medicina (UnexMED)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#97e700] transition-colors">
                  Direito (Líder OAB)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#97e700] transition-colors">
                  Odontologia (Clínicas Próprias)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#97e700] transition-colors">
                  Medicina Veterinária (Hospital Escola)
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#97e700] transition-colors">
                  Enfermagem & Fisioterapia
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#97e700] transition-colors">
                  Psicologia & Biomedicina
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#97e700] transition-colors">
                  Engenharia de Software & Administração
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Formas de Ingresso & Serviços (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-[#97e700] pl-2.5">
              Ingresso & Serviços
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#simulador-bolsa" className="hover:text-[#97e700] transition-colors">
                  Vestibular Online
                </a>
              </li>
              <li>
                <a href="#simulador-bolsa" className="hover:text-[#97e700] transition-colors">
                  Bolsas via ENEM
                </a>
              </li>
              <li>
                <a href="#simulador-bolsa" className="hover:text-[#97e700] transition-colors">
                  Transferência Externa
                </a>
              </li>
              <li>
                <a href="#simulador-bolsa" className="hover:text-[#97e700] transition-colors">
                  2ª Graduação
                </a>
              </li>
              <li>
                <a href="https://aluno.unex.edu.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#97e700] transition-colors">
                  Portal do Aluno
                </a>
              </li>
              <li>
                <a href="https://redeuniftc.gupy.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#97e700] transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#97e700] transition-colors">
                  Ouvidoria & Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Central de Atendimento (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-[#97e700] pl-2.5">
              Atendimento ao Candidato
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#97e700] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block text-sm">0800 710 0070</span>
                  <span className="text-[11px] text-slate-500">Ligação gratuita para todas as cidades</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#97e700] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-medium block">Horário de Funcionamento:</span>
                  <span className="text-[11px] text-slate-500">Segunda a Sexta: 08h às 20h</span>
                  <br />
                  <span className="text-[11px] text-slate-500">Sábado: 08h às 14h</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=5508007100070&text=Ol%C3%A1%2C%20Unex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                  <span>Chamar no WhatsApp Oficial</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Campuses Quick Addresses Strip */}
        <div className="border-t border-b border-slate-800 py-6 mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#97e700]" />
            <span>Nossos Polos e Campi Universitários:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-400">
            {CAMPUSES_DATA.map((c) => (
              <div key={c.id} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-white font-bold block mb-1">{c.city}</span>
                <p className="line-clamp-2 text-[11px] text-slate-500">{c.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} UNEX — IMES - Instituto Mantenedor de Ensino Superior da Bahia Ltda.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Projeto acadêmico de Redesign de Landing Page — Uso didático e institucional.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Termos de Uso
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Credenciamento MEC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
