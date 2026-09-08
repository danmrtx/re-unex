'use client';

import React, { useState } from 'react';
import { CAMPUSES_DATA, COURSES_DATA } from '@/data/unexData';
import { Calculator, CheckCircle2, Send, Sparkles, Shield, ArrowRight, UserCheck } from 'lucide-react';

export function LeadCaptureSection() {
  // Simulator State
  const [entryType, setEntryType] = useState<'enem' | 'vestibular' | 'transferencia'>('enem');
  const [enemScore, setEnemScore] = useState<number>(680);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCampus, setSelectedCampus] = useState(CAMPUSES_DATA[0].city);
  const [selectedCourse, setSelectedCourse] = useState(COURSES_DATA[0].name);
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate dynamic scholarship
  const calculatedDiscount = React.useMemo(() => {
    if (entryType === 'transferencia') return 50;
    if (entryType === 'vestibular') return 35;
    if (enemScore >= 800) return 80;
    if (enemScore >= 700) return 60;
    if (enemScore >= 600) return 45;
    if (enemScore >= 500) return 30;
    return 20;
  }, [entryType, enemScore]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!acceptTerms) {
      setErrorMessage('Você deve aceitar a Política de Privacidade para continuar.');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
  };

  return (
    <section id="simulador-bolsa" className="py-16 sm:py-24 bg-gradient-to-br from-[#12123c] via-[#0d102e] to-[#0a0d24] text-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#97e700]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#063173]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#97e700]/10 border border-[#97e700]/30 text-xs font-bold text-[#97e700] uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Bolsa & Pré-Inscrição
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Descubra o valor da sua <span className="text-[#97e700]">Bolsa de Estudos</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Simule em segundos as condições especiais para o seu curso e dê o primeiro passo para transformar a sua carreira na Unex.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Simulator Controls Left Panel */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#97e700]" />
                <span>Simule sua pontuação</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Escolha a sua forma de ingresso favorita para calcular a estimativa de bolsa.
              </p>

              {/* Entry Type Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setEntryType('enem')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-colors ${
                    entryType === 'enem'
                      ? 'bg-[#97e700] text-[#12123c]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Nota ENEM
                </button>
                <button
                  type="button"
                  onClick={() => setEntryType('vestibular')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-colors ${
                    entryType === 'vestibular'
                      ? 'bg-[#97e700] text-[#12123c]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Vestibular
                </button>
                <button
                  type="button"
                  onClick={() => setEntryType('transferencia')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-colors ${
                    entryType === 'transferencia'
                      ? 'bg-[#97e700] text-[#12123c]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Transferência
                </button>
              </div>

              {/* Dynamic Slider for ENEM */}
              {entryType === 'enem' && (
                <div className="mb-6 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-300">
                    <span>Sua Média no ENEM:</span>
                    <span className="text-base text-[#97e700] font-black">{enemScore} pontos</span>
                  </div>
                  <input
                    type="range"
                    min="450"
                    max="900"
                    step="10"
                    value={enemScore}
                    onChange={(e) => setEnemScore(Number(e.target.value))}
                    className="w-full accent-[#97e700] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>450 pts</span>
                    <span>650 pts</span>
                    <span>900 pts</span>
                  </div>
                </div>
              )}

              {/* Computed Discount Result Display */}
              <div className="bg-gradient-to-br from-[#063173] to-[#12123c] rounded-2xl p-6 border border-sky-500/30 text-center shadow-lg mb-6">
                <span className="text-xs font-bold text-sky-200 uppercase tracking-wider block mb-1">
                  Estimativa de Bolsa Concedida:
                </span>
                <div className="text-5xl font-black text-[#97e700] tracking-tight">
                  Até {calculatedDiscount}%
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Desconto aplicável às mensalidades do curso selecionado (conforme edital vigente).
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#97e700]" />
                <span>Isenção da taxa de inscrição no vestibular online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#97e700]" />
                <span>Atendimento humanizado sem espera</span>
              </div>
            </div>
          </div>

          {/* Lead Capture Form Right Panel */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#97e700]/20 text-[#12123c] flex items-center justify-center mx-auto mb-4 border-2 border-[#97e700]">
                  <UserCheck className="w-8 h-8 text-[#12123c]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#12123c] mb-2">
                  Simulação & Inscrição Recebidas!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-6">
                  Parabéns, <strong>{name}</strong>! Seus dados para o curso de <strong>{selectedCourse}</strong> no campus <strong>{selectedCampus}</strong> foram registrados com sucesso com a estimativa de até <strong>{calculatedDiscount}% de bolsa</strong>.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto text-xs text-slate-600 mb-6">
                  Nosso consultor entrará em contato pelo WhatsApp <strong>{phone}</strong> em instantes para formalizar sua inscrição e liberar o link de acesso à prova online.
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#12123c] hover:bg-[#1e1e56] text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
                >
                  Fazer Nova Simulação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-[#12123c]">Garanta sua Vaga com Bolsa</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Preencha o formulário para validar sua bolsa e iniciar sua inscrição imediatamente.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                    {errorMessage}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva Santos"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12123c]"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12123c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      WhatsApp / Celular com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(75) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#12123c]"
                    />
                  </div>
                </div>

                {/* Campus & Course Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Unidade de Interesse
                    </label>
                    <select
                      value={selectedCampus}
                      onChange={(e) => setSelectedCampus(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#12123c]"
                    >
                      {CAMPUSES_DATA.map((c) => (
                        <option key={c.id} value={c.city}>
                          {c.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Curso Pretendido
                    </label>
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#12123c]"
                    >
                      {COURSES_DATA.map((course) => (
                        <option key={course.id} value={course.name}>
                          {course.name} ({course.degree})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* LGPD Checkbox */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mt-1 rounded border-slate-300 text-[#12123c] focus:ring-[#12123c]"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-500 leading-tight">
                    Concordo em receber contato da Unex via WhatsApp, e-mail e ligação para fins de atendimento e processos seletivos, em conformidade com a LGPD.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#97e700] hover:bg-[#86ce00] text-[#12123c] py-4 rounded-xl font-black text-base transition-all duration-200 shadow-xl hover:shadow-lime-500/25 flex items-center justify-center gap-2 group mt-2"
                >
                  <Send className="w-5 h-5 text-[#12123c]" />
                  <span>Validar Bolsa & Continuar Inscrição</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ambiente seguro. Seus dados nunca serão compartilhados com terceiros.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
