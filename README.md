# QRS Contracting L.L.C.

Corporate website for **QRS Contracting L.L.C.** — infrastructure specialists in irrigation, recycled water (RWN/TSE), potable water, sewerage & drainage networks, emergency repairs, and SCADA systems across the UAE.

**Live reference:** [www.qrscontracting.com](https://www.qrscontracting.com)

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (navy `#0B2A45` / gold `#E2B13C`)
- Framer Motion
- React Icons

## Features

- Multi-page site: Home, About, Services, Projects, Sustainability, Company Profile, News, Contact
- Responsive layout (mobile / tablet / desktop) with hamburger navigation
- Hero banner with company collage + left navy gradient overlay
- Services, portfolio, certifications, clients, news, and emergency CTA
- Structured project enquiry form (Web3Forms)
- Floating WhatsApp / call / back-to-top actions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & run

```bash
npm install
npm run dev
```

- Local: [http://localhost:3000](http://localhost:3000)
- Network (mobile check): `npm run dev -- -H 0.0.0.0 -p 3000`

### Build

```bash
npm run build
npm start
```

### Other scripts

```bash
npm run lint
npm run lint:fix
npm run type-check
```

## Project Structure

```
src/
├── app/                    # App Router pages & layout
│   ├── about/
│   ├── company-profile/
│   ├── contact/
│   ├── news/
│   ├── projects/
│   ├── services/
│   ├── sustainability/
│   ├── api/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── animations/
│   ├── sections/           # Home & shared sections
│   ├── ui/
│   ├── BrandLogo.tsx
│   ├── ContactForm.tsx
│   ├── FloatingActions.tsx
│   ├── Header.tsx
│   └── PageHero.tsx
└── lib/
    ├── constants.ts        # QRS content & navigation
    ├── qrs-data.json       # Live-site sourced content
    ├── types.ts
    └── utils.ts
public/
├── upload/                 # QRS media assets
├── images/banners/         # Hero banner
├── logo-header.png         # Header logo (gold + white text)
└── logo-mark.png
```

## Brand

| Token | Value |
|-------|--------|
| Navy | `#0B2A45` |
| Navy dark | `#071C2F` |
| Gold | `#E2B13C` |
| Sand | `#F5F7FA` |

## Contact

- Email: info@qrscontracting.com
- Phone: +971 52 629 7501
- Address: P.O. BOX : 78717. Dubai. UAE
- Web: www.qrscontracting.com

## License

© QRS Contracting L.L.C. All rights reserved.
