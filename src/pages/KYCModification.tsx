import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, AlertCircle, FileText, Languages } from "lucide-react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

type Language = 'en' | 'hi';

const KYCModification = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('kycLanguage') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('kycLanguage', lang);
  };

  const content = {
    en: {
      title: "How to Correct Name, Father's Name, and Date of Birth on PAN, Aadhaar & Bank Records",
      subtitle: "Complete 2025 Guide",
      metaTitle: "How to Correct Name, Father's Name, and DOB on PAN, Aadhaar & Bank Records — Step-by-Step 2025 Guide",
      metaDescription: "A complete 2025 guide to update or correct your name, father's name, and date of birth on PAN, Aadhaar, and bank records. Includes documents required, online/offline steps, pro tips, timelines, and sample application letter.",
      overview: {
        title: "Overview",
        p1: "Inconsistent personal details across PAN, Aadhaar, and bank accounts can cause serious KYC issues — blocking tax refunds, mutual fund transactions, and even bank transfers.",
        p2: "This guide walks you through, step by step, how to correct or modify your Name, Father's Name, and Date of Birth across PAN, Aadhaar, and bank records, including documentation, timelines, and pro tips to avoid rejection."
      },
      correctOrder: {
        title: "The Correct Order to Fix Details",
        intro: "Before you start:",
        steps: [
          "Decide on the final, correct version of your name and DOB (as per your passport or birth certificate).",
          "Fix government IDs first — PAN and Aadhaar — since banks rely on them for KYC.",
          "Update your bank records last, once PAN and Aadhaar reflect the same information."
        ],
        note: "This sequence ensures smooth verification and avoids repeated rejections."
      },
      panSection: {
        heading: "Part A — Update Details on PAN (Name / Father's Name / DOB)",
        whatYouCanUpdate: {
          title: "What You Can Update",
          items: [
            "Name (spelling correction, adding/removing initials, post-marriage change)",
            "Father's name (correction or spelling error)",
            "Date of Birth (as per valid proof)"
          ]
        },
        documents: {
          title: "Documents Required",
          items: [
            "Name/Father's Name: Aadhaar, Passport, Voter ID, Driving Licence, Marriage Certificate, Gazette Notification, Court Order",
            "DOB: Birth Certificate, Passport, School Certificate, Pension PPO, Service ID"
          ]
        },
        onlineSteps: {
          title: "Step-by-Step (Online)",
          steps: [
            "Go to the Protean (NSDL) or UTIITSL PAN correction portal.",
            "Select \"Changes or Correction in existing PAN data.\"",
            "Enter your PAN, choose the field(s) to be corrected.",
            "Upload valid supporting documents showing correct details.",
            "Pay the processing fee (approx ₹110 for Indian address).",
            "Submit and note the Acknowledgment/Token Number.",
            "Track status on the same portal and download updated e-PAN once approved."
          ]
        },
        offline: {
          title: "Offline Process",
          text: "If physical submission is required, print the filled form, sign it, attach self-attested copies of documents, and courier it to the address mentioned on the acknowledgment slip."
        },
        timeline: {
          title: "Timeline",
          items: [
            "Processing usually takes 7–15 working days.",
            "Updated e-PAN can be downloaded for free once approved."
          ]
        },
        proTips: {
          title: "Pro Tips for PAN Correction",
          items: [
            "Keep PAN, Aadhaar, and bank name format identical.",
            "For legal name changes (marriage or gazette), attach official proof.",
            "Ensure clear scans of documents — blurred uploads often get rejected.",
            "Keep your acknowledgment number handy; banks sometimes ask for it as interim proof."
          ]
        }
      },
      aadhaarSection: {
        heading: "Part B — Update Details on Aadhaar (Name / Father's Name / DOB)",
        whereToUpdate: {
          title: "Where to Update",
          intro: "You can update Aadhaar details through:",
          items: [
            "Online: https://myaadhaar.uidai.gov.in",
            "Offline: Aadhaar Seva Kendra (for major updates)"
          ]
        },
        whatYouCanChange: {
          title: "What You Can Change Online",
          items: [
            "Minor name corrections (spelling, order change, small edits)",
            "Address (fully supported)"
          ],
          note: "For major changes like legal name change, father's name update, or DOB correction, visit an Aadhaar Seva Kendra with valid proofs."
        },
        documents: {
          title: "Accepted Documents",
          items: [
            "Name/Father's Name: Passport, PAN, Marriage Certificate, Gazette Notification, Court Order",
            "Date of Birth: Birth Certificate, Passport, School Certificate, PPO, or Government-issued ID with DOB"
          ]
        },
        onlineSteps: {
          title: "Step-by-Step (Online)",
          steps: [
            "Visit https://myaadhaar.uidai.gov.in",
            "Log in with Aadhaar number and OTP.",
            "Select \"Update Aadhaar Online\" → Name/DOB/Father's Name.",
            "Upload your valid Proof of Identity (PoI).",
            "Pay ₹50 (UPI/Netbanking/Debit Card).",
            "Note down your Update Request Number (URN) for tracking."
          ],
          trackText: "Track status: Check Aadhaar Update Status"
        },
        offlineSteps: {
          title: "Step-by-Step (Offline)",
          steps: [
            "Book an appointment or walk into your nearest Aadhaar Seva Kendra.",
            "Fill and submit the update form with original documents.",
            "Pay ₹50 and collect the acknowledgment slip with URN.",
            "Download updated e-Aadhaar once approved."
          ]
        },
        timeline: {
          title: "Timeline",
          text: "Typically 7–15 working days for approval and database sync."
        },
        proTips: {
          title: "Pro Tips for Aadhaar Update",
          items: [
            "UIDAI allows limited lifetime updates for Name (2x), DOB (1x), Gender (1x).",
            "Use strong documents like Passport or Birth Certificate for DOB corrections.",
            "Ensure PAN and Aadhaar names are identical — mismatched formats can block linking or refunds."
          ]
        }
      },
      bankSection: {
        heading: "Part C — Update Details in Bank Records (Name / Father's Name / DOB)",
        whenToUpdate: {
          title: "When to Update",
          text: "Banks require updated PAN and Aadhaar as proof before they change KYC details. Update those first, then move to your bank."
        },
        documents: {
          title: "Documents Required",
          items: [
            "Updated PAN and Aadhaar (showing corrected details)",
            "Marriage Certificate / Gazette Notification / Affidavit (if applicable)",
            "Self-attested copies + originals for verification"
          ]
        },
        steps: {
          title: "Step-by-Step (Bank Process)",
          steps: [
            "Visit your home branch or download the Change of Name/KYC Form.",
            "Fill in your account number and new details.",
            "Attach updated documents and submit in person (some banks accept via NetBanking).",
            "Ask for an acknowledgment slip or stamped copy.",
            "Request a reissued passbook or statement showing updated details."
          ]
        },
        timeline: {
          title: "Timeline",
          items: [
            "2–10 working days (varies by bank).",
            "Some private banks process instantly if KYC matches government records."
          ]
        },
        proTips: {
          title: "Pro Tips for Bank Updates",
          items: [
            "Carry originals for verification.",
            "Request updates at the Customer ID (CIF) level so all accounts reflect the change.",
            "If changing name due to marriage/legal reasons, always attach the official proof.",
            "Reorder chequebook/debit card after name update if required."
          ]
        }
      },
      sampleLetter: {
        title: "Sample Application Letter for Bank",
        content: `Date: DD/MM/YYYY

To,
The Branch Manager,
[Bank Name], [Branch]

Subject: Request for Correction of Name/Father's Name/DOB

Dear Sir/Madam,

I hold Account No. [XXXXXXXXXXXX] with your branch. I request correction of the following details in my bank records:

Existing Name: [Old Name]
New Name: [Correct Name]
Existing Father's Name: [Old Father's Name]
New Father's Name: [Correct Father's Name]
Existing DOB: [DD/MM/YYYY]
New DOB: [DD/MM/YYYY]

Enclosed:
1. Self-attested copy of updated Aadhaar and PAN
2. [Marriage Certificate / Gazette / Birth Certificate] (as applicable)

Kindly update my records and confirm once completed.

Sincerely,  
[Signature]  
[Name]  
[Mobile / Email]`
      },
      rejectionReasons: {
        title: "Common Reasons for Rejection",
        headers: ["Reason", "Fix"],
        rows: [
          ["Mismatch between requested name and proof", "Use consistent full name format"],
          ["Missing proof for legal name change", "Attach marriage certificate or gazette"],
          ["Blurry scans or low-res photos", "Upload clear documents under 2 MB"],
          ["Attempting major Aadhaar change online", "Visit Aadhaar Seva Kendra instead"]
        ]
      },
      smartTips: {
        title: "Smart Tips to Avoid Future KYC Issues",
        items: [
          "Maintain one canonical name format across all documents.",
          "Keep digital scans of all identity documents.",
          "Save acknowledgment numbers and URNs — they serve as interim proof.",
          "For complex cases (multiple changes or legal renames), get a gazette notification — it eliminates most future verification issues."
        ]
      },
      finalWords: {
        title: "Final Words",
        p1: "Updating your name, father's name, or date of birth across PAN, Aadhaar, and bank records might feel bureaucratic — but it's a one-time effort that pays off by eliminating KYC friction, refund delays, and compliance headaches.",
        p2: "Start with PAN, move to Aadhaar, and finish with your bank — and keep everything consistent. Once aligned, your entire financial life syncs seamlessly across systems."
      },
      usefulLinks: {
        title: "Useful Official Links",
        links: [
          { text: "Protean (NSDL) PAN Correction Portal", url: "https://www.protean-tinpan.com/" },
          { text: "UTIITSL PAN Portal", url: "https://www.pan.utiitsl.com/" },
          { text: "UIDAI MyAadhaar Portal", url: "https://myaadhaar.uidai.gov.in" },
          { text: "Aadhaar Update Status Tracker", url: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" }
        ]
      }
    },
    hi: {
      title: "पैन, आधार और बैंक रिकॉर्ड में नाम, पिता का नाम और जन्म तिथि को सही करने का तरीका",
      subtitle: "संपूर्ण 2025 गाइड",
      metaTitle: "पैन, आधार और बैंक रिकॉर्ड में नाम, पिता का नाम और जन्म तिथि सही करें — चरण-दर-चरण 2025 गाइड",
      metaDescription: "पैन, आधार और बैंक रिकॉर्ड में अपना नाम, पिता का नाम और जन्म तिथि अपडेट या सही करने के लिए 2025 की संपूर्ण गाइड। आवश्यक दस्तावेज, ऑनलाइन/ऑफलाइन चरण, प्रो टिप्स, समयसीमा और नमूना आवेदन पत्र शामिल है।",
      overview: {
        title: "अवलोकन",
        p1: "पैन, आधार और बैंक खातों में असंगत व्यक्तिगत विवरण गंभीर केवाईसी समस्याएं पैदा कर सकते हैं — टैक्स रिफंड, म्यूचुअल फंड लेनदेन और यहां तक कि बैंक ट्रांसफर को भी ब्लॉक कर सकते हैं।",
        p2: "यह गाइड आपको चरण दर चरण बताती है कि पैन, आधार और बैंक रिकॉर्ड में अपना नाम, पिता का नाम और जन्म तिथि कैसे सही या संशोधित करें, जिसमें दस्तावेज, समयसीमा और अस्वीकृति से बचने के लिए प्रो टिप्स शामिल हैं।"
      },
      correctOrder: {
        title: "विवरण ठीक करने का सही क्रम",
        intro: "शुरू करने से पहले:",
        steps: [
          "अपने नाम और जन्मतिथि का अंतिम, सही संस्करण तय करें (अपने पासपोर्ट या जन्म प्रमाणपत्र के अनुसार)।",
          "सरकारी आईडी पहले ठीक करें — पैन और आधार — क्योंकि बैंक केवाईसी के लिए उन पर निर्भर करते हैं।",
          "अपने बैंक रिकॉर्ड अंत में अपडेट करें, जब पैन और आधार में वही जानकारी हो।"
        ],
        note: "यह क्रम सुचारू सत्यापन सुनिश्चित करता है और बार-बार अस्वीकृति से बचाता है।"
      },
      panSection: {
        heading: "भाग A — पैन पर विवरण अपडेट करें (नाम / पिता का नाम / जन्मतिथि)",
        whatYouCanUpdate: {
          title: "आप क्या अपडेट कर सकते हैं",
          items: [
            "नाम (वर्तनी सुधार, आद्याक्षर जोड़ना/हटाना, विवाह के बाद परिवर्तन)",
            "पिता का नाम (सुधार या वर्तनी त्रुटि)",
            "जन्म तिथि (वैध प्रमाण के अनुसार)"
          ]
        },
        documents: {
          title: "आवश्यक दस्तावेज",
          items: [
            "नाम/पिता का नाम: आधार, पासपोर्ट, वोटर आईडी, ड्राइविंग लाइसेंस, विवाह प्रमाणपत्र, गजट अधिसूचना, कोर्ट आदेश",
            "जन्मतिथि: जन्म प्रमाणपत्र, पासपोर्ट, स्कूल प्रमाणपत्र, पेंशन PPO, सर्विस आईडी"
          ]
        },
        onlineSteps: {
          title: "चरण-दर-चरण (ऑनलाइन)",
          steps: [
            "Protean (NSDL) या UTIITSL पैन सुधार पोर्टल पर जाएं।",
            "\"मौजूदा पैन डेटा में परिवर्तन या सुधार\" चुनें।",
            "अपना पैन दर्ज करें, सही किए जाने वाले फ़ील्ड चुनें।",
            "सही विवरण दिखाने वाले वैध सहायक दस्तावेज अपलोड करें।",
            "प्रोसेसिंग फीस (भारतीय पते के लिए लगभग ₹110) का भुगतान करें।",
            "सबमिट करें और पावती/टोकन नंबर नोट करें।",
            "उसी पोर्टल पर स्टेटस ट्रैक करें और स्वीकृत होने पर अपडेट किया गया ई-पैन डाउनलोड करें।"
          ]
        },
        offline: {
          title: "ऑफलाइन प्रक्रिया",
          text: "यदि भौतिक सबमिशन आवश्यक है, तो भरा हुआ फॉर्म प्रिंट करें, हस्ताक्षर करें, स्व-सत्यापित दस्तावेजों की प्रतियां संलग्न करें, और पावती पर्ची पर उल्लिखित पते पर कूरियर करें।"
        },
        timeline: {
          title: "समयसीमा",
          items: [
            "प्रोसेसिंग में आमतौर पर 7-15 कार्य दिवस लगते हैं।",
            "स्वीकृत होने पर अपडेट किया गया ई-पैन मुफ्त में डाउनलोड किया जा सकता है।"
          ]
        },
        proTips: {
          title: "पैन सुधार के लिए प्रो टिप्स",
          items: [
            "पैन, आधार और बैंक नाम प्रारूप को समान रखें।",
            "कानूनी नाम परिवर्तन (विवाह या गजट) के लिए, आधिकारिक प्रमाण संलग्न करें।",
            "दस्तावेजों के स्पष्ट स्कैन सुनिश्चित करें — धुंधले अपलोड अक्सर अस्वीकार कर दिए जाते हैं।",
            "अपना पावती नंबर संभाल कर रखें; बैंक कभी-कभी इसे अंतरिम प्रमाण के रूप में मांगते हैं।"
          ]
        }
      },
      aadhaarSection: {
        heading: "भाग B — आधार पर विवरण अपडेट करें (नाम / पिता का नाम / जन्मतिथि)",
        whereToUpdate: {
          title: "कहाँ अपडेट करें",
          intro: "आप आधार विवरण इनके माध्यम से अपडेट कर सकते हैं:",
          items: [
            "ऑनलाइन: https://myaadhaar.uidai.gov.in",
            "ऑफलाइन: आधार सेवा केंद्र (प्रमुख अपडेट के लिए)"
          ]
        },
        whatYouCanChange: {
          title: "आप ऑनलाइन क्या बदल सकते हैं",
          items: [
            "छोटे नाम सुधार (वर्तनी, क्रम परिवर्तन, छोटे संपादन)",
            "पता (पूरी तरह से समर्थित)"
          ],
          note: "कानूनी नाम परिवर्तन, पिता के नाम अपडेट, या जन्मतिथि सुधार जैसे प्रमुख परिवर्तनों के लिए, वैध प्रमाणों के साथ आधार सेवा केंद्र पर जाएं।"
        },
        documents: {
          title: "स्वीकृत दस्तावेज",
          items: [
            "नाम/पिता का नाम: पासपोर्ट, पैन, विवाह प्रमाणपत्र, गजट अधिसूचना, कोर्ट आदेश",
            "जन्म तिथि: जन्म प्रमाणपत्र, पासपोर्ट, स्कूल प्रमाणपत्र, PPO, या जन्मतिथि वाली सरकारी आईडी"
          ]
        },
        onlineSteps: {
          title: "चरण-दर-चरण (ऑनलाइन)",
          steps: [
            "https://myaadhaar.uidai.gov.in पर जाएं",
            "आधार नंबर और OTP से लॉगिन करें।",
            "\"आधार ऑनलाइन अपडेट करें\" → नाम/जन्मतिथि/पिता का नाम चुनें।",
            "अपनी वैध पहचान का प्रमाण (PoI) अपलोड करें।",
            "₹50 का भुगतान करें (UPI/नेटबैंकिंग/डेबिट कार्ड)।",
            "ट्रैकिंग के लिए अपना अपडेट अनुरोध नंबर (URN) नोट करें।"
          ],
          trackText: "स्टेटस ट्रैक करें: आधार अपडेट स्टेटस जांचें"
        },
        offlineSteps: {
          title: "चरण-दर-चरण (ऑफलाइन)",
          steps: [
            "अपने निकटतम आधार सेवा केंद्र में अपॉइंटमेंट बुक करें या जाएं।",
            "मूल दस्तावेजों के साथ अपडेट फॉर्म भरें और जमा करें।",
            "₹50 का भुगतान करें और URN के साथ पावती पर्ची लें।",
            "स्वीकृत होने पर अपडेट किया गया ई-आधार डाउनलोड करें।"
          ]
        },
        timeline: {
          title: "समयसीमा",
          text: "आमतौर पर अनुमोदन और डेटाबेस सिंक के लिए 7-15 कार्य दिवस।"
        },
        proTips: {
          title: "आधार अपडेट के लिए प्रो टिप्स",
          items: [
            "UIDAI नाम (2x), जन्मतिथि (1x), लिंग (1x) के लिए सीमित जीवनकाल अपडेट की अनुमति देता है।",
            "जन्मतिथि सुधार के लिए पासपोर्ट या जन्म प्रमाणपत्र जैसे मजबूत दस्तावेजों का उपयोग करें।",
            "सुनिश्चित करें कि पैन और आधार नाम समान हों — बेमेल प्रारूप लिंकिंग या रिफंड को ब्लॉक कर सकते हैं।"
          ]
        }
      },
      bankSection: {
        heading: "भाग C — बैंक रिकॉर्ड में विवरण अपडेट करें (नाम / पिता का नाम / जन्मतिथि)",
        whenToUpdate: {
          title: "कब अपडेट करें",
          text: "बैंकों को केवाईसी विवरण बदलने से पहले अपडेट किए गए पैन और आधार प्रमाण की आवश्यकता होती है। पहले उन्हें अपडेट करें, फिर अपने बैंक में जाएं।"
        },
        documents: {
          title: "आवश्यक दस्तावेज",
          items: [
            "अपडेट किया गया पैन और आधार (सही विवरण दिखाते हुए)",
            "विवाह प्रमाणपत्र / गजट अधिसूचना / शपथ पत्र (यदि लागू हो)",
            "सत्यापन के लिए स्व-सत्यापित प्रतियां + मूल"
          ]
        },
        steps: {
          title: "चरण-दर-चरण (बैंक प्रक्रिया)",
          steps: [
            "अपनी होम ब्रांच पर जाएं या नाम/केवाईसी परिवर्तन फॉर्म डाउनलोड करें।",
            "अपना खाता संख्या और नए विवरण भरें।",
            "अपडेट किए गए दस्तावेज संलग्न करें और व्यक्तिगत रूप से जमा करें (कुछ बैंक नेटबैंकिंग के माध्यम से स्वीकार करते हैं)।",
            "पावती पर्ची या मुहर लगी प्रति मांगें।",
            "अपडेट किए गए विवरण दिखाने वाली पुनः जारी की गई पासबुक या स्टेटमेंट का अनुरोध करें।"
          ]
        },
        timeline: {
          title: "समयसीमा",
          items: [
            "2-10 कार्य दिवस (बैंक के अनुसार भिन्न)।",
            "कुछ निजी बैंक तुरंत प्रोसेस करते हैं यदि केवाईसी सरकारी रिकॉर्ड से मेल खाता है।"
          ]
        },
        proTips: {
          title: "बैंक अपडेट के लिए प्रो टिप्स",
          items: [
            "सत्यापन के लिए मूल ले जाएं।",
            "कस्टमर आईडी (CIF) स्तर पर अपडेट का अनुरोध करें ताकि सभी खाते परिवर्तन को प्रतिबिंबित करें।",
            "यदि विवाह/कानूनी कारणों से नाम बदल रहे हैं, तो हमेशा आधिकारिक प्रमाण संलग्न करें।",
            "नाम अपडेट के बाद यदि आवश्यक हो तो चेकबुक/डेबिट कार्ड पुनः ऑर्डर करें।"
          ]
        }
      },
      sampleLetter: {
        title: "बैंक के लिए नमूना आवेदन पत्र",
        content: `दिनांक: DD/MM/YYYY

सेवा में,
शाखा प्रबंधक,
[बैंक का नाम], [शाखा]

विषय: नाम/पिता का नाम/जन्मतिथि सुधार का अनुरोध

महोदय/महोदया,

मेरा आपकी शाखा में खाता संख्या [XXXXXXXXXXXX] है। मैं अपने बैंक रिकॉर्ड में निम्नलिखित विवरणों के सुधार का अनुरोध करता/करती हूं:

मौजूदा नाम: [पुराना नाम]
नया नाम: [सही नाम]
मौजूदा पिता का नाम: [पुराना पिता का नाम]
नया पिता का नाम: [सही पिता का नाम]
मौजूदा जन्मतिथि: [DD/MM/YYYY]
नई जन्मतिथि: [DD/MM/YYYY]

संलग्न:
1. अपडेट किए गए आधार और पैन की स्व-सत्यापित प्रति
2. [विवाह प्रमाणपत्र / गजट / जन्म प्रमाणपत्र] (यदि लागू हो)

कृपया मेरे रिकॉर्ड अपडेट करें और पूर्ण होने पर पुष्टि करें।

भवदीय,  
[हस्ताक्षर]  
[नाम]  
[मोबाइल / ईमेल]`
      },
      rejectionReasons: {
        title: "अस्वीकृति के सामान्य कारण",
        headers: ["कारण", "समाधान"],
        rows: [
          ["अनुरोधित नाम और प्रमाण के बीच बेमेल", "सुसंगत पूर्ण नाम प्रारूप का उपयोग करें"],
          ["कानूनी नाम परिवर्तन के लिए प्रमाण गायब", "विवाह प्रमाणपत्र या गजट संलग्न करें"],
          ["धुंधले स्कैन या कम रिज़ॉल्यूशन वाली तस्वीरें", "2 MB से कम के स्पष्ट दस्तावेज अपलोड करें"],
          ["ऑनलाइन आधार में प्रमुख परिवर्तन का प्रयास", "इसके बजाय आधार सेवा केंद्र पर जाएं"]
        ]
      },
      smartTips: {
        title: "भविष्य में केवाईसी समस्याओं से बचने के लिए स्मार्ट टिप्स",
        items: [
          "सभी दस्तावेजों में एक विहित नाम प्रारूप बनाए रखें।",
          "सभी पहचान दस्तावेजों के डिजिटल स्कैन रखें।",
          "पावती संख्या और URN सहेजें — वे अंतरिम प्रमाण के रूप में काम करते हैं।",
          "जटिल मामलों (कई परिवर्तन या कानूनी नाम बदलना) के लिए, गजट अधिसूचना प्राप्त करें — यह अधिकांश भविष्य के सत्यापन मुद्दों को समाप्त करता है।"
        ]
      },
      finalWords: {
        title: "अंतिम शब्द",
        p1: "पैन, आधार और बैंक रिकॉर्ड में अपना नाम, पिता का नाम या जन्म तिथि अपडेट करना नौकरशाही लग सकता है — लेकिन यह एक बार का प्रयास है जो केवाईसी घर्षण, रिफंड में देरी और अनुपालन सिरदर्द को खत्म करके लाभ देता है।",
        p2: "पैन से शुरू करें, आधार पर जाएं, और अपने बैंक के साथ समाप्त करें — और सब कुछ सुसंगत रखें। एक बार संरेखित होने के बाद, आपका संपूर्ण वित्तीय जीवन सिस्टम के बीच सहजता से सिंक होता है।"
      },
      usefulLinks: {
        title: "उपयोगी आधिकारिक लिंक",
        links: [
          { text: "Protean (NSDL) पैन सुधार पोर्टल", url: "https://www.protean-tinpan.com/" },
          { text: "UTIITSL पैन पोर्टल", url: "https://www.pan.utiitsl.com/" },
          { text: "UIDAI MyAadhaar पोर्टल", url: "https://myaadhaar.uidai.gov.in" },
          { text: "आधार अपडेट स्टेटस ट्रैकर", url: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Language Toggle */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4 py-3 max-w-5xl">
            <div className="flex justify-end">
              <div className="inline-flex items-center gap-2 bg-muted rounded-full p-1">
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => toggleLanguage('hi')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    language === 'hi'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-12 max-w-5xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.subtitle}
            </p>
          </header>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {t.overview.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{t.overview.p1}</p>
                <p>
                  {language === 'en' ? (
                    <>This guide walks you through, <strong>step by step</strong>, how to <strong>correct or modify your Name, Father's Name, and Date of Birth</strong> across <strong>PAN, Aadhaar, and bank records</strong>, including documentation, timelines, and pro tips to avoid rejection.</>
                  ) : (
                    t.overview.p2
                  )}
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  {t.correctOrder.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{t.correctOrder.intro}</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  {t.correctOrder.steps.map((step, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ol>
                <p className="mt-4 text-muted-foreground">
                  {t.correctOrder.note}
                </p>
              </CardContent>
            </Card>
          </section>

          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{t.panSection.heading}</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.panSection.whatYouCanUpdate.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.panSection.whatYouCanUpdate.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.panSection.documents.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.panSection.documents.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.panSection.onlineSteps.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  {t.panSection.onlineSteps.steps.map((step, i) => (
                    <li key={i}>
                      {i === 0 ? (
                        <>
                          {language === 'en' ? 'Go to the ' : ''}
                          <a href="https://onlineservices.proteantech.in/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            <strong>Protean (NSDL)</strong>
                          </a>
                          {language === 'en' ? ' or ' : ' या '}
                          <a href="https://www.pan.utiitsl.com/panonline_ipg/forms/csfPan.html/csfPreForm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            <strong>UTIITSL PAN</strong>
                          </a>
                          {language === 'en' ? ' correction portal.' : ' सुधार पोर्टल पर जाएं।'}
                        </>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/"(.*?)"/g, '<strong>"$1"</strong>') }} />
                      )}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.panSection.offline.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.panSection.offline.text}</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.panSection.timeline.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.panSection.timeline.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  {t.panSection.proTips.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.panSection.proTips.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </article>

          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{t.aadhaarSection.heading}</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.aadhaarSection.whereToUpdate.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{t.aadhaarSection.whereToUpdate.intro}</p>
                <ul className="list-disc list-inside space-y-2">
                  {t.aadhaarSection.whereToUpdate.items.map((item, i) => (
                    <li key={i}>
                      {i === 0 ? (
                        <>
                          {language === 'en' ? 'Online: ' : 'ऑनलाइन: '}
                          <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://myaadhaar.uidai.gov.in
                          </a>
                        </>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.aadhaarSection.whatYouCanChange.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.aadhaarSection.whatYouCanChange.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.aadhaarSection.whatYouCanChange.note.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.aadhaarSection.documents.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.aadhaarSection.documents.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.aadhaarSection.onlineSteps.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  {t.aadhaarSection.onlineSteps.steps.map((step, i) => (
                    <li key={i}>
                      {i === 0 ? (
                        <>
                          {language === 'en' ? 'Visit ' : ''}
                          <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://myaadhaar.uidai.gov.in
                          </a>
                          {language === 'hi' && ' पर जाएं'}
                        </>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/"(.*?)"/g, '<strong>"$1"</strong>') }} />
                      )}
                    </li>
                  ))}
                </ol>
                <p className="mt-4">
                  {t.aadhaarSection.onlineSteps.trackText}:{' '}
                  <a href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {language === 'en' ? 'Check Aadhaar Update Status' : 'आधार अपडेट स्टेटस जांचें'}
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.aadhaarSection.offlineSteps.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  {t.aadhaarSection.offlineSteps.steps.map((step, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.aadhaarSection.timeline.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p dangerouslySetInnerHTML={{ __html: t.aadhaarSection.timeline.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  {t.aadhaarSection.proTips.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.aadhaarSection.proTips.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </article>

          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{t.bankSection.heading}</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.bankSection.whenToUpdate.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.bankSection.whenToUpdate.text}</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.bankSection.documents.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.bankSection.documents.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.bankSection.steps.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  {t.bankSection.steps.steps.map((step, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.bankSection.timeline.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.bankSection.timeline.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  {t.bankSection.proTips.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.bankSection.proTips.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </article>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{t.sampleLetter.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
{t.sampleLetter.content}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  {t.rejectionReasons.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">{t.rejectionReasons.headers[0]}</th>
                        <th className="text-left p-3 font-semibold">{t.rejectionReasons.headers[1]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.rejectionReasons.rows.map((row, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-3">{row[0]}</td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  {t.smartTips.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {t.smartTips.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{t.finalWords.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{t.finalWords.p1}</p>
                <p>{t.finalWords.p2}</p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  {t.usefulLinks.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.usefulLinks.links.map((link, i) => (
                    <li key={i}>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.text}
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default KYCModification;
