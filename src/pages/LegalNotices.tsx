import React from "react";
import { useTranslation } from "react-i18next";
import { Scale, Building2, FileText } from "lucide-react";

const LegalNotices = () => {
  const { t } = useTranslation("");
  const lastUpdate = "13 mars 2024"; // Vous pouvez également passer cette date via les traductions si nécessaire

  return (
    <div className="bg-white pt-28">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light mb-8 text-center">
          {t("legalNotices.title")}
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          {t("legalNotices.lastUpdate", { date: lastUpdate })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <Building2 className="h-6 w-6 mr-3 text-blue-600" />
              {t("legalNotices.legalInformationTitle")}
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-600 mb-2">
                <strong>
                  {t("legalNotices.legalInformation.companyName")}
                </strong>{" "}
                L'Appartement LDA
              </p>
              <p className="text-gray-600 mb-2">
                <strong>{t("legalNotices.legalInformation.legalForm")}</strong>{" "}
                Société à responsabilité limitée
              </p>
              <p className="text-gray-600 mb-2">
                <strong>
                  {t("legalNotices.legalInformation.shareCapital")}
                </strong>{" "}
                50 000€
              </p>
              <p className="text-gray-600 mb-2">
                <strong>{t("legalNotices.legalInformation.headOffice")}</strong>{" "}
                Rua do Sol ao Rato 69B, 1250-261 Lisboa, Portugal
              </p>
              <p className="text-gray-600 mb-2">
                <strong>
                  {t("legalNotices.legalInformation.registrationNumber")}
                </strong>{" "}
                [Numéro RCS]
              </p>
              <p className="text-gray-600 mb-2">
                <strong>{t("legalNotices.legalInformation.vatNumber")}</strong>{" "}
                [Numéro TVA]
              </p>
              <p className="text-gray-600">
                <strong>{t("legalNotices.legalInformation.amiLicense")}</strong>{" "}
                [Numéro AMI]
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-blue-600" />
              {t("legalNotices.publicationDirectionTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("legalNotices.publicationDirection")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("legalNotices.contactInfo")}
              <a
                href="mailto:adm@lappartement.pt"
                className="text-blue-600 hover:text-blue-800"
              >
                adm@lappartement.pt
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-blue-600" />
              {t("legalNotices.hostingTitle")}
            </h2>
            <p
              className="text-gray-600 mb-4"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("legalNotices.hosting")}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">
              {t("legalNotices.intellectualPropertyTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("legalNotices.intellectualProperty1")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("legalNotices.intellectualProperty2")}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">
              {t("legalNotices.hyperlinksTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("legalNotices.hyperlinks1")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("legalNotices.hyperlinks2")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6">
              {t("legalNotices.disclaimerTitle")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("legalNotices.disclaimer1")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("legalNotices.disclaimer2")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotices;
