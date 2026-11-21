import type { Metadata } from 'next'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/sections/Footer'
import { FloatingActions } from '@/components/FloatingActions'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'QRS Contracting L.L.C. | Infrastructure Solutions Across UAE',
    template: '%s | QRS Contracting L.L.C.',
  },
  description:
    'QRS Contracting L.L.C. specializes in irrigation, recycled water, potable water, sewerage & drainage networks, emergency repairs and SCADA systems across the UAE.',
  keywords: [
    'QRS Contracting',
    'Dubai infrastructure',
    'irrigation networks',
    'recycled water',
    'potable water',
    'sewerage',
    'emergency repairs',
    'DEWA',
  ],
  openGraph: {
    title: 'QRS Contracting L.L.C.',
    description: 'Infrastructure Solutions Across UAE',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} ${montserrat.variable} font-sans bg-white text-navy antialiased`}
      >
        <Header />
        <main className="overflow-x-hidden min-h-screen">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
