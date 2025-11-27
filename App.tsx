import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Features from './components/Features';
import { APP_NAME, CONTENT, SOCIAL_LINKS, CONTACT_EMAIL } from './constants';
import { Twitter, Instagram, Linkedin, MapPin, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = `${APP_NAME} | Próximamente`;
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative flex flex-col justify-between overflow-x-hidden font-sans text-brand-light">
      <Background />

      {/* Header */}
      <header className="relative z-50 px-6 py-6 md:px-12 flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center">
             <span className="font-serif font-bold text-brand-dark text-xl">A</span>
          </div>
          <span className="font-serif text-2xl tracking-wide font-medium">{APP_NAME}</span>
        </div>
        
        {/* Navigation removed as requested */}
      </header>

      {/* Hero Content */}
      <div className="relative z-30 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-brand-gold">{CONTENT.comingSoon}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white animate-fade-in-up delay-100 leading-tight">
            {CONTENT.titlePrefix} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
              {CONTENT.titleHighlight}
            </span> {CONTENT.titleSuffix}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100 font-light">
            {CONTENT.tagline}
          </p>

          <div className="pt-8 w-full flex flex-col items-center animate-fade-in-up delay-200">
            <a 
               href={`mailto:${CONTACT_EMAIL}`}
               className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-brand-gold rounded-md hover:bg-brand-goldHover shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold"
             >
               <Mail className="w-5 h-5 mr-3" />
               <span className="font-serif tracking-wide">{CONTACT_EMAIL}</span>
             </a>
             <p className="mt-4 text-sm text-gray-400">
               Contáctenos directamente para consultas sobre precios y transferencia.
             </p>
          </div>
        </div>

        <Features items={CONTENT.features} />
      </div>

      {/* Footer */}
      <footer className="relative z-30 py-8 px-6 border-t border-white/5 w-full bg-brand-dark/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {APP_NAME} Real Estate. {CONTENT.footer.rights}
          </div>
          
          <div className="flex items-center space-x-6">
            <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-brand-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-brand-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="text-gray-400 hover:text-brand-gold transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{CONTENT.footer.location}</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;