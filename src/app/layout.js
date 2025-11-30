import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Providers from "./providers";

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
    default: "NextCodeHub - Web Development Tutorials & Tools",
    template: "%s | NextCodeHub"
  },
  description: "Learn web development with in-depth tutorials on JavaScript, React, Next.js, and more. Your ultimate resource for modern web development.",
  keywords: ["web development", "javascript", "react", "nextjs", "tutorials", "coding", "programming", "frontend", "backend"],
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
    title: "NextCodeHub - Web Development Tutorials & Tools",
    description: "Learn web development with in-depth tutorials on JavaScript, React, Next.js, and more.",
    siteName: "NextCodeHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextCodeHub - Web Development Tutorials & Tools",
    description: "Learn web development with in-depth tutorials on JavaScript, React, Next.js, and more.",
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
    google: 'your-google-verification-code', // Add after Google Search Console setup
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
