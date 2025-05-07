import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import heroUrl from "../assets/contact-us.jpeg";

interface LocationState {
  propertyId?: number;
  propertyTitle?: string;
  propertyType?: "vente" | "location";
  propertyLocation?: string;
  propertyPrice?: number;
}

const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as LocationState;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: state?.propertyId ? "immobilier" : "autre",
    message: "",
  });
  const [result, setResult] = useState("");

  // Pré-remplissage du message si des infos sur un bien sont disponibles
  useEffect(() => {
    if (state?.propertyId) {
      const propertyInfo = `
${t("contact.propertyInfoHeader")} :
- ${t("contact.propertyRef")}: ${state.propertyId}
- ${t("contact.propertyTitle")}: ${state.propertyTitle}
- ${t("contact.propertyType")}: ${
        state.propertyType === "vente" ? t("contact.sale") : t("contact.rent")
      }
- ${t("contact.propertyLocation")}: ${state.propertyLocation}
- ${t("contact.propertyPrice")}: ${state.propertyPrice?.toLocaleString(
        "fr-FR"
      )}€${state.propertyType === "location" ? "/mois" : ""}

${t("contact.messageHeader")} : `;

      setFormData((prev) => ({
        ...prev,
        message: propertyInfo,
      }));
    }
  }, [state, t]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(t("contact.sending"));
    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append("access_key", "3bf93fb8-45c2-43d7-b6f2-5f42c87ad556");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (data.success) {
        setResult(t("contact.success"));
        // Réinitialisation des champs en actualisant l'état
        setFormData({
          name: "",
          email: "",
          subject: state?.propertyId ? "immobilier" : "autre",
          message: state?.propertyId
            ? `
${t("contact.propertyInfoHeader")} :
- ${t("contact.propertyRef")}: ${state.propertyId}
- ${t("contact.propertyTitle")}: ${state.propertyTitle}
- ${t("contact.propertyType")}: ${
                state.propertyType === "vente"
                  ? t("contact.sale")
                  : t("contact.rent")
              }
- ${t("contact.propertyLocation")}: ${state.propertyLocation}
- ${t("contact.propertyPrice")}: ${state.propertyPrice?.toLocaleString(
                "fr-FR"
              )}€${state.propertyType === "location" ? "/mois" : ""}

${t("contact.messageHeader")} : `
            : "",
        });
      } else {
        console.error("Erreur", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Erreur", error);
      setResult(t("contact.error"));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-normal text-white mb-6 tracking-wider">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-white font-normal tracking-wide max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Laure */}
            <div className="flex items-start space-x-8">
              <div className="w-48 h-48 overflow-hidden rounded-lg">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPd5D9nl5I6_cW4prDEmR_Bp_QoeK-U0IyN9r2Sp0Sv1lU46rK5B_abBuumdjNWJWdw6RRUaggwRjPwa1dqNnTncBRNP9cZh9SbO_aN17_Dkl7hfXtYuKhKeWFCBeCvf2KGz2AR2Iisq8-oTrJaXdJK=w1111-h1280-s-no-gm?authuser=0"
                  alt="Laure Fargeot"
                  className="w-full h-full object-cover object-[center_35%] grayscale"
                  style={{ filter: "grayscale(100%)" }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">Laure Fargeot</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#81a197]" />
                    <a
                      href="mailto:laure.fargeot@lappartement.pt"
                      className="hover:text-[#81a197] transition-colors"
                    >
                      laure.fargeot@lappartement.pt
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#81a197]" />
                    <span>
                      PT:{" "}
                      <a
                        href="tel:+351926322486"
                        className="hover:text-[#81a197] transition-colors"
                      >
                        +351 926 322 486
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Jean-Emmanuel */}
            <div className="flex items-start space-x-8">
              <div className="w-48 h-48 overflow-hidden rounded-lg">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczMoPC7wL3fjpeqeGavP6u9sR7XWEM8ERoyVHigKEiT10GLD1cOH4vImr_jGMz1rgu21EVKFruRKe1pCjrcArwmPnu2Nyx6WGjSEAzXCMpEPfjqxjXnqWc0DdYZvpgXYCF9XsmdfgxoGltrlhVWPDtEw?w850-h1280-s-no-gm?authuser=0"
                  alt="Jean-Emmanuel Salvado"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">
                  Jean-Emmanuel Salvado
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#81a197]" />
                    <a
                      href="mailto:je.salvado@lappartement.pt"
                      className="hover:text-[#81a197] transition-colors"
                    >
                      je.salvado@lappartement.pt
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#81a197]" />
                    <span>
                      PT:{" "}
                      <a
                        href="tel:+351963567868"
                        className="hover:text-[#81a197] transition-colors"
                      >
                        +351 963 567 868
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#81a197] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#81a197] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.form.subject")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#81a197] focus:border-transparent"
                >
                  <option value="immobilier">
                    {t("contact.form.options.immobilier")}
                  </option>
                  <option value="renovation">
                    {t("contact.form.options.renovation")}
                  </option>
                  <option value="gestion">
                    {t("contact.form.options.gestion")}
                  </option>
                  <option value="autre">
                    {t("contact.form.options.autre")}
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#81a197] focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#81a197] text-white py-4 rounded-lg hover:bg-[#6b8a81] transition-colors font-light"
              >
                {t("contact.form.send")}
              </button>
              <div className="text-center mt-4 text-gray-700">{result}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
