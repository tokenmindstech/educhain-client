import HeroSection from "@/components/views/hero";
import { AnimatedHighlights } from "@/components/shared/animated-highlights";
import { HIGHLIGHT_TEXT } from "@/lib/constant";

export default function Home() {
  return (
    <div className="w-full bg-background">
      <>
        <HeroSection />
        <AnimatedHighlights items={HIGHLIGHT_TEXT} variant="secondary" />
      </>
    </div>
  );
}
