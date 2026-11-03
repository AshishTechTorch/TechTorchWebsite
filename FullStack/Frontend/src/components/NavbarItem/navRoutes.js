// Single place that decides where every menu label goes.
// (Before this, every dropdown link was href="#" and went nowhere.)
// Change a path here and the desktop menu, mobile menu and footer links all follow.

export const ROUTES = {
  // About Us
  "Company Overview": "/company-overview",
  Leadership: "/Leadership",
  Idea: "/Idea",
  Investors: "/investors",
  "Partners Ecosystem": "/partners-ecosystem",
  News: "/blogs",
  "Customer Centricity": "/KnowMore",

  // Capabilities – Digital Solutions

  ERP: "/erp",
  "Operations Management": "/integrated-capabilities/operations-management",
  "Supply Chain Management": "/supply-chain-management",
  "Aviation Management": "/aviation-management",
  "People Management": "/people-management",
  "Web Portals": "/web-portals",
  "Financial Management": "/industries/finance",
  "Payment Management": "/payment-management",
  "Healthcare & Hospital Management": "/healthcare-hospital-management",
  CRM: "/crm",
  Ecommerce: "/ecommerce-solutions",
  "Project Management": "/project-management",

  // Capabilities – IT Augmentation

  "IT Consultancy": "/it-consultancy",
  "Artificial Intelligence (AaaS)": "/ArtificialIntelligent",
  "Cloud Infrastructure Services (IaaS)": "/cloud-infrastructure",
  "Cyber Security": "/cyber-security",
  "Software Engineering Outsourcing": "/software-engineering-outsourcing",
  // "Business process Outsourcing": "/ItAugmentation",
  "Software Development & Support": "/software-development-support",
  "Resource and Staffing": "/resource-staffing",
  "TorchX Suite": "/platform",
  "TorchX Campus": "/platform",

  // Industries

  Finance: "/industries/finance",
  Education: "/industries/education",
  Healthcare: "/industries/healthcare",
  Manufacturing: "/industries/manufacturing",
  "Information Technology": "/industries/information-technology",
  Insurance: "/industries/insurance",
  Energy: "/industries/energy",
  FMCG: "/industries/fmcg",
  Transportation: "/industries/transportation",
  Telecommunications: "/industries/telecommunications",

  // Insights

  "Case Studies": "/case-studies",
  Media: "/media",
  "Company Profile": "/Philosophy",
  "Quick Brochure": "/KnowMore",

  // Careers

  "The TechTorch Way": "/the-techtorch-way",
  "Culture & Inclusion": "/culture-inclusion",
  "Join Us": "/careers",
};

export const routeFor = (label) => ROUTES[label] || "/";

// Tree used by the mobile menu
export const MOBILE_MENU = [
  { label: "About Us", children: ["Company Overview", "Leadership", "Idea", "Investors", "Partners Ecosystem", "News", "Customer Centricity"] },
  {
    label: "Capabilities",
    children: [
      "ERP", "Operations Management", "Supply Chain Management", "Web Portals", "CRM", "Ecommerce",
      "IT Consultancy", "Artificial Intelligence (AaaS)", "Cyber Security", "Resource and Staffing", "TorchX Suite",
    ],
  },
  {
    label: "Industries",
    children: ["Finance", "Education", "Healthcare", "Manufacturing", "Information Technology", "Insurance", "Energy", "FMCG", "Transportation", "Telecommunications"],
  },
  { label: "Insights", children: ["Case Studies", "Media", "Company Profile", "Quick Brochure"] },
  { label: "Careers", children: ["The TechTorch Way", "Culture & Inclusion", "Join Us"] },
  { label: "Contact Us", to: "/start-conversation" },
];