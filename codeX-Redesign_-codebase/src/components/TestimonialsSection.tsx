"use client";

import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "La automatización de voz IA de CodeX ha revolucionado nuestro servicio al cliente. Hemos visto una reducción del 40% en los tiempos de respuesta y a nuestros clientes les encantan las interacciones naturales y fluidas.",
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "CTO"
  },
  {
    id: 2,
    quote: "La implementación fue increíblemente fluida, y la capacidad de la IA para manejar consultas complejas manteniendo la voz de nuestra marca es extraordinaria. Es como tener un equipo de representantes expertos disponible 24/7.",
    name: "Marcus Rodríguez",
    company: "InnovateCorp",
    role: "Director de Operaciones"
  },
  {
    id: 3,
    quote: "Hemos automatizado el 85% de nuestras llamadas de soporte sin perder el toque personal. El ROI fue evidente dentro del primer mes, y nuestro equipo ahora puede enfocarse en iniciativas estratégicas de alto valor.",
    name: "Elena Vásquez",
    company: "FutureScale Dynamics",
    role: "VP de Experiencia del Cliente"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] bg-clip-text text-transparent mb-6">
            Confianza de Líderes de la Industria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo las empresas están transformando su experiencia de cliente con nuestra automatización de voz IA
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-[var(--neon-blue)]/30 hover:shadow-lg hover:shadow-[var(--neon-blue)]/10">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] p-3 rounded-full">
                    <Quote className="w-5 h-5 text-background" />
                  </div>
                </div>

                {/* Quote Text */}
                <div className="pt-6 mb-8">
                  <blockquote className="text-foreground leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Attribution */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-center space-x-4">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] rounded-full flex items-center justify-center">
                      <span className="text-background font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Name and Company */}
                    <div>
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.role} en {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)]/5 to-[var(--neon-pink)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Únete a cientos de empresas que ya usan la automatización de voz IA de CodeX
          </p>
          <div className="inline-flex items-center space-x-2 text-[var(--neon-blue)] hover:text-[var(--neon-pink)] transition-colors duration-300 font-semibold">
            <span>Ver todas las historias de clientes</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}