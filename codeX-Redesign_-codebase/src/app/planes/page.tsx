"use client";

import { useState } from "react";
import { Check, CreditCard, ArrowLeft, Star, Zap, Building2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Navigation } from '@/components/Navigation';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  perMinute: number;
  recommendedVolume: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
  icon: any;
  discount?: number;
}

const plans: PricingPlan[] = [
  {
    name: "Plan Basic",
    description: "Perfecto para pequeños negocios y emprendedores",
    monthlyPrice: 149,
    annualPrice: 139,
    perMinute: 0.25,
    recommendedVolume: "Entre 1-10 llamadas diarias",
    features: [
      "IA para pedidos, reservas, recordatorios y mensajes",
      "App personalizada incluida",
      "Hasta 100 líneas telefónicas simultáneas",
      "Soporte técnico estándar",
      "Informes básicos de uso",
      "Integración con sistemas básicos"
    ],
    buttonText: "Contratar Plan",
    buttonVariant: "outline",
    icon: Star,
    discount: 7
  },
  {
    name: "Plan Pro",
    description: "Ideal para negocios en crecimiento con mayor volumen",
    monthlyPrice: 199,
    annualPrice: 184,
    perMinute: 0.22,
    recommendedVolume: "Entre 10-40 llamadas diarias",
    features: [
      "Incluye todo lo anterior, y además:",
      "Reducción de costo por minuto de llamada",
      "Soporte técnico prioritario",
      "Informes de uso mensual",
      "Análisis avanzado de llamadas",
      "Integraciones personalizadas",
      "Dashboard avanzado de métricas",
      "API access completo"
    ],
    isPopular: true,
    buttonText: "Contratar Plan",
    buttonVariant: "outline",
    icon: Zap,
    discount: 8
  },
  {
    name: "Plan Premium",
    description: "Para empresas con alto volumen y necesidades avanzadas",
    monthlyPrice: 299,
    annualPrice: 279,
    perMinute: 0.19,
    recommendedVolume: "Entre 40-80 llamadas diarias",
    features: [
      "Incluye todo lo anterior, y además:",
      "Reducción Premium costo por minuto de llamada",
      "Adaptación multilenguaje o multilocal",
      "Informe mensual inteligente + estudio de logística de llamadas",
      "Soporte dedicado",
      "Implementación personalizada",
      "Entrenamiento especializado del equipo",
      "SLAs garantizados"
    ],
    buttonText: "Contratar Plan",
    buttonVariant: "outline",
    icon: Building2,
    discount: 7
  },
  {
    name: "Plan Customizado",
    description: "Soluciones completamente personalizadas para tu negocio",
    monthlyPrice: 0,
    annualPrice: 0,
    perMinute: 0,
    recommendedVolume: "Volumen personalizado según necesidades",
    features: [
      "Incluye todo lo anterior, y además:",
      "Desarrollo de funcionalidades específicas",
      "Integración con sistemas legacy",
      "Arquitectura dedicada",
      "Soporte 24/7 dedicado",
      "Consultoría estratégica",
      "Implementación on-premise disponible",
      "Cumplimiento normativo específico"
    ],
    buttonText: "Solicitar Consulta",
    buttonVariant: "outline",
    icon: Palette,
    discount: 0
  }
];

export default function PlanesPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getDisplayPrice = (plan: PricingPlan) => {
    if (plan.monthlyPrice === 0 && plan.annualPrice === 0) return "Custom";
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation activeItem="Planes" />

      {/* Main Content */}
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--light-grey)] to-[var(--neon-pink)] bg-clip-text text-transparent">
              Planes codeX
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Pagos completos, volumen inteligente. Encuentra el plan perfecto para hacer crecer tu negocio con nuestra IA especializada en llamadas telefónicas.
            </p>

            {/* What Plan Do I Need Button */}
            <Link href="/selector-plan">
              <Button 
                className="mb-12 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] hover:from-[var(--neon-blue)]/90 hover:to-[var(--neon-pink)]/90 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                ¿Qué Plan Necesito?
              </Button>
            </Link>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Mensual
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]/50 focus:ring-offset-2 focus:ring-offset-background ${
                  isAnnual ? 'bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)]' : 'bg-muted'
                }`}
                role="switch"
                aria-checked={isAnnual}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    isAnnual ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Anual
                </span>
                {isAnnual && (
                  <span className="text-xs bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] text-white px-2 py-1 rounded-full font-semibold">
                    Casi 10% descuento
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                    plan.isPopular
                      ? 'border-2 border-[var(--neon-blue)]/50 bg-gradient-to-b from-card via-card/95 to-card shadow-2xl shadow-[var(--neon-blue)]/10'
                      : 'border border-border bg-card hover:border-[var(--neon-blue)]/30'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] text-center py-2">
                      <span className="text-sm font-semibold text-white">Más Popular</span>
                    </div>
                  )}

                  <CardHeader className={`text-center ${plan.isPopular ? 'pt-12' : 'pt-6'}`}>
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4 text-sm">
                      {plan.description}
                    </CardDescription>

                    <div className="text-sm text-muted-foreground mb-4 bg-muted px-3 py-2 rounded-lg">
                      {plan.recommendedVolume}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-center">
                        {isAnnual && plan.monthlyPrice > 0 && (
                          <span className="text-sm text-muted-foreground line-through mr-2">
                            {plan.monthlyPrice}€
                          </span>
                        )}
                        <span className="text-3xl font-bold text-foreground">
                          {getDisplayPrice(plan)}{plan.monthlyPrice > 0 ? '€' : ''}
                        </span>
                        {plan.monthlyPrice > 0 && (
                          <span className="text-muted-foreground ml-1 text-sm">
                            /mes
                          </span>
                        )}
                      </div>
                      {isAnnual && plan.discount && plan.discount > 0 && (
                        <div className="flex items-center justify-center">
                          <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full font-semibold">
                            {plan.discount}% descuento
                          </span>
                        </div>
                      )}
                      {plan.perMinute > 0 && (
                        <p className="text-muted-foreground text-sm">+{plan.perMinute}€ por minuto de llamada IA</p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-6">
                    <ul className="space-y-3">
                      {plan.features.slice(0, 6).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] flex items-center justify-center mt-0.5">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-xs text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                      {plan.features.length > 6 && (
                        <li className="text-xs text-muted-foreground font-medium">
                          Y más...
                        </li>
                      )}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-6">
                    <Link 
                      href={`/contacto?plan=${encodeURIComponent(plan.name)}&price=${plan.monthlyPrice > 0 ? getDisplayPrice(plan) : 'custom'}&billing=${isAnnual ? 'anual' : 'mensual'}`}
                      className="w-full"
                    >
                      <Button
                        className="w-full h-10 text-sm font-semibold transition-all duration-300 border-2 border-[var(--neon-blue)] text-[var(--neon-blue)] bg-transparent hover:bg-[var(--neon-blue)]/10 hover:border-[var(--neon-pink)] hover:text-[var(--neon-pink)]"
                        variant="outline"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        {plan.buttonText}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Rest of the content remains the same */}
        </div>
      </main>
    </div>
  );
}