"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-background to-violet-900/20 relative overflow-hidden">
      {/* Subtle futuristic background elements */}
      <div className="absolute inset-0 opacity-10 !w-full !h-[800px]">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-neon-blue/30 to-neon-pink/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-neon-pink/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 lg:py-32 pt-40">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Automatización con{' '}
            <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent !whitespace-pre-line">IA 

            </span>
            {' '}para tu negocio
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-light-grey/80 font-body font-light max-w-3xl mx-auto leading-relaxed">
            Transforma la experiencia de tus clientes con nuestra inteligencia artificial avanzada. 
            Automatiza llamadas, responde consultas y genera leads las 24 horas del día.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/ejemplos">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-blue/80 hover:to-neon-pink/80 text-background font-body font-semibold px-8 py-4 min-w-[220px] transition-all duration-300 transform hover:scale-105 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !text-base">Escucha demo de voz

              </Button>
            </Link>
            
            <Link href="/ejemplos">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-light-grey/30 text-light-grey hover:border-neon-pink hover:text-neon-pink hover:bg-neon-pink/10 font-body font-semibold px-8 py-4 min-w-[220px] transition-all duration-300 !whitespace-pre-line !text-base">Ver demo en WhatsApp

              </Button>
            </Link>
          </div>

          {/* Additional info */}
          <div className="pt-12">
            <p className="text-sm text-light-grey/60 font-body !whitespace-pre-line">✨Configuración técnica personalizada • 🚀 Implementación en 72 horas • 🔒 100% seguro

            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-light-grey/60 font-body font-medium tracking-wider uppercase">
            Desliza para +info
          </p>
          <ChevronDown className="w-5 h-5 text-light-grey/60" />
        </div>
      </div>
    </div>);

}