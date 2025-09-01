"use client";

import { LaptopMinimal, ShieldPlus, LayoutPanelTop } from "lucide-react";

const benefits = [
{
  icon: LaptopMinimal,
  title: "Disponibilidad 24/7",
  description: "Los agentes de IA trabajan las 24 horas del día, gestionando consultas de clientes y tareas de automatización sin descansos ni tiempo de inactividad."
},
{
  icon: ShieldPlus,
  title: "Reducción de Costes",
  description: "Reduce significativamente los costes operativos automatizando tareas repetitivas y minimizando la necesidad de intervención humana."
},
{
  icon: LayoutPanelTop,
  title: "Eficiencia Mejorada",
  description: "Optimiza los flujos de trabajo y aumenta la productividad con automatización inteligente que aprende y se adapta a las necesidades de tu negocio."
}];


export default function BenefitsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--light-grey)] mb-6">
            Por Qué Elegir Automatización IA
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Transforma las operaciones de tu negocio con automatización inteligente que ofrece resultados medibles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-2xl hover:shadow-[var(--neon-blue)]/10 transition-all duration-300 hover:-translate-y-1 !text-[15px]">

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--neon-blue)]/5 to-[var(--neon-pink)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-pink)]/20 border border-[var(--neon-blue)]/30">
                    <IconComponent
                      size={32}
                      className="text-[var(--neon-blue)] group-hover:text-[var(--neon-pink)] transition-colors duration-300" />

                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-semibold text-[var(--light-grey)] mb-4 group-hover:text-white transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--muted-foreground)] leading-relaxed group-hover:text-[var(--foreground)] transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[var(--neon-blue)]/30 transition-colors duration-300 pointer-events-none" />
              </div>);

          })}
        </div>
      </div>
    </section>);

}