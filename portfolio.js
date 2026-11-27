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
    category: "Brand · Retail · Sales Activation",
    categoryFa: "Brand · Retail · Sales Activation",
    headline: "Turning a store opening into attention, interaction and footfall.",
    headlineFa: "قرار نبود فقط خبر افتتاح فروشگاه را بدهیم؛ باید توجه را به تعامل و رفت‌وآمد واقعی تبدیل می‌کردیم.",
    challenge: "Khanoumi had opened a large store in Opal Mall. The marketing problem was not simply awareness; it was stopping people in a busy corridor, creating curiosity and moving them physically into the store.",
    challengeFa: "خانومی یک فروشگاه بزرگ در اپال باز کرده بود. مسئله این نبود که افتتاحیه را اعلام کنیم؛ مسئله این بود که وسط شلوغی پاساژ کسی را متوقف کنیم، کنجکاوش کنیم و کاری کنیم خودش بخواهد وارد فروشگاه شود.",
    role: "Retail Activation Strategy · Concept · Character · Interaction Journey",
    roleFa: "استراتژی فعال‌سازی · ایده‌پردازی · خلق کاراکتر · طراحی مسیر تعامل · تجربه فروشگاهی",
    territory: "Nostrazhamous: a playful beauty oracle designed to interrupt routine movement and invite participation.",
    territoryFa: "نوستراژاموس؛ فالگیر بامزه و کمی مرموز دنیای زیبایی که رهگذر را وارد بازی می‌کرد.",
    mechanics: "Passerby → Character → QR → Personalized Beauty Fortune → Store Entry → Wheel → Pink Suitcase.",
    mechanicsFa: "رهگذر → نوستراژاموس → QR → فال شخصی زیبایی → ورود به فروشگاه → گردونه شانس → چمدان صورتی.",
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
    category: "Marketing · Content · Customer Experience",
    categoryFa: "Marketing · Content · Customer Experience",
    headline: "Building trust through car culture, content and experience.",
    headlineFa: "اعتماد را از دل فرهنگ خودرو، محتوا و تجربه ساختیم.",
    challenge: "Buying and selling used cars is full of uncertainty. Hamrah Mechanic needed to make expertise easier to understand and trust — not just provide technical reports.",
    challengeFa: "خرید و فروش خودرو پر از استرس است؛ پول زیادی وسط است و معمولاً یک طرف بیشتر از طرف دیگر می‌داند. همراه مکانیک اگر فقط گزارش فنی می‌داد کافی نبود؛ باید حس یک همراه آشنا و قابل‌اعتماد را می‌ساخت.",
    role: "Creative Marketing Supervisor → Creative Director · Content Strategy · Campaigns · CX · Customer Education",
    roleFa: "Creative Marketing Supervisor → Creative Director · استراتژی محتوا · کمپین · CX · آموزش مشتری",
    territory: "A culturally fluent companion that understands both cars and the people who live with them.",
    territoryFa: "همراهی که هم ماشین را می‌شناسد، هم فرهنگش را؛ از خاطرهٔ پیکان تا توضیح ساده و قابل‌فهم کارشناسی.",
    mechanics: "Car Culture Content → Cultural Campaigns → Understandable Inspection Evidence → Journey Design → Participation & Trust.",
    mechanicsFa: "محتوای فرهنگ خودرو → کمپین‌های فرهنگی → شواهد کارشناسی قابل‌فهم → بهبود سفر مشتری → مشارکت و اعتماد.",
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
    category: "Product Marketing · Growth · Engagement",
    categoryFa: "Product Marketing · Growth · Engagement",
    headline: "From product communication and emotion to acquisition and engagement.",
    headlineFa: "از احساس و محصول تا acquisition و engagement.",
    challenge: "Cashback products can easily become a conversation about percentages. Baman needed product communication that connected everyday purchase behavior to emotion and participation.",
    challengeFa: "کش‌بک و پاداش خرید خیلی زود می‌تواند تبدیل شود به عدد و درصد. بامَن به چیزی انسانی‌تر احتیاج داشت؛ حسی که ارتباط محصول، خرید روزمره و مشارکت را به هم وصل کند.",
    role: "Product Marketing · Product Communication · Campaigns · Acquisition · Engagement",
    roleFa: "Product Marketing · ارتباط محصول · کمپین · acquisition · engagement",
    territory: "The emotional idea of “being with me” became a bridge between memory, product and participation.",
    territoryFa: "هستهٔ ایده همان «با من بودن» بود؛ یک حس ساده و آشنا که از ترانه و خاطره می‌آمد و به رفتار واقعی وصل می‌شد.",
    mechanics: "Song & Memory → Participation → Receipt Upload → Store Visit → Reward.",
    mechanicsFa: "ترانه و خاطره → مشارکت → ثبت فاکتور خرید → حضور در فروشگاه → پاداش.",
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
    category: "Marketing · Brand · CX · Digital Ecosystem",
    categoryFa: "Marketing · Brand · CX · Digital Ecosystem",
    headline: "From brand transformation to patient experience and digital ecosystem growth.",
    headlineFa: "از بازطراحی برند تا تجربه بیمار و رشد اکوسیستم دیجیتال.",
    challenge: "Hospitals are inherently anxious environments. The job was to align brand, communication, patient experience and digital and physical touchpoints so “In Praise of Life” became more than a slogan.",
    challengeFa: "بیمارستان ذاتاً جای پراضطرابی است. مسئله این بود که برند، ارتباطات، تجربه بیمار و نقاط تماس دیجیتال و فیزیکی در یک جهت کار کنند و «در ستایش زندگی» فقط یک شعار نباشد.",
    role: "Marketing & Brand Strategy Director · Brand Transformation · CX · 9 Digital Platforms · Loyalty & Engagement",
    roleFa: "Marketing & Brand Strategy Director · بازطراحی برند · CX · ۹ پلتفرم دیجیتال · loyalty & engagement",
    territory: "In Praise of Life: making birth, hope, tenderness and resilience visible inside the healthcare experience.",
    territoryFa: "«در ستایش زندگی»؛ دیدن تولد، امید، مهربانی و دوام آوردن در دل تجربه درمان.",
    mechanics: "Brand Strategy → Verbal Guide → 9 Websites → Patient Experience → Loyalty & Engagement → CSR Programs.",
    mechanicsFa: "استراتژی برند → کتابچه لحن → ۹ وب‌سایت → تجربه بیمار → برنامه‌های loyalty و engagement → پروژه‌های مسئولیت اجتماعی.",
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
    category: "B2B Marketing · Sales Enablement · Community",
    categoryFa: "B2B Marketing · Sales Enablement · Community",
    headline: "Rebuilding trust with the sales network.",
    headlineFa: "اعتماد شبکه فروش را باید از نو ساخت.",
    challenge: "Many insurance sellers saw online platforms as competitors. The marketing challenge was to move the relationship from suspicion toward partnership and professional belonging.",
    challengeFa: "بخشی از نمایندگان بیمه، پلتفرم آنلاین را رقیب خودشان می‌دیدند. مسئله این بود که این رابطه از سوءظن و فاصله به همکاری و حس هم‌تیمی بودن نزدیک شود.",
    role: "B2B Marketing · Positioning · Event Strategy · Sales Enablement · Community Building",
    roleFa: "B2B Marketing · جایگاه‌سازی · رویداد · sales enablement · community building",
    territory: "Reframing insurance agents as people behind the everyday security of families.",
    territoryFa: "نمایندهٔ بیمه را نه فروشنده، که یکی از آدم‌های پشت آرامش خانواده تعریف کردیم.",
    mechanics: "Ba Hamim Convention → Original Song → Recognition Rituals → Digital Sales Tool → Community & Belonging.",
    mechanicsFa: "همایش «باهمیم» → ترانه اختصاصی → قدردانی و آیین‌ها → ابزار فروش دیجیتال → حس جامعه و تعلق.",
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
    category: "Behavioral Growth · Gamification · Experience Design",
    categoryFa: "Behavioral Growth · Gamification · Experience Design",
    headline: "Game mechanics matter when they create real behavior.",
    headlineFa: "بازی وقتی ارزش دارد که رفتار واقعی بسازد.",
    challenge: "Too much gamification stops at points and badges. The job was to design motivation around curiosity, self-knowledge, competition and social connection.",
    challengeFa: "خیلی از تجربه‌های بازی‌وار به امتیاز و مدال ختم می‌شوند. مسئله برای من طراحی انگیزه‌ای بود که از کنجکاوی، خودشناسی، رقابت یا همدلی واقعی آدم‌ها استفاده کند.",
    role: "Behavioral Design · Game Mechanics · Engagement · Habit Loops",
    roleFa: "Behavioral Design · طراحی مکانیک بازی · engagement · habit loops",
    territory: "Experiences whose motivation comes from the activity itself — not only the reward.",
    territoryFa: "بازی‌هایی که انگیزه‌شان از خود تجربه می‌آید، نه فقط جایزه.",
    mechanics: "Tehran Butterflies · Mirror · Rend · Ham-Ghalb — four concepts built on four different human motivations.",
    mechanicsFa: "پروانه‌های تهران · آینه · رِند · هم‌قلب؛ چهار ایده با چهار نوع انگیزه انسانی.",
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
    category: "Product & Character Strategy · Kids",
    categoryFa: "Product & Character Strategy · Kids",
    headline: "Building a companion, not a decorative mascot.",
    headlineFa: "سامفی قرار بود دوست باشد، نه معلم.",
    challenge: "Children do not always need another adult voice telling them what to do. They often need a character that feels closer to their level and can hold fear and curiosity without judgment.",
    challengeFa: "بچه‌ها همیشه به یک بزرگسال نصیحت‌گر نیاز ندارند؛ گاهی به شخصیتی نیاز دارند که هم‌قد خودشان باشد و بدون قضاوت، ترس و کنجکاوی‌شان را بفهمد.",
    role: "Product Concept · IP Development · Character Strategy · Story System",
    roleFa: "Product concept · IP development · character strategy · story system",
    territory: "Cloud of Wonders: a soft imaginative world for turning childhood fears and questions into stories.",
    territoryFa: "«ابر شگفتی‌ها»؛ جهانی نرم و خیال‌انگیز برای قصه‌کردن ترس‌ها و سؤال‌های بچه‌ها.",
    mechanics: "Samfi Character → Illustrated Stories → Interactive Prompts → Parent–Child Conversation.",
    mechanicsFa: "کاراکتر سامفی → قصه‌های تصویری → موقعیت‌های تعاملی → گفت‌وگوی والد و کودک.",
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
    category: "Employer Brand · Employee Experience · Culture",
    categoryFa: "Employer Brand · Employee Experience · Culture",
    headline: "Culture is built through small repeated rituals.",
    headlineFa: "فرهنگ از بخشنامه نمی‌آید؛ از کارهای کوچک هر روز می‌آید.",
    challenge: "Culture does not come from policy decks. It grows when people feel seen, heard and connected through everyday behavior.",
    challengeFa: "فرهنگ سازمانی جایی شکل می‌گیرد که آدم‌ها دیده شوند، صدایشان شنیده شود و چند رسم کوچک مشترک داشته باشند.",
    role: "Employee Experience · Employer Brand · Team Ritual Design",
    roleFa: "Employee Experience · Employer Brand · طراحی آیین‌های تیمی",
    territory: "A workplace where people are more than headcount — they can be tired, appreciated and heard.",
    territoryFa: "محیط کاری که آدم‌ها در آن فقط «نیروی انسانی» نیستند؛ می‌توانند خسته شوند، تشکر کنند و شنیده شوند.",
    mechanics: "Vitamin CC · Night Listener · Happy Call · Literary Play — small rituals for a healthier team experience.",
    mechanicsFa: "ویتامین CC · شنونده شب · تماس خوشحال · شعرها و نقیضه‌های بامزه؛ آیین‌های کوچک برای حال بهتر تیم.",
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
    category: "Neuromarketing · Entrepreneurship · Consumer Behavior",
    categoryFa: "Neuromarketing · Entrepreneurship · Consumer Behavior",
    headline: "Two years of building, testing and learning.",
    headlineFa: "دو سال ساختن، آزمودن و یادگرفتن.",
    challenge: "Limbik was an intensive entrepreneurship chapter that taught me that strong ideas are not enough; sales, networks, management and structure matter just as much.",
    challengeFa: "لیمبیک برای من یک دوره فشرده کارآفرینی بود؛ جایی که فهمیدم ایده خوب به‌تنهایی کافی نیست و فروش، شبکه، مدیریت و ساختار همان‌قدر مهم‌اند.",
    role: "Co-Founder · Creative Director · Neuromarketing Strategy",
    roleFa: "Co-Founder · Creative Director · Neuromarketing Strategy",
    territory: "Connecting cognitive science and unconscious behavior to practical brand and creative decisions.",
    territoryFa: "وصل‌کردن علوم شناختی و رفتار ناخودآگاه آدم‌ها به تصمیم‌های واقعی برند و خلاقیت.",
    mechanics: "Consumer Research → Biometric & Emotional Measures → Attention Tracking → Creative & Business Decisions.",
    mechanicsFa: "تحقیق رفتار مصرف‌کننده → سنجه‌های زیستی و عاطفی → ردیابی توجه → تصمیم‌های خلاق و تجاری.",
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
    category: "Cinema · Screenwriting · Audience Psychology",
    categoryFa: "Cinema · Screenwriting · Audience Psychology",
    headline: "Here the story itself is the work.",
    headlineFa: "اینجا دیگر برند در کار نیست؛ قصه خودش کار اصلی است.",
    challenge: "Cinema is where I have trained most deeply in character, desire, obstacles, conflict, rhythm and audience attention — the same disciplines that now strengthen my marketing judgment.",
    challengeFa: "سینما جایی است که شخصیت، میل، مانع، کشمکش، ریتم و توجه مخاطب را جدی تمرین کرده‌ام؛ همان چیزهایی که بعداً به تصمیم‌های مارکتینگم عمق داده‌اند.",
    role: "Head Writer · Screenwriter · Writer & Director",
    roleFa: "Head Writer · Screenwriter · Writer & Director",
    territory: "Stories that move through character and choice rather than explanation.",
    territoryFa: "ساختن قصه‌هایی که آدم‌ها را با شخصیت و انتخاب جلو ببرند؛ نه با توضیح.",
    mechanics: "Cold Blooded · Beretta: The Story of a Gun · The Last Neigh of a Horse That Dreamed of Becoming a Butterfly · One of These Days Khosrow Will Die.",
    mechanicsFa: "خون‌سرد · برتا: داستان یک اسلحه · آخرین شیهه اسبی که خواب پروانه شدن می‌دید · یکی از همین روزها خسرو می‌میرد.",
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
    document.getElementById("worldHeroNum").textContent = isRtl ? `کیس ${data.num}` : `Case ${data.num}`;
    document.getElementById("worldHeroCat").textContent = isRtl ? data.categoryFa : data.category;
    document.getElementById("worldHeroTitle").textContent = isRtl ? `${data.titleFa} (${data.title})` : `${data.title} (${data.titleFa})`;
    document.getElementById("worldHeroHeadline").textContent = isRtl ? data.headlineFa : data.headline;
    
    // Breadcrumbs & Counter
    document.getElementById("worldBreadcrumbTitle").textContent = isRtl ? `${data.num} ${data.titleFa}` : `${data.num} ${data.title}`;
    document.getElementById("worldCounterBadge").textContent = isRtl ? `کیس ${data.num} از ۱۰` : `Case ${data.num} of 10`;

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

function navigateToSection(event, targetHash) {
  if (event) event.preventDefault();
  if (!targetHash || !targetHash.startsWith("#")) return false;

  const targetId = targetHash.slice(1);
  const go = () => {
    const mainView = document.getElementById("mainView");
    const worldView = document.getElementById("worldLandingView");
    const nav = document.getElementById("siteNav");
    if (worldView) worldView.style.display = "none";
    if (mainView) mainView.style.display = "block";
    currentWorldKey = null;
    nav?.classList.remove("mobile-active");
    history.pushState(null, "", targetHash);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
  };
  const worldView = document.getElementById("worldLandingView");
  const isWorldOpen = currentWorldKey || (worldView && worldView.style.display !== "none" && getComputedStyle(worldView).display !== "none");
  if (isWorldOpen) runArchitecturalTransition(go); else go();
  return false;
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
    if (CASES_DATA[key]) openWorldLanding(key, true);
    return;
  }
  const mainView = document.getElementById("mainView");
  const worldView = document.getElementById("worldLandingView");
  if (worldView) worldView.style.display = "none";
  if (mainView) mainView.style.display = "block";
  currentWorldKey = null;
  if (hash && hash !== "#") {
    const target = document.querySelector(hash);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
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
        status.textContent = isRtl ? "چند جای فرم هنوز خالیه؛ کاملش کن و دوباره بفرست." : "Please fill out all fields.";
        status.style.color = "var(--accent)";
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry — ${name}`);
    const body = encodeURIComponent(
      `Name / Organization: ${name}\nContact: ${contact}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:m.azizmohammadi@gmail.com?subject=${subject}&body=${body}`;

    if (status) {
      status.textContent = isRtl
        ? "ایمیل آماده شد. اگر برنامهٔ ایمیل باز نشد، مستقیم از شماره یا ایمیل پایین صفحه با من تماس بگیر."
        : "Your email is ready. If your mail app does not open, use the email or phone number below.";
      status.style.color = "var(--green-sapling)";
    }
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
