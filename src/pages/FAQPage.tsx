import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { questionsFAQ, answersFAQ } from '../data/static';

export default function FAQPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 md:py-20 px-4 max-w-[800px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-boston-navy">{t('faq.title')}</h1>
      
      <div className="space-y-4">
        {questionsFAQ.map((question, index) => (
          <div 
            key={index} 
            className={`bento-card transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-boston-green ring-1 ring-boston-green' : 'hover:border-gray-300'}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <span className="font-bold text-boston-navy pr-8">{question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-boston-gold flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div 
              className={`transition-all duration-300 origin-top overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 md:px-8 pb-6 text-gray-700 leading-relaxed text-sm">
                <div className="pt-4 border-t border-gray-100">
                  {answersFAQ[index]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
