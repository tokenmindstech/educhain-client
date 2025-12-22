import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaDiscord } from "react-icons/fa6";

export const NAV_MENU: NavMenuItem[] = [
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

export const NAV_SOCIALS: SocialItem[] = [
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

export const PROBLEM: string[] = [
  "Fake diplomas & unverifiable certificates",
  "No unified global profile for students",
  "Employers can’t easily verify skills or course claims",
  "Each institution keeps closed, siloed databases",
  "No standard token layer for education in Web3",
];

export const SOLUTION: string[] = [
  "Blockchain-verified certificates for any institution",
  "Permanent on-chain academic identity that follows the learner globally",
  "Skill verification via smart contracts – exam and assessment results stored on-chain",
  "DAO-governed ecosystem for scholarships, grants, and upgrades",
  "Universal utility token for payments, staking, and reputation",
];

export const UTILITY_USAGE: string[] = [
  "Prevents fake diplomas",
  "Creates globally verifiable academic identity",
  "Works for online or in-person education",
];

export const UTILITY_FEATURES: UtilityItem[] = [
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

export const ROADPMAP: RoadmapItem[] = [
  {
    timeline: "2026 Q1–Q2",
    milestones: [
      "Smart contract deployment upgrades",
      "Global certificate issuance system v2",
      "Instructor marketplace launch expansion",
      "EduChainX Platform v1 launch",
      "Token Generation Event (TGE)",
    ],
  },
  {
    timeline: "2026 Q3–Q4",
    milestones: [
      "Instructor marketplace full launch",
      "Large-scale institution onboarding",
      "Ecosystem integrations with leading education platforms",
      "ETX smart contract live",
      "First 100 accredited institutions onboarded",
    ],
  },
  {
    timeline: "2027",
    milestones: [
      "Full Marketplace v2 with educator tools",
      "Skill-NFT global rollout",
      "ETX → EDU conversion halving mechanism",
      "EduDAO governance launch",
      "Mobile app for student on-chain identity",
      "1M learner milestone",
    ],
  },
  {
    timeline: "2028",
    milestones: [
      "Enterprise API licensing",
      "AI-assisted learning verification engine",
      "Global tutor network (ESD payments)",
      "500 accredited institutions",
      "Revenue-based EDU buyback v2",
    ],
  },
  {
    timeline: "2029",
    milestones: [
      "Global education credentials registry",
      "Multichain interoperability (Ethereum, BNB, Solana)",
      "Government-level accreditation partnerships",
      "10M learners",
      "Marketplace revenue > $200M",
    ],
  },
  {
    timeline: "2030",
    milestones: [
      "Fully autonomous EduDAO",
      "Zero-fraud credential verification",
      "Skill Passport NFT for global employers",
      "50M learners",
      "Sustainable emissions endpoint",
    ],
  },
];

export const TOKEN_INFO: TokenInfo = {
  name: "EduChain",
  ticker: "EDUCHAIN",
  network: "BNB Chain",
  totalSupply: 10_000_000_000,
  utility:
    "Certificate issuance, payments, staking, exams, enterprise access, reputation layer",
  buyUrl: "https://buy.educhainx.com",
};
