import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant"
})

const jost = Jost({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost"
})

const dmMono = DM_Mono({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono"
})

export const metadata: Metadata = {
  title: 'Bali vs Cape Town | Real Estate Investment Brief',
  description: 'Comparison of Two Global Ocean Real Estate Markets — Opportunities for Investors and Brokers. Analysis by Kristina Kuchinskaya.',
  generator: 'v0.app',
  openGraph: {
    title: 'Bali vs Cape Town | Real Estate Investment Brief',
    description: 'Comparison of Two Global Ocean Real Estate Markets — Opportunities for Investors and Brokers',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
