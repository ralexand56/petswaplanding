import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThePetSwap — Swap care, not cash (Major US cities)",
  description:
    "ID-verified pet parents swap sitting & walks using points, not cash. Optional insurance. First 1,000 waitlisters get 100 points.",
  openGraph: {
    title: "ThePetSwap — Community pet care",
    description:
      "Swap time, not dollars. Verified neighbors, optional insurance, points that work like credit.",
    images: [
      {
        url: "/og-image.png",
        alt: "Neighbors trading pet care with their dogs, ThePetSwap logo.",
      },
    ],
  },
  metadataBase: new URL("https://example.com"), // ← replace with your domain
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
