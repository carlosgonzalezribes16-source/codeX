import React from 'react';
import { Phone } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AnimatedRestaurantChat } from '@/components/AnimatedRestaurantChat';

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950/20 to-background">
      <Navigation activeItem="Ejemplos" />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-background to-violet-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,224,255,0.1)_0%,transparent_50%)]"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--light-grey)] via-[var(--neon-blue)] to-[var(--neon-pink)] bg-clip-text text-transparent leading-tight">
            Ejemplos de nuestros agentes IA en negocios como el tuyo
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Escucha diversos ejemplos, incluso llama tu mismo a nuestro agente de soporte
          </p>
          
          <a
            href="tel:+34960292548"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] hover:from-[var(--neon-blue)]/80 hover:to-[var(--neon-pink)]/80 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[var(--neon-blue)]/25 group">
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            Llamar ahora
          </a>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Restaurant Example */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--light-grey)]">
                Ejemplo Restaurante/Delivery
              </h2>
              
              <div className="space-y-6">
                {/* Call Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-muted-foreground">Llamada:</h3>
                  <div className="bg-card/40 border border-border/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[var(--neon-blue)]/10 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative">
                      <audio
                        controls
                        className="w-full h-14 rounded-xl shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.15) 100%)',
                          border: '2px solid rgba(147, 51, 234, 0.15)',
                          backdropFilter: 'blur(10px)'
                        }}>
                        <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756564531451-o2jutrefccm.mp3" type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                      </audio>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-blue)]/3 to-[var(--neon-pink)]/3 pointer-events-none"></div>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-sm">
                      <span className="text-muted-foreground font-medium">Agente IA Restaurante</span>
                      <span className="text-muted-foreground font-medium">Ejemplo de llamada real</span>
                    </div>
                  </div>
                </div>
                
                {/* Chat Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-muted-foreground">Chat:</h3>
                  <div className="bg-card/40 border border-border/50 rounded-xl p-6 flex justify-center items-start hover:shadow-2xl hover:shadow-[var(--neon-blue)]/10 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative">
                      {/* Phone mockup with video */}
                      <div className="w-64 h-[500px] bg-black rounded-[2rem] p-2 shadow-2xl border-4 border-gray-800">
                        <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[1.5rem] relative overflow-hidden">
                          {/* Video content */}
                          <div className="flex-1 relative">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                              style={{ 
                                objectPosition: 'center top'
                              }}
                            >
                              <source src="https://res.cloudinary.com/ds52h9qey/video/upload/Video_chat_restaurante_2_qkgwdy.mp4" type="video/mp4" />
                              Tu navegador no soporta el elemento de video.
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Beauty Clinic Example */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--light-grey)]">
                Ejemplo Clínica/Centro de belleza    
              </h2>
              
              <div className="space-y-6">
                {/* Call Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-muted-foreground">Llamada:</h3>
                  <div className="bg-card/40 border border-border/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[var(--neon-blue)]/10 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative">
                      <audio
                        controls
                        className="w-full h-14 rounded-xl shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.15) 100%)',
                          border: '2px solid rgba(147, 51, 234, 0.15)',
                          backdropFilter: 'blur(10px)'
                        }}>
                        <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756564529706-f1m2j2imef5.mp3" type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                      </audio>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-blue)]/3 to-[var(--neon-pink)]/3 pointer-events-none"></div>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-sm">
                      <span className="text-muted-foreground font-medium">Agente IA Belleza</span>
                      <span className="text-muted-foreground font-medium">Ejemplo de llamada real</span>
                    </div>
                  </div>
                </div>
                
                {/* Chat Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-muted-foreground">Chat:</h3>
                  <div className="bg-card/40 border border-border/50 rounded-xl p-6 flex justify-center items-start hover:shadow-2xl hover:shadow-[var(--neon-blue)]/10 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative">
                      {/* Phone mockup with video */}
                      <div className="w-64 h-[500px] bg-black rounded-[2rem] p-2 shadow-2xl border-4 border-gray-800">
                        <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[1.5rem] relative overflow-hidden">
                          {/* Video content */}
                          <div className="flex-1 relative">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                              style={{ 
                                objectPosition: 'center top'
                              }}
                            >
                              <source src="https://res.cloudinary.com/ds52h9qey/video/upload/Video_chat_clinica_2_vetiw1.mp4" type="video/mp4" />
                              Tu navegador no soporta el elemento de video.
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>);

}