import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home, Building2, Wrench, Settings } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t('services_section.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Home className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">{t('services_section.transaction.title')}</h3>
            <ul className="space-y-2 text-gray-600">
              {t('services_section.transaction.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Building2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">{t('services_section.renovation.title')}</h3>
            <ul className="space-y-2 text-gray-600">
              {t('services_section.renovation.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Settings className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">{t('services_section.management.title')}</h3>
            <ul className="space-y-2 text-gray-600">
              {t('services_section.management.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;