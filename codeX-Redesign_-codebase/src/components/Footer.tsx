import Link from 'next/link'
import { Instagram, MessageCircle, Contact } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info - Left */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                codeX
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transformando ideas en experiencias digitales excepcionales a través del desarrollo de vanguardia y soluciones innovadoras.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/codex__ai/" 
                className="text-muted-foreground hover:text-[var(--neon-blue)] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link 
                href="https://wa.me/658530983" 
                className="text-muted-foreground hover:text-[var(--neon-blue)] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Services - Center */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Servicios
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/que-hacemos" className="text-muted-foreground hover:text-[var(--neon-blue)] transition-colors duration-300 text-sm">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/que-hacemos" className="text-muted-foreground hover:text-[var(--neon-blue)] transition-colors duration-300 text-sm">
                  Aplicaciones Móviles
                </Link>
              </li>
              <li>
                <Link href="/que-hacemos" className="text-muted-foreground hover:text-[var(--neon-blue)] transition-colors duration-300 text-sm">
                  Soluciones en la Nube
                </Link>
              </li>
              <li>
                <Link href="/que-hacemos" className="text-muted-foreground hover:text-[var(--neon-blue)] transition-colors duration-300 text-sm">
                  Consultoría
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal - Right */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-[var(--neon-blue)] transition-colors duration-300 text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground hover:text-[var(--neon-blue)] transition-colors duration-300 text-sm">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} codeX. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Construido con precisión y pasión por la innovación.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}