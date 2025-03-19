import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  images: { url: string; position: string }[];
  title: string;
  onImageClick?: (index: number) => void;
}

const TRANSITION_DURATION = 500;
const BUTTON_CLASSES = {
  base: "absolute bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70",
  prev: "left-4 top-1/2 -translate-y-1/2",
  next: "right-4 top-1/2 -translate-y-1/2",
};

const DOT_CLASSES = {
  base: "w-2 h-2 rounded-full transition-all",
  active: "bg-white w-4",
  inactive: "bg-white/50 hover:bg-white/75",
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  title,
  onImageClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleGoToSlide = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImageClick?.(currentIndex);
  };

  return (
    <div className="relative h-[500px] group">
      <div
        className="relative h-full overflow-hidden rounded-lg cursor-pointer"
        onClick={handleImageClick}
        role="region"
        aria-label="Image carousel"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity z-50 duration-${TRANSITION_DURATION} ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={`${title} - Vue ${index + 1} du projet immobilier montrant ${
                index === 0
                  ? "la vue d'ensemble"
                  : index === 1
                  ? "les détails intérieurs"
                  : index === 2
                  ? "les finitions"
                  : index === 3
                  ? "l'aménagement"
                  : "des aspects complémentaires"
              }`}
              className="w-full h-full object-cover"
              style={{ objectPosition: image.position }}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevSlide}
        className={`${BUTTON_CLASSES.base} ${BUTTON_CLASSES.prev}`}
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNextSlide}
        className={`${BUTTON_CLASSES.base} ${BUTTON_CLASSES.next}`}
        aria-label="Image suivante"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => handleGoToSlide(e, index)}
            className={`${DOT_CLASSES.base} ${
              index === currentIndex ? DOT_CLASSES.active : DOT_CLASSES.inactive
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProjectCarousel);
