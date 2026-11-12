import React from 'react';
import { DOCTOR_DATA, IMAGES } from '../data/doctorData';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';
import { Check, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

interface AboutDoctorProps {
  lang: 'bn' | 'en';
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ lang, onOpenBooking }) => {
  const credentialsBn = [
    { title: 'MBBS', sub: 'মেডিকেল গ্র্যাজুয়েট' },
    { title: 'MD (Medicine)', sub: 'মেডিসিন স্পেশালিস্ট' },
    { title: 'PGD', sub: 'উচ্চতর পোস্ট-গ্র্যাজুয়েট ডিপ্লোমা' },
    { title: '১২ বছরের অভিজ্ঞতা', sub: 'অভিজ্ঞ প্র্যাকটিশনার' },
    { title: 'মিশন মেডিকেল সেন্টার', sub: 'লালদিঘি, বহরমপুর' },
    { title: 'সঠিক রোগ নির্ণয়', sub: 'যত্নশীল চিকিৎসা পদ্ধতি' },
  ];

  const credentialsEn = [
    { title: 'MBBS', sub: 'Medical Graduate' },
    { title: 'MD (Medicine)', sub: 'Doctor of Medicine' },
    { title: 'PGD', sub: 'Post Graduate Diploma' },
    { title: '12 Years Experience', sub: 'Clinical Physician' },
    { title: 'Mission Medical Centre', sub: 'Laldighi, Berhampore' },
    { title: 'Accurate Diagnosis', sub: 'Patient-Centered Protocol' },
  ];

  const credentials = lang === 'bn' ? credentialsBn : credentialsEn;

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-[#f7fbfc] to-[#edf6f8] border-b border-[#dce8eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Doctor Visual Presentation with New Uploaded Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Doctor Poster Card with mobile touch response */}
              <div className="rounded-3xl border-8 border-white bg-white shadow-xl overflow-hidden group touch-card active:scale-[0.98] transition-transform">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#e2f1f1]">
                  <img
                    src={IMAGES.profileFull}
                    alt={lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}
                    className="w-full h-full object-cover object-top group-hover:scale-105 group-active:scale-98 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Bottom badge */}
                  <div className="absolute bottom-3 inset-x-3 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-[#dce8eb] shadow-sm flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#103b52]">
                        {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}
                      </div>
                      <div className="text-[11px] text-[#617582]">
                        {lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#0d7180] bg-[#eaf6f5] px-2.5 py-1 rounded-full">
                      {lang === 'bn' ? '১২ বছর+' : '12+ Yrs'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Copy & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="eyebrow-accent">
              <span>{lang === 'bn' ? 'চিকিৎসক পরিচিতি ও দর্শন' : 'Physician Profile & Philosophy'}</span>
            </div>

            {/* Doctor Name & Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103b52] tracking-tight">
                {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}
              </h2>
              <div className="mt-1 text-base sm:text-lg font-bold text-[#0d7180]">
                {DOCTOR_DATA.degrees} · {lang === 'bn' ? DOCTOR_DATA.titleBn : DOCTOR_DATA.titleEn}
              </div>
            </div>

            {/* Doctor Bio */}
            <div className="space-y-3 text-sm sm:text-base leading-relaxed">
              <p className="text-[#183342] font-medium text-base sm:text-lg bg-white/85 p-5 rounded-2xl border border-[#dce8eb] touch-card">
                {lang === 'bn' ? DOCTOR_DATA.bioBn : DOCTOR_DATA.bioEn}
              </p>
            </div>

            {/* Credentials Grid with touch feedback */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {credentials.map((cred, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#d2ebe8] text-[#285a63] hover:border-[#0d7180] transition-all shadow-2xs touch-card active:scale-95 active:border-[#0d7180]"
                >
                  <div className="font-extrabold text-xs sm:text-sm text-[#103b52]">{cred.title}</div>
                  <div className="text-[11px] text-[#4d7b84] mt-0.5">{cred.sub}</div>
                </div>
              ))}
            </div>

            {/* Call and WhatsApp Action Row with Logos & touch-btn */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'bn'
                    ? 'নমস্কার ডা. আশরাফুল ইসলাম, আমি অ্যাপয়েন্টমেন্টের সিরিয়াল নিতে চাই।'
                    : 'Hello Dr. Asraful Islam, I would like to book a chamber serial.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 active:scale-95 touch-btn"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp ({DOCTOR_DATA.phone1})</span>
              </a>

              <a
                href={`tel:${DOCTOR_DATA.phone1}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#dce8eb] hover:bg-[#edf5fb] text-[#103b52] font-bold text-sm shadow-2xs transition-all hover:-translate-y-0.5 active:scale-95 touch-btn"
              >
                <PhoneCallIcon className="w-4 h-4 text-[#0d7180]" />
                <span className="font-mono">{DOCTOR_DATA.phone1}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#0d7180] to-[#103b52] hover:from-[#095d6b] hover:to-[#0c2f42] text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 active:scale-95 touch-btn cursor-pointer"
              >
                <span>{lang === 'bn' ? 'চেম্বার সিরিয়াল বুক করুন' : 'Book Chamber Serial'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
