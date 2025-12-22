import { ROADPMAP } from "@/lib/constant";
import Image from "next/image";
import FooterCard from "./footer-card";
import RoadmapCard from "./roadmap-card";

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative pt-24">
      {/* Overlay Image */}
      <Image
        alt="Hero section overlay"
        src={"/assets/overlay/grid-overlay.png"}
        width={4320}
        height={3156}
        className="w-full h-full object-cover absolute select-none pointer-events-none z-5"
      />

      {/* Decoration */}
      <Image
        alt="Decorative plane-line"
        src="/assets/decorative/plane-line.png"
        width={501}
        height={382}
        className="w-60 h-auto absolute top-[45%] left-0 z-5"
      />
      <Image
        alt="Decorative plane"
        src="/assets/decorative/plane.png"
        width={501}
        height={382}
        className="w-32 h-auto absolute top-[10%] right-3 -rotate-12 z-5"
      />

      <div className="relative container mx-auto font-montserrat px-10 sm:px-5 3xl:px-0 z-10">
        {/* Title & Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-[300px] sm:pb-[400px] md:pb-[450px] lg:pb-[600px] xl:pb-[700px]">
          <div className="text-white space-y-8 pt-24">
            <h1
              data-aos="fade-down"
              className="text-4xl sm:text-5xl font-semibold"
            >
              Roadmap to Global Education
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              EduChain is rolling out in phases, from infrastructure and
              marketplace, to AI-powered assessments and full DAO governance
            </p>
          </div>

          <div className="flex flex-col gap-15">
            {ROADPMAP.map((item, index) => (
              <RoadmapCard key={index} index={index} item={item} />
            ))}
          </div>
        </div>

        <FooterCard />
      </div>
    </section>
  );
}
