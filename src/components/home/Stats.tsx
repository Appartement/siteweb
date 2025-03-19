import React from 'react';
import AnimatedCounter from '../shared/AnimatedCounter';

const Stats = () => {
  return (
    <div className="relative py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/pw/AP1GczPzNF26t_2cmsbQVq0-6WC4uJDJj2hhYsvWw2R1t_kilYOEkLt7U85Z2GKCWEbttrJJsNkJgaka4k87obNrSN8qIghPyAeslhWEXpuEmjiK-UL9XS92oASGVwjbzKHLUNRc2G05pjsJVWS7D3_zxUjy=w2493-h1661-s-no-gm?authuser=0")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center text-white mb-16 tracking-wider">
          NOS CHIFFRES CLÉS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
          <div>
            <AnimatedCounter end={5} duration={2000} prefix="+" />
            <p className="text-white font-light">Années d'expérience</p>
          </div>
          <div>
            <AnimatedCounter end={100} duration={2000} prefix="+" />
            <p className="text-white font-light">Propriétés vendues</p>
          </div>
          <div>
            <AnimatedCounter end={250} duration={2000} prefix="+" />
            <p className="text-white font-light">Clients satisfaits</p>
          </div>
          <div>
            <AnimatedCounter end={120} duration={2000} prefix="+" />
            <p className="text-white font-light">Appartements sous gestion</p>
          </div>
          <div>
            <AnimatedCounter end={25} duration={2000} prefix="+" />
            <p className="text-white font-light">Partenaires</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;