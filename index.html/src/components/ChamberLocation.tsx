import React, { useState } from 'react';
import { DOCTOR_DATA, IMAGES } from '../data/doctorData';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';
import { MapPin, Clock, Phone, ExternalLink, Navigation, Compass, Building2, Maximize2, X } from 'lucide-react';

interface ChamberLocationProps {
  lang: 'bn' | 'en';
}

export const ChamberLocation: React.FC<ChamberLocationProps> = ({ lang }) => {
  const [showStorefrontModal, setShowStorefrontModal] = useState(false);
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Mission+medical+centre+Laldighi+Berhampore+Murshidabad+742101";

  return (
    <section id="chamber" className="py-16 sm:py-24 bg-white border-b border-[#dce8eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Head */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow-accent justify-center mb-2">
            <span>{lang === 'bn' ? 'ক্লিনিকের ঠিকানা ও অবস্থান' : 'Chamber Location & Route'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103b52] tracking-tight">
            {lang === 'bn' ? 'ডা. আশরাফুল ইসলামের চেম্বার' : 'Visit Dr. Asraful Islam'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#617582] leading-relaxed">
            {lang === 'bn'
              ? 'মুর্শিদাবাদের বহরমপুর শহরের প্রাণকেন্দ্র লালদিঘিতে অবস্থিত আধুনিক চিকিৎসা কেন্দ্র।'
              : 'Located at the heart of Berhampore at Laldighi, easily accessible from across Murshidabad.'
            }
          </p>
        </div>

        {/* Real Chamber Storefront Photo Section with mobile touch feedback */}
        <div className="mb-12">
          <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-r from-[#103b52] to-[#0d7180] group touch-card active:scale-[0.99]">
            
            {/* The Real Storefront Image */}
            <div 
              className="relative aspect-16/9 md:aspect-21/9 w-full overflow-hidden cursor-pointer"
              onClick={() => setShowStorefrontModal(true)}
            >
              <img
                src={IMAGES.clinicStorefront}
                alt="Mission Medical Centre Chamber Storefront in Laldighi Berhampore"
                className="w-full h-full object-cover group-hover:scale-102 group-active:scale-98 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#103b52]/90 via-[#103b52]/20 to-transparent" />

              {/* Floating Expand Hint */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowStorefrontModal(true);
                }}
                className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-md transition-colors cursor-pointer active:scale-95 touch-btn"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ছবি বড় করে দেখুন' : 'Enlarge Photo'}</span>
              </button>

              {/* Bottom Caption on Storefront Image */}
              <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d9a94b] bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs mb-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'চেম্বারের সরাসরি প্রবেশদ্বার ও দৃশ্য' : 'Chamber Storefront & Entrance Photo'}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}
                  </h3>
                  <div className="text-xs sm:text-sm text-[#dce8eb] mt-0.5">
                    {lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn}
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-[#103b52] hover:bg-[#edf5fb] text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0 active:scale-95 touch-btn"
                >
                  <Navigation className="w-4 h-4 text-[#0d7180]" />
                  <span>{lang === 'bn' ? 'গুগল ম্যাপে দিকনির্দেশনা দেখুন' : 'Open in Google Maps'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3-Column Contact Cards Grid with touch feedback */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Clinic Address */}
          <div className="p-6 rounded-2xl border border-[#dce8eb] bg-[#fbfdfd] hover:border-[#0d7180] transition-all shadow-2xs touch-card active:scale-[0.98]">
            <div className="text-2xl mb-2">📍</div>
            <b className="block text-base font-bold text-[#103b52] mb-1">
              {lang === 'bn' ? 'চেম্বারের ঠিকানা' : 'Clinic Address'}
            </b>
            <div className="text-sm font-semibold text-[#183342]">
              {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}
            </div>
            <div className="text-xs text-[#617582] mt-0.5">
              {lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn}
            </div>
            <div className="text-[11px] text-[#7b8d95] font-mono mt-0.5">
              PIN: {DOCTOR_DATA.pincode}
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp with Logos */}
          <div className="p-6 rounded-2xl border border-[#dce8eb] bg-[#fbfdfd] hover:border-[#0d7180] transition-all shadow-2xs touch-card active:scale-[0.98]">
            <div className="flex items-center gap-2 mb-2">
              <PhoneCallIcon className="w-5 h-5 text-[#0d7180]" />
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </div>
            <b className="block text-base font-bold text-[#103b52] mb-1">
              {lang === 'bn' ? 'ফোন ও WhatsApp নম্বর' : 'Phone & WhatsApp'}
            </b>
            <div className="space-y-1 text-sm font-bold text-[#0d7180]">
              <div>
                <a href={`tel:${DOCTOR_DATA.phone1}`} className="hover:underline flex items-center gap-1.5 active:scale-95 touch-btn">
                  <PhoneCallIcon className="w-3.5 h-3.5 text-[#0d7180]" />
                  <span className="font-mono">{DOCTOR_DATA.phone1}</span>
                </a>
              </div>
              <div>
                <a href={`tel:${DOCTOR_DATA.phone2}`} className="hover:underline flex items-center gap-1.5 active:scale-95 touch-btn">
                  <PhoneCallIcon className="w-3.5 h-3.5 text-[#0d7180]" />
                  <span className="font-mono">{DOCTOR_DATA.phone2}</span>
                </a>
              </div>
            </div>
            <div className="mt-2.5">
              <a
                href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'bn'
                    ? 'নমস্কার ডা. আশরাফুল ইসলাম, আমি অ্যাপয়েন্টমেন্টের সিরিয়াল নিতে চাই।'
                    : 'Hello Dr. Asraful Islam, I would like to book an appointment serial.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all active:scale-95 touch-btn"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Consultation Hours */}
          <div className="p-6 rounded-2xl border border-[#dce8eb] bg-[#fbfdfd] hover:border-[#0d7180] transition-all shadow-2xs touch-card active:scale-[0.98]">
            <div className="text-2xl mb-2">◷</div>
            <b className="block text-base font-bold text-[#103b52] mb-1">
              {lang === 'bn' ? 'চেম্বারের সময়সূচী' : 'Consultation Timings'}
            </b>
            <div className="text-sm font-semibold text-[#183342]">
              {lang === 'bn' ? DOCTOR_DATA.timingBn : DOCTOR_DATA.timingEn}
            </div>
            <div className="text-xs text-[#0d7180] font-bold mt-1">
              {lang === 'bn' ? DOCTOR_DATA.consultationDaysBn : DOCTOR_DATA.consultationDaysEn}
            </div>
            <div className="text-[11px] text-[#617582] mt-1">
              {lang === 'bn' ? '(রবিবার বিশেষ অ্যাপয়েন্টমেন্ট সাপেক্ষে)' : '(Sunday by special appointment)'}
            </div>
          </div>

        </div>

        {/* Mapbox & Directions */}
        <div className="rounded-3xl border border-[#dce8eb] overflow-hidden bg-gradient-to-br from-[#edf4f5] to-[#e4f0f2] p-8 sm:p-10 text-center shadow-xs flex flex-col items-center justify-center relative touch-card">
          
          <div className="w-12 h-12 rounded-2xl bg-[#0d7180] text-white flex items-center justify-center text-2xl font-bold shadow-md mb-3">
            ⌖
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#103b52]">
            {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}
          </h3>
          
          <div className="text-sm text-[#49616d] font-semibold mt-1">
            {lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn} (PIN: 742101)
          </div>

          {/* Quick Landmark transit guide */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#526a75] mt-4 max-w-xl">
            <span className="bg-white/80 px-3 py-1.5 rounded-xl border border-[#dce8eb]">
              {lang === 'bn' ? '🚂 বহরমপুর কোর্ট স্টেশন: মাত্র ৭-১০ মিনিটের পথ' : '🚂 Berhampore Court Station: 7–10 mins'}
            </span>
            <span className="bg-white/80 px-3 py-1.5 rounded-xl border border-[#dce8eb]">
              {lang === 'bn' ? '🚌 মোহনা বাস টার্মিনাস: মাত্র ৫ মিনিটের পথ' : '🚌 Mohona Bus Terminus: 5 mins'}
            </span>
          </div>

          {/* Google Maps Button */}
          <div className="mt-6">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#103b52] to-[#0d7180] hover:from-[#095d6b] hover:to-[#084b57] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 touch-btn"
            >
              <Navigation className="w-4 h-4" />
              <span>{lang === 'bn' ? 'গুগল ম্যাপে চেম্বারের অবস্থান খুলুন ↗' : 'Open in Google Maps ↗'}</span>
            </a>
          </div>

        </div>

      </div>

      {/* Storefront Fullscreen Lightbox Modal */}
      {showStorefrontModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          onClick={() => setShowStorefrontModal(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#103b52] text-white flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm sm:text-base">
                  {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn} - {lang === 'bn' ? 'চেম্বার প্রবেশদ্বার' : 'Chamber Entrance'}
                </h4>
                <div className="text-xs text-[#b8d7df]">{lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn}</div>
              </div>
              <button
                onClick={() => setShowStorefrontModal(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white cursor-pointer active:scale-95 touch-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-2 bg-black">
              <img
                src={IMAGES.clinicStorefront}
                alt="Clinic Entrance"
                className="w-full max-h-[75vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
