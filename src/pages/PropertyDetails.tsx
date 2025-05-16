import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Euro,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowLeft,
  Check,
} from "lucide-react";
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
  images: any[]; // Format image de Sanity
  description: string; // FR
  description_en?: string; // EN
  description_pt?: string; // PT
  features: string[]; // FR
  features_en?: string[]; // EN
  features_pt?: string[]; // PT
};

const PropertyDetails = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "property" && _id == $id][0]';
    client
      .fetch(query, { id })
      .then((data: Property) => {
        setProperty(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(t("projectDetails.errorFetch"), error);
        setLoading(false);
      });
  }, [id, t]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">{t("projectDetails.loading")}</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">
            {t("projectDetails.notFound")}
          </h2>
          <button
            onClick={() => navigate("/biens")}
            className="text-blue-600 hover:text-blue-800 font-light flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t("projectDetails.backToProperties")}
          </button>
        </div>
      </div>
    );
  }

  // Fonction helper pour retourner le champ localisé
  const localize = (field: "title" | "description" | "features"): any => {
    const lang = i18n.language;
    if (field === "features") {
      if (lang === "en") {
        return property?.features_en && property?.features_en.length > 0
          ? property?.features_en
          : property?.features;
      }
      if (lang === "pt") {
        return property?.features_pt && property?.features_pt.length > 0
          ? property?.features_pt
          : property?.features;
      }
      return property?.features;
    } else {
      if (lang === "en") {
        return (property as any)[`${field}_en`] || (property as any)[field];
      }
      if (lang === "pt") {
        return (property as any)[`${field}_pt`] || (property as any)[field];
      }
      return (property as any)[field];
    }
  };

  const handleContactClick = () => {
    navigate("/contact", {
      state: {
        propertyId: property?._id,
        propertyTitle: localize("title"),
        propertyType: property?.type,
        propertyLocation: property?.location,
        propertyPrice: property?.price,
      },
    });
  };

  return (
    <div className="bg-white pt-36">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <button
          onClick={() => navigate("/biens")}
          className="text-gray-600 hover:text-gray-800 font-light flex items-center group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          {t("projectDetails.backToProperties")}
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <PropertyCarousel
                images={property?.images
                  ?.filter((img) => img?.asset?._ref)
                  ?.map((img) => urlFor(img).url())}
                title={localize("title")}
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-light z-10">
                {property?.type === "vente"
                  ? t("projectDetails.forSale")
                  : t("projectDetails.forRent")}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <h1 className="text-4xl font-light mb-4">{localize("title")}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="font-light text-lg">{property?.location}</span>
            </div>

            <div className="flex items-center mb-8">
              <Euro className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-3xl font-semibold text-blue-600">
                {property?.type === "vente"
                  ? property?.price?.toLocaleString("fr-FR")
                  : `${property?.price?.toLocaleString("fr-FR")}/${t(
                      "properties.monthly"
                    )}`}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <BedDouble className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                <span className="block text-sm text-gray-600 font-light">
                  {t("projectDetails.bedrooms")}
                </span>
                <span className="block text-lg font-medium">
                  {property?.bedrooms}
                </span>
              </div>
              <div className="text-center">
                <Bath className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                <span className="block text-sm text-gray-600 font-light">
                  {t("projectDetails.bathrooms")}
                </span>
                <span className="block text-lg font-medium">
                  {property?.bathrooms}
                </span>
              </div>
              <div className="text-center">
                <Maximize className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                <span className="block text-sm text-gray-600 font-light">
                  {t("projectDetails.area")}
                </span>
                <span className="block text-lg font-medium">
                  {property?.surface} m²
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-light mb-4">
                {t("projectDetails.description")}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                {localize("description")}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-light mb-4">
                {t("projectDetails.features")}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {localize("features").map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleContactClick}
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-light text-lg"
            >
              {t("projectDetails.ctaButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
