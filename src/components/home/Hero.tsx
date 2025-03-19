import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-[100vh]">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative w-full h-full overflow-hidden">
          <div className="animate-fade-video">
            <iframe
              src="https://player.vimeo.com/video/1059016801?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playbackrate=0.98"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] w-[177.77777778vh] h-[56.25vw]"
              allow="autoplay; fullscreen"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4 z-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white mb-6 md:mb-8 tracking-[0.2em]">
            L'APPARTEMENT
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 md:mb-12 font-light tracking-[0.2em] uppercase">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 uppercase"
            >
              {t('hero.cta.contact')}
            </Link>
            <Link
              to="/projets"
              className="bg-white text-black px-8 md:px-12 py-3 md:py-4 text-base md:text-lg tracking-[0.2em] hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 uppercase"
            >
              {t('hero.cta.projects')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;