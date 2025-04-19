import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Wrench,
  Settings,
  ArrowRight,
  Camera as Camera360,
  Touchpad as Touch,
  Home as House3D,
  LayoutDashboard,
  FileText,
  Camera,
  Monitor,
  Ruler,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import heroUrl from "../assets/our-services-hero.jpeg";
import heroUrlEdited from "../assets/our-services-hero-edited.jpeg";

const Services = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    const hash = window.location.hash;
    console.log({ hash });
    if (hash) {
      // Wait for the DOM to be ready (optional but sometimes useful)
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={heroUrl}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
        f{/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-light text-white mb-6 tracking-wider">
              {t("services.heroTitle")}
            </h1>
            <p className="text-lg sm:text-xl text-white font-light tracking-wide max-w-2xl mx-auto">
              {t("services.heroSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Subtitle */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {t("services.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Real Estate */}
            <Link
              to="/services/transaction"
              className="group relative text-center h-[450px] flex flex-col bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 hover:border-blue-600 hover:-translate-y-2"
            >
              <div className="flex-shrink-0">
                <Home className="h-12 w-12 text-gray-900 mx-auto mb-6 group-hover:text-blue-600 transition-colors duration-500 group-hover:scale-110 transform" />
                <h3 className="text-xl font-light tracking-wide mb-4 group-hover:text-blue-600 transition-colors duration-500">
                  {t("services.transaction.title")}
                </h3>
              </div>
              <p className="text-gray-600 font-light mb-8 flex-grow text-center">
                {t("services.transaction.description")}
              </p>
              <ul className="space-y-4 text-gray-600 font-light text-center mt-auto">
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <span>• {t("services.transaction.items.0")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <span>• {t("services.transaction.items.1")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-100">
                  <span>• {t("services.transaction.items.2")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <span>• {t("services.transaction.items.3")}</span>
                </li>
              </ul>
            </Link>

            {/* Renovation */}
            <Link
              to="/services/renovation"
              className="group relative text-center h-[450px] flex flex-col bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 hover:border-blue-600 hover:-translate-y-2"
            >
              <div className="flex-shrink-0">
                <Wrench className="h-12 w-12 text-gray-900 mx-auto mb-6 group-hover:text-blue-600 transition-colors duration-500 group-hover:scale-110 transform" />
                <h3 className="text-xl font-light tracking-wide mb-4 group-hover:text-blue-600 transition-colors duration-500">
                  {t("services.renovation.title")}
                </h3>
              </div>
              <p className="text-gray-600 font-light mb-8 flex-grow text-center">
                {t("services.renovation.description")}
              </p>
              <ul className="space-y-4 text-gray-600 font-light text-center mt-auto">
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <span>• {t("services.renovation.items.0")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <span>• {t("services.renovation.items.1")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-100">
                  <span>• {t("services.renovation.items.2")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <span>• {t("services.renovation.items.3")}</span>
                </li>
              </ul>
            </Link>

            {/* Management */}
            <Link
              to="/services/gestion"
              className="group relative text-center h-[450px] flex flex-col bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 hover:border-blue-600 hover:-translate-y-2"
            >
              <div className="flex-shrink-0">
                <Settings className="h-12 w-12 text-gray-900 mx-auto mb-6 group-hover:text-blue-600 transition-colors duration-500 group-hover:scale-110 transform" />
                <h3 className="text-xl font-light tracking-wide mb-4 group-hover:text-blue-600 transition-colors duration-500">
                  {t("services.management.title")}
                </h3>
              </div>
              <p className="text-gray-600 font-light mb-8 flex-grow text-center">
                {t("services.management.description")}
              </p>
              <ul className="space-y-4 text-gray-600 font-light text-center mt-auto">
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <span>• {t("services.management.items.0")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <span>• {t("services.management.items.1")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-100">
                  <span>• {t("services.management.items.2")}</span>
                </li>
                <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <span>• {t("services.management.items.3")}</span>
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Matterport */}
      <div className="py-24 bg-white" id="virtual-tour-service">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 tracking-wider">
            {t("services.matterport.title")}
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl font-light text-blue-600 mb-3">60%</p>
              <p className="text-gray-600 font-light">
                {t("services.matterport.stats.0")}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl font-light text-blue-600 mb-3">+50%</p>
              <p className="text-gray-600 font-light">
                {t("services.matterport.stats.1")}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl font-light text-blue-600 mb-3">+600%</p>
              <p className="text-gray-600 font-light">
                {t("services.matterport.stats.2")}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl font-light text-blue-600 mb-3">+48%</p>
              <p className="text-gray-600 font-light">
                {t("services.matterport.stats.3")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Video and Info Box */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://my.matterport.com/show/?m=LgfiEHvzWSz&lang=fr"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {t("services.matterport.info.title")}
                </h3>
                <p className="text-gray-600 font-light mb-6">
                  {t("services.matterport.info.description")}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-light"
                >
                  <span>{t("services.matterport.info.cta")}</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Characteristics */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Intuitive Navigation */}
                <div className="group h-[300px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                        <Monitor className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-light text-center mb-3">
                        {t(
                          "services.characteristics.intuitiveNavigation.title"
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 font-light text-center">
                        {t(
                          "services.characteristics.intuitiveNavigation.description"
                        )}
                      </p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                      <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                        {t(
                          "services.characteristics.intuitiveNavigation.backDescription"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3D View */}
                <div className="group h-[300px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                        <House3D className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-light text-center mb-3">
                        {t("services.characteristics.full3DView.title")}
                      </h3>
                      <p className="text-sm text-gray-600 font-light text-center">
                        {t("services.characteristics.full3DView.description")}
                      </p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                      <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                        {t(
                          "services.characteristics.full3DView.backDescription"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Measured Plans */}
                <div className="group h-[300px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                        <Ruler className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-light text-center mb-3">
                        {t("services.characteristics.measuredPlans.title")}
                      </h3>
                      <p className="text-sm text-gray-600 font-light text-center">
                        {t(
                          "services.characteristics.measuredPlans.description"
                        )}
                      </p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                      <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                        {t(
                          "services.characteristics.measuredPlans.backDescription"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* HD Photos */}
                <div className="group h-[300px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                        <Camera className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-light text-center mb-3">
                        {t("services.characteristics.hdPhotos.title")}
                      </h3>
                      <p className="text-sm text-gray-600 font-light text-center">
                        {t("services.characteristics.hdPhotos.description")}
                      </p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                      <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                        {t("services.characteristics.hdPhotos.backDescription")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-8">{t("services.ctaTitle")}</h2>
          <p className="text-gray-600 font-light mb-12">
            {t("services.ctaDescription")}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-colors font-light"
          >
            {t("services.ctaButton")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
