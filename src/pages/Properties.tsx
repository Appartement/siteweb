import { useState, useEffect } from "react";
import {
  Euro,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Calculator,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropertyCarousel from "../components/PropertyCarousel";
import client, { urlFor } from "../Lib/sanityClient";

type Property = {
  _id: string;
  title: string; // FR
  title_en?: string; // EN
  title_pt?: string; // PT
  type: "vente" | "location";
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  images: any[];
  description: string; // FR
  description_en?: string; // EN
  description_pt?: string; // PT
  features: string[]; // FR
  features_en?: string[]; // EN
  features_pt?: string[]; // PT
};

const Properties = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>([]);
  const [propertyType, setPropertyType] = useState<
    "all" | "vente" | "location"
  >("all");
  const [sortBy, setSortBy] = useState<
    "price-asc" | "price-desc" | "surface-asc" | "surface-desc"
  >("price-asc");

  // Helper function pour retourner le champ localisé
  const localize = (
    property: Property,
    field: "title" | "description" | "features"
  ) => {
    const lang = i18n.language;
    if (lang === "en") {
      return property[`${field}_en`] || property[field];
    }
    if (lang === "pt") {
      return property[`${field}_pt`] || property[field];
    }
    return property[field];
  };

  useEffect(() => {
    const query = '*[_type == "property"]';
    client
      .fetch(query)
      .then((data: Property[]) => setProperties(data))
      .catch(console.error);
  }, []);

  const filteredProperties = properties
    .filter(
      (property) => propertyType === "all" || property.type === propertyType
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "surface-asc":
          return a.surface - b.surface;
        case "surface-desc":
          return b.surface - a.surface;
        default:
          return 0;
      }
    });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-light text-white mb-6 tracking-wider">
              {t("properties.title")}
            </h1>
            <p className="text-xl text-white font-light tracking-wide max-w-2xl mx-auto">
              {t("properties.heroSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
              <div>
                <select
                  value={propertyType}
                  onChange={(e) =>
                    setPropertyType(
                      e.target.value as "all" | "vente" | "location"
                    )
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">{t("properties.all")}</option>
                  <option value="vente">{t("properties.for_sale")}</option>
                  <option value="location">{t("properties.for_rent")}</option>
                </select>
              </div>
              <div>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value as
                        | "price-asc"
                        | "price-desc"
                        | "surface-asc"
                        | "surface-desc"
                    )
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="price-asc">
                    {t("properties.sort.price_asc")}
                  </option>
                  <option value="price-desc">
                    {t("properties.sort.price_desc")}
                  </option>
                  <option value="surface-asc">
                    {t("properties.sort.area_asc")}
                  </option>
                  <option value="surface-desc">
                    {t("properties.sort.area_desc")}
                  </option>
                </select>
              </div>
              <button
                onClick={() => navigate("/biens/outils")}
                className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Calculator className="h-5 w-5 mr-2" />
                {t("properties.simulationTools")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="relative cursor-pointer"
                onClick={() => navigate(`/biens/${property._id}`)}
              >
                <PropertyCarousel
                  images={property.images.map((img) => urlFor(img).url())}
                  title={localize(property, "title")}
                  onCarouselClick={(e) => e.stopPropagation()}
                />
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`px-4 py-2 rounded-lg text-sm font-light ${
                      property.type === "vente"
                        ? "bg-blue-600 text-white"
                        : "bg-[#81a197] text-white"
                    }`}
                  >
                    {property.type === "vente"
                      ? t("properties.for_sale")
                      : t("properties.for_rent")}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-light mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => navigate(`/biens/${property._id}`)}
                >
                  {localize(property, "title")}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="font-light">{property.location}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <BedDouble className="h-4 w-4 mr-2" />
                    <span className="font-light">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Bath className="h-4 w-4 mr-2" />
                    <span className="font-light">{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Maximize className="h-4 w-4 mr-2" />
                    <span className="font-light">{property.surface} m²</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Euro className="h-5 w-5 text-blue-600 mr-1" />
                    <span className="text-xl font-semibold text-blue-600">
                      {property.type === "vente"
                        ? property.price.toLocaleString("fr-FR")
                        : `${property.price.toLocaleString("fr-FR")} / ${t(
                            "properties.monthly"
                          )}`}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate(`/biens/${property._id}`)}
                    className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-light"
                  >
                    {t("properties.details")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
