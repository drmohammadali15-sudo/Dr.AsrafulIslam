import React from 'react';
import { SPECIALTIES, SpecialtyItem, DOCTOR_DATA } from '../data/doctorData';
import { WhatsAppIcon } from './Icons';
import { ArrowRight, Maximize2 } from 'lucide-react';

interface SpecialtiesGridProps {
  lang: 'bn' | 'en';
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
  onBookCondition: (conditionName: string) => void;
}

export const SpecialtiesGrid: React.FC<SpecialtiesGridProps> = ({
  lang,
  onSelectSpecialty,
  onBookCondition,
}) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-[#dce8eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Head */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow-accent justify-center mb-2">
            <span>{lang === 'bn' ? 'চিকিৎসা পরিষেবা' : 'Clinical Specialties'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103b52] tracking-tight">
            {lang === 'bn' ? 'মেডিসিন ও স্বাস্থ্য পরিচর্যার ক্ষেত্রসমূহ' : 'Internal Medicine & Clinical Care Areas'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#617582] leading-relaxed">
            {lang === 'bn'
              ? 'রোগীর সমস্যা গভীর মনোযোগ দিয়ে শুনে সঠিক রোগ নির্ণয় এবং প্রয়োজনীয় ওষুধ ও লাইফস্টাইল নির্দেশনার মাধ্যমে রোগ নিরাময় করা হয়।'
              : 'Detailed clinical overview of treatment areas. Get accurate diagnosis and comprehensive medical care under one roof.'
            }
          </p>
        </div>

        {/* Services Cards Grid with mobile touch-card response */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SPECIALTIES.map((specialty) => {
            const title = lang === 'bn' ? specialty.titleBn : specialty.titleEn;
            const desc = lang === 'bn' ? specialty.fullDescBn : specialty.fullDescEn;
            const tags = lang === 'bn' ? specialty.tagsBn : specialty.tagsEn;

            return (
              <article
                key={specialty.id}
                className="group p-6 sm:p-7 rounded-2xl border border-[#dce8eb] bg-gradient-to-b from-white to-[#fbfdfd] hover:border-[#0d7180]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.985] active:border-[#0d7180] active:shadow-md flex flex-col justify-between touch-card cursor-pointer"
                onClick={() => onSelectSpecialty(specialty)}
              >
                <div>
                  {/* Header row with symbol icon and Banner preview button */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#eaf6f5] text-[#0d7180] flex items-center justify-center text-2xl font-bold shadow-2xs group-hover:bg-[#0d7180] group-hover:text-white group-active:bg-[#0d7180] group-active:text-white transition-colors">
                      {specialty.symbol}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSpecialty(specialty);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f5fafb] hover:bg-[#eaf6f5] text-[#0d7180] text-xs font-bold border border-[#dce8eb] transition-colors cursor-pointer active:scale-95 touch-btn"
                      title={lang === 'bn' ? 'সম্পূর্ণ পোস্টার ও বিবরণ দেখুন' : 'View Infographic Poster'}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? 'পোস্টার দেখুন' : 'View Poster'}</span>
                    </button>
                  </div>

                  {/* Banner Thumbnail Visual with hover and mobile touch effect */}
                  <div 
                    className="relative h-40 sm:h-44 w-full rounded-xl overflow-hidden mb-4 border border-[#dce8eb] cursor-pointer bg-[#f5fafb]"
                  >
                    <img
                      src={specialty.bannerImage}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 group-active:scale-98 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 group-active:opacity-30 transition-opacity" />
                    <span className="absolute bottom-2.5 left-2.5 text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      HD Banner
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-[#103b52] group-hover:text-[#0d7180] group-active:text-[#0d7180] transition-colors mb-2.5">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#617582] leading-relaxed">
                    {desc}
                  </p>

                  {/* Associated Symptoms Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-[#f7fbfc] border border-[#dce8eb] text-[#49616d]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: WhatsApp & Appointment */}
                <div 
                  className="pt-5 mt-5 border-t border-[#dce8eb] flex items-center justify-between gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => onBookCondition(title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d7180] hover:text-[#095d6b] cursor-pointer active:scale-95 touch-btn"
                  >
                    <span>{lang === 'bn' ? 'সিরিয়াল নিন' : 'Book Serial'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
                      lang === 'bn'
                        ? `নমস্কার ডা. আশরাফুল ইসলাম, আমি "${title}" সম্পর্কিত চিকিৎসা পরামর্শের জন্য সিরিয়াল নিতে চাই।`
                        : `Hello Dr. Asraful Islam, I would like to book an appointment for "${title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-2xs active:scale-95 touch-btn"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
