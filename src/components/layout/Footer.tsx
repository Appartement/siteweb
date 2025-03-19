import React from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        {/* Logo et description */}
        <div className="text-center md:text-left mb-12 md:mb-0">
          <h3 className="text-2xl font-light tracking-wider mb-4">
            {t("footer.brand")}
          </h3>
          <p className="text-gray-400 font-light max-w-sm mx-auto md:mx-0">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Grille de navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 md:mt-0">
          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-light tracking-wider mb-4 md:mb-6">
              {t("footer.services.title")}
            </h3>
            <ul className="space-y-3 md:space-y-4 text-gray-400 font-light">
              {t("footer.services.items", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="hover:text-white transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-light tracking-wider mb-4 md:mb-6">
              {t("footer.navigation.title")}
            </h3>
            <ul className="space-y-3 md:space-y-4 text-gray-400 font-light">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors block"
                >
                  {t("footer.navigation.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/biens"
                  className="hover:text-white transition-colors block"
                >
                  {t("footer.navigation.properties")}
                </Link>
              </li>
              <li>
                <Link
                  to="/projets"
                  className="hover:text-white transition-colors block"
                >
                  {t("footer.navigation.projects")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors block"
                >
                  {t("footer.navigation.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Légal */}
          <div className="text-center md:text-left col-span-2 md:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light tracking-wider mb-4 md:mb-6">
                  {t("footer.contact.title")}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-400 font-light">
                    {t("footer.contact.address")}
                  </p>
                  <p className="text-gray-400 font-light">
                    <a
                      href="tel:+351926322486"
                      className="hover:text-white transition-colors block"
                    >
                      +351 926 322 486
                    </a>
                  </p>
                  <p className="text-gray-400 font-light">
                    <a
                      href="mailto:adm@lappartement.pt"
                      className="hover:text-white transition-colors block"
                    >
                      adm@lappartement.pt
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light tracking-wider mb-4 md:mb-6">
                  {t("footer.legal.title")}
                </h3>
                <ul className="space-y-3 md:space-y-4 text-gray-400 font-light">
                  <li>
                    <Link
                      to="/mentions-legales"
                      className="hover:text-white transition-colors block"
                    >
                      {t("footer.legal.mentions")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/politique-confidentialite"
                      className="hover:text-white transition-colors block"
                    >
                      {t("footer.legal.privacy")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center md:justify-start space-x-4 pt-8">
              <a
                href="https://www.instagram.com/lappartement.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/l-appartement-pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 font-light tracking-wide mb-2">
            © {new Date().getFullYear()} {t("footer.brand")}.{" "}
            {t("footer.rights")}
          </p>
          <p className="text-gray-500 font-light text-sm">
            {t("footer.designedWith")}{" "}
            <a
              href="https://gosite-web.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("footer.designer")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
