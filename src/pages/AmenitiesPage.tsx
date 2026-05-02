import { useTranslation } from 'react-i18next';
import { 
  CigaretteOff, Maximize, FireExtinguisher, Refrigerator, 
  Cctv, PlugZap, ShoppingBag, WashingMachine, ShowerHead, 
  Bike, Wifi, Utensils
} from 'lucide-react';

export default function AmenitiesPage() {
  const { t } = useTranslation();

  const amenityIcons = [
    { key: 'nosmoking', icon: <CigaretteOff className="w-6 h-6 text-boston-green" /> },
    { key: 'ceilings', icon: <Maximize className="w-6 h-6 text-boston-green" /> },
    { key: 'fire', icon: <FireExtinguisher className="w-6 h-6 border-red-500 text-red-500" /> },
    { key: 'fridge', icon: <Refrigerator className="w-6 h-6 text-boston-green" /> },
    { key: 'cctv', icon: <Cctv className="w-6 h-6 text-boston-green" /> },
    { key: 'sockets', icon: <PlugZap className="w-6 h-6 text-boston-gold" /> },
    { key: 'shop', icon: <ShoppingBag className="w-6 h-6 text-boston-green" /> },
    { key: 'washer', icon: <WashingMachine className="w-6 h-6 text-boston-green" /> },
    { key: 'shower', icon: <ShowerHead className="w-6 h-6 text-blue-400" /> },
    { key: 'parking', icon: <Bike className="w-6 h-6 text-boston-green" /> },
    { key: 'wifi', icon: <Wifi className="w-6 h-6 text-boston-green" /> },
    { key: 'meals', icon: <Utensils className="w-6 h-6 text-orange-400" /> }
  ];

  return (
    <div className="py-16 md:py-24 px-4 max-w-[1200px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-boston-navy mb-6">{t('amenities.title')}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('amenities.desc')}
        </p>
      </div>

      <div className="bento-grid">
        {amenityIcons.map((item) => (
          <div key={item.key} className="bento-card p-8 flex flex-col items-center text-center hover-lift group border-l-4 border-l-boston-accent/50 hover:border-l-boston-green transition-all">
            <div className="w-16 h-16 bg-boston-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-boston-green/10 transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="font-bold text-boston-navy">
              {t(`amenities.items.${item.key}`)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
