import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { BookingModal } from './components/BookingModal';

// Pages placeholders
import HomePage from './pages/HomePage';
import PricesPage from './pages/PricesPage';
import AmenitiesPage from './pages/AmenitiesPage';
import GalleryPage from './pages/GalleryPage';
import RoutesPage from './pages/RoutesPage';
import RulesPage from './pages/RulesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState('');

  const openBooking = (type = '') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans text-boston-navy bg-boston-bg pb-20 md:pb-0">
        <Header onOpenBooking={() => openBooking('')} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={openBooking} />} />
            <Route path="/prices" element={<PricesPage onOpenBooking={openBooking} />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage onOpenBooking={openBooking} />} />
          </Routes>
        </main>

        <Footer />
        <StickyCTA onOpenBooking={() => openBooking('')} />
        
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          defaultType={bookingType}
        />
      </div>
    </HashRouter>
  );
}
