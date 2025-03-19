import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Calculator from "../components/Calculator";
import IMTCalculator from "../components/IMTCalculator";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  Shield,
  LineChart,
  Key,
  BookOpen,
  Scale,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import BANNER from "../assets/chiffre.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const adviceData = {
    fiscal: {
      title: t("home.fiscal.title"), // Exemple : "AVANTAGES FISCAUX" / "FISCAL ADVANTAGES" / "VANTAGENS FISCAIS"
      icon: BookOpen,
      items: [
        {
          title: t("home.fiscal.items.goldenVisa.title"),
          details: t("home.fiscal.items.goldenVisa.details"),
        },
        {
          title: t("home.fiscal.items.rnh.title"),
          details: t("home.fiscal.items.rnh.details"),
        },
        {
          title: t("home.fiscal.items.patrimonial.title"),
          details: t("home.fiscal.items.patrimonial.details"),
        },
        {
          title: t("home.fiscal.items.optimization.title"),
          details: t("home.fiscal.items.optimization.details"),
        },
      ],
    },
    legal: {
      title: t("home.legal.title"),
      icon: Scale,
      items: [
        {
          title: t("home.legal.items.purchaseProcess.title"),
          details: t("home.legal.items.purchaseProcess.details"),
        },
        {
          title: t("home.legal.items.documents.title"),
          details: t("home.legal.items.documents.details"),
        },
        {
          title: t("home.legal.items.rights.title"),
          details: t("home.legal.items.rights.details"),
        },
        {
          title: t("home.legal.items.contracts.title"),
          details: t("home.legal.items.contracts.details"),
        },
      ],
    },
    practical: {
      title: t("home.practical.title"),
      icon: FileText,
      items: [
        {
          title: t("home.practical.items.residentsGuide.title"),
          details: t("home.practical.items.residentsGuide.details"),
        },
        {
          title: t("home.practical.items.nonResidents.title"),
          details: t("home.practical.items.nonResidents.details"),
        },
        {
          title: t("home.practical.items.adminSteps.title"),
          details: t("home.practical.items.adminSteps.details"),
        },
        {
          title: t("home.practical.items.dailyLife.title"),
          details: t("home.practical.items.dailyLife.details"),
        },
      ],
    },
  };

  return (
    <div className="bg-white">
      <Hero />

      {/* Key Figures Section */}
      <div className="relative py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BANNER})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-12 md:mb-16 tracking-wider">
            {t("stats.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="text-center">
              <AnimatedCounter end={5} duration={2000} prefix="+" />
              <p className="text-white font-light">{t("stats.experience")}</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={100} duration={2000} prefix="+" />
              <p className="text-white font-light">{t("stats.properties")}</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={250} duration={2000} prefix="+" />
              <p className="text-white font-light">{t("stats.clients")}</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={120} duration={2000} prefix="+" />
              <p className="text-white font-light">{t("stats.managed")}</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={25} duration={2000} prefix="+" />
              <p className="text-white font-light">{t("stats.partners")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Advice Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 md:mb-16 tracking-wider">
            {t("home.adviceTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {Object.entries(adviceData).map(([key, section]) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === key;
              return (
                <div
                  key={key}
                  className={`bg-white rounded-lg shadow-lg transition-all duration-300 ${
                    isExpanded ? "md:col-span-3" : ""
                  }`}
                >
                  <div
                    className="p-6 md:p-8 cursor-pointer"
                    onClick={() => toggleSection(key)}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="bg-blue-50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mr-4">
                          <Icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg md:text-xl font-light tracking-wide">
                          {section.title}
                        </h3>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                      )}
                    </div>
                    {!isExpanded && (
                      <ul className="space-y-3 text-gray-600 font-light">
                        {section.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item.title}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {isExpanded && (
                      <div className="mt-6 space-y-6 md:space-y-8">
                        {section.items.map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 md:p-6 rounded-lg"
                          >
                            <h4 className="font-medium mb-3">{item.title}</h4>
                            <p className="text-gray-600 font-light leading-relaxed">
                              {item.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-light group"
            >
              <span>{t("home.moreAboutAdvice")}</span>
              <Shield className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 md:mb-16 tracking-wider">
            {t("home.advantagesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <Shield className="h-10 w-10 md:h-12 md:w-12 text-gray-900 mx-auto mb-6" />
              <h3 className="text-lg md:text-xl font-light tracking-wide mb-4">
                {t("home.expertiseTitle")}
              </h3>
              <p className="text-gray-600 font-light">
                {t("home.expertiseDescription")}
              </p>
            </div>
            <div className="text-center">
              <LineChart className="h-10 w-10 md:h-12 md:w-12 text-gray-900 mx-auto mb-6" />
              <h3 className="text-lg md:text-xl font-light tracking-wide mb-4">
                {t("home.performanceTitle")}
              </h3>
              <p className="text-gray-600 font-light">
                {t("home.performanceDescription")}
              </p>
            </div>
            <div className="text-center">
              <Key className="h-10 w-10 md:h-12 md:w-12 text-gray-900 mx-auto mb-6" />
              <h3 className="text-lg md:text-xl font-light tracking-wide mb-4">
                {t("home.peaceTitle")}
              </h3>
              <p className="text-gray-600 font-light">
                {t("home.peaceDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 md:mb-16 tracking-wider">
            {t("home.toolsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <Calculator />
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <IMTCalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
