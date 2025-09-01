import { Navigation } from "@/components/Navigation";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950/20 via-background to-purple-950/10">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16 max-w-4xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-[#00e0ff] via-[#ff0070] to-[#00e0ff] bg-clip-text text-transparent">
              Términos y Condiciones de Uso
            </h1>
            <p className="text-muted-foreground text-lg">
              Última actualización: 28/07/2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-foreground">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                1. Información general
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Este sitio web es propiedad de codeX, una agencia especializada en soluciones de automatización e inteligencia artificial para negocios locales.
                </p>
                <p>
                  Al acceder a nuestro sitio web o utilizar nuestros servicios, aceptas cumplir con los presentes Términos y Condiciones. Si no estás de acuerdo, por favor no utilices esta web.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                2. Servicios ofrecidos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>codeX proporciona sistemas de automatización para empresas, como:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Recepcionistas virtuales por voz o WhatsApp</li>
                  <li>Reservas automatizadas</li>
                  <li>Integraciones con calendarios, CRMs y otros sistemas</li>
                </ul>
                <p>El alcance de cada servicio se establece en el contrato o acuerdo específico con cada cliente.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                3. Propiedad intelectual
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Todos los contenidos del sitio (textos, imágenes, logotipos, código, diseño, etc.) son propiedad de codeX o se utilizan bajo licencia. No está permitido copiarlos, reproducirlos o utilizarlos sin autorización expresa por escrito.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                4. Responsabilidad
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Aunque nos esforzamos por ofrecer un servicio de calidad y disponibilidad continua, no podemos garantizar que el sitio esté libre de errores o interrupciones.
                </p>
                <p>codeX no será responsable por:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fallos técnicos ajenos (hosting, conexión a internet, APIs externas)</li>
                  <li>Uso indebido de las automatizaciones por parte del cliente</li>
                  <li>Pérdida de datos causada por terceros</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                5. Precios y pagos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Los precios y modalidades de pago de nuestros servicios están detallados en la página de planes o en los contratos individuales.
                </p>
                <p>
                  Nos reservamos el derecho de modificar precios, previo aviso con al menos 15 días de antelación.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                6. Cancelaciones y devoluciones
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Puedes cancelar cualquier servicio recurrente avisando con al menos 7 días de antelación al próximo cobro. No se realizarán reembolsos por meses ya iniciados.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                7. Enlaces externos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nuestro sitio puede contener enlaces a webs de terceros. No nos hacemos responsables del contenido ni del funcionamiento de dichos sitios.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                8. Modificaciones
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  codeX se reserva el derecho a modificar estos Términos en cualquier momento. Las modificaciones se publicarán en esta misma página y serán efectivas desde su publicación.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                9. Ley aplicable
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Estos términos se rigen por la legislación española. En caso de conflicto, las partes se someten a los Juzgados y Tribunales de [ciudad donde esté tu empresa].
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
                10. Contacto
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Para cualquier duda relacionada con estos Términos, puedes escribirnos a:
                </p>
                <p>
                  📧{" "}
                  <a 
                    href="mailto:soporte@codex-ai.es" 
                    className="text-[#00e0ff] hover:text-[#ff0070] transition-colors duration-200 underline"
                  >
                    soporte@codex-ai.es
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}