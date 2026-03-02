import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Adray — Next-gen Enterprise AI Agents",
    template: "%s | Adray",
  },
  description:
    "Accelerate the speed of business with the Adray Platform and our AI solutions for work, service, and process.",
  keywords: [
    "AI",
    "enterprise",
    "agents",
    "automation",
    "platform",
    "Adray",
  ],
  openGraph: {
    title: "Adray — Next-gen Enterprise AI Agents",
    description:
      "Accelerate the speed of business with the Adray Platform and our AI solutions for work, service, and process.",
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
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
