import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { CONSTANTS } from '../data/constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
}

export function BookingModal({ isOpen, onClose, defaultType = '' }: BookingModalProps) {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: defaultType,
    duration: '',
    date: '',
    guests: '1',
    comment: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Prepare WhatsApp message
    const lines = [
      "Здравствуйте! Хочу забронировать место в Hostel Boston.",
      `Имя: ${formData.name}`,
      `Телефон: ${formData.phone}`,
      `Тип места: ${formData.type || t('booking.typeUnsure')}`,
      `Срок проживания: ${formData.duration || t('booking.durationSome')}`,
      `Дата заезда: ${formData.date}`,
      `Количество гостей: ${formData.guests}`,
      formData.comment ? `Комментарий: ${formData.comment}` : ''
    ].filter(Boolean).join('\n');

    const encodedMessage = encodeURIComponent(lines);
    const whatsappUrl = `https://wa.me/${CONSTANTS.WHATSAPP_PHONE}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
      setFormData({ name: '', phone: '', type: '', duration: '', date: '', guests: '1', comment: '' });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-boston-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b flex justify-between items-center bg-boston-accent/30">
          <h2 className="text-xl font-serif font-semibold text-boston-navy tracking-tight">{t('cta.book')}</h2>
          <button 
            onClick={onClose}
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t('booking.success')}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">{t('booking.name')} *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-boston-green focus:border-boston-green outline-none transition-all" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">{t('booking.phone')} *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-boston-green focus:border-boston-green outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">{t('booking.type')}</label>
                <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-boston-green focus:border-boston-green outline-none transition-all bg-white">
                  <option value="">{t('booking.typeUnsure')}</option>
                  <option value={t('booking.typeTop')}>{t('booking.typeTop')}</option>
                  <option value={t('booking.typeBottom')}>{t('booking.typeBottom')}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">{t('booking.duration')}</label>
                  <select name="duration" value={formData.duration} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-boston-green focus:border-boston-green outline-none transition-all bg-white">
                    <option value="">{t('booking.durationSome')}</option>
                    <option value={t('booking.duration1')}>{t('booking.duration1')}</option>
                    <option value={t('booking.durationWeek')}>{t('booking.durationWeek')}</option>
                    <option value={t('booking.durationMonth')}>{t('booking.durationMonth')}</option>
                    <option value={t('booking.durationOther')}>{t('booking.durationOther')}</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">{t('booking.date')} *</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-boston-green focus:border-boston-green outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">{t('booking.guests')}</label>
                <input type="number" min="1" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-boston-green focus:border-boston-green outline-none transition-all" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">{t('booking.comment')}</label>
                <textarea rows={3} name="comment" value={formData.comment} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-boston-green focus:border-boston-green outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 px-4 bg-boston-green hover:bg-[#233d3d] text-white rounded-xl font-medium shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]">
                {t('booking.submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
