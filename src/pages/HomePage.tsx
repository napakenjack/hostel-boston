import { useTranslation } from 'react-i18next';
import { Shield, MapPin, Camera, Wifi, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onOpenBooking: (type: string) => void;
}

export default function HomePage({ onOpenBooking }: HomePageProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 md:px-8 py-8 md:py-12 max-w-[1400px] mx-auto flex flex-col gap-12">
      
      {/* 
        Bento Grid Layout 
        Desktop: 12 columns, ~6 rows 
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-6 min-h-[800px]">
        
        {/* Hero Block: Large Visual (span 7 cols, 4 rows) */}
        <div className="md:col-span-12 lg:col-span-7 lg:row-span-4 bento-card relative min-h-[400px]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1024')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-boston-navy/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white z-10">
            <div className="inline-block bg-boston-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Уютный Коттеджный Стиль
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="text-white/80 max-w-lg text-sm md:text-base mb-6">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onOpenBooking('')} className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold border border-white/40 text-white hover:bg-white/30 transition-colors">
                {t('cta.book')}
              </button>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                Есть свободные места
              </div>
            </div>
          </div>
        </div>

        {/* Price Card 1: Upper Bed (span 2 cols, 3 rows) */}
        <div className="md:col-span-6 lg:col-span-2 lg:row-span-3 bento-card p-6 flex flex-col justify-between border-t-4 border-boston-gold hover-lift">
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Выгодный выбор</p>
            <h3 className="text-lg font-bold">{t('home.cards.top')}</h3>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-center gap-2 opacity-50"><X className="w-4 h-4 text-red-400" /> {t('home.cards.curtain')}</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-boston-green" /> {t('home.cards.socket')}</li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="text-2xl font-serif font-bold text-gray-900">3 000 ₸</div>
            <p className="text-[10px] opacity-60 mb-4">{t('home.cards.priceDay')}</p>
            <button 
              onClick={() => onOpenBooking(t('home.cards.top'))}
              className="w-full py-2.5 border border-gray-200 rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors"
            >
              {t('home.cards.select')}
            </button>
          </div>
        </div>

        {/* Price Card 2: Lower Bed (span 3 cols, 3 rows) */}
        <div className="md:col-span-6 lg:col-span-3 lg:row-span-3 bento-card p-6 flex flex-col justify-between border-t-4 border-boston-green hover-lift relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-green-100 text-boston-green text-[10px] px-2 py-1 rounded font-bold">
            POPULAR
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-boston-green mb-1">Топ комфорт</p>
            <h3 className="text-xl font-bold">{t('home.cards.bottom')}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-green-700 font-medium"><Check className="w-4 h-4" /> {t('home.cards.curtain')}</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-boston-green" /> {t('home.cards.socket')}</li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="text-3xl font-serif font-bold text-gray-900">3 500 ₸</div>
            <p className="text-[10px] opacity-60 mb-4">{t('home.cards.priceDay')}</p>
            <button 
              onClick={() => onOpenBooking(t('home.cards.bottom'))}
              className="w-full py-3 bg-boston-green text-white rounded-xl text-sm font-bold shadow-md hover:bg-boston-green/90 transition-colors"
            >
              {t('home.cards.select')}
            </button>
          </div>
        </div>

        {/* Trust Badges Block (span 5 cols, 2 rows for desktop. Can adapt.) */}
        {/* We place it in the remaining space of right column */}
        <div className="md:col-span-12 lg:col-span-5 lg:row-span-3 bento-card bg-boston-muted flex flex-wrap items-center justify-around p-6 gap-4">
          <div className="text-center group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
              <Camera className="w-5 h-5 text-boston-green" />
            </div>
            <p className="text-xs font-bold text-gray-700">11 Камер</p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
              <Wifi className="w-5 h-5 text-boston-green" />
            </div>
            <p className="text-xs font-bold text-gray-700">Free Wi-Fi</p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5 text-boston-green" />
            </div>
            <p className="text-xs font-bold text-gray-700">Безопасно</p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform text-boston-green font-black">
              18+
            </div>
            <p className="text-xs font-bold text-gray-700">Заселение</p>
          </div>
        </div>

        {/* Location Map Block (span 7 cols, 2 rows) */}
        <div className="md:col-span-12 lg:col-span-7 lg:row-span-2 bento-card flex flex-col sm:flex-row bg-white overflow-hidden min-h-[200px]">
          <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-center relative z-10">
            <h4 className="text-sm font-bold text-boston-green mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Наш адрес
            </h4>
            <p className="text-xl md:text-2xl font-serif text-boston-navy">Бостандыкский р-н,<br/>ул. Кемеровская, 19</p>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Рядом: Ботанический сад, ТРЦ MEGA, супермаркет Small, остановки транспорта.
            </p>
          </div>
          <div className="w-full sm:w-2/5 bg-gray-50 relative min-h-[150px] sm:min-h-full">
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <Link to="/routes" className="bg-boston-green text-white px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shadow-md hover:scale-105 transition-transform">
                {t('cta.route')}
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* About Section */}
      <section className="bento-card p-8 md:p-12 bg-white">
        <p className="text-lg md:text-2xl text-boston-navy leading-relaxed font-serif font-medium text-center max-w-4xl mx-auto">
          "{t('home.aboutText')}"
        </p>
      </section>

      {/* Rules Trust Block */}
      <section className="bento-card p-10 md:p-16 bg-boston-green text-white text-center">
        <div className="max-w-2xl mx-auto">
          <Shield className="w-12 h-12 mx-auto mb-6 text-boston-gold" />
          <h2 className="text-3xl font-serif mb-6">{t('nav.rules')}</h2>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
            {t('home.rulesPreview')}
          </p>
          <Link to="/rules" className="inline-block bg-white text-boston-green px-8 py-3 rounded-full font-bold hover:bg-boston-accent hover:text-boston-green transition-colors">
            {t('cta.seeRules')}
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bento-card p-10 md:p-16 bg-boston-gold/10 text-center border border-boston-gold/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-boston-navy mb-4">{t('home.contactTitle')}</h2>
          <p className="text-gray-700 mb-8 md:text-lg">
            {t('home.contactSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onOpenBooking('')} className="bg-boston-green text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-transform">
              {t('cta.bookWhatsApp')}
            </button>
            <Link to="/contact" className="bg-white text-boston-navy border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
              Все контакты
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
