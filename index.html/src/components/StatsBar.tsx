import React from 'react';
import { DOCTOR_DATA } from '../data/doctorData';

interface StatsBarProps {
  lang: 'bn' | 'en';
}

export const StatsBar: React.FC<StatsBarProps> = ({ lang }) => {
  return (
    <section className="py-8 bg-gradient-to-r from-white via-[#f7fbfc] to-white border-b border-[#dce8eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Stat 1: 12+ Years */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#dce8eb] bg-white text-center hover:border-[#0d7180] transition-colors shadow-2xs">
            <strong className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#0d7180] to-[#103b52] bg-clip-text text-transparent block tabular-nums">
              {lang === 'bn' ? '১২+ বছর' : '12+ Years'}
            </strong>
            <span className="text-xs sm:text-sm text-[#617582] font-bold mt-1 block">
              {lang === 'bn' ? 'চিকিৎসা অভিজ্ঞতা' : 'Clinical Experience'}
            </span>
          </div>

          {/* Stat 2: MBBS */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#dce8eb] bg-white text-center hover:border-[#0d7180] transition-colors shadow-2xs">
            <strong className="text-3xl sm:text-4xl font-extrabold text-[#103b52] block">
              MBBS
            </strong>
            <span className="text-xs sm:text-sm text-[#617582] font-bold mt-1 block">
              {lang === 'bn' ? 'চিকিৎসা-শিক্ষাগত যোগ্যতা' : 'Medical Degree'}
            </span>
          </div>

          {/* Stat 3: MD */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#dce8eb] bg-white text-center hover:border-[#0d7180] transition-colors shadow-2xs">
            <strong className="text-3xl sm:text-4xl font-extrabold text-[#0d7180] block">
              MD
            </strong>
            <span className="text-xs sm:text-sm text-[#617582] font-bold mt-1 block">
              {lang === 'bn' ? 'মেডিসিন বিশেষজ্ঞ' : 'Medicine Specialist'}
            </span>
          </div>

          {/* Stat 4: PGD */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#dce8eb] bg-white text-center hover:border-[#0d7180] transition-colors shadow-2xs">
            <strong className="text-3xl sm:text-4xl font-extrabold text-[#d9a94b] block">
              PGD
            </strong>
            <span className="text-xs sm:text-sm text-[#617582] font-bold mt-1 block">
              {lang === 'bn' ? 'উচ্চতর ডিপ্লোমা' : 'Post Graduate Diploma'}
            </span>
          </div>

        </div>

        <p className="text-center text-xs text-[#7b8d95] mt-4 font-medium">
          {lang === 'bn' 
            ? 'চেম্বার: মিশন মেডিকেল সেন্টার, লালদিঘি, বহরমপুর, মুর্শিদাবাদ (পিন: ৭৪২১০১)'
            : 'Chamber: Mission Medical Centre, Laldighi, Berhampore, Murshidabad (PIN: 742101)'
          }
        </p>
      </div>
    </section>
  );
};
