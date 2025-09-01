import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import {
  Brain,
  Code,
  Zap,
  Users,
  Rocket,
  Target,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Database,
  Globe,
  Cpu,
  Layers,
  TrendingUp,
  Shield,
  Clock,
  Award } from
'lucide-react';

interface ServiceCard {
  icon: React.ComponentType<{className?: string;}>;
  title: string;
  description: string;
  features: string[];
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{className?: string;}>;
}

interface Technology {
  category: string;
  description: string;
  tools: string[];
}

interface Benefit {
  icon: React.ComponentType<{className?: string;}>;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
{
  icon: Brain,
  title: "Soluciones de IA Personalizadas",
  description: "Desarrollamos sistemas de inteligencia artificial adaptados a las necesidades específicas de tu negocio.",
  features: ["Atención al cliente 24/7", "Reservas y citas automáticas", "Responde WhatsApp y llamadas", "IA Generativa"]
},
{
  icon: Globe,
  title: "Webs con IA a tu Medida",
  description: "Rediseñamos tu web, la adaptamos a lo que tu negocio necesita y podemos añadirle inteligencia artificial para que atienda reservas, pedidos y clientes automáticamente. También creamos páginas nuevas desde cero, modernas y rápidas.",
  features: ["Remodelamos y mejoramos tu web actual", "Añadimos asistentes IA a tu web", "Integración con reservas, pedidos y pagos", "Creamos webs nuevas desde cero"]
},
{
  icon: Zap,
  title: "Automatización Inteligente",
  description: "Sistemas que automatizan procesos complejos usando inteligencia artificial y machine learning.",
  features: ["Recordatorios automáticos", "Flujos a medida para tu negocio", "Cobros y facturas online", "Confirmación de citas"]
},
{
  icon: Database,
  title: "Aplicaciones Data-Dashboard",
  description: "Convierte tus datos en decisiones fáciles. Paneles simples que te muestran reservas, pagos y rendimiento de un vistazo.",
  features: ["Panel de reservas en tiempo real", "Reportes de ventas automáticos", "Todo en una sola pantalla", "Reportes en Tiempo Real"]
},
{
  icon: Users,
  title: "Consultoría en IA",
  description: "No vendemos humo: te decimos exactamente dónde la IA puede ayudarte a ganar más y gastar menos.",
  features: ["Análisis de tu negocio", "Estrategia de IA", "Casos prácticos de tu sector", "Acompañamiento paso a paso"]
},
{
  icon: Shield,
  title: "Integración de Sistemas",
  description: "Conectamos y sincronizamos todo: tu web, WhatsApp, calendario, TPV y redes sociales, para que trabajen juntos sin que tengas que hacer nada",
  features: ["APIs Personalizadas", "Web + WhatsApp + teléfono unificados", "Programas personalizados a tu gusto", "Todo adaptado a tu negocio"]
}];


const processSteps: ProcessStep[] = [
{
  number: "01",
  title: "Descubrimiento",
  description: "Analizamos tus necesidades, objetivos y desafíos para entender el alcance completo del proyecto.",
  icon: Target
},
{
  number: "02",
  title: "Estrategia",
  description: "Diseñamos una hoja de ruta técnica detallada con cronogramas, recursos y tecnologías óptimas.",
  icon: Lightbulb
},
{
  number: "03",
  title: "Desarrollo",
  description: "Implementamos la solución usando metodologías ágiles con entregas iterativas y feedback continuo.",
  icon: Code
},
{
  number: "04",
  title: "Implementación",
  description: "Desplegamos la solución en producción con pruebas exhaustivas y capacitación del equipo.",
  icon: Rocket
},
{
  number: "05",
  title: "Optimización",
  description: "Monitoreamos el rendimiento y realizamos mejoras continuas basadas en métricas y feedback.",
  icon: TrendingUp
}];


const technologies: Technology[] = [
{
  category: "Inteligencia Artificial",
  description: "Frameworks y plataformas de IA de última generación",
  tools: ["TensorFlow", "PyTorch", "OpenAI GPT", "Hugging Face", "LangChain", "Anthropic Claude"]
},
{
  category: "Desarrollo Frontend",
  description: "Tecnologías modernas para interfaces de usuario",
  tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
},
{
  category: "Backend & APIs",
  description: "Arquitecturas robustas y escalables",
  tools: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
},
{
  category: "Cloud & DevOps",
  description: "Infraestructura moderna y automatización",
  tools: ["AWS", "Vercel", "Docker", "Kubernetes", "GitHub Actions", "Terraform"]
}];


const benefits: Benefit[] = [
{
  icon: Cpu,
  title: "Tecnología de Vanguardia",
  description: "Utilizamos las últimas tecnologías y frameworks para garantizar soluciones futuro-proof."
},
{
  icon: Clock,
  title: "Entrega Rápida",
  description: "Metodologías ágiles que permiten entregas iterativas y tiempo de comercialización reducido."
},
{
  icon: Award,
  title: "Calidad Garantizada",
  description: "Procesos de testing rigurosos y estándares de código que aseguran productos de alta calidad."
},
{
  icon: Users,
  title: "Equipo Experto",
  description: "Desarrolladores senior especializados en IA y tecnologías modernas de desarrollo."
}];


export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950/20 via-background to-fuchsia-950/20">
      {/* Navigation */}
      <Navigation activeItem="¿Qué Hacemos?" />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 pt-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border-purple-500/20">
            <Brain className="w-4 h-4 mr-2" />
            Soluciones Impulsadas por IA
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
            Transformamos Ideas en
            <span className="block bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] bg-clip-text text-transparent !w-full !h-[69px]">
              Realidad Digital
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed !whitespace-pre-line">En codeX, combinamos inteligencia artificial con desarrollo software moderno para crear soluciones que impulsan el crecimiento empresarial y la innovación tecnológica.


          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] text-white hover:opacity-90">
              <Link href="/contacto">
                Iniciar Proyecto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-border hover:bg-accent">
              <Link href="/ejemplos" className="!whitespace-pre-line">Ver Ejemplos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos un conjunto completo de servicios tecnológicos diseñados para llevar tu negocio al siguiente nivel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-[var(--neon-blue)]" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) =>
                  <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[var(--neon-blue)] flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                  )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-r from-purple-950/10 to-fuchsia-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una metodología probada que garantiza resultados excepcionales en cada proyecto
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) =>
            <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[var(--neon-pink)] mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {index < processSteps.length - 1 &&
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] opacity-30" />
              }
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tecnologías que Dominamos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trabajamos con las herramientas más avanzadas del mercado para garantizar soluciones de calidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) =>
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-[var(--neon-pink)]" />
                  </div>
                  <CardTitle className="text-lg mb-2">{tech.category}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, toolIndex) =>
                  <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                  )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-r from-fuchsia-950/10 to-purple-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Por Qué Elegir codeX?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nos diferenciamos por nuestro enfoque innovador y compromiso con la excelencia tecnológica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) =>
            <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-[var(--neon-blue)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )}
          </div>
          
          <div className="text-center mt-16">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--neon-blue)] mb-2">20+</div>
                <p className="text-muted-foreground">Proyectos Completados</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--neon-pink)] mb-2">99%</div>
                <p className="text-muted-foreground">Satisfacción del Cliente</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--neon-blue)] mb-2">24/7</div>
                <p className="text-muted-foreground">Soporte Técnico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Únete a las empresas que ya están aprovechando el poder de la inteligencia artificial 
              y el desarrollo moderno para alcanzar sus objetivos de crecimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] text-white hover:opacity-90">
                <Link href="/contacto">
                  Solicitar Consulta 
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border hover:bg-accent">
                <Link href="/planes">Planes</Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Consulta inicial gratuita • Sin compromiso • Respuesta en 24 horas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}