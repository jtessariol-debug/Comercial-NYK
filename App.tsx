import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Catalog } from './components/Catalog';
import { Contact } from './components/Contact';
import { ChatBot } from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              className="h-10 w-auto rounded-md" 
              src="https://i.ibb.co/pvj5snJ5/Logo-NYK.jpg" 
              alt="Comercial NYK Logo" 
            />
            <span className="font-bold text-xl">Comercial NYK</span>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Comercial NYK. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}

export default App;