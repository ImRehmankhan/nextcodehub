import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL('https://www.nextcodehub.com'),
  title: {
    default: "NextCodeHub - Free Fuel Cost & Mileage Calculators",
    template: "%s | NextCodeHub"
  },
  description: "Free fuel cost calculator, gas mileage calculator, MPG calculator, and petrol calculator. Estimate fuel expenses, track fuel economy, and calculate miles per gallon instantly.",
  keywords: [
    "fuel cost calculator",
    "fuel mileage calculator",
    "petrol mileage calculator",
    "gas mileage calculator",
    "fuel calculator",
    "gas bill calculator",
    "fuel consumption calculator",
    "fuel economy calculator",
    "miles per gallon calculator",
    "mpg calculator",
    "petrol calculator",
    "gas price calculator",
    "fuel cost estimator",
    "petrol average calculator",
    "gas and mileage calculator",
    "fuel efficiency calculator",
    "fuel average calculator",
    "fuel expense calculator",
    "gas per mile calculator",
    "fuel price calculator",
    "gas mileage estimator",
    "petrol expense calculator"
  ],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </body>
    </html>
  );
}
