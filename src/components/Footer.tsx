import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-light tracking-wider mb-6">L'APPARTEMENT</h3>
            <p className="text-gray-400 font-light">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light tracking-wider mb-6">{t('footer.studio.title')}</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              {t('footer.studio.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light tracking-wider mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              {t('footer.services.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light tracking-wider mb-6">{t('footer.contact.title')}</h3>
            <p className="text-gray-400 font-light mb-4">
              Rua do Sol ao Rato 69B<br />
              Lisboa, Portugal
            </p>
            <p className="text-gray-400 font-light mb-4">
              <a href="tel:+351926322486" className="hover:text-white transition-colors">
                +351 926 322 486
              </a>
            </p>
            <p className="text-gray-400 font-light mb-4">
              <a href="mailto:adm@lappartement.pt" className="hover:text-white transition-colors">
                adm@lappartement.pt
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 font-light tracking-wide">
            © {new Date().getFullYear()} L'Appartement. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;