"use client";

import { useState } from "react";
import { Check, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

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
      "Soporte técnico estándar"
    ],
    buttonText: "Contratar Plan",
    buttonVariant: "outline",
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
      "Integraciones personalizadas"
    ],
    isPopular: true,
    buttonText: "Contratar Plan",
    buttonVariant: "outline",
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
      "Implementación personalizada"
    ],
    buttonText: "Contratar Plan",
    buttonVariant: "outline",
    discount: 7
  }
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getDisplayPrice = (plan: PricingPlan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--light-grey)] to-[var(--neon-pink)] bg-clip-text text-transparent">
            Planes codeX
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Servicio completo. Pago según tu volumen.
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Solo pagas más cuando ganas más, así de simple y así de justo
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
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
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>

                {/* Recommended Volume */}
                <div className="text-sm text-muted-foreground mb-6 bg-muted px-3 py-2 rounded-lg">
                  Volumen Recomendado: {plan.recommendedVolume}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    {isAnnual && (
                      <span className="text-lg text-muted-foreground line-through mr-2">
                        {plan.monthlyPrice}€
                      </span>
                    )}
                    <span className="text-4xl font-bold text-foreground">
                      {getDisplayPrice(plan)}€
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /mes
                    </span>
                  </div>
                  {isAnnual && plan.discount && (
                    <div className="flex items-center justify-center">
                      <span className="text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full font-semibold">
                        {plan.discount}% descuento
                      </span>
                    </div>
                  )}
                  <p className="text-muted-foreground">+{plan.perMinute}€ por minuto de llamada IA</p>
                </div>
              </CardHeader>

              <CardContent className="px-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Link 
                  href={`/contacto?plan=${encodeURIComponent(plan.name)}&price=${getDisplayPrice(plan)}&billing=${isAnnual ? 'anual' : 'mensual'}`}
                  className="w-full"
                >
                  <Button
                    className="w-full h-12 text-sm font-semibold transition-all duration-300 border-2 border-[var(--neon-blue)] text-[var(--neon-blue)] bg-transparent hover:bg-[var(--neon-blue)]/10 hover:border-[var(--neon-pink)] hover:text-[var(--neon-pink)]"
                    variant="outline"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Todos los planes incluyen una prueba gratuita de 14 días. No se requiere tarjeta de crédito.
          </p>
          <p className="text-sm text-muted-foreground">
            ¿Necesitas una solución personalizada? {" "}
            <a href="/planes" className="text-[var(--neon-blue)] hover:text-[var(--neon-pink)] transition-colors duration-300 font-medium">
              Ver todos nuestros planes
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}