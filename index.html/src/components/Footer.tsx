import React from 'react';
import { DOCTOR_DATA } from '../data/doctorData';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';
import { MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: 'bn' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b2f42] text-[#d7e7eb] pt-14 pb-24 md:pb-14 border-t border-[#184964]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid matching reference .footergrid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#315365]">
          
          {/* Doctor Info */}
          <div className="lg:col-span-5 space-y-3">
            <strong className="text-xl font-extrabold text-white block">
              {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}
            </strong>
            <div className="text-xs font-bold text-[#d9a94b]">
              {DOCTOR_DATA.degrees} · {lang === 'bn' ? DOCTOR_DATA.titleBn : DOCTOR_DATA.titleEn}
            </div>
            <p className="text-xs sm:text-sm text-[#a9c1c8] leading-relaxed max-w-md">
              {lang === 'bn'
                ? 'ডা. আশরাফুল ইসলাম (MBBS, MD, PGD) দীর্ঘ ১২ বছর ধরে রোগীদের গভীর মনোযোগ সহকারে শুনে জ্বর, ইনফেকশন, ডায়াবেটিস, প্রেশার, লিভার ও শ্বাসযন্ত্রের বিভিন্ন রোগের আধুনিক চিকিৎসা প্রদান করে আসছেন।'
                : 'Dr. Asraful Islam is an experienced physician with 12 years of clinical practice, dedicated to attentive listening, accurate diagnostics, and compassionate healing in Berhampore.'
              }
            </p>
          </div>

          {/* Chamber & Address */}
          <div className="lg:col-span-4 space-y-3">
            <strong className="text-sm font-bold text-white block uppercase tracking-wider">
              {lang === 'bn' ? 'চেম্বারের অবস্থান ও সময়' : 'Chamber & Visiting Hours'}
            </strong>
            <div className="text-xs sm:text-sm text-[#d7e7eb] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d9a94b] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">
                    {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}
                  </div>
                  <div className="text-xs text-[#a9c1c8]">
                    {lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">
                    {lang === 'bn' ? DOCTOR_DATA.timingBn : DOCTOR_DATA.timingEn}
                  </div>
                  <div className="text-xs text-[#a9c1c8]">
                    {lang === 'bn' ? DOCTOR_DATA.consultationDaysBn : DOCTOR_DATA.consultationDaysEn}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call & WhatsApp Helpline */}
          <div className="lg:col-span-3 space-y-3">
            <strong className="text-sm font-bold text-white block uppercase tracking-wider">
              {lang === 'bn' ? 'যোগাযোগ ও সিরিয়াল' : 'Helpline & Serial Booking'}
            </strong>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={`tel:${DOCTOR_DATA.phone1}`}
                className="flex items-center gap-2 text-white hover:text-[#d9a94b] transition-colors"
              >
                <PhoneCallIcon className="w-4 h-4 text-[#d9a94b]" />
                <span className="font-bold font-mono">{DOCTOR_DATA.phone1}</span>
              </a>

              <a
                href={`tel:${DOCTOR_DATA.phone2}`}
                className="flex items-center gap-2 text-white hover:text-[#d9a94b] transition-colors"
              >
                <PhoneCallIcon className="w-4 h-4 text-[#d9a94b]" />
                <span className="font-bold font-mono">{DOCTOR_DATA.phone2}</span>
              </a>

              <div className="pt-1">
                <a
                  href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Notice & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a9c1c8]">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              <strong className="text-white mr-1.5">
                {lang === 'bn' ? 'জরুরি বিজ্ঞপ্তি:' : 'Emergency Notice:'}
              </strong>
              <span>
                {lang === 'bn'
                  ? 'ওয়েবসাইটের তথ্য চিকিৎসকের প্রত্যক্ষ পরীক্ষার বিকল্প নয়। যেকোনো জরুরি অবস্থায় নিকটস্থ হাসপাতালের ইমার্জেন্সিতে যান।'
                  : 'Website information is not a substitute for clinical in-person examination. For acute emergencies, contact hospital emergency departments immediately.'
                }
              </span>
            </div>
            <div>
              © {new Date().getFullYear()} {DOCTOR_DATA.nameEn} ({DOCTOR_DATA.degrees}) · {DOCTOR_DATA.chamberNameEn}. All rights reserved.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#16435c] hover:bg-[#0d7180] text-white transition-colors cursor-pointer shrink-0"
            title={lang === 'bn' ? 'উপরে যান' : 'Scroll to Top'}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
