"use client";

import { useEffect, useState, useCallback } from "react";
import { getSectionFromHref } from "@/lib/utils";
import DekstopNav from "./dekstop-nav";
import MobileNav from "./mobile-nav";
import { NAV_MENU } from "@/lib/constant";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const scrollPosition = scrollY + 110;

    setIsScrolled(scrollY >= 10);

    if (scrollY < 10) {
      setActiveSection("home");
      return;
    }

    let currentSection = "home";

    const sections = NAV_MENU.map((item) => {
      const section = getSectionFromHref(item.href);
      const el = document.getElementById(section);
      return { section, offsetTop: el?.offsetTop || 0 };
    })
      .filter((item) => item.offsetTop > 0)
      .sort((a, b) => a.offsetTop - b.offsetTop);

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPosition) {
        currentSection = sections[i].section;
        break;
      }
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [handleScroll]);

  return (
    <div
      className={`fixed w-full z-50 font-montserrat transition-all duration-300 ${
        isScrolled ? "top-4 sm:top-6" : "top-20 sm:top-15"
      }`}
    >
      <div className="flex w-full items-center mx-auto container px-10 sm:px-5 3xl:px-0">
        {/* Desktop Nav */}
        <DekstopNav activeSection={activeSection} />

        {/* Mobile Nav */}
        <MobileNav activeSection={activeSection} />
      </div>
    </div>
  );
}
