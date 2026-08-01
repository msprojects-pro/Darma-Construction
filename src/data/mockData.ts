import { ServiceItem, ProjectItem, WhyUsPillar, Testimonial } from '../types';
import heroImg from '../assets/images/darma_hero_bg_1785569743431.jpg';
import kitchenImg from '../assets/images/darma_kitchen_renovation_1785569758346.jpg';
import bathroomImg from '../assets/images/darma_bathroom_renovation_1785569775116.jpg';
import flooringImg from '../assets/images/darma_flooring_renovation_1785569791075.jpg';
import paintingImg from '../assets/images/darma_painting_renovation_1785569807096.jpg';

export const HERO_IMAGE = heroImg;
export const KITCHEN_IMAGE = kitchenImg;
export const BATHROOM_IMAGE = bathroomImg;
export const FLOORING_IMAGE = flooringImg;
export const PAINTING_IMAGE = paintingImg;

export const COMPANY_INFO = {
  name: "Darma Construction",
  tagline: "Quality Renovations Done Right",
  location: "BC, Canada",
  subtext: "Kitchen • Bathroom • Floors • Drywall • Painting • Installation",
  instagram: "@darma.construction",
  instagramUrl: "https://instagram.com/darma.construction",
  facebookUrl: "https://facebook.com/darmaconstruction",
  phone: "(604) 555-3276",
  email: "quotes@darmaconstruction.ca",
  serviceAreas: ["Vancouver", "Burnaby", "Richmond", "Surrey", "Coquitlam", "North Vancouver", "Langley", "Delta"],
  hours: "Mon - Sat: 7:00 AM - 7:00 PM",
  license: "BC Licensed Contractor #849201 | Full WCB & Liability Coverage"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'kitchen-cabinets',
    title: 'Kitchen Cabinets & Millwork',
    iconName: 'ChefHat',
    tag: 'Popular Upgrade',
    shortDesc: 'Custom cabinetry, quartz countertop prep, soft-close hardware, and full layout redesigns.',
    fullDesc: 'Transform your culinary space with precision-built custom cabinets, quartz or granite countertop prep, under-cabinet ambient lighting, and high-durability finishes engineered for daily life.',
    features: [
      'Custom solid wood & MDF cabinetry',
      'Quartz, granite & waterfall island prep',
      'Soft-close hinges & pull-out organizers',
      'Backsplash tile & under-cabinet LED strip integration',
      'Appliance fitting & plumbing alignment'
    ],
    image: KITCHEN_IMAGE,
    timeline: '2 - 3 Weeks'
  },
  {
    id: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    iconName: 'Bath',
    tag: 'High ROI',
    shortDesc: 'Luxury tile work, walk-in curbless glass showers, vanity fitting, and complete waterproofing.',
    fullDesc: 'Turn ordinary bathrooms into spa-like sanctuaries. We manage everything from complete tear-out and Schluter waterproofing system installation to custom marble tile layout and modern floating vanities.',
    features: [
      'Schluter-Kerdi certified waterproofing',
      'Curbless walk-in glass shower enclosures',
      'Heated tile floors & ambient lighting',
      'Custom stone vanity & linear drain installation',
      'Precision porcelain & marble tile tiling'
    ],
    image: BATHROOM_IMAGE,
    timeline: '1 - 2 Weeks'
  },
  {
    id: 'flooring',
    title: 'Hardwood & LVP Flooring',
    iconName: 'Layers',
    tag: 'Precision Laying',
    shortDesc: 'Hardwood, luxury vinyl plank (LVP), laminate, and custom herringbone tile installation.',
    fullDesc: 'Durable, flawless floor installations built for BC weather. We ensure proper subfloor leveling, acoustic underlayment, and seamless transition strips across every room in your home.',
    features: [
      'Engineered hardwood & solid wood laying',
      '100% Waterproof Luxury Vinyl Plank (LVP)',
      'Subfloor leveling & plywood prep',
      'Custom herringbone & chevron patterns',
      'Baseboard & shoe mold trim integration'
    ],
    image: FLOORING_IMAGE,
    timeline: '3 - 5 Days'
  },
  {
    id: 'drywall',
    title: 'Drywall & Framing',
    iconName: 'SquareStack',
    tag: 'Structural Quality',
    shortDesc: 'Precision wall framing, smooth mudding, taping, Level-5 finishing, and soundproofing.',
    fullDesc: 'Flawless walls start from the core. We handle structural framing alterations, moisture-resistant drywall installation, sound isolation boards, and glass-smooth Level-5 hand mudding ready for paint.',
    features: [
      'Wood & heavy-gauge steel framing',
      'Level-5 drywall mudding & dustless sanding',
      'Acoustic insulation & soundproofing channels',
      'Water & mold resistant green/purple boards',
      'Ceiling flattenings & popcorn ceiling removal'
    ],
    image: PAINTING_IMAGE,
    timeline: '3 - 6 Days'
  },
  {
    id: 'painting',
    title: 'Interior & Exterior Painting',
    iconName: 'Paintbrush',
    tag: 'Premium Finish',
    shortDesc: 'Flawless surface prep, low-VOC eco coatings, accent walls, and sprayed trim finishing.',
    fullDesc: 'Elevate your home with professional brush, roll, and airless spray finishes. We meticulously repair minor imperfections, prime all surfaces, and apply commercial-grade paints for maximum durability.',
    features: [
      'High-end interior spray & roller painting',
      'Accent walls, limewash & textured finishes',
      'Doors, trim & millwork factory spray finish',
      'Exterior weather-shield coatings for BC rain',
      'Color matching & luxury satin/matte sheens'
    ],
    image: PAINTING_IMAGE,
    timeline: '2 - 4 Days'
  },
  {
    id: 'installation',
    title: 'Custom Installation & Trims',
    iconName: 'Wrench',
    tag: 'Detailed Assembly',
    shortDesc: 'Feature walls, interior doors, crown molding, baseboards, and fixture mounting.',
    fullDesc: 'The final touches that turn a renovation into a masterpiece. From custom slat wood feature walls to pre-hung interior door installations and custom casing trims.',
    features: [
      'Wainscoting & acoustic wood slat feature walls',
      'Pre-hung interior door & hardware fitting',
      'Custom casing, baseboards & crown molding',
      'TV wall mounting & hidden cable conduit',
      'Accent beam & fireplace mantel builds'
    ],
    image: KITCHEN_IMAGE,
    timeline: '1 - 3 Days'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Vancouver Coal Harbour Kitchen Transformation',
    category: 'kitchen-cabinets',
    categoryLabel: 'Kitchen Renovation',
    location: 'Coal Harbour, Vancouver',
    duration: '3 Weeks',
    year: '2026',
    imageAfter: KITCHEN_IMAGE,
    imageBefore: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1000',
    summary: 'Full teardown of an outdated 90s oak kitchen into a sleek, open-concept dark charcoal & quartz chef kitchen with waterfall island.',
    scope: ['Custom Dark Matte Cabinets', 'Calacatta Quartz Waterfall Island', 'Integrated LED Under-cabinet Lighting', 'Engineered Hardwood Floor Seamless Transition']
  },
  {
    id: 'proj-2',
    title: 'Burnaby Heights Luxury Master Bathroom Oasis',
    category: 'bathroom-renovations',
    categoryLabel: 'Bathroom Spa',
    location: 'Burnaby Heights, BC',
    duration: '2 Weeks',
    year: '2026',
    imageAfter: BATHROOM_IMAGE,
    imageBefore: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
    summary: 'Converted a cramped builder-grade bathroom into a zero-threshold curbless shower room with heated marble floors and gold hardware.',
    scope: ['Schluter Kerdi Waterproof System', 'Curbless Walk-in Glass Enclosure', 'Floating Dual Vanity', 'Thermostatic Shower Valve Setup']
  },
  {
    id: 'proj-3',
    title: 'Kitsilano White Oak Herringbone Flooring',
    category: 'flooring',
    categoryLabel: 'Flooring',
    location: 'Kitsilano, Vancouver',
    duration: '4 Days',
    year: '2025',
    imageAfter: FLOORING_IMAGE,
    imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000',
    summary: 'Replaced worn carpet and uneven subfloors across 1,800 sq ft with precision herringbone engineered white oak and sound dampening underlayment.',
    scope: ['Plywood Subfloor Leveling', 'Herringbone European White Oak', 'Acoustic Sound Membrane', 'Custom Matching Flush Vents']
  },
  {
    id: 'proj-4',
    title: 'North Vancouver Open-Concept Drywall & Framing',
    category: 'drywall',
    categoryLabel: 'Drywall & Framing',
    location: 'North Vancouver, BC',
    duration: '5 Days',
    year: '2025',
    imageAfter: PAINTING_IMAGE,
    imageBefore: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1000',
    summary: 'Removed load-bearing partition walls, installed steel beam support framing, and finished walls with a glass-smooth Level-5 skim coat.',
    scope: ['Structural Beam Prep & Framing', 'Popcorn Ceiling Removal', 'Level-5 Dustless Sanding & Mudding', 'Roxul Soundproof Insulation']
  },
  {
    id: 'proj-5',
    title: 'Yaletown Condo Full Modern Repaint & Accent Wall',
    category: 'painting',
    categoryLabel: 'Painting',
    location: 'Yaletown, Vancouver',
    duration: '3 Days',
    year: '2026',
    imageAfter: PAINTING_IMAGE,
    imageBefore: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000',
    summary: 'Complete high-end interior paint makeover using Benjamin Moore Scuff-X matte charcoal accents and super white ceiling coats.',
    scope: ['Comprehensive Surface Prep & Caulk', 'Deep Charcoal Slatted Accent Wall', 'Airless Spraying of Doors & Trims', 'Low-VOC Eco-Friendly Paints']
  },
  {
    id: 'proj-6',
    title: 'Richmond Executive Home Full Installation Package',
    category: 'installation',
    categoryLabel: 'Custom Installation',
    location: 'Richmond, BC',
    duration: '10 Days',
    year: '2025',
    imageAfter: KITCHEN_IMAGE,
    imageBefore: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    summary: 'Comprehensive installation project including custom fireplace surround trim, solid core doors, baseboards, and kitchen hardware.',
    scope: ['Custom Fireplace Surround', 'Solid Core Black Hardware Doors', '7-Inch Modern Step Baseboards', 'Recessed Lighting Trim']
  }
];

export const WHY_US_PILLARS: WhyUsPillar[] = [
  {
    id: 'pillar-1',
    title: 'Quality Craftsmanship',
    description: 'Master-level precision, non-negotiable standards, and premium materials designed to withstand daily life in BC.',
    iconName: 'Award',
    highlight: 'Zero Compromise'
  },
  {
    id: 'pillar-2',
    title: 'On-Time Delivery',
    description: 'Detailed project schedules with daily progress updates. We respect your home and hit our promised completion dates.',
    iconName: 'Clock',
    highlight: 'Strict Schedules'
  },
  {
    id: 'pillar-3',
    title: 'Licensed & Insured',
    description: 'Full BC contractor licensing, $5M general liability coverage, and active WorkSafeBC (WCB) standing.',
    iconName: 'ShieldCheck',
    highlight: '100% Protected'
  },
  {
    id: 'pillar-4',
    title: 'Transparent Pricing',
    description: 'Comprehensive line-item quotes with fixed pricing. No surprise fees, mid-job upsells, or hidden charges.',
    iconName: 'DollarSign',
    highlight: 'Fixed Estimates'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Marcus & Elena V.',
    location: 'Vancouver (Kitsilano)',
    projectType: 'Kitchen & Flooring Renovation',
    rating: 5,
    comment: 'Darma Construction completely transformed our main floor. The attention to detail on our custom cabinets and white oak herringbone flooring was unbelievable. They finished 2 days early!',
    date: 'June 2026'
  },
  {
    id: 'test-2',
    author: 'David K.',
    location: 'Burnaby, BC',
    projectType: 'Bathroom Renovation',
    rating: 5,
    comment: 'DM’d them on Instagram after seeing their work. Best decision we made. Clear communication from quote to final walkthrough. The curbless shower is pure luxury.',
    date: 'May 2026'
  },
  {
    id: 'test-3',
    author: 'Sarah L.',
    location: 'North Vancouver',
    projectType: 'Drywall & Painting',
    rating: 5,
    comment: 'The drywall crew brought our popcorn ceilings down to a level-5 mirror finish. Spotless cleanup every afternoon. Recommended them to all our neighbors!',
    date: 'July 2026'
  }
];

export const FAQS = [
  {
    q: 'How do I request a project quote?',
    a: 'You can fill out our instant contact form below, or send us a Direct Message on Instagram @darma.construction with pictures/details of your space. We typically respond within 2-4 hours!'
  },
  {
    q: 'What areas in BC do you serve?',
    a: 'We proudly serve Greater Vancouver and the Lower Mainland, including Vancouver, Burnaby, Richmond, Surrey, Coquitlam, North/West Vancouver, Langley, and Delta.'
  },
  {
    q: 'Are you licensed and insured in BC?',
    a: 'Yes, absolutely. Darma Construction holds full BC municipal business licensing, $5M Commercial General Liability insurance, and complete WorkSafeBC (WCB) coverage for all team members.'
  },
  {
    q: 'Do you provide detailed cost estimates before starting?',
    a: 'Yes! Every project begins with a free site consultation and a detailed, line-item quote so you know exact material and labor costs before any work begins.'
  }
];
