import { Card } from "@/components/ui/card";
import Image from "next/image";

const ABOUT_FEATURES = [
  {
    iconUrl: "/assets/logo/certificate.png",
    title: "On-Chain Certificates",
    description:
      "Issue NFT diplomas and course completions that cannot be forged or edited.",
  },
  {
    iconUrl: "/assets/logo/academy.png",
    title: "Web3 Academic Identity",
    description:
      "Every learner builds a permanent profile of courses, skills, and exam results you can verify on-chain.",
  },
  {
    iconUrl: "/assets/logo/global.png",
    title: "Global Education Marketplace",
    description:
      "Instructors, institutions, and platforms connect in one open ecosystem powered by EDUCHAIN.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-radial-about py-24">
      <div className="container mx-auto px-10 sm:px-5 3xl:px-0">
        <Card
          data-aos="zoom-in"
          className="relative bg-linear-to-b from-[#1F5ADC] to-primary grid grid-cols xl:grid-cols-2 p-10 sm:p-15 items-center rounded-4xl"
        >
          {/* Overlay */}
          <Image
            alt="about section overlay"
            src={"/assets/overlay/grid-overlay.png"}
            width={4320}
            height={3156}
            className="w-full h-full object-cover absolute select-none pointer-events-none"
          />

          {/* Decorative */}
          <Image
            alt="Decorative book"
            data-aos="zoom-in"
            data-aos-delay="250"
            src={"/assets/decorative/book.png"}
            width={501}
            height={382}
            className="w-40 sm:w-48 lg:w-64 h-auto absolute -left-10 lg:-left-20 top-25"
          />
          <Image
            alt="Decorative plane"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="/assets/decorative/plane.png"
            width={501}
            height={382}
            className="w-36 sm:w-42 lg:w-56 h-auto absolute -right-12 -top-12"
          />

          {/* About Image */}
          <Image
            alt="About section image"
            width={1372}
            height={1646}
            src={"/assets/image/about-image.png"}
            className="object-cover mx-auto w-full sm:w-[400px] xl:w-[500px] h-auto "
          />

          {/* About Content */}
          <div className="text-white font-montserrat space-y-8">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              What Is EduChain
            </h1>

            <p className="text-sm sm:text-base">
              EduChain is a blockchain infrastructure layer for global
              education, not just a token for one academy. Any university,
              online school, bootcamp, or independent instructor can use
              EduChain to issue tamper-proof certificates, verify skills, and
              build on-chain academic identities for their learners. It acts as
              a universal token standard for education credentials in Web3.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols sm:grid-cols-2 gap-5">
              {ABOUT_FEATURES.map((feature, index) => (
                <Card
                  key={index}
                  className={`flex py-5 gap-2 ${index === 2 && "sm:hidden"}`}
                >
                  <Image
                    alt={feature.title}
                    src={feature.iconUrl}
                    width={225}
                    height={228}
                    className="w-18 sm:w-20 h-auto object-cover px-2"
                  />

                  <div className="px-5 space-y-2 text-black">
                    <h2 className="text-md sm:text-xl font-semibold">
                      {feature.title}
                    </h2>
                    <p className="text-xs sm:text-sm">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {ABOUT_FEATURES.slice(2, 3).map((feature, index) => (
              <Card
                key={index}
                className="hidden sm:flex flex-row items-center gap-0 "
              >
                <Image
                  alt={feature.title}
                  src={feature.iconUrl}
                  width={225}
                  height={228}
                  className="w-20 h-auto object-cover px-2 pt-3"
                />

                <div className="px-5 space-y-2 text-black">
                  <h2 className="text-xl font-semibold">{feature.title}</h2>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
