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
    categoryFa: "فروشگاه · بازی‌وارسازی · تجربه حضوری",
    headline: "Beauty becomes a world. Turning beauty discovery into story, play & footfall.",
    headlineFa: "قرار نبود فقط خبر افتتاح یک فروشگاه را بدهیم؛ باید آدم‌ها را وسط قصه می‌کشیدیم.",
    challenge: "Khanoumi opened a large physical store inside Opal mall. The challenge was not just to announce it, but to stop mall traffic, trigger curiosity, and lead shoppers physically into the store.",
    challengeFa: "خانومی یک فروشگاه بزرگ در اپال باز کرده بود. مسئله این نبود که افتتاحیه را اعلام کنیم؛ مسئله این بود که وسط شلوغی پاساژ کسی را متوقف کنیم، کنجکاوش کنیم و کاری کنیم خودش بخواهد وارد فروشگاه شود.",
    role: "Concept Design · Character Creation · Interactive Journey · Footfall Retail Activation",
    roleFa: "ایده‌پردازی · خلق کاراکتر · طراحی مسیر تعامل · تجربه فروشگاهی",
    territory: "The Mystical Beauty Oracle: Playful fortune-telling where beauty advice meets theatrical entertainment.",
    territoryFa: "یک فالگیر بامزه و کمی مرموز برای دنیای زیبایی؛ نوستراژاموسی که وسط راهروهای پاساژ آدم‌ها را وارد بازی می‌کرد.",
    mechanics: "Passerby → Nostrazhamous Character → QR Code Scan → Personalized Fortune → Store Entry → Fortune Wheel → Tangible Reward (The Pink Suitcase).",
    mechanicsFa: "رهگذر → نوستراژاموس → QR → فال شخصی زیبایی → ورود به فروشگاه → گردونه شانس → چمدان صورتی.",
    slides: [5, 6, 7, 8],
    captions: [
      "Case 01 Overview: Turning beauty discovery into story, play & retail footfall.",
      "Character Activation: Nostrazhamous, the theatrical beauty oracle engaging shoppers.",
      "Interaction Architecture: A seamless bridge from corridor curiosity to in-store purchase.",
      "Reward Becomes Fantasy: The Pink Suitcase as an iconic tangible reward and memory."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۴: افتتاح فروشگاه را از یک خبر ساده به یک بازی واقعی در مسیر پاساژ تبدیل کردیم.",
      "پلیت ۰۲ / ۴: نوستراژاموس؛ فالگیر شوخ‌طبعی که وسط راهرو آدم‌ها را نگه می‌داشت و سر صحبت را باز می‌کرد.",
      "پلیت ۰۳ / ۴: مسیر تعامل از همان کنجکاویِ بیرون فروشگاه شروع می‌شد و قدم‌به‌قدم آدم را به داخل می‌برد.",
      "پلیت ۰۴ / ۴: چمدان صورتی فقط جایزه نبود؛ چیزی بود که تجربه را به یک خاطرهٔ قابل‌تعریف تبدیل می‌کرد."
    ]
  },
  hamrah: {
    num: "02",
    key: "hamrah",
    title: "Hamrah Mechanic",
    titleFa: "همراه مکانیک",
    category: "Car Culture · Trust Architecture · Gamification",
    categoryFa: "فرهنگ خودرو · اعتماد · بازی‌وارسازی",
    headline: "Car culture becomes trust. Turning automotive anxiety into story, guidance & participation.",
    headlineFa: "خرید و فروش خودرو اضطراب دارد؛ ما سعی کردیم اعتماد را به زبان خودِ آدم‌های ماشین‌باز بسازیم.",
    challenge: "Automotive transactions in Iran carry high financial anxiety and information asymmetry. Hamrah Mechanic needed to shift from dry technical inspection to an empathetic cultural ally.",
    challengeFa: "خرید و فروش خودرو در ایران پر از استرس است؛ پول زیادی وسط است و معمولاً یک طرف بیشتر از طرف دیگر می‌داند. همراه مکانیک اگر فقط گزارش فنی می‌داد، کافی نبود؛ باید حسِ یک همراه آشنا و قابل‌اعتماد را می‌ساخت.",
    role: "Content Strategy · Cultural Campaigns · Narrative Architecture · Gamification Mechanics",
    roleFa: "استراتژی محتوا · کمپین فرهنگی · روایت · طراحی مکانیک‌های بازی",
    territory: "The Informed Driver's Culture: Celebrating automotive heritage while equipping motorists with transparent, incontrovertible evidence.",
    territoryFa: "همراهی که هم ماشین را می‌شناسد، هم فرهنگش را؛ از خاطرهٔ پیکان تا توضیح ساده و قابل‌فهمِ کارشناسی.",
    mechanics: "Nostalgic Hook ('Happy Birthday Peykan') → Plain-Language Technical Evidence → Milestone Ownership Gamification → Urban Reassurance Billboards.",
    mechanicsFa: "«تولدت مبارک پیکان» → توضیح انسانیِ شواهد فنی → بازی‌وار کردن نقاط مهم مسیر مالکیت و معامله → پیام‌های ساده و آرامش‌بخش در شهر.",
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
      "پلیت ۰۱ / ۷: از اضطراب معامله شروع کردیم و رسیدیم به روایتی که هم راهنما بود، هم آشنا.",
      "پلیت ۰۲ / ۷: لحن را از زبان خودِ راننده‌ها گرفتیم؛ آگاه، صمیمی و گاهی شوخ.",
      "پلیت ۰۳ / ۷: «تولدت مبارک پیکان»؛ استفاده از یک خاطرهٔ جمعی برای نزدیک‌تر کردن برند به آدم‌ها.",
      "پلیت ۰۴ / ۷: بیش از ۴۰۰ نقطهٔ کارشناسی را از زبان فنی بیرون آوردیم و به چیزهایی قابل‌دیدن و فهمیدن تبدیل کردیم.",
      "پلیت ۰۵ / ۷: مسیر خرید و فروش را به مرحله‌های روشن‌تر و قابل‌پیگیری تبدیل کردیم.",
      "پلیت ۰۶ / ۷: «همراه خرید، همراه فروش»؛ یک قول ساده و روشن روی بیلبوردهای شهر.",
      "پلیت ۰۷ / ۷: محتوا، کارشناسی و کمپین شهری را زیر یک حرف واحد کنار هم نشاندیم."
    ]
  },
  baman: {
    num: "03",
    key: "baman",
    title: "Baman",
    titleFa: "بامَن",
    category: "Emotion · Verbal Identity · UGC",
    categoryFa: "احساس · زبان برند · مشارکت",
    headline: "Emotion becomes participation. Turning memory, music & everyday purchase into a brand movement.",
    headlineFa: "از یک ترانه و یک حسِ آشنا شروع کردیم و آن را به مشارکت واقعی در خرید روزمره رساندیم.",
    challenge: "Cashback and discount apps often feel transactional and cold. Baman needed to make everyday household spending feel emotionally resonant, communal, and poetic.",
    challengeFa: "کش‌بک و پاداش خرید خیلی زود می‌تواند تبدیل شود به عدد و درصد. بامَن به چیزی انسانی‌تر احتیاج داشت؛ حسی که خرید روزمره را به خاطره، دلتنگی و مشارکت وصل کند.",
    role: "Campaign Architecture · Verbal Identity · Emotional Concepts · UGC Mechanics · Retail Activation",
    roleFa: "ایده و ساختار کمپین · زبان برند · مشارکت مخاطب · تجربه فروشگاهی",
    territory: "The Emotional Resonance of Togetherness: Rooted in classic Persian love songs and communal warmth.",
    territoryFa: "هستهٔ ایده همان «با من بودن» بود؛ یک حسِ ساده و آشنا که از ترانه و خاطره می‌آمد.",
    mechanics: "Hayedeh Lyric Hook ('Kash [Ba Man] boodi...') → Social Absence Memories → Receipt Upload → Retail Store Footfall Promotion.",
    mechanicsFa: "«کاش با من بودی...» → تعریف خاطره و دلتنگی → ثبت فاکتور خرید → رفت‌وآمد واقعی به فروشگاه‌های افق کوروش.",
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
      "پلیت ۰۱ / ۸: موسیقی و خاطره را به یک رفتار واقعی در خرید وصل کردیم.",
      "پلیت ۰۲ / ۸: «کاش با من بودی و می‌دیدی...»؛ بازی با نام برند و یک ترانهٔ آشنا.",
      "پلیت ۰۳ / ۸: دلتنگی بهانه‌ای شد برای اینکه آدم‌ها خودشان قصه‌شان را تعریف کنند.",
      "پلیت ۰۴ / ۸: قصه در نهایت باید به رفتار می‌رسید؛ اینجا به خرید و حضور در فروشگاه.",
      "پلیت ۰۵ / ۸: سنگینی خرج روزمره را با یک تصویر ساده نشان دادیم؛ تخته‌سنگی بزرگ و بیل مکانیکی‌ای که زورش به آن نمی‌رسد.",
      "پلیت ۰۶ / ۸: ترانه → خاطره → کامنت → فاکتور خرید → پاداش. یک مسیر ساده از احساس تا عمل.",
      "پلیت ۰۷ / ۸: داخل تیم هم با شعر و نقیضه بازی کردیم؛ برای خندیدن، سبک‌شدن و ساختن روحیهٔ مشترک.",
      "پلیت ۰۸ / ۸: اصل ماجرا همین بود؛ احساس وقتی برای برند مهم می‌شود که بتواند به رفتار واقعی وصل شود."
    ]
  },
  nikan: {
    num: "04",
    key: "nikan",
    title: "Nikan Hospitals",
    titleFa: "بیمارستان‌های نیکان",
    category: "Rebranding · Verbal Guide · Human CX · CSR",
    categoryFa: "برند · زبان · تجربهٔ بیمار · مسئولیت اجتماعی",
    headline: "Healthcare becomes human. Rebranding a premier hospital group around the celebration of life.",
    headlineFa: "در نیکان سعی کردیم بیمارستان را از زاویهٔ زندگی ببینیم، نه فقط درمان؛ همه‌چیز از «در ستایش زندگی» شروع شد.",
    challenge: "Hospitals typically induce fear, anxiety, and sterile detachment. Nikan needed a profound rebrand that celebrates life and weaves warmth into every clinical touchpoint.",
    challengeFa: "بیمارستان ذاتاً جای پراضطرابی است. مسئله این بود که بدون شعارزدگی، در لحن، فضا، سرویس و جزئیاتِ تجربه، کمی گرما و زندگی وارد کنیم.",
    role: "Rebrand Creative Direction · Tagline Creation · 64-Page Verbal Guide · 9 Digital Redesigns · CSR Programs",
    roleFa: "هدایت خلاق بازطراحی برند · «در ستایش زندگی» · کتابچهٔ لحن ۶۴ صفحه‌ای · بازطراحی ۹ وب‌سایت · پروژه‌های مسئولیت اجتماعی",
    territory: "In Praise of Life: Celebrating human resilience, tenderness, and every breath of healing.",
    territoryFa: "«در ستایش زندگی» برای ما یعنی دیدن همان چیزهایی که وسط درمان ممکن است فراموش شوند؛ تولد، مهربانی، امید و دوام آوردن.",
    mechanics: "64-Page Verbal Identity Guide → 9 Unified Hospital Websites → Simorgh Discharge Feather → Newborn 'Ham-Nahal' Chitgar Tree Planting → 1,000 Origami Chicks.",
    mechanicsFa: "کتابچهٔ ۶۴ صفحه‌ای لحن → ۹ وب‌سایت گروه → مرهمِ پرِ سیمرغ → هم‌نهالِ نوزادان در چیتگر → هزار جوجهٔ کاغذی یلدا.",
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
      "پلیت ۰۱ / ۱۲: همه‌چیز از یک سؤال شروع شد؛ چطور بیمارستان می‌تواند بیشتر یادآور زندگی باشد؟",
      "پلیت ۰۲ / ۱۲: هویت بصری را از روی کاغذ تا محیط و صفحهٔ دیجیتال یکدست کردیم.",
      "پلیت ۰۳ / ۱۲: برای ۷ موقعیت ارتباطی مختلف، یک کتابچهٔ ۶۴ صفحه‌ای نوشتیم تا لحن نیکان صمیمی، روشن و محترمانه بماند.",
      "پلیت ۰۴ / ۱۲: ۹ وب‌سایت پراکندهٔ مراکز نیکان را دوباره طراحی و هماهنگ کردیم.",
      "پلیت ۰۵ / ۱۲: حتی لباس، ست نوزاد و بستهٔ مراقبت هم می‌توانستند بخشی از حسِ برند باشند.",
      "پلیت ۰۶ / ۱۲: درخت زندگی، کافه و کتاب کودک؛ چند جزئیات کوچک برای اینکه تجربهٔ درمان کمی نرم‌تر شود.",
      "پلیت ۰۷ / ۱۲: برای مراقبت در خانه سراغ پرِ سیمرغ رفتیم؛ استعاره‌ای آشنا از کمک وقتی واقعاً به آن نیاز داری.",
      "پلیت ۰۸ / ۱۲: ۵۹٬۶۷۵ قدم هفتگی پرستاران را به چیزی دیدنی و قابل‌قدردانی تبدیل کردیم.",
      "پلیت ۰۹ / ۱۲: «هزار جوجهٔ کاغذی»؛ یک یلدای کوچک که به کمک هزینهٔ درمان بیماران نیازمند وصل شد.",
      "پلیت ۱۰ / ۱۲: برای هر نوزاد یک نهال در چیتگر؛ چیزی که بعد از ترخیص هم رشدش ادامه پیدا کند.",
      "پلیت ۱۱ / ۱۲: یک نشان سادهٔ «کودک در خودرو» برای همان مسیر اولِ خانه.",
      "پلیت ۱۲ / ۱۲: در سلامت، برند بیشتر از هر جا در همان رفتارهای کوچک و انسانی حس می‌شود."
    ]
  },
  azki: {
    num: "05",
    key: "azki",
    title: "Azki Seller",
    titleFa: "ازکی سِلِر",
    category: "B2B Enablement · Agent Culture · Event Architecture",
    categoryFa: "شبکه فروش · B2B · رویداد و تعلق",
    headline: "B2B becomes empowerment. Turning a sales tool into professional pride and belonging.",
    headlineFa: "ازکی‌سلر قرار نبود فقط ابزار فروش باشد؛ باید به نماینده حسِ شریک بودن و رشد می‌داد.",
    challenge: "Independent insurance sellers viewed online aggregators as existential threats. Azki Seller had to transform skepticism into partnership and communal dignity.",
    challengeFa: "بخشی از نمایندگان بیمه، پلتفرم آنلاین را رقیب خودشان می‌دیدند. مسئله این بود که این رابطه از سوءظن و فاصله، به همکاری و حسِ هم‌تیمی بودن نزدیک شود.",
    role: "Brand Positioning · 'Ba Hamim' Flagship Convention · Anthem Songwriting · Rituals of Recognition",
    roleFa: "جایگاه برند · همایش «باهمیم» · ترانهٔ اختصاصی · آیین‌های قدردانی از شبکه فروش",
    territory: "The Architects of Security: Positioning insurance agents as resilient societal guardians.",
    territoryFa: "نمایندهٔ بیمه را نه فروشنده، که یکی از آدم‌های پشتِ آرامش خانواده تعریف کردیم.",
    mechanics: "Nationwide Agent Gathering (Milad Tower) → Dedicated 'Ba Hamim' Anthem → Staged Honor Medals → Digital Sales Companion App.",
    mechanicsFa: "گردهمایی برج میلاد → ترانهٔ «باهمیم» → قدردانی روی صحنه → ابزار دیجیتال فروش؛ چند تکه برای ساختن یک حسِ مشترک.",
    slides: [37, 38, 39, 40, 41],
    captions: [
      "Case 05 Overview: Transforming a B2B network into a brotherhood of professional pride.",
      "Strategic Alignment: Positioning Azki Seller not as an overlord, but as a sales amplifier.",
      "Flagship Convention: 'Ba Hamim' at Milad Tower gathering thousands of agents under one banner.",
      "The Anthem: Custom-written anthem lyrics uniting diverse regional agents into a shared voice.",
      "Rituals of Belonging: Trophies, badges and ongoing community mechanisms sustaining motivation."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۵: ازکی‌سلر را به‌جای یک ابزار، به رابطه‌ای میان برند و شبکهٔ فروش نگاه کردیم.",
      "پلیت ۰۲ / ۵: حرف اصلی ساده بود؛ ازکی‌سلر نباید رقیب نماینده دیده شود، باید ابزار رشدش باشد.",
      "پلیت ۰۳ / ۵: «باهمیم»؛ گردهمایی بزرگ نمایندگان بیمه در برج میلاد برای ساختن حسِ یک جمع واقعی.",
      "پلیت ۰۴ / ۵: یک ترانهٔ اختصاصی که قرار بود فقط شنیده نشود؛ جمع با آن هم‌صدا شود.",
      "پلیت ۰۵ / ۵: قدردانی و آیین‌های کوچک برای اینکه حسِ تعلق فقط محدود به یک همایش نماند."
    ]
  },
  gamify: {
    num: "06",
    key: "gamify",
    title: "Gamify",
    titleFa: "گیمیفای",
    category: "Game Mechanics · Intrinsic Motivation · Concept Design",
    categoryFa: "بازی · انگیزهٔ درونی · طراحی ایده",
    headline: "Play becomes purpose. Gamification concepts that turn routine into voluntary engagement.",
    headlineFa: "برای من گیمیفیکیشن وقتی جذاب است که آدم بدون زور و جایزهٔ الکی، خودش دلش بخواهد ادامه بدهد.",
    challenge: "Most gamification stops at superficial points, badges and leaderboards. The objective was creating deeply meaningful metaphoric games rooted in human psychology.",
    challengeFa: "خیلی از تجربه‌های بازی‌وار به امتیاز و مدال ختم می‌شوند. من بیشتر دنبال مکانیکی‌ام که از کنجکاوی، خودشناسی، رقابت یا همدلی واقعی آدم‌ها استفاده کند.",
    role: "Core Game Architecture · Metaphor Design · Behavior Loop Engineering · Concept Frameworks",
    roleFa: "طراحی مکانیک بازی · استعاره و جهان‌سازی · حلقه‌های رفتاری · ایده‌پردازی",
    territory: "The Architecture of Intrinsic Delight: Games where self-discovery, altruism and curiosity eclipse extrinsic rewards.",
    territoryFa: "بازی‌هایی که انگیزه‌شان از خودِ تجربه می‌آید؛ از کنجکاوی، شناخت خود و ارتباط با دیگران، نه فقط جایزه.",
    mechanics: "Butterflies of Tehran (Nature Discovery) · The Social Mirror · Rend (Persian Wit Game) · Ham-Ghalb (Cardiopulmonary Health Mechanics).",
    mechanicsFa: "پروانه‌های تهران · آینه · رِند · هم‌قلب؛ چهار ایده با چهار جور انگیزهٔ انسانی.",
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
      "پلیت ۰۱ / ۶: هدف همهٔ این ایده‌ها یکی بود؛ آدم از روی میل خودش یک قدم جلوتر برود.",
      "پلیت ۰۲ / ۶: پروانه‌های تهران؛ مأموریت‌های کوچک شهری برای دیدن طبیعتی که معمولاً از کنارش رد می‌شویم.",
      "پلیت ۰۳ / ۶: آینه؛ بازی‌ای که انتخاب‌هایت را جلوی خودت می‌گذارد تا کمی بیشتر به رفتارت فکر کنی.",
      "پلیت ۰۴ / ۶: رِند؛ بازی با رندی، شوخی موقعیت و زبان فارسی.",
      "پلیت ۰۵ / ۶: هم‌قلب؛ تبدیل مراقبت روزمره از قلب به یک مسیر قابل‌پیگیری و انگیزه‌بخش.",
      "پلیت ۰۶ / ۶: بازی‌وارسازی برای من یعنی کاربر فقط «کاربر» نباشد؛ حس کند خودش وسط قصه است."
    ]
  },
  samf: {
    num: "07",
    key: "samf",
    title: "Samf Kids",
    titleFa: "سمف کیدز",
    category: "Character IP · Children's Storyworld · Edutainment",
    categoryFa: "شخصیت‌پردازی · جهان کودک · سرگرمی و یادگیری",
    headline: "Imagination becomes a friend. Building the Samfi universe to spark emotional growth in children.",
    headlineFa: "سامفی قرار بود قبل از هر چیز یک دوست باشد؛ دوستی که بچه بتواند ترس‌ها و سؤال‌هایش را با او زندگی کند.",
    challenge: "Children require relatable, non-preachy companions who understand childhood fears, bedtime anxieties, and curiosity without condescension.",
    challengeFa: "بچه‌ها همیشه به یک بزرگسالِ نصیحت‌گر نیاز ندارند؛ گاهی به شخصیتی نیاز دارند که هم‌قدِ خودشان باشد و بدون قضاوت، ترس و کنجکاوی‌شان را بفهمد.",
    role: "Character IP Development · Story Bible · Narrative Episodes · Emotional Growth Milestones",
    roleFa: "توسعهٔ کاراکتر و IP · بایبل داستانی · نویسندگی اپیزود · طراحی مسیر رشد عاطفی",
    territory: "The Wonder Cloud: A soft, curious realm where imagination resolves everyday childhood hurdles.",
    territoryFa: "«ابر شگفتی‌ها»؛ جایی نرم و خیال‌انگیز برای قصه‌کردنِ ترس‌ها و گره‌های کوچکِ بچه‌ها.",
    mechanics: "Samfi Character Anatomy → Relatable Character Flaws → Visual Storybook Modules → Parental Co-Reading Bridges.",
    mechanicsFa: "ساختن سامفی و نقص‌های دوست‌داشتنی‌اش → قصه‌های تصویری → سؤال‌ها و موقعیت‌هایی برای گفت‌وگوی والد و کودک.",
    slides: [48, 49, 50, 51, 52],
    captions: [
      "Case 07 Overview: Crafting an enduring character universe that nurtures children's inner confidence.",
      "Character DNA: Anatomy of Samfi — curious ears, soft proportions, and expressions of vulnerability.",
      "Worldbuilding Elements: The Cloud Tree, the Pocket of Fears, and tools of gentle resolution.",
      "Narrative Arc: Episode structures navigating fear of the dark, sibling sharing, and anger.",
      "Parental Integration: Interactive conversation prompts guiding families through meaningful bedtime bonding."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۵: ساختن یک شخصیت که بتواند مدت‌ها کنار کودک بماند، نه فقط در یک قصه.",
      "پلیت ۰۲ / ۵: ظاهر سامفی هم باید حرفش را می‌زد؛ گوش‌های شنوا، فرم‌های نرم و صورتی که تهدیدکننده نباشد.",
      "پلیت ۰۳ / ۵: درخت ابرها، جیب ترس‌های کوچک و ابزارهای عجیب؛ جهان باید خودش هم بازی‌کردنی باشد.",
      "پلیت ۰۴ / ۵: قصه‌ها دور چیزهای واقعیِ بچه‌ها می‌چرخند؛ ترس از تاریکی، قهر، آشتی و بخشش.",
      "پلیت ۰۵ / ۵: آخر هر قصه چند سؤال می‌ماند تا قبل از خواب، گفت‌وگوی واقعی بین بچه و والد شروع شود."
    ]
  },
  rituals: {
    num: "08",
    key: "rituals",
    title: "Organizational Rituals",
    titleFa: "آیین‌های درون‌سازمانی",
    category: "Culture Design · Internal Brand · Emotional Health",
    categoryFa: "فرهنگ تیم · تجربهٔ کارکنان · حالِ آدم‌ها",
    headline: "Culture becomes a living ritual. Designing workplace ceremonies that foster genuine belonging.",
    headlineFa: "فرهنگ سازمانی برای من از پوستر روی دیوار نمی‌آید؛ از همان رفتارهای کوچکی می‌آید که هر روز تکرار می‌شوند.",
    challenge: "Internal culture cannot be dictated by posters or HR memos; it lives in daily micro-rituals, listening channels, and communal celebrations.",
    challengeFa: "بخشنامه فرهنگ نمی‌سازد. فرهنگ جایی شکل می‌گیرد که آدم‌ها دیده شوند، صدایشان شنیده شود و چند رسم کوچکِ مشترک داشته باشند.",
    role: "Internal Culture Architect · Ritual Conceptualizer · Employee Experience (EX) Touchpoints",
    roleFa: "طراحی آیین‌های تیمی · تجربهٔ کارکنان · ایده‌پردازی برای فرهنگ سازمان",
    territory: "The Humanized Workplace: Organizations where psychological safety and celebratory traditions thrive.",
    territoryFa: "محیط کاری که آدم‌ها در آن فقط «نیروی انسانی» نیستند؛ می‌توانند خسته شوند، شوخی کنند، تشکر کنند و شنیده شوند.",
    mechanics: "Vitamin CC I-Win (Team Appreciation) · Night Listener (Shift Empathy) · Happy Call · Team Lore Parodies.",
    mechanicsFa: "ویتامین CC · شنوندهٔ شب · تماس خوشحال · شعرها و نقیضه‌های بامزه؛ چند آیین کوچک برای حالِ بهترِ تیم.",
    slides: [53, 54, 55],
    captions: [
      "Case 08 Overview: Transforming workplaces into emotionally connected, resilient tribes.",
      "Vitamin CC: Surprise wellness and recognition packs delivering peer appreciation directly to desks.",
      "Night Listener: Honoring customer-facing night shift crews through warm midnight hospitality.",
      "Cultural Humor: Team parodies and folklore turning shared delivery pressure into collective joy."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۳: فرهنگ تیم را از اتفاق‌های کوچک و تکرارشونده ساختیم، نه از شعارهای بزرگ.",
      "پلیت ۰۲ / ۳: ویتامین CC؛ یک غافلگیری ساده روی میز برای اینکه آدم‌ها از هم تشکر کنند.",
      "پلیت ۰۳ / ۳: شنوندهٔ شب؛ چای گرم و نامهٔ دست‌نویس برای آدم‌هایی که وقتی بقیه خواب‌اند، هنوز سرِ کارند."
    ]
  },
  limbik: {
    num: "09",
    key: "limbik",
    title: "Limbik",
    titleFa: "لیمبیک",
    category: "Neuromarketing Agency · Entrepreneurship",
    categoryFa: "نورومارکتینگ · کارآفرینی · یک شکست آموزنده",
    headline: "A formative entrepreneurial chapter. Building a neuromarketing agency.",
    headlineFa: "دو سال ساختن یک آژانس؛ با همهٔ شور، اشتباه و هزینه‌اش.",
    challenge: "Two years of building a neuromarketing agency taught me what creative ambition asks of a team. We made meaningful work, grew our craft and formed lasting friendships. Limited business networks and inexperienced management brought the chapter to a close. A sacred failure: an education in collaboration, judgment and the structure a creative idea needs to endure.",
    challengeFa: "لیمبیک برای من یک دورهٔ فشردهٔ کارآفرینی بود. کارهای خوب ساختیم، خیلی چیزها یاد گرفتیم و چند رفاقت ماندگار از دلش بیرون آمد. اما شبکهٔ فروش ضعیف و بی‌تجربگی مدیریتی هم کم‌کم خودش را نشان داد و کار تمام شد. شکست بود، ولی از آن شکست‌هایی که بعداً می‌فهمی چقدر گران و مفید بوده.",
    role: "Co-Founder · Creative Director · Neuromarketing Strategist",
    roleFa: "هم‌بنیان‌گذار · مدیر خلاقیت · استراتژی نورومارکتینگ",
    territory: "The Bridge between Neuroscience, Cognitive Emotion & Creative Ambition.",
    territoryFa: "تلاش برای وصل‌کردن علوم شناختی و رفتار ناخودآگاه آدم‌ها به تصمیم‌های واقعیِ برند و خلاقیت.",
    mechanics: "Neuromarketing Consumer Labs → Biometric Emotion Mapping → Visual Attention Tracking → Sacred Entrepreneurial Learnings.",
    mechanicsFa: "آزمایش رفتار مصرف‌کننده → سنجه‌های زیستی و عاطفی → ردیابی توجه → و در نهایت، درس‌های خیلی واقعیِ ساختن یک کسب‌وکار.",
    slides: [57],
    captions: [
      "Case 09 Overview: Limbik — A formative entrepreneurial chapter and a sacred failure in building a neuromarketing agency."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۱: لیمبیک؛ دو سال شور، ساختن، اشتباه‌کردن و فهمیدن اینکه ایدهٔ خوب برای زنده ماندن به چه چیزهای دیگری نیاز دارد."
    ]
  },
  screenwriting: {
    num: "10",
    key: "screenwriting",
    title: "Screenwriting & Cinematic Craft",
    titleFa: "صنعت سینما و فیلمنامه‌نویسی",
    category: "Dramatic Architecture · Screenplay · Long-Form Worlds",
    categoryFa: "فیلمنامه · سریال · سینما · جهان‌سازی",
    headline: "Cinematic craft. Commercial worlds. Character, escalating conflict & cathartic resonance.",
    headlineFa: "اینجا دیگر برند در کار نیست؛ قصه خودش کار اصلی است.",
    challenge: "Professional dramatic storytelling is the root discipline of all brand narrative architecture: understanding human desire, obstacles, stakes, and catharsis.",
    challengeFa: "سینما جایی است که من شخصیت، میل، مانع، کشمکش و پایان را جدی تمرین کرده‌ام. خیلی از چیزهایی که بعداً وارد کار برند شده، اول اینجا شکل گرفته.",
    role: "Head Writer · Screenwriter · Director (Platform Series & Feature Cinema)",
    roleFa: "سرپرست نویسندگان · فیلمنامه‌نویس · کارگردان",
    territory: "The Architecture of Human Tension: Crafting compelling long-form universes where viewers invest their hearts.",
    territoryFa: "ساختن قصه‌هایی که آدم‌ها را با شخصیت جلو ببرند؛ نه با توضیح، بلکه با میل، تعارض و انتخاب.",
    mechanics: "Cold Blooded (Head Writer - Crime Drama Series) · Beretta: Story of a Gun (Platform Series) · The Last Neigh of a Horse · One of These Days Khosrow Will Die.",
    mechanicsFa: "خون‌سرد · برتا: داستان یک اسلحه · آخرین شیهه اسبی که خواب پروانه شدن می‌دید · یکی از همین روزها خسرو می‌میرد.",
    slides: [56, 58, 59],
    captions: [
      "Case 10 Plate 01: Selected Works — Cold Blooded, Beretta, The Last Neigh of a Horse, Khosrow Will Die.",
      "Case 10 Plate 02: Sarhal Puppet Series (Nasim TV, 2017) — Writers' Room Leadership.",
      "Case 10 Plate 03: Sourikh Comedy Series (Salamat TV, 2019) — Head Writer."
    ],
    captionsFa: [
      "پلیت ۰۱ / ۳: چند اثر منتخب؛ خون‌سرد، برتا، آخرین شیهه اسبی که خواب پروانه شدن می‌دید و خسرو می‌میرد.",
      "پلیت ۰۲ / ۳: سرِحال؛ سریال عروسکی شبکه نسیم، تابستان ۱۳۹۶. سرپرستی اتاق نویسندگان.",
      "پلیت ۰۳ / ۳: سوریخ؛ سریال کمدی شبکه سلامت، پاییز ۱۳۹۸. سرپرست نویسندگان."
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
        <div class="plate-image-stage" onclick="openDeck(${slideNum})" title="${isRtl ? 'نسخهٔ بزرگ‌تر را ببین' : 'Click to zoom in full resolution'}">
          <img src="assets/deck/web/page-${pageStr}.jpg" alt="${captionText}" loading="lazy">
          <span class="plate-zoom-badge">${isRtl ? '🔍 بزرگ‌نمایی' : '🔍 4K Zoom'}</span>
        </div>
        <div class="plate-caption-box">
          <div class="plate-caption-title">${isRtl ? 'پشتِ ایده چه بود؟' : 'Architectural Rationale:'}</div>
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
    if (nextBtn) nextBtn.title = isRtl ? `بعدی: ${nextData.titleFa}` : `Next World: ${nextData.title}`;
    if (prevBtn) prevBtn.title = isRtl ? `قبلی: ${prevData.titleFa}` : `Previous World: ${prevData.title}`;

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
        status.textContent = isRtl ? "چند جای فرم هنوز خالیه؛ کاملش کن و دوباره بفرست." : "Please fill out all fields.";
        status.style.color = "var(--accent)";
      }
      return;
    }

    if (status) {
      status.textContent = isRtl ? "پیامت آماده شد؛ اگر برنامهٔ ایمیل باز نشد، از شماره یا ایمیل پایین صفحه مستقیم با من تماس بگیر." : "Thank you! Your note has been received. I will be in touch shortly.";
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
