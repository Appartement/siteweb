import React from "react";
import { useTranslation } from "react-i18next";
import {
  Shield,
  Building2,
  FileText,
  Lock,
  UserCheck,
  Clock,
} from "lucide-react";

const PrivacyPolicy = () => {
  const { t } = useTranslation("");
  const lastUpdate = "13 mars 2024"; // Vous pouvez également gérer la date via i18n si nécessaire

  return (
    <div className="bg-white pt-28">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light mb-8 text-center">
          {t("privacyPolicy.title")}
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          {t("privacyPolicy.lastUpdate", { date: lastUpdate })}
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Section Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-blue-600" />
              {t("privacyPolicy.introductionTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.introductionText")}
            </p>
          </section>

          {/* Section Données collectées */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-blue-600" />
              {t("privacyPolicy.dataCollectionTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.dataCollectionText")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {t("privacyPolicy.dataCollectionItems", {
                returnObjects: true,
              }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section Utilisation des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <Lock className="h-6 w-6 mr-3 text-blue-600" />
              {t("privacyPolicy.useOfDataTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.useOfDataText")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {t("privacyPolicy.useOfDataItems", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          {/* Section Base légale */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">
              {t("privacyPolicy.legalBasisTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.legalBasisText")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {t("privacyPolicy.legalBasisItems", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          {/* Section Conservation des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">
              {t("privacyPolicy.dataRetentionTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.dataRetentionText")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {t("privacyPolicy.dataRetentionItems", {
                returnObjects: true,
              }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section Vos droits */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <UserCheck className="h-6 w-6 mr-3 text-blue-600" />
              {t("privacyPolicy.yourRightsTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.yourRightsText")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {t("privacyPolicy.yourRightsItems", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.contactForRights")}{" "}
              <a
                href="mailto:adm@lappartement.pt"
                className="text-blue-600 hover:text-blue-800"
              >
                adm@lappartement.pt
              </a>
            </p>
          </section>

          {/* Section Sécurité des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">
              {t("privacyPolicy.dataSecurityTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.dataSecurityText")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              {t("privacyPolicy.dataSecurityItems", {
                returnObjects: true,
              }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section Transferts de données */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">
              {t("privacyPolicy.dataTransfersTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.dataTransfersText")}
            </p>
          </section>

          {/* Section Modifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">
              {t("privacyPolicy.policyChangesTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.policyChangesText")}
            </p>
          </section>

          {/* Section Contact */}
          <section>
            <h2 className="text-2xl font-light mb-6">
              {t("privacyPolicy.contactTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.contactText")}
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                {t("privacyPolicy.contactDetails.company")}
              </p>
              <p className="text-gray-600 mb-2">
                {t("privacyPolicy.contactDetails.address")}
              </p>
              <p className="text-gray-600 mb-2">
                {t("privacyPolicy.contactDetails.emailPrefix")}{" "}
                <a
                  href="mailto:adm@lappartement.pt"
                  className="text-blue-600 hover:text-blue-800"
                >
                  adm@lappartement.pt
                </a>
              </p>
              <p className="text-gray-600">
                {t("privacyPolicy.contactDetails.phonePrefix")}{" "}
                <a
                  href="tel:+351926322486"
                  className="text-blue-600 hover:text-blue-800"
                >
                  +351 926 322 486
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
