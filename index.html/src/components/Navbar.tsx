import React, { useState } from 'react';
import { DOCTOR_DATA, IMAGES } from '../data/doctorData';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';
import { 
  MapPin, 
  Clock, 
  Globe, 
  Menu, 
  X, 
  ChevronRight, 
  Calendar,
  Building2
} from 'lucide-react';

interface NavbarProps {
  lang: 'bn' | 'en';
  setLang: (lang: 'bn' | 'en') => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  setLang, 
  onOpenBooking 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', labelBn: 'হোম', labelEn: 'Home' },
    { href: '#about', labelBn: 'চিকিৎসক পরিচিতি', labelEn: 'About Doctor' },
    { href: '#services', labelBn: 'চিকিৎসা ক্ষেত্র', labelEn: 'Specialties' },
    { href: '#chamber', labelBn: 'চেম্বার ও অবস্থান', labelEn: 'Chamber & Route' },
    { href: '#appointment', labelBn: 'সিরিয়াল বুকিং', labelEn: 'Appointment' },
    { href: '#faq', labelBn: 'প্রশ্নোত্তর', labelEn: 'FAQs' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Premium Navy Topbar */}
      <div className="bg-[#103b52] text-[#e8f5f7] text-xs py-2 border-b border-[#184964]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#d9a94b]" />
              <span>
                {lang === 'bn' 
                  ? 'মেডিসিন বিশেষজ্ঞ ও চিকিৎসক · বহরমপুর, মুর্শিদাবাদ' 
                  : 'Medicine Specialist & Physician · Berhampore, Murshidabad'
                }
              </span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-[#b8d7df]">
              <MapPin className="w-3.5 h-3.5 text-[#d9a94b]" />
              <span>{lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="hidden sm:flex items-center gap-1.5 text-[#b8d7df]">
              <Clock className="w-3.5 h-3.5 text-[#d9a94b]" />
              <span>{lang === 'bn' ? 'সকাল ১০-২ ও বিকেল ৫-৮:৩০' : '10 AM - 2 PM & 5 PM - 8:30 PM'}</span>
            </span>
            <a 
              href={`tel:${DOCTOR_DATA.phone1}`}
              className="flex items-center gap-1.5 text-white hover:text-[#d9a94b] font-semibold transition-colors"
            >
              <PhoneCallIcon className="w-3.5 h-3.5 text-[#d9a94b]" />
              <span className="font-mono">{DOCTOR_DATA.phone1}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#dce8eb] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3">
          
          {/* Brand lockup: Doctor's Real Portrait Photo */}
          <a href="#hero" className="flex items-center gap-3 text-inherit no-underline group shrink-0">
            <div className="relative shrink-0">
              <img
                src={IMAGES.heroPoster}
                alt={lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover object-top border-2 border-[#0d7180] shadow-sm group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <span 
                className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#25D366] border-2 border-white rounded-full shadow-2xs" 
                title="Available for Chamber Consultation"
              />
            </div>
            
            <div className="leading-tight">
              <div className="text-base sm:text-lg font-extrabold text-[#103b52] tracking-tight group-hover:text-[#0d7180] transition-colors">
                {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#617582] font-bold">
                {DOCTOR_DATA.degrees} · {lang === 'bn' ? '১২ বছরের অভিজ্ঞতা' : '12 Yrs Exp'}
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-semibold text-[#49616d]">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="hover:text-[#0d7180] transition-colors whitespace-nowrap"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Hub (Right Side): Manual Language Switch + WhatsApp + Call + Hamburger Dropdown */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* Manual Language Switcher (No Auto-Switch) */}
            <div className="hidden sm:flex items-center bg-[#f0f6f8] p-1 rounded-full border border-[#dce8eb] shadow-2xs">
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'bn' 
                    ? 'bg-[#0d7180] text-white shadow-xs' 
                    : 'text-[#49616d] hover:text-[#103b52]'
                }`}
                title="বাংলা ভাষায় দেখুন"
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'en' 
                    ? 'bg-[#103b52] text-white shadow-xs' 
                    : 'text-[#49616d] hover:text-[#103b52]'
                }`}
                title="View in English"
              >
                English
              </button>
            </div>

            {/* Direct Call Button with Call Logo */}
            <a
              href={`tel:${DOCTOR_DATA.phone1}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#dce8eb] bg-white hover:bg-[#edf5fb] text-[#103b52] text-xs font-bold transition-all shadow-2xs"
              title={lang === 'bn' ? 'সরাসরি ফোন করুন' : 'Call Doctor'}
            >
              <PhoneCallIcon className="w-3.5 h-3.5 text-[#0d7180]" />
              <span className="font-mono">{DOCTOR_DATA.phone1}</span>
            </a>

            {/* Direct WhatsApp Button with official WhatsApp Logo */}
            <a
              href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
                lang === 'bn'
                  ? 'নমস্কার ডা. আশরাফুল ইসলাম, আমি চেম্বার অ্যাপয়েন্টমেন্টের সিরিয়াল নিতে চাই।'
                  : 'Hello Dr. Asraful Islam, I would like to book an appointment serial.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-xs"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Primary Action Button (Desktop) */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4.5 py-2 rounded-full bg-gradient-to-r from-[#0d7180] to-[#103b52] hover:from-[#095d6b] hover:to-[#0c2f42] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>{lang === 'bn' ? 'সিরিয়াল নিন' : 'Book'}</span>
            </button>

            {/* Right Side Dropdown Menu Button (Mobile & Tablet Compatible) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-full border border-[#dce8eb] bg-[#fbfdfd] hover:bg-[#edf5fb] text-[#103b52] transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#0d7180]" />
              ) : (
                <Menu className="w-5 h-5 text-[#103b52]" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile-Compatible Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-[#dce8eb] bg-white/98 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              
              {/* Doctor Profile Banner inside Dropdown */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#edf6f7] to-[#f7fbfc] rounded-2xl border border-[#dce8eb]">
                <img
                  src={IMAGES.heroPoster}
                  alt={DOCTOR_DATA.nameBn}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0d7180]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-extrabold text-[#103b52] text-sm">
                    {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}
                  </div>
                  <div className="text-xs text-[#0d7180] font-bold">
                    {DOCTOR_DATA.degrees} · {lang === 'bn' ? '১২ বছরের অভিজ্ঞতা' : '12 Yrs Exp'}
                  </div>
                </div>
              </div>

              {/* Language Switcher inside Mobile Dropdown (Pure Manual) */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f8fcfd] border border-[#dce8eb]">
                <div className="text-xs font-bold text-[#526a75] flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#0d7180]" />
                  <span>{lang === 'bn' ? 'ওয়েবসাইটের ভাষা:' : 'Language:'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setLang('bn')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      lang === 'bn' ? 'bg-[#0d7180] text-white shadow-xs' : 'bg-white border border-[#dce8eb] text-[#49616d]'
                    }`}
                  >
                    বাংলা
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      lang === 'en' ? 'bg-[#103b52] text-white shadow-xs' : 'bg-white border border-[#dce8eb] text-[#49616d]'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Navigation Links List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#eaf6f5] text-[#103b52] font-bold text-sm transition-colors border border-transparent hover:border-[#d2ebe8]"
                  >
                    <span>{lang === 'bn' ? link.labelBn : link.labelEn}</span>
                    <ChevronRight className="w-4 h-4 text-[#617582]" />
                  </a>
                ))}
              </div>

              {/* Quick Action Dialers inside Dropdown */}
              <div className="pt-3 border-t border-[#dce8eb] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`tel:${DOCTOR_DATA.phone1}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#103b52] hover:bg-[#095d6b] text-white text-xs font-bold shadow-md transition-colors"
                >
                  <PhoneCallIcon className="w-4 h-4 text-[#d9a94b]" />
                  <span>{lang === 'bn' ? 'সরাসরি কল করুন' : 'Call'} ({DOCTOR_DATA.phone1})</span>
                </a>

                <a
                  href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
                    lang === 'bn'
                      ? 'নমস্কার ডা. আশরাফুল ইসলাম, আমি অ্যাপয়েন্টমেন্ট বুকিং করতে চাই।'
                      : 'Hello Dr. Asraful Islam, I would like to book an appointment.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp এ সিরিয়াল নিন</span>
                </a>
              </div>

              {/* Chamber Address Notice */}
              <div className="p-3 rounded-xl bg-[#fbfdfd] border border-[#dce8eb] text-xs text-[#617582] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0d7180] shrink-0" />
                <span>
                  <strong>{lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}</strong>: {lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn}
                </span>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
};
