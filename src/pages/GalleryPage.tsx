import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function GalleryPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'rooms', 'kitchen', 'showers', 'common', 'building'];

  // Placeholders
  const images = [
    { id: 1, type: 'building', url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800', alt: 'Building Exterior' },
    { id: 2, type: 'rooms', url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800', alt: 'Dorm Room' },
    { id: 3, type: 'kitchen', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800', alt: 'Kitchen' },
    { id: 4, type: 'showers', url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800', alt: 'Bathroom' },
    { id: 5, type: 'common', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800', alt: 'Common Area' },
    { id: 6, type: 'rooms', url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800', alt: 'Dorm Room alt' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.type === activeFilter);

  return (
    <div className="py-12 md:py-20 px-4 max-w-[1400px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-boston-navy">{t('gallery.title')}</h1>
      
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto">
        {filters.map(filter => (
          <button 
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all ${
              activeFilter === filter 
                ? 'bg-boston-navy text-white shadow-md' 
                : 'bg-white text-boston-navy border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {t(`gallery.filters.${filter}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img) => (
          <div key={img.id} className="bento-card group overflow-hidden bg-gray-100 aspect-video relative cursor-pointer border-0">
            <img 
              src={img.url} 
              alt={img.alt}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-boston-navy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-white text-sm font-bold tracking-wider uppercase px-6 py-2.5 border-2 border-white rounded-full">View</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
