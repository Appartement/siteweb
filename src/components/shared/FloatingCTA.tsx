import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "Laure Fargeot",
      number: "351926322486",
      photo: "https://lh3.googleusercontent.com/pw/AP1GczPd5D9nl5I6_cW4prDEmR_Bp_QoeK-U0IyN9r2Sp0Sv1lU46rK5B_abBuumdjNWJWdw6RRUaggwRjPwa1dqNnTncBRNP9cZh9SbO_aN17_Dkl7hfXtYuKhKeWFCBeCvf2KGz2AR2Iisq8-oTrJaXdJK=w1111-h1280-s-no-gm?authuser=0"
    },
    {
      name: "Jean-Emmanuel Salvado",
      number: "351963567868",
      photo: "https://lh3.googleusercontent.com/pw/AP1GczMoPC7wL3fjpeqeGavP6u9sR7XWEM8ERoyVHigKEiT10GLD1cOH4vImr_jGMz1rgu21EVKFruRKe1pCjrcArwmPnu2Nyx6WGjSEAzXCMpEPfjqxjXnqWc0DdYZvpgXYCF9XsmdfgxoGltrlhVWPDtEw=w850-h1280-s-no-gm?authuser=0"
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-4 w-72 max-w-[calc(100vw-2rem)]">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={`https://wa.me/${contact.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 py-3 px-4 hover:bg-gray-50 transition-colors rounded-lg"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={contact.photo} 
                  alt={contact.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: contact.name === "Laure Fargeot" ? "center 35%" : "top"
                  }}
                />
              </div>
              <div>
                <div className="font-light text-gray-900">{contact.name}</div>
                <div className="text-sm text-gray-600">WhatsApp</div>
              </div>
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-gray-800' : 'bg-blue-600 hover:bg-blue-700'
        } text-white p-4 rounded-full shadow-lg transition-colors group`}
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default FloatingCTA;