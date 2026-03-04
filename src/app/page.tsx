import Hero from "@/components/sections/Hero";
import HighlightedText from "@/components/sections/HighlightedText";
import Exceptionalities from "@/components/sections/Exceptionalities";
import FeaturesTabs from "@/components/sections/FeaturesTabs";
import Products from "@/components/sections/Products";
import Steps from "@/components/sections/Steps";
import DataPrivacy from "@/components/sections/DataPrivacy";
import Testimonials from "@/components/sections/Testimonials";
import HomePricing from "@/components/sections/HomePricing";
import HomeFAQ from "@/components/sections/HomeFAQ";
import HomeIntegration from "@/components/sections/HomeIntegration";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightedText />
      <Exceptionalities />
      <FeaturesTabs />
      <Products />
      <Steps />
      <DataPrivacy />
      <Testimonials />
      <HomePricing />
      <HomeFAQ />
      <HomeIntegration />
    </>
  );
}