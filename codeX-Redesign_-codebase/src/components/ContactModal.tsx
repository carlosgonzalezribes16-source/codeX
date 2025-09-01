"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  message: string;
}

export const useContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create query parameters for GET request
      const params = new URLSearchParams({
        email: formData.email,
        message: formData.message,
        source: 'ContactModal'
      });

      // Send data to webhook using GET
      const response = await fetch(`https://gonxo14.app.n8n.cloud/webhook/formulario?${params.toString()}`, {
        method: 'GET',
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Reset form and close modal after showing success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ email: '', message: '' });
          onClose();
        }, 2000);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      // You could add error handling here with toast if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 1, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md"
          >
            {/* Animated Border Container */}
            <div className="relative p-1 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#00e0ff] to-[#ff0070] animate-pulse">
              <div className="bg-[#1a1a1a] rounded-xl p-6 relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute -top-2 -right-2 p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-800 rounded-full z-20"
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>

                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Contacta con Nosotros</h2>
                  <p className="text-gray-400 text-sm">
                    ¿Tienes alguna pregunta o quieres trabajar con nosotros? Envíanos un mensaje.
                  </p>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 1, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00e0ff] to-[#ff0070] rounded-full flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white text-2xl"
                      >
                        ✓
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-400">Te responderemos pronto.</p>
                  </motion.div>
                )}

                {/* Form */}
                {!isSubmitted && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-transparent border border-gray-600/40 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-0 focus:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Tu Pregunta
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-transparent border border-gray-600/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-0 focus:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300 resize-none"
                        placeholder="Cuéntanos sobre tu proyecto o haz una pregunta..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-start">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-md border border-gray-600/50 hover:text-white hover:border-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};