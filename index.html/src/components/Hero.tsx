import React from 'react';
import { DOCTOR_DATA, IMAGES } from '../data/doctorData';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface HeroProps {
  lang: 'bn' | 'en';
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  lang,
  onOpenBooking,
  onExploreServices
}) => {
  return (
    <section 
      id="hero" 
      className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-[#dce8eb]"
      style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(13, 113, 128, 0.14) 0%, transparent 35%), radial-gradient(circle at 12% 85%, rgba(16, 59, 82, 0.08) 0%, transparent 40%), linear-gradient(125deg, #f8fcfd 0%, #edf6f7 52%, #e5f1f4 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Main Title, Exact Bio, Call & WhatsApp Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow with gold accent bar */}
            <div className="eyebrow-accent">
              <span>{lang === 'bn' ? 'মেডিসিন বিশেষজ্ঞ ও চিকিৎসক' : 'Medicine Specialist & Physician'}</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#103b52] tracking-tight leading-[1.18]">
                {lang === 'bn' ? (
                  <>
                    সুস্থ জীবনের জন্য <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-[#0d7180] to-[#103b52] bg-clip-text text-transparent">
                      সঠিক চিকিৎসা
                    </span> ও আন্তরিক পরিচর্যা।
                  </>
                ) : (
                  <>
                    Care that helps you <br className="hidden sm:block" />
                    live a <span className="bg-gradient-to-r from-[#0d7180] to-[#103b52] bg-clip-text text-transparent">healthier life</span>.
                  </>
                )}
              </h1>
              
              <div className="mt-3 flex items-center gap-2 flex-wrap text-sm sm:text-base font-bold text-[#103b52]">
                <span className="text-[#0d7180]">{lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}</span>
                <span className="text-[#617582]">·</span>
                <span className="text-[#d9a94b] font-black">{DOCTOR_DATA.degrees}</span>
                <span className="text-[#617582]">·</span>
                <span className="text-[#617582]">{lang === 'bn' ? '১২ বছরের অভিজ্ঞতা' : '12 Years Experience'}</span>
              </div>
            </div>

            {/* Front Page Doctor Bio */}
            <div className="bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#dce8eb] shadow-sm touch-card">
              <p className="text-base sm:text-lg text-[#183342] leading-relaxed font-normal">
                {lang === 'bn' ? DOCTOR_DATA.bioBn : DOCTOR_DATA.bioEn}
              </p>
            </div>

            {/* Action Buttons: Appointment + WhatsApp with Logo + Call with Logo */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Primary Appointment Button */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0d7180] to-[#103b52] hover:from-[#095d6b] hover:to-[#0c2f42] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 touch-btn cursor-pointer"
              >
                <span>{lang === 'bn' ? 'সিরিয়াল বুক করুন' : 'Request Appointment'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* WhatsApp Booking Button with Official Logo */}
              <a
                href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'bn'
                    ? 'নমস্কার ডা. আশরাফুল ইসলাম, আমি অ্যাপয়েন্টমেন্ট বুকিং করতে চাই।'
                    : 'Hello Dr. Asraful Islam, I would like to book a chamber serial.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 touch-btn"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp ({DOCTOR_DATA.phone1})</span>
              </a>

              {/* Direct Call Button with Official Phone Logo */}
              <a
                href={`tel:${DOCTOR_DATA.phone1}`}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-3.5 rounded-full bg-white border border-[#dce8eb] text-[#103b52] hover:bg-[#edf5fb] hover:border-[#0d7180] font-bold text-sm transition-all shadow-2xs hover:-translate-y-0.5 active:scale-95 touch-btn"
              >
                <PhoneCallIcon className="w-4 h-4 text-[#0d7180]" />
                <span className="font-mono">{DOCTOR_DATA.phone1}</span>
              </a>
            </div>

            {/* Trustline with Checks */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#607984]">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#eaf6f5] text-[#0d7180] flex items-center justify-center font-black text-xs">✓</span>
                <span className="font-semibold">{lang === 'bn' ? '১২ বছরের চিকিৎসা অভিজ্ঞতা' : "12 years' experience"}</span>
              </span>

              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#eaf6f5] text-[#0d7180] flex items-center justify-center font-black text-xs">✓</span>
                <span className="font-semibold">{lang === 'bn' ? 'মেডিসিন বিশেষজ্ঞ | ফিজিশিয়ান' : 'Medicine Specialist | Physician'}</span>
              </span>

              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#eaf6f5] text-[#0d7180] flex items-center justify-center font-black text-xs">✓</span>
                <span className="font-semibold">{lang === 'bn' ? 'মিশন মেডিকেল সেন্টার, লালদিঘি' : 'Mission Medical Centre, Laldighi'}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Doctor Medical Poster in Arched Frame (Clean with cards removed as requested) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative">
              
              {/* Soft decorative ambient glow behind the arch */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0d7180]/15 via-transparent to-[#d9a94b]/15 rounded-[190px] blur-xl opacity-70 -z-10 pointer-events-none" />

              {/* Arched Portrait Frame with Second Image */}
              <div 
                className="portrait-arch w-[310px] sm:w-[350px] md:w-[365px] h-[380px] sm:h-[430px] md:h-[445px] overflow-hidden bg-white shadow-2xl relative flex items-center justify-center touch-card group"
              >
                <img
                  src={IMAGES.heroPoster}
                  alt={lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}
                  className="w-full h-full object-cover object-center group-hover:scale-103 group-active:scale-98 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle sheen highlight on hover/touch */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#103b52]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
