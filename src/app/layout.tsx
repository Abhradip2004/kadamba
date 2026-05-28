import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kadamba | Premium Ayurvedic Skincare",
  description: "Luxurious, elegant, nature-inspired Ayurvedic skincare brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${playfair.variable} relative min-h-screen font-sans antialiased`}
      >
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
