import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UTILITY_FEATURES, UTILITY_USAGE } from "@/lib/constant";
import UtilityCard from "./utility-card";

export default function UtilitySection() {
  return (
    <section
      id="utility"
      className="relative h-fit min-h-screen bg-linear-to-b from-bg-background to-white w-full py-24"
    >
      <div className="container mx-auto font-montserrat text-center space-y-8 px-10 sm:px-5 3xl:px-0">
        {/* Title */}
        <h1
          data-aos="fade-down"
          className="text-4xl sm:text-5xl font-semibold text-black"
        >
          Key Utilities
        </h1>

        <Card
          data-aos="fade-up"
          className="mt-15 border-3 border-white relative bg-linear-to-b from-[#1F5ADC] to-primary p-8 rounded-3xl"
        >
          {/* Overlay */}
          <Image
            alt="utility section overlay"
            src={"/assets/overlay/grid-overlay.png"}
            width={4320}
            height={3156}
            className="w-full h-full object-cover absolute select-none pointer-events-none"
          />

          {/* Decorative */}
          <Image
            alt="Decorative book line"
            src={"/assets/decorative/book-line.png"}
            width={1523}
            height={914}
            className="w-40 sm:w-50 lg:w-60 xl:w-90 h-auto absolute right-0 lg:right-6 top -top-10 lg:-top-15"
          />
          <Image
            alt="Decorative plane"
            src="/assets/decorative/plane.png"
            width={501}
            height={382}
            className="w-20 sm:w-24 lg:w-28 h-auto absolute -right-8 lg:-right-15 bottom-20 lg:bottom-15"
          />

          {/* Content */}
          <div className="flex flex-col gap-5 text-white">
            <div className="text-start space-y-2">
              <h2 className="font-semibold text-2xl">
                Universal Blockchain Certificates
              </h2>
              <p className="w-full md:w-3/4 font-light text-white/80">
                Issue tamper-proof, on-chain diplomas and certificates for any
                school, platform, or university
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row justify-between">
              <div className="mt-2 text-start flex flex-col gap-4">
                {UTILITY_USAGE.map((item, index) => (
                  <div key={index} className="flex flex-row gap-3">
                    <div className="bg-linear-to-b from-primary to-white border border-white to-60% rounded-full p-0.5 shadow-2xl h-fit mt-0.5">
                      <Check
                        strokeWidth={3}
                        className="size-4 shrink-0 text-black"
                      />
                    </div>

                    <p className="text-sm lg:text-base">{item}</p>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                variant="gradientSecondary"
                className="self-center sm:self-end w-full sm:w-auto text-xs sm:text-sm"
              >
                Fee to issue each certificate?
              </Button>
            </div>
          </div>
        </Card>

        {/* Feature Cards */}
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {UTILITY_FEATURES.map((feature, index) => (
            <UtilityCard key={index} index={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
