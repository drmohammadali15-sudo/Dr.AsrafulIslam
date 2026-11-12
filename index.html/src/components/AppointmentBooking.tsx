import React, { useState } from 'react';
import { DOCTOR_DATA, SPECIALTIES } from '../data/doctorData';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  User,
  Sparkles,
  FileText
} from 'lucide-react';

interface AppointmentBookingProps {
  lang: 'bn' | 'en';
  prefilledCondition?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ 
  lang,
  prefilledCondition = '' 
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(lang === 'bn' ? 'পুরুষ' : 'Male');
  const [problem, setProblem] = useState(prefilledCondition || '');
  const [slot, setSlot] = useState(lang === 'bn' ? 'বিকেল ৫:০০ - রাত ৮:৩০' : '05:00 PM - 08:30 PM (Evening)');
  const [preferredDate, setPreferredDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [note, setNote] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [serialNumber, setSerialNumber] = useState<string>('');

  React.useEffect(() => {
    if (prefilledCondition) {
      setProblem(prefilledCondition);
    }
  }, [prefilledCondition]);

  const generateWhatsAppMessage = () => {
    return `*ডা. আশরাফুল ইসলামের চেম্বারে সিরিয়ালের আবেদন*
---------------------------------------
👤 *রোগীর নাম / Name:* ${patientName || 'N/A'}
📱 *মোবাইল / Phone:* ${phone || 'N/A'}
🎂 *বয়স ও লিঙ্গ / Age & Gender:* ${age || 'N/A'}, ${gender}
🏥 *চিকিৎসা বিভাগ / Reason:* ${problem || 'সাধারণ মেডিসিন পরামর্শ'}
📅 *তারিখ / Date:* ${preferredDate}
⏰ *স্লট / Slot:* ${slot}
📝 *নোট / Note:* ${note || 'কিছু নেই'}
📍 *চেম্বার:* মিশন মেডিকেল সেন্টার, লালদিঘি, বহরমপুর (742101)
---------------------------------------
অনুগ্রহ করে সিরিয়াল নম্বর এবং উপস্থিতির সময় নিশ্চিত করুন। ধন্যবাদ।`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim()) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে রোগীর নাম ও ফোন নম্বর লিখুন।' : 'Please enter patient name and contact number.');
      return;
    }

    const msg = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  };

  const handleGenerateSlip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim()) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে রোগীর নাম ও ফোন নম্বর লিখুন।' : 'Please enter patient name and contact number.');
      return;
    }

    const randomSerial = `MMC-${Math.floor(100 + Math.random() * 900)}`;
    setSerialNumber(randomSerial);
    setBookingConfirmed(true);
  };

  return (
    <section 
      id="appointment" 
      className="py-18 sm:py-24 relative overflow-hidden medical-gradient-bg text-white"
    >
      {/* Decorative ambient blurred lights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1693a5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#25D366]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d9a94b] bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/15 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#d9a94b]" />
            <span>{lang === 'bn' ? 'অনলাইন সিরিয়াল বুকিং পোর্টাল' : 'Online Appointment Portal'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'bn' ? 'আপনার সুবিধাজনক সময়ে সিরিয়াল নিন' : 'Book Your Priority Consultation'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#cbe2e8] leading-relaxed">
            {lang === 'bn'
              ? 'নিচের ফর্মটি পূরণ করে সরাসরি WhatsApp এ বার্তা পাঠান অথবা কল করুন 9093964188 নম্বরে।'
              : 'Complete the form below for instant WhatsApp reservation or priority serial registration.'
            }
          </p>
        </div>

        {/* 2-Column Split: Left Glass Card, Right Premium Formbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Glassmorphic Clinic Credentials Card */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Doctor Quick Badge */}
              <div className="flex items-center gap-3.5 pb-5 border-b border-white/15">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#0d7180] text-white flex items-center justify-center font-bold text-xl shadow-md">
                  ✚
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {lang === 'bn' ? DOCTOR_DATA.nameBn : DOCTOR_DATA.nameEn}
                  </h3>
                  <div className="text-xs text-[#d9a94b] font-bold">
                    {DOCTOR_DATA.degrees} · {lang === 'bn' ? 'মেডিসিন বিশেষজ্ঞ' : 'Medicine Specialist'}
                  </div>
                </div>
              </div>

              {/* Chamber Info Rows */}
              <div className="space-y-4 text-sm text-[#e8f4f5]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-[#d9a94b]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}
                    </div>
                    <div className="text-xs text-[#cbe2e8] mt-0.5">
                      {lang === 'bn' ? DOCTOR_DATA.addressBn : DOCTOR_DATA.addressEn}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-[#d9a94b]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {lang === 'bn' ? 'চেম্বারের সময়সূচী:' : 'Consultation Hours:'}
                    </div>
                    <div className="text-xs text-[#cbe2e8] mt-0.5">
                      {lang === 'bn' ? DOCTOR_DATA.timingBn : DOCTOR_DATA.timingEn}
                    </div>
                    <div className="text-[11px] text-[#25D366] font-semibold mt-0.5">
                      {lang === 'bn' ? DOCTOR_DATA.consultationDaysBn : DOCTOR_DATA.consultationDaysEn}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-[#25D366]">
                    <Phone className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {lang === 'bn' ? 'সিরিয়াল হেল্পলাইন নম্বর:' : 'Serial Helpline Numbers:'}
                    </div>
                    <div className="text-xs text-[#cbe2e8] mt-0.5 space-x-2">
                      <a href={`tel:${DOCTOR_DATA.phone1}`} className="hover:underline text-white font-mono font-bold">
                        {DOCTOR_DATA.phone1}
                      </a>
                      <span>/</span>
                      <a href={`tel:${DOCTOR_DATA.phone2}`} className="hover:underline text-white font-mono font-bold">
                        {DOCTOR_DATA.phone2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Guidelines Card */}
              <div className="p-4 rounded-2xl bg-black/20 border border-white/10 text-xs text-[#dbebed] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#d9a94b]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'রোগীদের জন্য বিশেষ পরামর্শ:' : 'Patient Guidelines:'}</span>
                </div>
                <p className="leading-relaxed">
                  {lang === 'bn'
                    ? 'পূর্বের প্রেসক্রিপশন, রক্ত পরীক্ষার রিপোর্ট ও চলমান ওষুধের তালিকা সাথে রাখবেন।'
                    : 'Please bring past doctor prescriptions, lab test reports, and existing medicines.'
                  }
                </p>
              </div>
            </div>

            {/* Direct Call & WhatsApp Buttons */}
            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${DOCTOR_DATA.phone1}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition-colors"
              >
                <PhoneCallIcon className="w-4 h-4 text-[#d9a94b]" />
                <span>{lang === 'bn' ? 'সরাসরি কল' : 'Call'} ({DOCTOR_DATA.phone1})</span>
              </a>

              <a
                href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'bn'
                    ? 'নমস্কার ডা. আশরাফুল ইসলাম, আমি অ্যাপয়েন্টমেন্টের সিরিয়াল নিতে চাই।'
                    : 'Hello Dr. Asraful Islam, I would like to book a chamber serial.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp চ্যাট</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean, Luxury Frosted Glass Formbox */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-2xl text-[#183342] rounded-3xl border border-white/40 p-7 sm:p-10 shadow-2xl flex flex-col justify-between">
            
            {bookingConfirmed ? (
              /* Digital Slip */
              <div className="text-center space-y-6 animate-in zoom-in-95 duration-200 py-4">
                <div className="w-16 h-16 rounded-full bg-[#eaf6f5] text-[#0d7180] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold text-[#0d7180] uppercase tracking-wider bg-[#eaf6f5] px-3.5 py-1.5 rounded-full border border-[#c6e6e2]">
                    {lang === 'bn' ? 'অনুরোধ প্রস্তুত হয়েছে' : 'Request Prepared'}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#103b52] mt-3">
                    {lang === 'bn' ? 'আপনার ডিজিটাল সিরিয়াল স্লিপ' : 'Digital Serial Slip'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#617582] mt-1">
                    {lang === 'bn'
                      ? 'চেম্বারে উপস্থিত হয়ে রিসেপশনে এই রেফারেন্স নম্বরটি প্রদর্শন করুন।'
                      : 'Present this reference code upon arrival at Mission Medical Centre reception.'
                    }
                  </p>
                </div>

                <div className="max-w-md mx-auto bg-[#f8fafd] rounded-2xl border border-[#dce8eb] p-5 text-left space-y-3 shadow-xs">
                  <div className="flex justify-between items-center pb-3 border-b border-[#dce8eb]">
                    <span className="text-xs text-[#617582]">
                      {lang === 'bn' ? 'রেফারেন্স সিরিয়াল নং' : 'Reference Serial No'}
                    </span>
                    <span className="text-base font-bold font-mono text-[#0d7180]">{serialNumber}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#617582]">{lang === 'bn' ? 'রোগীর নাম:' : 'Patient Name:'}</span>
                    <span className="font-semibold text-[#183342]">{patientName}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#617582]">{lang === 'bn' ? 'মোবাইল:' : 'Phone:'}</span>
                    <span className="font-semibold text-[#183342] font-mono">{phone}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#617582]">{lang === 'bn' ? 'সমস্যা / বিভাগ:' : 'Reason / Specialty:'}</span>
                    <span className="font-semibold text-[#183342]">{problem || 'মেডিসিন জেনারেল'}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#617582]">{lang === 'bn' ? 'তারিখ ও সময়:' : 'Date & Slot:'}</span>
                    <span className="font-semibold text-[#183342]">{preferredDate} ({slot})</span>
                  </div>
                  <div className="pt-2 border-t border-[#dce8eb] text-xs text-[#617582]">
                    <strong>{lang === 'bn' ? 'চেম্বার:' : 'Chamber:'}</strong> {lang === 'bn' ? DOCTOR_DATA.chamberNameBn : DOCTOR_DATA.chamberNameEn}, লালদিঘি, বহরমপুর (পিন: ৭৪২১০১)
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setBookingConfirmed(false)}
                    className="px-5 py-2.5 rounded-full border border-[#dce8eb] text-xs font-bold text-[#183342] hover:bg-[#f8fafd] cursor-pointer"
                  >
                    {lang === 'bn' ? 'আরেকটি আবেদন করুন' : 'New Request'}
                  </button>

                  <a
                    href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center gap-2 shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'WhatsApp এ নিশ্চিত করুন' : 'Confirm on WhatsApp'}</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Form */
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#103b52] mb-1">
                  {lang === 'bn' ? 'অনলাইন অ্যাপয়েন্টমেন্টের অনুরোধ' : 'Online Appointment Request'}
                </h3>
                <p className="text-xs sm:text-sm text-[#617582] mb-6">
                  {lang === 'bn'
                    ? 'তথ্য পূরণ করুন। আপনার অনুরোধটি WhatsApp-এ পাঠানোর জন্য স্বয়ংক্রিয়ভাবে প্রস্তুত হবে।'
                    : 'Fill in details. Your request will be prepared for instant WhatsApp submission.'
                  }
                </p>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  {/* Grid 2 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-[#526a75] uppercase tracking-wider">
                        {lang === 'bn' ? 'রোগী / অভিভাবকের নাম *' : 'Patient Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder={lang === 'bn' ? "যেমন: রাজেশ বিশ্বাস" : "e.g. Rajesh Biswas"}
                        className="w-full border border-[#d7e4e7] rounded-xl px-3.5 py-2.5 text-sm bg-white text-[#183342] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-[#526a75] uppercase tracking-wider">
                        {lang === 'bn' ? 'ফোন নম্বর *' : 'Mobile Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="9093964188 / 8509146875"
                        className="w-full border border-[#d7e4e7] rounded-xl px-3.5 py-2.5 text-sm bg-white text-[#183342] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-[#526a75] uppercase tracking-wider">
                        {lang === 'bn' ? 'বয়স' : 'Age'}
                      </label>
                      <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder={lang === 'bn' ? "যেমন: ৪৫" : "e.g. 45"}
                        className="w-full border border-[#d7e4e7] rounded-xl px-3.5 py-2.5 text-sm bg-white text-[#183342] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-[#526a75] uppercase tracking-wider">
                        {lang === 'bn' ? 'লিঙ্গ' : 'Gender'}
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full border border-[#d7e4e7] rounded-xl px-3.5 py-2.5 text-sm bg-white text-[#183342] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15"
                      >
                        <option value={lang === 'bn' ? 'পুরুষ' : 'Male'}>{lang === 'bn' ? 'পুরুষ' : 'Male'}</option>
                        <option value={lang === 'bn' ? 'মহিলা' : 'Female'}>{lang === 'bn' ? 'মহিলা' : 'Female'}</option>
                        <option value={lang === 'bn' ? 'অন্যান্য' : 'Other'}>{lang === 'bn' ? 'অন্যান্য' : 'Other'}</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-[#526a75] uppercase tracking-wider">
                        {lang === 'bn' ? 'পছন্দের তারিখ' : 'Preferred Date'}
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full border border-[#d7e4e7] rounded-xl px-3.5 py-2.5 text-sm bg-white text-[#183342] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15"
                      />
                    </div>
                  </div>

                  {/* Reason / Disease selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#526a75] uppercase tracking-wider">
                      {lang === 'bn' ? 'দেখানোর কারণ / চিকিৎসা বিভাগ' : 'Reason for Visit / Clinical Area'}
                    </label>
                    <select
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                      className="w-full border border-[#d7e4e7] rounded-xl px-3.5 py-2.5 text-sm bg-white text-[#183342] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15"
                    >
                      <option value="">{lang === 'bn' ? '-- বিভাগ নির্বাচন করুন --' : '-- Select Specialty --'}</option>
                      {SPECIALTIES.map((s) => (
                        <option key={s.id} value={lang === 'bn' ? s.titleBn : s.titleEn}>
                          {lang === 'bn' ? s.titleBn : s.titleEn}
                        </option>
                      ))}
                      <option value={lang === 'bn' ? 'নিয়মিত ফলো-আপ চেকআপ' : 'Routine Follow-up'}>
                        {lang === 'bn' ? 'নিয়মিত ফলো-আপ চেকআপ' : 'Routine Follow-up'}
                      </option>
                      <option value={lang === 'bn' ? 'অন্যান্য শারীরিক সমস্যা' : 'Other Symptoms'}>
                        {lang === 'bn' ? 'অন্যান্য শারীরিক সমস্যা' : 'Other Symptoms'}
                      </option>
                    </select>
                  </div>

                  {/* Slot selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#526a75] uppercase tracking-wider">
                      {lang === 'bn' ? 'পছন্দের চেম্বার স্লট' : 'Chamber Slot'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs font-bold transition-all ${
                        slot.includes('সকাল') || slot.includes('Morning') 
                          ? 'bg-[#eaf6f5] border-[#0d7180] text-[#103b52] ring-2 ring-[#0d7180]/10' 
                          : 'bg-white border-[#d7e4e7] text-[#617582]'
                      }`}>
                        <input
                          type="radio"
                          name="slot"
                          checked={slot.includes('সকাল') || slot.includes('Morning')}
                          onChange={() => setSlot(lang === 'bn' ? 'সকাল ১০:০০ - দুপুর ২:০০' : '10:00 AM - 02:00 PM (Morning)')}
                          className="accent-[#0d7180]"
                        />
                        <span>{lang === 'bn' ? 'সকাল ১০:০০ - দুপুর ২:০০' : '10:00 AM - 02:00 PM (Morning)'}</span>
                      </label>

                      <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs font-bold transition-all ${
                        slot.includes('বিকেল') || slot.includes('Evening') 
                          ? 'bg-[#eaf6f5] border-[#0d7180] text-[#103b52] ring-2 ring-[#0d7180]/10' 
                          : 'bg-white border-[#d7e4e7] text-[#617582]'
                      }`}>
                        <input
                          type="radio"
                          name="slot"
                          checked={slot.includes('বিকেল') || slot.includes('Evening')}
                          onChange={() => setSlot(lang === 'bn' ? 'বিকেল ৫:০০ - রাত ৮:৩০' : '05:00 PM - 08:30 PM (Evening)')}
                          className="accent-[#0d7180]"
                        />
                        <span>{lang === 'bn' ? 'বিকেল ৫:০০ - রাত ৮:৩০' : '05:00 PM - 08:30 PM (Evening)'}</span>
                      </label>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#526a75] uppercase tracking-wider">
                      {lang === 'bn' ? 'শারীরিক সমস্যা বা পূর্বের প্রেসক্রিপশন (ঐচ্ছিক)' : 'Symptoms or Medical History (Optional)'}
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder={lang === 'bn' ? "লক্ষণ বা পূর্ববর্তী পরীক্ষার সংক্ষিপ্ত বিবরণ লিখুন..." : "Briefly describe your symptoms or past reports..."}
                      className="w-full border border-[#d7e4e7] rounded-xl px-3.5 py-2 text-sm bg-white text-[#183342] outline-none focus:border-[#0d7180] focus:ring-3 focus:ring-[#0d7180]/15 min-h-[72px]"
                    />
                  </div>

                  {/* Action Buttons: WhatsApp Send + Generate Slip */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f7569] text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>{lang === 'bn' ? 'WhatsApp এ অনুরোধ পাঠান →' : 'Send via WhatsApp →'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleGenerateSlip}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#0d7180] to-[#103b52] hover:from-[#095d6b] hover:to-[#0c2f42] text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>{lang === 'bn' ? 'ডিজিটাল স্লিপ তৈরি করুন' : 'Generate Serial Slip'}</span>
                    </button>
                  </div>

                  <div className="text-[11px] text-[#617582] text-center pt-2 font-medium">
                    {lang === 'bn' 
                      ? 'এটি অ্যাপয়েন্টমেন্টের অনুরোধ। চেম্বার থেকে সিরিয়াল নম্বর ও চূড়ান্ত সময় নিশ্চিত করা হবে।'
                      : 'This is an online request. Final serial number and time will be confirmed by chamber staff.'
                    }
                  </div>
                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
