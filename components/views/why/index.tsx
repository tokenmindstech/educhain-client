import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { PROBLEM, SOLUTION } from "@/lib/constant";

export default function WhySection() {
  return (
    <section
      id="why"
      className="relative h-fit min-h-screen w-full py-24 px-10 sm:px-5 3xl:px-0"
    >
      <div className="mx-auto container font-montserrat text-center space-y-5 ">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-black">
          Why Educhain
        </h1>
        <p
          className="text-muted-foreground tracking-widest text-black"
          style={{ letterSpacing: "0.5rem" }}
        >
          EDUCHAIN FIXES THE PROBLEM
        </p>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-10 items-center justify-center mt-24">
          {/* LEFT */}
          <Card className="relative bg-radial-problem w-full sm:w-[430px] p-6 py-12 border-3 border-white text-black rounded-3xl shadow-xl">
            <Image
              alt="Decorative warning"
              src={"/assets/decorative/warning.png"}
              width={331}
              height={302}
              className="w-24 lg:w-30 h-auto absolute -left-10 -top-12"
            />

            <h2 className="text-2xl font-semibold">The Problem</h2>

            <div className="mt-2 text-start flex flex-col gap-4">
              {PROBLEM.map((item, index) => (
                <div key={index} className="flex flex-row gap-3">
                  <div className="bg-white rounded-full p-0.5 shadow-2xl h-fit mt-0.5">
                    <X className="size-4 shrink-0" />
                  </div>

                  <p className="text-sm lg:text-base">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* RIGHT */}
          <Card className="relative bg-radial-solution w-full sm:w-[430px] p-6 py-12 border-3 border-white text-white rounded-3xl shadow-xl">
            <Image
              alt="Decorative lamp"
              src={"/assets/decorative/lamp.png"}
              width={300}
              height={352}
              className="w-24 lg:w-30 h-auto absolute -right-12 lg:-right-18 -top-15"
            />

            <h2 className="text-2xl font-semibold">EduChain Solution</h2>

            <div className="mt-2 text-start flex flex-col gap-4">
              {SOLUTION.map((item, index) => (
                <div key={index} className="flex flex-row gap-3">
                  <div className="bg-white rounded-full p-0.5 shadow-2xl h-fit mt-0.5">
                    <Check
                      strokeWidth={3}
                      className="size-4 text-black shrink-0"
                    />
                  </div>

                  <p className="text-sm lg:text-base">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
