import Image from "next/image";
import { PROBLEM, SOLUTION } from "@/lib/constant";
import { Card } from "@/components/ui/card";

const TOKEN_INFO = {
  name: "EduChain",
  ticker: "EDUCHAIN",
  network: "BNB Chain",
  totalSupply: 10_000_000_000,
  utility:
    "Certificate issuance, payments, staking, exams, enterprise access, reputation layer",
};

export default function TokenomicsSection() {
  return (
    <section
      id="tokenomics"
      className="bg-white relative h-fit min-h-screen w-full py-24 "
    >
      <div className="mx-auto container font-montserrat text-center space-y-6 px-10 sm:px-5 3xl:px-0 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-black">
          EDUCHAIN Tokenomics
        </h1>
        <p className="tracking-wide font-medium">
          Token design is optimized for real usage, long-term sustainability,
          and ecosystem growth.
        </p>

        {/* Tokenomics Image */}
        <Image
          alt="Educhain Tokenomics"
          src={"/assets/image/tokenomics-image.png"}
          width={4640}
          height={2200}
          className="w-full h-auto max-w-5xl mx-auto mt-12 rounded-lg"
        />

        {/* Content */}
        <Card className="mt-5 relative bg-radial-problem border-4 border-white text-black w-full md:w-[750px] p-8 rounded-3xl shadow-xl">
          {/* Absolute Label */}
          <div className="absolute flex flex-row items-center gap-2 -top-5 right-5 px-3 py-1 bg-radial-solution rounded-2xl text-white font-semibold text-lg">
            <Image
              alt="Key decorative"
              src={"/assets/decorative/key.png"}
              width={102}
              height={102}
              className="w-8 md:w-10"
            />
            <div className="text-sm md:text-base">Key Facts</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start ">
            <div className="w-full sm:w-3/10 text-start font-semibold text-sm sm:text-base">
              Token Name
            </div>
            <div className="w-full sm:w-7/10 text-start font-inter text-black/70 text-sm sm:text-base">
              {TOKEN_INFO.name} ({TOKEN_INFO.ticker})
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start">
            <div className="w-full sm:w-3/10 text-start font-semibold text-sm sm:text-base">
              Network
            </div>
            <div className="w-full sm:w-7/10 text-start font-inter text-black/70 text-sm sm:text-base">
              {TOKEN_INFO.network}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start">
            <div className="w-full sm:w-3/10 text-start font-semibold text-sm sm:text-base">
              Total Supply
            </div>
            <div className="w-full sm:w-7/10 text-start font-inter text-black/70 text-sm sm:text-base">
              {TOKEN_INFO.totalSupply.toLocaleString("en-US")}{" "}
              {TOKEN_INFO.ticker}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start">
            <div className="w-full sm:w-3/10 text-start font-semibold text-sm sm:text-base">
              Core Utilities
            </div>
            <div className="w-full sm:w-7/10 text-start font-inter text-black/70 text-sm sm:text-base">
              {TOKEN_INFO.utility}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
