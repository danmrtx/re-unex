import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unex — Você em evolução | Faculdade e Centro Universitário de Excelência",
  description:
    "Redesign institucional da Unex (Rede UniFTC). Cursos com Nota Máxima no MEC: Medicina (UnexMED), Direito, Odontologia, Enfermagem e mais em Feira de Santana, Vitória da Conquista, Itabuna e Jequié.",
  keywords: [
    "Unex",
    "Vestibular Unex",
    "Medicina UnexMED",
    "Faculdade na Bahia",
    "Feira de Santana",
    "Vitória da Conquista",
    "Itabuna",
    "Jequié",
    "ENEM bolsas",
    "Rede UniFTC",
  ],
  authors: [{ name: "Redesign Didático Unex" }],
  openGraph: {
    title: "Unex — Você em evolução | Cursos com Nota Máxima no MEC",
    description:
      "Ingresse no ensino superior com bolsas de até 100% via ENEM ou Vestibular Online. Medicina, Direito, Odontologia e mais.",
    url: "https://unex.edu.br",
    siteName: "Unex - Você em evolução",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
