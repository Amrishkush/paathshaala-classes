
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import Image from "next/image"
import "./globals.css"

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Paathshaala Classes - Your Future Our Mission.",
  description: "Learn from the best with PaathshaalaClasses. Access notes, videos, and quality coaching.",
  icons: {
    icon: '/images/smalllogofavicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative min-h-screen`}>
        {/* Modern black and white backdrop */}
        <div className="fixed inset-0 z-0">
          {/* Very dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Extra dark corners overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/80"></div>
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`
          }}></div>
          
          {/* Decorative pencils positioned elegantly */}
          <div className="absolute top-16 right-16 transform rotate-45 opacity-30">
            <div className="w-2 h-32 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-full"></div>
          </div>
          <div className="absolute top-32 right-32 transform -rotate-12 opacity-20">
            <div className="w-2 h-28 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-32 left-16 transform rotate-12 opacity-25">
            <div className="w-2 h-36 bg-gradient-to-t from-red-600 to-red-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Content with higher z-index */}
        <div className="relative z-10">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
