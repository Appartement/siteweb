import React from "react";
import {
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/pw/AP1GczNTH6zpNlQxxQ9YY_jXFwVfQWSVEtlUILc2IvQPx_vWy6YO8FwVJy6cB0EaaaY9hR-s6pdMajqXfJvSpXXZkuewmz-j56XGraNFNA=w2939-h1636-s-no-gm?authuser=0")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-light text-white mb-6 tracking-wider">
              {t("about.heroTitle")}
            </h1>
            <p className="text-xl text-white font-light tracking-wide max-w-2xl mx-auto">
              {t("about.heroSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/pw/AP1GczP2IU_IpYEbkO006Ji-EWKLZl7-wupPvvXBWCh7RNV94zUFZQ8OG3ZxMLMMOA1fbQDmJzd8ded1cme746I5rYyVT7_EpxLGuH9C2Fe-hZRQH9S6UNvQv6DswA2shdn77Nc_8fxzVZx_VNvOUDlxE62L=w1374-h1036-s-no-gm?authuser=0")',
              }}
              role="img"
              aria-label={t("about.imageAlt")}
            ></div>
          </div>
          <div>
            <div className="border-l-4 border-blue-600 pl-6 mb-8">
              <h2 className="text-3xl font-light tracking-wide mb-4">
                {t("about.historyTitle")}
              </h2>
              <p className="text-gray-600 font-light">
                {t("about.historyPeriod")}
              </p>
            </div>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              {t("about.historyText1")}
            </p>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              {t("about.historyText2")}
            </p>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              {t("about.historyText3")}
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-4xl font-light text-blue-600 mb-2">250+</p>
                <p className="text-gray-600 font-light">
                  {t("about.stats.satisfiedClients")}
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-4xl font-light text-blue-600 mb-2">100+</p>
                <p className="text-gray-600 font-light">
                  {t("about.stats.transactions")}
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-4xl font-light text-blue-600 mb-2">5+</p>
                <p className="text-gray-600 font-light">
                  {t("about.stats.yearsExperience")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16 text-[#a2a09c]">
            {t("about.foundersTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Laure */}
            <div className="text-center">
              <div className="relative mb-6 group max-w-[300px] mx-auto">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczPd5D9nl5I6_cW4prDEmR_Bp_QoeK-U0IyN9r2Sp0Sv1lU46rK5B_abBuumdjNWJWdw6RRUaggwRjPwa1dqNnTncBRNP9cZh9SbO_aN17_Dkl7hfXtYuKhKeWFCBeCvf2KGz2AR2Iisq8-oTrJaXdJK=w1111-h1280-s-no-gm?authuser=0"
                    alt={t("founderLaure.alt")}
                    className="w-full h-full object-cover object-[center_60%] transform group-hover:scale-110 transition-transform duration-500 grayscale"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="https://www.linkedin.com/in/laure-fargeot-07268642/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/Lololouu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-2">
                {t("about.founderLaure.name")}
              </h3>
              <p className="text-gray-600 font-light mb-4">
                {t("about.founderLaure.role")}
              </p>
              <p className="text-gray-600 font-light max-w-md mx-auto mb-4">
                {t("about.founderLaure.description")}
              </p>
              <div className="space-y-2 text-gray-600 font-light">
                <p>
                  <a
                    href="mailto:laure.fargeot@lappartement.pt"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {t("about.founderLaure.email")}
                  </a>
                </p>
                <p>
                  PT:{" "}
                  <a
                    href="tel:+351926322486"
                    className="hover:text-blue-600 transition-colors"
                  >
                    +351 926 322 486
                  </a>
                </p>
              </div>
            </div>

            {/* Jean-Emmanuel */}
            <div className="text-center">
              <div className="relative mb-6 group max-w-[300px] mx-auto">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczMoPC7wL3fjpeqeGavP6u9sR7XWEM8ERoyVHigKEiT10GLD1cOH4vImr_jGMz1rgu21EVKFruRKe1pCjrcArwmPnu2Nyx6WGjSEAzXCMpEPfjqxjXnqWc0DdYZvpgXYCF9XsmdfgxoGltrlhVWPDtEw=w850-h1280-s-no-gm?authuser=0"
                    alt={t("about.founderJean.alt")}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="https://www.linkedin.com/in/jean-emmanuel-salvado-a1590b60/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/je.salvado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-2">
                {t("about.founderJean.name")}
              </h3>
              <p className="text-gray-600 font-light mb-4">
                {t("about.founderJean.role")}
              </p>
              <p className="text-gray-600 font-light max-w-md mx-auto mb-4">
                {t("about.founderJean.description")}
              </p>
              <div className="space-y-2 text-gray-600 font-light">
                <p>
                  <a
                    href="mailto:je.salvado@lappartement.pt"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {t("about.founderJean.email")}
                  </a>
                </p>
                <p>
                  PT:{" "}
                  <a
                    href="tel:+351963567868"
                    className="hover:text-blue-600 transition-colors"
                  >
                    +351 963 567 868
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Citation des fondateurs */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <blockquote className="text-xl font-light text-gray-600 italic mb-6">
              {t("about.foundersQuote")}
            </blockquote>
            <p className="text-gray-600 font-light">
              {t("about.foundersSignature")}
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16 tracking-wider">
            {t("about.testimonialsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 font-light mb-4">
                {t("about.testimonial1.content")}
              </blockquote>
              <p className="font-medium">{t("about.testimonial1.author")}</p>
              <p className="text-gray-600 font-light">
                {t("about.testimonial1.location")}
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 font-light mb-4">
                {t("about.testimonial2.content")}
              </blockquote>
              <p className="font-medium">{t("about.testimonial2.author")}</p>
              <p className="text-gray-600 font-light">
                {t("about.testimonial2.location")}
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 font-light mb-4">
                {t("about.testimonial3.content")}
              </blockquote>
              <p className="font-medium">{t("about.testimonial3.author")}</p>
              <p className="text-gray-600 font-light">
                {t("about.testimonial3.location")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center tracking-wide mb-16">
            {t("about.contactTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-light tracking-wide mb-2">
                    {t("about.contact.addressTitle")}
                  </h3>
                  <p className="text-gray-600 font-light">
                    <a
                      href="https://maps.google.com/?q=Rua+do+Sol+ao+Rato+69B,+Lisboa,+Portugal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {t("about.contact.address")}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-light tracking-wide mb-2">
                    {t("about.contact.phoneTitle")}
                  </h3>
                  <p className="text-gray-600 font-light">
                    PT:{" "}
                    <a
                      href="tel:+351926322486"
                      className="hover:text-blue-600 transition-colors"
                    >
                      +351 926 322 486
                    </a>
                    <br />
                    PT:{" "}
                    <a
                      href="tel:+351963567868"
                      className="hover:text-blue-600 transition-colors"
                    >
                      +351 963 567 868
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-light tracking-wide mb-2">
                    {t("about.contact.emailTitle")}
                  </h3>
                  <p className="text-gray-600 font-light">
                    <a
                      href="mailto:adm@lappartement.pt"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {t("about.contact.email")}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-light tracking-wide mb-2">
                    {t("about.contact.hoursTitle")}
                  </h3>
                  <p className="text-gray-600 font-light">
                    {t("about.contact.hours")}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.9891436781145!2d-9.156673024378595!3d38.72037597176454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19337d95555555%3A0x88b728f5aa18f6c!2sRua%20do%20Sol%20ao%20Rato%2069B%2C%201250-261%20Lisboa%2C%20Portugal!5e0!3m2!1sfr!2sfr!4v1710272144406!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
