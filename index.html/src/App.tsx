import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutDoctor } from './components/AboutDoctor';
import { SpecialtiesGrid } from './components/SpecialtiesGrid';
import { ChamberLocation } from './components/ChamberLocation';
import { AppointmentBooking } from './components/AppointmentBooking';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { InfographicModal } from './components/InfographicModal';
import { WhatsAppIcon, PhoneCallIcon } from './components/Icons';
import { SPECIALTIES, SpecialtyItem, DOCTOR_DATA } from './data/doctorData';
import { Calendar, Globe } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [activeSpecialty, setActiveSpecialty] = useState<SpecialtyItem | null>(null);
  const [bookingCondition, setBookingCondition] = useState<string>('');

  const handleOpenBooking = (conditionName?: string) => {
    if (conditionName) {
      setBookingCondition(conditionName);
    }
    const bookingSection = document.getElementById('appointment');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#eaf6f5] selection:text-[#0d7180] transition-colors duration-200">
      {/* Inspired Topbar & Sticky Navbar with Manual Bilingual Switch */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Premium Clean Gradient Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 12+ Years, MBBS, MD, PGD Stats Bar */}
        <StatsBar lang={lang} />

        {/* Doctor Story & Philosophy */}
        <AboutDoctor
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6 Specialized Medical Services Cards */}
        <SpecialtiesGrid
          lang={lang}
          onSelectSpecialty={(specialty) => setActiveSpecialty(specialty)}
          onBookCondition={(conditionName) => handleOpenBooking(conditionName)}
        />

        {/* Real Chamber Storefront Image, Contact Grid & Map */}
        <ChamberLocation lang={lang} />

        {/* Online Appointment Box with Rich Medical Gradient */}
        <AppointmentBooking
          lang={lang}
          prefilledCondition={bookingCondition}
        />

        {/* FAQs */}
        <FAQSection lang={lang} />
      </main>

      {/* Deep Navy Footer */}
      <Footer lang={lang} />

      {/* Infographic Modal for Zooming Doctor Posters */}
      <InfographicModal
        specialty={activeSpecialty}
        lang={lang}
        onClose={() => setActiveSpecialty(null)}
        onBookCondition={(conditionName) => handleOpenBooking(conditionName)}
      />

      {/* Desktop Floating Sticky Action Buttons (Call & WhatsApp) */}
      <aside aria-label="Quick contact" className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-2.5">
        {/* Manual Language Toggle Pill */}
        <button
          onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#103b52] border border-[#dce8eb] shadow-md text-[11px] font-bold hover:bg-[#edf5fb] transition-all cursor-pointer self-end"
          title={lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
        >
          <Globe className="w-3.5 h-3.5 text-[#0d7180]" />
          <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
        </button>

        {/* Floating Call Button */}
        <a
          href={`tel:${DOCTOR_DATA.phone1}`}
          className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-[#103b52] hover:bg-[#095d6b] text-white text-xs font-bold shadow-lg transition-all hover:scale-105"
          title={lang === 'bn' ? 'সরাসরি ফোন করুন' : 'Direct Phone Call'}
        >
          <PhoneCallIcon className="w-4 h-4 text-[#d9a94b]" />
          <span>Call: {DOCTOR_DATA.phone1}</span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
            lang === 'bn'
              ? 'নমস্কার ডা. আশরাফুল ইসলাম, আমি অ্যাপয়েন্টমেন্ট বুকিং করতে চাই।'
              : 'Hello Dr. Asraful Islam, I would like to book a chamber serial.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-extrabold shadow-xl transition-all hover:scale-105"
          title="WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>{lang === 'bn' ? 'WhatsApp সিরিয়াল' : 'WhatsApp Serial'}</span>
        </a>
      </aside>

      {/* Mobile Sticky Quick Action Bar (adheres to ≤15% viewport height cap) */}
      <aside aria-label="Mobile quick actions" className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#dce8eb] p-2 flex items-center justify-between gap-2 sm:hidden shadow-xl">
        <a
          href={`tel:${DOCTOR_DATA.phone1}`}
          className="flex-1 py-2.5 px-2 rounded-full bg-[#edf5fb] text-[#103b52] font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <PhoneCallIcon className="w-3.5 h-3.5 text-[#0d7180]" />
          <span>{lang === 'bn' ? 'কল করুন' : 'Call'}</span>
        </a>

        <a
          href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
            lang === 'bn'
              ? 'নমস্কার ডা. আশরাফুল ইসলাম, আমি অ্যাপয়েন্টমেন্ট বুকিং করতে চাই।'
              : 'Hello Dr. Asraful Islam, I would like to book a chamber serial.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="py-2.5 px-3.5 rounded-full bg-gradient-to-r from-[#0d7180] to-[#103b52] text-white font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-xs cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{lang === 'bn' ? 'সিরিয়াল' : 'Book'}</span>
        </button>
      </aside>
    </div>
  );
}
