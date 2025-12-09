import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UTILITY_FEATURES, UTILITY_USAGE } from "@/lib/constant";

export default function UtilitySection() {
  return (
    <section
      id="utility"
      className="relative h-fit min-h-screen bg-linear-to-b from-bg-background to-white w-full py-24"
    >
      <div className="container mx-auto font-montserrat text-center space-y-8 px-10 sm:px-5 3xl:px-0">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-black">
          Key Utilities
        </h1>

        <Card className="mt-15 border-3 border-white relative bg-linear-to-b from-[#1F5ADC] to-primary p-8 rounded-3xl">
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
            alt="Decorative book"
            src={"/assets/decorative/book.png"}
            width={501}
            height={382}
            className="w-28 sm:w-40 lg:w-52 xl:w-60 h-auto absolute -right-5 sm:-right-10 lg:right-13 -top-11 lg:-top-13 animate-float-vertical"
          />
          <Image
            alt="Decorative plane"
            src="/assets/decorative/plane.png"
            width={501}
            height={382}
            className="w-20 sm:w-24 lg:w-28 h-auto absolute -right-8 lg:-right-15 bottom-20 lg:bottom-15 animate-float"
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
                variant="gradient"
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
            <Card
              key={index}
              className="p-8 rounded-3xl h-full text-start gap-2 flex flex-col justify-between"
            >
              <h3 className="text-2xl font-bold white">{feature.title}</h3>
              <p className="text-sm font-medium">{feature.description}</p>

              <div className="space-y-4 mt-2 xl:mt-0">
                {feature.list.map((item, index) => (
                  <div key={index} className="flex flex-row items-center gap-3">
                    <div className="bg-white rounded-full p-0.5 shadow-[0_4px_8px_rgba(0,0,0,0.15)] h-fit">
                      <Check
                        strokeWidth={3}
                        className="size-4 shrink-0 text-black"
                      />
                    </div>

                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
