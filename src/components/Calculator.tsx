import React, { useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const Calculator = () => {
  const { t, i18n } = useTranslation();
  const [montant, setMontant] = useState("");
  const [duree, setDuree] = useState("");
  const [taux, setTaux] = useState("");
  const [mensualite, setMensualite] = useState<number | null>(null);

  const calculateMensualite = () => {
    const P = parseFloat(montant);
    const r = parseFloat(taux) / 100 / 12;
    const n = parseFloat(duree) * 12;

    const calcul = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMensualite(Math.round(calcul * 100) / 100);
  };
  console.log({ lng: i18n.language });
  // Détermine la locale selon la langue active
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
            {t("calculator.title")}
          </h2>
          <p className="text-gray-600">{t("calculator.subtitle")}</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("calculator.loanAmountLabel")}
              </label>
              <input
                type="number"
                value={montant}
                onChange={(e) => setMontant(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder={t("calculator.placeholderLoan")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("calculator.durationLabel")}
              </label>
              <input
                type="number"
                value={duree}
                onChange={(e) => setDuree(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder={t("calculator.placeholderDuration")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("calculator.interestRateLabel")}
              </label>
              <input
                type="number"
                value={taux}
                onChange={(e) => setTaux(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder={t("calculator.placeholderInterest")}
                step="0.1"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={calculateMensualite}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("calculator.calculateButton")}
              </button>
            </div>
          </div>

          {mensualite !== null && (
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-center text-lg">
                {t("calculator.estimatedMonthlyPayment")}:{" "}
                <span className="font-bold text-blue-600">
                  {mensualite.toLocaleString(locale)} €
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          {i18n.language.includes("fr") && "Janvier 2025 - taux INE - 3,978%"}
          {i18n.language.includes("en") && "January 2025 - INE rate - 3.978%"}
          {i18n.language.includes("pt") &&
            "Janeiro de 2025 - taxa INE - 3,978%"}
        </p>
      </div>
    </section>
  );
};

export default Calculator;
