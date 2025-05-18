import { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../lib/sanityClient";

interface ImageData {
  photoRenovation: {
    asset: {
      _ref: string;
    };
  };
  contactUs: {
    asset: {
      _ref: string;
    };
  };
  nosProjet: {
    asset: {
      _ref: string;
    };
  };
  photoLaure: {
    asset: {
      _ref: string;
    };
  };
  photoJean: {
    asset: {
      _ref: string;
    };
  };
}

export const useFetchImages = () => {
  const [images, setImages] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data: ImageData = await sanityClient.fetch(
          `*[_type == "images"][0]`
        );

        const transformedImages = {
          contactUs: data?.contactUs?.asset?._ref
            ? urlFor(data?.contactUs.asset._ref).url()
            : "",
          photoRenovation: data?.photoRenovation?.asset?._ref
            ? urlFor(data.photoRenovation.asset._ref).url()
            : "",
          nosProjets: data?.nosProjet?.asset?._ref
            ? urlFor(data.nosProjet.asset._ref).url()
            : "",
          laure: data?.photoLaure?.asset?._ref
            ? urlFor(data.photoLaure.asset._ref).url()
            : "",
          jean: data?.photoJean?.asset?._ref
            ? urlFor(data.photoJean.asset._ref).url()
            : "",
        };

        setImages(transformedImages);
      } catch (err) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading, error };
};
