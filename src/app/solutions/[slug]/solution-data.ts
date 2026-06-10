import {
  TrendingUp,
  ShieldAlert,
  BarChart3,
  Zap,
  Smartphone,
  LayoutDashboard,
  Rocket,
  Brain,
  MessageSquareDashed,
  Award,
  DollarSign,
  Sofa,
  Heart,
  Star,
  Gem,
  Crown,
  Gift,
  Coffee,
  Utensils,
  ShoppingCart,
  MousePointer2,
  Target,
  RefreshCcw
} from "lucide-react";

import aisales from '@/public/assets/images/ai-slaes.png';
import predictiveprofit from '@/public/assets/images/predictive.png';
import empoyeeincentives from '@/public/assets/images/Staff-Incentive.png';
import strategicmirror from '@/public/assets/images/StrategicBusinessMirror.png';
import marketingcost from '@/public/assets/images/MarketingCostOptimization.png';
import staffconversion from '@/public/assets/images/Automated-Conversion.png';

export const solutionDetails: Record<string, any> = {
  "building-materials": {
    title: "Building Materials",
    description: "Turn Every Material Purchase Into Multiple Revenue Opportunities. Tapito helps building material businesses understand what customers are really trying to achieve, not just what they buy today.",
    howWeHelp: [
      {
        title: "Project Timeline Intelligence",
        desc: "Tapito maps out project timelines, analyzing purchase phases to reveal connected opportunities that manual sales tracking often misses.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Construction Demand Prediction",
        desc: "When a customer purchases one product, Tapito predicts what they are likely to need to purchase next across categories like plumbing, tiles, and electricals.",
        image: predictiveprofit.src,
        icon: Zap
      },
      {
        title: "Dynamic Builder Retention",
        desc: "Convert site visits into ongoing contracts through intelligent project reminders and automated contractor loyalty programs.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Performance Revenue Mapping",
        desc: "Energize your floor staff with live updates on incentives earned through successful project-based cross-selling and volume milestones.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "Project Portfolio Clarity",
        desc: "Tapito provides a high-definition view of your market's construction trends, delivering the clarity needed for smarter inventory decisions.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "Contractor Growth Precision",
        desc: "Stop broad-spectrum advertising and focus your marketing spend on active contractors with high conversion potential for current builds.",
        image: marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Fragmented Project Sales", desc: "Showrooms often fulfill isolated requests while losing the high-margin plumbing, electrical, and finishings to competitors.", icon: ShieldAlert },
      { title: "Opaque Contractor Intent", desc: "Without data-driven insights, businesses fail to anticipate a project's next phase, resulting in significant revenue leakage.", icon: BarChart3 },
      { title: "Wasted Marketing Outreach", desc: "Traditional promotions struggle to reach builders at the precise moment they are ready to purchase for their next project phase.", icon: Rocket }
    ],
    features: [
      { title: "Phase-Based Upsell Engine", desc: "Capture high-value orders by automatically triggering recommendations for essential finishes based on previous structural purchases.", icon: Zap },
      { title: "Real-Time Incentive Mapping", desc: "Empower your team with a transparent dashboard showing their direct contribution to revenue and cross-category growth.", icon: Award },
      { title: "Growth Opportunity Sensing", desc: "Continuously scan your sales data to uncover hidden patterns that suggest untapped revenue streams and new project types.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito anticipate construction project needs?", answer: "Our AI analyzes the typical construction sequence—predicting that a foundation purchase will soon be followed by plumbing, tiles, and interior finishes." },
      { question: "Can Tapito help us focus our marketing spend?", answer: "Yes. By identifying which accounts are actively building and what phase they're in, we ensure your promotional offers are perfectly timed for their project needs." },
      { question: "What parts of our workflow does it automate?", answer: "Tapito automates project-based follow-ups, contractor reward notifications, and multi-channel marketing campaigns via WhatsApp and SMS." },
      { question: "How does it improve sales team performance?", answer: "By providing clear, real-time visibility into earned incentives, Tapito motivates staff to actively engage in comprehensive project-based selling." }
    ],
    impacts: [
      { value: "35%", label: "Lift in Average Project Value" },
      { value: "42%", label: "Growth in Cross-Category Orders" },
      { value: "30%", label: "Drop in Customer Acquisition Costs" }
    ],
    capabilitiesTitle: "Strategic Intelligence for",
    capabilitiesSubtitle: "Market Dominance",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: BarChart3,
        title: "Predictive Stocking for Project Cycles",
        description: "Align your inventory with the real-world rhythm of construction, ensuring foundation materials and finishing touches are always ready when builders need them.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: Award,
        title: "High-Value Dealer Rebate Automation",
        description: "Strengthen your contractor network with automated, volume-based rewards and milestone rebates that incentivize long-term project loyalty.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: Zap,
        title: "Phase-Based Cross-Selling Engine",
        description: "Turn structural sales into high-margin plumbing and electrical revenue by identifying the precise moment for phase-based material upgrades.",
        visual: "upsell"
      }
    ]
  },
  "home-furnishing": {
    title: "Home Furnishing",
    description: "Transform Customer Preferences Into Higher Value Sales. Tapito helps home furnishing businesses understand customer lifestyle preferences, interior interests, and buying behavior — not just the products they purchase today.",
    howWeHelp: [
      {
        title: "Personalized Design Profiling",
        desc: "Tapito tracks individual aesthetic choices and room-by-room needs, turning simple visits into high-value interior transformations.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Interior Vision Discovery",
        desc: "When a customer picks a sofa, our AI instantly anticipates their need for matching lamps, rugs, and decor to complete the living space.",
        image: predictiveprofit.src,
        icon: Zap
      },
      {
        title: "Seamless Decor Inspiration",
        desc: "Keep your collections top-of-mind with personalized digital lookbooks and automated project follow-ups that inspire the next home upgrade.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Design Advisory Rewards",
        desc: "Empower your showroom consultants with real-time tracking of their styling successes and incentive growth based on basket size.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "Homeowner Style Vision",
        desc: "Deep-dive into your customers' design souls, understanding style trends and lifestyle shifts to stay ahead of the next big furniture wave.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "Premium Collection Focus",
        desc: "Boost your ROI by directing your marketing energy toward active homeowners who show a high preference for your upcoming premium collections.",
        image: marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Fragmented Interior Sales", desc: "Showrooms often sell individual furniture pieces but miss the chance to provide the full room sets that customers actually desire.", icon: ShieldAlert },
      { title: "Stalled Room Completion", desc: "Without predictive insights, follow-ups for decor and accessories are often mistimed, causing customers to look elsewhere for final touches.", icon: BarChart3 },
      { title: "Broad-Stroke Promotions", desc: "Traditional advertising fails to distinguish between budget-conscious buyers and luxury clients, diluting your brand's impact.", icon: Rocket }
    ],
    features: [
      { title: "Style Aesthetic Matching", desc: "Our AI automatically links furniture purchases with complementary decor styles, ensuring every room feels professionally curated.", icon: Zap },
      { title: "Stylist Performance Dashboards", desc: "Give your team a clear path to success with individual progress tracking for room-set sales and high-value design consulting.", icon: Award },
      { title: "Lifestyle Opportunity Sensing", desc: "Identify emerging lifestyle changes in your customer base to suggest timely upgrades for nurseries, home offices, or outdoor living.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito help complete a customer's interior vision?", answer: "By analyzing previous style choices, Tapito suggests the perfect rugs, lighting, and accessories to complement their primary furniture purchases." },
      { question: "Can we use Tapito to launch new collections?", answer: "Absolutely. Tapito identifies the exact customer segments that match the aesthetic of your new arrivals for highly targeted launch campaigns." },
      { question: "How does it streamline showroom operations?", answer: "It automates personal follow-ups and style lookbook delivery, allowing your consultants to focus on high-value design advisory." },
      { question: "Does it improve sales team engagement?", answer: "Yes, by making incentives transparent and celebrating stylized cross-sales, it creates a more motivated and style-conscious sales force." }
    ],
    impacts: [
      { value: "40%", label: "Growth in Average Transaction Value" },
      { value: "35%", label: "Increase in Room-Set Conversions" },
      { value: "50%", label: "Improvement in Repeat Design Visits" }
    ],
    capabilitiesTitle: "Bespoke Logic for",
    capabilitiesSubtitle: "Luxe Home Living",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: Sofa,
        title: "Aesthetic Trend Forecasting",
        description: "Stay ahead of interior shifts by matching customer style profiles with upcoming furniture collections, ensuring your showroom always mirrors modern tastes.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: Heart,
        title: "Personalized Interior Lookbook Rewards",
        description: "Transform one-time buyers into lifelong clients by delivering automated, room-specific styling guides that inspire the next phase of home design.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: MessageSquareDashed,
        title: "Curated Room-Set Expansion",
        description: "Increase transaction value by automatically suggesting the lighting, rugs, and decor that perfectly complement a customer's primary furniture selection.",
        visual: "upsell"
      }
    ]
  },
  "electronics": {
    title: "Electronics",
    description: "Turn Every Customer Purchase Into Smarter Upselling Opportunities. Tapito helps electronics businesses understand customer buying intent, technology preferences, and upgrade behavior — not just the product they purchase today.",
    howWeHelp: [
      {
        title: "Tech Lifecycle Intelligence",
        desc: "Tapito maps out tech ownership cycles, identifying the perfect moment for upgrades and accessory additions that standard CRM systems miss.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Innovation Cycle Forecasting",
        desc: "Our AI forecasts tech needs by analyzing previous device generations and usage intensity, suggesting the latest innovations precisely when users are ready.",
        image: predictiveprofit.src,
        icon: Zap
      },
      {
        title: "Smart Support & Ecosystem Growth",
        desc: "Keep your tech community engaged with automated setup guides and essential accessory recommendations that maximize their device's potential.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Tech Advisor Incentive Flow",
        desc: "Boost your floor team's motivation by providing a transparent view of incentives earned from ecosystem selling and extended warranty attachments.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "Digital Connectivity Map",
        desc: "Tapito decodes your customers' technology stacks, giving you the clarity to optimize product bundles and future-proof your inventory.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "Early Adopter Engagement",
        desc: "Streamline your marketing spend by focusing on power users and high-intent shoppers who are actively researching their next primary device.",
        image: marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Isolated Device Sales", desc: "Retailers often lose high-margin accessories and protection plans to online marketplaces by failing to bundle them at the point of intent.", icon: ShieldAlert },
      { title: "Invisible Ownership Cycles", desc: "Without tracking upgrade patterns, businesses miss the critical window when a customer is ready to transition to a newer model or complementary ecosystem.", icon: BarChart3 },
      { title: "Fragmented Tech Outreach", desc: "Sending identical tech promotions to budget buyers and early adopters leads to poor conversion and wasted advertising budget.", icon: Rocket }
    ],
    features: [
      { title: "Ecosystem Pairing Logic", desc: "Our AI automatically links primary device views with the essential wearables, protection, and audio gear that complete the user experience.", icon: Zap },
      { title: "Expert Consultant Dashboards", desc: "Motivate your sales team with live progress tracking for multi-device sales and high-value service plan attachments.", icon: Award },
      { title: "Upgrade Opportunity Sensing", desc: "Continuously scan your database for customers nearing the end of their tech lifecycle, triggering timely trade-in and upgrade offers.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito anticipate a customer's next tech upgrade?", answer: "By analyzing the typical lifespan of devices—like smartphones or laptops—and tracking usage patterns to suggest newer models at the right time." },
      { question: "Can Tapito help us sell more accessories?", answer: "Yes. It automatically identifies the most compatible accessories for every primary device and prompts your team or customer with tailored recommendations." },
      { question: "What automation does it offer for tech retailers?", answer: "Tapito handles trade-in reminders, warranty expiration alerts, and automated cross-category marketing campaigns via WhatsApp and SMS." },
      { question: "How does it improve store staff performance?", answer: "By making ecosystem-selling incentives transparent and easy to track, it encourages staff to provide more comprehensive tech advisory." }
    ],
    impacts: [
      { value: "45%", label: "Lift in Accessory Attachment Rates" },
      { value: "35%", label: "Increase in Multi-Device Bundles" },
      { value: "40%", label: "Improvement in Upgrade Conversion" }
    ],
    capabilitiesTitle: "Ecosystem Logic for",
    capabilitiesSubtitle: "High-Tech Growth",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: Smartphone,
        title: "Tech Ownership Lifecycle Tracking",
        description: "Monitor device health and usage intensity to predict exactly when power users are ready for their next flagship upgrade or premium accessory.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: Heart,
        title: "Ecosystem Integration Incentives",
        description: "Reward brand loyalty by offering tailored incentives for customers to complete their technology stack with matching wearables and audio gear.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: MessageSquareDashed,
        title: "Automated Ecosystem Bundling",
        description: "Convert single-device interest into high-margin ecosystem sales with AI-triggered suggestions for essential protection and support plans.",
        visual: "upsell"
      }
    ]
  },
  "supermarkets": {
    title: "Supermarket",
    description: "Turn Everyday Shopping Data Into Higher Customer Spending. Tapito helps supermarkets understand customer buying behavior, shopping patterns, and household preferences — not just the products customers purchase today.",
    howWeHelp: [
      {
        title: "Shopping Habit Intelligence",
        desc: "Tapito deciphers the hidden links between grocery items, uncovering cross-category opportunities that standard POS data ignores.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Essential Replenishment Alerts",
        desc: "Our AI anticipates when a household is running low on essentials—from dairy to detergents—triggering perfectly timed reminders.",
        image: predictiveprofit.src,
        icon: Zap
      },
      {
        title: "Dynamic Pantry Engagement",
        desc: "Bring shoppers back more frequently with automated inventory-based alerts and personalized deals on their weekly staples.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Checkout Efficiency Rewards",
        desc: "Drive checkout-line efficiency by rewarding staff for successful basket-expansion prompts and high-value loyalty signups.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "Household Consumption Clarity",
        desc: "Gain a transparent view of household consumption habits, allowing you to align your shelves with the actual needs of your neighborhood.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "Loyalty Value Optimization",
        desc: "Maximize your loyalty ROI by focusing marketing efforts on high-frequency shoppers with a high preference for premium fresh categories.",
        image: marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Static Checkout Focus", desc: "Supermarkets often treat every trip as an isolated event, failing to connect the dots between weekly household shopping patterns.", icon: ShieldAlert },
      { title: "Opaque Consumption Cycles", desc: "Without predictive refill data, retailers miss the critical window to remind customers about their recurring grocery needs.", icon: BarChart3 },
      { title: "Promotional Saturation", desc: "Flooding every customer with the same circulars leads to 'coupon fatigue' and unoptimized marketing expenditure.", icon: Rocket }
    ],
    features: [
      { title: "Aisle Connection Logic", desc: "Our AI automatically suggests complementary pantry additions during the sales process, ensuring a more complete household shop.", icon: Zap },
      { title: "Cashier Performance Dashboards", desc: "Give your team clear visibility into their contribution to basket growth and earned performance rewards.", icon: Award },
      { title: "Churn Prevention Sensing", desc: "Identify when regular household shoppers are deviating from their routine, triggering immediate personalized re-engagement.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito predict when a household needs a refill?", answer: "By analyzing the frequency of previous purchases for recurring items like milk, diapers, or coffee and sending reminders just before they run out." },
      { question: "Can it help us increase our average basket value?", answer: "Yes. Tapito identifies the most likely 'next item' for every shopper based on their current basket and historical preferences." },
      { question: "What automation is available for grocery chains?", answer: "We automate personalized pantry reminders, seasonal category alerts, and multi-channel loyalty outreach via WhatsApp." },
      { question: "How does it motivate store-level employees?", answer: "By providing transparent, real-time tracking of incentives earned for successful upselling and basket-expansion achievements." }
    ],
    impacts: [
      { value: "30%", label: "Increase in Weekly Basket Value" },
      { value: "40%", label: "Improvement in Repeat Visit Rates" },
      { value: "50%", label: "Reduction in Customer Churn" }
    ],
    capabilitiesTitle: "Hyper-Local Logic for",
    capabilitiesSubtitle: "High-Volume Retail",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: BarChart3,
        title: "Pantry Depletion Forecasting",
        description: "Track household consumption rates to ensure your shelves are stocked with the specific fresh categories and staples your local shoppers depend on.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: Heart,
        title: "Replenishment-Based Rewards",
        description: "Incentivize recurring visits by offering personalized deals on household essentials precisely when a shopper's pantry is likely running low.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: MessageSquareDashed,
        title: "Dynamic Basket Expansion",
        description: "Transform quick grocery runs into comprehensive shops by identifying hidden cross-category needs based on real-time cart activity.",
        visual: "upsell"
      }
    ]
  },
  "fashion": {
    title: "Fashion",
    description: "Turn Customer Style Preferences Into Smarter Fashion Selling. Tapito helps fashion businesses understand customer style preferences, shopping behavior, and seasonal buying patterns — not just the products customers purchase today.",
    howWeHelp: [
      {
        title: "Style Identity Intelligence",
        desc: "Tapito decodes individual style DNA, identifying the aesthetic preferences that drive high-value wardrobe choices beyond single transactions.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Wardrobe Cycle Forecasting",
        desc: "Our AI forecasts seasonal demand by matching past purchases with upcoming fashion cycles, ensuring your lookbooks are perfectly timed for the next season.",
        image: predictiveprofit.src,
        icon: Zap
      },
      {
        title: "Personalized Lookbook Delivery",
        desc: "Maintain constant style relevance with automated new-arrival alerts and curated outfit suggestions that mirror your customers' unique tastes.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Stylist Performance Mapping",
        desc: "Drive showroom excellence by giving your sales team real-time visibility into their earned rewards for successful head-to-toe styling.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "Closet Composition Clarity",
        desc: "Tapito delivers a high-definition view of your customers' closets, allowing you to optimize your collections and marketing for maximum style impact.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "High-Fashion Growth Precision",
        desc: "Stop wasting budget on generic fashion ads and focus your spend on high-intent style segments ready to invest in premium seasonal pieces.",
        image: marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Isolated Item Focus", desc: "Showrooms often sell single garments while missing the opportunity to provide the footwear, bags, and accessories that complete a look.", icon: ShieldAlert },
      { title: "Invisible Trend Intent", desc: "Without data-driven style profiles, retailers fail to anticipate when a customer is ready for their next seasonal wardrobe refresh.", icon: BarChart3 },
      { title: "Fragmented Style Outreach", desc: "Sending identical fashion promotions to vastly different aesthetic groups leads to weak engagement and unoptimized marketing spend.", icon: Rocket }
    ],
    features: [
      { title: "Head-to-Toe Styling Engine", desc: "Our AI automatically suggests perfectly matched outfit pairings during the selection process, capturing opportunities for comprehensive styling.", icon: Zap },
      { title: "Master Stylist Dashboards", desc: "Empower your floor team with clear tracking of their styling successes and the direct rewards earned from comprehensive outfit sales.", icon: Award },
      { title: "Fashion Lifecycle Sensing", desc: "Identify the perfect moments for seasonal re-engagement, from vacation planning to festive preparation, with automated style prompts.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito anticipate a customer's next style need?", answer: "By mapping individual aesthetic profiles and seasonal buying cycles, it predicts when a customer is ready for a new wardrobe addition or a complete look." },
      { question: "Can it help us move more accessories?", answer: "Yes. Tapito identifies the exact footwear and accessories that complement every primary garment and prompts your team to suggest them." },
      { question: "What automation is available for fashion brands?", answer: "We automate personal style lookbooks, seasonal trend updates, and multi-channel engagement via WhatsApp and SMS." },
      { question: "How does it improve showroom staff performance?", answer: "By making styling-based incentives transparent and easy to track, it encourages staff to transition from simple order-takers to professional stylists." }
    ],
    impacts: [
      { value: "35%", label: "Increase in Average Look Value" },
      { value: "40%", label: "Improvement in Repeat Visit Frequency" },
      { value: "50%", label: "Growth in Accessory Revenue" }
    ],
    capabilitiesTitle: "Artisan Blueprint for",
    capabilitiesSubtitle: "High-Fashion Growth",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: Star,
        title: "Seasonal Style Forecasting",
        description: "Stay ahead of fashion trends by matching customer style profiles with upcoming seasonal collections, ensuring your showroom always reflects modern aesthetics.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: Heart,
        title: "Wardrobe-Driven Loyalty Curation",
        description: "Transform one-time buyers into lifelong fans by delivering automated, personal style lookbooks that inspire the next phase of their wardrobe design.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: MessageSquareDashed,
        title: "Curated Outfit Expansion",
        description: "Increase transaction value by automatically suggesting the footwear, bags, and accessories that perfectly complement a customer's primary garment selection.",
        visual: "upsell"
      }
    ]
  },
  "beauty-health": {
    title: "Beauty & Health",
    description: "Transform Customer Wellness, Beauty & Fitness Preferences Into Long-Term Engagement. Tapito helps beauty, wellness, pharmacy, gyms, and healthcare businesses understand customer preferences, purchase behavior, and recurring wellness needs.",
    howWeHelp: [
      {
        title: "Wellness Journey Intelligence",
        desc: "Tapito bridges the gap between beauty and wellness, tracking personal care cycles to reveal connected routines that standard retail systems ignore.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Supplement Refill Forecasting",
        desc: "Our AI anticipates exactly when a customer's skincare or supplements are running low, suggesting the perfect refill at the height of their intent.",
        image: predictiveprofit.src,
        icon: Zap
      },
      {
        title: "Health & Beauty Habit Creation",
        desc: "Strengthen customer bonds with automated routine reminders, personalized wellness guides, and timely membership renewal follow-ups.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Wellness Advisory Rewards",
        desc: "Inspire your showroom and counter teams with transparent, real-time tracking of incentives earned for building complete wellness bundles.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "Personal Care Path Clarity",
        desc: "Tapito delivers a high-definition view of your customers' health and beauty interests, allowing you to optimize services and inventory for true care continuity.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "Premium Care Engagement",
        desc: "Maximize your marketing efficiency by focusing on high-trust segments ready for premium skincare, supplements, and long-term wellness plans.",
        image: marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Fragmented Care Sales", desc: "Retailers often fulfill isolated product needs while losing the recurring pharmacy, supplement, and fitness revenue to specialized competitors.", icon: ShieldAlert },
      { title: "Opaque Refill Cycles", desc: "Without data-driven tracking, businesses fail to remind customers about essential care refills, resulting in avoidable revenue leakage.", icon: BarChart3 },
      { title: "Impersonal Wellness Marketing", desc: "Sending identical health promotions to gym-goers and skincare enthusiasts leads to weak engagement and unoptimized brand trust.", icon: Rocket }
    ],
    features: [
      { title: "Routine Correlation Blueprint", desc: "Our AI automatically links primary beauty views with the essential supplements and care items that complete a holistic wellness routine.", icon: Zap },
      { title: "Wellness Performance Dashboards", desc: "Give your team clear visibility into their contribution to care continuity and the direct rewards earned from comprehensive bundle sales.", icon: Award },
      { title: "Recurring Intent Sensing", desc: "Identify when it's time for a refill, a membership renewal, or a seasonal health check-up with automated, high-trust prompts.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito predict a customer's wellness needs?", answer: "By tracking usage cycles for beauty and health products—like skincare or vitamins—and sending reminders exactly when they need a refresh." },
      { question: "Can it help us grow our gym or wellness memberships?", answer: "Yes. Tapito identifies high-intent customers ready for long-term health commitments and automates the follow-up process for renewals and upgrades." },
      { question: "What automation is available for pharmacies and beauty stores?", answer: "We automate refill reminders, routine suggestions, new arrival alerts, and multi-channel care engagement via WhatsApp." },
      { question: "How does it improve consultant performance?", answer: "By making routine-based incentives transparent, it encourages staff to provide more holistic beauty and wellness advice." }
    ],
    impacts: [
      { value: "40%", label: "Growth in Repeat Care Purchases" },
      { value: "35%", label: "Increase in Holistic Bundle Sales" },
      { value: "50%", label: "Reduction in Membership Churn" }
    ],
    capabilitiesTitle: "Holistic Architecture for",
    capabilitiesSubtitle: "Wellness Continuity",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: Star,
        title: "Routine Cycle Forecasting",
        description: "Anticipate wellness needs by tracking usage frequency for skincare and supplements, ensuring your pharmacy or beauty counter is always ready for the next refill.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: Heart,
        title: "Personalized Care Continuity Rewards",
        description: "Strengthen customer bonds by delivering automated refill reminders and personalized wellness guides that honor their long-term health journey.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: MessageSquareDashed,
        title: "Holistic Wellness Routine Curation",
        description: "Increase basket size by automatically suggesting the essential care items and supplements that complete a customer's holistic wellness routine.",
        visual: "upsell"
      }
    ]
  },
  "jewelry": {
    title: "Jewelry",
    description: "Turn Customer Purchase Behavior Into High-Value Relationship Selling. Tapito helps jewelry businesses understand customer preferences, buying behavior, and lifecycle purchasing patterns — not just the products customers purchase today.",
    howWeHelp: [
      {
        title: "Heirloom Relationship Intelligence",
        desc: "Tapito maps out the long-term relationships behind every purchase, identifying the milestones that drive high-value jewelry collections.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Milestone Gift Forecasting",
        desc: "Our AI forecasts upcoming anniversaries and milestones by matching past purchase dates with family relationship cycles, ensuring perfectly timed gifting reminders.",
        image: predictiveprofit.src,
        icon: Zap
      },
      {
        title: "Life-Event Connection Flow",
        desc: "Keep your clients connected with automated anniversary alerts, exclusive preview invitations, and personalized gifting recommendations that honor every special moment.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Expert Gemologist Rewards",
        desc: "Drive showroom performance by giving your senior consultants real-time visibility into their earned rewards for building complete heirloom sets.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "High-Value Client Vision",
        desc: "Tapito delivers a high-definition view of your clients' aesthetic tastes and family connections, allowing you to curate your collections for true relationship selling.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "Major Investment Precision",
        desc: "Maximize your marketing impact by focusing on high-value families ready for their next major milestone investment, from bridal sets to anniversary gems.",
        image: marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Transactional Selling Blindspots", desc: "Showrooms often focus on the current sale while losing the future anniversary, birthday, and gifting revenue to more attentive competitors.", icon: ShieldAlert },
      { title: "Invisible Relationship Cycles", desc: "Without data-driven milestone tracking, businesses fail to anticipate when a client is ready for their next high-value investment.", icon: BarChart3 },
      { title: "Generic Outreach Gap", desc: "Sending identical jewelry promotions to bridal clients and lightweight gold buyers leads to weak engagement and unoptimized brand equity.", icon: Rocket }
    ],
    features: [
      { title: "Heirloom Matching Blueprint", desc: "Our AI automatically suggests perfectly matched accessory pairings during the design selection process, ensuring every set feels complete.", icon: Zap },
      { title: "Consultant Relationship Dashboards", desc: "Empower your team with clear tracking of their relationship-building success and the direct rewards earned from milestone-based sales.", icon: Award },
      { title: "Event Opportunity Sensing", desc: "Identify the perfect moments for personalized outreach, from upcoming weddings to major anniversaries, with automated high-value prompts.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito anticipate a client's next jewelry milestone?", answer: "By tracking previous purchase dates and family connections to predict upcoming anniversaries, birthdays, and major life events that require premium gifting." },
      { question: "Can it help us sell more bridal and high-value sets?", answer: "Yes. Tapito identifies clients ready for their next major investment and prompts your team to invite them for exclusive previews of matching collections." },
      { question: "What automation is available for luxury jewelers?", answer: "We automate milestone reminders, exclusive VIP invitations, and personalized collection lookbooks via WhatsApp and SMS." },
      { question: "How does it improve showroom consultant performance?", answer: "By making relationship-based incentives transparent, it encourages staff to focus on the long-term value of every client relationship." }
    ],
    impacts: [
      { value: "45%", label: "Increase in High-Value Repeat Sales" },
      { value: "40%", label: "Improvement in Multi-Item Set Conversions" },
      { value: "50%", label: "Better Visibility into Client Milestones" }
    ],
    capabilitiesTitle: "Regal Blueprint for",
    capabilitiesSubtitle: "High-Value Relationships",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: Gem,
        title: "Relationship Lifecycle Forecasting",
        description: "Align your high-value collections with the real-world rhythm of client milestones, ensuring anniversary gems and bridal sets are always ready when families need them.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: Crown,
        title: "Occasion-Based Milestone Rewards",
        description: "Strengthen client relationships with automated, relationship-based rewards and exclusive milestone invitations that incentivize long-term heirloom loyalty.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: Gift,
        title: "Heirloom Set Expansion Blueprint",
        description: "Turn single-piece sales into high-value heirloom sets by identifying the precise moment for milestone-based jewelry upgrades.",
        visual: "upsell"
      }
    ]
  },
  "fb-retail": {
    title: "F&B Retail",
    description: "Turn Customer Food Preferences Into Repeat Visits & Higher Spending. Tapito helps food and beverage retail businesses understand customer taste preferences, ordering behavior, and purchase patterns — not just the products customers purchase today.",
    howWeHelp: [
      {
        title: "Flavor Preference Intelligence",
        desc: "Tapito deciphers the hidden taste preferences behind every order, uncovering combo opportunities that standard POS systems miss.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Culinary Craving Forecasting",
        desc: "Our AI forecasts peak ordering times and seasonal cravings by matching past taste profiles with real-time dining trends.",
        image: predictiveprofit.src,
        icon: Zap
      },
      {
        title: "Dynamic Taste Engagement",
        desc: "Keep your diners coming back with automated taste-based alerts, personalized combo offers, and perfectly timed menu updates.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Server Bundle Rewards",
        desc: "Drive floor team performance by giving your servers real-time visibility into their earned rewards for successful meal bundling.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "Menu-to-Palate Clarity",
        desc: "Tapito delivers a high-definition view of your customers' dining habits, allowing you to align your menu with the actual cravings of your neighborhood.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "Menu Profitability Precision",
        desc: "Maximize your revenue by focusing on high-frequency diners ready for their next meal upgrade, from beverages to desserts.",
        image: marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Static Menu Blindspots", desc: "Restaurants often process individual orders while losing high-margin sides, desserts, and beverages to missed upselling opportunities.", icon: ShieldAlert },
      { title: "Invisible Ordering Intent", desc: "Without data-driven taste profiles, businesses fail to anticipate when a regular is ready for their next culinary discovery.", icon: BarChart3 },
      { title: "Generic Food Outreach", desc: "Sending identical menu promotions to coffee lovers and heavy diners leads to weak engagement and unoptimized marketing spend.", icon: Rocket }
    ],
    features: [
      { title: "Flavor Coordination Blueprint", desc: "Our AI automatically suggests perfectly matched sides and beverages during the ordering process, ensuring every meal feels complete.", icon: Zap },
      { title: "Floor Team Performance Dashboards", desc: "Give your servers clear visibility into their contribution to average order growth and the direct rewards earned from combo sales.", icon: Award },
      { title: "Crave Cycle Sensing", desc: "Identify the perfect moments for personalized re-engagement, from mid-day coffee breaks to weekend family dinners, with automated prompts.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito identify a diner's next craving?", answer: "By mapping individual taste profiles and ordering frequency to predict when a customer is ready for their next favorite meal or a new menu trial." },
      { question: "Can it help us sell more high-margin sides and combos?", answer: "Yes. Tapito identifies the exact accompaniments that complement every main dish and prompts your team to suggest them at the point of sale." },
      { question: "What automation is available for F&B retailers?", answer: "We automate personalized combo offers, seasonal menu updates, and multi-channel engagement via WhatsApp and SMS." },
      { question: "How does it improve server performance?", answer: "By making upselling-based incentives transparent and easy to track, it encourages staff to provide more comprehensive dining recommendations." }
    ],
    impacts: [
      { value: "35%", label: "Increase in Average Order Growth" },
      { value: "40%", label: "Improvement in Repeat Visit Rates" },
      { value: "50%", label: "Growth in Combo Category Sales" }
    ],
    capabilitiesTitle: "Gourmet Blueprint for",
    capabilitiesSubtitle: "High-Frequency Dining",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: Coffee,
        title: "Palate Trend & Peak Demand Forecasting",
        description: "Stay ahead of dining trends with AI that tracks taste popularity and peak ordering times, ensuring your menu perfectly matches local cravings.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: Heart,
        title: "Personalized Taste Loyalty Curation",
        description: "Turn one-time diners into lifelong fans by delivering automated combo offers and menu updates tailored to their unique culinary palate.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: Utensils,
        title: "Automated Combo Expansion Blueprint",
        description: "Increase average order value by automatically suggesting the sides, beverages, and desserts that perfectly complement a diner's primary meal selection.",
        visual: "upsell"
      }
    ]
  },
  "ecommerce": {
    title: "eCommerce",
    description: "Turn Customer Browsing Behavior Into Higher Conversions & Repeat Sales. Tapito helps eCommerce businesses understand customer interests, browsing behavior, shopping intent, and purchase patterns — not just the products customers buy today.",
    howWeHelp: [
      {
        title: "Clickstream Behavior Intelligence",
        desc: "Tapito decodes the clickstream data behind every session, revealing the hidden shopping intent that standard analytics suites overlook.",
        image: aisales.src,
        icon: Brain
      },
      {
        title: "Conversion Recovery Logic",
        desc: "Our AI identifies high-intent shoppers nearing abandonment, triggering perfectly timed recovery offers and product suggestions.",
        image: predictiveprofit.src,
        icon: Target
      },
      {
        title: "Seamless Cart Recovery",
        desc: "Recover lost revenue with automated cart reminders, personalized browsing alerts, and exclusive digital offers across WhatsApp and SMS.",
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      {
        title: "Support Conversion Rewards",
        desc: "Empower your remote support and sales teams with real-time visibility into their earned incentives for successful high-conversion interactions.",
        image: empoyeeincentives.src,
        icon: Award
      },
      {
        title: "Browser-to-Buyer Strategy",
        desc: "Gain a high-definition view of your digital storefront's performance, allowing you to optimize your UX and inventory for true conversion momentum.",
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      {
        title: "Digital Growth Precision",
        desc: "Maximize your digital ROI by focusing on high-LTV segments ready for their next major tech or fashion investment with automated bundle suggestions.",
        image: marketingcost.src,
        icon: RefreshCcw
      }
    ],
    challenges: [
      { title: "Ghost Abandonment Blindspots", desc: "Most eCommerce sites focus on completed checkouts while losing 70% of potential revenue to invisible cart and browser abandonment.", icon: ShieldAlert },
      { title: "Opaque Shopping Intent", desc: "Without data-driven intent profiles, businesses fail to anticipate when a browser is ready to transition to a high-value buyer.", icon: BarChart3 },
      { title: "Retargeting Fatigue", desc: "Sending identical follow-up emails to every visitor leads to poor conversion and unoptimized digital marketing spend.", icon: Rocket }
    ],
    features: [
      { title: "Intent-Based Match Engine", desc: "Our AI automatically suggests perfectly matched ecosystem bundles during the browsing process, ensuring every cart feels complete.", icon: Zap },
      { title: "Remote Sales Performance Dashboards", desc: "Give your digital team clear visibility into their contribution to conversion growth and the direct rewards earned from recovered sales.", icon: Award },
      { title: "Session Momentum Sensing", desc: "Identify the perfect moments for real-time re-engagement, from search activity to cart additions, with automated digital prompts.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito anticipate a browser's next purchase?", answer: "By analyzing real-time search patterns, clickstream behavior, and previous cart history to predict the most likely next addition to their digital basket." },
      { question: "Can it help us reduce cart abandonment?", answer: "Yes. Tapito identifies the precise moment a high-intent shopper is about to leave and automates a personalized recovery offer via their preferred channel." },
      { question: "What automation is available for online retailers?", answer: "We automate cart recovery, personalized product carousels, seasonal collection alerts, and multi-channel engagement via WhatsApp and SMS." },
      { question: "How does it improve digital support team performance?", answer: "By making conversion-based incentives transparent, it encourages support staff to transition into proactive sales advisors." }
    ],
    impacts: [
      { value: "40%", label: "Increase in Recovered Revenue" },
      { value: "35%", label: "Growth in Average Basket Value" },
      { value: "50%", label: "Improvement in Repeat Session Conversion" }
    ],
    capabilitiesTitle: "Elastic Architecture for",
    capabilitiesSubtitle: "Digital Growth",
    showcaseItems: [
      {
        id: "product-intelligence",
        icon: MousePointer2,
        title: "Clickstream Intent Intelligence",
        description: "Decode digital shopping behavior to ensure your online catalog and retargeting ads match the real-time intent of your high-value browsers.",
        visual: "product-intelligence"
      },
      {
        id: "loyalty",
        icon: ShoppingCart,
        title: "High-LTV Conversion Rewards",
        description: "Strengthen digital bonds by delivering automated, personalized product suggestions and exclusive offers that honor each shopper's unique digital journey.",
        visual: "loyalty"
      },
      {
        id: "upsell",
        icon: RefreshCcw,
        title: "Automated Digital Bundle Curation",
        description: "Increase digital ROI by automatically suggesting the accessories and protection plans that perfectly complement a shopper's primary cart selection.",
        visual: "upsell"
      }
    ]
  }
};

export const defaultData = {
  title: "Vertical Growth",
  description: "Tapito transforms your industry-specific data into a strategic growth advantage with tailored AI logic.",
  howWeHelp: [
    {
      title: "Growth Acceleration Logic",
      desc: "Anticipate market shifts and adjust your strategy in real-time.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
      icon: TrendingUp
    },
    {
      title: "Strategic Decision Clarity",
      desc: "Remove the fog of raw data with actionable, business-ready insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      icon: BarChart3
    },
    {
      title: "Relationship Retention Flow",
      desc: "Build lasting relationships with automated, personalized engagement.",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200&auto=format&fit=crop",
      icon: Heart
    },
  ],
  challenges: [
    { title: "Data Silos", desc: "Fragmented information across departments leads to missed opportunities.", icon: ShieldAlert },
    { title: "Manual Processes", desc: "Inefficient workflows slow down your team's ability to respond to market changes.", icon: BarChart3 },
    { title: "Customer Churn", desc: "Lack of personalized engagement causes high-value customers to look elsewhere.", icon: Rocket },
  ],
  features: [
    { title: "AI-Powered Insights", desc: "Our advanced algorithms uncover hidden patterns in your data.", icon: Zap },
    { title: "Automated Workflows", desc: "Streamline your operations with intelligent automation.", icon: Award },
    { title: "Personalized Marketing", desc: "Deliver the right message to the right customer at the right time.", icon: TrendingUp },
  ],
  faqs: [
    { question: "How secure is my business data?", answer: "Data security is our top priority. Tapito uses enterprise-grade encryption and complies with international data protection standards (GDPR, SOC2) to ensure your competitive intelligence remains private." },
    { question: "How difficult is the onboarding process?", answer: "We provide a dedicated solutions architect to manage your onboarding. Our 'low-code' approach allows you to connect your data streams and see insights within 30 days." },
    { question: "Is Tapito scalable for small businesses?", answer: "Tapito's engine is designed to scale with your volume. Whether you have 5 stores or 5,000, our pricing and processing capacity adapt to your needs." },
    { question: "Is custom development required for integration?", answer: "Tapito is designed as a modular platform. While we offer deep custom integrations, our standard connectors allow most businesses to start seeing data insights with minimal dev effort." },
    { question: "What kind of support is included?", answer: "All partners receive a dedicated success manager and 24/7 technical support to ensure your AI engine is always performing at its peak." }
  ],
  impacts: [
    { value: "25%", label: "Average Revenue Increase" },
    { value: "40%", label: "Operational Cost Reduction" },
    { value: "3x", label: "Faster Decision Making" }
  ]
};
