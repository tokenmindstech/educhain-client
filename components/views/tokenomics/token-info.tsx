import { Card } from "@/components/ui/card";
import Image from "next/image";

interface TokenInfo {
  name: string;
  ticker: string;
  network: string;
  totalSupply: number;
  utility: string;
}

export default function TokenInfo({
  name,
  ticker,
  network,
  totalSupply,
  utility,
}: TokenInfo) {
  return (
    <Card
      data-aos="fade-up"
      className="mt-5 relative bg-radial-problem border-4 border-white text-black w-full md:w-[750px] p-8 rounded-3xl shadow-xl"
    >
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
          {name} ({ticker})
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start">
        <div className="w-full sm:w-3/10 text-start font-semibold text-sm sm:text-base">
          Network
        </div>
        <div className="w-full sm:w-7/10 text-start font-inter text-black/70 text-sm sm:text-base">
          {network}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start">
        <div className="w-full sm:w-3/10 text-start font-semibold text-sm sm:text-base">
          Total Supply
        </div>
        <div className="w-full sm:w-7/10 text-start font-inter text-black/70 text-sm sm:text-base">
          {totalSupply.toLocaleString("en-US")} {ticker}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start">
        <div className="w-full sm:w-3/10 text-start font-semibold text-sm sm:text-base">
          Core Utilities
        </div>
        <div className="w-full sm:w-7/10 text-start font-inter text-black/70 text-sm sm:text-base">
          {utility}
        </div>
      </div>
    </Card>
  );
}
