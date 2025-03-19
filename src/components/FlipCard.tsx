import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FlipCardProps {
  title: string;
  description: string;
  backContent: string;
  icon: LucideIcon;
  color: string;
  iconBgColor: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  description,
  backContent,
  icon: Icon,
  color,
  iconBgColor
}) => {
  return (
    <div className="group h-[400px] [perspective:1000px]">
      <div className="relative h-full w-full flip-transition">
        {/* Front */}
        <div className={`flip-card-front border-${color}`}>
          <div className={`${iconBgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
            <Icon className={`h-8 w-8 text-${color}`} />
          </div>
          <h3 className={`text-xl font-light mb-4 text-${color}`}>{title}</h3>
          <p className="text-gray-600 font-light">{description}</p>
        </div>
        
        {/* Back */}
        <div className={`flip-card-back bg-${color}`}>
          <p className="text-white font-light leading-relaxed">
            {backContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;