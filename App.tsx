import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Newsletter from './components/Newsletter';
import Features from './components/Features';
import { APP_NAME, TRANSLATIONS, SOCIAL_LINKS } from './constants';
import { Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lang === 'es') {
      document.title = `${APP_NAME} | Próximamente`;
    } else {
      document.title = `${APP_NAME} | Coming Soon`;
    }
  }, [lang]);

  if (!mounted) return null;

  const t = TRANSLATIONS[lang];

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
        
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-brand-gold transition-colors">{t.nav.about}</a>
            <a href="#" className="hover:text-brand-gold transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center border border-white/20 rounded-full p-1 bg-white/5 backdrop-blur-sm">
            <button 
              onClick={() => setLang('es')} 
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === 'es' ? 'bg-brand-gold text-brand-dark shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              ES
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === 'en' ? 'bg-brand-gold text-brand-dark shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-30 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-brand-gold">{t.comingSoon}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white animate-fade-in-up delay-100 leading-tight">
            {lang === 'es' ? 'Redefiniendo ' : 'Redefining '} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
              {lang === 'es' ? 'el Vivir' : 'Living'}
            </span> {lang === 'es' ? 'en Ambato' : 'in Ambato'}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100 font-light">
            {t.tagline}
          </p>

          <div className="pt-8 w-full">
            <Newsletter content={t.newsletter} />
          </div>
        </div>

        <Features items={t.features} />
      </div>

      {/* Footer */}
      <footer className="relative z-30 py-8 px-6 border-t border-white/5 w-full bg-brand-dark/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {APP_NAME} Real Estate. {t.footer.rights}
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
            <span>{t.footer.location}</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;