import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  location: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, location, image }) => {
  return (
    <div className="relative">
      <div className="h-[400px] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative h-full flex flex-col justify-end p-8">
          <blockquote className="text-white mb-6 font-light italic leading-relaxed">
            {content}
          </blockquote>
          <div className="text-white">
            <p className="font-medium">{author}</p>
            <p className="text-sm font-light">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;