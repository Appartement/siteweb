import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navBackground = isHomePage
    ? isScrolled
      ? "bg-white/90 backdrop-blur-sm shadow-lg"
      : "bg-transparent"
    : "bg-white/90 backdrop-blur-sm shadow-lg";

  const textColor = isHomePage
    ? isScrolled
      ? "text-gray-900"
      : "text-white"
    : "text-gray-900";

  const logoFilter = isHomePage
    ? isScrolled
      ? "brightness-0"
      : "brightness-100"
    : "brightness-0";

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20 md:h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center py-2">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPlEPvp-vf3JZqy4iEf-yCEHQ_iyLvc6gayOdorO8PgZKlrkgm24oakyoXPEzMphdGMW8eTSK6PYZrSjUJffxXhsbJGhGCFxq2jDnlfKf8wwPmsPiABzwq9sudDTo6WTv9PVvyRJRDCdEElt5bFP8VB=w350-h234-s-no-gm?authuser=0"
                alt="Logo L'Appartement - Agence immobilière de luxe à Lisbonne spécialisée dans la transaction, rénovation et gestion locative"
                className={`h-12 md:h-20 w-auto transition-all duration-300 ${logoFilter}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link
                to="/"
                className={`font-light tracking-wide hover:text-gray-300 transition-colors ${textColor}`}
              >
                <Home className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className={`font-light tracking-wide hover:text-gray-300 transition-colors ${textColor}`}
              >
                {t("nav.about")}
              </Link>
              <div className="relative group">
                <Link
                  to="/services"
                  className={`font-light tracking-wide hover:text-gray-300 transition-colors flex items-center ${textColor}`}
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
                className={`font-light tracking-wide hover:text-gray-300 transition-colors ${textColor}`}
              >
                {t("nav.properties")}
              </Link>
              <Link
                to="/projets"
                className={`font-light tracking-wide hover:text-gray-300 transition-colors ${textColor}`}
              >
                {t("nav.projects")}
              </Link>
              <Link
                to="/contact"
                className={`font-light tracking-wide hover:text-gray-300 transition-colors ${textColor}`}
              >
                {t("nav.contact")}
              </Link>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button & Language Switcher */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${textColor} z-50`}
                aria-label="Menu principal"
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
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="pt-24 pb-6 px-6">
            <div className="space-y-6">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span className="font-light">Accueil</span>
              </Link>

              <Link
                to="/about"
                className="block text-gray-900 hover:text-blue-600 transition-colors font-light"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.about")}
              </Link>

              <div className="space-y-3">
                <Link
                  to="/services"
                  className="block text-gray-900 hover:text-blue-600 transition-colors font-light"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.services")}
                </Link>
                <div className="pl-4 space-y-3">
                  <Link
                    to="/services/transaction"
                    className="block text-gray-600 hover:text-blue-600 transition-colors font-light"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("servicesMenu.transaction")}
                  </Link>
                  <Link
                    to="/services/renovation"
                    className="block text-gray-600 hover:text-blue-600 transition-colors font-light"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("servicesMenu.renovation")}
                  </Link>
                  <Link
                    to="/services/gestion"
                    className="block text-gray-600 hover:text-blue-600 transition-colors font-light"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("servicesMenu.management")}
                  </Link>
                </div>
              </div>

              <Link
                to="/biens"
                className="block text-gray-900 hover:text-blue-600 transition-colors font-light"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.properties")}
              </Link>

              <Link
                to="/projets"
                className="block text-gray-900 hover:text-blue-600 transition-colors font-light"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.projects")}
              </Link>

              <Link
                to="/contact"
                className="block text-gray-900 hover:text-blue-600 transition-colors font-light"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 font-light">
                  Rua do Sol ao Rato 69B
                  <br />
                  Lisboa, Portugal
                </p>
                <p className="text-sm text-gray-600 font-light">
                  <a
                    href="tel:+351926322486"
                    className="hover:text-blue-600 transition-colors"
                  >
                    +351 926 322 486
                  </a>
                </p>
                <p className="text-sm text-gray-600 font-light">
                  <a
                    href="mailto:adm@lappartement.pt"
                    className="hover:text-blue-600 transition-colors"
                  >
                    adm@lappartement.pt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
