import HeroSection from "@/components/views/hero";
import { AnimatedHighlights } from "@/components/shared/animated-highlights";
import { HIGHLIGHT_TEXT } from "@/lib/constant";
import AboutSection from "@/components/views/about";

export default function Home() {
  return (
    <div className="w-full bg-background overflow-hidden">
      <>
        <HeroSection />
        <AnimatedHighlights items={HIGHLIGHT_TEXT} />
      </>
      <AboutSection />
    </div>
  );
}
