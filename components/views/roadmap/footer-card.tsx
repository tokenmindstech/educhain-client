import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function FooterCard() {
  return (
    <Card
      data-aos="fade-in"
      className="p-5 sm:p-10 lg:p-15 absolute -bottom-15 left-10 right-10 sm:left-5 sm:right-5 3xl:left-0 3xl:right-0 bg-linear-to-b from-primary to-primary-dark border-white/50 border-3 rounded-4xl flex items-center justify-end shadow-xl"
    >
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
  );
}
