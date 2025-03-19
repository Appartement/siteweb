import React from 'react';
import { Linkedin, Facebook } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  email: string;
  phoneFR: string;
  phonePT: string;
  linkedinUrl: string;
  facebookUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  description,
  email,
  phoneFR,
  phonePT,
  linkedinUrl,
  facebookUrl,
}) => {
  return (
    <div className="text-center">
      <div className="relative mb-6 group">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img 
            src={image}
            alt={`${name} - ${role} chez L'Appartement, expert immobilier à Lisbonne`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <a 
            href={linkedinUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href={facebookUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
      <h3 className="text-2xl font-light tracking-wide mb-2">{name}</h3>
      <p className="text-gray-600 font-light mb-4">{role}</p>
      <p className="text-gray-600 font-light max-w-md mx-auto mb-4">{description}</p>
      <div className="space-y-2 text-gray-600 font-light">
        <p>
          <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
            {email}
          </a>
        </p>
        <p>FR: <a href={`tel:${phoneFR.replace(/\s/g, '')}`} className="hover:text-blue-600 transition-colors">{phoneFR}</a></p>
        <p>PT: <a href={`tel:${phonePT.replace(/\s/g, '')}`} className="hover:text-blue-600 transition-colors">{phonePT}</a></p>
      </div>
    </div>
  );
};

export default TeamMember;