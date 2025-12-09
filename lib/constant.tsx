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
    title: "Utilities",
    href: "/#utility",
  },
  {
    title: "Tokenomics",
    href: "/#tokenomics",
  },
  {
    title: "Roadmap",
    href: "/#roadmap",
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

export const UTILITY_USAGE = [
  "Prevents fake diplomas",
  "Creates globally verifiable academic identity",
  "Works for online or in-person education",
];

export const UTILITY_FEATURES = [
  {
    title: "Training & Course Payments",
    description:
      "Use EduChain to pay for courses, workshops, bootcamps, exams, and live sessions",
    list: [
      "Native payment & settlement layer for education platforms",
      "Fast, borderless crypto payments",
    ],
  },
  {
    title: "On-Chain Student Academic Identity",
    description: "Every learner gets a permanent blockchain-based “Web3 CV.”",
    list: [
      "Stores completed courses, skills, certificates, and exam results",
      "Instantly verifiable by employers",
    ],
  },
  {
    title: "Global Instructor Marketplace",
    description:
      "Instructors and academies list courses in a decentralized global marketplace.",
    list: [
      "Stake EduChain to become a certified instructor",
      "More staked = higher revenue share & visibility",
    ],
  },
];
