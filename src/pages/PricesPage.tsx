import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

export default function PricesPage({ onOpenBooking }: { onOpenBooking: () => void }) {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-20 px-4 max-w-[1200px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-boston-navy">{t('prices.title')}</h1>
      
      {/* Daily Rates */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-medium mb-8 text-center px-8">{t('prices.daily')}</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bento-card p-6 md:p-8 flex justify-between items-center hover-lift border-t-4 border-boston-gold">
            <span className="text-xl font-bold">{t('prices.top')}</span>
            <span className="text-3xl font-serif font-bold text-boston-navy">3 000 ₸</span>
          </div>
          <div className="bento-card p-6 md:p-8 flex justify-between items-center border-t-4 border-boston-green hover-lift relative overflow-hidden bg-boston-green/5">
             <div className="absolute top-4 right-4 bg-boston-green text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Hit</div>
            <span className="text-xl font-bold">{t('prices.bottom')}</span>
            <span className="text-3xl font-serif font-bold text-boston-navy">3 500 ₸</span>
          </div>
        </div>
      </section>

      {/* Monthly Rates */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-medium mb-8 text-center px-8">{t('prices.monthly')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Floor 1 */}
          <div className="bento-card p-8 md:p-10 hover-lift">
            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-8 text-center">{t('prices.floor1')}</h3>
            <div className="space-y-6">
               <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <span className="text-lg font-medium">{t('prices.top')}</span>
                  <span className="text-2xl font-serif font-bold">50 000 ₸</span>
               </div>
               <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-medium text-boston-green">{t('prices.bottom')}</span>
                  <span className="text-2xl font-serif font-bold text-boston-green">60 000 ₸</span>
               </div>
            </div>
          </div>

          {/* Floor 2 */}
          <div className="bento-card p-8 md:p-10 hover-lift">
             <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-8 text-center">{t('prices.floor2')}</h3>
             <div className="space-y-6">
               <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <span className="text-lg font-medium">{t('prices.top')}</span>
                  <span className="text-2xl font-serif font-bold">60 000 ₸</span>
               </div>
               <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-medium text-boston-green">{t('prices.bottom')}</span>
                  <span className="text-2xl font-serif font-bold text-boston-green">70 000 ₸</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="bento-card p-8 md:p-12 mb-16 max-w-4xl mx-auto border-t-4 border-boston-gold bg-white">
        <h3 className="text-xl font-serif font-bold mb-6 text-boston-navy">Важная информация:</h3>
        <ul className="space-y-4">
          {t('prices.notes', { returnObjects: true }) && Array.isArray(t('prices.notes', { returnObjects: true })) && (t('prices.notes', { returnObjects: true }) as string[]).map((note: string, idx: number) => (
            <li key={idx} className="flex items-start text-gray-700 text-sm md:text-base">
              <Check className="w-5 h-5 text-boston-gold mr-4 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed font-medium">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="text-center">
        <button onClick={onOpenBooking} className="bg-boston-green text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-1 transition-transform">
          {t('cta.book')}
        </button>
      </div>
    </div>
  );
}
