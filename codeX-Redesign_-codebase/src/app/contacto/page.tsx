"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, ChevronDown } from "lucide-react";
import { Navigation } from '@/components/Navigation';

interface FormData {
  nombre: string;
  email: string;
  tipoNegocio: string;
  necesidades: string;
  presupuesto: string;
  mensaje: string;
}

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    tipoNegocio: "",
    necesidades: "",
    presupuesto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const planOptions = [
    { value: "basic", label: "Basic" },
    { value: "pro", label: "Pro" },
    { value: "premium", label: "Premium" },
    { value: "custom", label: "Custom" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlanSelect = (planValue: string) => {
    setFormData(prev => ({
      ...prev,
      presupuesto: planValue,
    }));
    setIsDropdownOpen(false);
  };

  const validateForm = (): boolean => {
    if (!formData.nombre.trim()) {
      toast.error("Por favor ingresa tu nombre");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Por favor ingresa tu email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Por favor ingresa un email válido");
      return false;
    }
    if (!formData.tipoNegocio.trim()) {
      toast.error("Por favor ingresa el tipo de negocio");
      return false;
    }
    if (!formData.necesidades.trim()) {
      toast.error("Por favor describe qué necesitas automatizar");
      return false;
    }
    if (!formData.mensaje.trim()) {
      toast.error("Por favor ingresa un mensaje");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create query parameters for GET request
      const params = new URLSearchParams({
        nombre: formData.nombre,
        email: formData.email,
        tipoNegocio: formData.tipoNegocio,
        necesidades: formData.necesidades,
        presupuesto: formData.presupuesto,
        mensaje: formData.mensaje,
        source: 'ContactPage'
      });

      // Send data to webhook using GET
      const response = await fetch(`https://gonxo14.app.n8n.cloud/webhook/formulario?${params.toString()}`, {
        method: 'GET',
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado exitosamente! Te responderemos pronto.");
        
        // Reset form
        setFormData({
          nombre: "",
          email: "",
          tipoNegocio: "",
          necesidades: "",
          presupuesto: "",
          mensaje: "",
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      toast.error("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-background to-violet-900/20 relative overflow-hidden">
      {/* Subtle futuristic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-neon-blue/30 to-neon-pink/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-neon-pink/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <Navigation activeItem="Contacto" />

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-body">
              Solicita tu demo o cuéntanos tu caso, Te respondemos en menos de 24h
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tucorreo@gmail.com"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Tipo de Negocio */}
            <div>
              <label htmlFor="tipoNegocio" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                Tipo de Negocio
              </label>
              <input
                type="text"
                id="tipoNegocio"
                name="tipoNegocio"
                value={formData.tipoNegocio}
                onChange={handleInputChange}
                placeholder="Restaurante, Clínica, etc..."
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* ¿Qué necesitas automatizar? */}
            <div>
              <label htmlFor="necesidades" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                ¿Qué necesitas automatizar?
              </label>
              <input
                type="text"
                id="necesidades"
                name="necesidades"
                value={formData.necesidades}
                onChange={handleInputChange}
                placeholder="¿Qué necesitas automatizar?"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Plan Escogido - Dropdown */}
            <div>
              <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                Plan Escogido
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] focus:border-transparent transition-all duration-300 flex items-center justify-between"
                >
                  <span className={formData.presupuesto ? "text-white" : "text-gray-400"}>
                    {formData.presupuesto 
                      ? planOptions.find(plan => plan.value === formData.presupuesto)?.label 
                      : "Selecciona un plan"
                    }
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-black/80 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl shadow-black/20 z-10">
                    {planOptions.map((plan) => (
                      <button
                        key={plan.value}
                        type="button"
                        onClick={() => handlePlanSelect(plan.value)}
                        className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {plan.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Explícate bien aquí"
                rows={6}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)] focus:border-transparent transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] hover:from-[var(--neon-blue)]/90 hover:to-[var(--neon-pink)]/90 text-white py-4 px-6 rounded-lg font-medium text-lg focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl font-body"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Enviar</span>
                </>
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}