import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectCarousel from "../components/ProjectCarousel";
import client, { urlFor } from "../Lib/sanityClient";
import { useFetchImages } from "../hooks/useGetImages";

type Project = {
  _id: string;
  title: string; // FR
  title_en?: string; // EN
  title_pt?: string; // PT
  category: string;
  location: string;
  date: string;
  budget: string;
  image: any;
  description: string; // FR
  description_en?: string; // EN
  description_pt?: string; // PT
  challenge: string;
  challenge_en?: string;
  challenge_pt?: string;
  solution: string;
  solution_en?: string;
  solution_pt?: string;
  results: string[];
  results_en?: string[];
  results_pt?: string[];
  gallery: { image: any; position: string }[];
};

const Projects = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const { images, loading, error } = useFetchImages();
  console.log({ images });
  // Témoignages statiques (texte en anglais dans cet exemple, adaptez si besoin)
  const testimonials = [
    {
      content:
        "« Jean-Emmanuel and Laure helped us find our dream apartment in just 3 visits! Their expertise in the Lisbon market and mastery of Portuguese procedures were essential. »",
      author: "Isabel & Pierre",
      location: "Principe Real",
    },
    {
      content:
        "« A perfect turnkey service! Purchase of our T2, complete renovation (kitchen, bathroom, electricity) and efficient property management. In 6 months, everything was ready, stress-free, from France. »",
      author: "Philippe & Anastasia",
      location: "Chiado",
    },
    {
      content:
        "« Comprehensive support from Brussels: purchasing a promising property, coordinating works, and property management. Their responsiveness and monthly reports are impeccable. »",
      author: "Catherine",
      location: "Baixa",
    },
    {
      content:
        "« They transformed our old apartment into a modern and attractive property, combining charm and comfort. The property management is impeccable, a real relief for us living abroad. »",
      author: "Laurent & Marie",
      location: "Graça",
    },
  ];

  useEffect(() => {
    const query = '*[_type == "project"]';
    client
      .fetch(query)
      .then((data: Project[]) => {
        setProjects(data);
        // Vérification dans la console des URLs générées pour la galerie
        data.forEach((project) => {
          project.gallery.forEach((item) =>
            console.log("Image URL:", urlFor(item.image).url())
          );
        });
      })
      .catch(console.error);
  }, []);

  // Fonction helper pour retourner la version traduite d'un champ textuel
  const localize = (
    project: Project,
    field: "title" | "description" | "challenge" | "solution" | "results"
  ): any => {
    const lang = i18n.language;
    if (field === "results") {
      if (lang === "en" && project.results_en && project.results_en.length)
        return project.results_en;
      if (lang === "pt" && project.results_pt && project.results_pt.length)
        return project.results_pt;
      return project.results;
    } else {
      if (lang === "en" && (project as any)[`${field}_en`])
        return (project as any)[`${field}_en`];
      if (lang === "pt" && (project as any)[`${field}_pt`])
        return (project as any)[`${field}_pt`];
      return (project as any)[field];
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">{t("projectDetails.loading")}</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${images.nosProjets}")`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-normal text-white mb-6 tracking-wider">
              {t("projects.heroTitle")}
            </h1>
            <p className="text-xl text-white font-normal tracking-wide max-w-2xl mx-auto">
              {t("projects.heroSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div
                className="relative"
                onClick={() => navigate(`/projets/${project._id}`)}
              >
                <ProjectCarousel
                  images={project.gallery.map((item) => ({
                    url: urlFor(item.image).url(),
                    position: item.position,
                  }))}
                  title={localize(project, "title")}
                  onImageClick={() => navigate(`/projets/${project._id}`)}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-light z-10">
                  {project.category}
                </div>
              </div>
              <div
                className="p-8 cursor-pointer"
                onClick={() => navigate(`/projets/${project._id}`)}
              >
                <h3 className="text-2xl font-light mb-4 group-hover:text-blue-600 transition-colors">
                  {localize(project, "title")}
                </h3>
                <p className="text-gray-600 font-light mb-6">
                  {localize(project, "description")}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 font-light">
                    {project.location}
                  </div>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                    <span className="font-light mr-2">
                      {t("projects.learnMore")}
                    </span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 tracking-wider">
            {t("projects.testimonialsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <blockquote className="text-gray-600 font-light mb-6">
                  {testimonial.content}
                </blockquote>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 font-light">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
