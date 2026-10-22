export type ServiceCategoryId =
  | 'residential'
  | 'commercial'
  | 'builders-events'
  | 'specialist-exterior';

export type ServiceBadgeType =
  | 'popular'
  | 'coming-soon'
  | 'add-on'
  | 'partner'
  | 'standard';

export interface CleaningServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  categoryId: ServiceCategoryId;
  categoryName: string;
  badgeText: string;
  badgeType: ServiceBadgeType;
  oneLiner: string;
  overview: string;
  whoItsFor: string[];
  checklist: string[];
  addOnNote?: string;
  iconName: string;
  featuredOnHome?: boolean;
}

export interface ServiceCategoryInfo {
  id: ServiceCategoryId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDescription: string;
  complianceHighlights: string[];
  recommendedServices: { title: string; slug: string }[];
  iconName: string;
}

export interface PerthRegionItem {
  id: string;
  regionName: string;
  postcodeRange: string;
  description: string;
  suburbs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  name: string;
  suburb: string;
  service: string;
  quote: string;
  rating: number;
}

export const BRAND_INFO = {
  companyName: 'Nexora Cleaning Co',
  shortName: 'Nexora Cleaning',
  domain: 'nexoraCleaning.com.au',
  siteUrl: 'https://nexora.northcalibre.com',
  mainEmail: 'cleaning@nexora.com',
  adminEmail: 'admin@nexora.com',
  accountsEmail: 'accounts@nexora.com',
  phoneDisplay: '(08) 6100 0000',
  phoneHref: 'tel:+61861000000',
  mobileDisplay: '0400 000 000',
  whatsappNumber: '61400000000',
  location: 'Perth & Western Australia',
  businessHours: 'Mon – Sun: 7:00 AM – 8:00 PM AWST',
  commercialHours: '24/7 Scheduled Commercial & After-Hours Available',
  priceBeatText: 'We Beat Any Comparable Written Quote by 5%',
  fastQuoteText: '100% Free Quote in Under 3 Minutes',
  quoteSubtext: 'Free, no-obligation quote — price confirmed upfront before work begins.',
  confirmationMessage:
    "Thanks for contacting Nexora Cleaning. We've received your request and will contact you to confirm the details.",
};

export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  {
    id: 'residential',
    name: 'Residential Cleaning',
    shortName: 'Residential',
    tagline: 'Spotless Perth homes, bond-back vacates & weekend-saving upkeep.',
    description:
      'From fortnightly house cleans to inspection-ready vacate cleans across all Perth suburbs. Reclaim your weekend and leave the red dust and scrubbing to us.',
    iconName: 'Home',
  },
  {
    id: 'commercial',
    name: 'Commercial & Specialist Facilities',
    shortName: 'Commercial & Facilities',
    tagline: 'Police-cleared, WWCC-screened cleaning for offices, schools & daycare centres.',
    description:
      'Tailored commercial cleaning schedules backed by National Police Checks, Working With Children Checks, colour-coded hygiene systems, and documented checklists.',
    iconName: 'Building2',
  },
  {
    id: 'builders-events',
    name: 'Builders, Events & Projects',
    shortName: 'Builders & Projects',
    tagline: 'Handover sparkle cleans, post-reno dust extraction & rapid event resets.',
    description:
      'Precision handover cleans for WA builders, shopfitters, strata complexes, and event organisers operating on tight inspection deadlines.',
    iconName: 'HardHat',
  },
  {
    id: 'specialist-exterior',
    name: 'Specialist & Exterior Cleaning',
    shortName: 'Specialist & Exterior',
    tagline: 'Pressure washing, streak-free windows, tile revival, oven add-ons & partner steam cleaning.',
    description:
      'Tackle Perth bore water stains, driveway grime, baked-on ovens, and deep carpet hot-water extraction with our specialist equipment and vetted partners.',
    iconName: 'Sparkles',
  },
];

export const CLEANING_SERVICES: CleaningServiceItem[] = [
  // ============================================================================
  // CATEGORY 1: RESIDENTIAL CLEANING (6 Services)
  // ============================================================================
  {
    slug: 'regular-house-cleaning',
    title: 'Regular House Cleaning',
    shortTitle: 'Regular House Cleaning',
    categoryId: 'residential',
    categoryName: 'Residential Cleaning',
    badgeText: 'POPULAR RESIDENTIAL',
    badgeType: 'popular',
    oneLiner:
      'Weekly, fortnightly or monthly cleaning so you can spend your weekend at Cottesloe, not wrestling the vacuum.',
    overview:
      'Keeping up with dust, dishes, and bathroom tiles shouldn’t eat your weekend. Our regular cleaning service matches your home with a dedicated, police-checked cleaner following a documented task list. Reliable, punctual, and tailored to your household routine.',
    whoItsFor: [
      'Busy Perth professionals and families reclaiming their weekends',
      'Homeowners who want consistent fortnightly or monthly upkeep',
      'Anyone needing a dependable domestic reset without contracts',
    ],
    checklist: [
      'High and low dusting of surfaces, ledges, skirting boards and decor',
      'Kitchen benchtops, stovetop, splashbacks and exterior appliance wipe-down',
      'Deep bathroom & toilet sanitisation: glass screens, vanities and mirrors',
      'Complete HEPA vacuuming of carpets, rugs, stairs and soft furnishings',
      'Mopping and sanitising of hard floors (timber, tiles, vinyl and hybrid)',
      'Bedroom tidy, surface presentation and mirror streak-free polishing',
      'Emptying all internal rubbish bins and fitting fresh liners',
      'Available Add-On: Deep Kitchen, Oven & Appliance Detailing',
    ],
    addOnNote:
      'Pro tip: Bundle your regular clean with our Oven Add-On for a completely spotless kitchen.',
    iconName: 'Home',
    featuredOnHome: true,
  },
  {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    shortTitle: 'Deep Cleaning',
    categoryId: 'residential',
    categoryName: 'Residential Cleaning',
    badgeText: 'INTENSIVE DETAIL',
    badgeType: 'popular',
    oneLiner:
      'An intensive top-to-bottom reset targeting built-up grime, soap scum, grease and neglected corners.',
    overview:
      'When everyday wipe-downs aren’t cutting it, our deep clean gets stuck into the heavy grime. We tackle stubborn Perth bore water scale, grease behind the cooktop, and dust on ceiling fans to leave your entire home feeling brand new.',
    whoItsFor: [
      'Homes needing a thorough seasonal reset before starting regular cleans',
      'Properties battling stubborn bathroom limescale, soap scum or kitchen grease',
      'Pre-sale styling, open-home preparation, and post-party cleanups',
    ],
    checklist: [
      'Intensive descaling of shower screens, tapware, tile faces and grout',
      'Scrubbing and hand-wiping skirting boards, door frames and light switches',
      'High-reach dusting of ceiling fans, AC return vents and light fittings',
      'Deep kitchen degreasing of rangehood canopies, cooktops and cabinet faces',
      'Window sills, sliding door tracks and internal glass detailing',
      'Under-furniture and edge vacuuming plus multi-stage floor sanitising',
      'Complete disinfection of all toilets, basins, and laundry tubs',
      'Available Add-On: Inside Oven & Rangehood Filter Degreasing',
    ],
    iconName: 'Sparkles',
    featuredOnHome: true,
  },
  {
    slug: 'end-of-lease-bond-cleaning',
    title: 'End-of-Lease / Bond / Vacate Cleaning',
    shortTitle: 'End-of-Lease & Bond Clean',
    categoryId: 'residential',
    categoryName: 'Residential Cleaning',
    badgeText: 'BOND BACK READY',
    badgeType: 'popular',
    oneLiner:
      'Agency-aligned move-out cleaning designed so your property manager has zero excuses to hold your bond.',
    overview:
      'Moving house in Perth is stressful enough without tenancy disputes over skirting dust. Our vacate team works off strict REIWA-aligned inspection checklists covering cupboards, sliding tracks, and wet areas. Bundle carpet steam cleaning (via our trusted partner) and oven detailing for a seamless single-invoice handover.',
    whoItsFor: [
      'Tenants vacating rentals anywhere across the Perth Metro area',
      'Landlords and property managers prepping a rental for immediate re-leasing',
      'Home sellers handing over keys at settlement in spotless condition',
    ],
    checklist: [
      'Inside and outside of all kitchen cupboards, drawers, pantries and benchtops',
      'Full bathroom & ensuite restoration: showers, tubs, toilets, vanities and exhaust vents',
      'Built-in robes, mirror sliders, shelving and wardrobe tracks detailed',
      'Skirting boards, architraves, doors, handles, power points and switches cleaned',
      'Cobweb clearing, ceiling fan wipe-down, air vents and light covers',
      'Internal windows, glass sliding doors, sills and tracks thoroughly vacuumed & cleaned',
      'Complete property vacuuming and damp microfibre mopping of hard floors',
      'Easy bundle with Oven Add-On & Trusted Partner Carpet Steam Cleaning (with receipt for agent)',
    ],
    addOnNote:
      'Most WA real estate agencies require proof of professional carpet steam cleaning and oven detailing. Select both in your quote and we coordinate the lot!',
    iconName: 'KeyRound',
    featuredOnHome: true,
  },
  {
    slug: 'move-in-cleaning',
    title: 'Move-In Cleaning',
    shortTitle: 'Move-In Cleaning',
    categoryId: 'residential',
    categoryName: 'Residential Cleaning',
    badgeText: 'FRESH START',
    badgeType: 'standard',
    oneLiner:
      'Sanitise every cupboard, bathroom and floor before unpacking your family and furniture.',
    overview:
      'Whether you just settled on a new home or picked up keys to a rental that sat empty, our Move-In Clean ensures every shelf, drawer, and shower is hospital-grade sanitised while the space is empty. Unpack straight into sparkling, fresh cupboards.',
    whoItsFor: [
      'New homeowners moving into their purchased Perth property',
      'Families wanting medical-grade sanitisation before boxes arrive',
      'Landlords refreshing empty properties before tenant move-in day',
    ],
    checklist: [
      'Sanitising inside all kitchen cabinetry, pantry shelving and drawers',
      'Antibacterial disinfection of showers, bathtubs, vanities and toilets',
      'Wiping inside linen closets, built-in wardrobes and laundry units',
      'Dusting ceiling fans, blinds, window ledges and AC intake vents',
      'Spot-cleaning walls, doors, light switches and entry handles',
      'Internal glass and mirror streak-free polishing',
      'Deep vacuuming and sanitising mopping of all floor surfaces',
      'Optional Add-On: Oven & Refrigerator interior sanitising',
    ],
    iconName: 'PackageCheck',
  },
  {
    slug: 'spring-cleaning',
    title: 'Spring Cleaning',
    shortTitle: 'Spring Cleaning',
    categoryId: 'residential',
    categoryName: 'Residential Cleaning',
    badgeText: 'SEASONAL REFRESH',
    badgeType: 'standard',
    oneLiner:
      'Clear out winter damp, fine dust and built-up allergens across every room in your home.',
    overview:
      'Give your home a thorough seasonal reset. Our Spring Clean lifts accumulated dust from fans, tracks, and behind furniture, revitalising living spaces so your home feels light, airy, and ready for summer entertaining.',
    whoItsFor: [
      'Homeowners wanting an annual whole-house seasonal refresh',
      'Allergy-conscious households banishing dust mites, pollen and pet dander',
      'Pre-holiday entertaining prep for Christmas and summer BBQs',
    ],
    checklist: [
      'Whole-home high & low dusting: ceiling cornices, fans, vents and skirtings',
      'Window sills, flyscreen brushing and sliding door track vacuuming',
      'Kitchen cabinetry exterior wiping, splashback degreasing and sink scrub',
      'Deep bathroom descaling, mould spot treatment and tapware polish',
      'Cleaning behind and underneath accessible movable furniture',
      'Streak-free polishing of mirrors, glass tops and chrome fixtures',
      'High-filtration allergen vacuuming and fragrant hard floor mopping',
      'Customise with optional pressure washing or oven detailing add-ons',
    ],
    iconName: 'Sun',
  },
  {
    slug: 'airbnb-short-stay-cleaning',
    title: 'Airbnb & Short-Stay Turnover Cleaning',
    shortTitle: 'Airbnb & Short-Stay',
    categoryId: 'residential',
    categoryName: 'Residential Cleaning',
    badgeText: 'HOST PARTNER',
    badgeType: 'standard',
    oneLiner:
      'Punctual guest changeovers, presentation styling and restocking checks to lock in 5-star reviews.',
    overview:
      'In Perth’s thriving short-stay market, cleanliness drives your Superhost status. We partner with Airbnb and Stayz hosts to deliver dependable turnarounds strictly between 10 AM check-out and 2 PM check-in, keeping guests raving about your property.',
    whoItsFor: [
      'Airbnb & Stayz hosts across Perth CBD, Fremantle, Scarborough and coastal strips',
      'Short-stay property management agencies needing reliable turnover crews',
      'Serviced apartment operators and executive corporate rental hosts',
    ],
    checklist: [
      'Strict adherence to check-out and check-in turnover windows',
      'Stripping beds, making up fresh linen and styling per host standards',
      'Hotel-grade bathroom sanitisation, towel presentation and amenity setups',
      'Kitchen reset: clean dishes, empty fridge, wipe microwave and coffee machine',
      'Living area styling, cushion arrangement, remote sanitising and mirror shine',
      'Rubbish removal, bin sanitisation and fresh liner replacement',
      'Damage, lost-property, and low-supply photo reporting to host via WhatsApp',
      'Balcony sweep, outdoor furniture wipe, and floor vacuuming & mopping',
    ],
    iconName: 'CalendarCheck',
  },

  // ============================================================================
  // CATEGORY 2: COMMERCIAL & SPECIALIST FACILITIES (6 Services)
  // ============================================================================
  {
    slug: 'office-commercial-cleaning',
    title: 'Office & Commercial Cleaning',
    shortTitle: 'Office & Commercial',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'COMMERCIAL CORE',
    badgeType: 'popular',
    oneLiner:
      'Spotless workplaces, boardrooms and amenities maintained after-hours with zero disruption to your team.',
    overview:
      'A clean office keeps staff healthy and impresses visiting clients. Our police-checked commercial crew operates early morning or after-hours using documented site logs, colour-coded microfibre systems, and strict security lockup protocols.',
    whoItsFor: [
      'Offices, coworking hubs, and professional suites in Perth CBD, Subiaco, Osborne Park & metro hubs',
      'Retail showrooms, design studios, and commercial client suites',
      'Business managers tired of unreliable contractors who miss bins and washrooms',
    ],
    checklist: [
      'Workstations, desks, meeting tables, counters and touchpoint sanitisation',
      'Staff kitchenettes, sinks, microwaves, fridge wipe-downs and dishwasher cycles',
      'Commercial washroom sanitisation, toilet scrubbing and consumable restocking',
      'Glass entrance doors, partition glass and reception counter polishing',
      'Commercial HEPA vacuuming of carpet tiles and machine damp-mopping of hard floors',
      'Daily waste, recycling and confidential paper bin emptying with fresh liners',
      'Strict after-hours alarm code and lockbox key security protocols',
      'Dedicated on-site communication logbook and supervisor quality checks',
    ],
    iconName: 'Building2',
    featuredOnHome: true,
  },
  {
    slug: 'school-education-cleaning',
    title: 'School & Education Cleaning',
    shortTitle: 'School & Education',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'WWCC SCREENED',
    badgeType: 'standard',
    oneLiner:
      'Safe, reliable cleaning for classrooms, staff areas, amenities and campuses by WWCC-cleared staff.',
    overview:
      'Educational environments require rigorous hygiene to minimise student absenteeism alongside strict child safeguarding. All Nexora staff assigned to schools and colleges hold verified National Police Clearances and Working With Children Checks (WWCC).',
    whoItsFor: [
      'Public, Independent and Catholic primary and high schools across WA',
      'TAFE campuses, private colleges, tutoring centres and training facilities',
      'University facilities, lecture theatres and student accommodation',
    ],
    checklist: [
      'Classroom desks, chairs, whiteboards, sinks and door touchpoint disinfection',
      'Student and staff toilet blocks, changerooms and drinking fountain sanitisation',
      'Libraries, staff rooms, administration hubs and sick-bay medical cleaning',
      'Assembly halls, gymnasium floors, corridors and external stairwells',
      'Safe, non-toxic, colour-coded microfibre systems preventing cross-contamination',
      'Daily term-time maintenance plus deep holiday restoration programmes',
      'Waste management, quadrangle bin collection and playground grounds tidying',
      'Full compliance documentation, WWCC records and WHS paperwork provided',
    ],
    iconName: 'GraduationCap',
  },
  {
    slug: 'childcare-daycare-cleaning',
    title: 'Childcare & Day-Care Cleaning',
    shortTitle: 'Childcare & Day-Care',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'CHILD-SAFE HYGIENE',
    badgeType: 'popular',
    oneLiner:
      'Age-appropriate, non-toxic sanitisation and signed daily hygiene logs for early learning centres.',
    overview:
      'Young kids explore with their hands and mouths. Our early learning cleaning routines use hospital-grade, low-tox disinfectants across play mats, sleep rooms, and toddler bathrooms to support your National Quality Standard (NQS) accreditation.',
    whoItsFor: [
      'Early learning centres, long day-care operators, and community preschools',
      'Out-of-school-hours care (OSHC) hubs and family day-care networks',
      'Centre directors requiring documented daily hygiene checklists for audits',
    ],
    checklist: [
      'Child-safe, eco-friendly sanitisation of low tables, toys, and activity zones',
      'Nappy change stations, toddler toilets, low basins and wet area deep cleans',
      'Cot rooms, sleep mats and quiet zones vacuumed with HEPA filtration',
      'Milk-prep areas, centre kitchenettes and highchair sanitisation',
      'Low glass finger-mark removal, entry door sanitising and soft floor care',
      'Strict colour-coded systems isolating bathroom gear from food and play areas',
      'Signed daily hygiene and sanitisation verification sheets for directors',
      '100% WWCC and Police-Cleared staff trained in infection prevention',
    ],
    iconName: 'Baby',
    featuredOnHome: true,
  },
  {
    slug: 'aged-care-cleaning',
    title: 'Aged-Care Cleaning',
    shortTitle: 'Aged-Care Facilities',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'HIGH-CARE STANDARDS',
    badgeType: 'standard',
    oneLiner:
      'Compassionate, thorough cleaning suited to residential care operations and resident dignity.',
    overview:
      'Aged-care facilities are residents’ homes as well as clinical environments. Our screened cleaners operate quietly and respectfully, maintaining stringent infection-control standards and slip-safe floor maintenance.',
    whoItsFor: [
      'Residential aged-care facilities and retirement villages across WA',
      'Assisted living communities, respite hubs and hospice environments',
      'Care managers seeking reliable contracted or supplemental cleaning staff',
    ],
    checklist: [
      'Resident suites, ensuites, call bells, handrails and touchpoint disinfection',
      'Communal dining rooms, recreation halls, lounges and reception areas',
      'Slip-resistant floor cleaning protocols with clear safety signage and rapid dry',
      'Strict colour-coded cross-contamination prevention throughout wet and dry zones',
      'Quiet, respectful demeanour around residents, nursing staff, and visitors',
      'Common corridors, lifts, nursing station and medication room maintenance',
      'Full compliance documentation, police clearances, and immunisation tracking',
      'Tailored daily schedules or supplemental relief support for WA facilities',
    ],
    iconName: 'HeartHandshake',
  },
  {
    slug: 'medical-healthcare-cleaning',
    title: 'Medical & Healthcare Cleaning',
    shortTitle: 'Medical & Healthcare',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'COMING SOON',
    badgeType: 'coming-soon',
    oneLiner:
      'Clinical-grade disinfection for GP clinics, dental surgeries and allied health — Launching Soon across Perth.',
    overview:
      'COMING SOON: Nexora is finalising our specialised clinical division for GP clinics, dental surgeries, physiotherapy studios, and medical centres. Register your clinic’s interest below to secure priority onboarding or discuss upcoming tenders.',
    whoItsFor: [
      'General practice clinics, medical centres and specialist consulting rooms',
      'Dental surgeries, orthodontists and allied health practices (physio, chiro, podiatry)',
      'Practice managers planning upcoming commercial contract renewals',
    ],
    checklist: [
      'Consultation rooms, treatment benches (non-invasive) and waiting area sanitisation',
      'High-touch point disinfection: door hardware, reception counters, EFTPOS terminals',
      'Patient and staff washroom clinical-grade deep disinfection',
      'Colour-coded zoning and documented infection-control compliance logs',
      'Mechanical scrubbing and sanitisation of clinical vinyl and sealed floors',
      'Safety Data Sheet (SDS) registers and waste handling protocols',
      'After-hours cleaning ensuring zero downtime for patient appointments',
      'Priority registration open now via cleaning@nexora.com',
    ],
    addOnNote:
      'Launching Soon: Register your medical facility today and our clinical coordinator will contact you with availability.',
    iconName: 'Stethoscope',
  },
  {
    slug: 'ndis-domestic-cleaning',
    title: 'NDIS-Related Domestic Cleaning',
    shortTitle: 'NDIS Domestic Support',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'NDIS SUPPORT',
    badgeType: 'standard',
    oneLiner:
      'Reliable, respectful domestic cleaning for NDIS participants (self-managed and plan-managed across Perth).',
    overview:
      'Everyone deserves a clean, comfortable, and safe home. We work alongside NDIS participants, carers, and plan managers across Perth, providing consistent domestic assistance tailored to your personal routine and communication preferences.',
    whoItsFor: [
      'Self-managed and Plan-managed NDIS participants across Perth Metro',
      'Support Coordinators seeking a dependable, responsive domestic provider',
      'Participants needing consistent cleaner allocation and clear itemised invoices',
    ],
    checklist: [
      'Flexible routine cleaning of bedrooms, living zones, kitchens and bathrooms',
      'Consistent cleaner allocation so you always see a familiar, trusted face',
      'Assistance with bed linen changes, laundry folding, and dishwashing upon request',
      'Direct itemised billing sent to participants or Plan Managers (accounts@nexora.com)',
      'Police-checked, patient team members who respect your space and routine',
      'Low-scent or hypoallergenic cleaning product options on request',
      'Straightforward communication with Support Coordinators and family members',
      'Customisable weekly, fortnightly, or one-off deep cleaning support',
    ],
    iconName: 'ShieldCheck',
  },

  // ============================================================================
  // CATEGORY 3: BUILDERS, EVENTS & PROJECTS (6 Services)
  // ============================================================================
  {
    slug: 'builders-construction-cleaning',
    title: 'Builders & Construction Cleaning',
    shortTitle: 'Builders & Construction',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'HANDOVER READY',
    badgeType: 'popular',
    oneLiner:
      'Stage 1 rough, detailed and final sparkle handover cleans for new builds and commercial fit-outs.',
    overview:
      'We work alongside WA site supervisors, residential home builders, and shopfitters to take construction sites from dusty work zones to defect-free client handovers. On time, fully insured, and site-safety compliant.',
    whoItsFor: [
      'Residential project home builders and site supervisors across WA',
      'Commercial shopfitters, office fit-out contractors, and developers',
      'Owner-builders preparing for practical completion (PC) and final sign-off',
    ],
    checklist: [
      'Stage 1 Rough Clean: Trade debris removal, packaging clear-out and initial HEPA vacuum',
      'Stage 2 Detailed Clean: Joinery inside/out, bathrooms, grout haze and tile cleaning',
      'Stage 3 Final Sparkle Clean: Fingerprint-free polish of glass, mirrors, chrome and floors',
      'Safe removal of manufacturer stickers, protective films, silicone and paint flecks',
      'Window frames, sills, and aluminium sliding door track dust extraction',
      'Garage, porch, alfresco, and driveway sweep-down and pressure wash options',
      'Full White Card PPE compliance and $20M Public Liability certificates supplied',
      'Guaranteed adherence to practical completion (PC) handover deadlines',
    ],
    iconName: 'HardHat',
    featuredOnHome: true,
  },
  {
    slug: 'post-renovation-cleaning',
    title: 'Post-Renovation Cleaning',
    shortTitle: 'Post-Renovation Clean',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'DUST REMOVAL',
    badgeType: 'standard',
    oneLiner:
      'Extract fine plaster dust, grout haze and trade residue without scratching brand-new surfaces.',
    overview:
      'Renovating a kitchen or bathroom leaves fine airborne dust that finds its way into every drawer and cornice. Our crew uses multi-stage HEPA vacuuming and surface-safe microfibre methods to protect your new stone benchtops and tapware.',
    whoItsFor: [
      'Homeowners wrapping up kitchen, bathroom, or extension renovations',
      'Interior renovators handing back a lived-in property to homeowners',
      'Commercial businesses reopening following an interior refurbishment',
    ],
    checklist: [
      'Multi-pass fine dust extraction from walls, cornices, ceilings and door heads',
      'Inside and outside detailing of brand-new joinery, drawers, and cabinet hardware',
      'Careful removal of tile grout haze, adhesive residues and trade footprints',
      'Air conditioning return grilles, fans, light switches and outlets detailed',
      'Non-scratch detailing of new tapware, frameless shower glass and fixtures',
      'Window tracks, sills, and glazing cleaned free of plaster and sanding dust',
      'Multi-stage vacuuming and damp microfibre mopping of new floor coverings',
      'Move-in ready finish across renovated spaces and adjacent living zones',
    ],
    iconName: 'Hammer',
  },
  {
    slug: 'pre-event-cleaning',
    title: 'Pre-Event Cleaning',
    shortTitle: 'Pre-Event Prep',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'VENUE PREP',
    badgeType: 'standard',
    oneLiner:
      'Detail your indoor or outdoor venue to pristine presentation standards before guests arrive.',
    overview:
      'Hosting a product launch, corporate celebration, wedding reception, or private milestone in Perth? We ensure your entrance, event hall, VIP suites, and washrooms look immaculate before the first guest walks in.',
    whoItsFor: [
      'Event coordinators, wedding planners, and corporate brand teams',
      'Function venues, community halls, and private property hosts',
      'Pop-up retail activations, gallery showings, and festival suites',
    ],
    checklist: [
      'Main hall, foyer, stage, and VIP lounge floor vacuuming and buffing',
      'Restroom deep sanitisation, mirror polishing and consumable stocking',
      'Bar stations, catering prep zones and servery bench sanitisation',
      'Glass entry doors, handrails, and outdoor veranda presentation sweep',
      'Table, chair, and feature fixture wipe-down prior to event dressing',
      'Bins fitted with fresh heavy-duty liners placed across the venue',
      'Flexible bump-in timing coordinated with your styling team',
      'Optional bundle with Post-Event Reset for seamless round-trip coverage',
    ],
    iconName: 'Calendar',
  },
  {
    slug: 'post-event-cleaning',
    title: 'Post-Event Cleaning',
    shortTitle: 'Post-Event Reset',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'FAST RESET',
    badgeType: 'standard',
    oneLiner:
      'Rapid venue reset, rubbish collection, washroom sanitisation and floor recovery so you get your bond back.',
    overview:
      'When the party wraps, our team steps in. Available overnight or early the next morning across Perth to bag event rubbish, mop sticky floors, and restore hired halls or corporate venues to spotless condition before bump-out.',
    whoItsFor: [
      'Venue hirers needing their security and cleaning bond refunded in full',
      'Corporate offices after company parties, awards nights or client events',
      'Homeowners after milestone birthdays, engagements, or garden weddings',
    ],
    checklist: [
      'Litter collection, bottle sorting, and heavy-duty bagging of event waste',
      'Sticky drink spill removal, degreasing, commercial vacuuming and mopping',
      'Complete washroom disinfection, deodorising and toilet scrubbing',
      'Bar, kitchenette and catering prep clean-down and sink sanitisation',
      'Outdoor courtyard, smoking area and car park litter sweep',
      'Surface wipe-down of hired tables, ledges and fixtures',
      'Late-night, overnight, or early-morning weekend crew deployment',
      'Handover verification against venue checklist to protect your bond',
    ],
    iconName: 'PartyPopper',
  },
  {
    slug: 'strata-common-area-cleaning',
    title: 'Commercial / Strata Common-Area Cleaning',
    shortTitle: 'Strata Common Areas',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'STRATA CARE',
    badgeType: 'popular',
    oneLiner:
      'Dependable scheduled cleaning for apartment lobbies, lifts, corridors, stairwells and shared amenities.',
    overview:
      'We work alongside Perth strata managers and Councils of Owners to keep residential apartment buildings, townhouse communities, and commercial strata complexes looking clean, safe, and well-managed week in, week out.',
    whoItsFor: [
      'Strata management companies and Councils of Owners (COO) across Perth',
      'Residential apartment complexes and mixed-use commercial developments',
      'Commercial property managers overseeing shared foyers and washrooms',
    ],
    checklist: [
      'Ground-floor foyers, intercoms, letterboxes and entry glass door detailing',
      'Lift car interiors: stainless steel buffing, mirror polishing and track vacuuming',
      'Carpeted residential corridors vacuumed and concrete fire stairs swept & mopped',
      'Shared resident lounges, gyms, BBQ pavilions and communal washrooms',
      'Bin rooms swept, tidied, and deodorised on scheduled collection days',
      'Walkway cobweb removal, light exterior sweeping, and glass balustrades',
      'Prompt maintenance hazard reporting (e.g. blown globes, water leaks) to strata managers',
      'Consolidated monthly account invoicing via accounts@nexora.com',
    ],
    iconName: 'Layers',
  },
  {
    slug: 'industrial-warehouse-cleaning',
    title: 'Industrial & Warehouse Cleaning',
    shortTitle: 'Industrial & Warehouse',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'SITE SCOPE',
    badgeType: 'standard',
    oneLiner:
      'Targeted cleaning for logistics offices, crib rooms, amenities and warehouse zones Nexora is equipped to handle.',
    overview:
      'Supporting workshops, transport depots, and logistics hubs in Welshpool, Kewdale, Malaga, Canning Vale, and Henderson. We assess your site upfront so we only take on work we have the certified training and equipment to deliver safely.',
    whoItsFor: [
      'Logistics depots, freight warehouses, and light industrial workshops',
      'Industrial tenants preparing for end-of-commercial-lease site handovers',
      'Operations managers needing dependable cleaning for crib rooms and amenities',
    ],
    checklist: [
      'Site administration offices, dispatch counters and meeting spaces',
      'Staff crib rooms, lunchrooms, kitchenettes and locker amenities',
      'High-traffic industrial washrooms, showers and change blocks',
      'Pedestrian walkways, packing benches and supervisor station dust-downs',
      'Dust removal from accessible warehouse racking, ledges and signage',
      'End-of-lease commercial warehouse office and amenities cleanups',
      'Full compliance with site inductions, PPE rules and safe work method statements (SWMS)',
      'Clear upfront scope assessment so you know exactly what is included',
    ],
    iconName: 'Warehouse',
  },

  // ============================================================================
  // CATEGORY 4: SPECIALIST & EXTERIOR CLEANING (7 Services)
  // ============================================================================
  {
    slug: 'high-pressure-washing',
    title: 'High-Pressure Washing',
    shortTitle: 'High-Pressure Washing',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'EXTERIOR RESTORE',
    badgeType: 'popular',
    oneLiner:
      'Blast away winter moss, oil stains, bore marks and grime across Perth driveways, patios and limestone.',
    overview:
      'Perth’s summer sun, winter rains, and iron-heavy bore water leave driveways and limestone looking tired and slippery. Our high-pressure surface washers strip away dirt, moss, and tyre marks to restore serious street appeal.',
    whoItsFor: [
      'Homeowners refreshing driveways, exposed aggregate, patios and pool surrounds',
      'Tenants and landlords prepping outdoor areas before vacate inspection or sale',
      'Commercial shopfronts, strata walkways, and loading bays',
    ],
    checklist: [
      'Exposed aggregate, poured concrete, and brick-paved driveways and crossovers',
      'Alfresco dining areas, verandas, pool coping and entertaining patios',
      'Garden walkways, side boundary paths and front entry steps',
      'Retaining walls, suitable limestone blocks and exterior masonry',
      'Commercial shopfront pavements, bin wash bays and entry paths',
      'Removal of slippery winter moss, algae, tyre marks and dirt crust',
      'Pressure-regulated cleaning to protect joint sand and sealer coats',
      'Final rinse-down of surrounding windows, walls and garden borders',
    ],
    iconName: 'Droplets',
    featuredOnHome: true,
  },
  {
    slug: 'window-cleaning',
    title: 'Window Cleaning',
    shortTitle: 'Window Cleaning',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'STREAK-FREE GLASS',
    badgeType: 'standard',
    oneLiner:
      'Crystal-clear interior and exterior glass, frames and tracks within safe working limits.',
    overview:
      'Nothing lets Perth natural light in like clean windows. Using pure-water technology and professional squeegee methods, we remove coastal sea spray, bore water spots, fingerprints, and dust safely from ground and accessible heights.',
    whoItsFor: [
      'Perth coastal and suburban homes wanting crystal-clear natural light',
      'Retail shopfronts, cafes, and ground-floor commercial offices',
      'End-of-lease vacate tenants and pre-sale property photography campaigns',
    ],
    checklist: [
      'Interior and exterior window glass cleaned to a streak-free finish',
      'Sliding glass doors, stacker doors, and French door panels',
      'Window frames, ledges and aluminium sills wiped clean',
      'Sliding door and window track vacuuming and grime extraction',
      'Flyscreen removal, gentle brushing/washing, and refitting on request',
      'Glass pool fencing and internal balustrades (optional addition)',
      'Retail display glass and commercial street-facing glazing',
      'Performed strictly within safe working-at-heights regulations',
    ],
    iconName: 'AppWindow',
  },
  {
    slug: 'carpet-upholstery-cleaning',
    title: 'Carpet & Upholstery Cleaning',
    shortTitle: 'Carpet & Upholstery',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'TRUSTED PARTNER SERVICE',
    badgeType: 'partner',
    oneLiner:
      'Industrial hot-water steam extraction for carpets and sofas, coordinated via our trusted Perth specialist partner.',
    overview:
      'To ensure your carpets get dedicated truck-mount or industrial hot-water extraction machinery, Nexora delivers carpet steam cleaning through our vetted specialist partner. You get single-point booking with Nexora, combined scheduling, and official receipts required by WA property managers.',
    whoItsFor: [
      'Vacating tenants needing a certified carpet steam receipt for bond release',
      'Homeowners refreshing high-traffic carpets, rugs, and fabric lounge suites',
      'Offices and commercial facilities maintaining heavy-duty carpet tiles',
    ],
    checklist: [
      'Coordinated single-point booking alongside your bond or house clean',
      'Pre-clean inspection, deep industrial vacuuming, and targeted stain pre-spray',
      'Hot-water extraction (steam clean) across bedrooms, lounges, stairs and halls',
      'Fabric sofa, armchair, dining chair and mattress sanitisation',
      'Pet odour neutralisation, dander removal, and dust-mite treatment',
      'Commercial carpet tile extraction for corporate suites and corridors',
      'Official professional carpet cleaning receipt provided for your landlord',
      'Backed by Nexora’s quality coordination and transparent pricing',
    ],
    addOnNote:
      'Delivered in partnership with our vetted Perth carpet technician — coordinated seamlessly so you only deal with Nexora.',
    iconName: 'Sofa',
    featuredOnHome: true,
  },
  {
    slug: 'tile-grout-cleaning',
    title: 'Tile & Grout Cleaning',
    shortTitle: 'Tile & Grout Cleaning',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'HARD FLOOR REVIVAL',
    badgeType: 'standard',
    oneLiner:
      'Mechanical scrubbing and deep extraction of porous grout lines to restore their original colour.',
    overview:
      'Everyday mopping pushes dirty water straight into porous grout lines, turning them dark and grimy over time. Our specialist tile scrub lifts grease, soap scum, and ground-in dirt from ceramic, porcelain, and sealed stone floors.',
    whoItsFor: [
      'Kitchen, dining and living areas with darkened, discoloured grout lines',
      'Bathrooms and showers with stubborn soap scum and stained floor tiles',
      'Commercial foyers, cafes and retail showrooms needing floor restoration',
    ],
    checklist: [
      'Specialist alkaline or acidic pre-treatment tailored to your tile type',
      'Mechanical brush agitation deep into recessed grout channels',
      'Kitchen, hallway, open-plan living and alfresco tiled floor restoration',
      'Bathroom floor and wall tile deep descaling and mould treatment',
      'High-pressure extraction rinse leaving zero sticky detergent residue',
      'Surface-safe methods for ceramic, porcelain, and sealed stone tiles',
      'Noticeable colour brightening across high-traffic walkways',
      'Ideal preparation for pre-sale presentation or new home move-ins',
    ],
    iconName: 'Grid',
  },
  {
    slug: 'kitchen-oven-appliance-cleaning',
    title: 'Kitchen, Oven & Appliance Cleaning',
    shortTitle: 'Kitchen, Oven & Appliance (Add-On)',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'AVAILABLE AS ADD-ON',
    badgeType: 'add-on',
    oneLiner:
      'Deep non-caustic degreasing for ovens, cooktops, rangehoods and appliances — available as an Add-On to any clean.',
    overview:
      'Baked-on carbon and sticky rangehood grease take serious elbow grease and specialist degreasers. Add Kitchen, Oven & Appliance Cleaning to your Regular Clean, Deep Clean, or Vacate Clean for a sparkling, smoke-free kitchen.',
    whoItsFor: [
      'End-of-lease tenants (where spotless ovens are non-negotiable for bond refunds)',
      'Regular and Deep Clean clients wanting their oven detailed at the same visit',
      'Home cooks tired of smoke alarms triggering every time they roast a chicken',
    ],
    checklist: [
      'Full internal oven degreasing (600mm or 900mm ovens, wire racks, trays & runners)',
      'Oven door glass detailing between panels to remove burnt streaks',
      'Gas burner trivets, electric ceramic, or induction cooktop polish',
      'Rangehood canopy degreasing and removable metal mesh filter degreasing',
      'Microwave interior and exterior steam sanitisation',
      'Dishwasher filter, door seals, and stainless front polishing',
      'Refrigerator and freezer interior shelf sanitising (optional on request)',
      'Fume-free, food-safe finish ready for immediate family cooking',
    ],
    addOnNote:
      'Convenient Add-On: Select "Kitchen & Oven Add-On" in your quote request and we bundle it right into your visit.',
    iconName: 'Flame',
    featuredOnHome: true,
  },
  {
    slug: 'bathroom-toilet-deep-cleaning',
    title: 'Bathroom & Toilet Deep Cleaning',
    shortTitle: 'Bathroom Deep Clean',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'HYGIENE & DESCALING',
    badgeType: 'standard',
    oneLiner:
      'Tackle stubborn Perth bore water stains, calcium build-up, soap scum and wet-area mould.',
    overview:
      'Perth’s water is notorious for leaving hard calcium crusts on shower screens and tapware. Our intensive bathroom descaling dissolves soap scum, cleans out drain traps, and treats mould spores across residential and commercial washrooms.',
    whoItsFor: [
      'Homeowners battling cloudy glass shower screens and mineral scale',
      'Offices, gyms, hospitality venues, and industrial washrooms',
      'Rental vacate properties needing intensive wet-area recovery',
    ],
    checklist: [
      'Glass shower screen mineral scale and soap scum chemical restoration',
      'Shower recess wall tiles, grout lines, soap ledges, and floor waste drains',
      'Bathtub, vanity basin, stone benchtops, and mirror streak-free polishing',
      'Toilet cistern, bowl, hinges, base and surrounding wall sanitisation',
      'Chrome, matte-black, or brushed tapware and shower rose descaling',
      'Exhaust fan cover dust extraction and ceiling mould spot treatment',
      'Multi-cubicle commercial washroom and urinal deep sanitisation',
      'Hospital-grade antibacterial floor scrub and odour neutralisation',
    ],
    iconName: 'Bath',
  },
  {
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    shortTitle: 'Gutter Cleaning',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'EXTERIOR SPECIALIST',
    badgeType: 'standard',
    oneLiner:
      'Clear dry eucalyptus leaves, twigs and silt to protect against winter leaks and bushfire hazards (safe-access single storey).',
    overview:
      'Clogged gutters cause roof overflow, eaves rot, and serious bushfire risk during hot WA summers. Where roof pitch and height permit safe access, our team clears dry debris and downpipe entries to keep water flowing freely.',
    whoItsFor: [
      'Single-storey Perth homes surrounded by gum trees and coastal winds',
      'Landlords and strata managers preparing properties for winter storms',
      'Safe-access single-level commercial units needing seasonal maintenance',
    ],
    checklist: [
      'Pre-work safe ladder access and roofline safety assessment',
      'Hand and scoop removal of dry eucalyptus leaves, twigs and moss',
      'Clearing roof valleys and downpipe top-entry traps for free flow',
      'Bagging and tidy removal of extracted debris from paths and lawns',
      'Before-and-after roof photos supplied upon request for landlords',
      'Ideal preventative maintenance before winter storms or summer bushfire season',
      'Single-storey residential and safe-access commercial buildings',
      'Upfront suitability confirmation before any work commences',
    ],
    iconName: 'CloudRain',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'homes-residential',
    title: 'Homes & Residential Properties',
    shortDesc: 'Houses, townhouses, villas, and apartments from Yanchep to Mandurah.',
    fullDescription:
      'We help Perth families and busy professionals enjoy spotless homes without losing their weekends. Whether it’s regular fortnightly upkeep, a seasonal deep clean, or an end-of-lease bond clean, our police-checked cleaners treat your home with care.',
    complianceHighlights: [
      'National Police-Checked & Uniformed Cleaners',
      '$20M Public Liability Insurance Cover',
      'Pet-Safe & Family-Friendly Products',
      'REIWA-Aligned Tenancy Checklists',
    ],
    recommendedServices: [
      { title: 'Regular House Cleaning', slug: 'regular-house-cleaning' },
      { title: 'Deep Cleaning', slug: 'deep-cleaning' },
      { title: 'End-of-Lease Bond Cleaning', slug: 'end-of-lease-bond-cleaning' },
      { title: 'Kitchen & Oven Add-On', slug: 'kitchen-oven-appliance-cleaning' },
    ],
    iconName: 'Home',
  },
  {
    id: 'offices-corporate',
    title: 'Offices & Corporate Workplaces',
    shortDesc: 'Corporate suites, coworking spaces, retail showrooms, and business parks.',
    fullDescription:
      'Maintain a fresh, professional workplace across Perth CBD, West Perth, Subiaco, and Osborne Park. We clean early mornings or after-hours so your staff walk into sanitised desks, fresh kitchens, and immaculate washrooms.',
    complianceHighlights: [
      'Key-Holder & Alarm Code Security Protocols',
      'Documented Site Task Lists & Comms Log',
      'Zero-Disruption After-Hours Shifts',
      'Regular Supervisor Quality Audits',
    ],
    recommendedServices: [
      { title: 'Office & Commercial Cleaning', slug: 'office-commercial-cleaning' },
      { title: 'Window Cleaning', slug: 'window-cleaning' },
      { title: 'Carpet Steam Cleaning (Partner)', slug: 'carpet-upholstery-cleaning' },
      { title: 'Bathroom Deep Cleaning', slug: 'bathroom-toilet-deep-cleaning' },
    ],
    iconName: 'Building2',
  },
  {
    id: 'construction-builders',
    title: 'Construction, Builders & Renovators',
    shortDesc: 'Residential new builds, commercial shopfits, and post-reno handovers.',
    fullDescription:
      'Plaster dust and grout haze can kill the presentation of a new build. We partner with WA builders and site supervisors to deliver rough, detailed, and practical completion (PC) handover cleans on strict deadlines.',
    complianceHighlights: [
      'White Card Awareness & Full Site PPE',
      'Non-Scratch Sticker, Paint & Silicone Removal',
      'PC Inspection Deadline Commitment',
      'Public Liability Certificates Provided',
    ],
    recommendedServices: [
      { title: 'Builders & Construction Cleaning', slug: 'builders-construction-cleaning' },
      { title: 'Post-Renovation Cleaning', slug: 'post-renovation-cleaning' },
      { title: 'High-Pressure Washing', slug: 'high-pressure-washing' },
      { title: 'Window Cleaning', slug: 'window-cleaning' },
    ],
    iconName: 'HardHat',
  },
  {
    id: 'schools-education',
    title: 'Schools, Colleges & Education',
    shortDesc: 'Classrooms, staff rooms, student amenities, sports halls, and campuses.',
    fullDescription:
      'Schools need serious hygiene to stop bug outbreaks alongside strict student safeguarding. Our school cleaners hold verified Working With Children Checks (WWCC) and follow colour-coded infection control procedures.',
    complianceHighlights: [
      '100% Working With Children Check (WWCC) Cleared',
      'National Police Clearance on File',
      'Colour-Coded Cross-Contamination Prevention',
      'Term-Time Daily & Holiday Deep Cleans',
    ],
    recommendedServices: [
      { title: 'School & Education Cleaning', slug: 'school-education-cleaning' },
      { title: 'Bathroom Deep Cleaning', slug: 'bathroom-toilet-deep-cleaning' },
      { title: 'Tile & Grout Cleaning', slug: 'tile-grout-cleaning' },
      { title: 'High-Pressure Washing', slug: 'high-pressure-washing' },
    ],
    iconName: 'GraduationCap',
  },
  {
    id: 'childcare-daycare',
    title: 'Childcare & Early Learning Centres',
    shortDesc: 'Daycare centres, kindys, playrooms, cot rooms, and toddler bathrooms.',
    fullDescription:
      'Helping Perth childcare directors ace their National Quality Standard (NQS) hygiene audits. Low-tox, child-safe disinfectants across play mats, sleep rooms, and highchairs with signed daily audit sheets.',
    complianceHighlights: [
      'Non-Toxic, Child-Safe Sanitising Chemicals',
      'Signed Daily Hygiene Verification Logs',
      'WWCC & Police-Checked Personnel',
      'Strict Separation of Bathroom vs Food Equipment',
    ],
    recommendedServices: [
      { title: 'Childcare & Day-Care Cleaning', slug: 'childcare-daycare-cleaning' },
      { title: 'Window Cleaning', slug: 'window-cleaning' },
      { title: 'Carpet Steam Cleaning (Partner)', slug: 'carpet-upholstery-cleaning' },
    ],
    iconName: 'Baby',
  },
  {
    id: 'aged-care-ndis',
    title: 'Aged Care & NDIS Participant Homes',
    shortDesc: 'Residential aged-care facilities, retirement living, and NDIS domestic support.',
    fullDescription:
      'Supporting aged-care facilities and NDIS participants across Perth with compassionate, respectful domestic help. Clear itemised invoices sent straight to Plan Managers with zero fuss.',
    complianceHighlights: [
      'Direct Plan Manager Invoicing (accounts@nexora.com)',
      'Consistent, Police-Checked Support Staff',
      'Slip-Safe Floor Protocols & Infection Control',
      'Medical & Healthcare Division Launching Soon',
    ],
    recommendedServices: [
      { title: 'Aged-Care Cleaning', slug: 'aged-care-cleaning' },
      { title: 'NDIS-Related Domestic Cleaning', slug: 'ndis-domestic-cleaning' },
      { title: 'Medical & Healthcare (Coming Soon)', slug: 'medical-healthcare-cleaning' },
    ],
    iconName: 'HeartHandshake',
  },
  {
    id: 'events-venues',
    title: 'Events, Venues & Hospitality',
    shortDesc: 'Function centres, pop-up activations, private parties, and community halls.',
    fullDescription:
      'From pre-event detailing before the curtain goes up to overnight rubbish bagging and floor degreasing after the party ends. We make sure you get your venue deposit back.',
    complianceHighlights: [
      'Late-Night & Early-Morning Weekend Crews',
      'Fast Bump-In & Bump-Out Turnarounds',
      'Complete Waste Bagging & Floor Scrubbing',
      'Pre + Post Event Package Savings',
    ],
    recommendedServices: [
      { title: 'Pre-Event Cleaning', slug: 'pre-event-cleaning' },
      { title: 'Post-Event Cleaning', slug: 'post-event-cleaning' },
      { title: 'Bathroom Deep Cleaning', slug: 'bathroom-toilet-deep-cleaning' },
    ],
    iconName: 'PartyPopper',
  },
  {
    id: 'property-managers-strata',
    title: 'Property Managers, Strata & Industrial',
    shortDesc: 'Real estate agencies, strata councils, Airbnb operators, and logistics depots.',
    fullDescription:
      'One reliable contact for WA property managers. We handle end-of-lease vacates, strata common corridors, Airbnb changeovers, and light industrial workshop amenities.',
    complianceHighlights: [
      'Fast Written Quotes in Minutes (+ 5% Price Beat)',
      'Before & After Photo Proof for Agents',
      'Consolidated Monthly Account Billing',
      'One-Stop Bond + Oven + Partner Carpet Packages',
    ],
    recommendedServices: [
      { title: 'End-of-Lease Bond Cleaning', slug: 'end-of-lease-bond-cleaning' },
      { title: 'Strata Common-Area Cleaning', slug: 'strata-common-area-cleaning' },
      { title: 'Airbnb & Short-Stay Cleaning', slug: 'airbnb-short-stay-cleaning' },
      { title: 'Industrial & Warehouse Cleaning', slug: 'industrial-warehouse-cleaning' },
    ],
    iconName: 'KeyRound',
  },
];

export const PERTH_REGIONS: PerthRegionItem[] = [
  {
    id: 'cbd-inner',
    regionName: 'Perth CBD & Inner Suburbs',
    postcodeRange: '6000 – 6018',
    description:
      'Fast response across inner apartments, corporate suites, character cottages, and café strips.',
    suburbs: [
      'Perth CBD',
      'West Perth',
      'East Perth',
      'Northbridge',
      'Subiaco',
      'Leederville',
      'West Leederville',
      'Mount Lawley',
      'Highgate',
      'North Perth',
      'Victoria Park',
      'East Victoria Park',
      'South Perth',
      'Como',
      'Kensington',
      'Burswood',
      'Maylands',
      'Bayswater',
      'Inglewood',
      'Menora',
    ],
  },
  {
    id: 'northern-suburbs',
    regionName: 'Northern Suburbs & Joondalup Corridor',
    postcodeRange: '6020 – 6065',
    description:
      'Full coverage up the coastal highway and Mitchell Freeway corridor from Scarborough to Yanchep.',
    suburbs: [
      'Joondalup',
      'Hillarys',
      'Scarborough',
      'Karrinyup',
      'Innaloo',
      'Osborne Park',
      'Balcatta',
      'Stirling',
      'Morley',
      'Dianella',
      'Mirrabooka',
      'Malaga',
      'Greenwood',
      'Kingsley',
      'Woodvale',
      'Padbury',
      'Sorrento',
      'Mullaloo',
      'Ocean Reef',
      'Currambine',
      'Iluka',
      'Mindarie',
      'Clarkson',
      'Butler',
      'Alkimos',
      'Yanchep',
      'Wanneroo',
      'Tapping',
      'Landsdale',
      'Darch',
    ],
  },
  {
    id: 'western-coastal',
    regionName: 'Western Suburbs & Golden Triangle',
    postcodeRange: '6008 – 6019',
    description:
      'Prestige residential, executive rentals, and boutique commercial cleaning across Perth’s western coastline.',
    suburbs: [
      'Cottesloe',
      'Nedlands',
      'Claremont',
      'Dalkeith',
      'Peppermint Grove',
      'Mosman Park',
      'Floreat',
      'City Beach',
      'Wembley',
      'Wembley Downs',
      'Churchlands',
      'Jolimont',
      'Shenton Park',
      'Swanbourne',
      'Mount Claremont',
      'North Fremantle',
    ],
  },
  {
    id: 'southern-fremantle',
    regionName: 'Southern Suburbs & Greater Fremantle',
    postcodeRange: '6147 – 6166',
    description:
      'Servicing riverside homes, Fremantle heritage properties, Cockburn estates, and Canning Vale industrial hubs.',
    suburbs: [
      'Fremantle',
      'East Fremantle',
      'Melville',
      'Applecross',
      'Ardross',
      'Booragoon',
      'Myaree',
      'Bull Creek',
      'Willetton',
      'Canning Vale',
      'Cannington',
      'Bentley',
      'Waterford',
      'Riverton',
      'Rossmoyne',
      'Murdoch',
      'Cockburn Central',
      'Success',
      'Aubin Grove',
      'Coogee',
      'Hamilton Hill',
      'Spearwood',
      'Thornlie',
      'Gosnells',
      'Armadale',
      'Byford',
      'Harrisdale',
      'Piara Waters',
    ],
  },
  {
    id: 'eastern-hills',
    regionName: 'Eastern Suburbs, Swan Valley & Perth Hills',
    postcodeRange: '6054 – 6076',
    description:
      'Covering residential communities, Ellenbrook/Brabham estates, airport freight hubs, and scenic Hills properties.',
    suburbs: [
      'Midland',
      'Guildford',
      'Bassendean',
      'Belmont',
      'Rivervale',
      'Cloverdale',
      'Redcliffe',
      'Ascot',
      'Kewdale',
      'Welshpool',
      'Forrestfield',
      'High Wycombe',
      'Kalamunda',
      'Lesmurdie',
      'Mundaring',
      'Ellenbrook',
      'Aveley',
      'Brabham',
      'Dayton',
      'Caversham',
      'Beechboro',
    ],
  },
  {
    id: 'rockingham-peel',
    regionName: 'Rockingham, Kwinana & Peel (Mandurah)',
    postcodeRange: '6167 – 6210',
    description:
      'Reliable coastal residential, end-of-lease, and commercial cleaning along the southern coastal strip.',
    suburbs: [
      'Rockingham',
      'Baldivis',
      'Safety Bay',
      'Waikiki',
      'Warnbro',
      'Secret Harbour',
      'Port Kennedy',
      'Kwinana',
      'Wellard',
      'Bertram',
      'Mandurah',
      'Halls Head',
      'Falcon',
      'Dawesville',
      'Erskine',
      'Greenfields',
      'Lakelands',
    ],
  },
];

export const TRUST_CREDENTIALS = [
  {
    title: 'WA-Born & Bred',
    description:
      'Local Perth team that understands red dust, coastal salt spray, bore water stains, and WA tenancy standards.',
    iconName: 'MapPin',
  },
  {
    title: 'Fully Insured',
    description:
      '$20M Public Liability Insurance cover protecting your home, commercial premise, or construction site.',
    iconName: 'Shield',
  },
  {
    title: 'Police-Cleared Staff',
    description:
      'Every cleaner holds a verified National Police Clearance. Honest, respectful, and trusted on your property.',
    iconName: 'UserCheck',
  },
  {
    title: 'WWCC Worker Screening',
    description:
      'Valid Working With Children Checks for all education, childcare, community, and youth-facing facilities.',
    iconName: 'Award',
  },
  {
    title: 'Flexible Scheduling',
    description:
      'Early mornings, evenings, weekends, or tight vacate turnarounds. We work around your routine, no dramas.',
    iconName: 'Clock',
  },
];

export const WHY_CHOOSE_NEXORA = [
  {
    title: 'Documented Task Checklists',
    description:
      'Every cleaner follows a written room-by-room checklist tailored to your site. No cutting corners, no skipped rooms.',
    iconName: 'ClipboardCheck',
  },
  {
    title: 'Quality Inspections & Follow-Up',
    description:
      'Supervisor audits and prompt post-clean check-ins ensure every surface is right as rain before we pack up.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Upfront Pricing + 5% Price Beat',
    description:
      '100% free quote in 3 minutes with price locked in before work starts. Found a cheaper written quote? We beat it by 5%.',
    iconName: 'BadgeDollarSign',
  },
  {
    title: 'Fast Local Communication',
    description:
      'Speak directly with a real local coordinator in Perth via phone, email, or WhatsApp. Fast answers, zero runaround.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Verified Worker Screening',
    description:
      'National police checks, WWCC credentials, and site-safe PPE protocols matched to your specific environment.',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Consistent 5-Star Standard',
    description:
      'Whether a one-off bond clean or ongoing corporate maintenance, you get the same thorough precision every single visit.',
    iconName: 'Sparkles',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Tell us the gig.',
    description:
      'Fill out our quick 60-second mobile form, shoot us a WhatsApp, or give our Perth team a quick buzz with your suburb.',
  },
  {
    stepNumber: '02',
    title: 'Lock in your upfront quote.',
    description:
      'We send a 100% free, fixed quote in minutes. Price confirmed before work begins — backed by our 5% Price Beat Guarantee.',
  },
  {
    stepNumber: '03',
    title: 'Pick a date and time.',
    description:
      'Select a flexible window or lock in a specific clock time that suits your family, tenancy handover, or business hours.',
  },
  {
    stepNumber: '04',
    title: 'Job sorted & verified.',
    description:
      'Our screened cleaners arrive equipped, work through the documented checklist, and follow up to guarantee complete satisfaction.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Sarah & Dan M.',
    suburb: 'Subiaco',
    service: 'End-of-Lease Bond Cleaning',
    quote:
      'Got our full $2,800 bond back with zero arguments from the agent! The oven looked brand new and the shower glass bore stains were completely gone. Legend effort.',
    rating: 5,
  },
  {
    name: 'Marcus T.',
    suburb: 'Osborne Park',
    service: 'Office & Commercial Cleaning',
    quote:
      'Switched our office cleaning to Nexora 4 months ago. First company in Perth that actually cleans the microwave and restocks bins without being asked twice.',
    rating: 5,
  },
  {
    name: 'Chloe B.',
    suburb: 'Scarborough',
    service: 'Airbnb Turnover Cleaning',
    quote:
      'They handle guest turnovers between 10am and 2pm like clockwork. Cleanliness reviews have been solid 5-stars since day one. Makes hosting stress-free.',
    rating: 5,
  },
  {
    name: 'Liam & Priya K.',
    suburb: 'Joondalup',
    service: 'Regular House Cleaning',
    quote:
      'Coming home on a Friday afternoon to fresh floors and spotless bathrooms is the best feeling. Beats spending Saturday morning scrubbing toilets in the 38-degree heat!',
    rating: 5,
  },
];

export const HOME_FAQS: FaqItem[] = [
  {
    question: 'How fast can I get a quote?',
    answer:
      'Faster than the Fremantle Doctor rolls in! During business hours, we review your suburb and details and send your 100% free quote within a few minutes. All pricing is locked in upfront before work begins.',
  },
  {
    question: 'How does the 5% Price Beat Guarantee work?',
    answer:
      'If you have a current written quote from another registered, insured WA cleaning business for the same scope of work, simply mention it when you enquire. We will beat their price by 5% — tell \'em they\'re dreamin\'!',
  },
  {
    question: 'What fields are required on the quote form?',
    answer:
      'Only your Name, Phone Number, and Suburb/Postcode are required so we know where and how to reach you. Everything else (service type, preferred date, time mode, property size, and notes) is completely optional.',
  },
  {
    question: 'Are your cleaners insured and police-checked?',
    answer:
      '100%. Nexora Cleaning Co holds comprehensive $20M Public Liability Insurance, and all staff carry verified National Police Clearances. Cleaners assigned to schools and childcare centres also hold valid Working With Children Checks (WWCC).',
  },
  {
    question: 'Can I add Oven Cleaning or Carpet Steam Cleaning to my Bond Clean?',
    answer:
      'Too easy! Oven & Appliance Cleaning is available as our signature Add-On, and Carpet Steam Cleaning is coordinated seamlessly via our trusted Perth specialist partner. One booking, one point of contact, and official receipts for your property manager.',
  },
  {
    question: 'Do you bring your own equipment and cleaning supplies?',
    answer:
      'Yes, our teams arrive with commercial-grade vacuums, microfibre systems, and heavy-duty, surface-safe products. If your home or clinic requires specific eco or low-scent products, just let us know in the notes.',
  },
  {
    question: 'Which areas of Western Australia do you cover?',
    answer:
      'We service all Greater Perth suburbs: from Yanchep and Joondalup down to Fremantle, Rockingham, and Mandurah, and out east to Midland, Ellenbrook, and the Perth Hills.',
  },
  {
    question: 'What if my property manager spots something on the final inspection?',
    answer:
      'Our bond cleans follow strict REIWA-aligned checklists. In the rare event your agent flags any checklist item, let us know within 72 hours and we will return to rectify it free of charge.',
  },
];

export function getServiceBySlug(slug: string): CleaningServiceItem | undefined {
  return CLEANING_SERVICES.find((service) => service.slug === slug);
}

export function getServicesByCategory(categoryId: ServiceCategoryId): CleaningServiceItem[] {
  return CLEANING_SERVICES.filter((service) => service.categoryId === categoryId);
}
