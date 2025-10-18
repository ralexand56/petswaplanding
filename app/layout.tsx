// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MetaPixel from "./components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thepetswap.com"),
  title: {
    default: "PetSwap – Free, Trusted Pet Care Exchange",
    template: "%s | PetSwap",
  },
  description:
    "Join The PetSwap community – a peer-to-peer pet care exchange where pet owners help each other. Find trusted, verified sitters near you and stop paying for pet sitting.",
  keywords: [
    "pet swap",
    "The PetSwap",
    "free pet sitting",
    "community pet care",
    "peer to peer pet care",
    "pet sitting exchange",
    "local pet community",
    "pet care exchange",
    "trusted pet sitter community",
    "StopPayingStartSwapping",
  ],
  openGraph: {
    title: "PetSwap – Swap Care, Not Cash",
    description:
      "Find trusted, verified pet sitters near you. Join a safe pet care exchange where pet owners help each other. Free and community-driven.",
    url: "https://thepetswap.com",
    siteName: "ThePetSwap",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "PetSwap – Swap care, not cash",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetSwap – Free, Trusted Pet Care Exchange",
    description:
      "Join the Los Angeles pet community where pet owners swap care, not cash. Verified sitters. Safe and local.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
    other: [{ rel: "manifest", url: "/manifest.json" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thepetswap.com/#organization",
    name: "The PetSwap",
    url: "https://thepetswap.com",
    slogan: "Swap care, not cash",
    logo: "https://thepetswap.com/images/logo.png",
    // sameAs: ['https://instagram.com/…','https://x.com/…'],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thepetswap.com/#website",
    url: "https://thepetswap.com",
    name: "The PetSwap",
    inLanguage: "en-US",
    publisher: { "@id": "https://thepetswap.com/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thepetswap.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const app = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://thepetswap.com/#webapp",
    name: "PetSwap",
    url: "https://thepetswap.com",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    description:
      "Peer-to-peer pet care exchange: find trusted neighbors, earn and spend points, and get free pet sitting.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    areaServed: [
      { "@type": "City", name: "Los Angeles" },
      { "@type": "Country", name: "United States" },
    ],
    creator: { "@id": "https://thepetswap.com/#organization" },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }}
        />
      </head>
      <body className={`${inter.className} bg-bg text-ink antialiased`}>
        <MetaPixel /> {children}
      </body>
    </html>
  );
}
