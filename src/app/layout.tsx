import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vettedtrainers.com"),
  title: {
    default: "Vetted Trainers | Personal Training in Frederick, MD",
    template: "%s | Vetted Trainers",
  },
  description: "Vetted Trainers offers personal training services in Frederick, Maryland. Private gym, weight loss, and virtual training options. Transform your fitness with our expert team.",
  keywords: [
    "personal trainer Frederick MD",
    "personal training Frederick Maryland",
    "private gym training",
    "weight loss programs",
    "virtual personal training",
    "fitness trainer Frederick",
    "strength training Maryland",
    "Vetted Trainers",
  ],
  authors: [{ name: "Vetted Trainers" }],
  creator: "Vetted Trainers",
  publisher: "Vetted Trainers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vettedtrainers.com",
    siteName: "Vetted Trainers",
    title: "Vetted Trainers | Personal Training in Frederick, MD",
    description: "Transform your fitness with Vetted Trainers. Private gym, weight loss, and virtual personal training in Frederick, Maryland.",
    images: [
      {
        url: "/images/get-to-work.jpg",
        width: 1200,
        height: 630,
        alt: "Vetted Trainers - Personal Training in Frederick, MD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vetted Trainers | Personal Training in Frederick, MD",
    description: "Transform your fitness with Vetted Trainers. Private gym, weight loss, and virtual personal training in Frederick, Maryland.",
    images: ["/images/get-to-work.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.vettedtrainers.com",
  name: "Vetted Trainers",
  description: "Personal training services in Frederick, Maryland. Private gym, weight loss, and virtual training options.",
  url: "https://www.vettedtrainers.com",
  telephone: "+1-240-397-0240",
  email: "Tony@vettedtrainers.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5712 Industry Lane Unit E",
    addressLocality: "Frederick",
    addressRegion: "MD",
    postalCode: "21703",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.3876,
    longitude: -77.4208,
  },
  image: "https://www.vettedtrainers.com/images/vetted-logo.png",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "06:00",
    closes: "20:00",
  },
  // Aggregate rating from Google Reviews
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/Vettedtrainers/",
    "https://www.instagram.com/vettedtrainers/",
    "https://www.youtube.com/channel/UCMTekJJglOmXvy3AZGjbQYw",
    "https://www.tiktok.com/@vettedtrainers",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Personal Training Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Gym Personal Training",
          description: "One-on-one training in our private gym facility with myofascial release.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Weight Loss Programs",
          description: "Personal training at your location in Frederick, Maryland.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Virtual Training",
          description: "Online personal training sessions accessible from anywhere.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-auto`}>
      <head>
        <link rel="icon" href="/images/vt-favicon.png" />
        <link rel="apple-touch-icon" href="/images/vt-favicon.png" />
        <link rel="canonical" href="https://www.vettedtrainers.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#181818] text-white antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
