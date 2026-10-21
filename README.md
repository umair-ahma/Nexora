# Nexora Cleaning Co — Western Australia Website (`nexoraCleaning.com.au`)

Production website for **Nexora Cleaning Co** (Perth & Western Australia), built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## Key Features Implemented

- **Brand & Logo Identity:** Uses the extracted Nexora Cleaning Co logo (`public/images/nexora-logo.jpg`) and the Obsidian Navy (`#050811`), Brand Blue (`#0080F0`), Electric Cyan (`#10C0FF`), and Crisp White (`#FFFFFF`) colour palette.
- **3 Core Structural Pillars:**
  1. **Trust:** WA-based business, Public Liability Insurance, National Police Checks, relevant Working With Children Checks (WWCC), trained staff, and documented cleaning checklists.
  2. **Services:** Categorised overview (`/services`) plus **25 dedicated individual service pages** (`/services/[slug]`) across 4 core divisions:
     - *Residential Cleaning* (Regular, Deep, End-of-Lease/Bond, Move-In, Spring, Airbnb)
     - *Commercial & Specialist Facilities* (Office, School, Childcare, Aged Care, Medical & Healthcare [`COMING SOON`], NDIS Domestic)
     - *Builders, Events & Projects* (Builders/Construction, Post-Renovation, Pre-Event, Post-Event, Strata Common-Area, Industrial/Warehouse)
     - *Specialist & Exterior Cleaning* (High-Pressure Washing, Window Cleaning, Carpet & Upholstery [`TRUSTED PARTNER SERVICE`], Tile & Grout, Kitchen/Oven/Appliance [`AVAILABLE AS ADD-ON`], Bathroom/Toilet Deep Clean, Gutter Cleaning)
  3. **Enquiries:** Mobile-first `<QuoteForm />` where **only Name, Phone, and Suburb/Postcode are required**; all other fields are optional, featuring the **2-option Preferred Time selector** (`1. Flexible` vs `2. Time & Clock`), disappearing Notes placeholder, spam honeypot, **"We Beat All Quotes by 5%"** badge, **"100% Free Quote Within a Few Minutes"** badge, and the exact post-submission confirmation message.
- **Floating WhatsApp Pop-Up Chat Widget** & **Sticky Mobile Call/Quote Bar**.
- **3 Configured Departmental Emails:**
  - `cleaning@nexora.com` *(Main website enquiry & customer email)*
  - `admin@nexora.com` *(Administration & compliance)*
  - `accounts@nexora.com` *(Accounts, strata & NDIS invoicing)*

---

## Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
npm start
```

---

## Pushing to Git

This repository is initialised with Git and includes a clean `.gitignore`. To push to your remote GitHub/GitLab repository:

```bash
git remote add origin <your-git-repo-url>
git branch -M main
git push -u origin main
```
