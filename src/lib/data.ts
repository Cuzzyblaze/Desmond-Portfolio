export type Project = {
  name: string;
  tag: string;
  description: string;
  features: string[];
  url: string;
};

export const projects: Project[] = [
  {
    name: "ICT Result",
    tag: "Founder Project",
    description:
      "A digital platform that helps schools manage student records, process academic results, and provide secure digital result access.",
    features: [
      "Student & Staff Management",
      "Offline / Online Result Processing",
      "Smart Access Card Publication",
      "Attendance Management",
    ],
    url: "https://ictresult.com",
  },
  {
    name: "WealthSystems Academy",
    tag: "EdTech / Fintech",
    description:
      "A structured financial education and wealth-building platform helping individuals create multiple income streams toward long-term financial independence.",
    features: ["Learning Management System", "Digital Marketplace", "Matrix System"],
    url: "https://wealthsystemsacademy.com",
  },
  {
    name: "JobMatch Connect",
    tag: "Web & Mobile",
    description:
      "A platform connecting job seekers with employers through an intelligent matching engine based on skills, experience, and preferences.",
    features: [
      "Candidate Profiles & CV Upload",
      "Employer Job Postings",
      "Smart Matching Engine",
    ],
    url: "https://jobmatch-connect.vercel.app",
  },
  {
    name: "Black Genesis",
    tag: "E-Commerce",
    description:
      "An e-commerce storefront for a fashion collection brand, built for a fast, filterable shopping experience.",
    features: ["Product Store & Filtering", "Multiple Payment Methods", "Crypto Payments"],
    url: "https://theblackgenesis.com",
  },
  {
    name: "Jedroc Skills Resources",
    tag: "EdTech",
    description:
      "A premium digital-skills education brand selling courses, ebooks, software, and templates through a secure student portal.",
    features: ["Course & Product Sales", "Student Login Portal", "Digital Downloads"],
    url: "https://jedrocskills.com.ng",
  },
  {
    name: "ChiralFX Academy",
    tag: "Fintech / Education",
    description:
      "An online forex trading academy offering mentorship and trading signal services to aspiring traders.",
    features: ["Mentorship Programs", "Trading Signal Services"],
    url: "https://chiralfx.com.ng",
  },
  {
    name: "Pinnacle Global",
    tag: "Fintech / E-Commerce",
    description:
      "An investment and e-commerce platform combining a product store with fixed investment plans and reward systems.",
    features: [
      "Fixed Investment Plans",
      "Lucky Spin Reward Wheel",
      "Locked Savings with ROI",
    ],
    url: "https://pinnacleglobal.com.ng",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: "code" | "workflow" | "funnel";
};

export const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Custom, fast, and conversion-focused websites built to represent your brand and turn visitors into customers.",
    icon: "code",
  },
  {
    title: "Automated Software Systems",
    description:
      "Dashboards, management portals, and workflow automation that eliminate manual work and scale with your business.",
    icon: "workflow",
  },
  {
    title: "Sales Funnels",
    description:
      "Landing pages and funnels engineered around user psychology and data to convert traffic into paying customers.",
    icon: "funnel",
  },
];

export const stats = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Products Shipped", value: 7, suffix: "+" },
  { label: "Platforms Founded", value: 1, suffix: "" },
];

export const contact = {
  name: "Desmond Didacus",
  phone: "+2348143617786",
  phoneDisplay: "+234 814 361 7786",
  whatsapp: "https://wa.me/2348143617786",
  linkedin: "https://linkedin.com/in/desmond-didacus",
  instagram: "https://instagram.com/desmond_didacus",
  tiktok: "https://tiktok.com/@desmond_didacus",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
