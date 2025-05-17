import React from 'react';
import { Link } from 'react-router-dom';

export interface PersonProps {
  id: string;
  name: string;
  title: string;
  years: string;
  image: string;
  description: string;
}

const PersonCard = ({ id, name, title, years, image, description }: PersonProps) => {
  return (
    <Link to={`/biography/${id}`} className="block group h-full">
      <div className="royal-border bg-royal-cream/60 hover:bg-royal-cream/95 overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
        <div className="w-full aspect-square overflow-hidden rounded mb-4">
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full min-h-0 min-w-0 transform transition duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-2 flex-1 flex flex-col">          <h3 className="text-xl font-bold text-royal-blue mb-1 font-arabic">{name}</h3>
          <p className="text-royal-gold font-medium mb-2 font-arabic">{title}</p>
          <p className="text-sm text-royal-gray mb-3 font-naskh">{years}</p>
          <p className="text-sm line-clamp-3 flex-1 font-naskh">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;
