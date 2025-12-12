import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { getSectionFromHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_MENU, TOKEN_INFO } from "@/lib/constant";

export default function MobileNav({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <div className="lg:hidden flex flex-1 items-center justify-between bg-white/90 px-6 py-2 rounded-full">
      <Link href={"/"}>
        <Image
          src="/assets/logo/educhain.png"
          alt="Logo"
          width={290}
          height={104}
          className="h-10 w-auto"
        />
      </Link>

      <div className="items-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Menu
              size={20}
              fontSize={20}
              className="text-black/80 hover:text-black cursor-pointer"
            />
          </DrawerTrigger>

          <DrawerContent>
            <DrawerTitle className="hidden">Site Navigation Menu</DrawerTitle>

            <div className="p-6">
              {/* Logo and close */}
              <div className="flex justify-between items-center mb-8">
                <Image
                  src="/assets/images/logo/educhain.png"
                  alt="Logo"
                  width={290}
                  height={104}
                  className="h-12 w-auto"
                />
                {/* Drawer close button is handled by shadcn */}
                <DrawerClose>
                  <X className="cursor-pointer hover:bg-accent/50 rounded-md" />
                </DrawerClose>
              </div>

              <nav className="flex flex-col gap-4">
                {NAV_MENU.map((item) => {
                  const section = getSectionFromHref(item.href);
                  const isActive = activeSection === section;

                  return (
                    <DrawerClose asChild key={item.title}>
                      <Link
                        href={item.href}
                        className={`text-lg transition-colors ${
                          isActive && "font-semibold"
                        }`}
                        style={{
                          color: isActive ? "#221e51" : "#666666",
                        }}
                      >
                        {item.title}
                      </Link>
                    </DrawerClose>
                  );
                })}

                <Link
                  href={TOKEN_INFO.buyUrl}
                  target="_blank"
                  className="w-full"
                >
                  <Button variant="gradient" size="lg" className="w-full mt-4">
                    Join Us
                  </Button>
                </Link>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
