import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                className="h-12 w-auto" 
                src="https://i.ibb.co/pvj5snJ5/Logo-NYK.jpg" 
                alt="Comercial NYK Logo" 
              />
              <span className="font-bold text-2xl text-nyk-blue tracking-tight">Comercial NYK</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-nyk-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-nyk-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Servicios</a>
            <a href="#catalogo" className="text-gray-700 hover:text-nyk-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Catálogo</a>
            <a href="#contacto" className="text-gray-700 hover:text-nyk-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Contacto</a>
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
              className="bg-nyk-blue text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-colors shadow-lg"
            >
              <Phone size={18} />
              <span>Llamar Ahora</span>
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-nyk-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-nyk-blue block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-nyk-blue block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
            <a href="#catalogo" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-nyk-blue block px-3 py-2 rounded-md text-base font-medium">Catálogo</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-nyk-blue block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="text-nyk-blue font-bold block px-3 py-2 rounded-md text-base">
              Llamar: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};