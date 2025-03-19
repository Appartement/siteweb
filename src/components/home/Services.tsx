import { Home, Wrench, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wider">
          {t("hero.title")} {/* Exemple : "360° REAL ESTATE" */}
        </h2>

        {/* Services principaux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
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
              {t("services_section.transactionDescription", {
                defaultValue:
                  "Service complet pour l'immobilier au Portugal : recherche, négociation et sécurisation.",
              })}
            </p>
            <ul className="space-y-4 text-gray-600 font-light text-center mt-auto">
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <span>
                  •{" "}
                  {t("services_section.transactionItems.0", {
                    defaultValue: "Recherche personnalisée",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-75">
                <span>
                  •{" "}
                  {t("services_section.transactionItems.1", {
                    defaultValue: "Négociation optimale",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-100">
                <span>
                  •{" "}
                  {t("services_section.transactionItems.2", {
                    defaultValue: "Accompagnement juridique",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-150">
                <span>
                  •{" "}
                  {t("services_section.transactionItems.3", {
                    defaultValue: "Sécurisation des transactions",
                  })}
                </span>
              </li>
            </ul>
          </Link>

          <Link
            to="/services/renovation"
            className="group relative text-center h-[450px] flex flex-col bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 hover:border-blue-600 hover:-translate-y-2"
          >
            <div className="flex-shrink-0">
              <Wrench className="h-12 w-12 text-gray-900 mx-auto mb-6 group-hover:text-blue-600 transition-colors duration-500 group-hover:scale-110 transform" />
              <h3 className="text-xl font-light tracking-wide mb-4 group-hover:text-blue-600 transition-colors duration-500">
                {t("services.renovation")}
              </h3>
            </div>
            <p className="text-gray-600 font-light mb-8 flex-grow text-center">
              {t("services_section.renovationDescription", {
                defaultValue:
                  "Service clé en main pour la rénovation et l'aménagement de vos biens. Nous supervisons tous les travaux, de la conception à la réalisation.",
              })}
            </p>
            <ul className="space-y-4 text-gray-600 font-light text-center mt-auto">
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <span>
                  •{" "}
                  {t("services_section.renovationItems.0", {
                    defaultValue: "Gestion des travaux",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-75">
                <span>
                  •{" "}
                  {t("services_section.renovationItems.1", {
                    defaultValue: "Design personnalisé",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-100">
                <span>
                  •{" "}
                  {t("services_section.renovationItems.2", {
                    defaultValue: "Respect des délais",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-150">
                <span>
                  •{" "}
                  {t("services_section.renovationItems.3", {
                    defaultValue: "Suivi qualité rigoureux",
                  })}
                </span>
              </li>
            </ul>
          </Link>

          <Link
            to="/services/gestion"
            className="group relative text-center h-[450px] flex flex-col bg-white p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 hover:border-blue-600 hover:-translate-y-2"
          >
            <div className="flex-shrink-0">
              <Settings className="h-12 w-12 text-gray-900 mx-auto mb-6 group-hover:text-blue-600 transition-colors duration-500 group-hover:scale-110 transform" />
              <h3 className="text-xl font-light tracking-wide mb-4 group-hover:text-blue-600 transition-colors duration-500">
                {t("services.management")}
              </h3>
            </div>
            <p className="text-gray-600 font-light mb-8 flex-grow text-center">
              {t("services_section.managementDescription", {
                defaultValue:
                  "Gestion locative optimisée pour un rendement sécurisé. Nous assurons la sélection des locataires et le suivi administratif complet.",
              })}
            </p>
            <ul className="space-y-4 text-gray-600 font-light text-center mt-auto">
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <span>
                  •{" "}
                  {t("services_section.managementItems.0", {
                    defaultValue: "Gestion des locataires",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-75">
                <span>
                  •{" "}
                  {t("services_section.managementItems.1", {
                    defaultValue: "Suivi des loyers",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-100">
                <span>
                  •{" "}
                  {t("services_section.managementItems.2", {
                    defaultValue: "Gestion administrative",
                  })}
                </span>
              </li>
              <li className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 delay-150">
                <span>
                  •{" "}
                  {t("services_section.managementItems.3", {
                    defaultValue: "Maintenance régulière",
                  })}
                </span>
              </li>
            </ul>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-light group"
          >
            <span>{t("services_section.cta")}</span>
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
