import React, { useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const IMTCalculator = () => {
  const { t, i18n } = useTranslation();
  const [propertyValue, setPropertyValue] = useState("");
  const [duree, setDuree] = useState("");
  const [taux, setTaux] = useState("");
  const [imtAmount, setImtAmount] = useState<number | null>(null);
  const [imtDetails, setImtDetails] = useState<
    Array<{ tranche: string; amount: number }>
  >([]);

  // On suppose que propertyType et buyerType sont choisis via le select
  const [propertyType, setPropertyType] = useState("residential");
  const [buyerType, setBuyerType] = useState("resident");

  const calculateIMT = () => {
    const value = parseFloat(propertyValue);
    let totalIMT = 0;
    const details: Array<{ tranche: string; amount: number }> = [];

    if (propertyType === "residential" && buyerType === "resident") {
      // Calcul progressif par tranches pour résidence principale
      const tranches = [
        { min: 0, max: 92407, rate: 0 },
        { min: 92407, max: 126403, rate: 0.02 },
        { min: 126403, max: 172348, rate: 0.05 },
        { min: 172348, max: 287213, rate: 0.07 },
        { min: 287213, max: 574426, rate: 0.08 },
        { min: 574426, max: Infinity, rate: 0.06 },
      ];

      let remainingValue = value;
      for (let i = 0; i < tranches.length && remainingValue > 0; i++) {
        const tranche = tranches[i];
        const trancheMin = i === 0 ? 0 : tranches[i - 1].max;
        const trancheMax = tranche.max;

        if (value > trancheMin) {
          const trancheValue = Math.min(
            remainingValue,
            trancheMax - trancheMin
          );
          const imtForTranche = trancheValue * tranche.rate;
          if (imtForTranche > 0) {
            details.push({
              tranche: `${trancheMin.toLocaleString("fr-FR")}€ - ${
                trancheMax === Infinity
                  ? "+"
                  : trancheMax.toLocaleString("fr-FR") + "€"
              }`,
              amount: Math.round(imtForTranche * 100) / 100,
            });
          }
          totalIMT += imtForTranche;
          remainingValue -= trancheValue;
        }
      }
    } else {
      // Taux fixe pour les autres types de biens
      totalIMT = value * 0.065;
      details.push({
        tranche: t("imtCalculator.fixedRate"),
        amount: Math.round(totalIMT * 100) / 100,
      });
    }

    setImtAmount(Math.round(totalIMT * 100) / 100);
    setImtDetails(details);
  };

  // Détermine la locale selon la langue active pour le formatage des nombres
  const locale =
    i18n.language === "fr"
      ? "fr-FR"
      : i18n.language === "pt"
      ? "pt-PT"
      : "en-US";

  return (
    <section id="outils" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <CalcIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("imtCalculator.title")}
          </h2>
          <p className="text-gray-600">{t("imtCalculator.subtitle")}</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("imtCalculator.loanAmountLabel")}
              </label>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder={t("imtCalculator.placeholderLoan")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("imtCalculator.propertyTypeLabel")}
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="residential">
                  {t("imtCalculator.propertyType.residential")}
                </option>
                <option value="secondary">
                  {t("imtCalculator.propertyType.secondary")}
                </option>
                <option value="commercial">
                  {t("imtCalculator.propertyType.commercial")}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("imtCalculator.buyerTypeLabel")}
              </label>
              <select
                value={buyerType}
                onChange={(e) => setBuyerType(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="resident">
                  {t("imtCalculator.buyerType.resident")}
                </option>
                <option value="non-resident">
                  {t("imtCalculator.buyerType.nonResident")}
                </option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={calculateIMT}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("imtCalculator.calculateButton")}
              </button>
            </div>
          </div>

          {imtAmount !== null && (
            <div className="mt-8 space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-center text-2xl font-bold text-blue-600 mb-4">
                  {t("imtCalculator.estimatedPaymentLabel")}:{" "}
                  {imtAmount.toLocaleString(locale)} €
                </p>

                {imtDetails.length > 1 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2 text-gray-700">
                      {t("imtCalculator.detailsLabel")}
                    </h4>
                    <div className="space-y-2">
                      {imtDetails.map((detail, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-600">
                            {t("imtCalculator.trancheLabel")} {detail.tranche}
                          </span>
                          <span className="font-medium">
                            {detail.amount.toLocaleString(locale)} €
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center mt-4">
                  {t("imtCalculator.note")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IMTCalculator;
