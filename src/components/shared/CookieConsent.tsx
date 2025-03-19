import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    // Set consent preferences
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);

    // You can trigger your analytics/marketing scripts here
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const acceptNecessary = () => {
    // Set minimal consent
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200" role="dialog" aria-labelledby="cookie-consent-title">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-grow">
            <h2 id="cookie-consent-title" className="text-lg font-light mb-2">Nous respectons votre vie privée</h2>
            <p className="text-gray-600 font-light text-sm md:text-base">
              Nous utilisons des cookies pour améliorer votre expérience de navigation, personnaliser le contenu et analyser notre trafic. 
              Vous pouvez choisir d'accepter uniquement les cookies nécessaires ou tous les cookies. Pour plus d'informations, consultez notre{' '}
              <a href="/politique-confidentialite" className="text-blue-600 hover:text-blue-800 underline">
                politique de confidentialité
              </a>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 min-w-[200px]">
            <button
              onClick={acceptNecessary}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-light text-sm whitespace-nowrap"
            >
              Cookies essentiels uniquement
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-light text-sm whitespace-nowrap"
            >
              Accepter tous les cookies
            </button>
          </div>
        </div>

        <button
          onClick={acceptNecessary}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer la bannière de consentement"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;