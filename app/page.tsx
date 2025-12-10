import HeroSection from "@/components/views/hero";
import { AnimatedHighlights } from "@/components/shared/animated-highlights";
import AboutSection from "@/components/views/about";
import WhySection from "@/components/views/why";
import { HIGHLIGHT_TEXT } from "@/lib/constant";
import UtilitySection from "@/components/views/utility";
import TokenomicsSection from "@/components/views/tokenomics";
import RoadmapSection from "@/components/views/roadmap";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="w-full bg-background overflow-hidden">
      <HeroSection />
      <AnimatedHighlights items={HIGHLIGHT_TEXT} variant="primary" />
      <AboutSection />
      <WhySection />
      <UtilitySection />
      <TokenomicsSection />
      <AnimatedHighlights items={HIGHLIGHT_TEXT} variant="secondary" />
      <div className="bg-radial-solution">
        <RoadmapSection />
        <Footer />
      </div>
    </div>
  );
}
