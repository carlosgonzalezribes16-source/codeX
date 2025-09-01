import { Navigation } from "@/components/Navigation";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-950 to-purple-950/20">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text text-transparent">
              POLÍTICA DE PRIVACIDAD – codeX
            </h1>
            <p className="text-muted-foreground text-lg">
              Última actualización: 16 de julio de 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                1. Responsable del Tratamiento
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p><strong>Denominación social:</strong> codeX (nombre comercial)</p>
                <p><strong>Correo electrónico de contacto:</strong> <a href="mailto:soporte@codex-ai.es" className="text-[#ff0070] hover:text-[#00e0ff] transition-colors underline">soporte@codex-ai.es</a></p>
                <p><strong>Ubicación:</strong> Valencia, España</p>
                <p>codeX actúa como Responsable del Tratamiento de los datos personales recopilados directamente a través de su página web o formularios.</p>
                <p>Cuando trata datos en nombre de un negocio cliente, actúa como Encargado del Tratamiento conforme al artículo 28 del RGPD.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                2. Datos Personales que Recopilamos
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p>Recopilamos los siguientes datos personales, solo cuando son proporcionados voluntariamente por los usuarios o clientes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Nombre del usuario</li>
                  <li>Teléfono</li>
                  <li>Correo electrónico</li>
                  <li>Nombre del negocio</li>
                  <li>Mensaje del cliente</li>
                  <li>Grabaciones de llamadas (previa notificación y consentimiento)</li>
                  <li>Dirección física (solo si el usuario accede a enlaces generados por nosotros)</li>
                  <li>Datos de pago (cuando se efectúa un pago a través de Stripe)</li>
                </ul>
                <p className="font-semibold text-[#00e0ff]">No recopilamos: dirección IP ni presupuesto estimado.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                3. Finalidades del Tratamiento
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p>Los datos personales se utilizan exclusivamente para:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Prestar el servicio contratado por el negocio cliente</li>
                  <li>Contactar con el usuario final si es necesario para completar o confirmar una solicitud</li>
                  <li>Enviar notificaciones, recordatorios o enlaces (por ejemplo, vía SMS o email)</li>
                  <li>Informar al negocio cliente sobre el contenido del mensaje enviado por el usuario</li>
                  <li>Emitir comprobantes de pago cuando proceda</li>
                  <li>Cumplir con obligaciones legales, fiscales o contractuales</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                4. Legitimación
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p>La base legal para el tratamiento de los datos personales es:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>El consentimiento explícito del interesado (al rellenar formularios o aceptar grabaciones)</li>
                  <li>El cumplimiento de un contrato (cuando se solicita un servicio de un negocio cliente)</li>
                  <li>El interés legítimo del Responsable para prestar el servicio correctamente</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                5. Destinatarios
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p>Los datos personales se comparten únicamente con:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>codeX, como proveedor de servicios de automatización y atención</li>
                  <li>El negocio contratante (restaurante, clínica, etc.), que actúa como Responsable del Tratamiento frente al usuario final</li>
                  <li>Stripe, solo cuando se realiza un pago. Stripe cumple con normativas de protección de datos propias.</li>
                </ul>
                <p className="font-semibold text-[#00e0ff]">No se venden ni ceden datos a terceros no autorizados.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                6. Transferencias Internacionales
              </h2>
              <div className="text-foreground leading-relaxed space-y-2">
                <p>No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo (EEE).</p>
                <p>En caso de necesitarse en el futuro, se garantizará el cumplimiento del RGPD mediante cláusulas contractuales tipo u otros mecanismos legales.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                7. Conservación de los Datos
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p>Los datos se conservarán únicamente durante el tiempo necesario para:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Gestionar correctamente la solicitud o pedido</li>
                  <li>Cumplir con obligaciones contractuales y legales</li>
                  <li>Atender posibles reclamaciones</li>
                </ul>
                <p>Posteriormente, serán eliminados o anonimizados de forma segura.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                8. Derechos del Usuario
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p>El usuario puede ejercer en cualquier momento sus derechos conforme al RGPD:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Acceso a sus datos personales</li>
                  <li>Rectificación de datos inexactos</li>
                  <li>Supresión ("derecho al olvido")</li>
                  <li>Oposición al tratamiento</li>
                  <li>Limitación del tratamiento</li>
                  <li>Portabilidad de los datos</li>
                </ul>
                <p>Para ejercer estos derechos, puede escribir a:</p>
                <p className="text-xl">📧 <a href="mailto:soporte@codex-ai.es" className="text-[#ff0070] hover:text-[#00e0ff] transition-colors underline">soporte@codex-ai.es</a></p>
                <p className="text-sm text-muted-foreground">(con el asunto: "Acceder a mis datos", "Eliminar mis datos", etc.)</p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                9. Seguridad y Almacenamiento
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Los datos se almacenan localmente en servidores seguros con medidas técnicas y organizativas apropiadas.</li>
                  <li>Solo el personal autorizado de codeX y los negocios contratantes tiene acceso.</li>
                  <li>No utilizamos servidores en la nube como almacenamiento principal de datos personales.</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                10. Cookies
              </h2>
              <div className="text-foreground leading-relaxed space-y-2">
                <p>Actualmente, nuestra web no utiliza cookies ni tecnologías de rastreo.</p>
                <p>Si se llegaran a implementar en el futuro, se notificará claramente al usuario y se solicitará su consentimiento conforme al RGPD.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                11. Decisiones Automatizadas
              </h2>
              <div className="text-foreground leading-relaxed space-y-2">
                <p>No se realizan perfiles ni decisiones automatizadas con efectos jurídicos o significativos.</p>
                <p>Las automatizaciones existentes (por ejemplo, envío automático de mensajes) son meramente operativas.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                12. Cambios en la Política de Privacidad
              </h2>
              <div className="text-foreground leading-relaxed space-y-2">
                <p>Esta política podrá modificarse para adaptarse a cambios normativos o técnicos.</p>
                <p>La versión vigente estará siempre disponible en esta misma página con la fecha de la última actualización.</p>
              </div>
            </section>

            {/* Section 13 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                13. Contacto
              </h2>
              <div className="text-foreground leading-relaxed space-y-2">
                <p>Para cualquier consulta sobre esta política o el uso de tus datos, puedes escribirnos a:</p>
                <p className="text-xl">📧 <a href="mailto:soporte@codex-ai.es" className="text-[#ff0070] hover:text-[#00e0ff] transition-colors underline">soporte@codex-ai.es</a></p>
              </div>
            </section>

            {/* Section 14 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00e0ff] border-b border-border pb-2">
                14. Legislación Aplicable
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p>Esta política se rige por:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Reglamento General de Protección de Datos (Reglamento UE 2016/679)</li>
                  <li>Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</li>
                  <li>Y demás normativa vigente en España y la Unión Europea</li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}