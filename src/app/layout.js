import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL('https://www.nextcodehub.com'),
  title: {
    default: "NextCodeHub - Free Fuel Cost & Mileage Calculators",
    template: "%s | NextCodeHub"
  },
  description: "Free fuel cost calculator, gas mileage calculator, MPG calculator, and petrol calculator. Estimate fuel expenses, track fuel economy, and calculate miles per gallon instantly.",
  authors: [{ name: 'NextCodeHub Team', url: 'https://www.nextcodehub.com' }],
  creator: 'NextCodeHub',
  publisher: 'NextCodeHub',
  category: 'Calculator Tools',
  openGraph: {
    title: "NextCodeHub - Free Fuel Cost & Mileage Calculators",
    description: "Free fuel cost calculator, gas mileage calculator, MPG calculator, and petrol calculator. Calculate fuel expenses and track vehicle efficiency instantly.",
    url: 'https://www.nextcodehub.com',
    siteName: 'NextCodeHub',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextCodeHub - Free Fuel Cost & Mileage Calculators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NextCodeHub - Free Fuel Cost & Mileage Calculators",
    description: "Free fuel cost calculator, gas mileage calculator, MPG calculator, and petrol calculator. Calculate fuel expenses instantly.",
    images: ['/og-image.png'],
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
  verification: {
    google: 'jBt3gt1Q4eH4buPymGOpuSIGmMRb2u2SiA1dPdyI3LU',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/icon.svg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CKPELM8QEE"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CKPELM8QEE');
          `}
        </Script>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
      </head>

      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900" suppressHydrationWarning>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-primary-700 focus:font-bold focus:shadow-lg focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
