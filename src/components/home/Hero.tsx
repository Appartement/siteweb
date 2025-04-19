import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-[100vh]">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative w-full h-full overflow-hidden">
          <div className="animate-fade-video">
            <video
              className="w-full h-auto max-h-[600px] object-cover"
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            ></video>
          </div>
        </div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4 z-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white mb-6 md:mb-8 tracking-[0.2em]">
            L'APPARTEMENT
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 md:mb-12 font-light tracking-[0.2em] uppercase">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 uppercase"
            >
              {t("hero.cta.contact")}
            </Link>
            <Link
              to="/projets"
              className="bg-white text-black px-8 md:px-12 py-3 md:py-4 text-base md:text-lg tracking-[0.2em] hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 uppercase"
            >
              {t("hero.cta.projects")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
