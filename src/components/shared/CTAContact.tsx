import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAContactProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  color?: string;
}

const CTAContact: React.FC<CTAContactProps> = ({
  title = "DÉMARREZ VOTRE PROJET",
  subtitle = "« Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner »",
  buttonText = "Nous contacter",
  className = "",
  color = "blue"
}) => {
  const colorClasses = {
    blue: {
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      gradient: "from-white to-blue-50"
    },
    gray: {
      bg: "bg-gray-900",
      hover: "hover:bg-gray-800",
      gradient: "from-white to-gray-50"
    },
    green: {
      bg: "bg-[#81a197]",
      hover: "hover:bg-[#6b8a81]",
      gradient: "from-white to-[#81a197]/10"
    },
    beige: {
      bg: "bg-[#a2a09c]",
      hover: "hover:bg-[#8b8984]",
      gradient: "from-white to-[#a2a09c]/10"
    }
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses];

  return (
    <div className={`py-24 text-center bg-gradient-to-b ${selectedColor.gradient} ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light mb-8">{title}</h2>
        <p className="text-gray-600 font-light mb-12">
          {subtitle}
        </p>
        <Link
          to="/contact"
          className={`inline-flex items-center ${selectedColor.bg} text-white px-12 py-4 rounded-lg ${selectedColor.hover} transition-all duration-300 hover:shadow-lg group`}
        >
          <span>{buttonText}</span>
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CTAContact;