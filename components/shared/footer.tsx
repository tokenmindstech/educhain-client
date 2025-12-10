import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { NAV_SOCIALS } from "@/lib/constant";

export default function Footer() {
  return (
    <footer className="pt-36 pb-24 bg-white rounded-t-3xl shadow-2xl">
      <div className="w-[90%] mx-auto px-10 sm:px-5 3xl:px-0 flex flex-col">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logo/educhain.png"
              alt="Logo"
              width={290}
              height={104}
              className="h-15 w-auto"
            />
          </Link>

          <div className="flex flex-row items-center gap-8">
            {NAV_SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col text-center sm:flex-row items-center justify-between font-inter gap-3 sm:gap-0">
          <p className="text-sm sm:text-base">The Education Blockchain Layer</p>
          <p className="text-sm sm:text-base">
            © EduChainX 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
