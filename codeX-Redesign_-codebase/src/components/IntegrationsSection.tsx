"use client";

import { LayoutGrid } from "lucide-react";

const integrations = [
{
  name: "n8n",
  logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=120&h=60&fit=crop&auto=format",
  description: "Automatización de Flujos"
},
{
  name: "ElevenLabs",
  logo: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=120&h=60&fit=crop&auto=format",
  description: "Generación de Voz IA"
},
{
  name: "Telnyx",
  logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format",
  description: "Plataforma de Comunicaciones"
},
{
  name: "WhatsApp Business API",
  logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=120&h=60&fit=crop&auto=format",
  description: "Plataforma de Mensajería"
}];


export default function IntegrationsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background !w-full !h-[825px]">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-accent/50 rounded-lg border border-border">
              <LayoutGrid className="h-6 w-6 text-[var(--neon-blue)]" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-[var(--light-grey)] via-[var(--neon-blue)] to-[var(--neon-pink)] bg-clip-text text-transparent">
            Integraciones Perfectas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conecta con tu stack tecnológico existente a través de nuestro ecosistema integral de socios técnicos y APIs
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {integrations.map((integration, index) =>
          <div
            key={integration.name}
            className="group relative p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-[var(--neon-blue)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--neon-blue)]/10">

              {/* Logo Container */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-background/80 rounded-lg border border-border/50 flex items-center justify-center group-hover:border-[var(--neon-blue)]/50 transition-colors duration-300">
                  <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />

                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-[var(--neon-blue)] transition-colors duration-300">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)]/5 to-[var(--neon-pink)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          )}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-muted-foreground text-lg">
            <span className="text-[var(--light-grey)] font-medium">Listo para empresas</span> con integraciones robustas mediante APIs y documentación completa
          </p>
        </div>
      </div>
    </section>);

}