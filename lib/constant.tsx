import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaDiscord } from "react-icons/fa6";

export const NAV_MENU = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Technology",
    href: "/#technology",
  },
  {
    title: "Products",
    href: "/#products",
  },
  {
    title: "Ecosystem",
    href: "/#ecosystem",
  },
];

export const HIGHLIGHT_TEXT: string[] = [
  "Certificates",
  "Education",
  "Global",
  "On-Chain Certificates",
  "Education",
];

export const NAV_SOCIALS = [
  {
    label: "Twitter",
    icon: <FaXTwitter size={30} />,
    href: "https://twitter.com/educhainx",
  },
  {
    label: "Youtube",
    icon: <FaYoutube size={30} />,
    href: "https://www.youtube.com/@educhainx",
  },
  {
    label: "Telegram",
    icon: <FaTelegramPlane size={30} />,
    href: "https://t.me/educhainx",
  },
  {
    label: "Discord",
    icon: <FaDiscord size={30} />,
    href: "https://discord.gg/educhainx",
  },
];
