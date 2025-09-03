export const metadata = {
  title: "ThePetSwap — Swap care, not cash (Major US cities)",
  description:
    "ID-verified pet parents swap sitting & walks using points, not cash. Optional insurance. First 1,000 waitlisters get 100 points.",
  openGraph: {
    title: "ThePetSwap — Community pet care",
    description:
      "Swap time, not dollars. Verified neighbors, optional insurance, points that work like credit.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
