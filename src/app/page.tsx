import Hero from "@/components/sections/Hero";
import HighlightedText from "@/components/sections/HighlightedText";
import Exceptionalities from "@/components/sections/Exceptionalities";
import FeaturesTabs from "@/components/sections/FeaturesTabs";
import Steps from "@/components/sections/Steps";
import DataPrivacy from "@/components/sections/DataPrivacy";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightedText />
      <Exceptionalities />
      <FeaturesTabs />
      <Steps />
      <DataPrivacy />
      <Testimonials />
    </>
  );
}