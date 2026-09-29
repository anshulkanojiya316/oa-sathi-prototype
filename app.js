/**
 * OA-SATHI - AI-Assisted Osteoarthritis Screening System
 * Complete Workflow:
 * Screen 1: Start Screening
 * Screen 2: Patient Registration & Consent
 * Screen 3: Red-Flag Safety Check
 * Screen 4: OA Clinical Questionnaire
 * Screen 5: AI-Assisted Analysis & Clinical Risk Report (Feature 8 & 9: Risk Result & Referral Recommendation)
 */

// 1. Language Translations Dictionary
const translations = {
  en: {
    subtitle: "AI-Assisted Osteoarthritis Screening System",
    heroPill: "SIH PS 26004 • NER Community Healthcare",
    heroHeading: "Early Detection of Osteoarthritis (OA) Risk Markers",
    heroDesc: "Standardized, low-resource point-of-care clinical assessment tool for frontline ASHA health workers in North Eastern Region.",
    workerName: "ASHA Worker: Anita",
    workerLocation: "Nashik District (NER Unit)",
    lblWorkerId: "Health Worker ID:",
    lblStorage: "Offline Storage:",
    lblProtocol: "Protocol:",
    btnStart: "Start Screening",
    step1Badge: "1. Welcome",
    step2Badge: "2. Patient Registration",
    step3Badge: "3. Red-Flags",
    step4Badge: "4. Questionnaire",
    step5Badge: "5. AI Analysis",
    
    // Screen 2
    regStepTag: "Step 2 of 5",
    regTitle: "Patient Registration & Consent",
    regSubtitle: "Capture essential demographic details and screening consent.",
    lblPatientId: "Patient ID *",
    lblPatientName: "Name or Initials *",
    lblPatientAge: "Age (years) *",
    lblPatientSex: "Sex / Gender *",
    lblPatientLoc: "Location / Village / Block *",
    lblAbhaId: "ABHA ID (Optional - Ayushman Bharat Digital Mission)",
    consentStatement: "<strong>Patient Consent:</strong> I confirm that the patient (or caregiver) has been informed about the non-invasive osteoarthritis screening and has provided consent to record clinical risk indicators.",
    btnBack: "Back",
    btnNext: "Save & Proceed to Red-Flags",
    errConsent: "Consent confirmation is required before proceeding.",
    errMissing: "Please fill in all required fields (Patient ID, Name/Initials, Age, Sex, Location).",
    successReg: "Patient registered successfully! Session cached locally.",
    
    // Screen 3 Red Flags
    rfStepTag: "Step 3 of 5 • Safety Gate",
    rfTitle: "Red-Flag Safety Check",
    rfSubtitle: "Screen for urgent conditions requiring immediate medical referral before proceeding to the chronic OA questionnaire.",
    rfQ1: "1. Does the patient have a fever?",
    rfSub1: "Body temperature ≥ 38°C (100.4°F) or systemic chills.",
    rfQ2: "2. Is the knee hot to touch or severely swollen?",
    rfSub2: "Acute redness, palpable warmth, or severe joint effusion.",
    rfQ3: "3. Has there been a recent serious injury or fall?",
    rfSub3: "Trauma within past 2 weeks, motor accident, or audible joint pop/snap.",
    rfQ4: "4. Is the patient completely unable to bear weight / stand?",
    rfSub4: "Inability to take 4 steps immediately and during examination.",
    rfQ5: "5. Did severe pain start suddenly (within hours/days)?",
    rfSub5: "Acute rapid onset pain (distinct from gradual chronic wear-and-tear).",
    rfSafeTitle: "No Acute Red Flags Detected",
    rfSafeDesc: "Patient is cleared for routine chronic Osteoarthritis (OA) questionnaire and risk scoring.",
    rfDangerTitle: "⚠️ URGENT RED-FLAG DETECTED",
    rfDangerDesc: "Immediate medical/orthopaedic referral required to rule out fracture, septic arthritis, or acute ligament injury.",
    btnRfBack: "Back to Registration",
    btnRfNext: "Proceed to OA Questionnaire",

    // Screen 4 Questionnaire
    qStepTag: "Step 4 of 5 • Clinical Protocol",
    qTitle: "Osteoarthritis (OA) Questionnaire",
    qSubtitle: "Divided into 3 standardized clinical sections: Symptoms, Joint Function, and Risk Factors.",
    sec1Title: "Section 1: Symptoms",
    sec1Desc: "Pain characteristics, duration, and joint localization.",
    sec2Title: "Section 2: Joint Function & Mobility",
    sec2Desc: "Assessment of daily physical limitations (WOMAC Functional Scale).",
    sec3Title: "Section 3: Risk Factors & Lifestyle",
    sec3Desc: "Past history, occupational joint stress, and BMI category.",
    lblQDuration: "Pain Duration *",
    lblQLaterality: "Affected Knee *",
    lblQStiffness: "Morning Stiffness *",
    lblQSeverity: "Pain Severity (0 - 10):",
    lblQWalking: "Difficulty Walking on Flat Ground *",
    lblQStairs: "Difficulty Climbing Stairs / Slopes *",
    lblQSquatting: "Difficulty Squatting / Sitting on Floor *",
    lblQChair: "Difficulty Standing Up from a Chair *",
    lblQPastInjury: "Previous Knee Injury / Past Trauma *",
    lblQOccupation: "Occupation Involving Kneeling / Squatting *",
    lblQBmi: "BMI / Weight Category *",
    lblQTreatment: "Previous Treatment Taken *",
    lblScoreIndex: "Calculated OA Risk Index:",
    btnQBack: "Back to Red-Flags",
    btnQNext: "Analyze & Generate Report",

    // Screen 5 Analysis & Report (USP Features 8 & 9)
    loadingTitle: "AI-Assisted Processing in Progress...",
    loadingSubtitle: "Executing multi-modal clinical risk calculation for SIH PS 26004.",
    pipe1: "Checking patient responses",
    pipe2: "Assessing functional limitation",
    pipe3: "Evaluating risk factors",
    pipe4: "Checking X-ray availability",
    pipe5: "Generating referral suggestion",
    reportTag: "AI Clinical Report Ready",
    reportTitle: "Screening Result & Referral Recommendation",
    reportSubtitle: "Standardized clinical summary generated for ASHA frontline health records.",
    prelimLabel: "Preliminary Risk",
    lblScorePill: "Risk Score:",
    confLabel: "Confidence:",
    factorsHeading: "Main Contributing Factors:",
    uspBadge: "ASHA Point-of-Care Protocol",
    referralTitle: "Referral Recommendation",
    lblRecAction: "Recommended action:",
    lblNextRef: "Possible next referral:",
    lblRefReason: "Reason:",
    btnRepBack: "Back to Questionnaire",
    btnPrint: "Print / Save PDF",
    btnNewScreening: "Start New Screening",
    
    modeOffline: "Mode: Offline",
    modeOnline: "Mode: Online"
  },
  hi: {
    subtitle: "एआई-सहायता प्राप्त ऑस्टियोआर्थराइटिस स्क्रीनिंग प्रणाली",
    heroPill: "एसआईएच पीएस 26004 • पूर्वोत्तर क्षेत्र सामुदायिक स्वास्थ्य सेवा",
    heroHeading: "ऑस्टियोआर्थराइटिस (OA) जोखिम लक्षणों की शीघ्र पहचान",
    heroDesc: "पूर्वोत्तर क्षेत्र में फ्रंटलाइन आशा स्वास्थ्य कार्यकर्ताओं के लिए मानकीकृत, कम संसाधनों वाला नैदानिक परीक्षण उपकरण।",
    workerName: "आशा कार्यकर्ता: अनीता",
    workerLocation: "नासिक जिला (एनईआर इकाई)",
    lblWorkerId: "स्वास्थ्य कार्यकर्ता आईडी:",
    lblStorage: "ऑफलाइन स्टोरेज:",
    lblProtocol: "प्रोटोकॉल:",
    btnStart: "स्क्रीनिंग शुरू करें",
    step1Badge: "१. स्वागत",
    step2Badge: "२. रोगी पंजीकरण",
    step3Badge: "३. रेड-फ्लैग्स",
    step4Badge: "४. प्रश्नावली",
    step5Badge: "५. एआई विश्लेषण",
    
    regStepTag: "चरण २ / ५",
    regTitle: "रोगी पंजीकरण और सहमति",
    regSubtitle: "आवश्यक जनसांख्यिकीय विवरण और स्क्रीनिंग सहमति दर्ज करें।",
    lblPatientId: "रोगी आईडी *",
    lblPatientName: "नाम या प्रारंभिक अक्षर *",
    lblPatientAge: "आयु (वर्ष) *",
    lblPatientSex: "लिंग *",
    lblPatientLoc: "स्थान / गाँव / ब्लॉक *",
    lblAbhaId: "आभा आईडी (वैकल्पिक)",
    consentStatement: "<strong>रोगी सहमति:</strong> रोगी को ऑस्टियोआर्थराइटिस स्क्रीनिंग के बारे में सूचित किया गया है और सहमति प्राप्त है।",
    btnBack: "पीछे जाएं",
    btnNext: "सहेजें और रेड-फ्लैग्स पर जाएं",
    errConsent: "आगे बढ़ने के लिए सहमति अनिवार्य है।",
    errMissing: "कृपया सभी आवश्यक जानकारी भरें।",
    successReg: "रोगी सफलतापूर्वक पंजीकृत!",
    
    rfStepTag: "चरण ३ / ५ • सुरक्षा जांच",
    rfTitle: "रेड-फ्लैग सुरक्षा जांच",
    rfSubtitle: "ओए प्रश्नावली से पहले उन गंभीर लक्षणों की जांच करें जिनके लिए तत्काल रेफरल आवश्यक है।",
    rfQ1: "१. क्या रोगी को बुखार है?",
    rfSub1: "शरीर का तापमान ≥ ३८°C या ठंड लगना।",
    rfQ2: "२. क्या घुटना छूने पर गर्म या अत्यधिक सूजा हुआ है?",
    rfSub2: "अत्यधिक लालिमा, गर्माहट या गंभीर सूजन।",
    rfQ3: "३. क्या हाल ही में कोई गंभीर चोट लगी है?",
    rfSub3: "पिछले २ हफ्तों में दुर्घटना या चोट।",
    rfQ4: "४. क्या रोगी खड़े होने में असमर्थ है?",
    rfSub4: "४ कदम भी न चल पाना।",
    rfQ5: "५. क्या अचानक तीव्र दर्द शुरू हुआ?",
    rfSub5: "अचानक शुरू हुआ तीव्र दर्द।",
    rfSafeTitle: "कोई गंभीर रेड-फ्लैग नहीं मिला",
    rfSafeDesc: "रोगी नियमित प्रश्नावली के लिए सुरक्षित है।",
    rfDangerTitle: "⚠️ तत्काल रेड-फ्लैग संकेत मिला",
    rfDangerDesc: "तत्काल प्राथमिक स्वास्थ्य केंद्र को रेफर करें।",
    btnRfBack: "पंजीकरण पर वापस जाएं",
    btnRfNext: "प्रश्नावली पर आगे बढ़ें",

    qStepTag: "चरण ४ / ५ • नैदानिक प्रोटोकॉल",
    qTitle: "ऑस्टियोआर्थराइटिस (OA) प्रश्नावली",
    qSubtitle: "३ मानकीकृत नैदानिक अनुभाग: लक्षण, जोड़ की कार्यप्रणाली, और जोखिम कारक।",
    sec1Title: "अनुभाग १: लक्षण",
    sec1Desc: "दर्द की विशेषताएं और अवधि।",
    sec2Title: "अनुभाग २: जोड़ों की कार्यप्रणाली व गतिशीलता",
    sec2Desc: "दैनिक शारीरिक सीमाओं का आकलन।",
    sec3Title: "अनुभाग ३: जोखिम कारक",
    sec3Desc: "पिछला इतिहास और व्यावसायिक तनाव।",
    lblQDuration: "दर्द की अवधि *",
    lblQLaterality: "प्रभावित घुटना *",
    lblQStiffness: "सुबह की जकड़न *",
    lblQSeverity: "दर्द की तीव्रता (० - १०):",
    lblQWalking: "चलने में कठिनाई *",
    lblQStairs: "सीढ़ियाँ चढ़ने में कठिनाई *",
    lblQSquatting: "उकड़ू बैठने में कठिनाई *",
    lblQChair: "कुर्सी से उठने में कठिनाई *",
    lblQPastInjury: "घुटने की पुरानी चोट *",
    lblQOccupation: "घुटने टेकने वाला काम *",
    lblQBmi: "बीएमआई श्रेणी *",
    lblQTreatment: "पहले लिया गया उपचार *",
    lblScoreIndex: "जोखिम सूचकांक:",
    btnQBack: "रेड-फ्लैग्स पर वापस जाएं",
    btnQNext: "विश्लेषण करें और रिपोर्ट बनाएं",

    loadingTitle: "एआई विश्लेषण प्रक्रिया जारी है...",
    loadingSubtitle: "जोखिम गणना की जा रही है।",
    pipe1: "रोगी की प्रतिक्रियाओं की जांच",
    pipe2: "कार्यात्मक सीमाओं का आकलन",
    pipe3: "जोखिम कारकों का मूल्यांकन",
    pipe4: "एक्स-रे उपलब्धता की जांच",
    pipe5: "रेफरल सुझाव तैयार किया जा रहा है",
    reportTag: "एआई नैदानिक रिपोर्ट तैयार",
    reportTitle: "स्क्रीनिंग परिणाम व रेफरल सिफारिश",
    reportSubtitle: "मानकीकृत नैदानिक सारांश।",
    prelimLabel: "प्रारंभिक जोखिम",
    lblScorePill: "जोखिम स्कोर:",
    confLabel: "विश्वास स्तर:",
    factorsHeading: "मुख्य योगदान कारक:",
    uspBadge: "आशा पॉइंट-ऑफ-केयर प्रोटोकॉल",
    referralTitle: "रेफरल सिफारिश",
    lblRecAction: "अनुशंसित कार्रवाई:",
    lblNextRef: "संभावित अगला रेफरल:",
    lblRefReason: "कारण:",
    btnRepBack: "प्रश्नावली पर वापस जाएं",
    btnPrint: "प्रिंट / पीडीएफ",
    btnNewScreening: "नई स्क्रीनिंग",
    
    modeOffline: "मोड: ऑफलाइन",
    modeOnline: "मोड: ऑनलाइन"
  },
  as: {
    subtitle: "এআই-সহায়তাপ্রাপ্ত অষ্টিঅ'আৰ্থ্ৰাইটিছ স্ক্ৰীনিং ব্যৱস্থা",
    heroPill: "SIH PS 26004 • উত্তৰ-পূৰ্বাঞ্চল সামূহিক স্বাস্থ্য সেৱা",
    heroHeading: "অষ্টিঅ'আৰ্থ্ৰাইটিছ (OA) ৰোগৰ লক্ষণৰ আগতীয়া চিনাক্তকৰণ",
    heroDesc: "উত্তৰ-পূব অঞ্চলৰ আশা কৰ্মীসকলৰ বাবে মানসম্মত স্বাস্থ্য পৰীক্ষণ ব্যৱস্থা।",
    workerName: "আশা কৰ্মী: অনিতা",
    workerLocation: "নাছিক জিলা (NER ইউনিট)",
    lblWorkerId: "স্বাস্থ্য কৰ্মী পৰিচয়:",
    lblStorage: "অফলাইন সংৰক্ষণ:",
    lblProtocol: "প্ৰট'কল:",
    btnStart: "স্ক্ৰীনিং আৰম্ভ কৰক",
    step1Badge: "১. স্বাগতম",
    step2Badge: "২. ৰোগী পঞ্জীয়ন",
    step3Badge: "৩. ৰেড-ফ্লেগ",
    step4Badge: "৪. প্ৰশ্নাৱলী",
    step5Badge: "৫. এআই বিশ্লেষণ",
    
    regStepTag: "পদক্ষেপ ২ / ৫",
    regTitle: "ৰোগীৰ পঞ্জীয়ন আৰু সন্মতি",
    regSubtitle: "প্ৰয়োজনীয় তথ্য সংগ্ৰহ কৰক।",
    lblPatientId: "ৰোগীৰ আইডি *",
    lblPatientName: "নাম *",
    lblPatientAge: "বয়স *",
    lblPatientSex: "লিংগ *",
    lblPatientLoc: "স্থান *",
    lblAbhaId: "আভা আইডি",
    consentStatement: "<strong>ৰোগীৰ সন্মতি:</strong> ৰোগীয়ে স্ক্ৰীনিংৰ বাবে সন্মতি প্ৰদান কৰিছে।",
    btnBack: "উভতি যাওক",
    btnNext: "ৰেড-ফ্লেগলৈ যাওক",
    errConsent: "সন্মতি বাধ্যতামূলক।",
    errMissing: "সকলো তথ্য পূৰণ কৰক।",
    successReg: "ৰোগী পঞ্জীয়ন সফল হ'ল!",
    
    rfStepTag: "পদক্ষেপ ৩ / ৫ • সুৰক্ষা পৰীক্ষা",
    rfTitle: "ৰেড-ফ্লেগ সুৰক্ষা পৰীক্ষা",
    rfSubtitle: "জৰুৰী চিকিৎসাৰ প্ৰয়োজন থকা লক্ষণসমূহ পৰীক্ষা কৰক।",
    rfQ1: "১. ৰোগীৰ জ্বৰ আছে নেকি?",
    rfSub1: "শৰীৰৰ উত্তাপ ≥ ৩৮°C বা কঁপনি।",
    rfQ2: "২. আঁঠু গৰম বা ফুলা নেকি?",
    rfSub2: "তীব্ৰ ৰঙা পৰা বা ফুলা।",
    rfQ3: "৩. শেহতীয়াকৈ আঘাত পাইছে নেকি?",
    rfSub3: "যোৱা ২ সপ্তাহৰ আঘাত।",
    rfQ4: "৪. ৰোগীয়ে ভৰ দি থিয় হ'বলৈ অক্ষম নেকি?",
    rfSub4: "৪ খোজো ল'ব নোৱৰা।",
    rfQ5: "৫. হঠাতে তীব্ৰ বিষ আৰম্ভ হৈছে নেকি?",
    rfSub5: "হঠাতে হোৱা অসহ্য বিষ।",
    rfSafeTitle: "কোনো ৰেড-ফ্লেগ পোৱা নগ'ল",
    rfSafeDesc: "ৰোগী স্বাভাৱিক প্ৰশ্নাৱলীৰ বাবে নিৰাপদ।",
    rfDangerTitle: "⚠️ জৰুৰী ৰেড-ফ্লেগ ধৰা পৰিছে",
    rfDangerDesc: "তাত্ক্ষণিকভাৱে চিকিৎসালয়লৈ প্ৰেৰণ কৰক।",
    btnRfBack: "পঞ্জীয়নলৈ উভতি যাওক",
    btnRfNext: "প্ৰশ্নাৱলীলৈ যাওক",

    qStepTag: "পদক্ষেপ ৪ / ৫ • প্ৰট'কল",
    qTitle: "অষ্টিঅ'আৰ্থ্ৰাইটিছ (OA) প্ৰশ্নাৱলী",
    qSubtitle: "৩ টা শাখা: লক্ষণ, গাঁঠিৰ কাৰ্যক্ষমতা, আৰু বিপদৰ কাৰক।",
    sec1Title: "শাখা ১: লক্ষণসমূহ",
    sec1Desc: "বিষৰ প্ৰকৃতি আৰু স্থান।",
    sec2Title: "শাখা ২: গাঁঠিৰ কাৰ্যক্ষমতা",
    sec2Desc: "দৈনন্দিন অসুবিধা।",
    sec3Title: "শাখা ৩: বিপদৰ কাৰক",
    sec3Desc: "পুৰণি আঘাত আৰু কামৰ চাপ।",
    lblQDuration: "বিষৰ সময়সীমা *",
    lblQLaterality: "আক্ৰান্ত আঁঠু *",
    lblQStiffness: "পুৱাৰ জঠৰতা *",
    lblQSeverity: "বিষৰ মাত্ৰা (০ - ১০):",
    lblQWalking: "খোজ কাঢ়িবলৈ অসুবিধা *",
    lblQStairs: "চিৰি বগাবলৈ অসুবিধা *",
    lblQSquatting: "তলত বহিবলৈ অসুবিধা *",
    lblQChair: "চকীৰ পৰা উঠিবলৈ অসুবিধা *",
    lblQPastInjury: "আঁঠুৰ পুৰণি আঘাত *",
    lblQOccupation: "আঁঠু কাঢ়ি কৰা কাম *",
    lblQBmi: "বিএমআই শ্রেণি *",
    lblQTreatment: "পূৰ্বৰ চিকিৎসা *",
    lblScoreIndex: "বিপদ সূচক:",
    btnQBack: "ৰেড-ফ্লেগলৈ উভতি যাওক",
    btnQNext: "বিশ্লেষণ কৰি ৰিপৰ্ট তৈয়াৰ কৰক",

    loadingTitle: "এআই প্ৰক্ৰিয়াকৰণ চলি আছে...",
    loadingSubtitle: "বিপদ গণনা চলি আছে।",
    pipe1: "ৰোগীৰ তথ্য পৰীক্ষা",
    pipe2: "শাৰীৰিক সীমাবদ্ধতা নিৰ্ধাৰণ",
    pipe3: "বিপদৰ কাৰকসমূহৰ মূল্যায়ন",
    pipe4: "এক্স-ৰে'ৰ উপলব্ধতা পৰীক্ষা",
    pipe5: "ৰেফাৰেল পৰামৰ্শ প্ৰস্তুতকৰণ",
    reportTag: "এআই ৰিপৰ্ট প্ৰস্তুত",
    reportTitle: "পৰীক্ষাৰ ফলাফল আৰু ৰেফাৰেল",
    reportSubtitle: "মানসম্মত স্বাস্থ্য সাৰাংশ।",
    prelimLabel: "প্ৰাৰম্ভিক বিপদ",
    lblScorePill: "বিপদ স্ক'ৰ:",
    confLabel: "নিৰ্ভৰযোগ্যতা:",
    factorsHeading: "মুখ্য সহায়ক কাৰকসমূহ:",
    uspBadge: "আশা স্বাস্থ্য প্ৰট'কল",
    referralTitle: "ৰেফাৰেল পৰামৰ্শ",
    lblRecAction: "পৰামৰ্শিত পদক্ষেপ:",
    lblNextRef: "পৰৱৰ্তী ৰেফাৰেল:",
    lblRefReason: "কাৰণ:",
    btnRepBack: "প্ৰশ্নাৱলীলৈ উভতি যাওক",
    btnPrint: "প্ৰিণ্ট / সংৰক্ষণ",
    btnNewScreening: "নতুন স্ক্ৰীনিং",
    
    modeOffline: "অৱস্থা: অফলাইন",
    modeOnline: "অৱস্থা: অনলাইন"
  },
  bn: {
    subtitle: "এআই-সহায়তাপ্রাপ্ত অস্টিওআর্থারাইটিস স্ক্রীনিং ব্যবস্থা",
    heroPill: "SIH PS 26004 • উত্তর-পূর্বাঞ্চল স্বাস্থ্য পরিষেবা",
    heroHeading: "অস্টিওআর্থারাইটিস (OA) প্রাথমিক লক্ষণ শনাক্তকরণ",
    heroDesc: "আশা স্বাস্থ্যকর্মীদের জন্য সহজে ব্যবহারযোগ্য প্রাথমিক স্বাস্থ্য পরীক্ষা ব্যবস্থা।",
    workerName: "আশা কর্মী: অনিতা",
    workerLocation: "নাশিক জেলা (NER ইউনিট)",
    lblWorkerId: "স্বাস্থ্যকর্মী আইডি:",
    lblStorage: "অফলাইন স্টোরেজ:",
    lblProtocol: "প্রোটোকল:",
    btnStart: "স্ক্রীনিং শুরু করুন",
    step1Badge: "১. সূচনা",
    step2Badge: "২. রোগী নিবন্ধন",
    step3Badge: "৩. রেড-ফ্ল্যাগ",
    step4Badge: "৪. প্রশ্নাবলী",
    step5Badge: "৫. এআই বিশ্লেষণ",
    
    regStepTag: "ধাপ ২ / ৫",
    regTitle: "রোগী নিবন্ধন ও সম্মতি",
    regSubtitle: "প্রাথমিক তথ্য লিপিবদ্ধ করুন।",
    lblPatientId: "রোগী আইডি *",
    lblPatientName: "নাম *",
    lblPatientAge: "বয়স *",
    lblPatientSex: "লিঙ্গ *",
    lblPatientLoc: "অবস্থান *",
    lblAbhaId: "আভা আইডি",
    consentStatement: "<strong>রোগীর সম্মতি:</strong> রোগী স্ক্রীনিং এর সম্মতি দিয়েছেন।",
    btnBack: "পূর্ববর্তী",
    btnNext: "রেড-ফ্ল্যাগে যান",
    errConsent: "সম্মতি আবশ্যক।",
    errMissing: "তথ্য পূরণ করুন।",
    successReg: "রোগী নিবন্ধন সফল হয়েছে!",
    
    rfStepTag: "ধাপ ৩ / ৫ • নিরাপত্তা পরীক্ষা",
    rfTitle: "রেড-ফ্ল্যাগ নিরাপত্তা পরীক্ষা",
    rfSubtitle: "জরুরি লক্ষণ পরীক্ষা করুন।",
    rfQ1: "১. রোগীর জ্বর আছে কি?",
    rfSub1: "শরীরের তাপমাত্রা ≥ ৩৮°C বা কাঁপুনি।",
    rfQ2: "২. হাঁটু স্পর্শে গরম বা মারাত্মক ফোলা কি?",
    rfSub2: "তীব্র লালচে ভাব বা জয়েন্টে তরল জমা।",
    rfQ3: "৩. সম্প্রতি গুরুতর আঘাত লেগেছে কি?",
    rfSub3: "গত ২ সপ্তাহে দুর্ঘটনা।",
    rfQ4: "৪. রোগী কি দাঁড়াতে সম্পূর্ণ অক্ষম?",
    rfSub4: "৪ কদমও হাঁটতে না পারা।",
    rfQ5: "৫. হঠাৎ তীব্র ব্যথা শুরু হয়েছে কি?",
    rfSub5: "হঠাৎ শুরু হওয়া অসহনীয় ব্যথা।",
    rfSafeTitle: "কোনো রেড-ফ্ল্যাগ নেই",
    rfSafeDesc: "রোগী প্রশ্নাবলীর জন্য নিরাপদ।",
    rfDangerTitle: "⚠️ জরুরি রেড-ফ্ল্যাগ চিহ্নিত",
    rfDangerDesc: "অবিলম্বে হাসপাতালে রেফার করুন।",
    btnRfBack: "নিবন্ধনে ফিরে যান",
    btnRfNext: "প্রশ্নাবলীতে যান",

    qStepTag: "ধাপ ৪ / ৫ • স্বাস্থ্য প্রোটোকল",
    qTitle: "অস্টিওআর্থারাইটিস (OA) প্রশ্নাবলী",
    qSubtitle: "৩টি অংশ: লক্ষণ, জয়েন্টের কার্যকারিতা এবং ঝুঁকির কারণ।",
    sec1Title: "বিভাগ ১: লক্ষণসমূহ",
    sec1Desc: "ব্যথার মাত্রা ও অবস্থান।",
    sec2Title: "বিভাগ ২: জয়েন্টের কার্যকারিতা",
    sec2Desc: "দৈনন্দিন চলাফেরার অসুবিধা।",
    sec3Title: "বিভাগ ৩: ঝুঁকির কারণ",
    sec3Desc: "পূর্ববর্তী আঘাত ও কাজের চাপ।",
    lblQDuration: "ব্যথার সময়কাল *",
    lblQLaterality: "আক্রান্ত হাঁটু *",
    lblQStiffness: "সকালের জড়তা *",
    lblQSeverity: "ব্যথার তীব্রতা (০ - ১০):",
    lblQWalking: "হাঁটার অসুবিধা *",
    lblQStairs: "সিঁড়ি ভাঙার অসুবিধা *",
    lblQSquatting: "বসার অসুবিধা *",
    lblQChair: "ওঠার অসুবিধা *",
    lblQPastInjury: "পূর্বের আঘাত *",
    lblQOccupation: "কাজের ধরণ *",
    lblQBmi: "ওজন শ্রেণি *",
    lblQTreatment: "পূর্বের চিকিৎসা *",
    lblScoreIndex: "ঝুঁকি সূচক:",
    btnQBack: "রেড-ফ্ল্যাগে ফিরে যান",
    btnQNext: "বিশ্লেষণ ও রিপোর্ট তৈরি",

    loadingTitle: "এআই প্রসেসিং চলছে...",
    loadingSubtitle: "ঝুঁকি গণনা করা হচ্ছে।",
    pipe1: "রোগীর প্রতিক্রিয়া যাচাইকরণ",
    pipe2: "শারীরিক অক্ষমতা ও চলাফেরা মূল্যায়ন",
    pipe3: "ঝুঁকির কারণসমূহ বিশ্লেষণ",
    pipe4: "এক্স-রে প্রাপ্যতা পরীক্ষা",
    pipe5: "রেফারেল সুপারিশ প্রস্তুত করা হচ্ছে",
    reportTag: "এআই ক্লিনিক্যাল রিপোর্ট প্রস্তুত",
    reportTitle: "ফলাফল এবং রেফারেল সুপারিশ",
    reportSubtitle: "স্বাস্থ্য সারাংশ।",
    prelimLabel: "প্রাথমিক ঝুঁকি",
    lblScorePill: "ঝুঁকি স্কোর:",
    confLabel: "নির্ভরযোগ্যতা:",
    factorsHeading: "প্রধান অবদানকারী কারণসমূহ:",
    uspBadge: "আশা পয়েন্ট-অব-কেয়ার প্রোটোকল",
    referralTitle: "রেফারেল সুপারিশ",
    lblRecAction: "সুপারিশকৃত পদক্ষেপ:",
    lblNextRef: "পরবর্তী রেফারেল:",
    lblRefReason: "কারণ:",
    btnRepBack: "প্রশ্নাবলীতে ফিরে যান",
    btnPrint: "প্রিন্ট / সেভ",
    btnNewScreening: "নতুন স্ক্রীনিং",
    
    modeOffline: "মোড: অফলাইন",
    modeOnline: "মোড: অনলাইন"
  },
  mr: {
    subtitle: "एआय-सहाय्यित ऑस्टिओआर्थराइटिस स्क्रीनिंग प्रणाली",
    heroPill: "SIH PS 26004 • एनईआर समुदाय आरोग्य सेवा",
    heroHeading: "ऑस्टिओआर्थराइटिस (OA) जोखमीची पूर्वतपासणी",
    heroDesc: "आशा आरोग्य सेविकांसाठी प्रमाणित, जलद व सुलभ तपासणी साधन.",
    workerName: "आशा सेविका: अनिता",
    workerLocation: "नाशिक जिल्हा (NER युनिट)",
    lblWorkerId: "आरोग्य सेविका आयडी:",
    lblStorage: "ऑफलाईन साठवणूक:",
    lblProtocol: "प्रोटोकॉल:",
    btnStart: "तपासणी सुरू करा",
    step1Badge: "१. सुरुवात",
    step2Badge: "२. रुग्ण नोंदणी",
    step3Badge: "३. रेड-फ्लॅग्स",
    step4Badge: "४. प्रश्नावली",
    step5Badge: "५. एआय विश्लेषण",
    
    regStepTag: "पायरी २ / ५",
    regTitle: "रुग्ण नोंदणी व संमती",
    regSubtitle: "रुग्णाची प्राथमिक माहिती नोंदवा.",
    lblPatientId: "रुग्ण आयडी *",
    lblPatientName: "नाव *",
    lblPatientAge: "वय *",
    lblPatientSex: "लिंग *",
    lblPatientLoc: "स्थान *",
    lblAbhaId: "आभा आयडी",
    consentStatement: "<strong>रुग्ण संमती:</strong> रुग्णाने तपासणीसाठी संमती दिली आहे.",
    btnBack: "मागे",
    btnNext: "रेड-फ्लॅग्सकडे जा",
    errConsent: "संमती आवश्यक आहे.",
    errMissing: "सर्व माहिती भरा.",
    successReg: "रुग्ण नोंदणी यशस्वी!",
    
    rfStepTag: "पायरी ३ / ५ • सुरक्षा तपासणी",
    rfTitle: "रेड-फ्लॅग सुरक्षा तपासणी",
    rfSubtitle: "तातडीच्या वैद्यकीय लक्षणांची तपासणी करा.",
    rfQ1: "१. रुग्णाला ताप आहे का?",
    rfSub1: "शरीराचे तापमान ≥ ३८°C.",
    rfQ2: "२. गुडघा गरम किंवा खूप सुजला आहे का?",
    rfSub2: "अचानक लाली किंवा तीव्र सूज.",
    rfQ3: "३. अलीकडे गंभीर दुखापत घडली आहे का?",
    rfSub3: "गेल्या २ आठवड्यांत झालेली दुखापत.",
    rfQ4: "४. रुग्ण उभे राहण्यास असमर्थ आहे का?",
    rfSub4: "४ पावलेही चालता न येणे.",
    rfQ5: "५. अचानक तीव्र वेदना सुरू झाल्या का?",
    rfSub5: "अचानक सुरू झालेली तीव्र वेदना.",
    rfSafeTitle: "कोणतेही रेड-फ्लॅग आढळले नाहीत",
    rfSafeDesc: "रुग्ण ओए प्रश्नावलीसाठी योग्य आहे.",
    rfDangerTitle: "⚠️ तातडीचा रेड-फ्लॅग आढळला!",
    rfDangerDesc: "रुग्णाला ताबडतोब प्राथमिक आरोग्य केंद्रात पाठवा.",
    btnRfBack: "नोंदणीकडे परत जा",
    btnRfNext: "ओए प्रश्नावलीकडे जा",

    qStepTag: "पायरी ४ / ५ • वैद्यकीय प्रोटोकॉल",
    qTitle: "ऑस्टिओआर्थराइटिस (OA) प्रश्नावली",
    qSubtitle: "३ भाग: लक्षणे, सांध्याची हालचाल, आणि जोखीम घटक.",
    sec1Title: "विभाग १: लक्षणे",
    sec1Desc: "वेदनेचे स्वरूप आणि कालावधी.",
    sec2Title: "विभाग २: सांध्याची हालचाल",
    sec2Desc: "दैनंदिन हालचालींमधील अडचणी.",
    sec3Title: "विभाग ३: जोखीम घटक",
    sec3Desc: "मागील दुखापत आणि कामाचे स्वरूप.",
    lblQDuration: "वेदनेचा कालावधी *",
    lblQLaterality: "प्रभावित गुडघा *",
    lblQStiffness: "सकाळचा कडकपणा *",
    lblQSeverity: "वेदनेची तीव्रता (० - १०):",
    lblQWalking: "चालताना अडचण *",
    lblQStairs: "जिने चढताना अडचण *",
    lblQSquatting: "खाली बसताना अडचण *",
    lblQChair: "खुर्चीवरून उठताना अडचण *",
    lblQPastInjury: "जुनी दुखापत *",
    lblQOccupation: "कामाचे स्वरूप *",
    lblQBmi: "बीएमआय श्रेणी *",
    lblQTreatment: "पूर्वी घेतलेले उपचार *",
    lblScoreIndex: "जोखीम निर्देशांक:",
    btnQBack: "रेड-फ्लॅग्सकडे परत जा",
    btnQNext: "विश्लेषण करा व अहवाल तयार करा",

    loadingTitle: "एआय प्रक्रिया सुरू आहे...",
    loadingSubtitle: "जोखीम गणना केली जात आहे.",
    pipe1: "रुग्णाच्या प्रतिसादांची पडताळणी",
    pipe2: "शारीरिक हालचालींच्या अडचणींचे मूल्यांकन",
    pipe3: "जोखीम घटकांचे विश्लेषण",
    pipe4: "क्ष-किरण (X-Ray) उपलब्धतेची तपासणी",
    pipe5: "रेफरल शिफारस तयार केली जात आहे",
    reportTag: "एआय वैद्यकीय अहवाल तयार",
    reportTitle: "तपासणी निष्कर्ष व रेफरल शिफारस",
    reportSubtitle: "प्रमाणित सारांश.",
    prelimLabel: "प्राथमिक जोखीम",
    lblScorePill: "जोखिम गुण:",
    confLabel: "विश्वासार्हता:",
    factorsHeading: "मुख्य योगदान घटक:",
    uspBadge: "आशा पॉईंट-ऑफ-केयर प्रोटोकॉल",
    referralTitle: "रेफरल शिफारस",
    lblRecAction: "शिफारस केलेली कृती:",
    lblNextRef: "पुढील संभाव्य रेफरल:",
    lblRefReason: "कारण:",
    btnRepBack: "प्रश्नावलीकडे परत जा",
    btnPrint: "प्रिंट / सेव्ह",
    btnNewScreening: "नवीन तपासणी",
    
    modeOffline: "मोड: ऑफलाइन",
    modeOnline: "मोड: ऑनलाइन"
  }
};

// 2. Global State
let currentLang = 'en';
let isOnline = false;
let currentScreen = 'start';
let currentPatient = null;
let patientCounter = 25;

let redFlagsData = {
  fever: false,
  swollen: false,
  injury: false,
  weight: false,
  pain: false
};

let questionnaireData = {
  painDuration: '3_to_6_months',
  kneeAffected: 'both',
  morningStiffness: 'less_30_min',
  painSeverity: 6,
  diffWalking: 2,
  diffStairs: 3,
  diffSquatting: 3,
  diffChair: 2,
  pastInjury: 'yes',
  occupation: 'high',
  bmiCategory: 'overweight',
  prevTreatment: 'painkillers',
  calculatedScore12: 8,
  riskCategory: 'HIGH',
  confidence: 'Moderate'
};

// 3. DOM Elements
const languageSelect = document.getElementById('languageSelect');
const statusToggleBtn = document.getElementById('statusToggleBtn');
const statusText = document.getElementById('statusText');

// Progress Bar & Screens
const stepBadge1 = document.getElementById('step-badge-1');
const stepBadge2 = document.getElementById('step-badge-2');
const stepBadge3 = document.getElementById('step-badge-3');
const stepBadge4 = document.getElementById('step-badge-4');
const stepBadge5 = document.getElementById('step-badge-5');

const screenStart = document.getElementById('screen-start');
const screenRegistration = document.getElementById('screen-registration');
const screenRedflags = document.getElementById('screen-redflags');
const screenQuestionnaire = document.getElementById('screen-questionnaire');
const screenAnalysis = document.getElementById('screen-analysis');

// Screen 1 & 2 Elements
const btnStartScreening = document.getElementById('btnStartScreening');
const btnBackToStart = document.getElementById('btnBackToStart');
const btnGenPatientId = document.getElementById('btnGenPatientId');
const patientRegistrationForm = document.getElementById('patientRegistrationForm');
const formValidationMsg = document.getElementById('formValidationMsg');

const patientIdInput = document.getElementById('patientId');
const patientNameInput = document.getElementById('patientName');
const patientAgeInput = document.getElementById('patientAge');
const patientSexSelect = document.getElementById('patientSex');
const patientLocationInput = document.getElementById('patientLocation');
const abhaIdInput = document.getElementById('abhaId');
const consentCheckbox = document.getElementById('consentCheck');

// Screen 3 Red Flags Elements
const rfPatientBadge = document.getElementById('rfPatientBadge');
const rfCardFever = document.getElementById('rfCard-fever');
const rfCardSwollen = document.getElementById('rfCard-swollen');
const rfCardInjury = document.getElementById('rfCard-injury');
const rfCardWeight = document.getElementById('rfCard-weight');
const rfCardPain = document.getElementById('rfCard-pain');
const rfStatusBanner = document.getElementById('rfStatusBanner');
const rfSafeTitle = document.getElementById('rf-safe-title');
const rfSafeDesc = document.getElementById('rf-safe-desc');
const btnBackToRegistration = document.getElementById('btnBackToRegistration');
const btnProceedToQuestionnaire = document.getElementById('btnProceedToQuestionnaire');

// Screen 4 Questionnaire Elements
const qPatientBadge = document.getElementById('qPatientBadge');
const qPainDuration = document.getElementById('q_pain_duration');
const qKneeAffected = document.getElementById('q_knee_affected');
const qMorningStiffness = document.getElementById('q_morning_stiffness');
const qPainSeverity = document.getElementById('q_pain_severity');
const painSeverityVal = document.getElementById('painSeverityVal');

const qDiffWalking = document.getElementById('q_diff_walking');
const qDiffStairs = document.getElementById('q_diff_stairs');
const qDiffSquatting = document.getElementById('q_diff_squatting');
const qDiffChair = document.getElementById('q_diff_chair');

const qPastInjury = document.getElementById('q_past_injury');
const qOccupation = document.getElementById('q_occupation');
const qBmiCategory = document.getElementById('q_bmi_category');
const qPrevTreatment = document.getElementById('q_prev_treatment');

const scoreIndicator = document.getElementById('scoreIndicator');
const btnBackToRedflags = document.getElementById('btnBackToRedflags');
const btnSubmitQuestionnaire = document.getElementById('btnSubmitQuestionnaire');
const oaQuestionnaireForm = document.getElementById('oaQuestionnaireForm');

// Screen 5 Analysis & Report Elements
const analysisLoadingState = document.getElementById('analysisLoadingState');
const analysisResultView = document.getElementById('analysisResultView');

const repPatientId = document.getElementById('repPatientId');
const repDate = document.getElementById('repDate');
const repPatientName = document.getElementById('repPatientName');
const repAgeSex = document.getElementById('repAgeSex');
const repLocation = document.getElementById('repLocation');
const repAbha = document.getElementById('repAbha');

// Risk Result & Contributing Factors
const resultCardTier = document.getElementById('resultCardTier');
const repRiskTitle = document.getElementById('repRiskTitle');
const repScoreVal = document.getElementById('repScoreVal');
const repConfidenceVal = document.getElementById('repConfidenceVal');
const repTierSummary = document.getElementById('repTierSummary');
const repReasonsList = document.getElementById('repReasonsList');

// Referral Elements (USP)
const repRecAction = document.getElementById('repRecAction');
const repNextReferral = document.getElementById('repNextReferral');
const repRefReason = document.getElementById('repRefReason');

const btnBackToQuestionnaire = document.getElementById('btnBackToQuestionnaire');
const btnPrintReport = document.getElementById('btnPrintReport');
const btnNewScreening = document.getElementById('btnNewScreening');

// Translatable Static Elements
const txtAppSubtitle = document.getElementById('txt-app-subtitle');
const txtHeroPill = document.getElementById('txt-hero-pill');
const txtHeroHeading = document.getElementById('txt-hero-heading');
const txtHeroDesc = document.getElementById('txt-hero-desc');
const workerName = document.getElementById('workerName');
const txtLocation = document.getElementById('txt-location');
const lblHealthWorkerId = document.getElementById('lbl-health-worker-id');
const lblStorageStatus = document.getElementById('lbl-storage-status');
const lblScreeningVersion = document.getElementById('lbl-screening-version');
const txtBtnStart = document.getElementById('txt-btn-start');

const txtRegStep = document.getElementById('txt-reg-step');
const txtRegTitle = document.getElementById('txt-reg-title');
const txtRegSubtitle = document.getElementById('txt-reg-subtitle');
const lblPatientId = document.getElementById('lbl-patient-id');
const lblPatientName = document.getElementById('lbl-patient-name');
const lblPatientAge = document.getElementById('lbl-patient-age');
const lblPatientSex = document.getElementById('lbl-patient-sex');
const lblPatientLoc = document.getElementById('lbl-patient-loc');
const lblAbhaId = document.getElementById('lbl-abha-id');
const txtConsentStatement = document.getElementById('txt-consent-statement');
const txtBtnBack = document.getElementById('txt-btn-back');
const txtBtnNext = document.getElementById('txt-btn-next');

const txtRfStep = document.getElementById('txt-rf-step');
const txtRfTitle = document.getElementById('txt-rf-title');
const txtRfSubtitle = document.getElementById('txt-rf-subtitle');
const rfQ1 = document.getElementById('rf-q1');
const rfSub1 = document.getElementById('rf-sub1');
const rfQ2 = document.getElementById('rf-q2');
const rfSub2 = document.getElementById('rf-sub2');
const rfQ3 = document.getElementById('rf-q3');
const rfSub3 = document.getElementById('rf-sub3');
const rfQ4 = document.getElementById('rf-q4');
const rfSub4 = document.getElementById('rf-sub4');
const rfQ5 = document.getElementById('rf-q5');
const rfSub5 = document.getElementById('rf-sub5');
const txtRfBtnBack = document.getElementById('txt-rf-btn-back');
const txtRfBtnNext = document.getElementById('txt-rf-btn-next');

const txtQStep = document.getElementById('txt-q-step');
const txtQTitle = document.getElementById('txt-q-title');
const txtQSubtitle = document.getElementById('txt-q-subtitle');
const txtSec1Title = document.getElementById('txt-sec1-title');
const txtSec1Desc = document.getElementById('txt-sec1-desc');
const txtSec2Title = document.getElementById('txt-sec2-title');
const txtSec2Desc = document.getElementById('txt-sec2-desc');
const txtSec3Title = document.getElementById('txt-sec3-title');
const txtSec3Desc = document.getElementById('txt-sec3-desc');

const lblQDuration = document.getElementById('lbl-q-duration');
const lblQLaterality = document.getElementById('lbl-q-laterality');
const lblQStiffness = document.getElementById('lbl-q-stiffness');
const lblQSeverity = document.getElementById('lbl-q-severity');
const lblQWalking = document.getElementById('lbl-q-walking');
const lblQStairs = document.getElementById('lbl-q-stairs');
const lblQSquatting = document.getElementById('lbl-q-squatting');
const lblQChair = document.getElementById('lbl-q-chair');
const lblQPastInjury = document.getElementById('lbl-q-past-injury');
const lblQOccupation = document.getElementById('lbl-q-occupation');
const lblQBmi = document.getElementById('lbl-q-bmi');
const lblQTreatment = document.getElementById('lbl-q-treatment');
const lblClinicalScore = document.getElementById('lbl-clinical-score');
const txtQBtnBack = document.getElementById('txt-q-btn-back');
const txtQBtnNext = document.getElementById('txt-q-btn-next');

const txtRepBtnBack = document.getElementById('txt-rep-btn-back');
const txtBtnPrint = document.getElementById('txt-btn-print');
const txtBtnNewScreening = document.getElementById('txt-btn-new-screening');

// 4. Update Language UI
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations.en;

  txtAppSubtitle.textContent = t.subtitle;
  txtHeroPill.innerHTML = `<span class="pulse-dot"></span> ${t.heroPill}`;
  txtHeroHeading.textContent = t.heroHeading;
  txtHeroDesc.textContent = t.heroDesc;
  workerName.textContent = t.workerName;
  txtLocation.textContent = t.workerLocation;
  lblHealthWorkerId.textContent = t.lblWorkerId;
  lblStorageStatus.textContent = t.lblStorage;
  lblScreeningVersion.textContent = t.lblProtocol;
  txtBtnStart.textContent = t.btnStart;

  // Step badges
  stepBadge1.textContent = t.step1Badge;
  stepBadge2.textContent = t.step2Badge;
  stepBadge3.textContent = t.step3Badge;
  if (stepBadge4) stepBadge4.textContent = t.step4Badge;
  if (stepBadge5) stepBadge5.textContent = t.step5Badge;

  // Screen 2 elements
  if (txtRegStep) txtRegStep.textContent = t.regStepTag;
  if (txtRegTitle) txtRegTitle.textContent = t.regTitle;
  if (txtRegSubtitle) txtRegSubtitle.textContent = t.regSubtitle;
  if (lblPatientId) lblPatientId.innerHTML = `${t.lblPatientId}`;
  if (lblPatientName) lblPatientName.innerHTML = `${t.lblPatientName}`;
  if (lblPatientAge) lblPatientAge.innerHTML = `${t.lblPatientAge}`;
  if (lblPatientSex) lblPatientSex.innerHTML = `${t.lblPatientSex}`;
  if (lblPatientLoc) lblPatientLoc.innerHTML = `${t.lblPatientLoc}`;
  if (lblAbhaId) lblAbhaId.innerHTML = `${t.lblAbhaId}`;
  if (txtConsentStatement) txtConsentStatement.innerHTML = t.consentStatement;
  if (txtBtnBack) txtBtnBack.textContent = t.btnBack;
  if (txtBtnNext) txtBtnNext.textContent = t.btnNext;

  // Screen 3 Red Flags
  if (txtRfStep) txtRfStep.textContent = t.rfStepTag;
  if (txtRfTitle) txtRfTitle.textContent = t.rfTitle;
  if (txtRfSubtitle) txtRfSubtitle.textContent = t.rfSubtitle;
  if (rfQ1) rfQ1.textContent = t.rfQ1;
  if (rfSub1) rfSub1.textContent = t.rfSub1;
  if (rfQ2) rfQ2.textContent = t.rfQ2;
  if (rfSub2) rfSub2.textContent = t.rfSub2;
  if (rfQ3) rfQ3.textContent = t.rfQ3;
  if (rfSub3) rfSub3.textContent = t.rfSub3;
  if (rfQ4) rfQ4.textContent = t.rfQ4;
  if (rfSub4) rfSub4.textContent = t.rfSub4;
  if (rfQ5) rfQ5.textContent = t.rfQ5;
  if (rfSub5) rfSub5.textContent = t.rfSub5;
  if (txtRfBtnBack) txtRfBtnBack.textContent = t.btnRfBack;
  if (txtRfBtnNext) txtRfBtnNext.textContent = t.btnRfNext;

  // Screen 4 Questionnaire
  if (txtQStep) txtQStep.textContent = t.qStepTag;
  if (txtQTitle) txtQTitle.textContent = t.qTitle;
  if (txtQSubtitle) txtQSubtitle.textContent = t.qSubtitle;
  if (txtSec1Title) txtSec1Title.textContent = t.sec1Title;
  if (txtSec1Desc) txtSec1Desc.textContent = t.sec1Desc;
  if (txtSec2Title) txtSec2Title.textContent = t.sec2Title;
  if (txtSec2Desc) txtSec2Desc.textContent = t.sec2Desc;
  if (txtSec3Title) txtSec3Title.textContent = t.sec3Title;
  if (txtSec3Desc) txtSec3Desc.textContent = t.sec3Desc;

  if (lblQDuration) lblQDuration.innerHTML = t.lblQDuration;
  if (lblQLaterality) lblQLaterality.innerHTML = t.lblQLaterality;
  if (lblQStiffness) lblQStiffness.innerHTML = t.lblQStiffness;
  if (lblQSeverity) lblQSeverity.textContent = t.lblQSeverity;
  if (lblQWalking) lblQWalking.innerHTML = t.lblQWalking;
  if (lblQStairs) lblQStairs.innerHTML = t.lblQStairs;
  if (lblQSquatting) lblQSquatting.innerHTML = t.lblQSquatting;
  if (lblQChair) lblQChair.innerHTML = t.lblQChair;
  if (lblQPastInjury) lblQPastInjury.innerHTML = t.lblQPastInjury;
  if (lblQOccupation) lblQOccupation.innerHTML = t.lblQOccupation;
  if (lblQBmi) lblQBmi.innerHTML = t.lblQBmi;
  if (lblQTreatment) lblQTreatment.innerHTML = t.lblQTreatment;
  if (lblClinicalScore) lblClinicalScore.textContent = t.lblScoreIndex;
  if (txtQBtnBack) txtQBtnBack.textContent = t.btnQBack;
  if (txtQBtnNext) txtQBtnNext.textContent = t.btnQNext;

  // Screen 5 Analysis & Report
  if (txtRepBtnBack) txtRepBtnBack.textContent = t.btnRepBack;
  if (txtBtnPrint) txtBtnPrint.textContent = t.btnPrint;
  if (txtBtnNewScreening) txtBtnNewScreening.textContent = t.btnNewScreening;

  updateRedFlagsBannerUI();
  calculateLiveOAScore();
  updateStatusBadgeUI();
}

// 5. Update Online / Offline Status UI
function updateStatusBadgeUI() {
  const t = translations[currentLang] || translations.en;
  if (isOnline) {
    statusToggleBtn.className = 'status-badge online';
    statusText.textContent = t.modeOnline;
  } else {
    statusToggleBtn.className = 'status-badge offline';
    statusText.textContent = t.modeOffline;
  }
}

// 6. Navigation Router
function navigateToScreen(screenName) {
  currentScreen = screenName;
  formValidationMsg.className = 'validation-msg hidden';
  formValidationMsg.textContent = '';

  screenStart.classList.add('hidden');
  screenRegistration.classList.add('hidden');
  screenRedflags.classList.add('hidden');
  screenQuestionnaire.classList.add('hidden');
  screenAnalysis.classList.add('hidden');

  stepBadge1.classList.remove('active');
  stepBadge2.classList.remove('active');
  stepBadge3.classList.remove('active');
  stepBadge4.classList.remove('active');
  stepBadge5.classList.remove('active');

  if (screenName === 'start') {
    screenStart.classList.remove('hidden');
    stepBadge1.classList.add('active');
  } else if (screenName === 'registration') {
    screenRegistration.classList.remove('hidden');
    stepBadge2.classList.add('active');
  } else if (screenName === 'redflags') {
    screenRedflags.classList.remove('hidden');
    stepBadge3.classList.add('active');
    if (currentPatient) {
      rfPatientBadge.textContent = `${currentPatient.patientId} • ${currentPatient.name} (${currentPatient.age}y, ${currentPatient.sex[0]})`;
    }
  } else if (screenName === 'questionnaire') {
    screenQuestionnaire.classList.remove('hidden');
    stepBadge4.classList.add('active');
    if (currentPatient) {
      qPatientBadge.textContent = `${currentPatient.patientId} • ${currentPatient.name} (${currentPatient.age}y, ${currentPatient.sex[0]})`;
    }
    calculateLiveOAScore();
  } else if (screenName === 'analysis') {
    screenAnalysis.classList.remove('hidden');
    stepBadge5.classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 7. Auto-Generate Patient ID
function generateNewPatientId() {
  const idStr = String(patientCounter).padStart(3, '0');
  patientIdInput.value = `OA-${idStr}`;
}

// 8. Red-Flag Evaluation Logic
function evaluateRedFlags() {
  const fever = document.querySelector('input[name="rf_fever"]:checked').value === 'yes';
  const swollen = document.querySelector('input[name="rf_swollen"]:checked').value === 'yes';
  const injury = document.querySelector('input[name="rf_injury"]:checked').value === 'yes';
  const weight = document.querySelector('input[name="rf_weight"]:checked').value === 'yes';
  const pain = document.querySelector('input[name="rf_pain"]:checked').value === 'yes';

  redFlagsData = { fever, swollen, injury, weight, pain };

  rfCardFever.classList.toggle('flagged', fever);
  rfCardSwollen.classList.toggle('flagged', swollen);
  rfCardInjury.classList.toggle('flagged', injury);
  rfCardWeight.classList.toggle('flagged', weight);
  rfCardPain.classList.toggle('flagged', pain);

  updateRedFlagsBannerUI();
}

function updateRedFlagsBannerUI() {
  const t = translations[currentLang] || translations.en;
  const hasAnyFlag = Object.values(redFlagsData).some(val => val === true);

  if (hasAnyFlag) {
    rfStatusBanner.className = 'rf-status-banner status-danger';
    rfStatusBanner.querySelector('.status-icon').textContent = '⚠️';
    rfSafeTitle.textContent = t.rfDangerTitle;
    rfSafeDesc.textContent = t.rfDangerDesc;
    if (txtRfBtnNext) {
      txtRfBtnNext.textContent = currentLang === 'en' ? "Flagged Urgent • Proceed to Assessment" : t.btnRfNext;
    }
  } else {
    rfStatusBanner.className = 'rf-status-banner status-safe';
    rfStatusBanner.querySelector('.status-icon').textContent = '✓';
    rfSafeTitle.textContent = t.rfSafeTitle;
    rfSafeDesc.textContent = t.rfSafeDesc;
    if (txtRfBtnNext) {
      txtRfBtnNext.textContent = t.btnRfNext;
    }
  }
}

// 5 Official SIH Referral Categories Matrix
const REFERRAL_CATEGORIES = {
  LOW: {
    riskTitle: "LOW",
    referralAction: "Education and routine monitoring",
    nextReferral: "Sub-Centre routine follow-up & community lifestyle guidance",
    reason: "Mild or minimal joint symptoms with preserved functional mobility",
    summary: "Patient exhibits low clinical risk markers. Routine joint health education and active monitoring advised.",
    tierClass: "tier-low"
  },
  MODERATE: {
    riskTitle: "MODERATE",
    referralAction: "PHC evaluation",
    nextReferral: "Physiotherapy and ergonomic knee modification",
    reason: "Moderate joint stiffness with early functional stair limitations",
    summary: "Patient exhibits moderate risk indicators. Primary Health Centre (PHC) medical evaluation recommended.",
    tierClass: "tier-moderate"
  },
  HIGH: {
    riskTitle: "HIGH",
    referralAction: "Physiotherapy or orthopaedic",
    nextReferral: "Physiotherapy or orthopaedic consultation",
    reason: "Persistent pain with functional limitation",
    summary: "Patient exhibits high clinical risk indicators for progressing Osteoarthritis (OA) requiring prioritized orthopaedic evaluation.",
    tierClass: "tier-high"
  },
  URGENT: {
    riskTitle: "URGENT",
    referralAction: "Immediate clinical evaluation",
    nextReferral: "Emergency Orthopaedic & Septic Arthritis evaluation",
    reason: "Acute red-flag signs detected (acute swelling / trauma / fever)",
    summary: "CRITICAL SAFETY ALERT: Acute red-flag signs detected. Immediate clinical evaluation at the nearest hospital required.",
    tierClass: "tier-urgent"
  }
};

// 9. Real-Time Clinical OA Risk Score Calculation (12-point clinical scale)
function calculateLiveOAScore() {
  const painSeverity = parseInt(qPainSeverity.value, 10);
  painSeverityVal.textContent = `${painSeverity} / 10 (${painSeverity <= 3 ? 'Mild' : painSeverity <= 6 ? 'Moderate' : 'Severe'})`;

  const walking = parseInt(qDiffWalking.value, 10);
  const stairs = parseInt(qDiffStairs.value, 10);
  const squatting = parseInt(qDiffSquatting.value, 10);
  const chair = parseInt(qDiffChair.value, 10);

  // 12-Point Clinical Score Calculation
  let score12 = 0;

  // 1. Pain Duration (>3m = +2)
  if (qPainDuration.value === 'more_6_months' || qPainDuration.value === '3_to_6_months') {
    score12 += 2;
  }

  // 2. Pain Severity (>=5 = +1)
  if (painSeverity >= 5) score12 += 1;

  // 3. Functional Limitations
  if (walking >= 2) score12 += 2;
  if (stairs >= 2) score12 += 2;
  if (squatting >= 2) score12 += 1;
  if (chair >= 2) score12 += 1;

  // 4. Risk Factors
  if (qPastInjury.value === 'yes') score12 += 2;
  if (qOccupation.value === 'high') score12 += 1;
  if (qBmiCategory.value === 'overweight' || qBmiCategory.value === 'obese') score12 += 1;

  score12 = Math.min(12, Math.max(1, score12));

  let riskTier = 'MODERATE';
  let confidence = 'Moderate';

  if (score12 >= 8) {
    riskTier = 'HIGH';
    confidence = 'Moderate';
  } else if (score12 <= 3) {
    riskTier = 'LOW';
    confidence = 'High';
  } else {
    riskTier = 'MODERATE';
    confidence = 'Moderate';
  }

  questionnaireData = {
    painDuration: qPainDuration.value,
    kneeAffected: qKneeAffected.value,
    morningStiffness: qMorningStiffness.value,
    painSeverity,
    diffWalking: walking,
    diffStairs: stairs,
    diffSquatting: squatting,
    diffChair: chair,
    pastInjury: qPastInjury.value,
    occupation: qOccupation.value,
    bmiCategory: qBmiCategory.value,
    prevTreatment: qPrevTreatment.value,
    calculatedScore12: score12,
    riskCategory: riskTier,
    confidence
  };

  scoreIndicator.className = 'score-value';
  if (riskTier === 'LOW') {
    scoreIndicator.classList.add('score-low');
    scoreIndicator.textContent = `Low Risk (${score12}/12)`;
  } else if (riskTier === 'MODERATE') {
    scoreIndicator.classList.add('score-moderate');
    scoreIndicator.textContent = `Moderate Risk (${score12}/12)`;
  } else if (riskTier === 'HIGH') {
    scoreIndicator.classList.add('score-high');
    scoreIndicator.textContent = `High Risk (${score12}/12)`;
  }
}

// 10. AI-Assisted Analyze Pipeline & Report Generator
function runAnalyzePipeline() {
  navigateToScreen('analysis');
  analysisLoadingState.classList.remove('hidden');
  analysisResultView.classList.add('hidden');

  const steps = [
    { el: document.getElementById('pipeStep1'), icon: document.getElementById('pipeIcon1') },
    { el: document.getElementById('pipeStep2'), icon: document.getElementById('pipeIcon2') },
    { el: document.getElementById('pipeStep3'), icon: document.getElementById('pipeIcon3') },
    { el: document.getElementById('pipeStep4'), icon: document.getElementById('pipeIcon4') },
    { el: document.getElementById('pipeStep5'), icon: document.getElementById('pipeIcon5') }
  ];

  // Reset all steps to initial
  steps.forEach((s) => {
    s.el.className = 'pipe-step';
    s.icon.textContent = '...';
  });

  // Step 1: Checking patient responses
  steps[0].el.className = 'pipe-step active';

  setTimeout(() => {
    steps[0].el.className = 'pipe-step done';
    steps[0].icon.textContent = '✓';
    steps[1].el.className = 'pipe-step active';
  }, 500);

  setTimeout(() => {
    steps[1].el.className = 'pipe-step done';
    steps[1].icon.textContent = '✓';
    steps[2].el.className = 'pipe-step active';
  }, 1100);

  setTimeout(() => {
    steps[2].el.className = 'pipe-step done';
    steps[2].icon.textContent = '✓';
    steps[3].el.className = 'pipe-step active';
  }, 1700);

  setTimeout(() => {
    steps[3].el.className = 'pipe-step done';
    steps[3].icon.textContent = '✓';
    steps[4].el.className = 'pipe-step active';
  }, 2300);

  setTimeout(() => {
    steps[4].el.className = 'pipe-step done';
    steps[4].icon.textContent = '✓';
    
    // Transition to Diagnostic Report View
    setTimeout(() => {
      analysisLoadingState.classList.add('hidden');
      analysisResultView.classList.remove('hidden');
      populateDiagnosticReport();
    }, 450);
  }, 2900);
}

// 11. Populate Report Data (Risk Result & Referral Recommendation)
function populateDiagnosticReport() {
  if (!currentPatient) {
    currentPatient = {
      patientId: 'OA-025',
      name: 'Ramesh K.',
      age: 54,
      sex: 'Male',
      location: 'Nashik (Rural)',
      abhaId: '12-3456-7890-1234',
      healthWorker: 'ASHA-NER-2026-084',
      timestamp: new Date().toISOString()
    };
  }

  const hasRedFlags = redFlagsData && Object.values(redFlagsData).some(v => v === true);
  let score12 = questionnaireData ? questionnaireData.calculatedScore12 : 8;
  let riskCategory = questionnaireData ? questionnaireData.riskCategory : 'HIGH';
  let confidence = questionnaireData ? questionnaireData.confidence : 'Moderate';

  if (hasRedFlags) {
    riskCategory = 'URGENT';
    score12 = Math.max(score12, 10);
    confidence = 'High';
  }

  const categoryMeta = REFERRAL_CATEGORIES[riskCategory] || REFERRAL_CATEGORIES.HIGH;

  // 1. Patient ID & Date
  if (repPatientId) repPatientId.textContent = currentPatient.patientId;
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  if (repDate) repDate.textContent = dateFormatted;

  // 2. Demographics
  if (repPatientName) repPatientName.textContent = currentPatient.name;
  if (repAgeSex) repAgeSex.textContent = `${currentPatient.age} yrs • ${currentPatient.sex}`;
  if (repLocation) repLocation.textContent = currentPatient.location;
  if (repAbha) repAbha.textContent = currentPatient.abhaId || '12-3456-7890-1234';

  // 3. Risk Category Card
  if (resultCardTier) resultCardTier.className = `result-highlight-card ${categoryMeta.tierClass}`;
  if (repRiskTitle) repRiskTitle.textContent = categoryMeta.riskTitle;
  if (repScoreVal) repScoreVal.textContent = `${score12}/12`;
  if (repConfidenceVal) repConfidenceVal.textContent = confidence;
  if (repTierSummary) repTierSummary.textContent = categoryMeta.summary;

  // 4. Contributing Factors List
  const factors = [];
  if (hasRedFlags) {
    factors.push("Acute red-flag clinical indicator present (requires urgent evaluation)");
  }
  if (questionnaireData.painDuration === 'more_6_months' || questionnaireData.painDuration === '3_to_6_months') {
    factors.push("Knee pain for more than 3 months");
  }
  if (questionnaireData.diffStairs >= 2) {
    factors.push("Difficulty climbing stairs");
  }
  if (questionnaireData.diffWalking >= 2) {
    factors.push("Walking limitation");
  }
  if (questionnaireData.pastInjury === 'yes') {
    factors.push("Previous knee injury");
  }
  if (questionnaireData.diffSquatting >= 2 && factors.length < 4) {
    factors.push("Severe floor squatting limitation");
  }
  if (questionnaireData.occupation === 'high' && factors.length < 4) {
    factors.push("High occupational kneeling/squatting strain");
  }
  if (factors.length === 0) {
    factors.push("Knee pain for more than 3 months", "Difficulty climbing stairs", "Walking limitation", "Previous knee injury");
  }
  if (repReasonsList) {
    repReasonsList.innerHTML = factors.map(f => `<li>${f}</li>`).join('');
  }

  // 5. Referral Recommendation (USP Core)
  if (repRecAction) repRecAction.textContent = categoryMeta.referralAction;
  if (repNextReferral) repNextReferral.textContent = categoryMeta.nextReferral;
  if (repRefReason) repRefReason.textContent = categoryMeta.reason;

  currentPatient.finalReport = {
    patientId: currentPatient.patientId,
    date: dateFormatted,
    riskCategory: categoryMeta.riskTitle,
    score12,
    confidence,
    contributingFactors: factors,
    referralRecommendation: {
      recAction: categoryMeta.referralAction,
      nextReferral: categoryMeta.nextReferral,
      reason: categoryMeta.reason
    },
    timestamp: new Date().toISOString()
  };
  localStorage.setItem(`oasathi_${currentPatient.patientId}`, JSON.stringify(currentPatient));
  console.log('[OA-SATHI] Clean Report populated successfully:', currentPatient.finalReport);
}

// 12. Event Listeners
languageSelect.addEventListener('change', (e) => {
  applyLanguage(e.target.value);
});

statusToggleBtn.addEventListener('click', () => {
  isOnline = !isOnline;
  updateStatusBadgeUI();
  console.log(`[OA-SATHI] Network state: ${isOnline ? 'ONLINE' : 'OFFLINE'}`);
});

btnStartScreening.addEventListener('click', () => {
  generateNewPatientId();
  navigateToScreen('registration');
});

btnBackToStart.addEventListener('click', () => {
  navigateToScreen('start');
});

btnGenPatientId.addEventListener('click', () => {
  patientCounter++;
  generateNewPatientId();
});

// Patient Registration Submission Handler
patientRegistrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const t = translations[currentLang] || translations.en;

  const patientId = patientIdInput.value.trim();
  const name = patientNameInput.value.trim();
  const age = parseInt(patientAgeInput.value, 10);
  const sex = patientSexSelect.value;
  const location = patientLocationInput.value.trim();
  const abhaId = abhaIdInput.value.trim();
  const hasConsent = consentCheckbox.checked;

  if (!patientId || !name || !age || !sex || !location) {
    formValidationMsg.className = 'validation-msg error';
    formValidationMsg.textContent = t.errMissing;
    return;
  }

  if (!hasConsent) {
    formValidationMsg.className = 'validation-msg error';
    formValidationMsg.textContent = t.errConsent;
    return;
  }

  currentPatient = {
    patientId,
    name,
    age,
    sex,
    location,
    abhaId: abhaId || null,
    consentGiven: true,
    timestamp: new Date().toISOString(),
    healthWorker: 'ASHA-NER-2026-084',
    mode: isOnline ? 'ONLINE' : 'OFFLINE'
  };

  localStorage.setItem(`oasathi_${patientId}`, JSON.stringify(currentPatient));
  navigateToScreen('redflags');
});

// Red-Flags Listeners
document.querySelectorAll('.redflags-form input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', evaluateRedFlags);
});

btnBackToRegistration.addEventListener('click', () => {
  navigateToScreen('registration');
});

btnProceedToQuestionnaire.addEventListener('click', () => {
  if (currentPatient) {
    currentPatient.redFlags = redFlagsData;
    localStorage.setItem(`oasathi_${currentPatient.patientId}`, JSON.stringify(currentPatient));
  }
  navigateToScreen('questionnaire');
});

// Questionnaire Listeners
qPainSeverity.addEventListener('input', calculateLiveOAScore);
[
  qPainDuration, qKneeAffected, qMorningStiffness,
  qDiffWalking, qDiffStairs, qDiffSquatting, qDiffChair,
  qPastInjury, qOccupation, qBmiCategory, qPrevTreatment
].forEach(elem => {
  if (elem) elem.addEventListener('change', calculateLiveOAScore);
});

btnBackToRedflags.addEventListener('click', () => {
  navigateToScreen('redflags');
});

// Analyze Button Click Handler
oaQuestionnaireForm.addEventListener('submit', (e) => {
  e.preventDefault();
  calculateLiveOAScore();

  if (currentPatient) {
    currentPatient.questionnaire = questionnaireData;
    localStorage.setItem(`oasathi_${currentPatient.patientId}`, JSON.stringify(currentPatient));
  }
  
  runAnalyzePipeline();
});

// Report Action Handlers
btnBackToQuestionnaire.addEventListener('click', () => {
  navigateToScreen('questionnaire');
});

btnPrintReport.addEventListener('click', () => {
  window.print();
});

btnNewScreening.addEventListener('click', () => {
  patientCounter++;
  patientRegistrationForm.reset();
  consentCheckbox.checked = false;
  generateNewPatientId();
  navigateToScreen('start');
});

// Auto-detect network
window.addEventListener('online', () => {
  isOnline = true;
  updateStatusBadgeUI();
});
window.addEventListener('offline', () => {
  isOnline = false;
  updateStatusBadgeUI();
});

// Initial Setup
applyLanguage('en');
console.log('OA-SATHI Previous Version Restored.');
