import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Siddharth Goel',
    template: '%s | Siddharth Goel',
  },
  description:
    "Siddharth Goel's personal website. Big-data engineer, backend engineer and vibe-coding enthusiast.",
  keywords: [
    'Siddharth Goel',
    'big data engineer',
    'software developer',
    'engineer',
    'backend engineer',
    'data scientist',
    'portfolio',
  ],
  authors: [{ name: 'Siddharth Goel' }],
  creator: 'Siddharth Goel',
  metadataBase: new URL('https://glsddhrth.github.io/siddharth'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://glsddhrth.github.io/siddharth',
    siteName: 'Siddharth Goel',
    title: 'Siddharth Goel',
    description: 'Data scientist, machine learning engineer, and full-stack developer.',
    images: [
      {
        url: '/images/me.jpg',
        width: 300,
        height: 300,
        alt: 'Siddharth Goel',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
