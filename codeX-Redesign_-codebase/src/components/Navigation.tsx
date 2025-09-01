"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeItem?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Planes", href: "/planes" },
    { name: "Contacto", href: "/contacto" },
    { name: "Preguntas Frecuentes", href: "/#faq" },
    { name: "¿Qué Hacemos?", href: "/que-hacemos" },
    { name: "Ejemplos", href: "/ejemplos" }
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 px-6 py-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-logo font-bold text-white logo-container">
            <span className="logo-letters">code</span>
            <span className="logo-x text-transparent bg-gradient-to-r from-[#00e0ff] to-[#ff0070] bg-clip-text">X</span>
            <span className="logo-letters">®</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-button text-sm font-medium px-4 py-2 rounded-lg relative overflow-hidden transition-all duration-300 ${
                activeItem === item.name
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="nav-button lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative overflow-hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl mt-2 shadow-2xl shadow-black/40">
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-button block text-sm font-medium px-4 py-2 rounded-lg relative overflow-hidden transition-all duration-300 ${
                  activeItem === item.name
                    ? "text-white bg-white/20"
                    : "text-gray-300 hover:text-white hover:bg-white/15"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};