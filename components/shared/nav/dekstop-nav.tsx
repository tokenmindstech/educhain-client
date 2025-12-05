import Link from "next/link";
import Image from "next/image";
import { getSectionFromHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_MENU } from "@/lib/constant";

export default function DekstopNav({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-between bg-white px-8 py-1 rounded-full">
      <Link href={"/"}>
        <Image
          src="/assets/logo/educhain.png"
          alt="Logo"
          width={290}
          height={104}
          className="h-12 w-auto"
        />
      </Link>

      <div className="flex flex-row items-center gap-16">
        <nav>
          <ul className="flex items-center gap-1 list-none">
            {NAV_MENU.map((item) => {
              const section = getSectionFromHref(item.href);
              const isActive = activeSection === section;

              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`font-semibold  h-9 items-center justify-center rounded-md px-2 py-2 text-sm transition-colors ${
                      isActive ? "text-black font-bold" : "text-black/50"
                    } hover:text-black/75`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href={"/"} target="_blank">
          <Button variant="gradient" size="lg">
            Join Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
