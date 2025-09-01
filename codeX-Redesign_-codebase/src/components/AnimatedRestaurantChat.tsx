"use client";

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  sender: 'borja' | 'rodrigo';
  text: string;
  type: 'message' | 'typing';
}

interface TypingIndicatorProps {
  isVisible: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="flex items-center space-x-2 px-4 py-2 mb-4 animate-in slide-in-from-left-5 duration-300">
      <div className="bg-gray-700 rounded-2xl px-4 py-3 max-w-xs">
        <div className="flex items-center space-x-1 text-gray-300 text-sm">
          <span>Rodrigo está escribiendo</span>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MessageBubbleProps {
  message: Message;
  isVisible: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  const isBorja = message.sender === 'borja';
  
  return (
    <div 
      className={`flex mb-4 px-4 animate-in duration-500 ${
        isBorja 
          ? 'justify-end slide-in-from-right-5' 
          : 'justify-start slide-in-from-left-5'
      }`}
    >
      <div 
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
          isBorja
            ? 'bg-green-600 text-white'
            : 'bg-gray-700 text-white'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
      </div>
    </div>
  );
};

export const AnimatedRestaurantChat: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const messages: Message[] = [
    { id: 1, sender: 'borja', text: 'Hola, ¿tenéis mesa hoy para 4 sobre las nueve?', type: 'message' },
    { id: 2, sender: 'rodrigo', text: '¡Buenas! Para confirmar, ¿te refieres a hoy a las nueve?', type: 'message' },
    { id: 3, sender: 'borja', text: 'Sí.', type: 'message' },
    { id: 4, sender: 'rodrigo', text: 'En terraza está completo a las 9, pero tengo dentro, y en terraza a las 9 y media, ¿quieres que reserve dentro y si se libera alguna para las 9 en terraza te aviso?', type: 'message' },
    { id: 5, sender: 'borja', text: 'vale sí muchas gracias', type: 'message' },
    { id: 6, sender: 'rodrigo', text: 'Hecho. ¿Queréis pre-pedir para que salga rápido? Hoy hay combo pizza grande + bebida + postre a 12,50 €.', type: 'message' },
    { id: 7, sender: 'borja', text: 'Venga dos combos, uno sin frutos secos que soy alérgico', type: 'message' },
    { id: 8, sender: 'rodrigo', text: 'Perfecto, registro la alergia. Si se libera terraza a las nueve, te notifico y muevo la mesa automáticamente.', type: 'message' },
    { id: 9, sender: 'borja', text: 'Genial, muchas gracias', type: 'message' },
    { id: 10, sender: 'rodrigo', text: 'Vale para acabar de reservar me puedes dar tu nombre y teléfono por favor', type: 'message' },
    { id: 11, sender: 'borja', text: 'Claro, me llamo Borja y mi teléfono es 756 cero 23 222', type: 'message' },
    { id: 12, sender: 'rodrigo', text: 'Gracias Borja ya he reservado, te esperamos a las 9', type: 'message' },
    { id: 13, sender: 'borja', text: 'Gracias nos vemos, adiós', type: 'message' },
    { id: 14, sender: 'rodrigo', text: 'adiós Borja', type: 'message' },
  ];

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const getTypingDuration = (message: Message): number => {
    const baseTime = 1000;
    const charsPerSecond = 50;
    return Math.max(baseTime, message.text.length * (1000 / charsPerSecond));
  };

  const animateMessages = () => {
    // Clear existing timeouts
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];

    // Reset state
    setVisibleMessages([]);
    setShowTyping(false);
    setCurrentMessageIndex(0);

    let totalDelay = 1000;

    messages.forEach((message, index) => {
      if (message.sender === 'rodrigo' && index > 0) {
        // Show typing indicator before Rodrigo's messages
        const typingTimeout = setTimeout(() => {
          setShowTyping(true);
        }, totalDelay);
        timeoutRefs.current.push(typingTimeout);

        const typingDuration = getTypingDuration(message);
        totalDelay += typingDuration;

        // Hide typing and show message
        const messageTimeout = setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages(prev => [...prev, message.id]);
          setCurrentMessageIndex(index + 1);
          scrollToBottom();
        }, totalDelay);
        timeoutRefs.current.push(messageTimeout);

        totalDelay += 800; // Pause after message
      } else {
        // Show Borja's messages directly
        const messageTimeout = setTimeout(() => {
          setVisibleMessages(prev => [...prev, message.id]);
          setCurrentMessageIndex(index + 1);
          scrollToBottom();
        }, totalDelay);
        timeoutRefs.current.push(messageTimeout);

        totalDelay += message.text.length < 10 ? 1500 : 2500;
      }
    });

    // Restart animation after completion
    const restartTimeout = setTimeout(() => {
      animateMessages();
    }, totalDelay + 3000);
    timeoutRefs.current.push(restartTimeout);
  };

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      animateMessages();
    }, 500);
    timeoutRefs.current.push(startTimeout);

    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages, showTyping]);

  return (
    <div className="max-w-sm mx-auto bg-black rounded-3xl shadow-2xl overflow-hidden">
      {/* Status bar */}
      <div className="bg-black px-6 py-2 flex justify-between items-center text-white text-sm">
        <span className="font-medium">9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-1 bg-white rounded-sm ml-0.5 mt-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center space-x-3">
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">R</span>
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm">Rodrigo Angular</h3>
          <p className="text-gray-400 text-xs">IA Agent - Restaurante</p>
        </div>
      </div>

      {/* Chat container */}
      <div 
        ref={chatContainerRef}
        className="bg-black h-96 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
      >
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isVisible={visibleMessages.includes(message.id)}
          />
        ))}
        <TypingIndicator isVisible={showTyping} />
      </div>

      {/* Input area */}
      <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
        <div className="flex-1 bg-gray-700 rounded-full px-4 py-2">
          <input 
            type="text" 
            placeholder="Mensaje..." 
            className="w-full bg-transparent text-white text-sm outline-none placeholder-gray-400"
            disabled
          />
        </div>
        <button className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};