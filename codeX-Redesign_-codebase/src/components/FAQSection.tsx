"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MessageCircleQuestionMark, Phone, CreditCard, ShieldQuestionMark } from 'lucide-react';
import { ContactModal, useContactModal } from './ContactModal';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ComponentType<{className?: string;}>;
  category: string;
}

const faqData: FAQItem[] = [
{
  id: 1,
  question: "¿Qué es exactamente el servicio de voz IA de CodeX?",
  answer: "Nuestro servicio de voz AI transforma tu negocio con asistentes virtuales inteligentes que pueden atender llamadas y mensajes de whatshapp, responder preguntas frecuentes, agendar citas y procesar pedidos automáticamente. Utilizamos tecnología de vanguardia para crear experiencias conversacionales naturales que mejoran la atención al cliente 24/7.",
  icon: MessageCircleQuestionMark,
  category: "general"
},
{
  id: 2,
  question: "¿Cuánto tiempo toma implementar el sistema?",
  answer: "La implementación típica toma entre 1-2 semanas, dependiendo de la complejidad de tu negocio. Incluye: configuración personalizada, integración con tus sistemas existentes, entrenamiento del AI con tu información específica, pruebas exhaustivas y capacitación de tu equipo.",
  icon: Phone,
  category: "implementacion"
},
{
  id: 3,
  question: "¿Cuanto cuesta?",
  answer: "Nuestros servicios están diseñados para todo tipo de negocios. Ofrecemos soluciones desde 149€/mes, y puedes escalar si necesitas más funciones.¡Mucho más económico que contratar personal!",
  icon: CreditCard,
  category: "precios"
},
{
  id: 4,
  question: "¿El sistema puede integrarse con mi CRM actual?",
  answer: "Sí, nuestro sistema se integra con los CRM más populares como Salesforce, HubSpot, Pipedrive, Zoho, y muchos otros. También ofrecemos APIs flexibles para integraciones personalizadas y así crear una app o base pàra tu negocio a tu gusto 100% personalizada y conectada con IA. Nuestro equipo técnico te ayuda en todo el proceso.",
  icon: ShieldQuestionMark,
  category: "tecnico"
},
{
  id: 5,
  question: "¿Qué nivel de personalización puedo tener?",
  answer: "Personalización completa: entrenar el AI con tu base de conocimiento específica, configurar flujos de conversación únicos, adaptar el tono y personalidad de la voz, integrar con tus procesos internos, y configurar reglas de negocio específicas para tu industria, además revisamos y resolvemos cualquier fallo sin coste adicional.Te damos soporte continuo por WhatsApp o email y actualizamos el sistema si algo cambia en tu negocio.",
  icon: MessageCircleQuestionMark,
  category: "personalizacion"
},
{
  id: 6,
  question: "¿Cómo garantizan la seguridad de los datos?",
  answer: "Implementamos encriptación end-to-end, cumplimos con GDPR y regulaciones locales, almacenamos datos en servidores seguros certificados, realizamos auditorías regulares de seguridad, y ofrecemos controles granulares de acceso. Tu información está completamente protegida.",
  icon: ShieldQuestionMark,
  category: "seguridad"
}];


export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const { isOpen, openModal, closeModal } = useContactModal();

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)]/5 via-transparent to-[var(--neon-pink)]/5 opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-pink)]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--light-grey)] via-[var(--neon-blue)] to-[var(--neon-pink)] bg-clip-text text-transparent mb-6 min-h-[50px] md:min-h-[60px] leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestro servicio de voz AI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => {
            const Icon = item.icon;
            const isOpen = openItem === item.id;

            return (
              <div
                key={item.id}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-[var(--neon-blue)]/30 hover:shadow-lg hover:shadow-[var(--neon-blue)]/10">

                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-all duration-300 hover:bg-accent/20"
                  aria-expanded={isOpen}>

                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-shrink-0 p-2 bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-pink)]/20 rounded-lg border border-border/30">
                      <Icon className="w-5 h-5 text-[var(--neon-blue)]" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-[var(--neon-blue)] transition-colors duration-300">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-[var(--neon-blue)]' : ''}`
                    } />

                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                  isOpen ?
                  'max-h-96 opacity-100' :
                  'max-h-0 opacity-0'} overflow-hidden`
                  }>

                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>);

          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] rounded-2xl">
            <div className="bg-card px-8 py-4 rounded-xl">
              <p className="text-card-foreground mb-4">
                ¿No encuentras la respuesta que buscas?
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[var(--neon-blue)]/25 transition-all duration-300 hover:scale-105">
                <MessageCircleQuestionMark className="w-4 h-4" />
                Contacta con Nosotros
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </section>);

}