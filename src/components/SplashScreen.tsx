import React from 'react';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <img 
        src="https://lh3.googleusercontent.com/pw/AP1GczPlEPvp-vf3JZqy4iEf-yCEHQ_iyLvc6gayOdorO8PgZKlrkgm24oakyoXPEzMphdGMW8eTSK6PYZrSjUJffxXhsbJGhGCFxq2jDnlfKf8wwPmsPiABzwq9sudDTo6WTv9PVvyRJRDCdEElt5bFP8VB=w350-h234-s-no-gm?authuser=0"
        alt="L'Appartement - Votre expert immobilier à Lisbonne - Écran de chargement"
        className="w-[350px] h-auto animate-fade-in"
      />
    </div>
  );
};

export default SplashScreen;