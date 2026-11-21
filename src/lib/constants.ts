import qrs from './qrs-data.json'

export const COMPANY_INFO = {
  name: qrs.company.name,
  shortName: 'QRS CONTRACTING L.L.C',
  tagline: 'QUALITY • RELIABILITY • SOLUTIONS',
  email: qrs.company.email,
  phone: qrs.company.phone,
  address: qrs.company.address,
  whatsapp: qrs.company.whatsapp,
  mapEmbed: qrs.company.map,
  logo: qrs.company.logo,
  footerLogo: qrs.company.footerLogo,
  aboutImage: qrs.company.aboutImage,
  homeAboutImage: qrs.company.homeAboutImage,
  contactImage: qrs.company.contactImage,
  serviceImage: qrs.company.serviceImage,
  blogImage: qrs.company.blogImage,
  website: 'www.qrscontracting.com',
  social: {
    facebook: qrs.social.find((s) => /facebook/i.test(s.title))?.link || '#',
    youtube: qrs.social.find((s) => /youtube/i.test(s.title))?.link || '#',
    instagram: qrs.social.find((s) => /instagram/i.test(s.title))?.link || '#',
    linkedin: qrs.social.find((s) => /linkedin/i.test(s.title))?.link || '#',
    twitter: qrs.social.find((s) => /twitter/i.test(s.title))?.link || '#',
    tiktok: qrs.social.find((s) => /tiktok/i.test(s.title))?.link || '#',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Company Profile', href: '/company-profile' },
  { label: 'News & Updates', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
]

export const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: 'DELIVERING QUALITY',
    title: 'INFRASTRUCTURE SOLUTIONS ACROSS',
    highlight: 'UAE',
    description:
      'Specialized in Irrigation, Recycled Water, Potable Water, Sewerage & Drainage Networks and Emergency Repairs.',
    image: qrs.sliders[1]?.image || qrs.sliders[0]?.image,
  },
  {
    id: 2,
    eyebrow: 'DELIVERING QUALITY',
    title: 'LEADING INFRASTRUCTURE & UTILITY SOLUTIONS IN',
    highlight: 'DUBAI',
    description:
      qrs.sliders[3]?.description ||
      'Reliable pipeline construction, valve chambers, tie-ins and utility works across the UAE.',
    image: qrs.sliders[3]?.image || qrs.sliders[0]?.image,
  },
  {
    id: 3,
    eyebrow: 'ALWAYS READY',
    title: '24/7 EMERGENCY RESPONSE FOR WATER &',
    highlight: 'IRRIGATION',
    description:
      qrs.sliders[2]?.description ||
      'Rapid shutdown works and emergency repairs for critical water and irrigation networks.',
    image: qrs.sliders[2]?.image || qrs.sliders[0]?.image,
  },
  {
    id: 4,
    eyebrow: 'QUALITY • RELIABILITY • SOLUTIONS',
    title: 'BUILDING SUSTAINABLE NETWORKS ACROSS',
    highlight: 'UAE',
    description:
      'From irrigation and RWN/TSE systems to SCADA integration — delivered to municipality and DEWA standards.',
    image: qrs.sliders[0]?.image,
  },
]

const content = qrs.content as unknown as Record<string, { title: string; description: string }>

export const ABOUT_CONTENT = {
  eyebrow: 'WHO WE ARE ?',
  headline: content['Home About']?.title || 'About QRS Contracting',
  description:
    content['Home About']?.description ||
    'QRS Contracting L.L.C. was established in 2023, embracing the vision of the United Arab Emirates in turning challenges into opportunities.',
  pillars: [
    {
      title: content['Home About 1']?.title || 'Distinction',
      description:
        content['Home About 1']?.description ||
        'Delivering excellence in every project through quality workmanship and continuous improvement.',
    },
    {
      title: content['Home About 2']?.title || 'Transparency',
      description:
        content['Home About 2']?.description ||
        'Building trust through open communication, honesty, and accountability.',
    },
    {
      title: content['Home About 3']?.title || 'Creativity',
      description:
        content['Home About 3']?.description ||
        'Providing innovative and practical solutions to meet the evolving needs of our clients and projects.',
    },
  ],
  years: {
    value: content['Home About Years']?.title || '12',
    label: content['Home About Years']?.description || 'years of experience',
  },
  team: {
    title: content['Home Features']?.title || 'Our Team',
    description: content['Home Features']?.description || '',
  },
  vision: {
    title: content['Home Features 1']?.title || 'Our Vision',
    description: content['Home Features 1']?.description || '',
  },
  mission: {
    title: content['Home Features 2']?.title || 'Our Mission',
    description: content['Home Features 2']?.description || '',
  },
  quality: {
    title: content['Home Features 3']?.title || 'Quality & Environment',
    description: content['Home Features 3']?.description || '',
  },
  values: [
    { title: 'Excellence', description: 'Delivering superior quality and performance.' },
    { title: 'Integrity', description: 'Acting with honesty, transparency, and accountability.' },
    { title: 'Safety', description: 'Maintaining the highest health and safety standards.' },
    { title: 'Innovation', description: 'Creating practical and effective engineering solutions.' },
    { title: 'Sustainability', description: 'Supporting environmentally responsible practices.' },
    { title: 'Client Satisfaction', description: 'Building long-term partnerships through trust and reliability.' },
  ],
  hse:
    'Safety is at the heart of everything we do. We are committed to protecting our workforce, clients, and the environment through proactive risk management, continuous training, and strict compliance with HSE standards.',
  valueEngineering:
    'At QRS Contracting L.L.C., we are committed to delivering cost-effective and sustainable infrastructure solutions through value engineering that optimizes performance, reduces construction costs, and improves operational efficiency without compromising quality, safety, or functionality.',
  whatWeDo:
    'QRS Contracting L.L.C. specializes in infrastructure construction, maintenance, rehabilitation, and emergency repair services across the UAE. Our expertise includes Irrigation & Recycled Water Networks (RWN/TSE), Potable Water Networks, Sewerage & Drainage Networks, Pipeline Works, Valve Chambers, SCADA Integration, and Civil Infrastructure Services, delivered in compliance with Dubai Municipality and DEWA standards.',
}

export const STATS = [
  {
    value: content['Home Count 1']?.title || '100+',
    label: content['Home Count 1']?.description || 'Projects Completed',
  },
  {
    value: content['Home Count 2']?.title || '24/7',
    label: content['Home Count 2']?.description || 'Emergency Response',
  },
  {
    value: content['Home Count 3']?.title || '30+',
    label: content['Home Count 3']?.description || 'Years Combined Experience',
  },
  {
    value: content['Home Count 4']?.title || '100%',
    label: content['Home Count 4']?.description || 'Commitment to Quality & Safety',
  },
]

const SERVICE_META: Record<
  string,
  { slug: string; icon: string; description: string; image: string }
> = {
  'Irrigation Networks': {
    slug: 'irrigation-networks',
    icon: 'leaf',
    description:
      'Design, installation and maintenance of irrigation networks supporting sustainable landscaping and green infrastructure across the UAE.',
    image: '/upload/1738690181_e2tfyq93VAc4xOt9eEb1l3t8Y.png',
  },
  'Recycled Water Networks (RWN/TSE)': {
    slug: 'recycled-water-networks',
    icon: 'recycle',
    description:
      'Specialized recycled water and TSE network works including diversion, tie-ins, chambers and commissioning for efficient water reuse.',
    image: '/upload/1780041177_VnUdONQT0vQJce3JH9B1c9a6R.jpeg',
  },
  'Potable Water Networks': {
    slug: 'potable-water-networks',
    icon: 'faucet',
    description:
      'Potable water pipeline construction, valve replacement, pressure testing and network rehabilitation to municipality standards.',
    image: '/upload/1739271944_cvwxvdp84o8Sr94QWB6zCLD32.jpg',
  },
  'Sewerage & Drainage Networks': {
    slug: 'sewerage-drainage-networks',
    icon: 'gauge',
    description:
      'Sewerage and stormwater drainage networks including pipeline laying, manholes, rehabilitation and emergency repair works.',
    image: '/upload/1780040785_bUaqrwwIZTBr0iWVP3hYm23gC.jpeg',
  },
  'Emergency Repairs & Shutdown Works': {
    slug: 'emergency-repairs',
    icon: 'siren',
    description:
      '24/7 emergency response for water and irrigation networks — rapid shutdowns, repairs and reinstatement with minimal disruption.',
    image: '/upload/1739271906_tMS9e7fBt9JUSdRFSugLThxTN.png',
  },
  'SCADA, RTU & Flow Meter Systems': {
    slug: 'scada-rtu-flow-meters',
    icon: 'circuit',
    description:
      'Integration of SCADA, RTU and flow meter systems for real-time monitoring, control and performance of utility networks.',
    image: '/upload/1738686050_3udIjAnK071M5QtnuwHNX6ajU.jpg',
  },
  'Civil Infrastructure Works': {
    slug: 'civil-infrastructure',
    icon: 'hardhat',
    description:
      'Civil works supporting utility infrastructure — chambers, formwork, excavation, reinstatement and associated site construction.',
    image: '/upload/1738694556_NnjG8LB2vWUPA4GKoyM9XmJ8o.jpg',
  },
}

const SERVICE_ORDER = [
  'Irrigation Networks',
  'Recycled Water Networks (RWN/TSE)',
  'Potable Water Networks',
  'Sewerage & Drainage Networks',
  'Emergency Repairs & Shutdown Works',
  'SCADA, RTU & Flow Meter Systems',
  'Civil Infrastructure Works',
]

export const SERVICES = [...qrs.services]
  .sort((a, b) => {
    const ai = SERVICE_ORDER.indexOf(a.name)
    const bi = SERVICE_ORDER.indexOf(b.name)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })
  .map((s) => {
    const meta = SERVICE_META[s.name] || {
      slug: s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      icon: 'hardhat',
      description:
        'Professional infrastructure contracting services delivered with quality, safety and reliability.',
      image: COMPANY_INFO.serviceImage,
    }
    return {
      id: String(s.id),
      title: s.name,
      ...meta,
    }
  })

export const FEATURED_PROJECTS = [
  {
    id: 'p1',
    title: 'RWN Diversion Works Nad Al Sheba 4',
    image: '/upload/1780041177_VnUdONQT0vQJce3JH9B1c9a6R.jpeg',
    category: 'Recycled Water',
  },
  {
    id: 'p2',
    title: 'DN700 Butterfly Valve Replacement',
    image: '/upload/1739271944_cvwxvdp84o8Sr94QWB6zCLD32.jpg',
    category: 'Potable Water',
  },
  {
    id: 'p3',
    title: 'Irrigation Network Upgrade Works',
    image: '/upload/1738690181_e2tfyq93VAc4xOt9eEb1l3t8Y.png',
    category: 'Irrigation',
  },
  {
    id: 'p4',
    title: 'Emergency Pipeline Shutdown & Repair',
    image: '/upload/1739271906_tMS9e7fBt9JUSdRFSugLThxTN.png',
    category: 'Emergency',
  },
]

export const PROJECTS = [
  ...FEATURED_PROJECTS,
  ...qrs.products.map((p, i) => ({
    id: `prod-${p.id}`,
    title: p.name,
    image:
      p.image ||
      qrs.projectItems[i]?.images?.[0] ||
      FEATURED_PROJECTS[i % FEATURED_PROJECTS.length].image,
    category: 'Infrastructure',
    description: p.description,
  })),
  ...qrs.projectItems.slice(0, 12).map((p) => ({
    id: `apr-${p.id}`,
    title: p.title.replace(/\s+/g, ' ').trim(),
    image: p.images[0] || FEATURED_PROJECTS[0].image,
    gallery: p.images,
    category: 'Approvals & Projects',
  })),
]

export const NEWS = qrs.blogs.map((b) => ({
  id: String(b.id),
  slug: b.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
  title: b.title,
  image: b.image,
  date: b.date,
  excerpt: b.excerpt + '…',
  description: b.description,
}))

export const SUSTAINABILITY_CARDS = qrs.sustainability.map((s) => ({
  id: String(s.id),
  title: s.title,
  image: s.image,
  description: s.description,
}))

export const CLIENTS = qrs.clients

export const CERTIFICATES = qrs.certificates

export const FOOTER_CONTENT = {
  aboutTitle: content['Footer']?.title || 'About QRS Contracting',
  aboutText:
    content['Footer']?.description ||
    'QRS Contracting L.L.C. delivers sustainable, cost-effective and high-quality infrastructure solutions across the UAE.',
  copyright: `© ${new Date().getFullYear()} QRS Contracting L.L.C. All rights reserved.`,
}
