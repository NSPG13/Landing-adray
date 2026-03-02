import Hero from "@/components/sections/Hero";
import DashboardPreview from "@/components/sections/DashboardPreview";
import LogoBar from "@/components/sections/LogoBar";
import Features from "@/components/sections/Features";
import Solutions from "@/components/sections/Solutions";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <DashboardPreview />
      <LogoBar />
      <Features />
      <Solutions />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}