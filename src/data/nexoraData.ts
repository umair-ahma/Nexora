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

export const BRAND_INFO = {
  companyName: 'Nexora Cleaning Co',
  shortName: 'Nexora Cleaning',
  domain: 'nexoraCleaning.com.au',
  siteUrl: 'https://www.nexoracleaning.com.au',
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
  priceBeatText: 'We Will Beat All Comparable Quotes by 5%',
  fastQuoteText: '100% Free Quote Within a Few Minutes',
  quoteSubtext: 'Free, no-obligation quote — price confirmed before work begins.',
  confirmationMessage:
    "Thanks for contacting Nexora Cleaning. We've received your request and will contact you to confirm the details.",
};

export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  {
    id: 'residential',
    name: 'Residential Cleaning',
    shortName: 'Residential',
    tagline: 'Spotless Perth homes, bond-ready vacate cleans & short-stay turnovers.',
    description:
      'From regular weekly or fortnightly home upkeep to REIWA-aligned end-of-lease bond cleaning, deep seasonal refreshes, and Airbnb changeovers across all Perth suburbs.',
    iconName: 'Home',
  },
  {
    id: 'commercial',
    name: 'Commercial & Specialist Facilities',
    shortName: 'Commercial & Specialist',
    tagline: 'Screened, compliant cleaning for workplaces, schools, childcare & care sectors.',
    description:
      'Tailored commercial cleaning schedules backed by National Police Clearances, Working With Children Checks (WWCC), colour-coded hygiene systems, and documented checklists.',
    iconName: 'Building2',
  },
  {
    id: 'builders-events',
    name: 'Builders, Events & Projects',
    shortName: 'Builders & Events',
    tagline: 'Construction handovers, renovation dust removal, strata & rapid event resets.',
    description:
      'Detail-focused project cleaning for WA builders, renovators, strata managers, industrial facilities, and event organisers operating on strict handover deadlines.',
    iconName: 'HardHat',
  },
  {
    id: 'specialist-exterior',
    name: 'Specialist & Exterior Cleaning',
    shortName: 'Specialist & Exterior',
    tagline: 'Pressure washing, windows, tile & grout, partner carpet steam & oven add-ons.',
    description:
      'Targeted restoration for exterior hard surfaces, streak-free windows, deep bathroom descaling, kitchen/oven add-ons, and trusted-partner carpet & upholstery extraction.',
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
      'Weekly, fortnightly, monthly and one-off cleaning tailored to keep your Perth home fresh, hygienic and effortlessly tidy.',
    overview:
      'Designed for busy Perth professionals, families, and homeowners who want reliable, consistent domestic upkeep without the hassle. You receive a dedicated, police-checked cleaner following a documented room-by-room checklist covering your bedrooms, bathrooms, kitchen, and living areas.',
    whoItsFor: [
      'Busy families and working professionals across Perth',
      'Homeowners wanting weekly, fortnightly, or monthly upkeep',
      'Anyone seeking a dependable one-off domestic refresh',
    ],
    checklist: [
      'Dusting and wiping of all accessible surfaces, furniture, and skirting boards',
      'Kitchen benchtops, splashbacks, sink scrubbing, and external appliance wipe-down',
      'Bathroom sanitisation: showers, glass screens, vanities, mirrors, and toilets',
      'Thorough vacuuming of all carpets, rugs, stairs, and soft furnishings',
      'Mopping and sanitising of hard floors (timber, tiles, vinyl, and hybrid flooring)',
      'Bedroom tidying, mirror polishing, and general surface presentation',
      'Emptying internal bins and replacing liners',
      'Optional Add-On Available: Deep Kitchen, Oven & Appliance Cleaning',
    ],
    addOnNote:
      'Pair your regular or one-off house clean with our Kitchen, Oven & Appliance Add-On for a complete kitchen reset.',
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
      'A more detailed clean for built-up dirt, soap scum, grease and hard-to-reach areas throughout your home.',
    overview:
      'Ideal when your property needs an intensive top-to-bottom reset—before hosting guests, after a busy quarter, or prior to commencing a regular fortnightly schedule. Our team targets built-up grime, neglected corners, and high-touch zones that standard weekly cleans do not cover.',
    whoItsFor: [
      'Homes needing a thorough reset before starting regular cleaning',
      'Properties with built-up bathroom scale, kitchen grease, or dust',
      'Pre-sale property presentation and special family occasions',
    ],
    checklist: [
      'Intensive descaling of shower screens, tapware, tiles, and bathroom grout lines',
      'Detailed scrubbing of skirting boards, door frames, architraves, and light switches',
      'High-reach dusting of ceiling fans, air-conditioning vents, and light fittings',
      'Deep kitchen degreasing of rangehood exteriors, stove tops, splashbacks, and cabinet fronts',
      'Window sills, sliding door tracks, and internal glass polishing',
      'Under-furniture and edge vacuuming plus multi-stage hard floor sanitising',
      'Full disinfection of toilets, laundry troughs, and wet areas',
      'Optional Add-On Available: Inside Oven, Rangehood Filter & Appliance Deep Clean',
    ],
    iconName: 'Sparkles',
    featuredOnHome: true,
  },
  {
    slug: 'end-of-lease-bond-cleaning',
    title: 'End-of-Lease / Bond / Vacate Cleaning',
    shortTitle: 'End-of-Lease & Bond Cleaning',
    categoryId: 'residential',
    categoryName: 'Residential Cleaning',
    badgeText: 'BOND BACK READY',
    badgeType: 'popular',
    oneLiner:
      'Move-out cleaning for tenants, landlords and property managers designed to meet strict Western Australian final inspection standards.',
    overview:
      'Moving house is stressful enough without risking your rental bond. Our Perth vacate cleaning team follows an agency-aligned final inspection checklist so your property is handed back immaculate. Bundle our Kitchen/Oven Add-On and Trusted Partner Carpet Steam Cleaning for a seamless single-invoice handover.',
    whoItsFor: [
      'Tenants vacating a rental property anywhere in Perth Metro',
      'Property managers and landlords preparing a property for new tenants',
      'Home sellers handing over a property at settlement',
    ],
    checklist: [
      'Inside and outside of all kitchen cupboards, drawers, pantries, and benchtops',
      'Full bathroom & ensuite restoration: showers, baths, toilets, vanities, mirrors, and exhaust fans',
      'Built-in wardrobes, shelving, mirror doors, and sliding tracks cleaned inside and out',
      'Skirting boards, doors, handles, power points, and switches detailed throughout',
      'Cobweb removal, ceiling fan dusting, air vents, and light fittings cleaned',
      'Internal windows, glass sliding doors, sills, and tracks thoroughly detailed',
      'Full-property vacuuming and machine/hand mopping of all hard floors',
      'Easy bundling with Kitchen/Oven Add-On & Trusted Partner Carpet Steam Cleaning (with official receipt)',
    ],
    addOnNote:
      'Most WA lease agreements require professional oven cleaning and carpet steam cleaning—tick both in your quote request and we will coordinate the entire package.',
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
      'Prepare and sanitise a home from top to bottom before moving your family and furniture in.',
    overview:
      'Whether you have just settled on a newly purchased Perth home or are moving into a rental property that has sat vacant, our Move-In Clean ensures every cupboard, drawer, bathroom, and floor is hygienically sanitised while the house is still empty.',
    whoItsFor: [
      'New homeowners settling on a house or apartment in Perth',
      'Families wanting hospital-grade sanitisation before unpacking boxes',
      'Landlords refreshing a vacant property before tenant move-in day',
    ],
    checklist: [
      'Sanitising inside all kitchen cabinets, drawers, and pantry shelves prior to unpacking',
      'Hospital-grade disinfection of all toilets, showers, bathtubs, and bathroom vanities',
      'Wiping inside wardrobes, linen cupboards, and laundry cabinetry',
      'Dusting ceiling fans, blinds, window ledges, and air-conditioning vents',
      'Spot-cleaning walls, doors, light switches, and door handles',
      'Internal glass and mirror polishing for streak-free natural light',
      'Deep vacuuming and antibacterial mopping of all floors',
      'Optional Oven & Appliance Deep Clean Add-On for complete kitchen hygiene',
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
      'Seasonal, whole-home refresh to clear out dust, allergens and build-up across every room.',
    overview:
      'Give your home a bright seasonal uplift. Our Spring Cleaning package revitalises living spaces, bedrooms, wet areas, and indoor-outdoor entertaining zones—removing accumulated dust, cobwebs, and winter grime so your home feels brand new.',
    whoItsFor: [
      'Homeowners wanting an annual or seasonal whole-house refresh',
      'Allergy-conscious households removing dust mites, pollen, and pet dander',
      'Families preparing for summer entertaining and festive gatherings',
    ],
    checklist: [
      'Whole-home high and low dusting including fans, vents, cornices, and skirting boards',
      'Window, sill, flyscreen brushing, and sliding door track detailing',
      'Kitchen cabinet exteriors, splashbacks, benchtops, and sink polishing',
      'Deep bathroom refresh removing soap residue, water marks, and mould spots',
      'Cleaning behind and beneath movable furniture and appliances',
      'Polishing mirrors, glass tables, and chrome fixtures throughout the house',
      'Thorough allergen-reducing vacuuming and fragrant hard floor mopping',
      'Customisable scope—bundle oven cleaning, pressure washing, or window detailing',
    ],
    iconName: 'Sun',
  },
  {
    slug: 'airbnb-short-stay-cleaning',
    title: 'Airbnb & Short-Stay Turnover Cleaning',
    shortTitle: 'Airbnb & Short-Stay Cleaning',
    categoryId: 'residential',
    categoryName: 'Residential Cleaning',
    badgeText: 'HOST & PROPERTY PARTNER',
    badgeType: 'standard',
    oneLiner:
      'Guest changeovers, presentation checks and agreed linen or restocking tasks for 5-star guest reviews.',
    overview:
      'In Perth’s competitive short-stay market, spotless presentation drives your superhost ratings. We partner with Airbnb hosts, Stayz owners, and short-term property managers to deliver punctual guest changeovers strictly within check-out and check-in windows.',
    whoItsFor: [
      'Airbnb and Stayz hosts across Perth CBD, Scarborough, Fremantle, and metro suburbs',
      'Short-stay property management companies',
      'Serviced apartment operators and executive rental owners',
    ],
    checklist: [
      'Strict check-out to check-in turnaround scheduling across Perth metro suburbs',
      'Stripping beds and remaking with fresh linen (per agreed host arrangement)',
      'Hotel-standard bathroom sanitisation, towel presentation, and amenity restocking',
      'Kitchen reset: dishes, fridge check, microwave, coffee machine, and bench sanitisation',
      'Living area styling, cushion plumping, remote sanitising, and glass polishing',
      'Rubbish removal, bin sanitising, and fresh liner replacement',
      'Visual damage, lost-property, and consumable low-stock photo reporting to host',
      'Thorough vacuuming and mopping of all guest areas and balconies',
    ],
    iconName: 'CalendarCheck',
  },

  // ============================================================================
  // CATEGORY 2: COMMERCIAL & SPECIALIST FACILITIES (6 Services)
  // ============================================================================
  {
    slug: 'office-commercial-cleaning',
    title: 'Office & Commercial Cleaning',
    shortTitle: 'Office & Commercial Cleaning',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'COMMERCIAL CORE',
    badgeType: 'popular',
    oneLiner:
      'Workplaces, corporate suites, retail premises and common areas maintained to a consistent professional standard.',
    overview:
      'A spotless workplace boosts staff productivity and leaves a strong impression on visiting clients. Our police-checked commercial team works during or after business hours using documented site checklists and colour-coded hygiene systems.',
    whoItsFor: [
      'Corporate offices, coworking hubs, and professional suites across Perth',
      'Retail showrooms, banks, studios, and commercial premises',
      'Business owners tired of inconsistent cleaners who miss bins and washrooms',
    ],
    checklist: [
      'Workstations, desks, meeting tables, reception counters, and touchpoint disinfection',
      'Staff kitchens, tea rooms, sinks, microwaves, fridges, and dishwasher loading/unloading',
      'Commercial washroom sanitisation, toilet cleaning, and consumable restocking',
      'Glass entry doors, partition glass, and reception mirror polishing',
      'Commercial vacuuming of carpeted offices and machine/damp mopping of hard floors',
      'Daily waste, recycling, and confidential bin emptying with liner replacement',
      'After-hours or early-morning scheduling with secure alarm/key-holder protocols',
      'Dedicated site communication logbook and regular quality inspections',
    ],
    iconName: 'Building2',
    featuredOnHome: true,
  },
  {
    slug: 'school-education-cleaning',
    title: 'School & Education Cleaning',
    shortTitle: 'School & Education Cleaning',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'WWCC SCREENED',
    badgeType: 'standard',
    oneLiner:
      'Safe, reliable cleaning for classrooms, staff areas, toilets and shared educational spaces.',
    overview:
      'Educational environments demand strict student safeguarding and infection control. All Nexora personnel assigned to schools, colleges, and training campuses hold current National Police Clearances and Working With Children Checks (WWCC).',
    whoItsFor: [
      'Independent, Catholic, and public primary and secondary schools in WA',
      'TAFE, registered training organisations (RTOs), and tutoring colleges',
      'University facilities and student accommodation buildings',
    ],
    checklist: [
      'Classroom desks, chairs, whiteboards, sinks, and high-touch surface disinfection',
      'Student and staff toilet blocks, change rooms, and drinking fountain sanitisation',
      'Libraries, administration offices, staff rooms, and sick-bay hygiene cleaning',
      'School halls, gymnasium floors, corridors, and stairwell maintenance',
      'Safe, non-hazardous, colour-coded microfibre cleaning systems to prevent cross-contamination',
      'Term-time daily cleaning plus comprehensive school holiday deep cleaning programmes',
      'Rubbish collection and playground/quadrangle bin management',
      'Full WWCC, Police Check, and WHS documentation supplied to school business managers',
    ],
    iconName: 'GraduationCap',
  },
  {
    slug: 'childcare-daycare-cleaning',
    title: 'Childcare & Day-Care Cleaning',
    shortTitle: 'Childcare & Day-Care Cleaning',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'CHILD-SAFE HYGIENE',
    badgeType: 'popular',
    oneLiner:
      'Age-appropriate cleaning and documented hygiene procedures tailored for early learning and day-care centres.',
    overview:
      'Young children explore the world hands-first. Our childcare cleaning programmes focus on low-tox, child-safe sanitisation of play mats, nappy change rooms, sleep areas, and food preparation spaces in line with National Quality Standard (NQS) expectations.',
    whoItsFor: [
      'Early learning centres, long day-care providers, and kindergartens',
      'Out-of-school-hours care (OSHC) facilities and family day-care hubs',
      'Centre directors seeking documented daily hygiene sign-off logs',
    ],
    checklist: [
      'Child-safe, non-toxic sanitisation of play tables, low shelving, and activity zones',
      'Nappy change stations, toddler toilets, hand basins, and wet area disinfection',
      'Cot rooms, sleep mats, and quiet area allergen-free vacuuming and wiping',
      'Commercial bottle-prep and centre kitchen hygiene cleaning',
      'Low-level internal glass, finger-mark removal, and entry door sanitisation',
      'Strict colour-coded cleaning cloths and mops isolating bathroom vs. play/food zones',
      'Signed daily cleaning & hygiene verification checklists for centre directors',
      '100% WWCC and Police-Checked staff trained in infection control protocols',
    ],
    iconName: 'Baby',
    featuredOnHome: true,
  },
  {
    slug: 'aged-care-cleaning',
    title: 'Aged-Care Cleaning',
    shortTitle: 'Aged-Care Cleaning',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'HIGH-CARE STANDARDS',
    badgeType: 'standard',
    oneLiner:
      'Cleaning plans suited to the facility’s operational needs, resident comfort and strict hygiene procedures.',
    overview:
      'We understand that aged-care facilities are residents’ homes as well as clinical support environments. Our screened, compassionate cleaners operate quietly and respectfully while maintaining rigorous infection-control and slip-safety standards.',
    whoItsFor: [
      'Residential aged-care facilities and retirement villages across WA',
      'Independent living community centres and respite care homes',
      'Facility managers requiring supplemental or contracted domestic staff',
    ],
    checklist: [
      'Resident rooms, ensuites, handrails, call buttons, and mobility-aid touchpoint disinfection',
      'Communal lounges, dining rooms, activity centres, and reception presentation',
      'Slip-resistant floor cleaning procedures with clear safety signage and rapid-dry methods',
      'Strict colour-coded infection prevention and cross-contamination controls',
      'Quiet, respectful conduct around residents, nursing staff, and visiting families',
      'Assisted living common corridors, lifts, and nursing station cleaning',
      'Full compliance documentation, Police Checks, and screening adherence',
      'Tailored daily or supplemental support schedules for WA care providers',
    ],
    iconName: 'HeartHandshake',
  },
  {
    slug: 'medical-healthcare-cleaning',
    title: 'Medical & Healthcare Cleaning',
    shortTitle: 'Medical & Healthcare Cleaning',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'COMING SOON',
    badgeType: 'coming-soon',
    oneLiner:
      'Medical and healthcare cleaning — Coming Soon. Register your interest for GP clinics, dental practices and allied health.',
    overview:
      'COMING SOON: Nexora Cleaning Co is finalising our dedicated clinical and allied healthcare cleaning division for GP clinics, physiotherapy studios, dental practices, and medical centres across Perth. Submit an enquiry below to join our priority launch list or discuss upcoming facility requirements.',
    whoItsFor: [
      'GP clinics, family medical centres, and specialist consulting rooms',
      'Dental clinics, orthodontists, and allied health practices (physio, podiatry, chiro)',
      'Practice managers planning upcoming cleaning contract transitions',
    ],
    checklist: [
      'Consultation rooms, treatment beds (non-clinical surfaces), and waiting room sanitisation',
      'High-touch point disinfection (door handles, reception counters, EFTPOS terminals, armrests)',
      'Patient and staff washroom hospital-grade disinfection',
      'Colour-coded clinical zoning and documented infection control checklists',
      'Floor scrubbing and sanitisation of vinyl, tiled, and sealed clinical flooring',
      'SDS (Safety Data Sheet) registers and site compliance logs',
      'After-hours servicing to ensure zero disruption to patient appointments',
      'Priority launch registration open now via cleaning@nexora.com',
    ],
    addOnNote:
      'Note: Medical & Healthcare Cleaning is launching soon. Leave your clinic details in the form below and our management team will contact you with launch availability.',
    iconName: 'Stethoscope',
  },
  {
    slug: 'ndis-domestic-cleaning',
    title: 'NDIS-Related Domestic Cleaning',
    shortTitle: 'NDIS Domestic Cleaning',
    categoryId: 'commercial',
    categoryName: 'Commercial & Specialist Facilities',
    badgeText: 'NDIS PARTICIPANT SUPPORT',
    badgeType: 'standard',
    oneLiner:
      'Supportive, reliable domestic cleaning tailored for NDIS participants (self-managed and plan-managed across Perth).',
    overview:
      'Everyone deserves a clean, safe, and comfortable home environment. We work closely with NDIS participants, family carers, support coordinators, and plan managers across Western Australia to provide dependable domestic assistance matched to your personal routine and preferences.',
    whoItsFor: [
      'Self-managed and Plan-managed NDIS participants across Perth Metro',
      'Support Coordinators seeking a responsive, reliable cleaning provider',
      'Participants requiring consistent cleaner allocation and clear itemised billing',
    ],
    checklist: [
      'Flexible routine cleaning of bedrooms, living areas, kitchens, and accessible bathrooms',
      'Consistent cleaner allocation so participants see a familiar, trusted face',
      'Assistance with bed linen changes, laundry folding, and dishwashing upon request',
      'Clear, itemised invoicing sent directly to participants or Plan Managers (accounts@nexora.com)',
      'Police-checked, empathetic team members who respect your routine and home',
      'Low-scent or sensitive-skin cleaning product options available on request',
      'Easy, straightforward communication for Support Coordinators and family members',
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
    shortTitle: 'Builders & Construction Cleaning',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'SITE & HANDOVER READY',
    badgeType: 'popular',
    oneLiner:
      'Rough, detailed and final handover cleans for new builds, commercial fit-outs or renovations across WA.',
    overview:
      'We partner with Perth residential builders, commercial site supervisors, shopfitters, and developers to transition construction sites from dusty work zones to defect-free client handovers on time and on budget.',
    whoItsFor: [
      'Residential home builders and project home supervisors across WA',
      'Commercial shopfitters, office fit-out contractors, and developers',
      'Owner-builders preparing for practical completion (PC) and final inspection',
    ],
    checklist: [
      'Stage 1 Rough Clean: Removal of loose trade debris, packaging, plaster dust, and initial floor sweep/vacuum',
      'Stage 2 Detailed Clean: Full detailing of cabinetry inside/out, joinery, bathrooms, tiling, and fixtures',
      'Stage 3 Final Handover Sparkle Clean: Final polish of glass, chrome, mirrors, and floors prior to walkthrough',
      'Safe removal of manufacturer stickers, protective tape, silicone smudges, and paint flecks',
      'Window, frame, sill, and sliding door track construction dust extraction',
      'Garage, alfresco, porch, and driveway sweep/pressure wash-down options',
      'Construction-ready PPE, White Card awareness, and full Public Liability Insurance',
      'Strict adherence to practical completion (PC) handover schedules',
    ],
    iconName: 'HardHat',
    featuredOnHome: true,
  },
  {
    slug: 'post-renovation-cleaning',
    title: 'Post-Renovation Cleaning',
    shortTitle: 'Post-Renovation Cleaning',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'DUST & RESIDUE REMOVAL',
    badgeType: 'standard',
    oneLiner:
      'Remove fine renovation dust, grout haze and trade residue safely using suitable methods for new surfaces.',
    overview:
      'Renovating a kitchen, bathroom, or home extension leaves ultra-fine plaster and sanding dust that settles into every crevice. Our crew uses multi-stage vacuuming and surface-safe techniques to protect brand-new stone benchtops, cabinetry, tapware, and flooring.',
    whoItsFor: [
      'Homeowners completing kitchen, bathroom, or whole-home renovations',
      'Interior designers and renovation builders handing back a lived-in home',
      'Commercial premises reopening after a refurbishment',
    ],
    checklist: [
      'Multi-pass fine dust extraction from walls, ceilings, cornices, and ledges',
      'Inside and outside cleaning of newly installed cabinetry, drawers, and hardware',
      'Careful removal of tile grout haze, adhesive marks, and trade footprints',
      'Air-conditioning vents, ceiling fans, light fittings, and power points detailed',
      'Non-scratch detailing of newly installed bathroom tapware, frameless glass, and fixtures',
      'Window tracks, frames, and glass cleaned free of construction dust',
      'Multi-stage vacuuming and damp microfibre mopping of new timber, tile, or hybrid floors',
      'Ready-to-live-in finish across both renovated and adjacent rooms',
    ],
    iconName: 'Hammer',
  },
  {
    slug: 'pre-event-cleaning',
    title: 'Pre-Event Cleaning',
    shortTitle: 'Pre-Event Cleaning',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'VENUE PREPARATION',
    badgeType: 'standard',
    oneLiner:
      'Prepare and detail a venue to immaculate presentation standards before your event begins.',
    overview:
      'Hosting a corporate launch, wedding reception, community festival, or private function in Perth? We ensure your venue, entryways, VIP lounges, and restrooms look spotless before your guests arrive.',
    whoItsFor: [
      'Event planners, wedding coordinators, and corporate marketing teams',
      'Function centres, community halls, and private estate hosts',
      'Pop-up retail activations and exhibition organisers',
    ],
    checklist: [
      'Main hall, stage, foyer, and VIP lounge floor vacuuming and polishing',
      'Restroom deep sanitisation, mirror polishing, and soap/paper towel stocking',
      'Bar areas, catering prep spaces, and servery bench sanitisation',
      'Entry glass doors, balustrades, and outdoor patio presentation sweep',
      'Table, chair, and fixture wipe-down prior to event styling',
      'Empty bins fitted with fresh heavy-duty liners across the venue',
      'Flexible bump-in timing coordinated with your event manager',
      'Optional bundle with Post-Event Reset Cleaning for seamless end-to-end coverage',
    ],
    iconName: 'Calendar',
  },
  {
    slug: 'post-event-cleaning',
    title: 'Post-Event Cleaning',
    shortTitle: 'Post-Event Cleaning',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'FAST VENUE RESET',
    badgeType: 'standard',
    oneLiner:
      'Rapid venue reset, rubbish collection, washroom sanitisation and floor cleaning after any event.',
    overview:
      'When the event wraps up, our crew steps in. Available late at night or early morning across Perth to clear event litter, sanitise washrooms, and return hired venues, corporate offices, or private residences to pristine condition before bump-out deadlines.',
    whoItsFor: [
      'Venue hirers needing their security/cleaning bond returned in full',
      'Corporate offices after staff parties, launches, or client functions',
      'Private homeowners after milestone birthday, engagement, or wedding celebrations',
    ],
    checklist: [
      'Comprehensive litter picking, bottle sorting, and bagging of event waste',
      'Spill removal, sticky floor degreasing, vacuuming, and machine/hand mopping',
      'Full washroom and toilet block disinfection and deodorising',
      'Bar, kitchen, and catering area clean-down and sink sanitising',
      'Outdoor courtyard, marquee zone, and car park litter sweep',
      'Surface wiping of tables, ledges, and fixtures',
      'Late-night, overnight, or early-morning weekend deployment',
      'Venue handover checklist verification to protect your hire bond',
    ],
    iconName: 'PartyPopper',
  },
  {
    slug: 'strata-common-area-cleaning',
    title: 'Commercial / Strata Common-Area Cleaning',
    shortTitle: 'Strata & Common-Area Cleaning',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'STRATA & BODY CORPORATE',
    badgeType: 'popular',
    oneLiner:
      'Dependable maintenance for lobbies, lifts, corridors, shared facilities and agreed common areas.',
    overview:
      'We work with Perth strata managers, Councils of Owners, and commercial building managers to keep multi-residential apartments, townhouse complexes, and commercial strata buildings clean, safe, and welcoming every week.',
    whoItsFor: [
      'Strata management companies and Councils of Owners (COO) across Perth',
      'Residential apartment buildings and mixed-use commercial developments',
      'Commercial property managers overseeing shared foyers and amenities',
    ],
    checklist: [
      'Ground-floor lobbies, foyers, intercom panels, letterboxes, and entry glass doors',
      'Lift car interiors, stainless steel polishing, mirrors, and lift door tracks',
      'Carpeted corridors vacuumed and tiled/concrete fire stairs swept and mopped',
      'Shared resident lounges, gyms, BBQ areas, and common washrooms cleaned',
      'Bin rooms swept, tidied, and deodorised',
      'Car park pedestrian walkways, cobweb removal, and external pathway tidying',
      'Immediate hazard or maintenance issue reporting (e.g., blown globes, leaks) to strata manager',
      'Consolidated monthly invoicing via accounts@nexora.com',
    ],
    iconName: 'Layers',
  },
  {
    slug: 'industrial-warehouse-cleaning',
    title: 'Industrial & Warehouse Cleaning',
    shortTitle: 'Industrial & Warehouse Cleaning',
    categoryId: 'builders-events',
    categoryName: 'Builders, Events & Projects',
    badgeText: 'SITE-APPROPRIATE SCOPE',
    badgeType: 'standard',
    oneLiner:
      'Targeted cleaning only for industrial sites, offices, amenities and tasks Nexora is equipped and trained to handle.',
    overview:
      'Supporting workshops, logistics depots, and warehouses across Welshpool, Kewdale, Malaga, Canning Vale, Henderson, and Kwinana. We confirm your exact site scope upfront to ensure we deploy the right equipment and trained personnel safely.',
    whoItsFor: [
      'Logistics depots, distribution warehouses, and light industrial units',
      'Industrial tenants preparing for an end-of-commercial-lease handover',
      'Site managers needing reliable daily cleaning for site offices and crib rooms',
    ],
    checklist: [
      'Site administration offices, meeting rooms, and dispatch counters',
      'Staff crib rooms, lunchrooms, kitchenettes, and locker rooms',
      'High-usage industrial toilets, showers, and washroom blocks',
      'Warehouse pedestrian walkways, mezzanine floors, and packing stations',
      'Industrial dust removal from accessible shelving, ledges, and signage',
      'End-of-commercial-lease warehouse office and amenities clean-ups',
      'Strict adherence to site inductions, PPE requirements, and SWMS protocols',
      'Upfront scope assessment so we only take on tasks we are fully equipped to handle safely',
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
    badgeText: 'EXTERIOR RESTORATION',
    badgeType: 'popular',
    oneLiner:
      'High-pressure surface cleaning for suitable driveways, paths, paved areas and exterior hard surfaces.',
    overview:
      'Perth’s harsh sun, winter rain, leaf litter, and tyre marks leave outdoor surfaces looking tired and slippery. Our high-pressure washing service blasts away moss, built-up grime, and surface dirt to restore street appeal and footpath safety.',
    whoItsFor: [
      'Homeowners refreshing driveways, patios, pool surrounds, and limestone paths',
      'Tenants and landlords tidying outdoor areas prior to final inspection or sale',
      'Commercial shopfronts, strata walkways, and car park entry zones',
    ],
    checklist: [
      'Concrete, exposed aggregate, and brick-paved driveways and crossovers',
      'Alfresco entertaining areas, patios, pool surrounds, and verandas',
      'Garden pathways, side access walkways, and entry steps',
      'Retaining walls, suitable limestone blocks, and exterior masonry',
      'Commercial shopfront footpaths, bin bays, and loading zones',
      'Removal of slippery winter moss, algae, dirt build-up, and surface grime',
      'Careful pressure regulation to protect mortar joints and surface coatings',
      'Final rinse-down of surrounding edges and adjacent areas',
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
      'Streak-free interior and exterior window cleaning, frames and tracks within safe working limits.',
    overview:
      'Clean windows transform the natural light and appearance of any Perth home or commercial shopfront. Using pure-water systems and professional squeegee techniques, we remove coastal salt spray, bore water spots, dust, and fingerprints safely.',
    whoItsFor: [
      'Coastal and suburban Perth homes wanting crystal-clear views',
      'Retail shopfronts, cafes, and ground-floor commercial offices',
      'End-of-lease tenants and pre-sale property campaigns',
    ],
    checklist: [
      'Interior and exterior glass panes cleaned to a streak-free shine',
      'Sliding glass doors, stacker doors, and French door panels',
      'Window frames, ledges, and aluminium/timber sills wiped down',
      'Sliding door and window track vacuuming and grime removal',
      'Flyscreen removal, light brushing/washing, and refitting upon request',
      'Pool fencing glass and internal glass balustrades (optional inclusion)',
      'Retail shopfront and ground-floor commercial office glazing',
      'Performed strictly within safe working-at-heights limits',
    ],
    iconName: 'AppWindow',
  },
  {
    slug: 'carpet-upholstery-cleaning',
    title: 'Carpet & Upholstery Cleaning',
    shortTitle: 'Carpet & Upholstery Cleaning',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'TRUSTED PARTNER SERVICE',
    badgeType: 'partner',
    oneLiner:
      'Deep steam extraction for carpets, rugs and upholstery delivered seamlessly via our trusted Perth specialist partner.',
    overview:
      'To ensure your carpets and lounges receive industrial-grade hot-water extraction (steam cleaning) and targeted stain treatment, Nexora Cleaning Co delivers this service through our vetted specialist partner. You enjoy one simple booking through Nexora, coordinated scheduling alongside your house or bond clean, and official receipts for your property manager.',
    whoItsFor: [
      'Vacating tenants needing an official professional carpet steam receipt for bond return',
      'Homeowners refreshing high-traffic carpets, rugs, fabric sofas, and mattresses',
      'Offices and strata buildings maintaining commercial carpet tiles',
    ],
    checklist: [
      'Seamless single-point booking alongside your End-of-Lease or House Clean',
      'Pre-inspection, heavy-duty pre-vacuuming, and targeted stain pre-treatment',
      'Hot-water extraction (steam cleaning) for carpeted bedrooms, lounges, stairs, and hallways',
      'Fabric sofa, armchair, dining chair, and mattress steam sanitisation',
      'Pet hair, odour neutralisation, and dust-mite removal treatments',
      'Commercial carpet tile cleaning for offices and strata corridors',
      'Official professional carpet cleaning invoice/receipt provided for bond inspections',
      'Backed by Nexora’s coordination and quality communication standards',
    ],
    addOnNote:
      'Delivered via Nexora’s Trusted Specialist Partner — coordinated by our team so you only make one booking.',
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
      'Specialist deep cleaning of hard tiled floors and discoloured grout lines to restore original colour.',
    overview:
      'Everyday mopping often pushes dirty water into porous grout lines, turning them dark and patchy over time. Our specialist tile and grout cleaning lifts embedded grease, soap residue, and soil from ceramic, porcelain, and sealed hard floors.',
    whoItsFor: [
      'Homes with discoloured kitchen, hallway, or open-plan living room grout',
      'Bathrooms and wet areas with stubborn soap scum and tile build-up',
      'Commercial foyers, cafes, and retail floors needing deep restoration',
    ],
    checklist: [
      'Pre-treatment with specialist tile and grout cleaning solutions to break down grease',
      'Mechanical agitation and deep scrubbing of recessed grout lines',
      'Kitchen, hallway, open-plan living, and alfresco tiled floor restoration',
      'Bathroom floor and wall tile deep descaling and sanitising',
      'Extraction and thorough neutralising rinse leaving zero sticky residue',
      'Safe methods tailored to ceramic, porcelain, and sealed hard surfaces',
      'Ideal for pre-sale home presentation, new homeowners, and commercial foyers',
      'Noticeable brightness improvement across high-traffic walkways',
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
      'Deep degreasing for ovens, rangehoods, cooktops and appliances — available as a convenient Add-On to any clean.',
    overview:
      'Offered as our signature Value Add-On: Baked-on oven carbon, greasy rangehood filters, and stained appliances require dedicated time and specialist non-caustic degreasers. Simply add Kitchen, Oven & Appliance Cleaning to your Regular Clean, Deep Clean, or End-of-Lease Bond Clean for a sparkling, inspection-ready kitchen.',
    whoItsFor: [
      'End-of-lease tenants (where spotless ovens and rangehoods are mandatory for bond return)',
      'Regular and Deep Clean customers wanting their oven and fridge detailed at the same time',
      'Home cooks wanting a smoke-free, hygienically degreased oven and cooktop',
    ],
    checklist: [
      'Complete internal oven degreasing (600mm or 900mm ovens, racks, trays, and side runners)',
      'Oven door glass detailing to remove burnt-on grease and streaking',
      'Gas burner, trivet, electric ceramic, or induction cooktop detailing and polishing',
      'Rangehood canopy degreasing and removable metal filter soaking/cleaning',
      'Microwave interior and exterior steam-clean and sanitisation',
      'Dishwasher filter, door seal, and stainless steel exterior detailing',
      'Refrigerator/freezer interior shelf and drawer sanitising (upon request)',
      'Fume-free, food-safe finish ready for immediate use',
    ],
    addOnNote:
      'Client Note: We offer Kitchen, Oven & Appliance Cleaning as an Add-On to any residential, deep, or bond cleaning booking. Mention "Oven Add-On" in your quote notes!',
    iconName: 'Flame',
    featuredOnHome: true,
  },
  {
    slug: 'bathroom-toilet-deep-cleaning',
    title: 'Bathroom & Toilet Deep Cleaning',
    shortTitle: 'Bathroom & Toilet Deep Clean',
    categoryId: 'specialist-exterior',
    categoryName: 'Specialist & Exterior Cleaning',
    badgeText: 'HYGIENE & DESCALING',
    badgeType: 'standard',
    oneLiner:
      'Intensive descaling, calcium removal and hospital-grade sanitisation for home bathrooms and commercial washrooms.',
    overview:
      'Perth’s hard water leaves stubborn calcium build-up on glass shower screens and tapware. Our dedicated bathroom and washroom restoration service targets soap scum, mould spores, grout discolouration, and odour sources across residential and commercial facilities.',
    whoItsFor: [
      'Homeowners battling hard-water glass stains, soap scum, or bathroom mould',
      'Commercial offices, gyms, hospitality venues, and industrial washrooms',
      'Pre-inspection rental properties needing intensive wet-area recovery',
    ],
    checklist: [
      'Glass shower screen restoration removing hard water spots and soap scum build-up',
      'Shower recess tiles, grout lines, soap dishes, and floor waste drain detailing',
      'Bathtub, vanity basin, stone/laminate benchtop, and mirror polishing',
      'Complete toilet cistern, bowl, hinges, base, and surrounding wall disinfection',
      'Chrome, matte-black, or brushed-brass tapware and showerhead descaling',
      'Exhaust fan cover dust removal and ceiling mould spot treatment',
      'Commercial multi-cubicle washroom and urinal deep sanitisation',
      'Antibacterial floor scrubbing and odour neutralisation',
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
      'Optional specialist gutter clearing service, subject to safe access and appropriate equipment.',
    overview:
      'Blocked gutters cause roof leaks, eaves damage, and bushfire risks across Western Australia. Where roof pitch, height, and site access allow safe working conditions, our team clears leaves, silt, and debris from accessible gutters and downpipe entries.',
    whoItsFor: [
      'Single-storey Perth homes surrounded by eucalypts and overhanging trees',
      'Landlords and strata managers preparing properties before winter rains or bushfire season',
      'Accessible commercial units requiring routine gutter clearing',
    ],
    checklist: [
      'Pre-work safe access and roofline assessment prior to commencement',
      'Removal of dry leaves, twigs, moss, and roof debris from accessible gutters',
      'Clearing of valleys and downpipe top-entry points to restore free water flow',
      'Bagging and tidy removal of all extracted gutter debris from pathways and lawns',
      'Before-and-after roof gutter photos provided upon request for landlords/homeowners',
      'Ideal before Perth’s winter storms or summer bushfire season',
      'Single-storey residential and safe-access commercial properties',
      'Transparent upfront confirmation of site suitability and pricing',
    ],
    iconName: 'CloudRain',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'homes-residential',
    title: 'Homes & Residential Properties',
    shortDesc: 'Family houses, apartments, townhouses, and rental homes across all Perth suburbs.',
    fullDescription:
      'We help Perth homeowners, tenants, and landlords enjoy spotless living spaces without sacrificing their weekends. Whether you need a fortnightly regular clean, a seasonal deep refresh, or a bond-back vacate clean, our police-checked residential team treats your home with care.',
    complianceHighlights: [
      'National Police-Checked & Uniformed Cleaners',
      'Comprehensive Public Liability Insurance',
      'Pet-Safe & Family-Friendly Products',
      'REIWA-Aligned Final Inspection Checklists',
    ],
    recommendedServices: [
      { title: 'Regular House Cleaning', slug: 'regular-house-cleaning' },
      { title: 'Deep Cleaning', slug: 'deep-cleaning' },
      { title: 'End-of-Lease / Bond Cleaning', slug: 'end-of-lease-bond-cleaning' },
      { title: 'Kitchen, Oven & Appliance Add-On', slug: 'kitchen-oven-appliance-cleaning' },
    ],
    iconName: 'Home',
  },
  {
    id: 'offices-corporate',
    title: 'Offices & Corporate Workplaces',
    shortDesc: 'Professional suites, coworking hubs, retail showrooms, and commercial buildings.',
    fullDescription:
      'Maintain a healthy, productive workplace across Perth CBD, West Perth, Subiaco, Osborne Park, and metro business parks. We work early mornings, evenings, or weekends so your team arrives to fresh workstations, sanitised kitchens, and spotless washrooms every day.',
    complianceHighlights: [
      'Secure Key-Holder & Alarm Code Protocols',
      'Documented Site Checklist & Communication Log',
      'Zero-Disruption After-Hours Servicing',
      'Regular Supervisor Quality Inspections',
    ],
    recommendedServices: [
      { title: 'Office & Commercial Cleaning', slug: 'office-commercial-cleaning' },
      { title: 'Window Cleaning', slug: 'window-cleaning' },
      { title: 'Carpet & Upholstery (Partner)', slug: 'carpet-upholstery-cleaning' },
      { title: 'Bathroom & Toilet Deep Cleaning', slug: 'bathroom-toilet-deep-cleaning' },
    ],
    iconName: 'Building2',
  },
  {
    id: 'construction-builders',
    title: 'Construction, Builders & Renovators',
    shortDesc: 'New residential builds, commercial fit-outs, shopfitters, and post-renovation sites.',
    fullDescription:
      'Construction dust, silicone smudges, and grout haze can ruin the presentation of a newly built or renovated property. We work alongside WA site supervisors and builders to deliver stage-by-stage rough, detailed, and final handover cleans on deadline.',
    complianceHighlights: [
      'White Card Awareness & Full Site PPE',
      'Surface-Safe Sticker, Paint & Grout Haze Removal',
      'Practical Completion (PC) Deadline Guarantee',
      'Full Public Liability Insurance Certificates Supplied',
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
    shortDesc: 'Classrooms, staff rooms, student amenities, halls, and training campuses.',
    fullDescription:
      'Educational facilities require rigorous hygiene to minimise seasonal illness alongside strict student safeguarding. Our education cleaning crews hold valid Working With Children Checks (WWCC) and use colour-coded microfibre systems across classrooms and amenities.',
    complianceHighlights: [
      '100% Working With Children Check (WWCC) Verified',
      'National Police Clearance on File for All Staff',
      'Colour-Coded Cross-Contamination Prevention',
      'Term-Time Daily & School Holiday Deep Cleans',
    ],
    recommendedServices: [
      { title: 'School & Education Cleaning', slug: 'school-education-cleaning' },
      { title: 'Bathroom & Toilet Deep Cleaning', slug: 'bathroom-toilet-deep-cleaning' },
      { title: 'Tile & Grout Cleaning', slug: 'tile-grout-cleaning' },
      { title: 'High-Pressure Washing', slug: 'high-pressure-washing' },
    ],
    iconName: 'GraduationCap',
  },
  {
    id: 'childcare-daycare',
    title: 'Childcare & Early Learning Centres',
    shortDesc: 'Day-care centres, kindergartens, playrooms, cot rooms, and nappy change zones.',
    fullDescription:
      'Supporting Perth childcare directors in exceeding National Quality Standard (NQS) Health and Safety benchmarks. We use child-safe, low-tox sanitising agents across floors, play tables, sleep rooms, and toddler bathrooms with signed daily verification sheets.',
    complianceHighlights: [
      'Non-Toxic, Child-Safe Sanitisation Products',
      'Signed Daily Hygiene Verification Checklists',
      'WWCC & National Police Screened Personnel',
      'Strict Isolation of Bathroom vs. Play/Food Equipment',
    ],
    recommendedServices: [
      { title: 'Childcare & Day-Care Cleaning', slug: 'childcare-daycare-cleaning' },
      { title: 'Window Cleaning', slug: 'window-cleaning' },
      { title: 'Carpet & Upholstery (Partner)', slug: 'carpet-upholstery-cleaning' },
    ],
    iconName: 'Baby',
  },
  {
    id: 'aged-care-ndis',
    title: 'Aged Care & NDIS Participant Homes',
    shortDesc: 'Residential aged-care facilities, retirement living, and NDIS domestic support.',
    fullDescription:
      'Whether supporting a residential aged-care facility or delivering fortnightly domestic assistance for a self-managed or plan-managed NDIS participant, our team combines high-level hygiene with patience, dignity, and consistent communication.',
    complianceHighlights: [
      'Direct Plan Manager & Accounts Billing (accounts@nexora.com)',
      'Consistent, Police-Checked Support Cleaners',
      'Slip-Safe Floor Procedures & Infection Control',
      'Medical & Healthcare Clinical Division Launching Soon',
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
    shortDesc: 'Function centres, corporate activations, private parties, and community halls.',
    fullDescription:
      'From pre-event presentation detailing to overnight post-event rubbish removal and floor recovery, Nexora helps Perth event organisers and venue managers turn spaces around rapidly without losing hire bonds.',
    complianceHighlights: [
      'Late-Night, Overnight & Early-Morning Crews',
      'Fast Bump-In & Bump-Out Turnarounds',
      'Complete Waste Bagging & Washroom Recovery',
      'Pre + Post Event Package Pricing Available',
    ],
    recommendedServices: [
      { title: 'Pre-Event Cleaning', slug: 'pre-event-cleaning' },
      { title: 'Post-Event Cleaning', slug: 'post-event-cleaning' },
      { title: 'Bathroom & Toilet Deep Cleaning', slug: 'bathroom-toilet-deep-cleaning' },
    ],
    iconName: 'PartyPopper',
  },
  {
    id: 'property-managers-strata',
    title: 'Property Managers, Strata & Industrial',
    shortDesc: 'Real estate agencies, strata bodies corporate, Airbnb hosts, and warehouses.',
    fullDescription:
      'A single reliable contact for WA property professionals. We handle tenant vacate cleans, abandoned property resets, weekly strata common-area maintenance, Airbnb turnovers, and light industrial office/amenities cleaning across Perth.',
    complianceHighlights: [
      'Fast Written Quotes Within Minutes (+ 5% Price Beat)',
      'Before & After Photo Documentation for Agents',
      'Consolidated Monthly Account Invoicing',
      'One-Stop Bond + Oven + Partner Carpet Packages',
    ],
    recommendedServices: [
      { title: 'End-of-Lease / Bond Cleaning', slug: 'end-of-lease-bond-cleaning' },
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
      'Fast response across central Perth apartments, corporate offices, inner-city character homes, and retail strips.',
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
      'Full coverage from Scarborough and Osborne Park right up the coastal and freeway corridor to Joondalup, Alkimos, and Yanchep.',
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
      'Detail-focused residential, executive leasing, and boutique commercial cleaning across Perth’s western suburbs.',
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
      'Servicing riverside homes, Fremantle heritage properties, Canning Vale industrial hubs, and growing southern estates.',
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
      'Covering residential homes, new builds in Ellenbrook/Brabham, logistics warehouses near the airport, and Hills properties.',
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
      'Reliable coastal, residential, end-of-lease, and commercial cleaning across the southern coastal corridor.',
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
    title: 'WA-Based Business',
    description:
      'Proudly local to Perth & Western Australia with deep knowledge of WA property and workplace standards.',
    iconName: 'MapPin',
  },
  {
    title: 'Fully Insured',
    description:
      'Comprehensive Public Liability Insurance protecting residential homes, commercial sites, and strata properties.',
    iconName: 'Shield',
  },
  {
    title: 'Police-Checked Staff',
    description:
      'Every cleaner holds a verified National Police Clearance so your property or facility is in trusted hands.',
    iconName: 'UserCheck',
  },
  {
    title: 'Relevant Worker Screening',
    description:
      'Valid Working With Children Checks (WWCC) and site-appropriate screening for schools, childcare, and care sites.',
    iconName: 'Award',
  },
  {
    title: 'Flexible Scheduling',
    description:
      'Weekdays, weekends, early mornings, after-hours commercial shifts, and urgent end-of-lease turnarounds.',
    iconName: 'Clock',
  },
];

export const WHY_CHOOSE_NEXORA = [
  {
    title: 'Documented Cleaning Checklists',
    description:
      'Every service follows a clear, task-by-task written checklist tailored to your property or facility so nothing is missed.',
    iconName: 'ClipboardCheck',
  },
  {
    title: 'Quality Inspections',
    description:
      'Supervisor checks and post-clean verification ensure your space consistently meets the Nexora standard before handover.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Clear Quotes (+ 5% Price Beat)',
    description:
      '100% free, no-obligation quotes with your price confirmed before work begins—plus we beat any comparable written quote by 5%.',
    iconName: 'BadgeDollarSign',
  },
  {
    title: 'Reliable Communication',
    description:
      'Prompt replies within minutes, proactive booking confirmations, and a direct local team reachable via phone, email, or WhatsApp.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Suitable Staff Screening',
    description:
      'Police-checked, trained, and appropriately screened personnel (including WWCC where required) matched to your environment.',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Consistent Service Standard',
    description:
      'Whether it is a one-off vacate clean or ongoing daily office maintenance, we deliver the same thorough precision every visit.',
    iconName: 'Sparkles',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Tell us what needs cleaning.',
    description:
      'Complete our quick mobile form in under 60 seconds, send us a WhatsApp message, or call us with your suburb and requirements.',
  },
  {
    stepNumber: '02',
    title: 'We confirm details and provide a quote.',
    description:
      'We review your scope and send a 100% free, no-obligation quote within a few minutes—with your price confirmed before work begins.',
  },
  {
    stepNumber: '03',
    title: 'Agree on a date and time.',
    description:
      'Select a flexible window or choose a specific date and clock time that fits your household, handover deadline, or business hours.',
  },
  {
    stepNumber: '04',
    title: 'Our team completes the work and follows up.',
    description:
      'Our screened cleaners arrive equipped, complete the documented checklist, and follow up with you to ensure complete satisfaction.',
  },
];

export const HOME_FAQS: FaqItem[] = [
  {
    question: 'How quickly will I receive my free quote?',
    answer:
      'We provide a 100% free, no-obligation quote within a few minutes during business hours. All pricing is transparent and confirmed with you before any work begins.',
  },
  {
    question: 'How does your "Beat All Quotes by 5%" guarantee work?',
    answer:
      'If you have received a written quote from another registered, insured Western Australian cleaning company for the same scope of work, simply share it with us when you enquire and we will beat their price by 5%.',
  },
  {
    question: 'Which fields are required on the quote form?',
    answer:
      'To make our form fast and easy to use on mobile phones, only your Name, Phone Number, and Suburb/Postcode (Address) are required. All other fields—including service type, preferred date, preferred time (Flexible or Specific Clock Time), property size, and notes—are optional.',
  },
  {
    question: 'Are your cleaners insured and police-checked?',
    answer:
      'Yes. Nexora Cleaning Co holds comprehensive Public Liability Insurance, and all staff undergo National Police Clearances. Team members assigned to schools, childcare centres, and youth spaces also hold valid Working With Children Checks (WWCC).',
  },
  {
    question: 'Can I bundle Oven Cleaning and Carpet Steam Cleaning with my Bond Clean?',
    answer:
      'Absolutely. Kitchen, Oven & Appliance Cleaning is available as our popular Add-On service, and Carpet & Upholstery Steam Cleaning is coordinated seamlessly through our trusted Perth specialist partner—giving you one booking and official receipts for your property manager.',
  },
  {
    question: 'Do you supply all cleaning equipment and chemicals?',
    answer:
      'Yes, our teams bring all commercial-grade vacuums, microfibre systems, and hospital/eco-friendly cleaning products required. If your site or household requires specific products, simply let us know in the Notes section.',
  },
  {
    question: 'Which suburbs of Perth do you cover?',
    answer:
      'We cover the entire Perth metropolitan area—from Joondalup, Alkimos, and Yanchep in the north to Fremantle, Rockingham, and Mandurah in the south, as well as Midland, Ellenbrook, and the Perth Hills in the east.',
  },
  {
    question: 'Do you offer Medical & Healthcare Cleaning?',
    answer:
      'Our dedicated Medical & Healthcare Cleaning division is currently marked as Coming Soon as we finalise clinical protocols. You can register your clinic’s interest today via our enquiry form or by emailing cleaning@nexora.com.',
  },
];

export function getServiceBySlug(slug: string): CleaningServiceItem | undefined {
  return CLEANING_SERVICES.find((service) => service.slug === slug);
}

export function getServicesByCategory(categoryId: ServiceCategoryId): CleaningServiceItem[] {
  return CLEANING_SERVICES.filter((service) => service.categoryId === categoryId);
}
