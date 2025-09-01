"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Phone,
  MessageCircle,
  PhoneCall,
  Building2,
  Briefcase,
  Building,
  Crown,
  Settings,
  Globe,
  BarChart3,
  Headphones,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle } from
'lucide-react';

interface Answer {
  questionId: string;
  answer: string;
  value: string;
}

interface Question {
  id: string;
  title: string;
  options: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  condition?: (answers: Answer[]) => boolean;
}

const questions: Question[] = [
{
  id: 'communication',
  title: '¿Qué tipo de comunicación necesitas?',
  options: [
  { label: 'Solo llamadas telefónicas', value: 'calls', icon: <Phone className="w-6 h-6" /> },
  { label: 'Solo chat/WhatsApp', value: 'chat', icon: <MessageCircle className="w-6 h-6" /> },
  { label: 'Ambos (llamadas y chat)', value: 'both', icon: <PhoneCall className="w-6 h-6" /> }]

},
{
  id: 'callVolume',
  title: '¿Cuántas llamadas recibes aproximadamente al día?',
  options: [
  { label: '1-10 llamadas', value: 'low', icon: <Phone className="w-6 h-6" /> },
  { label: '10-40 llamadas', value: 'medium', icon: <Phone className="w-6 h-6" /> },
  { label: '40-80 llamadas', value: 'high', icon: <Phone className="w-6 h-6" /> },
  { label: 'Más de 80 llamadas', value: 'very-high', icon: <Phone className="w-6 h-6" /> }],

  condition: (answers) => {
    const comm = answers.find((a) => a.questionId === 'communication')?.value;
    return comm === 'calls' || comm === 'both';
  }
},
{
  id: 'chatVolume',
  title: '¿Qué volumen de mensajes manejas aproximadamente?',
  options: [
  { label: 'Bajo (menos de 100 mensajes/día)', value: 'low', icon: <MessageCircle className="w-6 h-6" /> },
  { label: 'Medio (100-500 mensajes/día)', value: 'medium', icon: <MessageCircle className="w-6 h-6" /> },
  { label: 'Alto (500+ mensajes/día)', value: 'high', icon: <MessageCircle className="w-6 h-6" /> }],

  condition: (answers) => {
    const comm = answers.find((a) => a.questionId === 'communication')?.value;
    return comm === 'chat' || comm === 'both';
  }
},
{
  id: 'businessType',
  title: '¿Qué tipo de negocio tienes?',
  options: [
  { label: 'Pequeño negocio/emprendimiento', value: 'small', icon: <Building2 className="w-6 h-6" /> },
  { label: 'Empresa en crecimiento', value: 'growing', icon: <Briefcase className="w-6 h-6" /> },
  { label: 'Empresa establecida', value: 'established', icon: <Building className="w-6 h-6" /> },
  { label: 'Corporativo/Enterprise', value: 'enterprise', icon: <Crown className="w-6 h-6" /> }]

},
{
  id: 'specialRequirements',
  title: '¿Necesitas alguna funcionalidad especial?',
  options: [
  { label: 'Integraciones personalizadas', value: 'integrations', icon: <Settings className="w-6 h-6" /> },
  { label: 'Multilenguaje', value: 'multilang', icon: <Globe className="w-6 h-6" /> },
  { label: 'Análisis avanzado', value: 'analytics', icon: <BarChart3 className="w-6 h-6" /> },
  { label: 'Soporte dedicado', value: 'support', icon: <Headphones className="w-6 h-6" /> },
  { label: 'Nada especial', value: 'none', icon: <Sparkles className="w-6 h-6" /> }]

}];


const plans = {
  basic: {
    name: 'Plan Basic',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Perfecto para pequeños negocios que están comenzando',
    features: ['Prueba gratuita 1 semana', 'Chat + Llamadas', 'Soporte por email'],
    reasoning: 'Ideal para tu negocio pequeño con bajo volumen de comunicación'
  },
  pro: {
    name: 'Plan Pro',
    icon: <Briefcase className="w-8 h-8" />,
    description: 'Para empresas en crecimiento que necesitan más capacidad',
    features: ['Reducción de costo por minuto de llamada', 'Chat + Llamadas', 'Soporte prioritario', 'Integraciones básicas'],
    reasoning: 'Perfecto para tu empresa en crecimiento con volumen medio'
  },
  premium: {
    name: 'Plan Premium',
    icon: <Building className="w-8 h-8" />,
    description: 'Solución completa para empresas establecidas',
    features: ['Interacciones ilimitadas', 'Reducción premium de costo por minuto de llamada', 'Análisis detallados', 'Soporte 24/7'],
    reasoning: 'Ideal para tu empresa establecida con alto volumen de comunicación'
  },
  customizado: {
    name: 'Plan Customizado',
    icon: <Crown className="w-8 h-8" />,
    description: 'Solución enterprise personalizada para tus necesidades',
    features: ['Todo incluido', 'Desarrollo personalizado', 'Gerente de cuenta dedicado', 'SLA garantizado'],
    reasoning: 'Necesario para tu volumen enterprise o requerimientos especiales'
  }
};

export default function PlanSelectorPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedPlan, setRecommendedPlan] = useState<keyof typeof plans>('basic');

  useEffect(() => {
    updateFilteredQuestions();
  }, [answers]);

  const updateFilteredQuestions = () => {
    const filtered = questions.filter((q) => !q.condition || q.condition(answers));
    setFilteredQuestions(filtered);
  };

  const handleAnswer = (questionId: string, answer: string, value: string) => {
    const newAnswers = answers.filter((a) => a.questionId !== questionId);
    newAnswers.push({ questionId, answer, value });
    setAnswers(newAnswers);

    if (currentStep < filteredQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateRecommendation(newAnswers);
      setShowResult(true);
    }
  };

  const calculateRecommendation = (allAnswers: Answer[]) => {
    const communication = allAnswers.find((a) => a.questionId === 'communication')?.value;
    const callVolume = allAnswers.find((a) => a.questionId === 'callVolume')?.value;
    const chatVolume = allAnswers.find((a) => a.questionId === 'chatVolume')?.value;
    const businessType = allAnswers.find((a) => a.questionId === 'businessType')?.value;
    const specialRequirements = allAnswers.find((a) => a.questionId === 'specialRequirements')?.value;

    // Enterprise or special requirements
    if (businessType === 'enterprise' ||
    callVolume === 'very-high' ||
    specialRequirements && specialRequirements !== 'none') {
      setRecommendedPlan('customizado');
      return;
    }

    // High volume or established business
    if (businessType === 'established' ||
    callVolume === 'high' ||
    chatVolume === 'high') {
      setRecommendedPlan('premium');
      return;
    }

    // Medium volume or growing business
    if (businessType === 'growing' ||
    callVolume === 'medium' ||
    chatVolume === 'medium' ||
    communication === 'both') {
      setRecommendedPlan('pro');
      return;
    }

    // Default to basic
    setRecommendedPlan('basic');
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendedPlan('basic');
  };

  const currentQuestion = filteredQuestions[currentStep];
  const progress = (currentStep + 1) / filteredQuestions.length * 100;

  if (showResult) {
    const plan = plans[recommendedPlan];

    return (
      <div className="min-h-screen bg-background">
        <Navigation activeItem="Planes" />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-[#00e0ff] mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                ¡Perfecto! Tu Plan Ideal es:
              </h1>
            </div>

            <Card className="bg-card/50 border-border/20 backdrop-blur-sm p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="text-[#00e0ff] mr-4">
                  {plan.icon}
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  {plan.name}
                </h2>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6">
                {plan.description}
              </p>
              
              <div className="bg-gradient-to-r from-[#00e0ff]/10 to-[#ff0070]/10 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  ¿Por qué este plan?
                </h3>
                <p className="text-muted-foreground">
                  {plan.reasoning}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {plan.features.map((feature, index) =>
                <div key={index} className="flex items-center text-left">
                    <CheckCircle className="w-5 h-5 text-[#00e0ff] mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push('/planes')}
                  className="bg-gradient-to-r from-[#00e0ff] to-[#ff0070] hover:from-[#00e0ff]/80 hover:to-[#ff0070]/80 text-white px-8 py-3">

                  Ver Plan Completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => router.push('/contacto')}
                  className="border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff]/10 px-8 py-3">

                  Solicitar Consulta
                </Button>
              </div>
            </Card>

            <Button
              variant="ghost"
              onClick={resetQuiz}
              className="text-muted-foreground hover:text-foreground">

              Reiniciar Cuestionario
            </Button>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeItem="Planes" />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Encuentra tu Plan Perfecto
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 px-4">
              Responde algunas preguntas y te recomendaremos el plan ideal para tu negocio
            </p>
            
            {/* Progress */}
            <div className="max-w-md mx-auto mb-8 px-4">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Paso {currentStep + 1} de {filteredQuestions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question Card */}
          {currentQuestion && (
            <Card className="bg-card/50 border-border/20 backdrop-blur-sm p-4 md:p-8 mb-8 mx-4 md:mx-0">
              <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-foreground px-2">
                {currentQuestion.title}
              </h2>
              
              <div className="grid gap-3 md:gap-4 max-w-2xl mx-auto">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleAnswer(currentQuestion.id, option.label, option.value)}
                    className="h-auto p-4 md:p-6 text-left hover:bg-gradient-to-r hover:from-[#00e0ff]/10 hover:to-[#ff0070]/10 hover:border-[#00e0ff] transition-all duration-300 group"
                  >
                    <div className="flex items-start md:items-center w-full gap-3 md:gap-4">
                      <div className="text-[#00e0ff] flex-shrink-0 group-hover:scale-110 transition-transform mt-1 md:mt-0">
                        {option.icon}
                      </div>
                      <span className="text-foreground font-medium text-sm md:text-base leading-tight md:leading-normal break-words">
                        {option.label}
                      </span>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center px-4 md:px-0">
            <Button
              variant="ghost"
              onClick={goBack}
              disabled={currentStep === 0}
              className="text-muted-foreground hover:text-foreground disabled:opacity-50 text-sm md:text-base"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Anterior
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => router.push('/planes')}
              className="text-muted-foreground hover:text-foreground text-sm md:text-base"
            >
              Ver todos los planes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}