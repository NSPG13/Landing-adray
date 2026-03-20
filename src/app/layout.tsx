import type { Metadata } from "next";
import { Inter, Space_Grotesk, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Adray — Marketing data analytics for the generative era.",
    template: "%s | Adray",
  },
  description:
    "Power your AI with your full marketing stack — Meta, Google, GA4, Shopify — packed into one secure, portable link.",
  keywords: [
    "AI",
    "marketing",
    "analytics",
    "data",
    "Meta",
    "Google",
    "Shopify",
    "ecommerce",
    "Adray",
  ],
  openGraph: {
    title: "Adray — Marketing data analytics for the generative era.",
    description:
      "Power your AI with your full marketing stack — Meta, Google, GA4, Shopify — packed into one secure, portable link.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${interTight.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
