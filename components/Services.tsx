import React from 'react';
import { Truck, Package, Headphones, ShieldCheck, Users, BarChart } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Distribución Confiable",
    description: "Gestión logística eficiente para asegurar que tus productos lleguen a tiempo y en perfectas condiciones.",
    icon: <Truck className="h-8 w-8 text-white" />,
  },
  {
    title: "Venta Mayorista",
    description: "Ofrecemos precios competitivos y un amplio catálogo para abastecer tu negocio de manera rentable.",
    icon: <Package className="h-8 w-8 text-white" />,
  },
  {
    title: "Asesoría Comercial",
    description: "Te guiamos en la selección de los mejores productos para tus necesidades específicas.",
    icon: <Users className="h-8 w-8 text-white" />,
  },
  {
    title: "Atención al Cliente",
    description: "Soporte dedicado para resolver tus dudas y requerimientos con rapidez y eficacia.",
    icon: <Headphones className="h-8 w-8 text-white" />,
  },
  {
    title: "Garantía de Calidad",
    description: "Trabajamos con marcas y productos que cumplen con los más altos estándares del mercado.",
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
  },
  {
    title: "Gestión Estratégica",
    description: "Soluciones adaptadas para maximizar el rendimiento de tus compras e inventario.",
    icon: <BarChart className="h-8 w-8 text-white" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-nyk-blue font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ¿Qué ofrecemos en Comercial NYK?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Brindamos soluciones integrales diseñadas para potenciar el crecimiento y la estabilidad de nuestros clientes.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md hover:shadow-xl transition-shadow h-full border-t-4 border-nyk-blue">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-nyk-blue rounded-md shadow-lg">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};