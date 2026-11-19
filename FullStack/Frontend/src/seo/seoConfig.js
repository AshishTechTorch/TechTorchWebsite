// Central SEO config. Used by:
//   1) src/seo/Seo.jsx           -> updates <head> on every route change (browser)
//   2) scripts/generate-seo.mjs  -> bakes the same tags into dist/<route>/index.html
//                                   and writes sitemap.xml + robots.txt (after `npm run build`)
// Pure JS (no JSX, no imports) so Node can import it too.

export const SITE = {
  url: (typeof process !== "undefined" && process.env && process.env.VITE_SITE_URL) || "https://www.techtorch.solutions",
  name: "TechTorch",
  // Image shown when links are shared (WhatsApp, LinkedIn, Facebook). Must exist in /public
  ogImage: "/Slide1.webp",
  logo: "/TechTorchLogo.webp",
  locale: "en_IN",
  twitter: "", // optional, e.g. "@techtorch"
  sameAs: [], // optional, e.g. ["https://www.linkedin.com/company/techtorch"]
};

export const DEFAULT_META = {
  title: "TechTorch | Enterprise Software, ERP, Cloud & IT Staffing Solutions",
  description:
    "TechTorch builds enterprise software, ERP, cloud and AI solutions and provides IT staffing and consulting for businesses across industries.",
};

// noindex: true -> excluded from Google and from sitemap (forms, logins, private pages)
// canonical     -> use when two URLs show the same page
// Keep titles <= ~60 chars and descriptions <= ~160 chars.
export const ROUTES = {
  "/": { title: DEFAULT_META.title, description: DEFAULT_META.description, priority: 1.0 },

  // ---------- Solutions ----------
  "/explore-solutions": {
    title: "Technology Solutions Built Around Your Business | TechTorch",
    description: "Explore TechTorch technology solutions: ERP, CRM, e-commerce, payments, web portals and more, designed around how your business works.",
  },
  "/explore-erp": {
    title: "Connected ERP Solutions for Your Business | TechTorch",
    description: "Connect finance, operations, people and supply chain on one ERP platform so your teams work better together.",
  },
  "/erp": {
    title: "ERP Solutions to Optimize Business Operations | TechTorch",
    description: "TechTorch ERP solutions streamline operations, improve visibility and help your business make faster, better decisions.",
  },
  "/build-with-techtorch": {
    title: "Custom Software Built Around Your Business | TechTorch",
    description: "Work with TechTorch to design and build custom software that fits your processes, scales with growth and integrates with your systems.",
  },
  "/explore-services": {
    title: "Technology Services That Move Your Business Forward | TechTorch",
    description: "From software engineering to cloud, AI and IT staffing, explore the technology services TechTorch offers to grow your business.",
  },
  "/explore-torchXsuite": {
    title: "TorchX Suite: Everything Your Business Needs | TechTorch",
    description: "TorchX Suite brings business tools together so your whole organization works from one connected platform.",
  },
  "/operation-management": {
    title: "Operations Management Solutions | TechTorch",
    description: "Improve efficiency and control across your operations with TechTorch operations management solutions.",
  },
  "/operations-management": {
    title: "Optimise Your Operations with TechTorch Solutions",
    description: "Streamline workflows, reduce manual effort and gain real-time visibility with TechTorch operations management software.",
  },
  "/supply-chain-management": {
    title: "Supply Chain Management Software | TechTorch",
    description: "Build a more connected and efficient supply chain with TechTorch supply chain management solutions.",
  },
  "/aviation-management": {
    title: "Aviation Management Solutions | TechTorch",
    description: "Digital solutions for aviation operations, built to improve coordination, tracking and efficiency.",
  },
  "/people-management": {
    title: "People Management & HR Software | TechTorch",
    description: "Empower your people and strengthen your business with TechTorch HR and people management solutions.",
  },
  "/web-portals": {
    title: "Web Portal Development for Businesses | TechTorch",
    description: "Create connected digital experiences for customers, partners and employees with secure, scalable web portals from TechTorch.",
  },
  "/payment-management": {
    title: "Payment Management Solutions | TechTorch",
    description: "Simplify payments and improve business efficiency with TechTorch payment management solutions for multiple industries.",
  },
  "/healthcare-hospital-management": {
    title: "Hospital Management Software for Healthcare | TechTorch",
    description: "Transform healthcare operations with smart digital solutions for hospital management, patient records and workflows.",
  },
  "/crm": {
    title: "CRM Solutions to Strengthen Customer Relationships | TechTorch",
    description: "Enhance customer experience and strengthen business relationships with TechTorch CRM solutions.",
  },
  "/ecommerce-solutions": {
    title: "E-Commerce Platform Development | TechTorch",
    description: "Comprehensive e-commerce platforms for catalog, checkout, payments and fulfilment, built to grow with your online business.",
  },
  "/project-management": {
    title: "Project Management Solutions | TechTorch",
    description: "Plan, track and deliver projects on time with TechTorch project management solutions.",
  },
  "/software-development-support": {
    title: "Software Development & Support Services | TechTorch",
    description: "Software solutions designed to move your business forward, with development, maintenance and ongoing support from TechTorch.",
  },
  "/cloud-infrastructure": {
    title: "Scalable Cloud Infrastructure Services | TechTorch",
    description: "Empower your business with scalable, secure and cost-efficient cloud infrastructure, migration and management.",
  },
  "/software-engineering-outsourcing": {
    title: "Software Engineering Outsourcing Services | TechTorch",
    description: "Engineering digital solutions that drive business growth with dedicated software engineering teams from TechTorch.",
  },
  "/it-consultancy": {
    title: "IT Consultancy & Digital Transformation Strategy | TechTorch",
    description: "Navigate digital transformation with the right IT strategy. TechTorch consultants help you plan, prioritize and execute technology change.",
  },
  "/resource-staffing": {
    title: "IT Resource Staffing Services | TechTorch",
    description: "Empower your business with the right talent. TechTorch provides skilled IT professionals on flexible engagement models.",
  },
  "/digital-solutions": {
    title: "Digital Solutions Designed Around Your Business | TechTorch",
    description: "Digital transformation solutions that connect your processes, data and teams, delivered by TechTorch.",
  },
  "/digitalsolution": { canonical: "/digital-solutions", noindex: true, title: "Digital Solutions | TechTorch", description: "Digital solutions designed around your business." },
  "/platform": {
    title: "TechTorch Platform: Technology Around Your Business",
    description: "The TechTorch platform brings together enterprise tools that adapt to your business instead of the other way around.",
  },
  "/OurService": {
    title: "Our Services: Technology Built Around Your Business | TechTorch",
    description: "See the full range of TechTorch services, from strategy and engineering to cloud, AI and IT staffing.",
  },
  "/ArtificialIntelligent": {
    title: "Artificial Intelligence as a Service (AIaaS) | TechTorch",
    description: "Use AI without the complexity. TechTorch integrates artificial intelligence into your existing business technology environment.",
  },
  "/data-decisions": {
    title: "Data & Decisions: Analytics for Smarter Business | TechTorch",
    description: "Turn your data into decisions with TechTorch analytics, structured methodology and measurable operational impact.",
  },

  // ---------- IT Augmentation / Staffing ----------
  "/ItAugmentation": {
    title: "IT Augmentation: Extend Your Technology Team | TechTorch",
    description: "Extend your technology team with flexible IT expertise. TechTorch supplies skilled engineers for contract, remote and project-based needs.",
  },
  "/Contract-Staffing": {
    title: "Contract IT Staffing for Dynamic Project Demands | TechTorch",
    description: "Flexible technology resources for projects with changing demands. Scale engineering capacity up or down with contract staffing.",
  },
  "/contract-to-hire": {
    title: "Contract-to-Hire IT Talent | TechTorch",
    description: "Find the right technology talent and build with confidence. Evaluate on the job, then convert to full-time hires.",
  },
  "/Dedicated-Development-Teams": {
    title: "Dedicated Development Teams | TechTorch",
    description: "Strengthen your technology team with dedicated developers who work as an extension of your organization.",
  },
  "/remote-engineers": {
    title: "Hire Remote Engineers | TechTorch",
    description: "Extend your engineering team with skilled remote engineers and scale your technology capabilities quickly.",
  },
  "/project-based-hiring": {
    title: "Project-Based IT Hiring | TechTorch",
    description: "Deliver technology projects with the right engineering expertise, engaged only for the duration you need.",
  },
  "/resource-replacement": {
    title: "IT Resource Replacement & Project Continuity | TechTorch",
    description: "Keep projects on track with quick, quality replacements for technology resources.",
  },
  "/bench-hiring": {
    title: "Bench Hiring: Ready-to-Deploy IT Resources | TechTorch",
    description: "Build your technology team with pre-vetted bench resources that can start quickly.",
  },
  "/vendor-partnership": {
    title: "Vendor Partnership Program | TechTorch",
    description: "Build stronger opportunities through technology partnership with TechTorch.",
  },
  "/become-partner": {
    title: "Become a TechTorch Technology Partner",
    description: "Join the TechTorch partner network and grow together through shared technology opportunities.",
  },
  "/msp-support": {
    title: "Managed Service Provider (MSP) Support | TechTorch",
    description: "TechTorch MSP support keeps your IT environment monitored, secure and running smoothly.",
  },
  "/offshore-teams": {
    title: "Offshore Development Teams | TechTorch",
    description: "Build offshore development teams with clear governance, delivery lifecycle and transparent engagement models.",
  },
  "/development-team": {
    title: "Build Your Development Team | TechTorch",
    description: "Set up a dedicated offshore development team tailored to your product and delivery goals.",
  },

  // ---------- Industries ----------
  "/industries/education": {
    title: "Technology for Education: EdTech Solutions | TechTorch",
    description: "Technology that helps education move forward: learning platforms, administration systems and digital campus solutions.",
  },
  "/education-solutions": {
    title: "Technology Solutions for Modern Education | TechTorch",
    description: "Modern education technology solutions for institutions, from admissions to learning and administration.",
  },
  "/industries/insurance": {
    title: "Insurance Software & Technology Solutions | TechTorch",
    description: "Technology solutions for modern insurance operations: policy, claims, customer experience and digital transformation.",
  },
  "/industries/finance": {
    title: "Financial Services Technology Solutions | TechTorch",
    description: "Modern technology solutions for a more connected financial enterprise: architecture, fintech and key business systems.",
  },
  "/industries/healthcare": {
    title: "Healthcare Technology Solutions | TechTorch",
    description: "Technology for more connected healthcare operations: records, workflows, security and operational insight.",
  },
  "/industries/information-technology": {
    title: "Technology Solutions for IT Companies | TechTorch",
    description: "Technology solutions designed around your business: software, digital solutions, infrastructure and engineering.",
  },
  "/industries/manufacturing": {
    title: "Manufacturing Software & ERP Solutions | TechTorch",
    description: "Technology solutions for modern manufacturing: ERP, shop-floor connectivity and software engineering.",
  },
  "/industries/telecommunications": {
    title: "Telecommunications Technology Solutions | TechTorch",
    description: "Technology solutions for a more connected telecommunications business: key solutions, software engineering and services.",
  },
  "/industries/energy": {
    title: "Energy Sector Technology Solutions | TechTorch",
    description: "Technology solutions for a more connected energy business: operations, software engineering and technology services.",
  },
  "/industries/transportation": {
    title: "Transportation & Logistics Technology Solutions | TechTorch",
    description: "Technology solutions for a more connected transportation business: supply chain, software and enterprise systems.",
  },
  "/industries/fmcg": {
    title: "FMCG Technology Solutions | TechTorch",
    description: "Technology solutions for modern FMCG businesses: distribution, sales, supply chain and business management.",
  },
  "/industries/e-commerce": {
    title: "E-Commerce Industry Solutions | TechTorch",
    description: "E-commerce solutions for modern online businesses: enterprise platforms, front-end experience, custom builds and intelligence.",
  },

  // ---------- Company ----------
  "/about-us": {
    title: "About TechTorch | Leadership & Company",
    description: "Meet the people behind TechTorch and learn about our purpose, values and leadership.",
  },
  "/leadership": { canonical: "/about-us", noindex: true, title: "Leadership | TechTorch", description: "The people behind TechTorch's purpose." },
  "/company-overview": {
    title: "Company Overview | TechTorch",
    description: "Technology. Innovation. Business transformation. Learn about TechTorch, what we do and how we work.",
  },
  "/the-techtorch-way": {
    title: "The TechTorch Way: Technology with Purpose",
    description: "Technology with purpose. Solutions with impact. Discover the principles and approach behind every TechTorch engagement.",
  },
  "/culture-inclusion": {
    title: "Culture & Inclusion at TechTorch",
    description: "People make the difference. See how TechTorch builds an inclusive, supportive and growth-focused workplace.",
  },
  "/investors": {
    title: "Investors | TechTorch",
    description: "A vision for progress and a commitment to innovation. Information for TechTorch investors and stakeholders.",
  },
  "/idea": {
    title: "Great Ideas Begin with a New Perspective | TechTorch",
    description: "Share your idea with TechTorch and see how fresh perspective turns it into a working solution.",
  },
  "/partners-ecosystem": {
    title: "Partners & Ecosystem | TechTorch",
    description: "Partnerships that create business value. Explore TechTorch's technology and business partner ecosystem.",
  },
  "/media": {
    title: "Media & Press | TechTorch",
    description: "Discover TechTorch through media coverage, announcements and company updates.",
  },
  "/case-studies": {
    title: "Case Studies: Solving Business Challenges | TechTorch",
    description: "See how TechTorch has helped businesses solve real challenges through technology, with measurable results.",
  },
  "/careers": {
    title: "Careers at TechTorch | Jobs & Openings",
    description: "Explore open roles at TechTorch and build your career with a technology team that values growth and ownership.",
  },
  "/blogs": {
    title: "TechTorch Blogs: Technology, ERP, Cloud & AI Insights",
    description: "Read articles on enterprise technology, ERP, cloud, AI and digital transformation from the TechTorch team and community.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | TechTorch",
    description: "Read how TechTorch collects, uses and protects your personal information.",
  },

  // ---------- Our Story / Know More / Insights ----------
  "/Our-Story": {
    title: "Our Story: Architecting Future Enterprise Technology | TechTorch",
    description: "TechTorch's philosophy, core foundation and strategic capabilities for enterprise technology at speed and scale.",
  },
  "/KnowMore": {
    title: "Innovate at Speed, Scale with Confidence | TechTorch",
    description: "Enterprise acceleration, practical intelligence and proven impact: learn what makes TechTorch transformation-ready.",
  },
  "/TechTorchView": {
    title: "The TechTorch View: Philosophy & Methodology",
    description: "TechTorch's point of view on technology: our philosophy, capabilities and deployment methodology.",
  },
  "/field-note": {
    title: "Field Notes: Technology Insights from TechTorch",
    description: "Practical field notes on technology, connected operations and integrated capabilities from TechTorch teams.",
  },
  "/integrated-capabilities": {
    title: "Integrated Capabilities | TechTorch",
    description: "ERP integration, operations management, data orchestration and legacy modernization from one team.",
  },
  "/integrated-capabilities/erp-integration": {
    title: "ERP Integration Services | TechTorch",
    description: "Integrate ERP with the rest of your systems so data flows reliably across finance, operations and sales.",
  },
  "/integrated-capabilities/operations-management": {
    title: "Operations Management Integration | TechTorch",
    description: "Bring operational data and workflows together for better control and faster execution.",
  },
  "/integrated-capabilities/data-orchestration": {
    title: "Data Orchestration Services | TechTorch",
    description: "Orchestrate data across systems and pipelines so teams get trusted, timely information.",
  },
  "/integrated-capabilities/legacy-modernization": {
    title: "Legacy System Modernization | TechTorch",
    description: "Modernize legacy applications safely, with minimal disruption and a clear migration roadmap.",
  },
  "/think-ahead": {
    title: "Think Ahead: Technology Perspectives | TechTorch",
    description: "Perspectives on emerging technology, ecosystems and what's next for enterprise IT.",
  },
  "/cyber-security": {
    title: "Cyber Security Services & Resilience | TechTorch",
    description: "Security capabilities, resilience pillars and measurable outcomes to protect your business from cyber threats.",
  },
  "/secure-business": {
    title: "Secure Your Business: Security Advisory | TechTorch",
    description: "TechTorch's security initiative, advisory framework and protocol delivery to secure critical business systems.",
  },
  "/Business-growth": {
    title: "Grow Your Business with Technology | TechTorch",
    description: "Architecture, methodology and ecosystem capabilities that help your business grow with technology.",
  },

  // ---------- Forms / conversion flows: keep out of search results ----------
  "/schedule-advisory": { noindex: true, title: "Schedule an Advisory Session | TechTorch", description: "Schedule a security advisory session with TechTorch." },
  "/engagement-protocol": { noindex: true, title: "Engagement Protocol | TechTorch", description: "View your TechTorch engagement protocol." },
  "/accept-proceed": { noindex: true, title: "Accept & Proceed | TechTorch", description: "Accept the engagement protocol and proceed." },
  "/export-protocol": { noindex: true, title: "Export Protocol Package | TechTorch", description: "Export your engagement protocol package." },
  "/discuss-priorities": { noindex: true, title: "Discuss Your IT Requirements | TechTorch", description: "Discuss your IT requirements and business priorities with TechTorch." },
  "/connect-msp": { noindex: true, title: "Connect with TechTorch MSP", description: "Connect with the TechTorch MSP team." },
  "/development-requirements": { noindex: true, title: "Discuss Your Development Requirements | TechTorch", description: "Share your development requirements with TechTorch." },
  "/schedule-discovery": { noindex: true, title: "Schedule Education Discovery Session | TechTorch", description: "Schedule a discovery session with TechTorch." },
  "/insurance-get-in-touch": { noindex: true, title: "Connect with Insurance Solutions Architects | TechTorch", description: "Get in touch with TechTorch insurance solutions architects." },
  "/finance-get-in-touch": { noindex: true, title: "Connect with Financial Technology Architects | TechTorch", description: "Get in touch with TechTorch financial technology architects." },
  "/healthcare-get-in-touch": { noindex: true, title: "Get in Touch with Healthcare Experts | TechTorch", description: "Get in touch with TechTorch healthcare experts." },
  "/it-get-in-touch": { noindex: true, title: "Connect with TechTorch Technology Experts", description: "Get in touch with TechTorch technology experts." },
  "/manufacturing-get-in-touch": { noindex: true, title: "Connect with Manufacturing Experts | TechTorch", description: "Get in touch with TechTorch manufacturing experts." },
  "/telecommunication-get-in-touch": { noindex: true, title: "Telecommunications Technology Requirements | TechTorch", description: "Discuss your telecommunications technology requirements." },
  "/energy-get-in-touch": { noindex: true, title: "Energy Technology Requirements | TechTorch", description: "Discuss your energy technology requirements." },
  "/transportation-get-in-touch": { noindex: true, title: "Transportation Technology Requirements | TechTorch", description: "Discuss your transportation technology requirements." },
  "/fmcg-get-in-touch": { noindex: true, title: "FMCG Technology Requirements | TechTorch", description: "Discuss your FMCG technology requirements." },
  "/ecommerce-get-in-touch": { noindex: true, title: "E-Commerce Requirements | TechTorch", description: "Discuss your e-commerce requirements." },
  "/start-conversation": { noindex: true, title: "Start a Conversation | TechTorch", description: "Turn your technology needs into solutions. Talk to TechTorch." },
  "/explore-questions": { noindex: true, title: "Have a Question? | TechTorch", description: "Ask TechTorch a question." },
  "/conversation-toggle": { noindex: true, title: "Let's Discuss What Your Business Needs | TechTorch", description: "Tell TechTorch what your business needs." },
  "/talk-to-expert": { noindex: true, title: "Talk to Our Experts | TechTorch", description: "Talk to TechTorch experts about your requirements." },

  // ---------- Private / account ----------
  "/signin": { noindex: true, title: "Sign In | TechTorch", description: "Sign in to your TechTorch account." },
  "/signup": { noindex: true, title: "Create Account | TechTorch", description: "Create your TechTorch account." },
  "/candidate": { noindex: true, title: "Candidate Dashboard | TechTorch", description: "Your TechTorch candidate dashboard." },
  "/404": { noindex: true, title: "Page Not Found | TechTorch", description: "The page you are looking for does not exist." },
};

// Paths starting with these are always noindex (admin area etc.)
export const NOINDEX_PREFIXES = ["/admin", "/dashboard", "/login"];

export const isNoindex = (path, meta) =>
  Boolean(meta && meta.noindex) || NOINDEX_PREFIXES.some((p) => path === p || path.startsWith(p + "-") || path.startsWith(p + "/"));

// Resolve meta for a pathname (handles trailing slash and /blogs/:id)
export function getMeta(pathname) {
  const path = (pathname || "/").replace(/\/+$/, "") || "/";
  if (ROUTES[path]) return { path, ...ROUTES[path] };
  if (path.startsWith("/blogs/")) {
    return { path, title: "Blog | TechTorch", description: "Read this article on the TechTorch blog.", parent: "/blogs" };
  }
  return { path, ...DEFAULT_META, noindex: true };
}

export const abs = (p) => (/^https?:\/\//.test(p) ? p : SITE.url.replace(/\/$/, "") + (p.startsWith("/") ? p : "/" + p));

// Turns route meta into the final, absolute tag values (shared by browser + build script)
export function buildSeo(meta) {
  const path = meta.path || "/";
  const noindex = isNoindex(path, meta);
  const canonical = abs(meta.canonical || path);
  const image = abs(meta.image || SITE.ogImage);
  const out = {
    title: meta.title,
    description: meta.description,
    canonical,
    robots: noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1",
    noindex,
    og: {
      "og:type": meta.type || (path === "/" ? "website" : "website"),
      "og:site_name": SITE.name,
      "og:locale": SITE.locale,
      "og:title": meta.title,
      "og:description": meta.description,
      "og:url": canonical,
      "og:image": image,
      "og:image:alt": meta.imageAlt || SITE.name,
    },
    twitter: {
      "twitter:card": "summary_large_image",
      "twitter:title": meta.title,
      "twitter:description": meta.description,
      "twitter:image": image,
    },
    jsonLd: meta.jsonLd || null,
  };
  if (SITE.twitter) out.twitter["twitter:site"] = SITE.twitter;
  if (!out.jsonLd && !noindex) {
    const org = {
      "@type": "Organization",
      "@id": SITE.url + "/#organization",
      name: SITE.name,
      url: SITE.url + "/",
      logo: abs(SITE.logo),
      ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
    };
    if (path === "/") {
      out.jsonLd = {
        "@context": "https://schema.org",
        "@graph": [org, { "@type": "WebSite", "@id": SITE.url + "/#website", url: SITE.url + "/", name: SITE.name, publisher: { "@id": SITE.url + "/#organization" } }],
      };
    } else {
      const crumbs = [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" }];
      if (meta.parent && ROUTES[meta.parent]) {
        crumbs.push({ "@type": "ListItem", position: 2, name: ROUTES[meta.parent].title.split(" | ")[0].split(":")[0], item: abs(meta.parent) });
      }
      crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: meta.title.split(" | ")[0], item: canonical });
      out.jsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs };
    }
  }
  return out;
}
