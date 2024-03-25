import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Suspense } from 'react'
// import { Analytics } from '@vercel/analytics/react';
// import PlausibleProvider from 'next-plausible';

const inter = Inter({ subsets: ['latin'] });

let title = 'InstaLoRA - Instant LoRA Generator';
let description = 'Generate your LoRA in seconds';
let url = 'https://www.instalora.xyz';
let ogimage = 'public/website.png';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: "instalora.xyz",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>

      <html lang="en">
        <head>
          {/* <PlausibleProvider domain="qrgpt.io" /> */}
        </head>
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
          {/* <Analytics /> */}
          <Footer />
        </body>
      </html>
    </Suspense>
  );
}
