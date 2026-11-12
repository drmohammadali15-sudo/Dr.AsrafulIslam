export interface SpecialtyItem {
  id: string;
  titleBn: string;
  titleEn: string;
  fullDescBn: string;
  fullDescEn: string;
  tagsBn: string[];
  tagsEn: string[];
  bannerImage: string;
  iconName: string;
  symbol: string;
  color: string;
}

export interface DoctorInfo {
  nameBn: string;
  nameEn: string;
  degrees: string;
  titleBn: string;
  titleEn: string;
  experienceYears: number;
  chamberNameBn: string;
  chamberNameEn: string;
  addressBn: string;
  addressEn: string;
  pincode: string;
  phone1: string;
  phone2: string;
  whatsappNumber: string;
  googleRating: number;
  reviewCount: number;
  bioBn: string;
  bioEn: string;
  consultationDaysBn: string;
  consultationDaysEn: string;
  timingBn: string;
  timingEn: string;
}

export const DOCTOR_DATA: DoctorInfo = {
  nameBn: "ডা. আশরাফুল ইসলাম",
  nameEn: "Dr. Asraful Islam",
  degrees: "MBBS, MD, PGD",
  titleBn: "মেডিসিন বিশেষজ্ঞ ও চিকিৎসক",
  titleEn: "Medicine Specialists | Physician",
  experienceYears: 12,
  chamberNameBn: "মিশন মেডিকেল সেন্টার",
  chamberNameEn: "Mission Medical Centre",
  addressBn: "লালদিঘি, বহরমপুর, মুর্শিদাবাদ, পিন: ৭৪২১০১",
  addressEn: "Laldighi, Berhampore, Murshidabad, PIN: 742101",
  pincode: "742101",
  phone1: "9093964188",
  phone2: "8509146875",
  whatsappNumber: "919093964188",
  googleRating: 4.9,
  reviewCount: 382,
  bioBn: "ডা. আশরাফুল ইসলাম একজন অভিজ্ঞ চিকিৎসক, যিনি অত্যন্ত যত্নসহকারে রোগীর সমস্যা শুনে সঠিক চিকিৎসা প্রদান করেন। জ্বর, ইনফেকশন, ডায়াবেটিস, প্রেশার থেকে শুরু করে পেট ও শ্বাসযন্ত্রের বিভিন্ন রোগের নিরাময়ে তিনি চিকিৎসা করেন। রোগীর সুস্থতাই তাঁর মূল লক্ষ্য।",
  bioEn: "Dr. Asraful Islam is an experienced physician who carefully listens to his patients to provide the most accurate treatment. He treats a wide range of health conditions, from fevers, infections, diabetes, and blood pressure to various gastric and respiratory diseases. His patients' health and well-being are his primary goal.",
  consultationDaysBn: "সোম থেকে শনিবার (সকাল ও বিকাল চেম্বার)",
  consultationDaysEn: "Monday to Saturday (Morning & Evening Clinic)",
  timingBn: "সকাল ১০:০০ - দুপুর ২:০০ এবং বিকেল ৫:০০ - রাত ৮:৩০",
  timingEn: "10:00 AM - 02:00 PM & 05:00 PM - 08:30 PM",
};

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: "fever-infection",
    titleBn: "জ্বর ও ইনফেকশন",
    titleEn: "Fever & Infections",
    fullDescBn: "ডেঙ্গু, ম্যালেরিয়া, টাইফয়েড বা নিউমোনিয়ার মতো তীব্র সংক্রমণ এবং দীর্ঘমেয়াদী অজানা জ্বরের সঠিক কারণ নির্ণয় করে চিকিৎসা করা হয়। এছাড়া টিবি (TB)-র মতো জটিল রোগের ক্ষেত্রেও সঠিক সময়ে ওষুধের কোর্স শুরু করে রোগীকে দ্রুত সুস্থ করে তোলা হয়।",
    fullDescEn: "Targeted diagnosis and therapeutic care for acute infectious fevers such as dengue, malaria, typhoid, pneumonia, and prolonged fevers of unknown origin. Complete management of TB with prompt, guideline-directed therapy for swift recovery.",
    tagsBn: ["ডেঙ্গু", "ম্যালেরিয়া", "টাইফয়েড", "নিউমোনিয়া", "টিবি (TB)", "অজানা জ্বর"],
    tagsEn: ["Dengue", "Malaria", "Typhoid", "Pneumonia", "Tuberculosis", "Viral Fever"],
    bannerImage: "/assets/aistudio/____________________________a07b17f8.png",
    iconName: "Thermometer",
    symbol: "⌁",
    color: "#d93025",
  },
  {
    id: "chronic-lifestyle",
    titleBn: "ক্রনিক বা লাইফস্টাইল রোগ",
    titleEn: "Chronic & Lifestyle Diseases",
    fullDescBn: "ডায়াবেটিস (সুগার), উচ্চ রক্তচাপ, কোলেস্টেরল এবং থাইরয়েডের মতো দীর্ঘমেয়াদী রোগগুলো সঠিক ওষুধের মাধ্যমে সম্পূর্ণ নিয়ন্ত্রণে রাখা হয়। নিয়মিত চেকআপ এবং সঠিক চিকিৎসার সাহায্যে এই ধরনের লাইফস্টাইল রোগ নিয়েও সুস্থ ও স্বাভাবিক জীবনযাপন করা সম্ভব।",
    fullDescEn: "Comprehensive medical management for long-term conditions including diabetes (blood sugar), hypertension, cholesterol, and thyroid disorders. Regular monitoring and tailored medicine for an active, healthy life.",
    tagsBn: ["ডায়াবেটিস (সুগার)", "উচ্চ রক্তচাপ", "কোলেস্টেরল", "থাইরয়েড", "নিয়মিত চেকআপ"],
    tagsEn: ["Diabetes", "Blood Pressure", "Cholesterol", "Thyroid", "Routine Review"],
    bannerImage: "/assets/aistudio/Chronic_Wellness_Care_Poster_5445eb25.png",
    iconName: "HeartPulse",
    symbol: "♡",
    color: "#0d7180",
  },
  {
    id: "stomach-liver",
    titleBn: "পেট ও লিভারের সমস্যা",
    titleEn: "Stomach & Liver Diseases",
    fullDescBn: "গ্যাস, অ্যাসিডিটি, হজমের গন্ডগোল, আইবিএস এবং ডায়রিয়ার মতো দৈনন্দিন পেটের যাবতীয় সমস্যার কার্যকর চিকিৎসা প্রদান করা হয়। পাশাপাশি ফ্যাটি লিভার বা জন্ডিসের মতো লিভারের রোগেও সঠিক ওষুধ ও খাদ্যাভ্যাসের পরামর্শ দিয়ে রোগীকে সুস্থ করে তোলা হয়।",
    fullDescEn: "Effective relief for common digestive disorders like acidity, gas, indigestion, irritable bowel syndrome (IBS), and diarrhea. Clinical therapies combined with dietary guidance for fatty liver and jaundice.",
    tagsBn: ["গ্যাস", "অ্যাসিডিটি", "হজমের গন্ডগোল", "আইবিএস (IBS)", "ডায়রিয়া", "ফ্যাটি লিভার"],
    tagsEn: ["Gastritis", "Acidity", "Indigestion", "IBS", "Fatty Liver", "Jaundice"],
    bannerImage: "/assets/aistudio/____________________________bd73cd43.png",
    iconName: "Stethoscope",
    symbol: "✚",
    color: "#e37400",
  },
  {
    id: "respiratory",
    titleBn: "শ্বাসযন্ত্রের রোগ",
    titleEn: "Respiratory Diseases",
    fullDescBn: "হাঁপানি (অ্যাজমা), অ্যালার্জি এবং সিওপিডি (COPD)-র মতো ফুসফুসের বিভিন্ন ক্রনিক রোগের সঠিক চিকিৎসা করা হয়। দীর্ঘমেয়াদী কাশি বা শ্বাসকষ্টের সমস্যায় প্রয়োজনীয় ইনহেলার ও ওষুধের মাধ্যমে রোগীদের কষ্টদায়ক সমস্যাগুলো কার্যকরভাবে নিয়ন্ত্রণ করা হয়।",
    fullDescEn: "Specialized clinical care for pulmonary conditions such as bronchial asthma, allergic bronchitis, COPD, chronic persistent cough, and breathlessness with proper inhaler training.",
    tagsBn: ["হাঁপানি (অ্যাজমা)", "অ্যালার্জি", "সিওপিডি (COPD)", "কাশি", "শ্বাসকষ্ট", "ইনহেলার পরামর্শ"],
    tagsEn: ["Asthma", "Allergy", "COPD", "Chronic Cough", "Breathlessness", "Inhaler Guide"],
    bannerImage: "/assets/aistudio/Respiratory_Health_Poster_with_Dr._Asraful_Islam_13117a28.png",
    iconName: "Wind",
    symbol: "☼",
    color: "#095d6b",
  },
  {
    id: "pain-weakness",
    titleBn: "ব্যথা ও দুর্বলতা",
    titleEn: "Pain & Weakness",
    fullDescBn: "বাত বা জয়েন্টে ব্যথা, মাইগ্রেন এবং তীব্র মাথা ব্যথার মতো কষ্টদায়ক সমস্যার উপশমে সঠিক ওষুধ দিয়ে দ্রুত ব্যথা নিরাময় করা হয়। রক্তাল্পতা (অ্যানিমিয়া) এবং স্নায়ুর সাধারণ দুর্বলতা কাটিয়ে রোগীকে স্বাভাবিক জীবনে ফেরাতে প্রয়োজনীয় ভিটামিন ও সাপ্লিমেন্ট দেওয়া হয়।",
    fullDescEn: "Targeted therapy for joint arthritis pain, debilitating migraines, chronic headache, nutritional anemia, and generalized nerve weakness with restorative supplements.",
    tagsBn: ["বাত বা জয়েন্টে ব্যথা", "মাইগ্রেন", "মাথা ব্যথা", "রক্তাল্পতা (অ্যানিমিয়া)", "দুর্বলতা"],
    tagsEn: ["Arthritis", "Joint Pain", "Migraine", "Anemia", "Nerve Weakness"],
    bannerImage: "/assets/aistudio/Bengali_Pain_and_Weakness_Clinic_Banner_eeccd295.png",
    iconName: "Zap",
    symbol: "▦",
    color: "#843dff",
  },
  {
    id: "other-conditions",
    titleBn: "অন্যান্য শারীরিক সমস্যা",
    titleEn: "Other Health Conditions",
    fullDescBn: "প্রস্রাবে সংক্রমণ (UTI), শরীরে ভিটামিনের ঘাটতি বা যেকোনো সাধারণ শারীরিক ক্লান্তির ক্ষেত্রে সঠিক ওষুধ প্রয়োগ করে চিকিৎসা করা হয়। হার্ট বা কিডনির প্রাথমিক সমস্যা দেখা দিলে দ্রুত রোগ নির্ণয় করে চিকিৎসা শুরু করা হয় এবং প্রয়োজনে সুপার-স্পেশালিস্টের কাছে রেফার করা হয়।",
    fullDescEn: "Diagnosis and care for urinary tract infections (UTI), vitamin deficiencies, and generalized fatigue. Timely identification of early cardiac or renal complications with expert super-specialist referral.",
    tagsBn: ["প্রস্রাবে সংক্রমণ (UTI)", "ভিটামিনের ঘাটতি", "শারীরিক ক্লান্তি", "হার্ট ও কিডনি চেকআপ"],
    tagsEn: ["UTI", "Vitamin Deficiency", "Fatigue", "Heart & Kidney Screening"],
    bannerImage: "/assets/aistudio/Bengali_Medical_Care_Infographic_Banner_63e84704.png",
    iconName: "PlusCircle",
    symbol: "＋",
    color: "#0d7180",
  },
];

export const IMAGES = {
  // Official medical emblem poster for hero / first view
  heroPoster: "/assets/aistudio/Dr._Asraful_Islam_Medical_Poster_28bd7181.png",
  profileSquare: "/assets/aistudio/Modern_Doctor_Profile_Poster_7d375f94.png",
  profileFull: "/assets/aistudio/Dr._Asraful_Islam_Medicine_Specialist_Poster_8152bd4f.png",
  clinicStorefront: "/assets/aistudio/Vibrant_Dailogy_Clinic_Alley_Storefront_50422446.png",
};

export const FAQS = [
  {
    questionBn: "চেম্বারে দেখানোর জন্য কীভাবে সিরিয়াল বা বুকিং করব?",
    questionEn: "How do I book a consultation serial at the chamber?",
    answerBn: "সরাসরি ফোন করতে পারেন 9093964188 অথবা 8509146875 নম্বরে। এছাড়াও এই ওয়েবসাইটের WhatsApp বাটনে ক্লিক করে রোগীর নাম ও সমস্যা পাঠিয়ে সহজে সিরিয়াল নিতে পারেন।",
    answerEn: "You can directly call 9093964188 or 8509146875. Alternatively, click the WhatsApp button on this site to instantly submit patient details for priority serial confirmation.",
  },
  {
    questionBn: "ডাক্তারবাবুর কাছে আসার সময় সঙ্গে কী কী নিয়ে আসা উচিত?",
    questionEn: "What documents or tests should I bring during consultation?",
    answerBn: "আপনার পূর্বের প্রেসক্রিপশন, রক্তের রিপোর্ট, এক্স-রে বা ইউএসজি (USG) থাকলে সাথে রাখবেন। বর্তমানে যে ওষুধগুলো খাচ্ছেন তার তালিকা বা স্ট্রিপ সঙ্গে আনলে সঠিক সিদ্ধান্ত নিতে সুবিধা হয়।",
    answerEn: "Please bring all previous doctor prescriptions, recent lab/blood reports, X-rays or USG scans, and currently ongoing medication strips.",
  },
  {
    questionBn: "মিশন মেডিকেল সেন্টারের অবস্থান ও যাতায়াতের সুবিধা কেমন?",
    questionEn: "Where is Mission Medical Centre located?",
    answerBn: "মিশন মেডিকেল সেন্টার মুর্শিদাবাদের বহরমপুর শহরের কেন্দ্রস্থল লালদিঘিতে অবস্থিত (পিন: ৭৪২১০১)। বহরমপুর কোর্ট রেলওয়ে স্টেশন বা মোহনা বাসস্ট্যান্ড থেকে টোটো বা অটোতে মাত্র ৫-১০ মিনিটে পৌঁছানো যায়।",
    answerEn: "Mission Medical Centre is conveniently located at Laldighi, Berhampore (PIN 742101), just 5–10 minutes from Berhampore Court Railway Station or Mohona Bus Terminus by auto/toto.",
  },
  {
    questionBn: "ডায়াবেটিস ও প্রেশারের রোগীদের কতদিন অন্তর ফলো-আপ করা দরকার?",
    questionEn: "How frequently should patients with diabetes or hypertension follow up?",
    answerBn: "সাধারণত সুগার ও প্রেশার নিয়ন্ত্রণে থাকলে ১ থেকে ৩ মাস পর পর নিয়মিত চেকআপ করানো নিরাপদ। কোনো নতুন শারীরিক অস্বস্তি হলে বিলম্ব না করে পরামর্শ নেওয়া উচিত।",
    answerEn: "For stable patients, regular clinical reviews every 1 to 3 months are recommended. Any sudden symptom changes or fluctuating readings warrant immediate consultation.",
  },
];
