import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPlEPvp-vf3JZqy4iEf-yCEHQ_iyLvc6gayOdorO8PgZKlrkgm24oakyoXPEzMphdGMW8eTSK6PYZrSjUJffxXhsbJGhGCFxq2jDnlfKf8wwPmsPiABzwq9sudDTo6WTv9PVvyRJRDCdEElt5bFP8VB=w350-h234-s-no-gm?authuser=0"
                alt="L'Appartement Logo"
                className={`h-20 w-auto transition-all duration-300 ${
                  isScrolled ? "brightness-0" : "brightness-100"
                }`}
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <Link
              to="/about"
              className={`font-light tracking-wide hover:text-gray-300 transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {t("nav.about")}
            </Link>
            <div className="relative group">
              <Link
                to="/services"
                className={`font-light tracking-wide hover:text-gray-300 transition-colors flex items-center ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <span>{t("nav.services")}</span>
                <ChevronDown className="ml-1 h-4 w-4 transform transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/services/transaction"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-light"
                >
                  {t("servicesMenu.transaction")}
                </Link>
                <Link
                  to="/services/renovation"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-light"
                >
                  {t("servicesMenu.renovation")}
                </Link>
                <Link
                  to="/services/gestion"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-light"
                >
                  {t("servicesMenu.management")}
                </Link>
              </div>
            </div>
            <Link
              to="/biens"
              className={`font-light tracking-wide hover:text-gray-300 transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {t("nav.properties")}
            </Link>
            <Link
              to="/projets"
              className={`font-light tracking-wide hover:text-gray-300 transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {t("nav.projects")}
            </Link>
            <Link
              to="/contact"
              className={`font-light tracking-wide hover:text-gray-300 transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? "text-black" : "text-white"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-900 font-light tracking-wide"
            >
              {t("nav.about")}
            </Link>
            <div className="px-3 py-2">
              <Link
                to="/services"
                className="block font-light tracking-wide text-gray-900 mb-2"
              >
                {t("nav.services")}
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/transaction"
                  className="block text-gray-600 hover:text-gray-900 font-light"
                >
                  {t("servicesMenu.transaction")}
                </Link>
                <Link
                  to="/services/renovation"
                  className="block text-gray-600 hover:text-gray-900 font-light"
                >
                  {t("servicesMenu.renovation")}
                </Link>
                <Link
                  to="/services/gestion"
                  className="block text-gray-600 hover:text-gray-900 font-light"
                >
                  {t("servicesMenu.management")}
                </Link>
              </div>
            </div>
            <Link
              to="/biens"
              className="block px-3 py-2 text-gray-900 font-light tracking-wide"
            >
              {t("nav.properties")}
            </Link>
            <Link
              to="/projets"
              className="block px-3 py-2 text-gray-900 font-light tracking-wide"
            >
              {t("nav.projects")}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-900 font-light tracking-wide"
            >
              {t("nav.contact")}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
