import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export const Hero: React.FC = () => {
  return (
    <div id="inicio" className="relative bg-white pt-20 pb-16 overflow-hidden lg:pt-32 lg:pb-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left z-10">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-nyk-blue text-sm font-bold mb-6 border border-blue-100 shadow-sm">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              Más de 17 Años de Experiencia
            </span>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
              <span className="block xl:inline">Soluciones Integrales en</span>{' '}
              <span className="block text-nyk-blue">Comercial NYK</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl lg:mx-0">
              Con casi dos décadas siendo tu aliado comercial de confianza. Ofrecemos productos de alta calidad y un servicio al cliente excepcional para impulsar tu negocio o proyecto.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a
                href={BUSINESS_INFO.link1}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-nyk-blue hover:bg-blue-800 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Contáctanos
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#servicios"
                className="flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-nyk-blue bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-all"
              >
                Servicios
              </a>
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>Atención Personalizada</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>Calidad Garantizada</span>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
            
            {/* Main Image */}
            <img
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px] z-10"
              src="https://i.ibb.co/60V1XRHL/Foto-portada.jpg"
              alt="Comercial NYK Portada"
            />

            {/* Floating Experience Image */}
            <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 w-40 h-40 md:w-56 md:h-56 bg-white p-3 rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
               <img 
                src="https://i.ibb.co/mFSn6dyx/FOTO-17.jpg" 
                className="w-full h-full object-cover rounded-xl border border-gray-100" 
                alt="17 Años de Experiencia" 
               />
               <div className="absolute -top-3 -right-3 bg-nyk-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border-2 border-white">
                 17 Años
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};