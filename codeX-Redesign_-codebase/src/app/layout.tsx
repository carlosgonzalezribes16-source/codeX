import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { ConvAIWidget } from "@/components/ElevenLabsWidget";
import Script from "next/script";

export const metadata: Metadata = {
  title: "codeX",
  description: "Automatizaciones con IA para negocios locales",
  icons: {
    icon: 'https://res.cloudinary.com/ds52h9qey/image/upload/v1756721785/codeX_sin_fondo_amzbgw.png',
    shortcut: 'https://res.cloudinary.com/ds52h9qey/image/upload/v1756721785/codeX_sin_fondo_amzbgw.png',
    apple: 'https://res.cloudinary.com/ds52h9qey/image/upload/v1756721785/codeX_sin_fondo_amzbgw.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <ConvAIWidget />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}