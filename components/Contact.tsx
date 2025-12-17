import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink, Mail, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Estamos listos para atenderte. Elige tu medio de contacto preferido o visítanos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-nyk-blue rounded-2xl shadow-xl overflow-hidden text-white p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8">Información Directa</h3>
            
            <div className="space-y-8">
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="flex items-start gap-4 group">
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-blue-100">Llámanos</p>
                  <p className="text-xl font-bold">{BUSINESS_INFO.phone}</p>
                </div>
              </a>

              <a href={BUSINESS_INFO.link1} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-blue-100">WhatsApp / Enlaces</p>
                  <p className="text-lg font-semibold break-all underline decoration-blue-300 underline-offset-4">
                    Linktree Principal
                  </p>
                </div>
              </a>

               <a href={BUSINESS_INFO.addressUrl} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-blue-100">Ubicación Física</p>
                  <p className="text-lg font-semibold underline decoration-blue-300 underline-offset-4">
                    Ver en Google Maps
                  </p>
                  <p className="text-sm text-blue-200 mt-1">Comercial N&K</p>
                </div>
              </a>
            </div>

            <div className="mt-12 p-6 bg-blue-900/50 rounded-xl">
              <p className="text-center italic">
                "Compromiso y calidad en cada entrega."
              </p>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-2">¿Tienes alguna pregunta?</h4>
              <p className="text-gray-600 mb-6">
                Nuestro equipo está disponible para resolver cualquier duda sobre nuestros productos y servicios.
              </p>
              <a 
                href={BUSINESS_INFO.link1}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:text-lg transition-colors"
              >
                <MessageCircle className="mr-2" />
                Chatear por WhatsApp
              </a>
            </div>

             <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Encuéntranos</h4>
              <p className="text-gray-600 mb-6">
                Visita nuestras instalaciones para conocer más sobre nuestra operación y productos.
              </p>
              <a 
                href={BUSINESS_INFO.addressUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 md:text-lg transition-colors"
              >
                <Navigation className="mr-2" size={20}/>
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};