import { useTranslation } from 'react-i18next';
import { MapPin, Navigation } from 'lucide-react';
import { CONSTANTS } from '../data/constants';

export default function RoutesPage() {
  const { t } = useTranslation();

  const getMapsUrl = () => {
    return `https://yandex.kz/maps/162/almaty/?text=${encodeURIComponent(CONSTANTS.ADDRESS)}`;
  };

  const routes = {
    parks: [
      {
        title: "Главный Ботанический сад Алматы",
        desc: "особо охраняемая природная территория со статусом научной организации. Это место называют «лёгкими города», здесь собрана уникальная многотысячная коллекция флоры Казахстана, Европы, Крыма и Кавказа, Северной Америки и Восточной Азии.",
        time: ""
      },
      {
        title: "Парк Южный в Алматы",
        desc: "в Бостандыкском районе Алматы — зелёная зона площадью около 2,8 га, расположенная вблизи жилых кварталов. Преимущества парка — удобное расположение, тишина, свежий воздух и возможность активного и семейного досуга в черте города, детские и спортивные площадки.",
        time: "Круглосуточно"
      },
      {
        title: "Cinemapark Almaty",
        desc: "уютный кинотеатр под открытым небом в Бостандыкском районе Алматы. Работает по вечерам, позволяет насладиться фильмом под звёздным небом. Для комфорта зрителей предоставляют пледы, удобные кресла-мешки и разрешают приносить свою еду и напитки.",
        time: "Ежедневно с 20:00 до 01:00"
      }
    ],
    markets: [
      {
        title: "iU market 24 — корейский магазин",
        desc: "",
        time: "Круглосуточно"
      },
      {
        title: "SMALL",
        desc: "Сеть супермаркетов",
        time: ""
      }
    ]
  };

  return (
    <div className="py-12 md:py-20 px-4 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-boston-navy mb-6">{t('routes.title')}</h1>
        <a 
          href={getMapsUrl()} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-boston-green text-white px-8 py-4 rounded-xl font-bold shadow-md hover:-translate-y-0.5 transition-transform"
        >
          <Navigation className="w-5 h-5 mr-3" />
          {t('routes.buildRoute')}
        </a>
      </div>

      <div className="space-y-16">
        {/* Parks */}
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-8 flex items-center">
            <span className="w-8 h-8 bg-boston-green text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            {t('routes.parks')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.parks.map((route, i) => (
              <div key={i} className="bento-card p-8 flex flex-col justify-between hover-lift border-t-4 border-boston-green">
                <div>
                  <h3 className="font-bold text-lg mb-3 leading-snug text-boston-navy">{route.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-4">{route.desc}</p>
                  {route.time && <p className="text-[10px] uppercase font-bold text-boston-gold bg-boston-gold/10 inline-block px-2 py-1 rounded mb-6">{route.time}</p>}
                </div>
                <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-boston-green flex items-center hover:underline mt-auto uppercase tracking-wider">
                  <MapPin className="w-4 h-4 mr-1" /> {t('cta.route')}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Markets */}
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-8 flex items-center">
            <span className="w-8 h-8 bg-boston-green text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            {t('routes.market')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.markets.map((route, i) => (
              <div key={i} className="bento-card p-8 flex flex-col justify-between hover-lift border-t-4 border-boston-gold">
                <div>
                  <h3 className="font-bold text-lg mb-3 leading-snug text-boston-navy">{route.title}</h3>
                  {route.desc && <p className="text-sm text-gray-600 mb-4">{route.desc}</p>}
                  {route.time && <p className="text-[10px] uppercase font-bold text-boston-gold bg-boston-gold/10 inline-block px-2 py-1 rounded mb-6">{route.time}</p>}
                </div>
                <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-boston-green flex items-center hover:underline mt-auto uppercase tracking-wider">
                  <MapPin className="w-4 h-4 mr-1" /> {t('cta.route')}
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
