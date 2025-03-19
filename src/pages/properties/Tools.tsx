import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Calculator from '../../components/Calculator';
import IMTCalculator from '../../components/IMTCalculator';

const Tools = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-32">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <button
          onClick={() => navigate('/biens')}
          className="text-gray-600 hover:text-gray-800 font-light flex items-center group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Retour aux biens
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-light text-center mb-16">Outils de Simulation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculateur de Crédit */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Calculator />
          </div>

          {/* Calculateur IMT */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <IMTCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;