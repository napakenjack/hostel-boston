import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { CONSTANTS } from '../data/constants';

interface HeaderProps {
  onOpenBooking: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/prices', label: t('nav.prices') },
    { to: '/amenities', label: t('nav.amenities') },
    { to: '/routes', label: t('nav.routes') },
    { to: '/rules', label: t('nav.rules') },
    // Only showing a subset in the main nav for cleaner layout per design
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center gap-8">
            <NavLink to="/" className="flex flex-col group">
              <span className="text-2xl font-serif font-bold tracking-tight text-boston-green uppercase">
                Hostel Boston
              </span>
              <span className="text-[10px] uppercase tracking-widest opacity-60 -mt-1 group-hover:text-boston-green transition-colors">
                Almaty • Kazakhstan
              </span>
            </NavLink>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-6 text-sm font-medium opacity-80 pl-4 border-l border-gray-100">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "transition-colors hover:text-boston-green",
                      isActive ? "text-boston-green font-bold" : "text-boston-navy"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('ru')}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold transition-all",
                  i18n.language === 'ru' ? "bg-white shadow-sm text-boston-navy" : "opacity-50 text-boston-navy hover:opacity-100"
                )}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold transition-all",
                  i18n.language === 'en' ? "bg-white shadow-sm text-boston-navy" : "opacity-50 text-boston-navy hover:opacity-100"
                )}
              >
                EN
              </button>
            </div>
            <button
              onClick={onOpenBooking}
              className="bg-boston-green text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all hover-lift"
            >
              <span>{t('cta.book')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('ru')}
                className={cn(
                  "px-2 py-1 rounded-full text-[10px] font-bold transition-all",
                  i18n.language === 'ru' ? "bg-white shadow-sm text-boston-navy" : "opacity-50 text-boston-navy"
                )}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-2 py-1 rounded-full text-[10px] font-bold transition-all",
                  i18n.language === 'en' ? "bg-white shadow-sm text-boston-navy" : "opacity-50 text-boston-navy"
                )}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-boston-green focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 relative z-40 shadow-xl">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {[...navItems, { to: '/gallery', label: t('nav.gallery') }, { to: '/faq', label: t('nav.faq') }, { to: '/contact', label: t('nav.contact') }].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-3 rounded-xl text-sm font-bold",
                    isActive ? "text-boston-green bg-boston-green/5" : "text-gray-700 hover:text-boston-green hover:bg-gray-50"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                closeMenu();
                onOpenBooking();
              }}
              className="mt-4 w-full bg-boston-green text-white px-4 py-3 rounded-xl text-sm font-bold shadow-md flex items-center justify-center gap-2"
            >
              <span>{t('cta.book')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
