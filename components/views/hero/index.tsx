import Image from "next/image";
import TopBanner from "./top-banner";

export default function HeroSection() {
  return (
    <section id="home">
      <TopBanner />

      <div className="relative h-fit w-full bg-linear-to-b from-primary to-primary-dark">
        {/* Overlay Image */}
        <Image
          alt="Hero section overlay"
          src={"/assets/images/overlay/hero-overlay.png"}
          width={4320}
          height={3156}
          className="w-full h-full object-cover absolute select-none pointer-events-none z-5"
        />

        {/* Main Content */}
        <div className="container mx-auto pt-30 py-28 relative z-10 space-y-8 px-10 sm:px-5 3xl:px-0">
          <div className="space-y-7 w-full lg:w-3/4 2xl:w-1/2 text-white font-montserrat">
            <h2 className="text-3xl md:text-4xl">EduChain</h2>

            <h1 className="font-semibold text-5xl md:text-7xl lg:leading-20 bg-linear-to-b from-white to-white/80 bg-clip-text text-transparent">
              The Education Blockchain Layer
            </h1>

            <p className="text-xl md:text-2xl">
              The Global Online Education Token Standard
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white/95 rounded-4xl h-70 w-full lg:w-140" />
            <div className="bg-white/95 rounded-4xl h-70 w-full lg:w-140" />
          </div>
        </div>

        {/* Background Image */}
        <Image
          alt="Hero section image"
          src={"/assets/images/background/hero-image.png"}
          width={8663}
          height={4621}
          className="absolute object-cover bottom-0 h-full w-full z-5"
        />
      </div>
    </section>
  );
}
