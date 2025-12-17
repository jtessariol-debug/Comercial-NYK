import React, { useState } from 'react';
import { X, ZoomIn, Search, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

const catalogImages = [
  "https://i.ibb.co/9kBXF2N6/1.jpg",
  "https://i.ibb.co/0VRNH4gw/2.jpg",
  "https://i.ibb.co/NgcV4hsX/3.jpg",
  "https://i.ibb.co/MYg66gt/4.jpg",
  "https://i.ibb.co/LDMs3rLT/5.jpg",
  "https://i.ibb.co/ccF3dsvN/6.jpg",
  "https://i.ibb.co/GQSFKPVR/7.jpg",
  "https://i.ibb.co/Fbx64tjY/8.jpg",
  "https://i.ibb.co/DDwH6RDs/9.jpg",
  "https://i.ibb.co/rGJ08dXH/10.jpg",
  "https://i.ibb.co/pvRR591Y/11.jpg",
  "https://i.ibb.co/4R6RVLRy/12.jpg",
  "https://i.ibb.co/j9ZFnbfq/13.jpg",
  "https://i.ibb.co/279yrT97/14.jpg",
  "https://i.ibb.co/N2gHy4DQ/15.jpg",
  "https://i.ibb.co/sdT1tw0z/16.jpg",
  "https://i.ibb.co/21y5pwpc/17.jpg",
  "https://i.ibb.co/4g3BpdNS/18.jpg",
  "https://i.ibb.co/5XVrjjt7/19.jpg",
  "https://i.ibb.co/qM9Y9rPL/20.jpg",
  "https://i.ibb.co/SXfYWqyt/21.jpg",
  "https://i.ibb.co/LzVHsxnL/22.jpg",
  "https://i.ibb.co/fzs0Y1CG/23.jpg",
  "https://i.ibb.co/B2RzgBKz/24.jpg",
  "https://i.ibb.co/zjKfx3C/25.jpg",
  "https://i.ibb.co/Rk8bYRxR/26.jpg",
  "https://i.ibb.co/1tPv6PtL/27.jpg",
  "https://i.ibb.co/1fKCWWFV/28.jpg",
  "https://i.ibb.co/dJ5h78dW/29.jpg",
  "https://i.ibb.co/XfYstKJ0/30.jpg"
];

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382C17.112 14.196 15.345 13.314 15.015 13.194C14.685 13.074 14.445 13.014 14.205 13.374C13.965 13.734 13.275 14.544 13.065 14.784C12.855 15.024 12.645 15.054 12.285 14.874C11.925 14.694 10.762 14.307 9.382 13.064C8.3 12.087 7.567 10.881 7.357 10.521C7.147 10.161 7.334 9.967 7.514 9.787C7.671 9.63 7.864 9.378 8.044 9.168C8.224 8.958 8.284 8.808 8.404 8.568C8.524 8.328 8.464 8.118 8.374 7.938C8.284 7.758 7.564 5.958 7.264 5.238C6.972 4.536 6.678 4.632 6.456 4.626C6.253 4.621 6.018 4.614 5.784 4.614C5.55 4.614 5.166 4.704 4.842 5.064C4.518 5.424 3.6 6.294 3.6 8.064C3.6 9.834 4.866 11.544 5.046 11.784C5.226 12.024 7.541 15.698 11.196 17.203C14.851 18.708 14.851 18.232 15.496 18.172C16.141 18.112 17.575 17.294 17.875 16.424C18.175 15.554 18.175 14.804 18.085 14.654C17.995 14.504 17.755 14.414 17.395 14.234H17.472ZM12 21.75C6.621 21.75 2.25 17.379 2.25 12C2.25 6.621 6.621 2.25 12 2.25C17.379 2.25 21.75 6.621 21.75 12C21.75 17.379 17.379 21.75 12 21.75Z" />
    <path d="M20.52 3.48C18.243 1.203 15.216 0 12.003 0C5.379 0 0 5.379 0 12C0 14.634 0.849 17.07 2.31 19.122L0.867 24L5.94 22.659C7.809 23.682 9.873 24.198 12.003 24.198C18.627 24.198 24.006 18.819 24.006 12.198C24.003 8.985 22.797 5.958 20.52 3.48ZM12.003 22.185C10.113 22.185 8.256 21.675 6.633 20.709L6.249 20.481L2.247 21.54L3.336 17.766L3.09 17.361C2.019 15.633 1.452 13.842 1.452 12.003C1.452 6.18 6.186 1.446 12.006 1.446C14.823 1.446 17.472 2.544 19.467 4.539C21.462 6.534 22.56 9.18 22.56 12.003C22.56 17.826 17.826 22.185 12.003 22.185Z" />
  </svg>
);

export const Catalog: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to create a WhatsApp link for a specific item
  const getWhatsAppLink = (index: number) => {
    const phone = BUSINESS_INFO.phone.replace(/\D/g, '');
    const text = encodeURIComponent(`Hola, me interesa ordenar el producto #${index + 1} que vi en su catálogo web.`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  // Filter items based on search term
  const filteredItems = catalogImages
    .map((src, index) => ({ src, index }))
    .filter(item => {
      const productName = `Producto #${item.index + 1}`;
      return productName.toLowerCase().includes(searchTerm.toLowerCase()) || 
             (item.index + 1).toString().includes(searchTerm);
    });

  return (
    <section id="catalogo" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-base text-nyk-blue font-semibold tracking-wide uppercase">Nuestros Productos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Catálogo de Abarrotes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explora nuestra variedad. Haz clic para ampliar o en el botón para ordenar directamente.
          </p>
        </div>

        {/* Search and Navigation Bar */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm py-4 mb-8 border-b border-gray-100 shadow-sm rounded-xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Back Button */}
            <a 
              href="#inicio" 
              className="flex items-center gap-2 text-gray-600 hover:text-nyk-blue font-medium transition-colors self-start md:self-center"
            >
              <ArrowLeft size={20} />
              <span>Volver al Inicio</span>
            </a>

            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-nyk-blue focus:border-nyk-blue sm:text-sm transition-all shadow-inner"
                placeholder="Buscar producto (ej. Producto #5)..."
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className="text-sm text-gray-500 hidden md:block">
              Mostrando {filteredItems.length} de {catalogImages.length} productos
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map(({ src, index }) => (
              <div 
                key={index} 
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <div 
                  className="relative cursor-pointer aspect-[3/4] overflow-hidden bg-gray-100"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Producto catálogo ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="text-nyk-blue" size={24} />
                    </div>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="p-4 bg-white mt-auto">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-500">Producto #{index + 1}</span>
                    <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">Disponible</span>
                  </div>
                  <a 
                    href={getWhatsAppLink(index)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2.5 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md active:transform active:scale-95"
                  >
                    <WhatsAppIcon size={20} />
                    Ordenar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No se encontraron productos</h3>
            <p className="mt-2 text-gray-500">Intenta buscar con otro número o término.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-nyk-blue hover:underline font-medium"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-200">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
          >
            <X size={40} />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <img 
              src={selectedImage} 
              alt="Vista ampliada" 
              className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl pointer-events-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};