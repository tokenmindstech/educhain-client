import Image from "next/image";
import { TOKEN_INFO } from "@/lib/constant";
import TokenInfo from "./token-info";

export default function TokenomicsSection() {
  return (
    <section
      id="tokenomics"
      className="bg-white relative h-fit min-h-screen w-full py-24"
    >
      <div className="mx-auto container font-montserrat text-center space-y-6 px-10 sm:px-5 3xl:px-0 flex flex-col items-center">
        {/* Title */}
        <h1
          data-aos="fade-down"
          className="text-4xl sm:text-5xl font-semibold text-black"
        >
          EDUCHAIN Tokenomics
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="tracking-wide font-medium"
        >
          Token design is optimized for real usage, long-term sustainability,
          and ecosystem growth.
        </p>

        {/* Tokenomics Image */}
        <Image
          data-aos="zoom-in"
          data-aos-delay="200"
          alt="Educhain Tokenomics"
          src={"/assets/image/tokenomics-image.png"}
          width={4640}
          height={2200}
          className="w-full h-auto max-w-5xl mx-auto mt-12 rounded-lg"
        />

        <TokenInfo {...TOKEN_INFO} />
      </div>
    </section>
  );
}
