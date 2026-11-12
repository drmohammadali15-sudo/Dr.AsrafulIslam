import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS, DOCTOR_DATA } from '../data/doctorData';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';

interface FAQSectionProps {
  lang: 'bn' | 'en';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-[#dce8eb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow-accent justify-center mb-2">
            <span>{lang === 'bn' ? 'সাধারণ জিজ্ঞাসা ও উত্তর' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103b52] tracking-tight">
            {lang === 'bn' ? 'রোগী ও অভিভাবকদের সাধারণ প্রশ্নোত্তর' : 'Patient Information & FAQs'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#617582]">
            {lang === 'bn'
              ? 'চেম্বারে আসার আগে যেসব বিষয় জানা আপনার চিকিৎসাকে আরও সহজ ও ফলপ্রসূ করবে।'
              : 'Helpful guidelines to ensure a smooth and productive clinical consultation.'
            }
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const question = lang === 'bn' ? faq.questionBn : faq.questionEn;
            const answer = lang === 'bn' ? faq.answerBn : faq.answerEn;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#dce8eb] bg-[#fbfdfd] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#103b52] hover:text-[#0d7180] cursor-pointer"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#617582] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0d7180]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#49616d] leading-relaxed border-t border-[#dce8eb]/60 animate-in fade-in duration-150">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#eaf6f5] to-[#edf5fb] border border-[#dce8eb] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div>
            <div className="text-sm font-bold text-[#103b52]">
              {lang === 'bn' ? 'অন্য কোনো প্রশ্ন বা জিজ্ঞাসা আছে?' : 'Have any further inquiries?'}
            </div>
            <div className="text-xs text-[#617582] mt-0.5">
              {lang === 'bn' 
                ? 'সরাসরি হেল্পলাইনে ফোন করে বা WhatsApp-এ বার্তা পাঠিয়ে জেনে নিন।'
                : 'Call our helpdesk directly or message us on WhatsApp for prompt guidance.'
              }
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${DOCTOR_DATA.phone1}`}
              className="px-4 py-2 rounded-full bg-[#103b52] text-white text-xs font-bold hover:bg-[#095d6b] flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <PhoneCallIcon className="w-3.5 h-3.5 text-[#d9a94b]" />
              <span className="font-mono">{DOCTOR_DATA.phone1}</span>
            </a>
            <a
              href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
