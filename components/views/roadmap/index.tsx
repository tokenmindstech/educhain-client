import { Card } from "@/components/ui/card";
import { ROADPMAP } from "@/lib/constant";
import Image from "next/image";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 pb-[300px] sm:pb-[400px] md:pb-[450px] lg:pb-[600px] xl:pb-[700px]">
          <div className="text-white space-y-8">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Roadmap to Global Education
            </h1>
            <p>
              EduChain is rolling out in phases, from infrastructure and
              marketplace, to AI-powered assessments and full DAO governance
            </p>
          </div>

          <div className="flex flex-col gap-15">
            {ROADPMAP.map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl bg-radial-problem p-8 border-3 border-white shadow-xl"
              >
                {/* Timeline Badge */}
                <div className="bg-radial-solution w-fit backdrop-blur-sm rounded-full px-4 py-1.5 absolute -top-5 left-6 sm:left-8">
                  <h2 className="text-base font-semibold text-white">
                    {item.timeline}
                  </h2>
                </div>

                {/* Milestones */}
                <ul className="space-y-3 text-black font-semibold">
                  {item.milestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-black shrink-0">•</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        {milestone}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <Card className="p-5 sm:p-10 lg:p-15 absolute -bottom-15 left-10 right-10 sm:left-5 sm:right-5 3xl:left-0 3xl:right-0 bg-linear-to-b from-primary to-primary-dark border-white/50 border-3 rounded-4xl flex items-center justify-end shadow-xl">
          <Image
            alt="Roadmap image"
            src="/assets/image/roadmap-image.png"
            width={3240}
            height={981}
            className="w-9/10 mx-auto h-auto object-cover"
          />

          <div className="text-white space-y-4 md:space-y-6 text-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold">
              Help Build the Future of Global Education
            </h1>
            <p className="text-xs lg:text-base">
              EduChain is turning education into a transparent, verifiable, and
              borderless ecosystem
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
