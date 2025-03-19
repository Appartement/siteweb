import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isScrolled = window.scrollY > 50;

  const textColor = isHomePage
    ? isScrolled ? 'text-gray-900' : 'text-white'
    : 'text-gray-900';

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' }
  ];

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
      document.documentElement.lang = lng;
      setIsOpen(false);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 font-light transition-colors ${textColor}`}
        aria-label="Sélectionner la langue"
      >
        <Globe className="h-5 w-5" />
        <span>{i18n.language.substring(0, 2).toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 font-light ${
                i18n.language.startsWith(lang.code) ? 'text-blue-600' : 'text-gray-800'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;