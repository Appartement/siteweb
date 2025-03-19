import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, Euro, MapPin, BedDouble, Bath, Maximize } from 'lucide-react';

const Properties = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState<'all' | 'vente' | 'location'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'surface-asc' | 'surface-desc'>('price-asc');

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t('properties.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t('properties.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg"
            />
          </div>
          <div>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value as 'all' | 'vente' | 'location')}
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="all">{t('properties.all')}</option>
              <option value="vente">{t('properties.for_sale')}</option>
              <option value="location">{t('properties.for_rent')}</option>
            </select>
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'surface-asc' | 'surface-desc')}
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="price-asc">{t('properties.sort.price_asc')}</option>
              <option value="price-desc">{t('properties.sort.price_desc')}</option>
              <option value="surface-asc">{t('properties.sort.area_asc')}</option>
              <option value="surface-desc">{t('properties.sort.area_desc')}</option>
            </select>
          </div>
        </div>

        {/* Property cards would go here */}
      </div>
    </div>
  );
};

export default Properties;