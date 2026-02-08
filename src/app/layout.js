import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Providers from "./providers";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Fuel Calculator Tools – Calculate Petrol, Gas & Mileage Costs | NextCodeHub",
    template: "%s | NextCodeHub"
  },
  description: "Free fuel calculator tools to calculate petrol mileage, gas costs, MPG, and fuel expenses. Optimize your vehicle fuel efficiency and save money on every trip.",
  keywords: ["fuel calculator", "petrol mileage calculator", "gas price calculator", "mpg calculator", "fuel cost calculator", "fuel efficiency", "mileage calculator", "gas mileage"],
  authors: [{ name: "NextCodeHub" }],
  creator: "NextCodeHub",
  publisher: "NextCodeHub",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nextcodehub.com'),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Fuel Calculator Tools – Calculate Petrol, Gas & Mileage Costs",
    description: "Free fuel calculator tools to calculate petrol mileage, gas costs, MPG, and fuel expenses. Save money on fuel.",
    siteName: "NextCodeHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel Calculator Tools – Calculate Petrol, Gas & Mileage Costs",
    description: "Free fuel calculator tools to calculate petrol mileage, gas costs, MPG, and fuel expenses.",
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
  // verification: {
  //   google: 'your-google-verification-code', // Add after Google Search Console setup
  // },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NextCodeHub',
    url: 'https://nextcodehub.com',
    description: 'Learn web development with in-depth tutorials on JavaScript, React, Next.js, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nextcodehub.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NextCodeHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nextcodehub.com/logo.png',
      },
    },
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
        <meta name="google-site-verification" content="jBt3gt1Q4eH4buPymGOpuSIGmMRb2u2SiA1dPdyI3LU" />
        {/* Add Google AdSense script here after approval */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
