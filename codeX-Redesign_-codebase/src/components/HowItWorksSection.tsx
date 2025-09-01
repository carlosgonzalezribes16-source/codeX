"use client";

import { Workflow, StepForward, BriefcaseConveyorBelt } from "lucide-react";
import Link from "next/link";

const steps = [
{
  number: "01",
  title: "Configuración y Ajustes",
  description: "Configura tu agente de voz y chat\xA0 IA con par\xE1metros personalizados, preferencias de idioma y flujos de trabajo espec\xEDficos de tu negocio en minutos.",
  icon: Workflow
},
{
  number: "02",
  title: "Integración del Sistema",
  description: "Conecta sin problemas con tu CRM existente, sistemas telefónicos y herramientas de negocio a través de nuestra robusta infraestructura de API.",
  icon: StepForward
},
{
  number: "03",
  title: "Operaciones Automatizadas",
  description: "Tu agente de\xA0 IA gestiona llamadas, chats de whatsapp, instagram etc.. Procesa solicitudes y maneja interacciones con clientes 24/7 con inteligencia similar a la humana.",
  icon: BriefcaseConveyorBelt
}];


export default function HowItWorksSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-light-grey mb-6">
            Cómo Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Transforma tu atención al cliente con nuestro proceso simplificado de tres pasos. 
            Desde la configuración hasta la operación, pon en marcha tu agente de voz IA en poco tiempo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <div key={step.number} className="relative group">
                {/* Connection Line - Only for first two steps */}
                {index < steps.length - 1 &&
                <div className="hidden md:block absolute top-24 left-full w-16 lg:w-24 h-0.5 bg-gradient-to-r from-neon-blue/50 to-transparent z-0" />
                }

                {/* Step Card */}
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 group-hover:border-neon-blue/30">
                  {/* Abstract Illustration */}
                  <div className="mb-8 relative">
                    <div className="w-24 h-24 mx-auto relative">
                      {/* Geometric Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500" />
                      <div className="absolute inset-2 bg-gradient-to-tr from-neon-pink/10 to-neon-blue/10 rounded-xl -rotate-6 group-hover:rotate-3 transition-transform duration-500" />
                      
                      {/* Icon Container */}
                      <div className="relative w-full h-full flex items-center justify-center bg-accent/50 rounded-xl border border-neon-blue/20 group-hover:border-neon-blue/40 transition-colors duration-300">
                        <IconComponent className="w-10 h-10 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="text-center mb-4">
                    <span className="inline-block text-6xl font-heading font-bold bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-heading font-semibold text-light-grey mb-4 text-center">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-muted-foreground font-body text-center leading-relaxed !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                    {step.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/5 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>);

          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-muted-foreground font-body mb-6">
            ¿Listo para automatizar tu atención al cliente?
          </p>
          <Link href="/contacto" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-pink text-background font-body font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105">
            Empezar Ya
            <StepForward className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>);

}