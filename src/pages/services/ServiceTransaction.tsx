import { Link } from "react-router-dom";
import { ArrowRight, Camera as Camera360, Euro, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServiceTransaction = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_25%] md:bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/pw/AP1GczOf6-fMSGrv3H5Q99dMta96rUyktoX-pTFUTgPYjH-X9kWQ3ZTTGJxYigPMGl5aU31EC3KG78qQ_3HLGhguH756hzpq9MAnhxY3N_ASfnnnzbg23M43Qqk4oCBs-EAR_jscjE8s2rdNLe7cerH6mbRl=w2438-h940-s-no-gm?authuser=0")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 md:mb-6 tracking-wider">
              {t("servicesPage.transaction.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-white font-light tracking-wide max-w-2xl mx-auto">
              {t("servicesPage.transaction.heroSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {t("servicesPage.transaction.missionDescription")}
            </p>
          </div>
          <h2 className="text-3xl font-light text-center mb-16 text-[#81a197]">
            {t("servicesPage.transaction.sectionTitle")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Achat */}
            <Link
              to="/services/transaction"
              className="group relative text-center h-[300px] [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#81a197]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("servicesPage.transaction.buy.title")}
                    </h3>
                    <div className="hidden"></div>
                    <p className="text-white font-light drop-shadow-md">
                      {t("servicesPage.transaction.buy.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#81a197] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      <li>• {t("servicesPage.transaction.buy.items.0")}</li>
                      <li>• {t("servicesPage.transaction.buy.items.1")}</li>
                      <li>• {t("servicesPage.transaction.buy.items.2")}</li>
                      <li>• {t("servicesPage.transaction.buy.items.3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>

            {/* Vente */}
            <Link
              to="/services/transaction"
              className="group relative text-center h-[300px] [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#81a197]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("servicesPage.transaction.sell.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("servicesPage.transaction.sell.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#81a197] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      <li>• {t("servicesPage.transaction.sell.items.0")}</li>
                      <li>• {t("servicesPage.transaction.sell.items.1")}</li>
                      <li>• {t("servicesPage.transaction.sell.items.2")}</li>
                      <li>• {t("servicesPage.transaction.sell.items.3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>

            {/* Location */}
            <Link
              to="/services/transaction"
              className="group relative text-center h-[300px] [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#81a197]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("servicesPage.transaction.rent.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("servicesPage.transaction.rent.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#81a197] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      <li>• {t("servicesPage.transaction.rent.items.0")}</li>
                      <li>• {t("servicesPage.transaction.rent.items.1")}</li>
                      <li>• {t("servicesPage.transaction.rent.items.2")}</li>
                      <li>• {t("servicesPage.transaction.rent.items.3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>

            {/* Investissement */}
            <Link
              to="/services/transaction"
              className="group relative text-center h-[300px] [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full bg-[#81a197]/60 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl lg:text-3xl font-light text-white mb-4 drop-shadow-md">
                      {t("servicesPage.transaction.invest.title")}
                    </h3>
                    <p className="text-white font-light drop-shadow-md">
                      {t("servicesPage.transaction.invest.subtitle")}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border-2 border-[#81a197] [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-center">
                    <ul className="space-y-3 text-gray-600 font-light">
                      <li>• {t("servicesPage.transaction.invest.items.0")}</li>
                      <li>• {t("servicesPage.transaction.invest.items.1")}</li>
                      <li>• {t("servicesPage.transaction.invest.items.2")}</li>
                      <li>• {t("servicesPage.transaction.invest.items.3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Details */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-[#81a197]/5 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-8 text-[#81a197]">
                {t("servicesPage.transaction.forSellersTitle")}
              </h2>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start group">
                  <ArrowRight className="h-6 w-6 text-[#81a197] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-[#81a197] transition-colors">
                    {t("servicesPage.transaction.forSellers.items.0")}
                  </span>
                </li>
                <li className="flex items-start group">
                  <ArrowRight className="h-6 w-6 text-[#81a197] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-[#81a197] transition-colors">
                    {t("servicesPage.transaction.forSellers.items.1")}
                  </span>
                </li>
                <li className="flex items-start group">
                  <ArrowRight className="h-6 w-6 text-[#81a197] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-[#81a197] transition-colors">
                    {t("servicesPage.transaction.forSellers.items.2")}
                  </span>
                </li>
                <li className="flex items-start group">
                  <ArrowRight className="h-6 w-6 text-[#81a197] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-[#81a197] transition-colors">
                    {t("servicesPage.transaction.forSellers.items.3")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#81a197]/5 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-8 text-[#81a197]">
                {t("servicesPage.transaction.forBuyersTitle")}
              </h2>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start group">
                  <ArrowRight className="h-6 w-6 text-[#81a197] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-[#81a197] transition-colors">
                    {t("servicesPage.transaction.forBuyers.items.0")}
                  </span>
                </li>
                <li className="flex items-start group">
                  <ArrowRight className="h-6 w-6 text-[#81a197] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-[#81a197] transition-colors">
                    {t("servicesPage.transaction.forBuyers.items.1")}
                  </span>
                </li>
                <li className="flex items-start group">
                  <ArrowRight className="h-6 w-6 text-[#81a197] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-[#81a197] transition-colors">
                    {t("servicesPage.transaction.forBuyers.items.2")}
                  </span>
                </li>
                <li className="flex items-start group">
                  <ArrowRight className="h-6 w-6 text-[#81a197] mr-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-[#81a197] transition-colors">
                    {t("servicesPage.transaction.forBuyers.items.3")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-[#81a197]/10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16 text-[#81a197]">
            {t("servicesPage.additional.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Link to="/services#virtual-tour-service">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#81a197]/20 hover:border-[#81a197] transition-all hover:shadow-xl">
                <Camera360 className="h-12 w-12 text-[#81a197] mb-6" />
                <h3 className="text-xl font-light mb-4 text-[#81a197]">
                  {t("servicesPage.additional.virtualTour.title")}
                </h3>
                <p className="text-gray-600 font-light mb-6">
                  {t("servicesPage.additional.virtualTour.description")}
                </p>
              </div>
            </Link>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#81a197]/20 hover:border-[#81a197] transition-all hover:shadow-xl">
              <Euro className="h-12 w-12 text-[#81a197] mb-6" />
              <h3 className="text-xl font-light mb-4 text-[#81a197]">
                {t("servicesPage.additional.taxOptimization.title")}
              </h3>
              <p className="text-gray-600 font-light mb-6">
                {t("servicesPage.additional.taxOptimization.description")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-[#81a197]/20 hover:border-[#81a197] transition-all hover:shadow-xl">
              <Shield className="h-12 w-12 text-[#81a197] mb-6" />
              <h3 className="text-xl font-light mb-4 text-[#81a197]">
                {t("servicesPage.additional.guarantees.title")}
              </h3>
              <p className="text-gray-600 font-light mb-6">
                {t("servicesPage.additional.guarantees.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 text-center bg-gradient-to-b from-white to-[#81a197]/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-8 text-[#81a197]">
            {t("servicesPage.ctaTitle")}
          </h2>
          <p className="text-gray-600 font-light mb-12">
            {t("servicesPage.ctaDescription")}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#81a197] text-white px-12 py-4 rounded-lg hover:bg-[#6b8a81] transition-colors font-light"
          >
            {t("servicesPage.ctaButton")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceTransaction;
