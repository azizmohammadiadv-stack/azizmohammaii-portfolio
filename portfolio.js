/**
 * Mohammadmahdi Azizmohammadi — Portfolio JavaScript Engine
 * Master Architectural Monograph & 10 Creative Worlds
 * Features:
 *  - Ultra-Fast Kinetic Montage Intro (30 Project Slides @ 50ms / 0.05s)
 *  - Dedicated Case Landing Views for the 10 Worlds (including Limbik)
 *  - Dedicated Cinema & Series Showcase Box
 *  - Seamless Transparent Artwork for Page 01, Page 02, and Page 66
 *  - Architectural Blueprint Scan Transitions
 *  - Full 66-Slide Deck Lightbox & Category Filtering
 */

const TOTAL_SLIDES = 66;
let currentSlideIndex = 1;
let currentWorldKey = null;

// The 10 Creative Worlds Dataset
const CASES_DATA = {
  khanoumi: {
    num: "01",
    key: "khanoumi",
    title: "Khanoumi",
    titleFa: "خانومی",
    category: "Retail Activation · Gamification",
    categoryFa: "فعال‌سازی خرده‌فروشی · گیمیفیکیشن",
    headline: "Beauty becomes a world. Turning beauty discovery into story, play & footfall.",
    headlineFa: "زیبایی، جهانی می‌شود. تبدیل کشف زیبایی به داستان، بازی و پاخور فروشگاهی.",
    challenge: "Khanoumi opened a large physical store inside Opal mall. The challenge was not just to announce it, but to stop mall traffic, trigger curiosity, and lead shoppers physically into the store.",
    challengeFa: "خانومی فروشگاه فیزیکی بزرگی را در مجتمع اپال افتتاح کرده بود. چالش صرفاً اعلام افتتاحیه نبود، بلکه متوقف کردن رهگذران، برانگیختن کنجکاوی و هدایت فیزیکی آن‌ها به درون فروشگاه بود.",
    role: "Concept Design · Character Creation · Interactive Journey · Footfall Retail Activation",
    roleFa: "طراحی کانسپت · خلق کاراکتر · سفر تعاملی مخاطب · فعال‌سازی پاخور فروشگاهی",
    territory: "The Mystical Beauty Oracle: Playful fortune-telling where beauty advice meets theatrical entertainment.",
    territoryFa: "قلمرو فالگیری رازآلود زیبایی: تلاقی طنز، فال‌بینی و سرگرمی تئاتری در راهروهای مجتمع تجاری.",
    mechanics: "Passerby → Nostrazhamous Character → QR Code Scan → Personalized Fortune → Store Entry → Fortune Wheel → Tangible Reward (The Pink Suitcase).",
    mechanicsFa: "رهگذر → کاراکتر نوستراژاموس → اسکن کد QR → فال شخصی زیبایی → ورود به فروشگاه → گردونه شانس → جایزه ملموس (چمدان صورتی).",
    slides: [5, 6, 7, 8],
    captions: [
      "Case 01 Overview: Turning beauty discovery into story, play & retail footfall.",
      "Character Activation: Nostrazhamous, the theatrical beauty oracle engaging shoppers.",
      "Interaction Architecture: A seamless bridge from corridor curiosity to in-store purchase.",
      "Reward Becomes Fantasy: The Pink Suitcase as an iconic tangible reward and memory."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۴: تبدیل کشف زیبایی به داستان، بازی و پاخور واقعی فروشگاه.",
      "پلیت ۰۲ / ۴: فعال‌سازی با کاراکتر: نوستراژاموس؛ فالگیر شوخ‌طبع زیبایی که توجه رهگذران را متوقف می‌کرد.",
      "پلیت ۰۳ / ۴: معماری تعامل: پل یکپارچه از کنجکاوی در راهرو تا خرید درون فروشگاه.",
      "پلیت ۰۴ / ۴: پاداش به مثابه رویا: چمدان صورتی به عنوان نماد جایزه و یادگاری ماندگار از تجربه خرید."
    ]
  },
  hamrah: {
    num: "02",
    key: "hamrah",
    title: "Hamrah Mechanic",
    titleFa: "همراه مکانیک",
    category: "Car Culture · Trust Architecture · Gamification",
    categoryFa: "فرهنگ خودرو · معماری اعتماد · گیمیفیکیشن",
    headline: "Car culture becomes trust. Turning automotive anxiety into story, guidance & participation.",
    headlineFa: "فرهنگ خودرو به اعتماد بدل می‌شود. تبدیل اضطراب معاملات خودرو به داستان، راهنمایی و مشارکت.",
    challenge: "Automotive transactions in Iran carry high financial anxiety and information asymmetry. Hamrah Mechanic needed to shift from dry technical inspection to an empathetic cultural ally.",
    challengeFa: "معاملات خودرو در ایران همراه با اضطراب شدید مالی و عدم تقارن اطلاعاتی است. همراه مکانیک باید از یک بازرس فنی خشک به یک همراه و هم‌پیمان فرهنگی تبدیل می‌شد.",
    role: "Content Strategy · Cultural Campaigns · Narrative Architecture · Gamification Mechanics",
    roleFa: "استراتژی محتوا · کمپین‌های فرهنگی · معماری روایت · مکانیک‌های گیمیفیکیشن",
    territory: "The Informed Driver's Culture: Celebrating automotive heritage while equipping motorists with transparent, incontrovertible evidence.",
    territoryFa: "فرهنگ راننده آگاه: پاسداشت نوستالژی و تاریخچه خودرو همگام با ارائه شواهد شفاف و غیرقابل‌انکار کارشناسی.",
    mechanics: "Nostalgic Hook ('Happy Birthday Peykan') → Plain-Language Technical Evidence → Milestone Ownership Gamification → Urban Reassurance Billboards.",
    mechanicsFa: "قلاب نوستالژیک («تولدت مبارک پیکان») → شواهد فنی به زبان ملموس انسانی → گیمیفیکیشن نقاط عطف مالکیت خودرو → بیلبوردهای آرامش‌بخش شهری.",
    slides: [9, 10, 11, 12, 13, 14, 15],
    captions: [
      "Case 02 Overview: Turning automotive anxiety into story, guidance & participation.",
      "Culture-Led Voice: Speaking like the audience through knowledgeable, witty automotive narratives.",
      "Cultural Campaign: 'Happy Birthday, Peykan' — turning automotive heritage into an emotional bond.",
      "Trust Architecture: Converting 400+ technical inspection points into clear, understandable evidence.",
      "Gamified Journey: Milestones along the ownership and sales journey designed with game mechanics.",
      "Urban Outdoor: 'Hamrah-e Kharid. Hamrah-e Foroush' — a clear reassurance on city avenues.",
      "Unified Creative Ecosystem: One central promise branching across culture, trust, and utility."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۷: تبدیل اضطراب خودرو به داستان، راهنمایی و مشارکت همگانی.",
      "پلیت ۰۲ / ۷: لحن فرهنگ‌محور: سخن گفتن با زبان رانندگان؛ روایتی صمیمی، آگاه و شوخ‌طبع.",
      "پلیت ۰۳ / ۷: کمپین فرهنگی: «تولدت مبارک پیکان» — پیوند حافظه جمعی ایرانیان با برند.",
      "پلیت ۰۴ / ۷: معماری اعتماد: تبدیل بیش از ۴۰۰ نقطه کارشناسی فنی به شواهد بصری و قابل‌لمس.",
      "پلیت ۰۵ / ۷: گیمیفیکیشن مسیر معامله: تبدیل مراحل پیچیده خرید و فروش به گذرگاه‌های تعاملی روان.",
      "پلیت ۰۶ / ۷: کمپین محیطی: «همراه خرید، همراه فروش» — تعهد شفاف و ماندگار بر پیشانی شهر.",
      "پلیت ۰۷ / ۷: زیست‌بوم خلاق یکپارچه: پیوند هم‌افزا میان محتوای اجتماعی، کارشناسی و کمپین‌های شهری."
    ]
  },
  baman: {
    num: "03",
    key: "baman",
    title: "Baman",
    titleFa: "بامَن",
    category: "Emotion · Verbal Identity · UGC",
    categoryFa: "عاطفه · هویت کلامی · مشارکت مردمی",
    headline: "Emotion becomes participation. Turning memory, music & everyday purchase into a brand movement.",
    headlineFa: "عاطفه به مشارکت تبدیل می‌شود. تبدیل خاطره، موسیقی و خریدهای روزمره به جنبش برند.",
    challenge: "Cashback and discount apps often feel transactional and cold. Baman needed to make everyday household spending feel emotionally resonant, communal, and poetic.",
    challengeFa: "اپلیکیشن‌های کش‌بک و پاداش خرید غالباً سرد و معاملاتی‌اند. بامَن باید خریدهای روزمره خانه را به حسی عاطفی، شاعرانه و مشارکتی گره می‌زد.",
    role: "Campaign Architecture · Verbal Identity · Emotional Concepts · UGC Mechanics · Retail Activation",
    roleFa: "معماری کمپین · هویت کلامی · مفاهیم عاطفی · سازوکار مشارکت مخاطبان (UGC) · فعال‌سازی فروشگاهی",
    territory: "The Emotional Resonance of Togetherness: Rooted in classic Persian love songs and communal warmth.",
    territoryFa: "طنین عاطفی همراهی: ریشه‌گرفته از ترانه‌های ماندگار و حس نوستالژیک «با من بودن».",
    mechanics: "Hayedeh Lyric Hook ('Kash [Ba Man] boodi...') → Social Absence Memories → Receipt Upload → Retail Store Footfall Promotion.",
    mechanicsFa: "قلاب ترانه هایده («کاش {با من} بودی...») → اشتراک‌گذاری خاطرات دلتنگی → بارگذاری فاکتور خرید → پاخور فروشگاهی افق کوروش.",
    slides: [16, 17, 18, 19, 20, 21, 22, 23],
    captions: [
      "Case 03 Overview: Emotion becomes participation through music, memory and retail footfall.",
      "Verbal Identity: 'Kash [Ba Man] boodi, mididi...' inspired by Hayedeh's immortal song.",
      "Campaign Logic: Shared emotional nostalgia as a natural trigger for viral user-generated content.",
      "Retail Partnership: Joint promotion with Ofogh Kourosh supermarket in Tehransar.",
      "Visual Metaphor: Everyday living expenses visualized as a boulder and tiny excavator.",
      "Participation Ritual: Song → Memory → Comment → Receipt → Shared Reward.",
      "Workplace Culture: Literary parody poetry infusing internal creative team morale.",
      "Key Learning: Connecting heartstring storytelling directly with physical retail purchases."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۸: تبدیل عاطفه به مشارکت از طریق موسیقی، خاطره و پاخور فروشگاهی.",
      "پلیت ۰۲ / ۸: هویت کلامی: «کاش {با من} بودی و می‌دیدی...» با الهام از ترانه ماندگار «نگو نمی‌آم».",
      "پلیت ۰۳ / ۸: منطق کمپین: خاطره فقدان و دلتنگی به عنوان محرک ارگانیک برای اشتراک‌گذاری محتوا.",
      "پلیت ۰۴ / ۸: مشارکت فروشگاهی: فعال‌سازی پاخور خرید در همکاری با فروشگاه‌های افق کوروش.",
      "پلیت ۰۵ / ۸: استعاره عینی: سنگینی مخارج روزمره در قالب تخته‌سنگی عظیم و بیل مکانیکی کوچک.",
      "پلیت ۰۶ / ۸: آیین تعامل: ترانه → خاطره → کامنت عاطفی → ثبت فاکتور خرید → دریافت پاداش.",
      "پلیت ۰۷ / ۸: فرهنگ تیمی: نقیضه‌سازی‌های شوخ‌طبعانه ادبی برای ارتقای انگیزه و روحیه تیم خلاق بامَن.",
      "پلیت ۰۸ / ۸: بینش استراتژیک: اتصال داستان‌گویی عاطفی به تغییر رفتار ملموس خرید در سبد خانوار."
    ]
  },
  nikan: {
    num: "04",
    key: "nikan",
    title: "Nikan Hospitals",
    titleFa: "بیمارستان‌های نیکان",
    category: "Rebranding · Verbal Guide · Human CX · CSR",
    categoryFa: "بازآفرینی برند · کتابچه کلامی · تجربه انسانی بیمار · مسئولیت اجتماعی",
    headline: "Healthcare becomes human. Rebranding a premier hospital group around the celebration of life.",
    headlineFa: "سلامت، انسانی می‌شود. بازآفرینی برند گروه بیمارستان‌های نیکان حول ایدهٔ «در ستایش زندگی».",
    challenge: "Hospitals typically induce fear, anxiety, and sterile detachment. Nikan needed a profound rebrand that celebrates life and weaves warmth into every clinical touchpoint.",
    challengeFa: "فضاهای بیمارستانی ذاتاً اضطراب‌آور و سرد هستند. نیکان به یک بازآفرینی بنیادین نیاز داشت که زندگی را بستاید و گرما را در تمامی نقاط تماس جاری سازد.",
    role: "Rebrand Creative Direction · Tagline Creation · 64-Page Verbal Guide · 9 Digital Redesigns · CSR Programs",
    roleFa: "هدایت خلاق ریبرندینگ · خلق شعار («در ستایش زندگی») · کتابچه لحن ۶۴ صفحه‌ای · بازطراحی ۹ وب‌سایت · برنامه‌های CSR",
    territory: "In Praise of Life: Celebrating human resilience, tenderness, and every breath of healing.",
    territoryFa: "در ستایش زندگی: پاسداشت ایستادگی، مهربانی، تولد و هر دم و بازدم از التیام انسان.",
    mechanics: "64-Page Verbal Identity Guide → 9 Unified Hospital Websites → Simorgh Discharge Feather → Newborn 'Ham-Nahal' Chitgar Tree Planting → 1,000 Origami Chicks.",
    mechanicsFa: "کتابچه ۶۴ صفحه‌ای لحن و کلام → بازطراحی ۹ سایت گروه → بروشور مرهم پر سیمرغ → کاشت درخت هم‌نهال نوزادان در چیتگر → هزار جوجه کاغذی یلدا.",
    slides: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    captions: [
      "Case 04 Overview: Healthcare becomes human — rebranding Nikan around 'In Praise of Life'.",
      "Brand Identity System: Harmonizing physical stationery, interior graphics, and digital spaces.",
      "Tone of Voice Guide: A comprehensive 64-page framework setting standards across 7 operational tiers.",
      "Digital Redesign: 9 hospital group websites restructured for intuitive patient journeys.",
      "Sensory Objects: Infusing warmth into patient bedding, newborn kits, and nurse attire.",
      "Atmospheric Calming: The Tree of Life, Nikan Café, and children's storybooks mitigating hospital anxiety.",
      "The Simorgh Protocol: Discharge care booklet inspired by the Shahnameh's healing feather myth.",
      "Nurses' Day Marathon: Honoring staff through a 59,675 steps/week metaphor and 'I'm Nurse' badges.",
      "Yalda CSR: 'A Thousand Paper Chicks' origami movement generating charity surgery funds.",
      "Ham-Nahal CSR: Planting a dedicated tree in Chitgar forest for every newborn baby.",
      "Baby on Board: Branded infant safety car decals welcoming families on their ride home.",
      "Key Learning: In healthcare, brand is felt in daily micro-acts of compassion before words."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۱۲: نمای کلی کیس ۰۴: سلامت انسانی می‌شود؛ بازآفرینی نیکان بر مدار «در ستایش زندگی».",
      "پلیت ۰۲ / ۱۲: سامانه هویت بصری: یکپارچه‌سازی اوراق اداری، گرافیک محیطی و پلتفرم‌های دیجیتال.",
      "پلیت ۰۳ / ۱۲: کتابچه هویت کلامی: تدوین لحن صمیمی، شفاف و محترمانه در ۶۴ صفحه برای ۷ رده ارتباطی.",
      "پلیت ۰۴ / ۱۲: بازطراحی دیجیتال: ادغام و نوسازی ۹ وب‌سایت مراکز مختلف درمانی نیکان.",
      "پلیت ۰۵ / ۱۲: اشیای ملموس درمانی: جاری شدن لطافت در البسه، ست‌های نوزاد و بسته‌های مراقبت.",
      "پلیت ۰۶ / ۱۲: نقاط تماس حسی: درخت زندگی، کافه نیکان و کتاب‌های مصور کودک برای کاهش اضطراب درمان.",
      "پلیت ۰۷ / ۱۲: خدمات سیمرغ: راهنمای مراقبت در منزل با استعاره پر مرهم سیمرغ و زال در شاهنامه.",
      "پلیت ۰۸ / ۱۲: ماراتن روز پرستار: بزرگداشت ۵۹٬۶۷۵ قدم پیاده‌روی هفتگی پرستاران با نشان افتخار.",
      "پلیت ۰۹ / ۱۲: کمپین یلدای کودکان: «هزار جوجه کاغذی» اوریگامی برای تامین هزینه درمان بیماران نیازمند.",
      "پلیت ۱۰ / ۱۲: پویش هم‌نهال: کاشت یک نهال به نام هر نوزاد در جنگل چیتگر متصل به شناسنامه ترخیص.",
      "پلیت ۱۱ / ۱۲: نشان خودرویی کودک: نشان «کودک در خودرو» برای همراهی امن خانواده‌ها در مسیر خانه.",
      "پلیت ۱۲ / ۱۲: بینش ماندگار: در مراقبت سلامت، برند در ریزترین کنش‌های مهرورزی احساس می‌شود."
    ]
  },
  azki: {
    num: "05",
    key: "azki",
    title: "Azki Seller",
    titleFa: "ازکی سِلِر",
    category: "B2B Enablement · Agent Culture · Event Architecture",
    categoryFa: "توانمندسازی B2B · فرهنگ شبکه فروش · معماری رویداد",
    headline: "B2B becomes empowerment. Turning a sales tool into professional pride and belonging.",
    headlineFa: "روابط B2B به توانمندسازی بدل می‌شود. تبدیل یک ابزار فروش به هویت و غرور حرفه‌ای نمایندگان.",
    challenge: "Independent insurance sellers viewed online aggregators as existential threats. Azki Seller had to transform skepticism into partnership and communal dignity.",
    challengeFa: "نمایندگان سنتی بیمه، پلتفرم‌های آنلاین را رقیب و تهدید معیشت خود می‌دیدند. ازکی سِلِر باید این سوءظن را به غرور، اشتیاق و هم‌سنگری بدل می‌کرد.",
    role: "Brand Positioning · 'Ba Hamim' Flagship Convention · Anthem Songwriting · Rituals of Recognition",
    roleFa: "جایگاه‌سازی برند · همایش بزرگ «با همیم» · سرایش ترانه اختصاصی · آیین‌های قدردانی از شبکه فروش",
    territory: "The Architects of Security: Positioning insurance agents as resilient societal guardians.",
    territoryFa: "معماران امنیت: بازتعریف نمایندگان بیمه به عنوان پشتیبانان استوار آرامش خانواده‌های ایرانی.",
    mechanics: "Nationwide Agent Gathering (Milad Tower) → Dedicated 'Ba Hamim' Anthem → Staged Honor Medals → Digital Sales Companion App.",
    mechanicsFa: "گردهمایی سراسری برج میلاد → ترانه و سرود اختصاصی «با همیم» → نشان‌های افتخار روی صحنه → اپلیکیشن همراه فروش دیجیتال.",
    slides: [37, 38, 39, 40, 41],
    captions: [
      "Case 05 Overview: Transforming a B2B network into a brotherhood of professional pride.",
      "Strategic Alignment: Positioning Azki Seller not as an overlord, but as a sales amplifier.",
      "Flagship Convention: 'Ba Hamim' at Milad Tower gathering thousands of agents under one banner.",
      "The Anthem: Custom-written anthem lyrics uniting diverse regional agents into a shared voice.",
      "Rituals of Belonging: Trophies, badges and ongoing community mechanisms sustaining motivation."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۵: نمای کلی کیس ۰۵: تبدیل شبکه فروش B2B به جامعه‌ای سرشار از غرور و همبستگی.",
      "پلیت ۰۲ / ۵: هم‌راستایی استراتژیک: بازتعریف ازکی سِلِر نه به عنوان رقیب، بلکه بال پرواز نمایندگان.",
      "پلیت ۰۳ / ۵: همایش بزرگ «با همیم»: گردهمایی پرشور هزاران نماینده بیمه در سالن همایش‌های برج میلاد.",
      "پلیت ۰۴ / ۵: ترانه اختصاصی: سرایش اشعار انگیزشی و هم‌آوایی جمعی نمایندگان سراسر کشور.",
      "پلیت ۰۵ / ۵: آیین‌های ماندگاری: مدال‌های قدردانی و مکانیک‌های همیشگی حفظ انگیزه و تعلق سازمانی."
    ]
  },
  gamify: {
    num: "06",
    key: "gamify",
    title: "Gamify",
    titleFa: "گیمیفای",
    category: "Game Mechanics · Intrinsic Motivation · Concept Design",
    categoryFa: "مکانیک‌های بازی · انگیزه درونی · طراحی کانسپت",
    headline: "Play becomes purpose. Gamification concepts that turn routine into voluntary engagement.",
    headlineFa: "بازی به انگیزه و مقصود بدل می‌شود. مفاهیمی که کارهای روزمره را به شوق داوطلبانه تبدیل می‌کنند.",
    challenge: "Most gamification stops at superficial points, badges and leaderboards. The objective was creating deeply meaningful metaphoric games rooted in human psychology.",
    challengeFa: "بیشتر گیمیفیکیشن‌ها در حد امتیاز و مدال‌های صوری متوقف می‌شوند؛ هدف، خلق مکانیک‌های عمیق استعاری بود که با روان‌شناسی انسان تنیده شده باشند.",
    role: "Core Game Architecture · Metaphor Design · Behavior Loop Engineering · Concept Frameworks",
    roleFa: "معماری مکانیک‌های بازی · طراحی استعاره‌های مفهومی · مهندسی حلقه‌های رفتاری · چارچوب‌های کانسپت",
    territory: "The Architecture of Intrinsic Delight: Games where self-discovery, altruism and curiosity eclipse extrinsic rewards.",
    territoryFa: "معماری اشتیاق درونی: بازی‌هایی که در آن‌ها خودشناسی، دیگرخواهی و کنجکاوی بر جوایز مادی غلبه دارد.",
    mechanics: "Butterflies of Tehran (Nature Discovery) · The Social Mirror · Rend (Persian Wit Game) · Ham-Ghalb (Cardiopulmonary Health Mechanics).",
    mechanicsFa: "پروانه‌های تهران (کشف شگفتی طبیعت) · آینه رفتار اجتماعی · رِند (بازی هوش و طنز ایرانی) · هم‌قلب (بازی‌وارسازی سلامت قلب).",
    slides: [42, 43, 44, 45, 46, 47],
    captions: [
      "Case 06 Overview: Concepts transforming passive compliance into active curiosity.",
      "Concept 01: Butterflies of Tehran — Urban micro-quests reconnecting citizens with hidden biodiversity.",
      "Concept 02: The Mirror — Reflexive decision-making mechanics prompting empathy and self-reflection.",
      "Concept 03: Rend — Classical Persian wit, situational comedy and strategic verbal duel mechanics.",
      "Concept 04: Ham-Ghalb — Gamifying heart health routines and preventative cardio habits.",
      "Creative Philosophy: Game mechanics are narrative architectures where players script their own triumph."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۶: نمای کلی کیس ۰۶: طراحی ساختارهای تعاملی برای تبدیل انفعال به کنجکاوی داوطلبانه.",
      "پلیت ۰۲ / ۶: کانسپت پروانه‌های تهران: ماموریت‌های خرد شهری برای آشتی شهروندان با تنوع زیستی پنهان پایتخت.",
      "پلیت ۰۳ / ۶: کانسپت آینه: مکانیک‌های تصمیم‌گیری بازتابی برای ایجاد همدلی اجتماعی و تامل در خود.",
      "پلیت ۰۴ / ۶: کانسپت رِند: بازی‌وارسازی رندی، طنز موقعیت و بازی‌های کلامی ریشه‌دار در ادب پارسی.",
      "پلیت ۰۵ / ۶: کانسپت هم‌قلب: تلفیق عادت‌های روزمره مراقبت از سلامت قلب با حلقه‌های رفتاری پاداش‌دهنده.",
      "پلیت ۰۶ / ۶: نگرش کلیدی: گیمیفیکیشن صحنه‌ای روایی است که کاربر، قهرمان داستانِ خود در آن می‌شود."
    ]
  },
  samf: {
    num: "07",
    key: "samf",
    title: "Samf Kids",
    titleFa: "سمف کیدز",
    category: "Character IP · Children's Storyworld · Edutainment",
    categoryFa: "خلق کاراکتر (IP) · جهان داستانی کودک · سرگرمی‌آموزی",
    headline: "Imagination becomes a friend. Building the Samfi universe to spark emotional growth in children.",
    headlineFa: "خیال‌پردازی به رفاقت تبدیل می‌شود. ساخت جهان داستانی سامفی برای رشد عاطفی و شناختی کودکان.",
    challenge: "Children require relatable, non-preachy companions who understand childhood fears, bedtime anxieties, and curiosity without condescension.",
    challengeFa: "کودکان نیازمند همراهانی هم‌سطح و بی‌آزارند که ترس‌ها، بی‌قراری‌های شبانه و کنجکاوی‌هایشان را بدون پند و اندرز درک کنند.",
    role: "Character IP Development · Story Bible · Narrative Episodes · Emotional Growth Milestones",
    roleFa: "توسعه کاراکتر و مالکیت فکری (IP) · تدوین انجیل داستانی · نویسندگی اپیزودها · طراحی مراحل رشد عاطفی",
    territory: "The Wonder Cloud: A soft, curious realm where imagination resolves everyday childhood hurdles.",
    territoryFa: "ابر شگفتی‌ها: سرزمینی نرم، خیال‌انگیز و پرکشش که در آن گره‌های عاطفی کودک گشوده می‌شود.",
    mechanics: "Samfi Character Anatomy → Relatable Character Flaws → Visual Storybook Modules → Parental Co-Reading Bridges.",
    mechanicsFa: "کالبدشکافی کاراکتر سامفی → نقایص دوست‌داشتنی شخصیتی → ماژول‌های کتاب مصور → پل‌های گفتگوی والد و کودک.",
    slides: [48, 49, 50, 51, 52],
    captions: [
      "Case 07 Overview: Crafting an enduring character universe that nurtures children's inner confidence.",
      "Character DNA: Anatomy of Samfi — curious ears, soft proportions, and expressions of vulnerability.",
      "Worldbuilding Elements: The Cloud Tree, the Pocket of Fears, and tools of gentle resolution.",
      "Narrative Arc: Episode structures navigating fear of the dark, sibling sharing, and anger.",
      "Parental Integration: Interactive conversation prompts guiding families through meaningful bedtime bonding."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۵: نمای کلی کیس ۰۷: خلق جهان شخصیتی ماندگار برای تقویت خودباوری و مهربانی در دنیای کودک.",
      "پلیت ۰۲ / ۵: دی‌ان‌ای کاراکتر: آناتومی سامفی؛ گوش‌های شنوا، انحناهای نرم و نگاهی مشتاق و صادقانه.",
      "پلیت ۰۳ / ۵: عناصر جهان داستان: درخت ابرها، جیب ترس‌های کوچک و ابزارهای فانتزی حل مسئله.",
      "پلیت ۰۴ / ۵: ساختار اپیزودها: طراحی درام‌های کودکانه پیرامون ترس از تاریکی، قهر و بخشش دوستانه.",
      "پلیت ۰۵ / ۵: همراهی با والدین: پرسش‌های تعاملی پایان هر قصه برای ایجاد گفتگوی عمیق پیش از خواب."
    ]
  },
  rituals: {
    num: "08",
    key: "rituals",
    title: "Organizational Rituals",
    titleFa: "آیین‌های درون‌سازمانی",
    category: "Culture Design · Internal Brand · Emotional Health",
    categoryFa: "طراحی فرهنگ سازمان · برند کارفرمایی · سلامت روان تیم",
    headline: "Culture becomes a living ritual. Designing workplace ceremonies that foster genuine belonging.",
    headlineFa: "فرهنگ به آیینی زنده بدل می‌شود. طراحی مناسک کاری که حس اصیل همبستگی و اشتیاق را بارور می‌سازد.",
    challenge: "Internal culture cannot be dictated by posters or HR memos; it lives in daily micro-rituals, listening channels, and communal celebrations.",
    challengeFa: "فرهنگ سازمانی با دستورالعمل و بخشنامه ساخته نمی‌شود؛ فرهنگ در خُرده‌آیین‌های روزمره، شنیده شدن و جشن‌های مشترک جان می‌گیرد.",
    role: "Internal Culture Architect · Ritual Conceptualizer · Employee Experience (EX) Touchpoints",
    roleFa: "معمار فرهنگ سازمانی · طراح آیین‌ها و مناسک کاری · خلق نقاط تماس تجربه کارکنان (EX)",
    territory: "The Humanized Workplace: Organizations where psychological safety and celebratory traditions thrive.",
    territoryFa: "محیط کار انسان‌محور: سازمان‌هایی که امنیت روانی و آیین‌های شادمانه در آن‌ها نهادینه شده است.",
    mechanics: "Vitamin CC I-Win (Team Appreciation) · Night Listener (Shift Empathy) · Happy Call · Team Lore Parodies.",
    mechanicsFa: "ویتامین CC آی‌وین (قدردانی غافلگیرانه) · شنونده شب (پاسداشت شیفت‌های شبانه) · تماس خوشحال · نقیضه‌های ادبی شوخ‌طبعانه.",
    slides: [53, 54, 55],
    captions: [
      "Case 08 Overview: Transforming workplaces into emotionally connected, resilient tribes.",
      "Vitamin CC: Surprise wellness and recognition packs delivering peer appreciation directly to desks.",
      "Night Listener: Honoring customer-facing night shift crews through warm midnight hospitality.",
      "Cultural Humor: Team parodies and folklore turning shared delivery pressure into collective joy."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۳: نمای کلی کیس ۰۸: تبدیل محیط کار به جامعه‌ای تاب‌آور، همدل و سرشار از معنا و انگیزه.",
      "پلیت ۰۲ / ۳: ویتامین CC: بسته‌های غافلگیرانه قدردانی همکاران از یکدیگر که روی میزها قرار می‌گرفت.",
      "پلیت ۰۳ / ۳: شنونده شب: آیین دلجویی و پاسداشت شیفت‌های شبانه پشتیبانی با چای گرم و نامه‌های دست‌نویس."
    ]
  },
  limbik: {
    num: "09",
    key: "limbik",
    title: "Limbik",
    titleFa: "لیمبیک",
    category: "Neuromarketing Agency · Entrepreneurship",
    categoryFa: "آژانس نورومارکتینگ · فصل کارآفرینی",
    headline: "A formative entrepreneurial chapter. Building a neuromarketing agency.",
    headlineFa: "فصل تجربه کارآفرینی و تاسیس آژانس نورومارکتینگ.",
    challenge: "Two years of building a neuromarketing agency taught me what creative ambition asks of a team. We made meaningful work, grew our craft and formed lasting friendships. Limited business networks and inexperienced management brought the chapter to a close. A sacred failure: an education in collaboration, judgment and the structure a creative idea needs to endure.",
    challengeFa: "دو سال تجربه تاسیس و هدایت یک آژانس نورومارکتینگ به من آموخت که جاه‌طلبی خلاق از یک تیم چه می‌خواهد. ما کارهای معناداری ساختیم، مهارت‌هایمان را رشد دادیم و دوستی‌های پایدار شکل دادیم. شبکه‌سازی ناکافی کسب‌وکار و مدیریت کم‌تجربه این فصل را به پایان رساند؛ یک شکست مقدس: آموزشی گرانبها در همکاری، قضاوت حرفه‌ای و ساختاری که یک ایده خلاق برای بقا و ماندگاری به آن نیاز دارد.",
    role: "Co-Founder · Creative Director · Neuromarketing Strategist",
    roleFa: "هم‌بنیان‌گذار · مدیر خلاقیت · استراتژیست نورومارکتینگ",
    territory: "The Bridge between Neuroscience, Cognitive Emotion & Creative Ambition.",
    territoryFa: "پل استراتژیک میان علوم شناختی اعصاب، عواطف ناخودآگاه انسان و کارهای خلاقانه برند.",
    mechanics: "Neuromarketing Consumer Labs → Biometric Emotion Mapping → Visual Attention Tracking → Sacred Entrepreneurial Learnings.",
    mechanicsFa: "آزمایشگاه‌های رفتار مصرف‌کننده → نقشه‌برداری عاطفی با سنجه‌های زیستی → ردیابی توجه بصری → درس‌آموخته‌های ماندگار کارآفرینی.",
    slides: [57],
    captions: [
      "Case 09 Overview: Limbik — A formative entrepreneurial chapter and a sacred failure in building a neuromarketing agency."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۱: لیمبیک؛ فصل تجربه کارآفرینی، تاسیس آژانس نورومارکتینگ و دستاوردهای گرانبهای یک شکست مقدس برای ساختار ایده‌ها."
    ]
  },
  screenwriting: {
    num: "10",
    key: "screenwriting",
    title: "Screenwriting & Cinematic Craft",
    titleFa: "صنعت سینما و فیلمنامه‌نویسی",
    category: "Dramatic Architecture · Screenplay · Long-Form Worlds",
    categoryFa: "مهندسی درام · فیلمنامه‌نویسی سریال و سینما · خلق جهان‌های داستانی",
    headline: "Cinematic craft. Commercial worlds. Character, escalating conflict & cathartic resonance.",
    headlineFa: "صنعت سینما. جهان‌های برند. شخصیت، کشمکش اوج‌یابنده و ریتم عاطفی پایان‌بندی.",
    challenge: "Professional dramatic storytelling is the root discipline of all brand narrative architecture: understanding human desire, obstacles, stakes, and catharsis.",
    challengeFa: "نویسندگی دراماتیک، ریشهٔ اصلی تمام معماری‌های روایی برند است: شناخت اشتیاق عمیق انسان، موانع، اوج‌گیری تنش و رستگاری پایانی.",
    role: "Head Writer · Screenwriter · Director (Platform Series & Feature Cinema)",
    roleFa: "سرپرست نویسندگان · فیلمنامه‌نویس · کارگردان (سریال‌های پلتفرم و آثار بلند سینمایی)",
    territory: "The Architecture of Human Tension: Crafting compelling long-form universes where viewers invest their hearts.",
    territoryFa: "معماری تنش انسانی: خلق جهان‌های داستانی بلندی که مخاطب با تمام وجود در آن‌ها غرق و همراه می‌شود.",
    mechanics: "Cold Blooded (Head Writer - Crime Drama Series) · Beretta: Story of a Gun (Platform Series) · The Last Neigh of a Horse · One of These Days Khosrow Will Die.",
    mechanicsFa: "سریال خون‌سرد (سرپرست نویسندگان) · سریال برتا: داستان یک اسلحه (سرپرست نویسندگان) · فیلم سینمایی آخرین شیهه اسبی که... · یکی از همین روزها خسرو می‌میرد.",
    slides: [56, 58, 59],
    captions: [
      "Case 10 Plate 01: Selected Works — Cold Blooded, Beretta, The Last Neigh of a Horse, Khosrow Will Die.",
      "Case 10 Plate 02: Sarhal Puppet Series (Nasim TV, 2017) — Writers' Room Leadership.",
      "Case 10 Plate 03: Sourikh Comedy Series (Salamat TV, 2019) — Head Writer."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۳: آثار منتخب داستانی — سریال خون‌سرد، سریال برتا، فیلم سینمایی آخرین شیهه اسبی که... و خسرو می‌میرد.",
      "پلیت ۰۲ / ۳: سریال عروسکی سرِحال (شبکه نسیم، تابستان ۱۳۹۶) — هدایت اتاق نویسندگان و سرپرست تیم.",
      "پلیت ۰۳ / ۳: سریال کمدی سوریخ (شبکه سلامت، پاییز ۱۳۹۸) — سرپرست نویسندگان."
    ]
  }
};

const WORLD_KEYS = Object.keys(CASES_DATA);

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initDeckLightbox();
  initWorldLandingNavigation();
  initCategoryFilters();
  initContactForm();
  initMobileMenu();
  setupKeyboardShortcuts();
  checkInitialUrlHash();
});

/* ==========================================================================
   Dedicated Case Landing Page Views (The 10 Worlds)
   ========================================================================== */
function initWorldLandingNavigation() {
  // Bind all triggers (cards in 10 worlds map, header mega-menu items, chapter ribbon pills)
  document.querySelectorAll("[data-case], [data-open-case]").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const key = elem.dataset.case || elem.dataset.openCase;
      if (key && CASES_DATA[key]) {
        e.preventDefault();
        openWorldLanding(key);
      }
    });
  });

  // The cinema showcase replaces the former standalone World 10 card.
  const cinemaShowcase = document.getElementById("cinemaShowcase");
  if (cinemaShowcase) {
    cinemaShowcase.addEventListener("click", (event) => {
      if (event.target.closest("[data-open-case], button, a")) return;
      openWorldLanding("screenwriting");
    });
    cinemaShowcase.querySelectorAll(".cinema-poster-card, .secondary-work-item").forEach((item) => {
      item.setAttribute("role", "button");
      item.tabIndex = 0;
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          item.click();
        }
      });
    });
  }

  // Back to Map buttons
  const backBtn = document.getElementById("btnBackToMap");
  if (backBtn) {
    backBtn.addEventListener("click", closeWorldLanding);
  }

  // Next / Prev World Buttons
  const nextBtn = document.getElementById("worldNextBtn");
  const prevBtn = document.getElementById("worldPrevBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => navigateWorld(1));
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => navigateWorld(-1));
  }

  // Handle browser Back / Forward buttons
  window.addEventListener("hashchange", checkInitialUrlHash);
}

function openWorldLanding(caseKey, skipTransition = false) {
  const data = CASES_DATA[caseKey];
  if (!data) return;

  const isRtl = document.documentElement.getAttribute("dir") === "rtl";
  currentWorldKey = caseKey;

  const renderContent = () => {
    // Populate Hero
    document.getElementById("worldHeroNum").textContent = isRtl ? `جهان ${data.num}` : `World ${data.num}`;
    document.getElementById("worldHeroCat").textContent = isRtl ? data.categoryFa : data.category;
    document.getElementById("worldHeroTitle").textContent = isRtl ? `${data.titleFa} (${data.title})` : `${data.title} (${data.titleFa})`;
    document.getElementById("worldHeroHeadline").textContent = isRtl ? data.headlineFa : data.headline;
    
    // Breadcrumbs & Counter
    document.getElementById("worldBreadcrumbTitle").textContent = isRtl ? `${data.num} ${data.titleFa}` : `${data.num} ${data.title}`;
    document.getElementById("worldCounterBadge").textContent = isRtl ? `جهان ${data.num} از ۱۰` : `World ${data.num} of 10`;

    // 4 Strategic Pillars
    document.getElementById("worldChallenge").textContent = isRtl ? data.challengeFa : data.challenge;
    document.getElementById("worldRole").textContent = isRtl ? data.roleFa : data.role;
    document.getElementById("worldTerritory").textContent = isRtl ? data.territoryFa : data.territory;
    document.getElementById("worldMechanics").textContent = isRtl ? data.mechanicsFa : data.mechanics;

    // Render Full Monograph Visual Plates
    const container = document.getElementById("worldPlatesContainer");
    container.innerHTML = "";

    const captions = isRtl ? data.captionsFa : data.captions;
    data.slides.forEach((slideNum, idx) => {
      const pageStr = slideNum < 10 ? `0${slideNum}` : `${slideNum}`;
      const captionText = captions[idx] || (isRtl ? `پلیت شماره ${idx + 1}` : `Plate ${idx + 1}`);

      const card = document.createElement("article");
      card.className = "world-plate-card";
      card.innerHTML = `
        <div class="plate-card-header">
          <span class="plate-card-num">${isRtl ? `پلیت ۰${idx + 1} از ۰${data.slides.length}` : `PLATE 0${idx + 1} OF 0${data.slides.length}`}</span>
          <span>PAGE ${pageStr} // 3840×2160 MASTER</span>
        </div>
        <div class="plate-image-stage" onclick="openDeck(${slideNum})" title="${isRtl ? 'مشاهده با بزرگنمایی کامل' : 'Click to zoom in full resolution'}">
          <img src="assets/deck/web/page-${pageStr}.jpg" alt="${captionText}" loading="lazy">
          <span class="plate-zoom-badge">${isRtl ? '🔍 بزرگنمایی ۴K' : '🔍 4K Zoom'}</span>
        </div>
        <div class="plate-caption-box">
          <div class="plate-caption-title">${isRtl ? 'تحلیل و معماری اثر:' : 'Architectural Rationale:'}</div>
          <p class="plate-caption-text">${captionText}</p>
        </div>
      `;
      container.appendChild(card);
    });

    // Pager buttons title
    const currentIdx = WORLD_KEYS.indexOf(caseKey);
    const nextIdx = (currentIdx + 1) % WORLD_KEYS.length;
    const prevIdx = (currentIdx - 1 + WORLD_KEYS.length) % WORLD_KEYS.length;
    const nextData = CASES_DATA[WORLD_KEYS[nextIdx]];
    const prevData = CASES_DATA[WORLD_KEYS[prevIdx]];

    const nextBtn = document.getElementById("worldNextBtn");
    const prevBtn = document.getElementById("worldPrevBtn");
    if (nextBtn) nextBtn.title = isRtl ? `جهان بعدی: ${nextData.titleFa}` : `Next World: ${nextData.title}`;
    if (prevBtn) prevBtn.title = isRtl ? `جهان قبلی: ${prevData.titleFa}` : `Previous World: ${prevData.title}`;

    // Switch Views
    const mainView = document.getElementById("mainView");
    const worldView = document.getElementById("worldLandingView");

    if (mainView) mainView.style.display = "none";
    if (worldView) {
      worldView.style.display = "block";
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // Update URL hash
    if (window.location.hash !== `#world-${caseKey}`) {
      history.pushState(null, "", `#world-${caseKey}`);
    }
  };

  if (skipTransition) {
    renderContent();
  } else {
    runArchitecturalTransition(renderContent);
  }
}

function closeWorldLanding(skipTransition = false) {
  const returnToMap = () => {
    const mainView = document.getElementById("mainView");
    const worldView = document.getElementById("worldLandingView");

    if (worldView) worldView.style.display = "none";
    if (mainView) {
      mainView.style.display = "block";
      const casesElem = document.getElementById("cases");
      if (casesElem) {
        casesElem.scrollIntoView({ behavior: "smooth" });
      }
    }
    history.pushState(null, "", "#cases");
  };

  if (skipTransition) {
    returnToMap();
  } else {
    runArchitecturalTransition(returnToMap);
  }
}

function navigateWorld(direction) {
  if (!currentWorldKey) return;
  const currentIdx = WORLD_KEYS.indexOf(currentWorldKey);
  const targetIdx = (currentIdx + direction + WORLD_KEYS.length) % WORLD_KEYS.length;
  openWorldLanding(WORLD_KEYS[targetIdx]);
}

function checkInitialUrlHash() {
  const hash = window.location.hash;
  if (hash.startsWith("#world-")) {
    const key = hash.replace("#world-", "");
    if (CASES_DATA[key]) {
      openWorldLanding(key, true);
    }
  } else if (currentWorldKey && (hash === "" || hash === "#cases" || hash === "#hero" || hash === "#about" || hash === "#contact")) {
    const mainView = document.getElementById("mainView");
    const worldView = document.getElementById("worldLandingView");
    if (worldView) worldView.style.display = "none";
    if (mainView) mainView.style.display = "block";
    currentWorldKey = null;
  }
}

/* ==========================================================================
   3. Architectural Blueprint Scan Transition Curtain
   ========================================================================== */
function runArchitecturalTransition(midCallback) {
  const curtain = document.getElementById("architecturalCurtain");
  if (!curtain) {
    if (midCallback) midCallback();
    return;
  }

  curtain.classList.add("active");

  setTimeout(() => {
    if (midCallback) midCallback();
  }, 250);

  setTimeout(() => {
    curtain.classList.remove("active");
  }, 500);
}

/* ==========================================================================
   4. Deck Lightbox (66 Slides)
   ========================================================================== */
function initDeckLightbox() {
  const modal = document.getElementById("deckModal");
  if (!modal) return;

  // Build thumbnails
  const strip = document.getElementById("deckThumbStrip");
  if (strip && strip.children.length === 0) {
    for (let i = 1; i <= TOTAL_SLIDES; i++) {
      const pageStr = i < 10 ? `0${i}` : `${i}`;
      const thumb = document.createElement("div");
      thumb.className = `deck-thumb ${i === 1 ? "active" : ""}`;
      thumb.dataset.slide = i;
      thumb.innerHTML = `<img src="assets/deck/web/page-${pageStr}.jpg" alt="Slide ${i}" loading="lazy">`;
      thumb.addEventListener("click", () => goToSlide(i));
      strip.appendChild(thumb);
    }
  }

  const prevBtn = document.getElementById("deckPrevBtn");
  const nextBtn = document.getElementById("deckNextBtn");
  const closeBtn = document.getElementById("deckCloseBtn");

  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (closeBtn) closeBtn.addEventListener("click", closeDeck);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("deck-modal-body")) {
      closeDeck();
    }
  });

  // Touch Swipe
  let touchStartX = 0;
  let touchEndX = 0;
  const slideView = document.getElementById("deckSlideView");

  if (slideView) {
    slideView.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slideView.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      const isRtl = document.documentElement.getAttribute("dir") === "rtl";
      if (Math.abs(diff) > 45) {
        if (diff < 0) {
          isRtl ? prevSlide() : nextSlide();
        } else {
          isRtl ? nextSlide() : prevSlide();
        }
      }
    }, { passive: true });
  }
}

function openDeck(slideNum = 1) {
  const modal = document.getElementById("deckModal");
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  goToSlide(slideNum);
}

function closeDeck() {
  const modal = document.getElementById("deckModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function goToSlide(index) {
  if (index < 1) index = 1;
  if (index > TOTAL_SLIDES) index = TOTAL_SLIDES;
  currentSlideIndex = index;

  const pageStr = index < 10 ? `0${index}` : `${index}`;
  const slideImg = document.getElementById("deckSlideView");
  const counter = document.getElementById("deckCounter");
  const isRtl = document.documentElement.getAttribute("dir") === "rtl";

  if (slideImg) {
    slideImg.src = `assets/deck/web/page-${pageStr}.jpg`;
    slideImg.alt = `Portfolio Slide ${index}`;
  }

  if (counter) {
    counter.textContent = isRtl ? `اسلاید ${index} از ${TOTAL_SLIDES}` : `Slide ${index} of ${TOTAL_SLIDES}`;
  }

  const thumbs = document.querySelectorAll(".deck-thumb");
  thumbs.forEach((th) => {
    const slideId = parseInt(th.dataset.slide, 10);
    if (slideId === index) {
      th.classList.add("active");
      th.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    } else {
      th.classList.remove("active");
    }
  });
}

function nextSlide() {
  if (currentSlideIndex < TOTAL_SLIDES) {
    goToSlide(currentSlideIndex + 1);
  } else {
    goToSlide(1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 1) {
    goToSlide(currentSlideIndex - 1);
  } else {
    goToSlide(TOTAL_SLIDES);
  }
}

/* ==========================================================================
   5. Category Filters & Fast Jumps
   ========================================================================== */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".case-card, .cinema-showcase-box");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.dataset.filter;
      cards.forEach(card => {
        if (filterVal === "all") {
          card.style.display = "";
        } else {
          const cats = card.dataset.category || "";
          if (cats.includes(filterVal)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });
}

/* ==========================================================================
   6. Contact Inquiry Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");
  const isRtl = document.documentElement.getAttribute("dir") === "rtl";

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("formName").value.trim();
    const contact = document.getElementById("formContact").value.trim();
    const message = document.getElementById("formMessage").value.trim();

    if (!name || !contact || !message) {
      if (status) {
        status.textContent = isRtl ? "لطفاً تمام موارد را تکمیل فرمایید." : "Please fill out all fields.";
        status.style.color = "var(--accent)";
      }
      return;
    }

    if (status) {
      status.textContent = isRtl ? "پیام شما با موفقیت ثبت شد. به‌زودی با شما تماس خواهم گرفت." : "Thank you! Your note has been received. I will be in touch shortly.";
      status.style.color = "var(--green-sapling)";
    }
    form.reset();
  });
}

/* ==========================================================================
   7. Mobile Menu & Keyboard Shortcuts
   ========================================================================== */
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("siteNav");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("mobile-active");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("mobile-active");
    });
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    const deckModal = document.getElementById("deckModal");
    const isDeckOpen = deckModal && deckModal.classList.contains("active");

    if (isDeckOpen) {
      if (e.key === "Escape") closeDeck();
      if (e.key === "ArrowRight") {
        document.documentElement.getAttribute("dir") === "rtl" ? prevSlide() : nextSlide();
      }
      if (e.key === "ArrowLeft") {
        document.documentElement.getAttribute("dir") === "rtl" ? nextSlide() : prevSlide();
      }
    } else if (currentWorldKey) {
      if (e.key === "Escape") closeWorldLanding();
      if (e.key === "ArrowRight") navigateWorld(1);
      if (e.key === "ArrowLeft") navigateWorld(-1);
    }
  });
}
