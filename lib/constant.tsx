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
    title: "Solution",
    href: "/#why",
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

export const HIGHLIGHT_TEXT: string[] = [
  "Certificates",
  "Education",
  "Global",
  "On-Chain Certificates",
  "Education",
];

export const PROBLEM = [
  "Fake diplomas & unverifiable certificates",
  "No unified global profile for students",
  "Employers can’t easily verify skills or course claims",
  "Each institution keeps closed, siloed databases",
  "No standard token layer for education in Web3",
];

export const SOLUTION = [
  "Blockchain-verified certificates for any institution",
  "Permanent on-chain academic identity that follows the learner globally",
  "Skill verification via smart contracts – exam and assessment results stored on-chain",
  "DAO-governed ecosystem for scholarships, grants, and upgrades",
  "Universal utility token for payments, staking, and reputation",
];
