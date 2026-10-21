# NEXORA CLEANING CO — MASTER PRODUCTION SPECIFICATION, COPYBOOK & ARCHITECTURE

> **One-Shot Production Build Directive for AI Coding Agents:**  
> This document is the single, exhaustive source of truth for building the **Nexora Cleaning Co** (`nexoraCleaning.com.au`) production website in one go. Every single headline, paragraph, bullet point, service checklist, suburb list, FAQ, legal clause, form validation rule, API payload, SEO tag, and UI component specification is written out in full below. Do **not** truncate copy, skip any of the 25 services, or use placeholder text (`Lorem ipsum`).

---

## 1. Executive Summary & Commercial Record

| Attribute | Production Specification |
| :--- | :--- |
| **Client Name** | **Hamza** |
| **Company / Trading Name** | **Nexora Cleaning Co** |
| **Service Region** | Perth Metropolitan Area & Greater Western Australia (WA) |
| **Project Status** | **CLOSED** — All client requirements received & approved |
| **Consultancy Fee** | **50,000 Rupees (PKR)** |
| **Primary Website Domain** | `https://www.nexoracleaning.com.au` (`nexoraCleaning.com.au`) |
| **Primary Enquiry Email** | `cleaning@nexora.com` *(All quote submissions, primary `mailto:` links, header/footer links)* |
| **Administrative Email** | `admin@nexora.com` *(General administration, partnerships, vendor/compliance queries)* |
| **Accounts & Billing Email** | `accounts@nexora.com` *(Invoicing, commercial accounts, NDIS plan managers, strata billing)* |
| **Primary Phone Format** | `(08) 6100 0000` / `0400 000 000` *(Configurable via `NEXT_PUBLIC_PHONE` & `NEXT_PUBLIC_WHATSAPP` env vars)* |
| **Business Hours** | **Mon – Sun:** 7:00 AM – 8:00 PM AWST *(24/7 Scheduled Commercial & After-Hours Cleaning Available)* |
| **Language & Locale** | **Australian English (`en-AU`)** — Mandatory spellings: *specialised, colour, organisation, centre, licence, sanitise, deodorise, programme, labour, meter/metre* |
| **Reference Competitors** | *UX/structural benchmark only (never copy verbatim):* `calibrecleaning.com.au`, `procleanwa.com.au`, `wacleaning.com.au`, `cleanerco.com.au`, `smmnclean.com.au` |

---

## 2. Brand Identity, Visual Design System & Assets

### 2.1 Embedded Logo Extraction
- **Source File:** `Nexora Web info.xlsx` (located in repository root) -> internal ZIP path `xl/media/image1.jpg` (1493×1053 px, 71,135 bytes).
- **Automated Extraction Step (Run during project setup):**
  ```powershell
  # PowerShell one-liner or Node script to extract the logo directly from the xlsx zip archive
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $zip = [System.IO.Compression.ZipFile]::OpenRead("$PWD\Nexora Web info.xlsx")
  $entry = $zip.Entries | Where-Object { $_.FullName -eq 'xl/media/image1.jpg' }
  New-Item -ItemType Directory -Force -Path "$PWD\public\images" | Out-Null
  [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, "$PWD\public\images\nexora-logo.jpg", $true)
  $zip.Dispose()
  ```

### 2.2 Colour Tokens (Derived from Logo)
```css
:root {
  /* Core Dark & Brand Surfaces */
  --bg-obsidian: #050811;        /* Deepest hero & footer background */
  --bg-navy-card: #0B1120;       /* Dark glass card surface */
  --bg-slate-light: #F8FAFC;     /* Alternating light section background */
  --bg-pure-white: #FFFFFF;      /* Standard card & form surface */

  /* Brand Blues & Electric Cyan (From Logo) */
  --brand-cyan: #10C0FF;         /* Primary electric highlight, badges, icons */
  --brand-cyan-bright: #20E0FF;  /* Hover glow & gradient stop */
  --brand-blue: #0080F0;         /* Primary CTA button fill & active accents */
  --brand-royal: #0060E0;        /* Primary CTA button hover & deep accents */

  /* Text Hierarchy */
  --text-dark: #0F172A;          /* Primary headings on light backgrounds */
  --text-body: #334155;          /* Body copy on light backgrounds */
  --text-muted: #64748B;         /* Captions, helper text, placeholders */
  --text-on-dark: #FFFFFF;       /* Headings on dark backgrounds */
  --text-on-dark-muted: #94A3B8; /* Subtitles on dark backgrounds */

  /* Semantic Status & Conversion */
  --accent-whatsapp: #25D366;    /* Floating WhatsApp widget */
  --accent-emerald: #10B981;     /* Verified ticks, 5% Price Beat Guarantee badge */
  --accent-amber: #F59E0B;       /* "Coming Soon" / "Add-On" highlight tags */
  --border-subtle: #E2E8F0;      /* Light section borders */
  --border-dark-glass: rgba(16, 192, 255, 0.22); /* Dark card cyan border glow */
}
```

### 2.3 Typography & Component Styling Rules
- **Heading Font:** `Plus Jakarta Sans` (Weights: `600`, `700`, `800`), tight tracking (`-0.02em`).
- **Body Font:** `Inter` (Weights: `400`, `500`, `600`), relaxed line height (`1.65`).
- **Buttons:**
  - **Primary CTA (`Request a Free Quote`):** Gradient `from-[#0080F0] to-[#10C0FF]`, white bold text, subtle shadow `shadow-[0_8px_25px_-4px_rgba(0,128,240,0.45)]`, hover lift `-translate-y-0.5`.
  - **Secondary CTA (`Explore Our Services`):** Dark glass `bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-md` on dark backgrounds; `bg-slate-100 hover:bg-slate-200 text-slate-900` on light backgrounds.
- **Cards:** `rounded-2xl`, subtle border (`border-slate-200/80`), smooth transition `transition-all duration-300 hover:shadow-xl hover:border-[#0080F0]/40`.

---

## 3. Technical Architecture & File Tree

### 3.1 Recommended Stack
- **Framework:** Next.js 14/15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v3.4+
- **Icons:** `lucide-react`
- **Form & API Handling:** Next.js Route Handler (`/api/enquiry/route.ts`) with server-side validation, honeypot spam protection, and Nodemailer / Resend webhook support to deliver notifications directly to `cleaning@nexora.com`.
- **SEO:** Next.js Metadata API (`generateMetadata`), dynamic `sitemap.ts`, `robots.ts`, and JSON-LD `CleaningService` / `LocalBusiness` structured data.

### 3.2 Target Directory Structure
```text
Nexora/
├── public/
│   ├── images/
│   │   └── nexora-logo.jpg          # Extracted from Nexora Web info.xlsx
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, Google Fonts, JSON-LD, Header, Footer, WhatsAppWidget, StickyMobileBar
│   │   ├── page.tsx                 # Homepage (All 9 required client sections)
│   │   ├── services/
│   │   │   ├── page.tsx             # Cleaning Services Overview (4 categories, 25 services)
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Dedicated Individual Service Page (SSG for all 25 services)
│   │   ├── industries/
│   │   │   └── page.tsx             # Industries We Serve (8 detailed sectors)
│   │   ├── about/
│   │   │   └── page.tsx             # About Nexora, Trust Pillars, Screening & Checklist Standards
│   │   ├── service-areas/
│   │   │   └── page.tsx             # Areas We Service (Perth Metro Regions & Suburb Directory)
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact & Request a Quote Page (with all 3 emails & QuoteForm)
│   │   ├── privacy-terms/
│   │   │   └── page.tsx             # Australian Privacy Policy (APP) & Terms of Service
│   │   ├── api/
│   │   │   └── enquiry/
│   │   │       └── route.ts         # POST endpoint for quote submissions -> cleaning@nexora.com
│   │   ├── sitemap.ts               # Auto-generated XML sitemap for all 32+ routes
│   │   └── robots.ts                # SEO robots configuration
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky header with desktop mega-dropdown & mobile drawer
│   │   ├── Footer.tsx               # Comprehensive footer with quick quote CTA, 3 emails, links
│   │   ├── QuoteForm.tsx            # Client-spec interactive quote form (Flexible vs Clock time picker)
│   │   ├── WhatsAppWidget.tsx       # Floating bottom-right WhatsApp chat popup widget
│   │   ├── StickyMobileBar.tsx      # Fixed bottom mobile bar (Call Now + Free Quote + WhatsApp)
│   │   ├── ServiceCard.tsx          # Reusable service card with status badge & dual CTAs
│   │   └── FaqAccordion.tsx         # Accessible interactive FAQ accordion
│   └── data/
│       └── nexoraData.ts            # Complete typed dataset: 25 services, 8 industries, Perth suburbs, FAQs
├── PROJECT_SPECIFICATION.md
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Global Components — Exact Copy & Behaviour

### 4.1 Top Announcement / Promo Bar (Above Navbar)
- **Background:** `#050811` with subtle cyan bottom border.
- **Left Copy:** `🇦🇺 Proudly Western Australian Owned & Operated • Servicing All Perth Metro Suburbs`
- **Right Copy / Badges:**
  - `🔥 We Beat Any Comparable Quote by 5%`
  - `⚡ 100% Free Quote Within a Few Minutes`
  - `✉️ cleaning@nexora.com`

### 4.2 Header & Navigation (`Navbar.tsx`)
- **Left:** Nexora Cleaning Co Logo (`nexora-logo.jpg` in a sleek rounded frame + `NEXORA CLEANING CO` wordmark with `WESTERN AUSTRALIA` sub-label).
- **Navigation Menu Items:**
  1. `Home` (`/`)
  2. `Services` (`/services`) — Hover/click dropdown showing the 4 categories (*Residential*, *Commercial & Specialist*, *Builders, Events & Projects*, *Specialist & Exterior*) and direct links to top services.
  3. `Industries` (`/industries`)
  4. `About Us` (`/about`)
  5. `Service Areas` (`/service-areas`)
  6. `Contact` (`/contact`)
- **Right Action Group:**
  - **Phone Button:** `tel:+61861000000` displaying `(08) 6100 0000` with a pulsing cyan phone icon.
  - **Primary CTA Button:** `Get a Free Quote` -> scrolls smoothly to `#quote-form` on the current page or navigates to `/contact#quote-form`.

### 4.3 Interactive Quote / Enquiry Form (`QuoteForm.tsx`)
This component is the primary conversion engine of the website. Every detail from the client's spreadsheet must be implemented accurately:

#### Form Header Copy
- **Eyebrow Badge:** `100% FREE QUOTE WITHIN A FEW MINUTES`
- **Heading:** `NEXORA CLEANING — ENQUIRY`
- **Subheading:** `Free, no-obligation quote — price confirmed before work begins.`
- **Price-Beat Callout Banner:** `🏷️ Price-Beat Guarantee: Found a lower written quote from a licensed Perth cleaner? We will beat it by 5%!`

#### Exact Fields, Placeholders & Validation Rules
1. **`name` (Name)**
   - **Label:** `Full Name *`
   - **Required:** **YES** (`required`)
   - **Placeholder:** `e.g. Sarah Jenkins`
2. **`phone` (Phone)**
   - **Label:** `Phone Number *`
   - **Required:** **YES** (`required`, validates Australian phone/mobile numbers)
   - **Placeholder:** `e.g. 0412 345 678`
3. **`suburb` (Suburb / Postcode / Address)**
   - **Label:** `Suburb / Postcode (Address) *`
   - **Required:** **YES** (`required` — per client instruction: *"all of the above should be optional except name and phone and address"*)
   - **Placeholder:** `e.g. Subiaco 6008 or 14 Hay St, Perth`
4. **`service` (Service Required)**
   - **Label:** `Service Required (Optional)`
   - **Required:** **NO**
   - **Default Value:** `"End-of-lease / bond / vacate cleaning"` (or automatically pre-selected when viewed on a specific `/services/[slug]` page).
   - **Options:** Grouped `<optgroup>` dropdown listing all 25 services + `"Other / Custom Cleaning Package"`.
5. **`email` (Email Address)**
   - **Label:** `Email Address (Optional)`
   - **Required:** **NO**
   - **Placeholder:** `e.g. sarah@example.com.au`
6. **`preferredDate` (Preferred Date)**
   - **Label:** `Preferred Date (Optional)`
   - **Required:** **NO**
   - **Input Type:** Native `<input type="date" />` with minimum date set to today.
7. **`preferredTimeMode` & `preferredTimeValue` (Preferred Time — Client's 2-Option Rule)**
   - **Label:** `Preferred Time (Optional)`
   - **Required:** **NO**
   - **Client Rule Implementation:** Render a 2-option segmented toggle:
     - **Option 1 (`"flexible"` — default selected):** `🕒 Flexible (Any Convenient Time)`
     - **Option 2 (`"specific"`):** `⏰ Specific Time & Clock` -> Selecting this smoothly reveals a native time/clock picker (`<input type="time" />`) plus quick-select chips (`Morning 7am–11am`, `Midday 11am–3pm`, `Afternoon 3pm–7pm`, `After-Hours`).
8. **`propertySize` (Property Size)**
   - **Label:** `Property / Site Size (Optional)`
   - **Required:** **NO**
   - **Options:** `Select size (optional)...`, `Studio / 1 Bedroom, 1 Bath`, `2 Bedrooms, 1–2 Baths`, `3 Bedrooms, 2 Baths`, `4+ Bedrooms / Large Home`, `Small Office / Retail (< 200m²)`, `Medium Commercial / Facility (200m²–1,000m²)`, `Large Site / Builders / Industrial (> 1,000m²)`, `Not Sure / Specify in Notes`.
9. **`notes` (Notes)**
   - **Label:** `Additional Notes (Optional)`
   - **Required:** **NO**
   - **Exact Placeholder (disappears automatically on typing):**
     `"Let us know if we need to know anything like property size, special requirements, carpet steam cleaning, oven add-on, or access instructions..."`
10. **`website_url` (Spam Protection Honeypot)**
    - Hidden input (`tabIndex={-1}`, `autoComplete="off"`, `className="hidden"`). If populated by a bot, silently return success without sending spam email.

#### Submit Button Copy
- **Default State:** `Get My Free Quote Now →`
- **Loading State:** `Sending Your Enquiry...`
- **Trust Micro-Copy Below Button:** `🔒 100% Privacy Protected • No Obligation • Direct Response from Our Perth Team (cleaning@nexora.com)`

#### Exact Post-Submission Confirmation State
Upon successful submission, display a prominent green verification card containing the **exact client-specified confirmation message**:
> **"Thanks for contacting Nexora Cleaning. We've received your request and will contact you to confirm the details."**

Below the message, display:
- A summary of the submitted reference details.
- A button: `Need Urgent Assistance? Chat on WhatsApp Now`
- A secondary link: `Submit Another Enquiry`

### 4.4 Floating WhatsApp Pop-Up Chat Widget (`WhatsAppWidget.tsx`)
- **Position:** Fixed bottom-right (`bottom-6 right-6 z-50`, raised on mobile above the sticky call bar).
- **Collapsed Button:** Vibrant green (`#25D366`) pill/circle button with WhatsApp icon, notification dot (`1`), and label `"Chat with Us"`.
- **Expanded Pop-Up Card:**
  - **Header:** Dark obsidian `#070B14` with Nexora logo, `"Nexora Cleaning WA"`, and `"Typically replies within a few minutes • Online"`.
  - **Chat Bubble:** `"G'day! 👋 Looking for a fast, free cleaning quote in Perth? Remember — we beat any comparable written quote by 5%! How can we help you today?"`
  - **Quick Starter Chips (pre-fills WhatsApp message):**
    - `"🏠 Get an End-of-Lease / Bond Quote"`
    - `"🏢 Commercial / Office Cleaning Enquiry"`
    - `"✨ Regular or Deep House Clean"`
    - `"🏷️ Beat My Existing Quote by 5%"`
  - **Primary Action Button:** `"Start WhatsApp Chat"` -> opens `https://wa.me/61400000000?text=...` in a new tab.

---

## 5. Page 1: Homepage (`/`) — All 9 Sections & Complete Production Copy

Follow the client's exact 9-section top-to-bottom blueprint from `Sheet 2: homepage recommendations`:

### Section 1: Header & Navigation
- Implemented via `<Navbar />` (Logo left, 6 menu items centre, prominent `Get a Free Quote` button and phone number right).

### Section 2: Hero Section (The First Thing Visitors See)
- **Top Trust Pill:** `🇦🇺 Western Australia's Trusted Residential, Commercial & Specialist Cleaners`
- **Exact Client Headline (`<h1>`):**
  > **Professional Cleaning Solutions Across Western Australia.**
- **Exact Client Supporting Text:**
  > **Reliable cleaning for homes, businesses, builders and specialist facilities. Tailored services, clear communication and a team focused on quality.**
- **Value Proposition Highlights (3 inline badges):**
  - `⚡ 100% Free Quote Within a Few Minutes`
  - `🏷️ We Will Beat All Comparable Quotes by 5%`
  - `🛡️ Fully Insured & Police-Checked Staff`
- **Exact CTA Buttons:**
  - **Primary Button:** `Request a Free Quote` (Scrolls to `#quote-form`)
  - **Secondary Button:** `Explore Our Services` (Links to `/services`)
- **Hero Right Column:**
  - Interactive Quick Quote Preview Card or High-Impact Visual Showcase displaying live WA credential badges (*Public Liability Insured*, *National Police Checked*, *WWCC Screened*, *100% Price Confirmed Before Work Begins*).

### Section 3: Trust & Credentials Bar
- **Section Eyebrow:** `VERIFIED STANDARDS & COMPLIANCE`
- **Section Heading:** `Built on Trust, Safety & Transparent Standards`
- **5 Verified Credential Cards (Exact Client Points):**
  1. **WA-Based Business:** Proudly local to Perth and Western Australia, understanding local property manager standards, strata expectations, and WA workplace regulations.
  2. **Fully Insured:** Comprehensive Public Liability Insurance covering residential homes, commercial premises, construction sites, and community facilities.
  3. **Police-Checked Staff:** Every Nexora team member holds a current National Police Clearance so you have complete peace of mind on your premises.
  4. **Relevant Worker Screening:** Staff assigned to schools, childcare centres, aged care, and NDIS homes hold valid Working With Children Checks (WWCC) and relevant screening.
  5. **Flexible Scheduling:** Early mornings, evenings, weekends, urgent end-of-lease turnarounds, and zero-disruption commercial schedules tailored to you.

### Section 4: Our Cleaning Services
- **Section Eyebrow:** `OUR CLEANING SERVICES`
- **Section Heading:** `Dedicated Cleaning Solutions for Every Space`
- **Section Subheading:** `Explore our four core cleaning divisions. Every service features a documented checklist, clear upfront pricing, and its own dedicated service page.`
- **Category Filter Tabs:** `All Featured` | `Residential` | `Commercial & Specialist` | `Builders & Events` | `Exterior & Add-Ons`
- **Service Cards Grid:** Render attractive cards with category icon/visual, service title, status badge (if applicable), 1–2 lines explaining the service, and two action links:
  - `Learn More →` (links to `/services/[slug]`)
  - `Get a Quote` (links to `/contact?service=[slug]#quote-form`)
- **Bottom Button:** `View All 25 Cleaning Services →` (links to `/services`)

### Section 5: Industries We Support
- **Section Eyebrow:** `INDUSTRIES WE SUPPORT`
- **Section Heading:** `Equipped & Screened for Diverse WA Sectors`
- **Section Subheading:** `From family homes in Perth's suburbs to high-compliance childcare, education, construction, and strata facilities across Western Australia.`
- **8 Industry Cards (Linking to `/industries#[id]`):**
  1. **Homes & Residential** — Houses, apartments, townhouses, and prestige estates across Perth.
  2. **Offices & Corporate** — Workplaces, coworking hubs, retail showrooms, and commercial suites.
  3. **Construction & Builders** — New residential builds, commercial fit-outs, and renovation handovers.
  4. **Schools & Education** — Primary schools, high schools, colleges, and training campuses.
  5. **Childcare & Day-Care** — Early learning centres requiring non-toxic, documented hygiene protocols.
  6. **Aged Care & NDIS** — Residential aged care facilities and NDIS participant homes.
  7. **Events & Venues** — Function centres, corporate events, stadiums, and community halls.
  8. **Property Managers & Strata** — Real estate agencies, landlords, body corporates, and Airbnb hosts.

### Section 6: Why Choose Nexora?
- **Section Eyebrow:** `WHY CHOOSE NEXORA?`
- **Section Heading:** `The Real Differences That Set Nexora Apart`
- **Section Subheading:** `We don't cut corners or rely on vague promises. Every job is backed by documented processes and clear accountability.`
- **6 Core Differentiator Cards (Exact Client Points):**
  1. **Documented Cleaning Checklists:** Our cleaners follow a structured, room-by-room task checklist tailored to your property or facility so nothing is overlooked.
  2. **Thorough Quality Inspections:** Regular supervisor spot-checks and post-clean verification ensure high standards are maintained on every visit.
  3. **Clear, Confirmed Quotes (+ 5% Price Beat):** Free, no-obligation quotes with pricing confirmed before work begins—plus we beat any comparable written quote by 5%.
  4. **Reliable, Direct Communication:** Fast responses within minutes, proactive arrival updates, and a dedicated point of contact at `cleaning@nexora.com`.
  5. **Suitable Staff Screening:** Police-checked, uniformed, and appropriately screened personnel (including WWCC where required) matched to your site's safety requirements.
  6. **Consistent Service Standard:** Whether it's a one-off bond clean or daily commercial maintenance, you get the same dependable precision every single time.

### Section 7: How It Works (4-Step Process)
- **Section Eyebrow:** `SIMPLE & TRANSPARENT PROCESS`
- **Section Heading:** `How It Works — From Quote to Spotless Space`
- **4 Numbered Step Cards:**
  - **Step 01 — Tell Us What Needs Cleaning:** Fill out our quick 60-second mobile form, send us a WhatsApp message, or call us with your suburb and requirements.
  - **Step 02 — We Confirm Details & Provide a Quote:** We review your scope, answer any questions, and provide a 100% free, no-obligation quote with the price confirmed before work begins.
  - **Step 03 — Agree on a Date & Time:** Choose a flexible window or lock in a specific date and clock time that suits your household, handover deadline, or business hours.
  - **Step 04 — Our Team Completes the Work & Follows Up:** Our screened cleaners arrive on time, complete the documented checklist, and follow up to ensure you are completely satisfied.

### Section 8: Service Standards, Perth Suburbs Covered & FAQs
- **Part A — Customer Service Standards & Guarantees (ACL Compliant):**
  - Instead of fabricated reviews or unverified claims of decades in business (explicitly prohibited by the client: *"Don't publish made-up reviews or claim years of experience without evidence"*), display **3 Verified Client Commitments & Real Service Guarantees**:
    1. **Bond & Inspection Readiness Guarantee:** For end-of-lease cleans, we align with REIWA property condition standards and rectify any checklist item raised by your property manager within 72 hours.
    2. **5% Price-Beat Commitment:** Share any written quote from an insured Perth cleaning company for the same scope of work and we will beat it by 5%.
    3. **100% Upfront Price Confirmation:** No surprise call-out charges or hidden weekend surcharges—your quote is confirmed in writing before our team starts.
- **Part B — Suburbs Nexora Covers (All Over Perth):**
  - Interactive regional tabs (`Perth CBD & Inner`, `Northern Suburbs`, `Southern Suburbs`, `Eastern & Hills`, `Western & Coastal`, `Peel & Rockingham`) displaying 60+ Perth suburbs and postcodes with a link to `/service-areas`.
- **Part C — Frequently Asked Questions (8 High-Conversion FAQs):**
  1. *How quickly can I get a quote?* — We provide a 100% free, no-obligation quote within a few minutes during business hours once you submit our short online form or message us on WhatsApp.
  2. *How does your 5% Price-Beat Guarantee work?* — Simply send us a current written quote from another registered, insured WA cleaning provider for an identical scope of work, and we will beat their price by 5%.
  3. *Are your cleaners insured and police-checked?* — Yes. Nexora Cleaning Co holds comprehensive Public Liability Insurance, and our staff undergo National Police Checks as well as Working With Children Checks (WWCC) for education, childcare, and youth-related sites.
  4. *Do you bring your own cleaning equipment and supplies?* — Yes, our team arrives fully equipped with commercial-grade vacuums, microfibre systems, and hospital/eco-friendly cleaning solutions. If you prefer specific products used in your home or facility, just let us know in the form notes.
  5. *What is included in an End-of-Lease / Bond Clean?* — Our bond clean follows an agency-ready checklist covering kitchens, bathrooms, bedrooms, living areas, floors, skirting boards, internal windows, and cupboards. Carpet steam cleaning (via our trusted partner) and deep oven/appliance detailing can be added seamlessly.
  6. *Do I need to be home during the clean?* — Not at all. Many Perth clients provide key safe details, property manager keys, or concierge access instructions in the form notes. We lock up securely and notify you as soon as the job is complete.
  7. *Which areas of Perth do you cover?* — We cover the entire Perth metropolitan region—from Yanchep and Joondalup in the north to Fremantle, Rockingham, and Mandurah in the south, and out to Midland, Ellenbrook, and the Perth Hills in the east.
  8. *Can we book kitchen and oven cleaning by itself or with a house clean?* — Kitchen, oven, and appliance deep cleaning is available as a convenient **add-on** to any regular, deep, or end-of-lease clean, or can be requested as part of a custom package.

### Section 9: Final Enquiry Section
- **Exact Client Heading (`<h2>`):**
  > **Let's Get Your Space Clean.**
- **Supporting Copy:** `Request your 100% free, no-obligation quote below. Our Perth team responds within minutes and confirms your exact price before any work begins.`
- **Left Column:** Contact cards (`Phone: (08) 6100 0000`, `Main Enquiries: cleaning@nexora.com`, `Admin: admin@nexora.com`, `Accounts: accounts@nexora.com`, `Business Hours: Mon–Sun 7:00 AM – 8:00 PM AWST`, `Service Area: All Perth Metro & Surrounds`) + WhatsApp direct button.
- **Right Column:** Full interactive `<QuoteForm />` component (`id="quote-form"`).

---

## 6. Complete Data & Copy for All 25 Individual Service Pages (`/services` & `/services/[slug]`)

Every service below must exist in `src/data/nexoraData.ts` and render its own dedicated page at `/services/[slug]`.
Per the client's notes on `Sheet 3`:
> *"once we going to open a subtype it just show a bit of 1 liner intro and than on bottom a button shows request a quote or book now something like that."*

Each `/services/[slug]` page layout must include:
1. **Hero Banner:** Category badge, Status badge (if applicable), Service Title (`<h1>`), Exact 1-Liner Intro, and immediate `Request a Quote / Book Now` CTA button.
2. **Service Overview & Who It's For:** Concise, practical overview written in Australian English (`en-AU`).
3. **Documented Cleaning Checklist (8 Point Scope):** Clear grid of what is covered.
4. **Why Book With Nexora Card:** 5% Price Beat Guarantee, Police-Checked & Insured Staff, Confirmed Upfront Pricing.
5. **Bottom Conversion Section:** Prominent **`Request a Quote / Book Now`** heading + embedded `<QuoteForm defaultService={service.title} />`.

---

### CATEGORY 1: RESIDENTIAL CLEANING (`residential`)

#### 1. Regular House Cleaning
- **Slug:** `regular-house-cleaning`
- **Status Badge:** `POPULAR RESIDENTIAL`
- **Exact 1-Liner Intro:** `Weekly, fortnightly, monthly and one-off cleaning tailored to keep your Perth home fresh, hygienic and effortlessly tidy.`
- **Overview Copy:** Designed for busy Perth professionals, families, and homeowners who want reliable, consistent domestic upkeep. You get a dedicated, police-checked cleaner following a personalised checklist for your bedrooms, bathrooms, kitchen, and living spaces.
- **Included Checklist:**
  1. Dusting and wiping of all accessible surfaces, furniture, and skirting boards
  2. Kitchen benchtops, splashbacks, sink scrubbing, and external appliance wipe-down
  3. Bathroom sanitisation: showers, glass screens, vanities, mirrors, and toilets
  4. Thorough vacuuming of all carpets, rugs, stairs, and soft furnishings
  5. Mopping and sanitising of hard floors (timber, tiles, vinyl, and hybrid flooring)
  6. Bedroom tidying, mirror polishing, and general surface presentation
  7. Emptying internal bins and replacing liners
  8. Optional add-on available: Deep Kitchen, Oven & Appliance Cleaning

#### 2. Deep Cleaning
- **Slug:** `deep-cleaning`
- **Status Badge:** `INTENSIVE DETAIL`
- **Exact 1-Liner Intro:** `A more detailed clean for built-up dirt, soap scum, grease and hard-to-reach areas throughout your home.`
- **Overview Copy:** Ideal when your home needs a comprehensive reset—before hosting family, after a busy period, or prior to starting a regular fortnightly schedule. Our team targets the neglected corners and high-touch zones standard weekly cleans don't cover.
- **Included Checklist:**
  1. Intensive descaling of shower screens, tapware, tiles, and bathroom grout lines
  2. Detailed scrubbing of skirting boards, door frames, architraves, and light switches
  3. High-reach dusting of ceiling fans, air-conditioning vents, and light fittings
  4. Deep kitchen degreasing of rangehood exteriors, stove tops, splashbacks, and cabinet fronts
  5. Window sills, sliding door tracks, and internal glass polishing
  6. Under-furniture and edge vacuuming plus multi-stage hard floor sanitising
  7. Full disinfection of toilets, laundry troughs, and wet areas
  8. Optional add-on available: Inside Oven, Rangehood Filter & Appliance Deep Clean

#### 3. End-of-Lease / Bond / Vacate Cleaning
- **Slug:** `end-of-lease-bond-cleaning`
- **Status Badge:** `BOND BACK READY`
- **Exact 1-Liner Intro:** `Move-out cleaning for tenants, landlords and property managers designed to meet strict Western Australian final inspection standards.`
- **Overview Copy:** Moving out is stressful enough without worrying about your bond refund. Our Perth vacate cleaning team follows a comprehensive real-estate inspection checklist so your property is handed back immaculate. Bundle carpet steam cleaning (via our trusted partner) and oven detailing for a complete one-stop handover.
- **Included Checklist:**
  1. Inside and outside of all kitchen cupboards, drawers, pantries, and benchtops
  2. Full bathroom & ensuite restoration: showers, baths, toilets, vanities, mirrors, and exhaust fans
  3. Built-in wardrobes, shelving, mirror doors, and sliding tracks cleaned inside and out
  4. Skirting boards, doors, handles, power points, and switches detailed throughout
  5. Cobweb removal, ceiling fan dusting, air vents, and light fittings cleaned
  6. Internal windows, glass sliding doors, sills, and tracks thoroughly detailed
  7. Full-property vacuuming and machine/hand mopping of all hard floors
  8. Easy bundling with **Kitchen, Oven & Appliance Add-On** and **Trusted Partner Carpet Steam Cleaning** (with receipt for your property manager)

#### 4. Move-In Cleaning
- **Slug:** `move-in-cleaning`
- **Status Badge:** `FRESH START`
- **Exact 1-Liner Intro:** `Prepare and sanitise a home from top to bottom before moving your family and furniture in.`
- **Overview Copy:** Whether you have just settled on a newly purchased Perth home or are moving into a rental property that has sat vacant, our Move-In Clean ensures every cupboard, bathroom, and floor is hygienically sanitised before you unpack a single box.
- **Included Checklist:**
  1. Sanitising inside all kitchen cabinets, drawers, and pantry shelves prior to unpacking
  2. Hospital-grade disinfection of all toilets, showers, bathtubs, and bathroom vanities
  3. Wiping inside wardrobes, linen cupboards, and laundry cabinetry
  4. Dusting ceiling fans, blinds, window ledges, and air-conditioning vents
  5. Spot-cleaning walls, doors, light switches, and door handles
  6. Internal glass and mirror polishing for streak-free natural light
  7. Deep vacuuming and antibacterial mopping of all floors
  8. Optional Oven & Appliance Deep Clean Add-On for complete kitchen hygiene

#### 5. Spring Cleaning
- **Slug:** `spring-cleaning`
- **Status Badge:** `SEASONAL REFRESH`
- **Exact 1-Liner Intro:** `Seasonal, whole-home refresh to clear out dust, allergens and winter build-up across every room.`
- **Overview Copy:** Give your home a bright seasonal uplift. Our Spring Cleaning package revitalises living spaces, bedrooms, wet areas, and indoor-outdoor entertaining zones so your home feels brand new.
- **Included Checklist:**
  1. Whole-home high and low dusting including fans, vents, cornices, and skirting boards
  2. Window, sill, flyscreen brushing, and sliding door track detailing
  3. Kitchen cabinet exteriors, splashbacks, benchtops, and sink polishing
  4. Deep bathroom refresh removing soap residue, water marks, and mould spots
  5. Cleaning behind and beneath movable furniture and appliances
  6. Polishing mirrors, glass tables, and chrome fixtures throughout the house
  7. Thorough allergen-reducing vacuuming and fragrant hard floor mopping
  8. Customisable scope—add oven cleaning, pressure washing, or window detailing

#### 6. Airbnb & Short-Stay Turnover Cleaning
- **Slug:** `airbnb-short-stay-cleaning`
- **Status Badge:** `HOST & PROPERTY PARTNER`
- **Exact 1-Liner Intro:** `Fast, reliable guest changeovers, presentation checks and agreed linen or restocking tasks for 5-star reviews.`
- **Overview Copy:** In Perth's competitive short-stay market, cleanliness drives your guest ratings. We work with Airbnb hosts, Stayz owners, and short-term property managers to deliver punctual between-guest turnarounds between check-out and check-in.
- **Included Checklist:**
  1. Strict check-out to check-in turnaround scheduling across Perth metro suburbs
  2. Stripping beds and remaking with fresh linen (per agreed host arrangement)
  3. Hotel-standard bathroom sanitisation, towel presentation, and amenity restocking
  4. Kitchen reset: dishes, fridge check, microwave, coffee machine, and bench sanitisation
  5. Living area styling, cushion plumping, remote sanitising, and glass polishing
  6. Rubbish removal, bin sanitising, and fresh liner replacement
  7. Visual damage, lost-property, and consumable low-stock photo reporting to host
  8. Thorough vacuuming and mopping of all guest areas and balconies

---

### CATEGORY 2: COMMERCIAL & SPECIALIST FACILITIES (`commercial`)

#### 7. Office & Commercial Cleaning
- **Slug:** `office-commercial-cleaning`
- **Status Badge:** `COMMERCIAL CORE`
- **Exact 1-Liner Intro:** `Dependable daily, weekly or custom cleaning for workplaces, corporate suites, retail premises and common areas.`
- **Overview Copy:** A spotless workplace boosts staff productivity and leaves a lasting impression on visiting clients. Our police-checked commercial team works during or after business hours using documented site checklists.
- **Included Checklist:**
  1. Workstations, desks, meeting tables, reception counters, and touchpoint disinfection
  2. Staff kitchens, tea rooms, sinks, microwaves, fridges, and dishwasher loading/unloading
  3. Commercial washroom sanitisation, toilet cleaning, and consumable restocking
  4. Glass entry doors, partition glass, and reception mirror polishing
  5. Commercial vacuuming of carpeted offices and machine/damp mopping of hard floors
  6. Daily waste, recycling, and confidential bin emptying with liner replacement
  7. After-hours or early-morning scheduling with secure alarm/key-holder protocols
  8. Dedicated site communication logbook and regular quality inspections

#### 8. School & Education Cleaning
- **Slug:** `school-education-cleaning`
- **Status Badge:** `WWCC SCREENED`
- **Exact 1-Liner Intro:** `Safe, reliable cleaning for classrooms, staff areas, student toilets, halls and shared educational spaces.`
- **Overview Copy:** Educational environments demand strict safeguarding and hygiene. All Nexora personnel assigned to schools, colleges, and training campuses hold current National Police Clearances and Working With Children Checks (WWCC).
- **Included Checklist:**
  1. Classroom desks, chairs, whiteboards, sinks, and high-touch surface disinfection
  2. Student and staff toilet blocks, change rooms, and drinking fountain sanitisation
  3. Libraries, administration offices, staff rooms, and sick-bay hygiene cleaning
  4. School halls, gymnasium floors, corridors, and stairwell maintenance
  5. Safe, non-hazardous, colour-coded microfibre cleaning systems to prevent cross-contamination
  6. Term-time daily cleaning plus comprehensive school holiday deep cleaning programmes
  7. Rubbish collection and playground/quadrangle bin management
  8. Full WWCC, Police Check, and WHS documentation supplied to school business managers

#### 9. Childcare & Day-Care Cleaning
- **Slug:** `childcare-daycare-cleaning`
- **Status Badge:** `CHILD-SAFE HYGIENE`
- **Exact 1-Liner Intro:** `Age-appropriate, non-toxic cleaning and documented hygiene procedures tailored for early learning centres.`
- **Overview Copy:** Young children explore the world hands-first. Our childcare cleaning programmes focus on low-tox, child-safe sanitisation of play mats, nappy change rooms, sleep areas, and food preparation spaces in line with National Quality Standard (NQS) expectations.
- **Included Checklist:**
  1. Child-safe, non-toxic sanitisation of play tables, low shelving, and activity zones
  2. Nappy change stations, toddler toilets, hand basins, and wet area disinfection
  3. Cot rooms, sleep mats, and quiet area allergen-free vacuuming and wiping
  4. Commercial bottle-prep and centre kitchen hygiene cleaning
  5. Low-level internal glass, finger-mark removal, and entry door sanitisation
  6. Strict colour-coded cleaning cloths and mops isolating bathroom vs. play/food zones
  7. Signed daily cleaning & hygiene verification checklists for centre directors
  8. 100% WWCC and Police-Checked staff trained in infection control protocols

#### 10. Aged-Care Cleaning
- **Slug:** `aged-care-cleaning`
- **Status Badge:** `HIGH-CARE STANDARDS`
- **Exact 1-Liner Intro:** `Respectful, thorough cleaning plans suited to the facility's operational needs and resident hygiene procedures.`
- **Overview Copy:** We understand that aged-care facilities are residents' homes as well as clinical support environments. Our screened, compassionate cleaners operate quietly and respectfully while maintaining rigorous infection-control standards.
- **Included Checklist:**
  1. Resident rooms, ensuites, handrails, call buttons, and mobility-aid touchpoint disinfection
  2. Communal lounges, dining rooms, activity centres, and reception presentation
  3. Slip-resistant floor cleaning procedures with clear safety signage and rapid-dry methods
  4. Strict colour-coded infection prevention and cross-contamination controls
  5. Quiet, respectful conduct around residents, nursing staff, and visiting families
  6. Assisted living common corridors, lifts, and nursing station cleaning
  7. Full compliance documentation, Police Checks, and immunisation/screening adherence
  8. Tailored daily or supplemental support schedules for WA care providers

#### 11. Medical & Healthcare Cleaning
- **Slug:** `medical-healthcare-cleaning`
- **Status Badge:** `COMING SOON` *(Client instruction: "just say coming soon infront of that")*
- **Exact 1-Liner Intro:** `Medical and healthcare cleaning — Coming Soon. Clinical-grade hygiene for GP clinics, dental practices and allied health centres.`
- **Overview Copy:** **Launching Soon Across Perth:** Nexora Cleaning Co is finalising our specialised clinical and allied healthcare cleaning division for GP clinics, physiotherapy studios, dental practices, and wellness centres. Register your interest via our enquiry form below to be notified as soon as bookings open or to discuss upcoming facility tenders.
- **Included Checklist (Upcoming Scope):**
  1. Consultation rooms, treatment beds (non-clinical surfaces), and waiting room sanitisation
  2. High-touch point disinfection (door handles, reception counters, EFTPOS terminals, armrests)
  3. Patient and staff washroom hospital-grade disinfection
  4. Colour-coded clinical zoning and documented infection control checklists
  5. Floor scrubbing and sanitisation of vinyl, tiled, and sealed clinical flooring
  6. SDS (Safety Data Sheet) registers and site compliance logs
  7. After-hours servicing to ensure zero disruption to patient appointments
  8. Priority waitlist registration available now via `cleaning@nexora.com`

#### 12. NDIS-Related Domestic Cleaning
- **Slug:** `ndis-domestic-cleaning`
- **Status Badge:** `NDIS PARTICIPANT SUPPORT`
- **Exact 1-Liner Intro:** `Reliable, respectful domestic cleaning tailored for NDIS participants (self-managed and plan-managed across Perth).`
- **Overview Copy:** Everyone deserves a clean, comfortable, and safe home environment. We work closely with NDIS participants, family carers, support coordinators, and plan managers across Western Australia to provide consistent domestic assistance matched to your goals and schedule.
- **Included Checklist:**
  1. Flexible routine cleaning of bedrooms, living areas, kitchens, and accessible bathrooms
  2. Consistent cleaner allocation so participants see a familiar, trusted face
  3. Assistance with bed linen changes, laundry folding, and dishwashing upon request
  4. Clear, itemised invoicing sent directly to participants or Plan Managers (`accounts@nexora.com`)
  5. Police-checked, empathetic team members who respect your routine and preferences
  6. Low-scent or sensitive-skin cleaning product options available on request
  7. Easy communication for Support Coordinators and family members
  8. Customisable weekly, fortnightly, or one-off deep cleaning support

---

### CATEGORY 3: BUILDERS, EVENTS & PROJECTS (`builders-events`)

#### 13. Builders & Construction Cleaning
- **Slug:** `builders-construction-cleaning`
- **Status Badge:** `SITE & HANDOVER READY`
- **Exact 1-Liner Intro:** `Rough, detailed and final handover cleans for new residential builds, commercial fit-outs or renovations.`
- **Overview Copy:** We partner with Perth builders, site supervisors, shopfitters, and developers to take construction sites from dusty work zones to defect-free client handovers on schedule.
- **Included Checklist:**
  1. **Stage 1 Rough Clean:** Removal of loose trade debris, packaging, plaster dust, and initial floor sweep/vacuum
  2. **Stage 2 Detailed Clean:** Full detailing of cabinetry inside/out, joinery, bathrooms, tiling, and fixtures
  3. **Stage 3 Final Handover Clean:** Final sparkle polish of glass, chrome, mirrors, and floors prior to client walkthrough
  4. Safe removal of manufacturer stickers, protective tape, silicone smudges, and paint flecks
  5. Window, frame, sill, and sliding door track construction dust extraction
  6. Garage, alfresco, porch, and driveway sweep/wash-down options
  7. Construction-ready PPE, White Card awareness, and full Public Liability Insurance
  8. Reliable deadline adherence for practical completion (PC) inspections

#### 14. Post-Renovation Cleaning
- **Slug:** `post-renovation-cleaning`
- **Status Badge:** `DUST & RESIDUE REMOVAL`
- **Exact 1-Liner Intro:** `Remove fine renovation dust, grout haze and trade residue safely using suitable methods for new surfaces.`
- **Overview Copy:** Renovating a kitchen, bathroom, or extension leaves ultra-fine plaster and sanding dust that settles into every crevice. Our team uses HEPA-filter vacuuming and surface-safe techniques to protect brand-new stone benchtops, cabinetry, and flooring.
- **Included Checklist:**
  1. Multi-pass fine dust extraction from walls, ceilings, cornices, and ledges
  2. Inside and outside cleaning of newly installed cabinetry, drawers, and hardware
  3. Careful removal of tile grout haze, adhesive marks, and trade footprints
  4. Air-conditioning vents, ceiling fans, light fittings, and power points detailed
  5. Non-scratch detailing of newly installed bathroom tapware, frameless glass, and fixtures
  6. Window tracks, frames, and glass cleaned free of construction dust
  7. Multi-stage vacuuming and damp microfibre mopping of new timber, tile, or hybrid floors
  8. Ready-to-live-in finish across renovated and adjacent rooms

#### 15. Pre-Event Cleaning
- **Slug:** `pre-event-cleaning`
- **Status Badge:** `VENUE PREPARATION`
- **Exact 1-Liner Intro:** `Prepare and detail your indoor or outdoor venue to immaculate presentation standards before guests arrive.`
- **Overview Copy:** Hosting a corporate launch, wedding, community festival, or private function in Perth? We ensure your venue, entryways, VIP areas, and washrooms look spotless before doors open.
- **Included Checklist:**
  1. Main hall, stage, foyer, and VIP lounge floor vacuuming and polishing
  2. Restroom deep sanitisation, mirror polishing, and soap/paper towel stocking
  3. Bar areas, catering prep spaces, and servery bench sanitisation
  4. Entry glass doors, balustrades, and outdoor patio presentation sweep
  5. Table, chair, and fixture wipe-down prior to event styling
  6. Empty bins fitted with fresh heavy-duty liners across the venue
  7. Flexible bump-in timing coordinated with your event manager
  8. Optional bundle with Post-Event Reset Cleaning for a discounted package rate

#### 16. Post-Event Cleaning
- **Slug:** `post-event-cleaning`
- **Status Badge:** `FAST VENUE RESET`
- **Exact 1-Liner Intro:** `Rapid venue reset, rubbish collection, washroom sanitisation and floor cleaning so you get your venue bond back.`
- **Overview Copy:** When the music stops, our crew steps in. Available late at night or early morning across Perth to clear event litter, sanitise bathrooms, and return hired venues, offices, or homes to their pre-event condition before bump-out deadlines.
- **Included Checklist:**
  1. Comprehensive litter picking, bottle sorting, and bagging of event waste
  2. Spill removal, sticky floor degreasing, vacuuming, and machine/hand mopping
  3. Full washroom and toilet block disinfection and deodorising
  4. Bar, kitchen, and catering area clean-down and sink sanitising
  5. Outdoor courtyard, smoking area, and car park litter sweep
  6. Surface wiping of tables, ledges, and fixtures
  7. Late-night, overnight, or early-morning weekend deployment
  8. Venue handover checklist verification to protect your hire bond

#### 17. Commercial / Strata Common-Area Cleaning
- **Slug:** `strata-common-area-cleaning`
- **Status Badge:** `STRATA & BODY CORPORATE`
- **Exact 1-Liner Intro:** `Scheduled maintenance for apartment lobbies, lifts, corridors, stairwells, shared facilities and common areas.`
- **Overview Copy:** We work with Perth strata managers, Councils of Owners, and commercial building managers to keep multi-residential and commercial complexes clean, safe, and welcoming for residents and tenants.
- **Included Checklist:**
  1. Ground-floor lobbies, foyers, intercom panels, letterboxes, and entry glass doors
  2. Lift car interiors, stainless steel polishing, mirrors, and lift door tracks
  3. Carpeted corridors vacuumed and tiled/concrete fire stairs swept and mopped
  4. Shared resident lounges, gyms, BBQ areas, and common washrooms cleaned
  5. Bin rooms swept, tidied, and deodorised
  6. Car park pedestrian walkways, cobweb removal, and external pathway tidying
  7. Immediate hazard or maintenance issue reporting (e.g., blown globes, leaks) to strata manager
  8. Consolidated monthly invoicing via `accounts@nexora.com`

#### 18. Industrial & Warehouse Cleaning
- **Slug:** `industrial-warehouse-cleaning`
- **Status Badge:** `SITE-APPROPRIATE SCOPE`
- **Exact 1-Liner Intro:** `Practical cleaning for industrial offices, crib rooms, amenities and warehouse zones Nexora is equipped and trained to handle.`
- **Overview Copy:** Supporting workshops, logistics depots, and warehouses across Welshpool, Kewdale, Malaga, Canning Vale, Henderson, and beyond. We confirm exact site requirements upfront to ensure safe, effective delivery.
- **Included Checklist:**
  1. Site administration offices, meeting rooms, and dispatch counters
  2. Staff crib rooms, lunchrooms, kitchenettes, and locker rooms
  3. High-usage industrial toilets, showers, and washroom blocks
  4. Warehouse pedestrian walkways, mezzanine floors, and packing stations
  5. Industrial dust removal from accessible shelving, ledges, and signage
  6. End-of-commercial-lease warehouse office and floor clean-ups
  7. Strict adherence to site inductions, PPE requirements, and SWMS protocols
  8. Pre-quote site assessment to confirm equipment and safety scope

---

### CATEGORY 4: SPECIALIST & EXTERIOR CLEANING (`specialist-exterior`)

#### 19. High-Pressure Washing
- **Slug:** `high-pressure-washing`
- **Status Badge:** `EXTERIOR RESTORATION`
- **Exact 1-Liner Intro:** `High-pressure surface cleaning for suitable driveways, pathways, limestone, patios, paved areas and exterior hard surfaces.`
- **Overview Copy:** Perth's sun, winter rain, bore water stains, and leaf litter can leave outdoor areas slippery and tired. Our pressure washing service blasts away moss, dirt, oil spots, and grime to restore street appeal and slip safety.
- **Included Checklist:**
  1. Concrete, exposed aggregate, and brick-paved driveways and crossovers
  2. Alfresco entertaining areas, patios, pool surrounds, and verandas
  3. Garden pathways, side access walkways, and entry steps
  4. Retaining walls, suitable limestone blocks, and exterior masonry
  5. Commercial shopfront footpaths, bin bays, and loading zones
  6. Removal of slippery moss, algae, dirt build-up, and surface grime
  7. Careful pressure regulation to protect mortar joints and surface coatings
  8. Final rinse-down of surrounding edges and adjacent areas

#### 20. Window Cleaning
- **Slug:** `window-cleaning`
- **Status Badge:** `STREAK-FREE GLASS`
- **Exact 1-Liner Intro:** `Crystal-clear interior and exterior window cleaning, sills and tracks within safe working limits.`
- **Overview Copy:** Clean windows transform the light and feel of any Perth home or shopfront. Using pure-water systems and professional squeegee techniques, we remove coastal salt spray, dust, water spots, and fingerprints safely from ground and accessible levels.
- **Included Checklist:**
  1. Interior and exterior glass panes cleaned to a streak-free shine
  2. Sliding glass doors, stacker doors, and French door panels
  3. Window frames, ledges, and aluminium/timber sills wiped down
  4. Sliding door and window track vacuuming and grime removal
  5. Flyscreen removal, light brushing/washing, and refitting upon request
  6. Pool fencing glass and internal glass balustrades (optional inclusion)
  7. Retail shopfront and ground-floor commercial office glazing
  8. Performed strictly within safe working-at-heights limits

#### 21. Carpet & Upholstery Cleaning
- **Slug:** `carpet-upholstery-cleaning`
- **Status Badge:** `TRUSTED PARTNER SERVICE` *(Client instruction: "we will use a trusted partner")*
- **Exact 1-Liner Intro:** `Professional carpet steam cleaning and upholstery restoration coordinated seamlessly through our trusted Perth specialist partner.`
- **Overview Copy:** To guarantee you receive dedicated commercial truck-mount or industrial hot-water extraction machinery, Nexora Cleaning Co delivers carpet and upholstery cleaning in partnership with our vetted specialist technician partner. Best of all, you only deal with Nexora—one booking, one coordinated schedule, and official receipts accepted by WA property managers.
- **Included Checklist:**
  1. Seamless single-point booking alongside your End-of-Lease or House Clean
  2. Pre-inspection, heavy-duty pre-vacuuming, and targeted stain pre-treatment
  3. Hot-water extraction (steam cleaning) for carpeted bedrooms, lounges, stairs, and hallways
  4. Fabric sofa, armchair, dining chair, and mattress steam sanitisation
  5. Pet hair, odour neutralisation, and dust-mite removal treatments
  6. Commercial carpet tile cleaning for offices and strata corridors
  7. Official professional carpet cleaning invoice/receipt provided for bond inspections
  8. Backed by Nexora's coordination and quality communication standards

#### 22. Tile & Grout Cleaning
- **Slug:** `tile-grout-cleaning`
- **Status Badge:** `HARD FLOOR REVIVAL`
- **Exact 1-Liner Intro:** `Specialist deep cleaning and agitation of hard tiled floors and discoloured grout lines to restore original colour.`
- **Overview Copy:** Regular mopping often pushes dirty water into porous grout lines, turning them dark and patchy over time. Our specialist tile and grout cleaning lifts embedded grease, soap residue, and soil from ceramic, porcelain, and natural tiled surfaces.
- **Included Checklist:**
  1. Pre-treatment with specialist tile and grout cleaning solutions to break down grease
  2. Mechanical agitation and deep scrubbing of recessed grout lines
  3. Kitchen, hallway, open-plan living, and alfresco tiled floor restoration
  4. Bathroom floor and wall tile deep descaling and sanitising
  5. Extraction and thorough neutralising rinse leaving zero sticky residue
  6. Safe methods tailored to ceramic, porcelain, and sealed hard surfaces
  7. Ideal for pre-sale home presentation, new homeowners, and commercial foyers
  8. Noticeable brightness improvement across high-traffic walkways

#### 23. Kitchen, Oven & Appliance Cleaning
- **Slug:** `kitchen-oven-appliance-cleaning`
- **Status Badge:** `AVAILABLE AS ADD-ON` *(Client instruction: "Standalone service or add-on. We will go as add on for that one")*
- **Exact 1-Liner Intro:** `Intensive degreasing for ovens, rangehoods, cooktops and appliances — offered as a convenient Add-On to any Nexora cleaning service.`
- **Overview Copy:** **Available as a Value-Packed Add-On:** Baked-on carbon and kitchen grease require dedicated time and specialist degreasing agents. Simply select **Kitchen, Oven & Appliance Cleaning** as an add-on when booking your Regular Clean, Deep Clean, or End-of-Lease Bond Clean for a sparkling, odour-free kitchen.
- **Included Checklist:**
  1. Complete internal oven degreasing (600mm or 900mm ovens, racks, trays, and side runners)
  2. Oven door glass detailing between and across panels where safely accessible
  3. Gas burner, electric ceramic, or induction cooktop detailing and polishing
  4. Rangehood canopy degreasing and removable metal filter soaking/cleaning
  5. Microwave interior and exterior steam-clean and sanitisation
  6. Dishwasher filter, door seal, and stainless steel exterior detailing
  7. Refrigerator/freezer interior shelf and drawer sanitising (optional add-on selection)
  8. Fume-free, food-safe finish ready for immediate cooking

#### 24. Bathroom & Toilet Deep Cleaning
- **Slug:** `bathroom-toilet-deep-cleaning`
- **Status Badge:** `HYGIENE & DESCALING`
- **Exact 1-Liner Intro:** `Intensive descaling, calcium/soap-scum removal and hospital-grade sanitisation for home bathrooms and commercial washrooms.`
- **Overview Copy:** Perth's hard water leaves stubborn calcium build-up on glass shower screens and tapware. Our dedicated bathroom and washroom restoration service targets soap scum, mould spores, grout discolouration, and odour sources.
- **Included Checklist:**
  1. Glass shower screen restoration removing hard water spots and soap scum build-up
  2. Shower recess tiles, grout lines, soap dishes, and floor waste drain detailing
  3. Bathtub, vanity basin, stone/laminate benchtop, and mirror polishing
  4. Complete toilet cistern, bowl, hinges, base, and surrounding wall disinfection
  5. Chrome, matte-black, or brushed-brass tapware and showerhead descaling
  6. Exhaust fan cover dust removal and ceiling mould spot treatment
  7. Commercial multi-cubicle washroom and urinal deep sanitisation
  8. Antibacterial floor scrubbing and odour neutralisation

#### 25. Gutter Cleaning
- **Slug:** `gutter-cleaning`
- **Status Badge:** `EXTERIOR SPECIALIST`
- **Exact 1-Liner Intro:** `Optional specialist gutter clearing service to prevent winter overflows and bushfire hazards, subject to safe access and appropriate equipment.`
- **Overview Copy:** Blocked gutters cause roof leaks, eaves damage, and bushfire risks across Western Australia. Where roof pitch, height, and site access allow safe working conditions, our team clears leaves, silt, and debris from your gutters and downpipe entries.
- **Included Checklist:**
  1. Pre-work safe access and roofline assessment prior to commencement
  2. Removal of dry leaves, twigs, moss, and roof debris from accessible box and fascia gutters
  3. Clearing of valleys and downpipe top-entry points to restore free water flow
  4. Bagging and tidy removal of all extracted gutter debris from pathways and lawns
  5. Before-and-after roof gutter photos provided upon request for landlords/homeowners
  6. Ideal before Perth's winter storms or summer bushfire season
  7. Single-storey residential and safe-access commercial properties
  8. Transparent upfront confirmation of suitability and pricing

---

## 7. Page 3: Industries We Serve (`/industries`) — Complete Production Copy

### Hero Section
- **Eyebrow:** `INDUSTRIES WE SERVE ACROSS WA`
- **Headline (`<h1>`):** `Tailored Cleaning & Compliance for Every Sector`
- **Subheadline:** `Different environments carry different risks. Nexora Cleaning Co matches screened personnel, colour-coded equipment, and documented checklists to your industry's exact operational and regulatory standards.`

### 8 Detailed Industry Sections (Full Copy & Checklists)
1. **Homes, Apartments & Prestige Residences**
   - *Summary:* From busy family homes and inner-city apartments to coastal residences and rental properties.
   - *Key Services:* Regular House Cleaning, Deep Cleaning, End-of-Lease Bond Cleaning, Move-In Cleaning, Spring Cleaning, Oven Add-Ons, Pressure Washing.
   - *Standards:* Police-checked cleaners, pet-friendly products, flexible key-safe access, and 100% satisfaction follow-up.
2. **Offices & Corporate Workplaces**
   - *Summary:* Professional environments that keep staff healthy and impress visiting clients across Perth CBD, West Perth, Subiaco, Osborne Park, and beyond.
   - *Key Services:* Daily/Weekly Office Cleaning, Boardrooms, Staff Kitchens, Restroom Consumables, Window & Carpet Partner Care.
   - *Standards:* Zero-disruption after-hours servicing, secure alarm/key-holder protocols, and dedicated account management (`admin@nexora.com`).
3. **Construction, Builders & Shopfitters**
   - *Summary:* Reliable handover partner for residential home builders, commercial contractors, and renovation specialists.
   - *Key Services:* Rough Cleans, Detailed Joinery/Glass Cleans, Final Practical Completion (PC) Sparkle Cleans, High-Pressure Driveway Washing.
   - *Standards:* Full Public Liability Insurance, PPE compliance, sticker/paint/grout-haze removal expertise, and strict deadline delivery.
4. **Schools, Colleges & Education Providers**
   - *Summary:* Clean, hygienic learning spaces that reduce student and teacher absenteeism.
   - *Key Services:* Daily Classroom & Amenities Cleaning, Staff Rooms, Gymnasiums, Term-Break Deep Cleans, Window & Hard Floor Scrubbing.
   - *Standards:* 100% Working With Children Check (WWCC) & National Police Clearance verified team, colour-coded cross-contamination prevention.
5. **Childcare & Early Learning Centres**
   - *Summary:* High-care, low-tox sanitisation supporting National Quality Standard (NQS) Health and Safety requirements.
   - *Key Services:* Playroom & Toy Zone Sanitisation, Nappy Change & Toddler Bathrooms, Cot Rooms, Bottle-Prep Kitchens.
   - *Standards:* Child-safe biodegradable disinfectants, signed daily verification logs for centre directors, and WWCC-screened staff.
6. **Aged Care & NDIS Participant Homes**
   - *Summary:* Respectful, patient, and reliable cleaning for residential care facilities and NDIS participants across Perth.
   - *Key Services:* Aged-Care Facility Support, NDIS Self-Managed & Plan-Managed Domestic Cleaning, Bathroom Descaling.
   - *Standards:* Compassionate screened staff, slip-safe floor procedures, and direct Plan Manager invoicing (`accounts@nexora.com`).
7. **Events, Venues & Hospitality Spaces**
   - *Summary:* Fast-turnaround venue preparation and post-event recovery for function centres, community halls, and corporate activations.
   - *Key Services:* Pre-Event Detailing, Overnight/Early-Morning Post-Event Reset, Waste Collection, Washroom Sanitisation.
   - *Standards:* Rapid crew deployment, venue bond checklist adherence, and flexible weekend/overnight availability.
8. **Property Managers, Real Estate, Strata & Airbnb Hosts**
   - *Summary:* A dependable single-source cleaning partner for WA property professionals managing tenant turnovers and common areas.
   - *Key Services:* REIWA-aligned Bond/Vacate Cleaning, Strata Common-Area Maintenance, Airbnb Guest Turnovers, Partner Carpet Steam Cleaning.
   - *Standards:* Before/after photo reporting, fast quote turnaround within minutes, and consolidated billing.

---

## 8. Page 4: About Nexora (`/about`) — Complete Production Copy

### Hero Section
- **Eyebrow:** `ABOUT NEXORA CLEANING CO`
- **Headline (`<h1>`):** `Raising the Standard of Professional Cleaning in Western Australia.`
- **Subheadline:** `Founded on three simple principles — verified trust, dedicated service expertise, and effortless communication — Nexora Cleaning Co delivers dependable results for Perth homes and businesses.`

### Story & Mission Copy
> Across Western Australia, property owners and facility managers face a common frustration: cleaners who rush jobs, skip checklists, fail to communicate, or quote one price on the phone and charge another on the day.
>
> **Nexora Cleaning Co** was built to do the exact opposite. Based right here in WA, we combine the personal accountability of a local team with the structured systems of a premier commercial contractor. Before a single cleaner steps onto your property, your scope of work is documented and your price is confirmed in writing. On site, our insured, police-checked personnel work systematically through a tailored room-by-room checklist—never leaving until the job meets the Nexora standard.

### Our 4 Core Commitments (Cards)
1. **Verified Screening & Insurance:** Comprehensive Public Liability Insurance, mandatory National Police Clearances, and Working With Children Checks (WWCC) for all youth and care environments.
2. **Documented Checklists on Every Job:** We don't rely on memory. Every residential, bond, builder, and commercial clean follows a written task sheet verified upon completion.
3. **Transparent Upfront Pricing + 5% Price Beat:** Free, no-obligation quotes delivered within minutes. Your price is locked in before work begins, and we beat any comparable written quote by 5%.
4. **Honest, Responsive Communication:** Whether you reach out via our mobile quote form, WhatsApp chat, phone, or `cleaning@nexora.com`, you get prompt, straightforward answers from our local coordinator.

---

## 9. Page 5: Areas We Service (`/service-areas`) — Complete Perth Suburb Directory

### Hero Section
- **Eyebrow:** `PERTH METRO & SURROUNDS`
- **Headline (`<h1>`):** `Areas We Service Across Perth & Western Australia`
- **Subheadline:** `From Yanchep in the north to Mandurah in the south and the Perth Hills in the east — our mobile cleaning teams cover the entire Perth metropolitan area.`

### Complete Regional Suburb Directory (Render as searchable/filterable regional cards)
1. **Perth CBD & Inner Suburbs (`6000–6018`):**
   - Perth CBD, West Perth, East Perth, Northbridge, Subiaco, Leederville, West Leederville, Mount Lawley, Highgate, North Perth, Victoria Park, East Victoria Park, South Perth, Como, Kensington, Burswood, Maylands, Bayswater, Inglewood, Menora.
2. **Northern Suburbs (`6020–6065`):**
   - Joondalup, Hillarys, Scarborough, Karrinyup, Innaloo, Osborne Park, Balcatta, Stirling, Morley, Dianella, Mirrabooka, Malaga, Alexander Heights, Greenwood, Kingsley, Woodvale, Padbury, Sorrento, Mullaloo, Ocean Reef, Currambine, Iluka, Mindarie, Clarkson, Butler, Alkimos, Yanchep, Wanneroo, Tapping, Landsdale, Darch.
3. **Western & Coastal Suburbs (`6008–6019`, `6159`):**
   - Cottesloe, Nedlands, Claremont, Dalkeith, Peppermint Grove, Mosman Park, Floreat, City Beach, Wembley, Wembley Downs, Churchlands, Jolimont, Shenton Park, Swanbourne, Mount Claremont, North Fremantle.
4. **Southern Suburbs & Fremantle (`6147–6169`):**
   - Fremantle, East Fremantle, Melville, Applecross, Ardross, Booragoon, Myaree, Bull Creek, Willetton, Canning Vale, Cannington, Bentley, Waterford, Riverton, Rossmoyne, Shelley, Murdoch, Kardinya, Hilton, Hamilton Hill, Spearwood, Coogee, Cockburn Central, Success, Atwell, Aubin Grove, Jandakot, Bibra Lake, Lynwood, Thornlie, Gosnells, Armadale, Byford, Harrisdale, Piara Waters.
5. **Eastern Suburbs, Airport & Perth Hills (`6054–6076`):**
   - Midland, Guildford, Bassendean, Belmont, Rivervale, Cloverdale, Redcliffe, Ascot, Kewdale, Welshpool, Forrestfield, High Wycombe, Kalamunda, Lesmurdie, Gooseberry Hill, Mundaring, Ellenbrook, Aveley, Brabham, Dayton, Caversham, Beechboro.
6. **Rockingham, Kwinana & Peel Region (`6167–6210`):**
   - Rockingham, Baldivis, Safety Bay, Waikiki, Warnbro, Secret Harbour, Port Kennedy, Kwinana, Wellard, Bertram, Mandurah, Halls Head, Falcon, Dawesville, Erskine, Greenfields, Meadow Springs, Lakelands.

---

## 10. Page 6: Contact / Request a Quote (`/contact`) — Complete Copy

### Hero Section
- **Eyebrow:** `GET IN TOUCH WITH NEXORA`
- **Headline (`<h1>`):** `Request Your 100% Free Quote Within Minutes`
- **Subheadline:** `Fill out our short mobile-friendly form below, message us on WhatsApp, or email our team directly. Price confirmed before work begins — and we beat any comparable quote by 5%.`

### Direct Departmental Contact Cards (Client's 3 Required Emails)
1. **Customer Quotes & Bookings (Main Email)**
   - **Email:** `cleaning@nexora.com`
   - **Description:** All new quote requests, booking confirmations, service customisations, and customer enquiries.
2. **Administration & Operations**
   - **Email:** `admin@nexora.com`
   - **Description:** Commercial tenders, school/childcare compliance documentation (Insurance, WWCC, Police Checks), and partnership enquiries.
3. **Accounts & Invoicing**
   - **Email:** `accounts@nexora.com`
   - **Description:** Tax invoices, strata/commercial billing, NDIS Plan Manager invoices, and remittance advice.
4. **Phone & Instant WhatsApp Chat**
   - **Phone:** `(08) 6100 0000` (Click-to-call)
   - **WhatsApp:** Instant pop-up chat available 7 days a week
   - **Hours:** Monday – Sunday: 7:00 AM – 8:00 PM AWST (24/7 commercial scheduling by arrangement)

---

## 11. Page 7: Privacy Policy & Terms of Service (`/privacy-terms`) — Full Australian Legal Copy

Render a clean, tabbed or two-column legal page compliant with the **Australian Privacy Principles (APPs)** under the *Privacy Act 1988 (Cth)* and **Australian Consumer Law (ACL)**:

### Part A: Privacy Policy (Summary of Clauses to Render in Full)
1. **Commitment to Privacy:** Nexora Cleaning Co (`nexoraCleaning.com.au`) respects your privacy and handles personal information in accordance with the *Privacy Act 1988 (Cth)* and the Australian Privacy Principles (APPs).
2. **Information We Collect:** Name, phone number, suburb/postcode/property address, email address, preferred booking dates/times, property size, and access or service notes submitted via our enquiry forms, WhatsApp, phone, or email (`cleaning@nexora.com`).
3. **How We Use Your Information:** Solely to prepare accurate cleaning quotes, confirm bookings, dispatch our cleaning crew (or our vetted carpet & upholstery specialist partner when requested), issue invoices via `accounts@nexora.com`, and follow up on service quality.
4. **Data Security & Third Parties:** We never sell or rent customer lists. Information is shared only with assigned staff/partner technicians necessary to complete your requested service.
5. **Cookies & Analytics:** Use of Google Analytics and Google Search Console to improve mobile performance and website usability.
6. **Contact for Privacy Requests:** Email `admin@nexora.com` or `cleaning@nexora.com`.

### Part B: Terms & Conditions of Service (Summary of Clauses to Render in Full)
1. **Quotes & Price Confirmation:** All quotes are 100% free and no-obligation. Final pricing is confirmed with the customer before work begins based on the property size and condition described.
2. **5% Price-Beat Guarantee:** Valid upon presentation of a current written quote from an ABN-registered, insured WA cleaning business for an identical scope of work prior to booking confirmation.
3. **Access, Electricity & Water:** For end-of-lease, move-in, and builders cleans, safe access, running water, and working electricity must be available on site at the scheduled time.
4. **Cancellations & Rescheduling:** We offer flexible rescheduling; we kindly request at least 24 hours' notice for time changes.
5. **Service Quality & Inspection Guarantee:** Any service query must be reported within 72 hours of completion so our team can promptly inspect and rectify any checklist item.

---

## 12. Backend Enquiry API Specification (`/api/enquiry/route.ts`)

Build a production-ready Next.js POST Route Handler at `src/app/api/enquiry/route.ts`:
- **Request Payload Interface:**
  ```ts
  export interface EnquiryPayload {
    name: string;                  // REQUIRED
    phone: string;                 // REQUIRED
    suburb: string;                // REQUIRED (Address / Suburb / Postcode)
    service?: string;              // Optional (Default: End-of-lease / bond cleaning)
    email?: string;                // Optional
    preferredDate?: string;        // Optional
    preferredTimeMode?: 'flexible' | 'specific'; // Optional
    preferredTimeValue?: string;   // Optional (HH:mm or window)
    propertySize?: string;         // Optional
    notes?: string;                // Optional
    website_url?: string;          // Honeypot spam field (must be empty)
  }
  ```
- **Validation Logic:**
  1. If `website_url` is non-empty, return `200 OK` silently (blocks automated spam bots).
  2. Verify `name.trim()`, `phone.trim()`, and `suburb.trim()` are present. If any is missing, return `400 Bad Request` with a clear field error message.
  3. Format a clean HTML + plain-text email notification addressed to `cleaning@nexora.com` (with optional CC to `admin@nexora.com`) containing the exact format from the client's spreadsheet:
     ```text
     NEXORA CLEANING - ENQUIRY
     ----------------------------------------
     Service:         ${service || 'Not specified'}
     Name:            ${name}
     Phone:           ${phone}
     Email:           ${email || 'Not provided'}
     Suburb/Postcode: ${suburb}
     Preferred Date:  ${preferredDate || 'Not specified'}
     Preferred Time:  ${preferredTimeMode === 'specific' ? preferredTimeValue : 'Flexible'}
     Property Size:   ${propertySize || 'Not specified'}
     Notes:           ${notes || 'None'}
     ```
  4. Return `{ ok: true, message: "Thanks for contacting Nexora Cleaning. We've received your request and will contact you to confirm the details." }`.

---

## 13. SEO, Structured Data & Pre-Launch Checklist Implementation

### 13.1 JSON-LD Schema (`LocalBusiness` / `CleaningService`)
Inject in `src/app/layout.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "name": "Nexora Cleaning Co",
  "url": "https://www.nexoracleaning.com.au",
  "logo": "https://www.nexoracleaning.com.au/images/nexora-logo.jpg",
  "email": "cleaning@nexora.com",
  "telephone": "+61861000000",
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Perth",
    "containedInPlace": {
      "@type": "State",
      "name": "Western Australia"
    }
  },
  "description": "Professional Cleaning Solutions Across Western Australia. Reliable cleaning for homes, businesses, builders and specialist facilities across Perth."
}
```

### 13.2 Client Pre-Launch Verification Matrix
| Client Checklist Item | Implementation Requirement |
| :--- | :--- |
| Register/connect domain & set up email | Configured for `nexoraCleaning.com.au` + `cleaning@nexora.com`, `admin@nexora.com`, `accounts@nexora.com` |
| Mobile-friendly, fast-loading website | Responsive Tailwind breakpoints (`sm`, `md`, `lg`, `xl`), sticky mobile action bar, zero layout shift |
| Add Nexora Cleaning logo, colours & fonts | Extracted `nexora-logo.jpg`, Obsidian/Cyan/Royal Blue palette, `Plus Jakarta Sans` + `Inter` |
| Add click-to-call and email links | All phone links use `tel:+61861000000`; all emails use `mailto:cleaning@nexora.com` |
| Set up secure enquiry form & spam protection | Validated `<QuoteForm />` + honeypot field + `/api/enquiry` endpoint |
| All 8 main page types built | `/`, `/about`, `/services`, `/services/[slug]` (×25), `/industries`, `/service-areas`, `/contact`, `/privacy-terms` |
| Google Analytics, Search Console & GBP hooks | Built-in `NEXT_PUBLIC_GA_ID`, `google-site-verification` meta hook, and Google Business Profile footer link |

---

## 14. Master One-Shot Vibe-Coding Prompt

Copy and paste the prompt below to instruct the AI coding agent to build the entire production project in one go:

```text
Read `PROJECT_SPECIFICATION.md` in the workspace root and execute a complete, one-shot production build of the Nexora Cleaning Co website (`nexoraCleaning.com.au`).

Follow every instruction in `PROJECT_SPECIFICATION.md` without omissions:
1. Extract `xl/media/image1.jpg` from `Nexora Web info.xlsx` into `public/images/nexora-logo.jpg`.
2. Scaffold the project with Next.js (App Router), TypeScript, Tailwind CSS, and `lucide-react`.
3. Create `src/data/nexoraData.ts` containing all 4 categories, all 25 cleaning services (with their exact slugs, status badges like "COMING SOON" for Medical & Healthcare, "AVAILABLE AS ADD-ON" for Kitchen/Oven/Appliance, and "TRUSTED PARTNER SERVICE" for Carpet & Upholstery, 1-liner intros, overviews, and 8-item checklists), all 8 industries, all 6 Perth metro regions & suburbs, and all FAQs.
4. Build the Global Components: Top Promo Bar, Sticky Navbar with Services Mega-Dropdown & Mobile Drawer, Floating WhatsApp Chat Pop-up Widget, Sticky Mobile Call/Quote Bar, and Comprehensive Footer with all 3 emails (`cleaning@nexora.com`, `admin@nexora.com`, `accounts@nexora.com`).
5. Build the `<QuoteForm />` and `/api/enquiry/route.ts` endpoint enforcing required Name, Phone, and Suburb/Postcode (with all other fields optional), the 2-mode Preferred Time selector ("Flexible" vs "Specific Time & Clock"), the disappearing Notes placeholder, spam honeypot, and the exact confirmation message: "Thanks for contacting Nexora Cleaning. We've received your request and will contact you to confirm the details."
6. Build all pages with 100% of the production copy from `PROJECT_SPECIFICATION.md`:
   - `/` (All 9 homepage sections top-to-bottom)
   - `/services` (Categorised services hub)
   - `/services/[slug]` (Static generation for all 25 dedicated service pages)
   - `/industries` (All 8 WA sectors)
   - `/about` (Company story, WA focus, 4 core commitments)
   - `/service-areas` (Searchable/filterable Perth suburb directory)
   - `/contact` (All 3 departmental emails + full quote form)
   - `/privacy-terms` (Australian Privacy Principles policy + ACL service terms)
   - `sitemap.ts` and `robots.ts`
7. Run the production build (`npm run build`) and verify zero TypeScript, linting, or routing errors.
```
