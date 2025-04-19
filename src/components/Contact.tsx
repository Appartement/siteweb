import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

interface ContactProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  color?: string;
}

const Contact: React.FC<ContactProps> = ({
  title = "DÉMARREZ VOTRE PROJET",
  subtitle = "« Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner »",
  buttonText = "Nous contacter",
  className = "",
  color = "blue",
}) => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "immobilier",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
      <div className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_25%]"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-light text-white mb-6 tracking-wider">
              Un projet? Une question?
            </h1>
            <p className="text-xl text-white font-light tracking-wide max-w-2xl mx-auto">
              Un sujet complémentaire que vous souhaiteriez soulever ?
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6">
            Nous sommes là pour vous !
          </h2>
          <p className="text-gray-600 font-light max-w-3xl mx-auto">
            « Nous travaillons ensemble pour un projet qui vous ressemble, et
            permettre de vous sentir immédiatement "chez vous". Contactez-nous à
            tout moment: nous avons à coeur de vous offrir une expérience
            agréable et mémorable »
          </p>
        </div>

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
                      FR:{" "}
                      <a
                        href="tel:+33662281830"
                        className="hover:text-[#81a197] transition-colors"
                      >
                        +33 6 62 28 18 30
                      </a>
                    </span>
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
                  src="https://lh3.googleusercontent.com/pw/AP1GczMoPC7wL3fjpeqeGavP6u9sR7XWEM8ERoyVHigKEiT10GLD1cOH4vImr_jGMz1rgu21EVKFruRKe1pCjrcArwmPnu2Nyx6WGjSEAzXCMpEPfjqxjXnqWc0DdYZvpgXYCF9XsmdfgxoGltrlhVWPDtEw=w850-h1280-s-no-gm?authuser=0"
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
                      FR:{" "}
                      <a
                        href="tel:+33645923994"
                        className="hover:text-[#81a197] transition-colors"
                      >
                        +33 6 45 92 39 94
                      </a>
                    </span>
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
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
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
                  Email
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
                  htmlFor="objet"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Objet du message
                </label>
                <select
                  id="objet"
                  name="objet"
                  value={formData.objet}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#81a197] focus:border-transparent"
                >
                  <option value="immobilier">Immobilier</option>
                  <option value="renovation">Rénovation</option>
                  <option value="gestion">Gestion</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
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
                ENVOYER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
