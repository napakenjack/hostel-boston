import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Star, Building2, ArrowUpRight } from 'lucide-react';
import { CONSTANTS } from '../data/constants';

export default function ContactPage({ onOpenBooking }: { onOpenBooking: () => void }) {
  const { t } = useTranslation();

  const getMapsUrl = () => {
    return `https://yandex.kz/maps/162/almaty/?text=${encodeURIComponent(CONSTANTS.ADDRESS)}`;
  };

  return (
    <div className="py-12 md:py-20 px-4 max-w-[1200px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-boston-navy">{t('contact.title')}</h1>
      
      <div className="grid lg:grid-cols-12 gap-6 items-start mb-20 min-h-[600px]">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full">
          {/* Info Block */}
          <div className="bento-card p-8 md:p-10 flex-grow flex flex-col justify-center border-l-4 border-boston-green">
            <h2 className="text-2xl font-serif font-bold mb-8">Hostel Boston</h2>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-boston-accent/20 p-4 rounded-full mr-4 text-boston-green shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">{t('contact.addressLabel')}</p>
                  <p className="text-lg font-bold text-boston-navy leading-tight">{CONSTANTS.ADDRESS}</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-boston-accent/20 p-4 rounded-full mr-4 text-boston-green shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">{t('contact.phoneLabel')}</p>
                  <p className="text-lg font-bold text-boston-navy leading-tight mb-2">{CONSTANTS.PHONE}</p>
                  <p className="text-xs text-gray-500 font-medium">{t('contact.complaints')}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenBooking} 
                className="flex-1 bg-boston-green text-white px-6 py-4 rounded-xl font-bold shadow-md hover:-translate-y-0.5 transition-transform text-center"
              >
                {t('cta.bookWhatsApp')}
              </button>
              <a 
                href={`tel:${CONSTANTS.PHONE.replace(/\s+/g, '')}`}
                className="flex-shrink-0 bg-white border border-gray-200 text-boston-navy px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors text-center"
              >
                {t('cta.call')}
              </a>
            </div>
          </div>

          {/* Reviews Block */}
          <div className="bento-card p-8 md:p-10 border-t-4 border-boston-gold bg-white">
            <h3 className="text-lg font-serif font-bold mb-6 flex items-center text-boston-navy">
              <Star className="w-5 h-5 mr-3 fill-boston-gold text-boston-gold" />
              {t('contact.reviews')}
            </h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex justify-between items-center p-4 rounded-xl border border-gray-100 hover:border-boston-gold transition-colors group">
                <span className="font-bold flex items-center gap-2 text-boston-navy">
                  {t('contact.google')}
                  <ArrowUpRight className="w-3 h-3 opacity-50 text-boston-gold group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-boston-gold font-bold">★ 5.0</span>
              </a>
              <a href="#" className="flex justify-between items-center p-4 rounded-xl border border-gray-100 hover:border-boston-gold transition-colors group">
                <span className="font-bold flex items-center gap-2 text-boston-navy">
                  {t('contact.gis')}
                  <ArrowUpRight className="w-3 h-3 opacity-50 text-boston-gold group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-boston-gold font-bold">★ 5.0</span>
              </a>
              <a href="#" className="flex justify-between items-center p-4 rounded-xl border border-gray-100 hover:border-boston-gold transition-colors group">
                <span className="font-bold flex items-center gap-2 text-boston-navy">
                  {t('contact.yandex')}
                  <ArrowUpRight className="w-3 h-3 opacity-50 text-boston-gold group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-boston-gold font-bold">★ 5.0</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Block (Right Column) */}
        <div className="lg:col-span-7 h-[500px] lg:h-full min-h-[500px] bento-card bg-gray-100 relative group overflow-hidden">
          {/* Placeholder for iframe map */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-8 text-center bg-dots">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Building2 className="w-8 h-8 text-boston-navy" />
            </div>
            <p className="text-xl font-serif font-bold text-boston-navy mb-2">{t('contact.mapPlaceholder')}</p>
            <p className="text-sm mb-8 max-w-sm">{CONSTANTS.ADDRESS}</p>
            <a 
              href={getMapsUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-flex bg-white text-boston-navy px-8 py-3 rounded-full font-bold shadow-md hover:-translate-y-0.5 transition-transform"
            >
              {t('cta.route')}
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        .bg-dots {
          background-image: radial-gradient(#cbd5e1 2px, transparent 2px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
}
