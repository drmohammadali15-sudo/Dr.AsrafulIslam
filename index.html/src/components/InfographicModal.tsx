import React from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { SpecialtyItem, DOCTOR_DATA } from '../data/doctorData';
import { WhatsAppIcon } from './Icons';

interface InfographicModalProps {
  specialty: SpecialtyItem | null;
  lang: 'bn' | 'en';
  onClose: () => void;
  onBookCondition: (title: string) => void;
}

export const InfographicModal: React.FC<InfographicModalProps> = ({
  specialty,
  lang,
  onClose,
  onBookCondition,
}) => {
  if (!specialty) return null;

  const title = lang === 'bn' ? specialty.titleBn : specialty.titleEn;
  const desc = lang === 'bn' ? specialty.fullDescBn : specialty.fullDescEn;
  const tags = lang === 'bn' ? specialty.tagsBn : specialty.tagsEn;

  const whatsappMessage = encodeURIComponent(
    lang === 'bn'
      ? `নমস্কার ডা. আশরাফুল ইসলাম, আমি "${title}" সম্পর্কিত চিকিৎসা পরামর্শের জন্য অ্যাপয়েন্টমেন্টের সিরিয়াল নিতে চাই।`
      : `Hello Dr. Asraful Islam, I would like to book a consultation serial for "${title}".`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#dce8eb] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-4 border-b border-[#dce8eb] flex items-center justify-between bg-gradient-to-r from-[#f7fbfc] to-[#edf6f8]">
          <div>
            <span className="text-xs font-bold text-[#0d7180] uppercase tracking-wider">
              {lang === 'bn' ? 'চিকিৎসা নির্দেশিকা ও পোস্টার' : 'Clinical Infographic Guide'}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#103b52]">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#617582] hover:text-[#103b52] hover:bg-[#e2edf0] rounded-full transition-colors cursor-pointer"
            title={lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Infographic Poster Viewer */}
          <div className="rounded-2xl border border-[#dce8eb] overflow-hidden bg-[#183342] relative group">
            <img
              src={specialty.bannerImage}
              alt={title}
              className="w-full h-auto max-h-[58vh] object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 opacity-90 backdrop-blur-xs">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'এইচডি মেডিকেল পোস্টার' : 'HD Medical Banner'}</span>
            </div>
          </div>

          {/* Full Description */}
          <div className="bg-[#f7fbfc] p-5 rounded-2xl border border-[#dce8eb]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0d7180] mb-1.5">
              {lang === 'bn' ? 'রোগের বিবরণ ও চিকিৎসকের পরামর্শ:' : 'Clinical Protocol & Physician Advice:'}
            </h4>
            <p className="text-sm sm:text-base text-[#183342] leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Symptoms Tags */}
          <div>
            <div className="text-xs font-bold text-[#526a75] mb-2 uppercase tracking-wider">
              {lang === 'bn' ? 'সম্পর্কিত উপসর্গ ও রোগসমূহ:' : 'Associated Conditions & Symptoms:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-white border border-[#dce8eb] text-[#183342]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#dce8eb] bg-[#f7fbfc] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#617582] hidden sm:block">
            {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}, লালদিঘি, বহরমপুর
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{lang === 'bn' ? 'WhatsApp এ সিরিয়াল নিন' : 'WhatsApp Serial'}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookCondition(title);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0d7180] to-[#103b52] hover:from-[#095d6b] hover:to-[#0c2f42] text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
            >
              <span>{lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট ফর্ম' : 'Booking Form'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
