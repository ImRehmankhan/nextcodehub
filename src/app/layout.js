import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL('https://www.nextcodehub.com'),
  title: {
    default: "NextCodeHub - Fuel Cost & Mileage Calculators",
    template: "%s | NextCodeHub"
  },
  description: "Calculate your fuel costs, mpg, and vehicle efficiency effortlessly with our free suite of calculators.",
  keywords: ["fuel calculator", "mpg calculator", "gas mileage calculator", "fuel cost estimator", "fuel economy"],
  openGraph: {
    title: "NextCodeHub - Fuel Calculators",
    description: "Free tools to calculate your fuel expenses, mpg, and vehicle efficiency.",
    url: 'https://www.nextcodehub.com',
    siteName: 'NextCodeHub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NextCodeHub - Fuel Calculators",
    description: "Free tools to calculate your fuel expenses, mpg, and vehicle efficiency.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>




      </head>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
