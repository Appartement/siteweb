import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Clock,
  LineChart,
  Home,
  Wrench,
  Settings,
  Camera as Camera360,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import heroUrl from "../../assets/renovation-hero.jpeg";
import { useFetchImages } from "../../hooks/useGetImages";

const ServiceRenovation = () => {
  const { t } = useTranslation();
  const { images, loading, error } = useFetchImages();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">{t("projectDetails.loading")}</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images.photoRenovation})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-normal text-white mb-6 tracking-wider">
              {t("serviceRenovation.heroTitle")}
            </h1>
            <p className="text-xl text-white font-normal tracking-wide max-w-2xl mx-auto">
              {t("serviceRenovation.heroSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {t("serviceRenovation.missionDescription")}
            </p>
          </div>

          <h2 className="text-3xl font-light text-center mb-16 text-[#8ba2bb]">
            {t("serviceRenovation.sectionTitle")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Standards */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#8ba2bb]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("serviceRenovation.standards.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("serviceRenovation.standards.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#8ba2bb] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      {t("serviceRenovation.standards.backItems", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Design */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#8ba2bb]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("serviceRenovation.design.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("serviceRenovation.design.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#8ba2bb] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      {t("serviceRenovation.design.backItems", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Management */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#8ba2bb]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("serviceRenovation.management.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("serviceRenovation.management.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#8ba2bb] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      {t("serviceRenovation.management.backItems", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#8ba2bb]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("serviceRenovation.delivery.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("serviceRenovation.delivery.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#8ba2bb] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      {t("serviceRenovation.delivery.backItems", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Details */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-[#8ba2bb]/5 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-8 text-[#8ba2bb]">
                {t("serviceRenovation.completeRenovation.title")}
              </h2>
              <ul className="space-y-4 text-gray-600 font-light">
                {t("serviceRenovation.completeRenovation.items", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <ArrowRight className="h-6 w-6 text-[#8ba2bb] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-[#8ba2bb] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#8ba2bb]/5 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-8 text-[#8ba2bb]">
                {t("serviceRenovation.interiorDesign.title")}
              </h2>
              <ul className="space-y-4 text-gray-600 font-light">
                {t("serviceRenovation.interiorDesign.items", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <ArrowRight className="h-6 w-6 text-[#8ba2bb] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-[#8ba2bb] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-[#8ba2bb]/10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16 text-[#8ba2bb]">
            {t("serviceRenovation.additional.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#8ba2bb]/20 hover:border-[#8ba2bb] transition-all hover:shadow-xl">
              <Palette className="h-12 w-12 text-[#8ba2bb] mb-6" />
              <h3 className="text-xl font-light mb-4 text-[#8ba2bb]">
                {t("serviceRenovation.additional.customDesign.title")}
              </h3>
              <p className="text-gray-600 font-light mb-6">
                {t("serviceRenovation.additional.customDesign.description")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#8ba2bb]/20 hover:border-[#8ba2bb] transition-all hover:shadow-xl">
              <Clock className="h-12 w-12 text-[#8ba2bb] mb-6" />
              <h3 className="text-xl font-light mb-4 text-[#8ba2bb]">
                {t("serviceRenovation.additional.projectManagement.title")}
              </h3>
              <p className="text-gray-600 font-light mb-6">
                {t(
                  "serviceRenovation.additional.projectManagement.description"
                )}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#8ba2bb]/20 hover:border-[#8ba2bb] transition-all hover:shadow-xl">
              <LineChart className="h-12 w-12 text-[#8ba2bb] mb-6" />
              <h3 className="text-xl font-light mb-4 text-[#8ba2bb]">
                {t("serviceRenovation.additional.optimization.title")}
              </h3>
              <p className="text-gray-600 font-light mb-6">
                {t("serviceRenovation.additional.optimization.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 text-center bg-gradient-to-b from-white to-[#8ba2bb]/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-8 text-[#8ba2bb]">
            {t("serviceRenovation.cta.title")}
          </h2>
          <p className="text-gray-600 font-light mb-12">
            {t("serviceRenovation.cta.description")}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#8ba2bb] text-white px-12 py-4 rounded-lg hover:bg-[#7589a0] transition-colors font-light"
          >
            {t("serviceRenovation.cta.button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceRenovation;
