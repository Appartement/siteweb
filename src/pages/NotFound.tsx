import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Home, Building2, Wrench, Settings, ArrowRight } from 'lucide-react';

const NotFound = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to properties page with search query
      navigate(`/biens?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const quickLinks = [
    { to: "/", icon: Home, text: "Accueil" },
    { to: "/services/transaction", icon: Building2, text: "Immobilier" },
    { to: "/services/renovation", icon: Wrench, text: "Rénovation" },
    { to: "/services/gestion", icon: Settings, text: "Gestion" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-9xl font-light text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-light text-gray-800 mb-8">Page non trouvée</h2>
        
        <p className="text-gray-600 font-light mb-12 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée. 
          N'hésitez pas à utiliser la recherche ou à explorer nos services.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un bien..."
              className="w-full px-4 py-3 pl-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Rechercher
            </button>
          </div>
        </form>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <Icon className="h-8 w-8 text-gray-600 mb-2 group-hover:text-blue-600 transition-colors" />
                <span className="text-gray-600 font-light group-hover:text-blue-600 transition-colors">
                  {link.text}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-light text-gray-800 mb-4">
            Besoin d'aide pour votre projet immobilier ?
          </h3>
          <p className="text-gray-600 font-light mb-6">
            Notre équipe est à votre disposition pour vous accompagner dans votre recherche.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-light group"
          >
            <span>Contactez-nous</span>
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;