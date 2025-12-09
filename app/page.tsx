import HeroSection from "@/components/views/hero";
import { AnimatedHighlights } from "@/components/shared/animated-highlights";
import AboutSection from "@/components/views/about";
import WhySection from "@/components/views/why";
import { HIGHLIGHT_TEXT } from "@/lib/constant";
import UtilitySection from "@/components/views/utility";

export default function Home() {
  return (
    <div className="w-full bg-background overflow-hidden">
      <HeroSection />
      <AnimatedHighlights items={HIGHLIGHT_TEXT} variant="primary" />
      <AboutSection />
      <WhySection />
      <UtilitySection />
      <AnimatedHighlights items={HIGHLIGHT_TEXT} variant="secondary" />
    </div>
  );
}
