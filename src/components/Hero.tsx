import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wider">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 font-light tracking-wide">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="border-2 border-white text-white px-12 py-4 text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              {t('hero.cta.contact')}
            </a>
            <a
              href="#projects"
              className="bg-white text-black px-12 py-4 text-lg tracking-wider hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300"
            >
              {t('hero.cta.projects')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;