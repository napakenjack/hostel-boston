import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../data/constants';
import { Phone, MessageCircle } from 'lucide-react';

interface StickyCTAProps {
  onOpenBooking: () => void;
}

export function StickyCTA({ onOpenBooking }: StickyCTAProps) {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto shadow-2xl rounded-full bg-white/90 backdrop-blur-md border p-1.5 flex items-center justify-between gap-2">
        <button
          onClick={onOpenBooking}
          className="flex-1 bg-boston-green text-white py-3 px-4 rounded-full font-medium text-sm shadow-sm active:scale-95 transition-transform text-center truncate"
        >
          {t('cta.book')}
        </button>
        
        <a 
          href={`https://wa.me/${CONSTANTS.WHATSAPP_PHONE}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-green-100 text-green-600 rounded-full active:scale-95 transition-transform shrink-0"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <a 
          href={`tel:${CONSTANTS.PHONE.replace(/\s+/g, '')}`}
          className="p-3 bg-gray-100 text-gray-700 rounded-full active:scale-95 transition-transform shrink-0"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
