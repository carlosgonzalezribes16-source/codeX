"use client";

import Script from 'next/script';
import { useState } from 'react';

// Extend the global HTMLElementTagNameMap to include our custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-id'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export const ConvAIWidget = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
        onError={(e) => {
          console.error('Failed to load ElevenLabs ConvAI widget script:', e);
        }}
      />
      
      <div className="fixed bottom-4 right-4 z-50">
        <elevenlabs-convai agent-id="agent_7301k0vfa3ewe6dbvt4av277nrhf" />
      </div>
    </>
  );
};