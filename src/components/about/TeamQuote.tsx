import React from 'react';

interface TeamQuoteProps {
  quote: string;
  authors: string;
}

const TeamQuote: React.FC<TeamQuoteProps> = ({ quote, authors }) => {
  return (
    <div className="max-w-4xl mx-auto mt-20 text-center">
      <blockquote className="text-xl font-light text-gray-600 italic mb-6">
        {quote}
      </blockquote>
      <p className="text-gray-600 font-light">
        {authors}
      </p>
    </div>
  );
};

export default TeamQuote;