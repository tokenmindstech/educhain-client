"use client";

import { ROADPMAP } from "@/lib/constant";
import Image from "next/image";
import FooterCard from "./footer-card";
import RoadmapCard from "./roadmap-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export default function RoadmapSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="roadmap" className="relative pt-24 scroll-mt-12">
      {/* Overlay Image */}
      <Image
        alt="Roadmap section overlay"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-[300px] sm:pb-[400px] md:pb-[450px] lg:pb-[600px] xl:pb-[675px]">
          <div className="text-white space-y-8 lg:pt-24">
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

          <div className="flex flex-col gap-15 relative" data-aos="fade">
            <Carousel
              orientation="vertical"
              opts={{
                align: "start",
              }}
              plugins={[
                WheelGesturesPlugin(),
                Autoplay({
                  delay: 4000,
                }),
              ]}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="h-[550px] mt-4.5 gap-5 pr-0">
                {ROADPMAP.map((item, index) => (
                  <CarouselItem key={index} className="pt-0 pb-2 basis-1/2">
                    <RoadmapCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-5 sm:-bottom-10 left-1/2 -translate-x-1/2 flex flex-row gap-2 z-20">
              {ROADPMAP.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-1 sm:w-8 sm:h-1.5 rounded-full transition-all cursor-pointer duration-300 ${
                    index === current
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  role="button"
                  tabIndex={0}
                />
              ))}
            </div>
          </div>
        </div>

        <FooterCard />
      </div>
    </section>
  );
}
