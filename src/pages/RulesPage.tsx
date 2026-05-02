import { useTranslation } from 'react-i18next';
import { AlertCircle, Camera, ShieldAlert } from 'lucide-react';
import { rulesData } from '../data/static';

export default function RulesPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="py-12 md:py-20 px-4 max-w-[1200px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-boston-navy mb-8">{t('rules.title')}</h1>
        <p className="text-lg text-gray-600 leading-relaxed bento-card p-6 md:p-8">
          {t('rules.intro')}
        </p>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-12 shadow-sm flex items-start">
        <Camera className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-red-800 font-bold">{t('rules.camerasWarning')}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl flex items-center">
          <AlertCircle className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
          <p className="text-orange-800 font-medium">{t('rules.refusalWarning')}</p>
        </div>
        <div className="bento-card border-l-4 border-boston-navy bg-white p-6 flex items-center text-boston-navy">
          <ShieldAlert className="w-6 h-6 text-boston-navy mr-4 flex-shrink-0" />
          <p className="font-bold">{t('rules.policeWarning')}</p>
        </div>
      </div>

      <div className="mb-16">
        <p className="mb-6 font-bold text-lg text-boston-navy">{t('rules.violationText')}</p>
        
        {/* Mobile Rules Cards (shown on small screens) */}
        <div className="md:hidden space-y-4">
          {rulesData.map((rule) => (
            <div key={rule.id} className="bento-card p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">№ {rule.id}</span>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">{rule.fine}</span>
              </div>
              <p className="text-sm text-gray-800 leading-snug font-medium">{i18n.language === 'en' ? rule.enText : rule.text}</p>
            </div>
          ))}
        </div>

        {/* Desktop Rules Table (hidden on small screens) */}
        <div className="hidden md:block overflow-x-auto bento-card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider border-b">{t('rules.tableHeaders.0', { defaultValue: '№' })}</th>
                <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider border-b w-3/5">{t('rules.tableHeaders.1', { defaultValue: 'Нарушение' })}</th>
                <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider border-b text-right">{t('rules.tableHeaders.2', { defaultValue: 'Штраф' })}</th>
              </tr>
            </thead>
            <tbody>
              {rulesData.map((rule) => (
                <tr key={rule.id} className="border-b last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-gray-500 font-mono text-sm">{rule.id}</td>
                  <td className="py-4 px-6 text-boston-navy font-medium">{i18n.language === 'en' ? rule.enText : rule.text}</td>
                  <td className="py-4 px-6 text-right font-bold text-red-600 whitespace-nowrap">{rule.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center bg-boston-accent/30 p-8 rounded-3xl border border-boston-green/10">
        <p className="text-lg font-bold text-boston-navy mb-2">⚠️ {t('rules.repeatWarning')}</p>
        <p className="text-gray-700">{t('rules.closing')}</p>
      </div>

      {/* Check-in Rules */}
      <section className="mt-20">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-boston-navy">{t('rules.checkinTitle')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
           <div className="bento-card p-8 md:p-10 hover-lift border-t-4 border-boston-green text-center">
              <h3 className="font-bold text-lg mb-4 text-boston-navy">{t('rules.checkinAgeTitle')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t('rules.checkinAgeText')}</p>
           </div>
           <div className="bento-card p-8 md:p-10 hover-lift border-t-4 border-boston-gold text-center">
              <h3 className="font-bold text-lg mb-4 text-boston-navy">{t('rules.checkinPayTitle')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t('rules.checkinPayText')}</p>
           </div>
           <div className="bento-card p-8 md:p-10 hover-lift border-t-4 border-boston-gold text-center">
              <h3 className="font-bold text-lg mb-4 text-boston-navy">{t('rules.checkinRefundTitle')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t('rules.checkinRefundText')}</p>
           </div>
           <div className="bento-card p-8 md:p-10 hover-lift border-t-4 border-boston-green text-center">
              <h3 className="font-bold text-lg mb-4 text-boston-navy">{t('rules.checkinGeneralTitle')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t('rules.checkinGeneralText')}</p>
           </div>
        </div>
      </section>
    </div>
  );
}
