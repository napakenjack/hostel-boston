import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { CONSTANTS } from '../data/constants';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-boston-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-serif text-boston-gold mb-6 tracking-tight">Hostel Boston</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('home.heroSubtitle').split('.')[0]}.
            </p>
            <div className="flex space-x-4">
              <a href={`https://wa.me/${CONSTANTS.WHATSAPP_PHONE}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-opacity-20 transition-all">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </a>
              <a href={`tel:${CONSTANTS.PHONE.replace(/\s+/g, '')}`} className="bg-white/10 p-3 rounded-full hover:bg-opacity-20 transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li><NavLink to="/prices" className="text-gray-400 hover:text-white transition-colors">{t('nav.prices')}</NavLink></li>
              <li><NavLink to="/amenities" className="text-gray-400 hover:text-white transition-colors">{t('nav.amenities')}</NavLink></li>
              <li><NavLink to="/gallery" className="text-gray-400 hover:text-white transition-colors">{t('nav.gallery')}</NavLink></li>
              <li><NavLink to="/rules" className="text-gray-400 hover:text-white transition-colors">{t('nav.rules')}</NavLink></li>
              <li><NavLink to="/faq" className="text-gray-400 hover:text-white transition-colors">{t('nav.faq')}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('nav.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-boston-gold mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{CONSTANTS.ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-boston-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300">{CONSTANTS.PHONE}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hostel Boston. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-sm text-gray-400 px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm">18+ Age Limit</span>
            <span className="text-sm text-gray-400 px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm">24/7 CCTV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
