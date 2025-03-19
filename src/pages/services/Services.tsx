import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Wrench, Settings, ArrowRight, Camera as Camera360, Touchpad as Touch, Home as House3D, LayoutDashboard, FileText, Camera, Monitor, Ruler } from 'lucide-react';
import AnimatedCounter from '../../components/shared/AnimatedCounter';

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-light text-white mb-6 tracking-wider">NOS SERVICES</h1>
            <p className="text-xl text-white font-light tracking-wide max-w-2xl mx-auto">
              Solution immobilier 360° : Rénovation, Construction, Gestion Locative, Transaction
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              Des solutions sur mesure adaptées à vos projets, envies et budget. Notre expertise couvre l'ensemble 
              de vos besoins immobiliers, de la recherche de bien à la gestion locative, en passant par la rénovation 
              et la décoration.
            </p>
          </div>
        </div>
      </div>

      {/* Services Principaux */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Immobilier */}
            <Link 
              to="/services/transaction" 
              className="group relative bg-white p-12 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  <Home className="h-12 w-12 text-blue-600 mb-6 transform group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-light mb-6 group-hover:text-blue-600 transition-colors duration-500">IMMOBILIER</h3>
                <p className="text-gray-600 font-light mb-8">
                  Service complet pour l'immobilier au Portugal : recherche, négociation et sécurisation.
                </p>
                <ul className="space-y-4 text-gray-600 font-light mb-8">
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Recherche personnalisée de biens</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Négociation et accompagnement juridique</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Maximisation de la valeur des biens</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Sélection rigoureuse des acquéreurs</span>
                  </li>
                </ul>
                <div className="inline-flex items-center text-blue-600 group-hover:text-blue-800 transition-colors font-light">
                  <span>En savoir plus</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </Link>

            {/* Rénovation */}
            <Link 
              to="/services/renovation" 
              className="group relative bg-white p-12 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  <Wrench className="h-12 w-12 text-blue-600 mb-6 transform group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-light mb-6 group-hover:text-blue-600 transition-colors duration-500">RÉNOVATION</h3>
                <p className="text-gray-600 font-light mb-8">
                  Service clé en main pour la rénovation et la décoration de vos biens. 
                  Notre service comprend la gestion complète des travaux, de la planification 
                  à la supervision.
                </p>
                <ul className="space-y-4 text-gray-600 font-light mb-8">
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Gestion complète des travaux</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Design d'intérieur personnalisé</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Respect des délais et du budget</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Suivi qualité rigoureux</span>
                  </li>
                </ul>
                <div className="inline-flex items-center text-blue-600 group-hover:text-blue-800 transition-colors font-light">
                  <span>En savoir plus</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </Link>

            {/* Gestion */}
            <Link 
              to="/services/gestion" 
              className="group relative bg-white p-12 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  <Settings className="h-12 w-12 text-blue-600 mb-6 transform group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-light mb-6 group-hover:text-blue-600 transition-colors duration-500">GESTION</h3>
                <p className="text-gray-600 font-light mb-8">
                  Gestion locative complète garantissant un taux d'occupation optimal et 
                  un retour sur investissement sécurisé.
                </p>
                <ul className="space-y-4 text-gray-600 font-light mb-8">
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Gestion locative complète</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Suivi des loyers et charges</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Maintenance et conciergerie</span>
                  </li>
                  <li className="flex items-start transform group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span>Reporting mensuel détaillé</span>
                  </li>
                </ul>
                <div className="inline-flex items-center text-blue-600 group-hover:text-blue-800 transition-colors font-light">
                  <span>En savoir plus</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Matterport */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 tracking-wider">
            VISITE VIRTUELLE INTERACTIVE
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <AnimatedCounter end={60} suffix="%" />
              <p className="text-gray-600 font-light">Difficulté à visualiser sur photos</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <AnimatedCounter end={50} prefix="+" suffix="%" />
              <p className="text-gray-600 font-light">Acheteurs qualifiés</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <AnimatedCounter end={600} prefix="+" suffix="%" />
              <p className="text-gray-600 font-light">Interactions en ligne</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <AnimatedCounter end={48} prefix="+" suffix="%" />
              <p className="text-gray-600 font-light">Taux d'engagement</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Colonne de gauche - Vidéo et Info Box */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://my.matterport.com/show/?m=YYRDb7LRTRC"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Disponible sous 24h !</h3>
                <p className="text-gray-600 font-light mb-6">
                  Offrez une expérience immersive et réaliste avec la technologie Matterport. 
                  Explorez votre espace en 3D à 360°, visualisez des plans d'étage mesurés, 
                  et découvrez chaque détail grâce aux photos HDR.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-light"
                >
                  <span>Demander une visite virtuelle</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Colonne de droite - Caractéristiques */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Navigation intuitive */}
                <div className="group h-[300px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                        <Monitor className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-light text-center mb-3">Navigation intuitive</h3>
                      <p className="text-sm text-gray-600 font-light text-center">Explorez l'espace comme si vous y étiez</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                      <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                        Navigation fluide entre les points de vue et mode visite guidée automatique pour une immersion totale
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vue 3D */}
                <div className="group h-[300px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                        <House3D className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-light text-center mb-3">Vue 3D complète</h3>
                      <p className="text-sm text-gray-600 font-light text-center">Vision globale de l'espace</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                      <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                        Modèle 3D interactif pour comprendre instantanément l'agencement et les volumes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plans mesurés */}
                <div className="group h-[300px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                        <Ruler className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-light text-center mb-3">Plans mesurés</h3>
                      <p className="text-sm text-gray-600 font-light text-center">Dimensions précises</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                      <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                        Plans détaillés avec mesures exactes pour vos projets d'aménagement
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photos HD */}
                <div className="group h-[300px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                        <Camera className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-light text-center mb-3">Photos HD</h3>
                      <p className="text-sm text-gray-600 font-light text-center">Qualité professionnelle</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                      <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                        Images haute définition capturant chaque détail de votre bien
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-8">DÉMARREZ VOTRE PROJET</h2>
          <p className="text-gray-600 font-light mb-12">
            « Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner »
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-colors font-light"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;