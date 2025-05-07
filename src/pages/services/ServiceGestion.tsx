import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, LineChart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroUrl from "../../assets/gestion.jpeg";

const ServiceGestion = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroUrl})`,
            filter: "grayscale(0.2)", // 👈 This adds grayscale directly
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* 👈 This darkens it more */}
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-normal text-white mb-6 tracking-wider">
              {t("serviceGestion.heroTitle")}
            </h1>
            <p className="text-xl text-white font-normal tracking-wide max-w-2xl mx-auto">
              {t("serviceGestion.heroSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {t("serviceGestion.missionDescription")}
            </p>
          </div>

          <h2 className="text-3xl font-light text-center mb-16 text-[#a2a09c]">
            {t("serviceGestion.sectionTitle")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Locataires */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#a2a09c]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("serviceGestion.tenant.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("serviceGestion.tenant.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#a2a09c] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      {t("serviceGestion.tenant.backItems", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Loyers */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#a2a09c]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("serviceGestion.rent.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("serviceGestion.rent.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#a2a09c] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      {t("serviceGestion.rent.backItems", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Technique */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#a2a09c]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("serviceGestion.technical.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("serviceGestion.technical.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#a2a09c] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      {t("serviceGestion.technical.backItems", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Départ */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#a2a09c]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("serviceGestion.departure.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("serviceGestion.departure.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#a2a09c] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      {t("serviceGestion.departure.backItems", {
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
            <div className="bg-[#a2a09c]/5 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-8 text-[#a2a09c]">
                {t("serviceGestion.details.managementTitle")}
              </h2>
              <ul className="space-y-4 text-gray-600 font-light">
                {t("serviceGestion.details.managementItems", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <ArrowRight className="h-6 w-6 text-[#a2a09c] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-[#a2a09c] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#a2a09c]/5 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-8 text-[#a2a09c]">
                {t("serviceGestion.details.technicalTitle")}
              </h2>
              <ul className="space-y-4 text-gray-600 font-light">
                {t("serviceGestion.details.technicalItems", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <ArrowRight className="h-6 w-6 text-[#a2a09c] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-[#a2a09c] transition-colors">
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
      <div className="bg-[#a2a09c]/10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16 text-[#a2a09c]">
            {t("serviceGestion.additional.advantagesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#a2a09c]/20 hover:border-[#a2a09c] transition-all hover:shadow-xl">
              <Shield className="h-12 w-12 text-[#a2a09c] mb-6" />
              <h3 className="text-xl font-light mb-4 text-[#a2a09c]">
                {t("serviceGestion.additional.security.title")}
              </h3>
              <p className="text-gray-600 font-light mb-6">
                {t("serviceGestion.additional.security.description")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#a2a09c]/20 hover:border-[#a2a09c] transition-all hover:shadow-xl">
              <LineChart className="h-12 w-12 text-[#a2a09c] mb-6" />
              <h3 className="text-xl font-light mb-4 text-[#a2a09c]">
                {t("serviceGestion.additional.profitability.title")}
              </h3>
              <p className="text-gray-600 font-light mb-6">
                {t("serviceGestion.additional.profitability.description")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#a2a09c]/20 hover:border-[#a2a09c] transition-all hover:shadow-xl">
              <Users className="h-12 w-12 text-[#a2a09c] mb-6" />
              <h3 className="text-xl font-light mb-4 text-[#a2a09c]">
                {t("serviceGestion.additional.support.title")}
              </h3>
              <p className="text-gray-600 font-light mb-6">
                {t("serviceGestion.additional.support.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 text-center bg-gradient-to-b from-white to-[#a2a09c]/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-8 text-[#a2a09c]">
            {t("serviceGestion.cta.title")}
          </h2>
          <p className="text-gray-600 font-light mb-12">
            {t("serviceGestion.cta.description")}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#a2a09c] text-white px-12 py-4 rounded-lg hover:bg-[#8b8984] transition-colors font-light"
          >
            {t("serviceGestion.cta.button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceGestion;
