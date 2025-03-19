import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Euro,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowLeft,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import ProjectCarousel from "../components/ProjectCarousel";
import client, { urlFor } from "../Lib/sanityClient";

type Property = {
  _id: string;
  title: string; // FR
  title_en?: string; // EN
  title_pt?: string; // PT
  type: "vente" | "location";
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  images: any[]; // Format image de Sanity
  description: string; // FR
  description_en?: string; // EN
  description_pt?: string; // PT
  challenge: string; // FR
  challenge_en?: string; // EN
  challenge_pt?: string; // PT
  solution: string; // FR
  solution_en?: string; // EN
  solution_pt?: string; // PT
  results: string[]; // FR
  results_en?: string[]; // EN
  results_pt?: string[]; // PT
  gallery: { image: any; position: string }[];
};

const ProjectDetails = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Property | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "project" && _id == $id][0]';
    client
      .fetch(query, { id })
      .then((data: Property) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(t("projectDetails.errorFetch"), error);
        setLoading(false);
      });
  }, [id, t]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">{t("projectDetails.loading")}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">
            {t("projectDetails.notFound")}
          </h2>
          <button
            onClick={() => navigate("/projets")}
            className="text-blue-600 hover:text-blue-800 font-light flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t("projectDetails.backToProjects")}
          </button>
        </div>
      </div>
    );
  }

  // Fonction helper pour retourner la version traduite d'un champ textuel
  const localize = (
    field: "title" | "description" | "challenge" | "solution" | "results"
  ): any => {
    if (field === "results") {
      if (
        i18n.language === "en" &&
        project.results_en &&
        project.results_en.length
      )
        return project.results_en;
      if (
        i18n.language === "pt" &&
        project.results_pt &&
        project.results_pt.length
      )
        return project.results_pt;
      return project.results;
    } else {
      if (i18n.language === "en" && (project as any)[`${field}_en`])
        return (project as any)[`${field}_en`];
      if (i18n.language === "pt" && (project as any)[`${field}_pt`])
        return (project as any)[`${field}_pt`];
      return (project as any)[field];
    }
  };

  // Transformation de la galerie pour obtenir un tableau d'objets { url, position }
  const galleryImages = project.gallery.map((item) => ({
    url: urlFor(item.image).url(),
    position: item.position,
  }));

  const handleContactClick = () => {
    navigate("/contact", {
      state: {
        propertyId: project._id,
        propertyTitle: localize("title"),
        propertyType: project.type,
        propertyLocation: project.location,
        propertyPrice: project.price,
      },
    });
  };

  return (
    <div className="bg-white pt-36">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <button
          onClick={() => navigate("/projets")}
          className="text-gray-600 hover:text-gray-800 font-light flex items-center group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          {t("projectDetails.backToProjects")}
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <ProjectCarousel
          images={galleryImages}
          title={localize("title")}
          onImageClick={(index) => setSelectedImage(index)}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-blue-500 font-light mb-4">
                {project.category}
              </p>
              <h1 className="text-5xl font-light text-white mb-6">
                {localize("title")}
              </h1>
              <p className="text-xl text-white font-light mb-8">
                {localize("description")}
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span className="font-light">{project.location}</span>
                </div>
                <div className="flex items-center text-white">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span className="font-light">{project.date}</span>
                </div>
                <div className="flex items-center text-white">
                  <Euro className="h-5 w-5 mr-3" />
                  <span className="font-light">{project.budget}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-light mb-8">
              {t("projectDetails.challengeTitle")}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              {localize("challenge")}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-light mb-8">
              {t("projectDetails.solutionTitle")}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              {localize("solution")}
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16">
            {t("projectDetails.resultsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localize("results").map((result: string, index: number) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                <p className="text-gray-600 font-light">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16">
            {t("projectDetails.galleryTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={`${localize("title")} - ${t("projectDetails.image")} ${
                    index + 1
                  }`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: image.position }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (prev) =>
                  (prev! - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryImages[selectedImage].url}
            alt={`${localize("title")} - ${t("projectDetails.image")} ${
              selectedImage + 1
            }`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-8">
            {t("projectDetails.ctaTitle")}
          </h2>
          <p className="text-gray-300 font-light mb-12 max-w-2xl mx-auto">
            {t("projectDetails.ctaSubtitle")}
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-gray-900 px-12 py-4 font-light hover:bg-gray-100 transition-colors"
          >
            {t("projectDetails.ctaButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
