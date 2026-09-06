export const company = {
  name: "Fortis West",
  legalName: "Fortis West LLP",
  tagline: "Trusted Equipment & Services for the Oil & Gas Industry",
  description:
    "Fortis West LLP is one of the leading oil field equipment trading and service companies actively involved in major projects across the Kazakhstan region. We supply heavy equipment, mechanical items, electrical products, and safety gear from the USA, Europe, and Asia.",
  address: "Kazakhstan, E02M9F2, Atyrau, Aiteke bi St. 43A, 5th Floor, Office 509",
  email: "info@fortiswest.kz",
  phone: "+7 701 241 4956",
  socialLinks: {
    linkedin: "#",
    facebook: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Valves", href: "/products#valves" },
      { label: "Pumps", href: "/products#pumps" },
      { label: "Compressors & Cryogenics", href: "/products#compressors" },
      { label: "Instrumentation & Control", href: "/products#instrumentation" },
      { label: "Pipes & Fittings", href: "/products#pipes" },
      { label: "Filtration & Internals", href: "/products#filtration" },
      { label: "Hoses & Flexible Connections", href: "/products#hoses" },
      { label: "Centralizers", href: "/products#centralizers" },
      { label: "Actuators", href: "/products#actuators" },
      { label: "Safety Equipment", href: "/products#safety" },
      { label: "Generators", href: "/products#generators" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Oil & Gas Plant Turnaround", href: "/services#turnaround" },
      { label: "Procurement", href: "/services#procurement" },
      { label: "Recruitment", href: "/services#recruitment" },
      { label: "Construction", href: "/services#construction" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "10,000+", label: "Products Supplied" },
  { value: "3", label: "Continents Sourced" },
  { value: "50+", label: "Manufacturer Brands" },
];

export type ServiceSection = {
  heading: string;
  points: string[];
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  /** One-line summary used on cards. */
  description: string;
  /** Hero strapline shown under the title on the detail page. */
  tagline: string;
  /** Opening paragraph(s) on the detail page. */
  intro: string;
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    id: "turnaround",
    slug: "turnaround",
    title: "Oil & Gas Plant Turnaround",
    shortTitle: "Plant Turnaround",
    icon: "FiTool",
    description:
      "Fully managed plant shutdowns — specialist chemical cleaning, inspection, and mechanical work that return your unit to service safely and on schedule.",
    tagline: "Shutdown, inspection, and restart — delivered safely and on time.",
    intro:
      "Downtime is the costliest part of any turnaround. Fortis West delivers integrated turnaround support for refineries, gas plants, and process facilities — combining specialist chemical cleaning and non-destructive inspection with full project management, so every shutdown is planned, executed, and restarted with minimal disruption.",
    sections: [
      {
        heading: "Turnaround Scope",
        points: [
          "Pre-turnaround planning and scope definition",
          "Mechanical, piping, and rotating equipment overhaul",
          "Chemical cleaning of vessels, exchangers, and systems",
          "Non-destructive testing (NDT) and inspection",
          "Safe shutdown, start-up, and commissioning",
        ],
      },
      {
        heading: "Integrated Support",
        points: [
          "Project management and scheduling",
          "Engineering and design support",
          "Manufacturing and spare-parts supply",
          "On-site installation and supervision",
          "Skilled manpower mobilisation",
        ],
      },
    ],
  },
  {
    id: "procurement",
    slug: "procurement",
    title: "Procurement & Spares Provision",
    shortTitle: "Procurement",
    icon: "FiPackage",
    description:
      "Global sourcing of genuine equipment and spare parts from the USA, Europe, and Asia — managed from enquiry to delivery on site in Kazakhstan.",
    tagline: "Global sourcing of equipment and spares, delivered to site.",
    intro:
      "From a single critical spare to a full project package, Fortis West sources genuine equipment and materials from manufacturers across the USA, Europe, and Asia. We manage every step — vendor qualification, tendering, logistics, and customs — so the right parts arrive on site, on time, with full traceability.",
    sections: [
      {
        heading: "What We Supply",
        points: [
          "Pumps, valves, and actuators",
          "Pipes, fittings, flanges, and fasteners",
          "Compressors and cryogenic equipment",
          "Instrumentation and process control",
          "Filtration, hoses, and safety equipment",
        ],
      },
      {
        heading: "How We Work",
        points: [
          "Vendor qualification and genuine-parts sourcing",
          "Technical review and specification compliance",
          "Competitive multi-source tendering",
          "Logistics, shipping, and customs clearance",
          "Full documentation and material traceability",
        ],
      },
    ],
  },
  {
    id: "recruitment",
    slug: "recruitment",
    title: "Recruitment Services",
    shortTitle: "Recruitment",
    icon: "FiUsers",
    description:
      "Highly qualified oil & gas professionals for permanent and contract roles — matched to your project, your culture, and local content requirements.",
    tagline: "Technical specialists for major projects in Kazakhstan and beyond.",
    intro:
      "Fortis West connects operators and contractors with highly qualified oil & gas professionals — for both permanent positions and contract assignments. Backed by a deep understanding of the industry and the local market, we match candidates to your culture and requirements and mobilise them quickly when timelines are tight.",
    sections: [
      {
        heading: "Disciplines We Cover",
        points: [
          "Geoscience, drilling, and completions",
          "Engineering and design",
          "Health, safety, environment, and quality (HSEQ)",
          "Project management and services",
          "Construction, commissioning, operations, and maintenance",
        ],
      },
      {
        heading: "Our Approach",
        points: [
          "Permanent and contract placement",
          "Candidates matched to your culture and requirements",
          "Fast mobilisation for urgent roles",
          "Compliance with local content requirements",
          "Market intelligence and consistent communication",
        ],
      },
    ],
  },
  {
    id: "construction",
    slug: "construction",
    title: "Construction Services",
    shortTitle: "Construction",
    icon: "FiSettings",
    description:
      "Full-cycle industrial and infrastructure construction — from design and civil works through to commissioning and handover, to international standards.",
    tagline: "Full-cycle industrial construction to international standards.",
    intro:
      "Fortis West delivers construction and installation works for industrial and infrastructure projects — from design and civil works through to commissioning and handover. Supported by licensed partners and qualified safety expertise, we combine construction execution with design consultation and full compliance.",
    sections: [
      {
        heading: "Construction Scope",
        points: [
          "Major repairs and reconstruction of buildings and networks",
          "Civil, concrete, earthwork, and soil works",
          "Roofing and structural works",
          "Power supply and water supply networks",
          "Installation and commissioning",
        ],
      },
      {
        heading: "Engineering & Compliance",
        points: [
          "Design and survey works",
          "Industrial safety expert reviews and documentation",
          "HSE training programmes",
          "Specialist construction equipment",
          "Project supervision and handover",
        ],
      },
    ],
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  subcategory?: string;
  manufacturer?: string;
  origin?: string;
  /** Manufacturer datasheets / brochures available for this product. */
  docs?: ProductDoc[];
};

/** A downloadable manufacturer datasheet attached to a product. */
export type ProductDoc = {
  /** Human label, e.g. "Wafer Type Check Valve" or "Technical Datasheet". */
  label: string;
  /** Path to the compressed PDF, e.g. /pdfs/check-wafer.pdf */
  pdf: string;
  /** Path to the page-1 preview image, e.g. /pdf-thumbs/check-wafer.jpg */
  thumb: string;
  pages: number;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  image?: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "valves",
    name: "Valves",
    description:
      "A complete range of industrial valves for oil, gas, and process service — ball, butterfly, check, control, diaphragm, gate, globe, plastic-lined, plug, safety, and special-purpose valves built to API and ASME standards.",
    image: "/products/cat-valves.jpg",
    products: [
      {
        id: "trunnion-mounted-ball",
        docs: [
          { label: "Trunnion Mounted Ball Valve", pdf: "/pdfs/trunnion-mounted-ball.pdf", thumb: "/pdf-thumbs/trunnion-mounted-ball.jpg", pages: 19 },
        ],
        image: "/products/trunnion-mounted-ball.jpg",
        name: "Trunnion Mounted Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Trunnion-mounted ball valve with the ball supported top and bottom, reducing operating torque for large-bore, high-pressure pipeline service. Two-piece and three-piece bodies, full or reduced bore.",
      },
      {
        id: "ball-valve-3pc",
        docs: [
          { label: "Three-Piece Ball Valve", pdf: "/pdfs/ball-valve-3pc.pdf", thumb: "/pdf-thumbs/ball-valve-3pc.jpg", pages: 3 },
        ],
        image: "/products/ball-valve-3pc.jpg",
        name: "Three-Piece Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Three-piece bolted-body construction allowing in-line maintenance and seat replacement without removing the valve from the pipework. Ideal for high-cycle service.",
      },
      {
        id: "floating-ball-valve",
        docs: [
          { label: "Floating Ball Valve (API 6D)", pdf: "/pdfs/floating-ball-valve.pdf", thumb: "/pdf-thumbs/floating-ball-valve.jpg", pages: 5 },
        ],
        image: "/products/floating-ball-valve.jpg",
        name: "Floating Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Floating ball design where line pressure drives the ball against the downstream seat for bubble-tight shut-off. Full and reduced bore for small- to medium-bore isolation.",
      },
      {
        id: "welded-structure-ball",
        docs: [
          { label: "Welded Structure Ball Valve (API 6D)", pdf: "/pdfs/welded-structure-ball.pdf", thumb: "/pdf-thumbs/welded-structure-ball.jpg", pages: 7 },
        ],
        image: "/products/welded-structure-ball.jpg",
        name: "Welded Structure Ball Valve (API 6D)",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Fully welded body trunnion-mounted ball valve to API 6D for buried and pipeline service, eliminating body-joint leak paths. Suited for transmission lines and zero-fugitive-emission duties.",
      },
      {
        id: "double-block-bleed",
        docs: [
          { label: "Double Block & Bleed Valve", pdf: "/pdfs/double-block-bleed.pdf", thumb: "/pdf-thumbs/double-block-bleed.jpg", pages: 9 },
        ],
        image: "/products/double-block-bleed.jpg",
        name: "Double Block & Bleed Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Provides double isolation with a bleed facility between the seats. Ideal for pressure testing and positive safety isolation.",
      },
      {
        id: "rising-stem-ball",
        docs: [
          { label: "Rising Stem Ball Valve", pdf: "/pdfs/rising-stem-ball.pdf", thumb: "/pdf-thumbs/rising-stem-ball.jpg", pages: 1 },
        ],
        image: "/products/rising-stem-ball.jpg",
        name: "Rising Stem Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Tilt-and-turn rising-stem ball valve that mechanically lifts the ball off the seat before rotating, giving non-rubbing, bubble-tight sealing for severe and high-cycle service.",
      },
      {
        id: "cryogenic-ball-valve",
        docs: [
          { label: "Cryogenic Ball Valve", pdf: "/pdfs/cryogenic-ball-valve.pdf", thumb: "/pdf-thumbs/cryogenic-ball-valve.jpg", pages: 42 },
        ],
        image: "/products/cryogenic-ball-valve.jpg",
        name: "Cryogenic Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Extended-bonnet ball valve for cryogenic service, keeping the stem packing away from the cold fluid. For LNG, liquid nitrogen, oxygen, and ethylene duties.",
      },
      {
        id: "lined-ball-valve",
        docs: [
          { label: "Lined Valves Catalogue", pdf: "/pdfs/lined-ball-valve.pdf", thumb: "/pdf-thumbs/lined-ball-valve.jpg", pages: 1 },
        ],
        image: "/products/lined-ball-valve.jpg",
        name: "Lined Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "PFA/PTFE-lined ball valve isolating the metal body from the process fluid for highly corrosive and high-purity media.",
      },
      {
        id: "multi-way-ball-valve",
        docs: [
          { label: "Multi-Way (3 & 4 Way) Ball Valve", pdf: "/pdfs/multi-way-ball-valve.pdf", thumb: "/pdf-thumbs/multi-way-ball-valve.jpg", pages: 5 },
        ],
        name: "Multi-Way Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Three- and four-way ball valve with L- and T-port balls for diverting or mixing flow between multiple ports in a single body.",
      },
      {
        id: "segment-ball-valve",
        docs: [
          { label: "Segmented Ball Valve", pdf: "/pdfs/segment-ball-valve.pdf", thumb: "/pdf-thumbs/segment-ball-valve.jpg", pages: 8 },
          { label: "Segment Ball Valve — Data Sheet", pdf: "/pdfs/segment-ball-valve-2.pdf", thumb: "/pdf-thumbs/segment-ball-valve-2.jpg", pages: 1 },
        ],
        image: "/products/segment-ball-valve.jpg",
        name: "Segment Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "V-segment ball valve for modulating control of slurries, fibrous, and erosive media, offering high rangeability and shearing capability.",
      },
      {
        id: "top-entry-ball-valve",
        docs: [
          { label: "Top Entry Ball Valve (API 6D)", pdf: "/pdfs/top-entry-ball-valve.pdf", thumb: "/pdf-thumbs/top-entry-ball-valve.jpg", pages: 8 },
        ],
        name: "Top Entry Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Top-entry design allowing in-line inspection and maintenance of the ball, seats, and stem without removing the body from the pipeline.",
      },
      {
        id: "v-notch-ball-valve",
        docs: [
          { label: "V-Notch Ball Valve", pdf: "/pdfs/v-notch-ball-valve.pdf", thumb: "/pdf-thumbs/v-notch-ball-valve.jpg", pages: 1 },
        ],
        image: "/products/v-notch-ball-valve.jpg",
        name: "V-Notch Ball Valve",
        category: "valves",
        subcategory: "Ball Valves",
        description:
          "Contoured V-port control ball valve providing precise throttling with an equal-percentage flow characteristic and tight shut-off.",
      },
      {
        id: "butterfly-valve",
        docs: [
          { label: "Flanged Type Butterfly Valve", pdf: "/pdfs/butterfly-flanged.pdf", thumb: "/pdf-thumbs/butterfly-flanged.jpg", pages: 2 },
          { label: "High Performance — Triple Eccentric", pdf: "/pdfs/butterfly-triple-eccentric.pdf", thumb: "/pdf-thumbs/butterfly-triple-eccentric.jpg", pages: 20 },
          { label: "High Performance — Rubber Lined", pdf: "/pdfs/butterfly-rubber-lined.pdf", thumb: "/pdf-thumbs/butterfly-rubber-lined.jpg", pages: 24 },
          { label: "PTFE Lined Butterfly Valve", pdf: "/pdfs/butterfly-ptfe-lined.pdf", thumb: "/pdf-thumbs/butterfly-ptfe-lined.jpg", pages: 21 },
          { label: "PVC Butterfly Valve (Schedule 80)", pdf: "/pdfs/butterfly-pvc.pdf", thumb: "/pdf-thumbs/butterfly-pvc.jpg", pages: 4 },
          { label: "Rubber Seat Butterfly Valve", pdf: "/pdfs/butterfly-rubber-seat.pdf", thumb: "/pdf-thumbs/butterfly-rubber-seat.jpg", pages: 10 },
        ],
        image: "/products/butterfly-valve.jpg",
        name: "Butterfly Valve",
        category: "valves",
        subcategory: "Butterfly Valves",
        description:
          "Concentric and double/triple-offset butterfly valves for isolation and control in large-bore, low-pressure-drop service. Wafer, lug, and flanged bodies.",
      },
      {
        id: "check-valve",
        docs: [
          { label: "Flanged Type Check Valve", pdf: "/pdfs/check-flanged.pdf", thumb: "/pdf-thumbs/check-flanged.jpg", pages: 9 },
          { label: "Wafer Type Check Valve", pdf: "/pdfs/check-wafer.pdf", thumb: "/pdf-thumbs/check-wafer.jpg", pages: 22 },
          { label: "Lug Type Check Valve", pdf: "/pdfs/check-lug.pdf", thumb: "/pdf-thumbs/check-lug.jpg", pages: 4 },
          { label: "Swing Check Valve", pdf: "/pdfs/check-swing.pdf", thumb: "/pdf-thumbs/check-swing.jpg", pages: 5 },
          { label: "Forged Steel Check Valve", pdf: "/pdfs/check-forged-steel.pdf", thumb: "/pdf-thumbs/check-forged-steel.jpg", pages: 18 },
        ],
        image: "/products/check-valve.jpg",
        name: "Check Valve",
        category: "valves",
        subcategory: "Check Valves",
        description:
          "Dual-plate, swing, and tilting-disc check valves that prevent reverse flow with low pressure drop and fast, non-slam closure.",
      },
      {
        id: "schuf-control-valve",
        docs: [
          { label: "SchuF Control Valve Brochure", pdf: "/pdfs/schuf-control-valve.pdf", thumb: "/pdf-thumbs/schuf-control-valve.jpg", pages: 24 },
        ],
        image: "/products/schuf-control-valve.jpg",
        name: "Severe Service Control Valve",
        category: "valves",
        subcategory: "Control Valves",
        description:
          "Engineered severe-service control valve for high pressure drop, flashing, cavitating, and high-temperature conditions. Angle and globe patterns with custom trim for erosive and clogging media.",
        manufacturer: "SchuF",
        origin: "Germany",
      },
      {
        id: "schuf-blowdown-valve",
        docs: [
          { label: "Blowdown Valve", pdf: "/pdfs/schuf-blowdown-valve.pdf", thumb: "/pdf-thumbs/schuf-blowdown-valve.jpg", pages: 14 },
        ],
        image: "/products/schuf-control-valve.jpg",
        name: "Blowdown / Depressurising Valve",
        category: "valves",
        subcategory: "Control Valves",
        description:
          "Severe-service blowdown valve designed for high differential pressure and high-temperature emergency depressurisation duties.",
        manufacturer: "SchuF",
        origin: "Germany",
      },
      {
        id: "arc-valve",
        docs: [
          { label: "Automatic Recirculation Valve", pdf: "/pdfs/arc-valve.pdf", thumb: "/pdf-thumbs/arc-valve.jpg", pages: 12 },
        ],
        image: "/products/arc-valve.jpg",
        name: "Automatic Recirculation Valve",
        category: "valves",
        subcategory: "Control Valves",
        description:
          "Combined check and recirculation valve protecting centrifugal pumps from minimum-flow damage.",
      },
      {
        id: "diaphragm-valve",
        docs: [
          { label: "Diaphragm Valves Catalogue", pdf: "/pdfs/diaphragm-valve.pdf", thumb: "/pdf-thumbs/diaphragm-valve.jpg", pages: 28 },
        ],
        name: "Diaphragm Valve",
        category: "valves",
        subcategory: "Diaphragm Valves",
        description:
          "Weir and straight-through diaphragm valves for corrosive, abrasive, and hygienic media. Lined body options isolate the working parts from the process fluid.",
      },
      {
        id: "gate-valve",
        docs: [
          { label: "API 6A Gate Valve", pdf: "/pdfs/gate-api-6a.pdf", thumb: "/pdf-thumbs/gate-api-6a.jpg", pages: 3 },
          { label: "Bolted Bonnet Wedge Gate Valve", pdf: "/pdfs/gate-bolted-bonnet-wedge.pdf", thumb: "/pdf-thumbs/gate-bolted-bonnet-wedge.jpg", pages: 9 },
          { label: "Conduit Bolted Bonnet Slab Gate Valve", pdf: "/pdfs/gate-conduit-slab.pdf", thumb: "/pdf-thumbs/gate-conduit-slab.jpg", pages: 20 },
          { label: "Parallel Slide Bolted Bonnet Gate Valve", pdf: "/pdfs/gate-parallel-slide.pdf", thumb: "/pdf-thumbs/gate-parallel-slide.jpg", pages: 2 },
          { label: "Wedge Type Pressure Seal Bonnet Gate Valve", pdf: "/pdfs/gate-pressure-seal.pdf", thumb: "/pdf-thumbs/gate-pressure-seal.jpg", pages: 10 },
        ],
        image: "/products/gate-valve.jpg",
        name: "Gate Valve",
        category: "valves",
        subcategory: "Gate Valves",
        description:
          "Full-bore gate valve for on/off isolation service. Available in OS&Y and non-rising stem configurations in forged and cast bodies.",
      },
      {
        id: "globe-valve-602",
        docs: [
          { label: "Forged Globe Valve (API 602)", pdf: "/pdfs/globe-valve-602.pdf", thumb: "/pdf-thumbs/globe-valve-602.jpg", pages: 9 },
        ],
        image: "/products/globe-valve-602.jpg",
        name: "Forged Globe Valve (API 602)",
        category: "valves",
        subcategory: "Globe Valves",
        description:
          "Forged steel globe valve to API 602 for throttling and regulation in small-bore, high-pressure piping. Excellent for start-up and shutdown duties.",
      },
      {
        id: "plastic-lined-valve",
        docs: [
          { label: "Lined Ball Valve", pdf: "/pdfs/plastic-lined-ball.pdf", thumb: "/pdf-thumbs/plastic-lined-ball.jpg", pages: 4 },
          { label: "Lined Plug Valve (Anti-Corrosion)", pdf: "/pdfs/plastic-lined-plug.pdf", thumb: "/pdf-thumbs/plastic-lined-plug.jpg", pages: 5 },
          { label: "Lined Check Valve", pdf: "/pdfs/plastic-lined-check.pdf", thumb: "/pdf-thumbs/plastic-lined-check.jpg", pages: 4 },
        ],
        image: "/products/plastic-lined-valve.jpg",
        name: "Plastic Lined Valve",
        category: "valves",
        subcategory: "Plastic Lined Valves",
        description:
          "PFA/PTFE/FEP-lined valves for aggressive acids, chlorine, and high-purity chemical service, fully isolating the body from the media.",
      },
      {
        id: "plug-valve",
        docs: [
          { label: "Regular Pattern Plug Valve", pdf: "/pdfs/plug-regular-pattern.pdf", thumb: "/pdf-thumbs/plug-regular-pattern.jpg", pages: 33 },
          { label: "Short Pattern Plug Valve", pdf: "/pdfs/plug-short-pattern.pdf", thumb: "/pdf-thumbs/plug-short-pattern.jpg", pages: 4 },
          { label: "Venturi Pattern Plug Valve", pdf: "/pdfs/plug-venturi-pattern.pdf", thumb: "/pdf-thumbs/plug-venturi-pattern.jpg", pages: 13 },
          { label: "Jacketed Plug Valve", pdf: "/pdfs/plug-jacketed.pdf", thumb: "/pdf-thumbs/plug-jacketed.jpg", pages: 28 },
        ],
        image: "/products/plug-valve.jpg",
        name: "Plug Valve",
        category: "valves",
        subcategory: "Plug Valves",
        description:
          "Lubricated and sleeved plug valves for quick quarter-turn isolation, including high-pressure and abrasive-service designs.",
      },
      {
        id: "safety-valve",
        docs: [
          { label: "Safety Relief Valve", pdf: "/pdfs/safety-relief.pdf", thumb: "/pdf-thumbs/safety-relief.jpg", pages: 2 },
          { label: "Conventional Safety Valve", pdf: "/pdfs/safety-conventional.pdf", thumb: "/pdf-thumbs/safety-conventional.jpg", pages: 3 },
          { label: "Balanced Safety Valve", pdf: "/pdfs/safety-balanced.pdf", thumb: "/pdf-thumbs/safety-balanced.jpg", pages: 3 },
          { label: "Spring-Loaded Safety Valve", pdf: "/pdfs/safety-spring-loaded.pdf", thumb: "/pdf-thumbs/safety-spring-loaded.jpg", pages: 9 },
          { label: "Full Lift Safety Valve", pdf: "/pdfs/safety-full-lift.pdf", thumb: "/pdf-thumbs/safety-full-lift.jpg", pages: 2 },
          { label: "Low Lift Safety Relief Valve", pdf: "/pdfs/safety-low-lift.pdf", thumb: "/pdf-thumbs/safety-low-lift.jpg", pages: 1 },
          { label: "Pressure/Vacuum Relief Valve", pdf: "/pdfs/safety-vacuum.pdf", thumb: "/pdf-thumbs/safety-vacuum.jpg", pages: 6 },
          { label: "Pilot-Operated Safety Valve", pdf: "/pdfs/safety-pilot-operated.pdf", thumb: "/pdf-thumbs/safety-pilot-operated.jpg", pages: 3 },
        ],
        image: "/products/safety-valve.jpg",
        name: "Safety Relief Valve",
        category: "valves",
        subcategory: "Safety Valves",
        description:
          "Spring-loaded safety valve protecting vessels and piping from overpressure. API 526 and EN ISO 4126 compliant.",
      },
      {
        id: "special-valve",
        docs: [
          { label: "Angle Choke Valve", pdf: "/pdfs/special-angle-choke.pdf", thumb: "/pdf-thumbs/special-angle-choke.jpg", pages: 28 },
          { label: "Inline & Angle Control Valve", pdf: "/pdfs/special-angle-control.pdf", thumb: "/pdf-thumbs/special-angle-control.jpg", pages: 16 },
          { label: "Bottom Outlet Valve", pdf: "/pdfs/special-bottom-outlet.pdf", thumb: "/pdf-thumbs/special-bottom-outlet.jpg", pages: 44 },
          { label: "Changeover Valve", pdf: "/pdfs/special-changeover.pdf", thumb: "/pdf-thumbs/special-changeover.jpg", pages: 6 },
          { label: "Cryogenic Globe Valve", pdf: "/pdfs/special-cryogenic-globe.pdf", thumb: "/pdf-thumbs/special-cryogenic-globe.jpg", pages: 4 },
          { label: "Delayed Coker Valve", pdf: "/pdfs/special-delayed-coker.pdf", thumb: "/pdf-thumbs/special-delayed-coker.jpg", pages: 13 },
          { label: "Diverter Valve", pdf: "/pdfs/special-diverter.pdf", thumb: "/pdf-thumbs/special-diverter.jpg", pages: 12 },
          { label: "In-Tank Valve", pdf: "/pdfs/special-in-tank.pdf", thumb: "/pdf-thumbs/special-in-tank.jpg", pages: 6 },
          { label: "Lift Plug Valve", pdf: "/pdfs/special-lift-plug.pdf", thumb: "/pdf-thumbs/special-lift-plug.jpg", pages: 16 },
          { label: "Line Blind Valve", pdf: "/pdfs/special-line-blind.pdf", thumb: "/pdf-thumbs/special-line-blind.jpg", pages: 16 },
          { label: "Maniflow Selector Valve", pdf: "/pdfs/special-maniflow-selector.pdf", thumb: "/pdf-thumbs/special-maniflow-selector.jpg", pages: 12 },
          { label: "Sampling Valve", pdf: "/pdfs/special-sampling.pdf", thumb: "/pdf-thumbs/special-sampling.jpg", pages: 12 },
          { label: "Special Ball Valve", pdf: "/pdfs/special-ball.pdf", thumb: "/pdf-thumbs/special-ball.jpg", pages: 20 },
          { label: "Special Gate Valve", pdf: "/pdfs/special-gate.pdf", thumb: "/pdf-thumbs/special-gate.jpg", pages: 12 },
          { label: "Special Globe Valve", pdf: "/pdfs/special-globe.pdf", thumb: "/pdf-thumbs/special-globe.jpg", pages: 32 },
          { label: "Spray-Rinse & Steam Handling Valve", pdf: "/pdfs/special-spray-rinse.pdf", thumb: "/pdf-thumbs/special-spray-rinse.jpg", pages: 8 },
        ],
        image: "/products/special-valve.jpg",
        name: "Special / Engineered Valve",
        category: "valves",
        subcategory: "Special Valves",
        description:
          "Engineered and special-purpose valves built to project specification for non-standard sizes, materials, and severe-service conditions.",
      },
    ],
  },
  {
    id: "pumps",
    name: "Pumps",
    description:
      "Air-operated diaphragm, peristaltic hose, magnetic drive, drum, and slurry pumps for chemical, hygienic, and abrasive fluid handling — from Verder, Techniflo, and SlurryPro.",
    image: "/products/cat-pumps.jpeg",
    products: [
      {
        id: "verderair-aodd",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/verderair-aodd.pdf", thumb: "/pdf-thumbs/verderair-aodd.jpg", pages: 16 },
        ],
        image: "/products/verderair-aodd.jpg",
        name: "Verderair Air-Operated Diaphragm Pump",
        category: "pumps",
        subcategory: "Air-Operated Diaphragm",
        description:
          "Air-operated double diaphragm (AODD) pump for chemical transfer, slurries, and shear-sensitive fluids. Self-priming, dry-run safe, and seal-less, with metal and plastic body options for aggressive media.",
        manufacturer: "Verderair (Verder Group)",
        origin: "Netherlands",
      },
      {
        id: "verderair-hc-pure",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/verderair-hc-pure.pdf", thumb: "/pdf-thumbs/verderair-hc-pure.jpg", pages: 2 },
        ],
        image: "/products/verderair-hc-pure.jpg",
        name: "Verderair HC Pure Hygienic Diaphragm Pump",
        category: "pumps",
        subcategory: "Air-Operated Diaphragm",
        description:
          "Ultra-clean PTFE air-operated diaphragm pump engineered for hygienic, pharmaceutical, and high-purity transfer where product contamination must be eliminated.",
        manufacturer: "Verderair (Verder Group)",
        origin: "Netherlands",
      },
      {
        id: "verderflex-peristaltic",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/verderflex-peristaltic.pdf", thumb: "/pdf-thumbs/verderflex-peristaltic.jpg", pages: 16 },
        ],
        image: "/products/verderflex-peristaltic.jpg",
        name: "Verderflex Peristaltic Hose Pump",
        category: "pumps",
        subcategory: "Peristaltic Hose",
        description:
          "Heavy-duty peristaltic (hose) pump for abrasive, viscous, and high-solids slurries. Seal-less and valve-less, with only the hose contacting the fluid, giving accurate metering and dry-run capability.",
        manufacturer: "Verderflex (Verder Group)",
        origin: "Netherlands",
      },
      {
        id: "techniflo-mag-drive",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/techniflo-mag-drive.pdf", thumb: "/pdf-thumbs/techniflo-mag-drive.jpg", pages: 20 },
        ],
        image: "/products/techniflo-mag-drive.jpg",
        name: "Chemical Magnetic Drive Pump",
        category: "pumps",
        subcategory: "Magnetic Drive",
        description:
          "Seal-less magnetic drive centrifugal pump for corrosive and hazardous chemicals. The magnetic coupling removes shaft seals and the associated leakage path, ensuring zero emissions.",
        manufacturer: "Techniflo",
        origin: "India",
      },
      {
        id: "techniflo-drum-pump",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/techniflo-drum-pump.pdf", thumb: "/pdf-thumbs/techniflo-drum-pump.jpg", pages: 16 },
        ],
        image: "/products/techniflo-drum-pump.jpg",
        name: "Drum / Barrel Pump",
        category: "pumps",
        subcategory: "Drum Pumps",
        description:
          "Portable drum and barrel pump for emptying containers, IBCs, and drums of acids, solvents, and other chemicals. Interchangeable tube materials suit a wide range of media.",
        manufacturer: "Techniflo",
        origin: "India",
      },
      {
        id: "slurrypro-slurry-pump",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/slurrypro-slurry-pump.pdf", thumb: "/pdf-thumbs/slurrypro-slurry-pump.jpg", pages: 16 },
        ],
        image: "/products/slurrypro-slurry-pump.jpg",
        name: "Heavy-Duty Slurry Pump",
        category: "pumps",
        subcategory: "Slurry Pumps",
        description:
          "Centrifugal slurry pump with hard-metal and elastomer-lined wet ends for highly abrasive mining, tailings, and process slurries. Interchangeable with common industry-standard slurry pump ranges.",
        manufacturer: "SlurryPro",
        origin: "Australia",
      },
    ],
  },
  {
    id: "compressors",
    name: "Compressors & Cryogenics",
    description:
      "Reciprocating gas compressors, diaphragm and oil-free boosters, and cryogenic pumps from the Didwania Group — Knox Western (USA), Ventos (Italy), TS Cryo (Italy), and Cryopump.",
    image: "/products/valves.jpg",
    products: [
      {
        id: "kw-tp-series",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/knox-western.pdf", thumb: "/pdf-thumbs/knox-western.jpg", pages: 14 },
        ],
        image: "/products/kw-tp-series.jpg",
        name: "Knox Western TP Series Reciprocating Gas Compressor",
        category: "compressors",
        subcategory: "Reciprocating Compressors",
        description:
          "API 618 reciprocating gas compressor, single-stage to six-stage, with 1¾\" to 18½\" cylinders. Discharge pressures up to 7,800 psig, 30–560 HP, 550–1,800 RPM, with oil-free and double distance-piece options for hydrogen, syngas, ammonia, biogas, and CNG.",
        manufacturer: "Knox Western (Didwania Group)",
        origin: "USA",
      },
      {
        id: "kw-eagle-series",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/knox-western.pdf", thumb: "/pdf-thumbs/knox-western.jpg", pages: 14 },
        ],
        image: "/products/kw-eagle-series.jpg",
        name: "Knox Western Eagle Series Reciprocating Gas Compressor",
        category: "compressors",
        subcategory: "Reciprocating Compressors",
        description:
          "Heavy-duty API 618 reciprocating compressor in Eagle 2000/3000/4000/6000 frames. Discharge up to 7,200 psig, 200–1,400 HP, 24,000–60,000 lb combined rod loads, with progressive-lube or non-lube cylinders.",
        manufacturer: "Knox Western (Didwania Group)",
        origin: "USA",
      },
      {
        id: "ventos-diaphragm",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/ventos-diaphragm.pdf", thumb: "/pdf-thumbs/ventos-diaphragm.jpg", pages: 10 },
        ],
        name: "Ventos Diaphragm Compressor",
        category: "compressors",
        subcategory: "Diaphragm Compressors",
        description:
          "Hermetically sealed diaphragm compressor for high-purity and hazardous gas compression up to 350 bar with zero leakage. Suited for hydrogen, oxygen, helium, and specialty gases such as fluorine, silane, and nitrogen monoxide.",
        manufacturer: "Ventos Compressors (CET Engineering)",
        origin: "Italy",
      },
      {
        id: "ventos-h2-booster",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/ventos-diaphragm.pdf", thumb: "/pdf-thumbs/ventos-diaphragm.jpg", pages: 10 },
        ],
        name: "Ventos Oil-Free Hydraulic Booster (O₂ & H₂)",
        category: "compressors",
        subcategory: "Diaphragm Compressors",
        description:
          "Oil-free hydraulic gas booster for filling oxygen from PSA plants and boosting hydrogen up to 500 bar into cylinders. Clean, contamination-free compression for green-energy and gas-filling stations.",
        manufacturer: "Ventos Compressors (CET Engineering)",
        origin: "Italy",
      },
      {
        id: "didwania-cng",
        docs: [
          { label: "Company Introduction", pdf: "/pdfs/didwania-group-intro.pdf", thumb: "/pdf-thumbs/didwania-group-intro.jpg", pages: 32 },
        ],
        image: "/products/didwania-cng.jpg",
        name: "CNG Compressor & Hydraulic Booster",
        category: "compressors",
        subcategory: "CNG Systems",
        description:
          "CNG compression packages and hydraulic boosters for mother and daughter fuelling stations, with over 1,500 units operating globally. IoT-connected for remote health monitoring and compressor control.",
        manufacturer: "Indian Compressors Ltd (Didwania Group)",
        origin: "India",
      },
      {
        id: "cryopump-cryogenic",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/cryopump-cryogenic.pdf", thumb: "/pdf-thumbs/cryopump-cryogenic.jpg", pages: 12 },
        ],
        image: "/products/cryopump-cryogenic.jpg",
        name: "Cryopump Cryogenic Pump",
        category: "compressors",
        subcategory: "Cryogenic Pumps",
        description:
          "Reciprocating and centrifugal cryogenic pumps for cylinder filling, transfer, and process duty on LOX, LIN, LAR, CO₂, N₂O, LNG, and ethylene.",
        manufacturer: "Cryopump (Didwania Group)",
        origin: "Swiss Technology",
      },
      {
        id: "tscryo-lng-pump",
        docs: [
          { label: "Company Introduction", pdf: "/pdfs/didwania-group-intro.pdf", thumb: "/pdf-thumbs/didwania-group-intro.jpg", pages: 32 },
        ],
        image: "/products/tscryo-lng-pump.jpg",
        name: "TS Cryo Submerged LNG Pump & Transfer Systems",
        category: "compressors",
        subcategory: "Cryogenic Pumps",
        description:
          "Submerged-motor cryogenic pumps for LNG fuelling, plus TSV-series super-insulated vacuum-jacketed transfer lines, sub-coolers, and turnkey filling stations for laboratories and bio-banking.",
        manufacturer: "TS Cryo (TS Italia)",
        origin: "Italy",
      },
    ],
  },
  {
    id: "instrumentation",
    name: "Instrumentation & Control",
    description:
      "Flow, pressure, temperature, level, and density instrumentation for process monitoring and control — from EUREKA, KOBOLD, Weksler, Tecfluid, and Heinrichs.",
    image: "/products/valves.jpg",
    products: [
      {
        id: "eureka-glass-rotameter",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-glass-rotameter.pdf", thumb: "/pdf-thumbs/eureka-glass-rotameter.jpg", pages: 4 },
        ],
        image: "/products/eureka-glass-rotameter.jpg",
        name: "Glass Tube Rotameter & Loflometer",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Variable-area glass tube rotameter and low-flow Loflometer for direct visual indication of liquid and gas flow rates. Simple, reliable, and cost-effective metering for utilities and process lines.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-metal-rotameter",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-metal-rotameter.pdf", thumb: "/pdf-thumbs/eureka-metal-rotameter.jpg", pages: 6 },
        ],
        image: "/products/eureka-metal-rotameter.jpg",
        name: "Metal Tube Rotameter",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Variable-area metal tube rotameter with magnetic-follower indication for opaque fluids, steam, and high pressure/temperature service. Optional alarm contacts and 4–20 mA transmitter.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-bypass-rotameter",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-bypass-rotameter.pdf", thumb: "/pdf-thumbs/eureka-bypass-rotameter.jpg", pages: 6 },
        ],
        image: "/products/eureka-bypass-rotameter.jpg",
        name: "Bypass Rotameter",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Bypass rotameter assembly measuring a proportional slipstream across an orifice in the main line, allowing economical metering of large pipe diameters.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-emf",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-emf.pdf", thumb: "/pdf-thumbs/eureka-emf.jpg", pages: 12 },
        ],
        image: "/products/eureka-emf.jpg",
        name: "Electromagnetic Flowmeter (EMF)",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Electromagnetic flowmeter for conductive liquids, slurries, and effluents. No moving parts and a full-bore obstruction-free design give low pressure drop and high accuracy.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-eusonic",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-eusonic.pdf", thumb: "/pdf-thumbs/eureka-eusonic.jpg", pages: 2 },
        ],
        name: "EUSONIC Ultrasonic Flowmeter",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Transit-time ultrasonic flowmeter in clamp-on and inline configurations for non-intrusive measurement of liquids in full pipes.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-vortex",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-vortex.pdf", thumb: "/pdf-thumbs/eureka-vortex.jpg", pages: 3 },
        ],
        image: "/products/eureka-vortex.jpg",
        name: "Vortex Flowmeter",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Vortex-shedding flowmeter for steam, gas, and low-viscosity liquids. Wide rangeability with no moving parts for demanding process duties.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-eubar",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-eubar.pdf", thumb: "/pdf-thumbs/eureka-eubar.jpg", pages: 2 },
        ],
        name: "EUBAR Averaging Pitot Tube",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Insertion averaging pitot tube generating a differential-pressure signal proportional to flow, with very low permanent pressure loss for large ducts and pipes.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-eurekone",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-eurekone.pdf", thumb: "/pdf-thumbs/eureka-eurekone.jpg", pages: 6 },
        ],
        image: "/products/eureka-eurekone.jpg",
        name: "EUREKONE Cone Flowmeter",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Differential-pressure cone-type flow element that conditions the flow profile for accurate measurement in short straight-run installations.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-aerofoil",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-aerofoil.pdf", thumb: "/pdf-thumbs/eureka-aerofoil.jpg", pages: 2 },
        ],
        image: "/products/eureka-aerofoil.jpg",
        name: "Aerofoil Flow Element",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Aerofoil-section primary flow element for low-pressure air and gas ducting, producing a differential-pressure signal with minimal energy loss.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-orifice-assembly",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-orifice-assembly.pdf", thumb: "/pdf-thumbs/eureka-orifice-assembly.jpg", pages: 6 },
        ],
        name: "Orifice Flange Assembly",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Orifice plates, carriers, and flange assemblies engineered to ISO 5167 for differential-pressure flow measurement of liquids, gases, and steam.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-venturi",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-venturi.pdf", thumb: "/pdf-thumbs/eureka-venturi.jpg", pages: 2 },
        ],
        name: "Venturi Tube",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Classical and fabricated Venturi tubes for differential-pressure flow measurement with high pressure recovery and low permanent loss in large lines.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-flow-nozzle",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-flow-nozzle.pdf", thumb: "/pdf-thumbs/eureka-flow-nozzle.jpg", pages: 2 },
        ],
        name: "Flow Nozzle",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Flow nozzle primary element for high-velocity steam and high-temperature service where an orifice plate would erode.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "eureka-sight-flow",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/eureka-sight-flow.pdf", thumb: "/pdf-thumbs/eureka-sight-flow.jpg", pages: 2 },
        ],
        name: "Sight Flow Indicator",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Window, flapper, and rotary sight-flow indicators for quick visual confirmation of flow and flow direction in process lines.",
        manufacturer: "EUREKA Industrial Equipments",
        origin: "India",
      },
      {
        id: "kobold-tmu",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/kobold-tmu.pdf", thumb: "/pdf-thumbs/kobold-tmu.jpg", pages: 7 },
        ],
        image: "/products/kobold-tmu.jpg",
        name: "KOBOLD TMU Coriolis Mass Flowmeter",
        category: "instrumentation",
        subcategory: "Flow",
        description:
          "Thermal mass flowmeter for direct mass-flow measurement of compressed air and gases without additional pressure or temperature compensation.",
        manufacturer: "KOBOLD",
        origin: "Germany",
      },
      {
        id: "weksler-pressure-gauge",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/weksler-pressure-gauge.pdf", thumb: "/pdf-thumbs/weksler-pressure-gauge.jpg", pages: 48 },
        ],
        image: "/products/weksler-pressure-gauge.jpg",
        name: "Weksler Bourdon Tube Pressure Gauge",
        category: "instrumentation",
        subcategory: "Pressure",
        description:
          "Industrial and process Bourdon tube pressure gauges, including liquid-filled and stainless cases, for rugged on-site pressure indication.",
        manufacturer: "Weksler (Ashcroft)",
        origin: "USA",
      },
      {
        id: "kobold-pad-pas",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/kobold-pad-pas.pdf", thumb: "/pdf-thumbs/kobold-pad-pas.jpg", pages: 67 },
          { label: "Model PAS — Operating Manual", pdf: "/pdfs/kobold-pas.pdf", thumb: "/pdf-thumbs/kobold-pas.jpg", pages: 52 },
        ],
        image: "/products/kobold-pad-pas.jpg",
        name: "KOBOLD Model PAD / PAS Smart Pressure Transmitter",
        category: "instrumentation",
        subcategory: "Pressure",
        description:
          "Microprocessor-based smart pressure transmitter with 4–20 mA + HART output, in differential (PAD-D), gauge (PAD-G), high-line-pressure (PAD-H), and flow/totaliser (PAD-F) variants. ATEX Ex d IIC T6, ranges from 1.5 kPa to 41,370 kPa.",
        manufacturer: "KOBOLD Messring",
        origin: "Germany",
      },
      {
        id: "kobold-twl",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/kobold-twl.pdf", thumb: "/pdf-thumbs/kobold-twl.jpg", pages: 28 },
          { label: "Model TWL — Ex ia Operating Manual", pdf: "/pdfs/kobold-twl-exia.pdf", thumb: "/pdf-thumbs/kobold-twl-exia.jpg", pages: 25 },
        ],
        name: "KOBOLD Model TWL Temperature Sensor (Pt100)",
        category: "instrumentation",
        subcategory: "Temperature",
        description:
          "Explosion-proof Pt100 resistance thermometer with replaceable measuring insert, range −30 to +550 °C (option −80 to +600 °C). Matched welded, bar-stock, and tapered thermowells (PN25–PN250) and head transmitters with 4–20 mA, HART, or fieldbus output. ATEX Ex d IIC T6.",
        manufacturer: "KOBOLD Mesura",
        origin: "Spain",
      },
      {
        id: "tecfluid-series-lt",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/tecfluid-series-lt.pdf", thumb: "/pdf-thumbs/tecfluid-series-lt.jpg", pages: 8 },
          { label: "Bypass Level Indicator NBK — ATEX Operating Manual", pdf: "/pdfs/tecfluid-atex.pdf", thumb: "/pdf-thumbs/tecfluid-atex.jpg", pages: 32 },
        ],
        image: "/products/tecfluid-series-lt.jpg",
        name: "Tecfluid Series LT Magnetic Level Gauge",
        category: "instrumentation",
        subcategory: "Level",
        description:
          "Bypass magnetic level gauge for liquids working on the communicating-vessels principle with a magnetically coupled float. Bi-colour flap or glass-tube indication to 400 °C, ranges 150 mm–15 m, with reed/micro/inductive switches and 4–20 mA, guided-radar (TDR), or HART transmitters. Lloyd's Register type approved.",
        manufacturer: "Tecfluid",
        origin: "Spain",
      },
      {
        id: "heinrichs-dwf",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/heinrichs-dwf.pdf", thumb: "/pdf-thumbs/heinrichs-dwf.jpg", pages: 30 },
        ],
        image: "/products/heinrichs-dwf.jpg",
        name: "Heinrichs Model DWF Density Meter",
        category: "instrumentation",
        subcategory: "Density",
        description:
          "Continuous in-line density and concentration meter for liquids in process and quality-control duties, part of the KOBOLD / Heinrichs measurement group.",
        manufacturer: "Heinrichs (KOBOLD Group)",
        origin: "Germany",
      },
      {
        id: "aptek-instrument-manifolds",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/aptek-instrument-manifolds.pdf", thumb: "/pdf-thumbs/aptek-instrument-manifolds.jpg", pages: 124 },
        ],
        image: "/products/aptek-instrument-manifolds.jpg",
        name: "Instrument Valves, Manifolds & Fittings",
        category: "instrumentation",
        subcategory: "Valves & Fittings",
        description:
          "Two-, three-, and five-valve manifolds, gauge and needle valves, and compression fittings for connecting transmitters and gauges to the process. Available in carbon, stainless, and exotic alloys.",
        manufacturer: "Aptek",
        origin: "India",
      },
    ],
  },
  {
    id: "pipes",
    name: "Pipes & Fittings",
    description:
      "Welded steel pipes, plates, stainless flanges, spiral-wound gaskets, and high-integrity fasteners to API and ASME standards — from LIFECO, Viraj, TSG, and Cooper Turner Beck.",
    image: "/products/cat-pipes.jpg",
    products: [
      {
        id: "lifeco-welded-pipes",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/lifeco-welded-pipes.pdf", thumb: "/pdf-thumbs/lifeco-welded-pipes.jpg", pages: 8 },
        ],
        image: "/products/lifeco-welded-pipes.jpg",
        name: "Welded Steel Pipes",
        category: "pipes",
        subcategory: "Pipes",
        description:
          "ERW and longitudinally welded carbon and stainless steel pipes for transport of oil, gas, water, and process fluids, supplied to API and ASME dimensional standards.",
        manufacturer: "LIFECO",
      },
      {
        id: "lifeco-steel-plates",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/lifeco-steel-plates.pdf", thumb: "/pdf-thumbs/lifeco-steel-plates.jpg", pages: 4 },
        ],
        image: "/products/lifeco-steel-plates.jpg",
        name: "Steel Plates",
        category: "pipes",
        subcategory: "Steel Plates",
        description:
          "Carbon, alloy, and stainless steel plates for pressure vessels, tanks, and structural fabrication, available in a wide range of grades and thicknesses.",
        manufacturer: "LIFECO",
      },
      {
        id: "viraj-flanges",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/viraj-flanges.pdf", thumb: "/pdf-thumbs/viraj-flanges.jpg", pages: 7 },
        ],
        image: "/products/viraj-flanges.jpg",
        name: "Stainless Steel Flanges",
        category: "pipes",
        subcategory: "Flanges",
        description:
          "Weld neck, slip-on, blind, socket weld, and lap-joint stainless steel flanges to ASME B16.5 and B16.47 in raised-face and ring-type-joint patterns, from one of the world's largest integrated stainless flange producers.",
        manufacturer: "Viraj Profiles",
        origin: "India",
      },
      {
        id: "tsg-spiral-gaskets",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/tsg-spiral-gaskets.pdf", thumb: "/pdf-thumbs/tsg-spiral-gaskets.jpg", pages: 16 },
        ],
        image: "/products/tsg-spiral-gaskets.jpg",
        name: "Spiral Wound Gaskets",
        category: "pipes",
        subcategory: "Gaskets",
        description:
          "Spiral wound gaskets with inner and outer guide rings for flanged joints across a wide pressure–temperature range. Graphite, PTFE, and mica filler options for demanding sealing duties.",
        manufacturer: "TSG",
      },
      {
        id: "ctb-fasteners",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/ctb-fasteners.pdf", thumb: "/pdf-thumbs/ctb-fasteners.jpg", pages: 4 },
          { label: "Subsea Products", pdf: "/pdfs/ctb-subsea.pdf", thumb: "/pdf-thumbs/ctb-subsea.jpg", pages: 4 },
        ],
        image: "/products/ctb-fasteners.jpg",
        name: "High-Integrity Fasteners (PowerGen & Subsea)",
        category: "pipes",
        subcategory: "Fasteners",
        description:
          "Critical-application studbolts, nuts, and fasteners for power generation and subsea service, manufactured to exacting metallurgical and traceability requirements.",
        manufacturer: "Cooper Turner Beck",
        origin: "United Kingdom",
      },
    ],
  },
  {
    id: "filtration",
    name: "Filtration & Internals",
    description:
      "Mass-transfer column internals, process filter elements, and reactor internals for refining and petrochemical units — from GTI Solutions, SparksFilters, and Johnson Screens.",
    image: "/products/cat-fittings.jpg",
    products: [
      {
        id: "gtis-tray-technology",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/gtis-tray-technology.pdf", thumb: "/pdf-thumbs/gtis-tray-technology.jpg", pages: 15 },
        ],
        image: "/products/gtis-tray-technology.jpg",
        name: "Distillation Trays",
        category: "filtration",
        subcategory: "Column Internals",
        description:
          "High-performance fractionation trays — sieve, valve, and fixed-valve designs — engineered for capacity, efficiency, and turndown in distillation and absorption columns.",
        manufacturer: "GTI Solutions",
        origin: "USA",
      },
      {
        id: "gtis-packed-tower",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/gtis-packed-tower.pdf", thumb: "/pdf-thumbs/gtis-packed-tower.jpg", pages: 15 },
        ],
        image: "/products/gtis-packed-tower.jpg",
        name: "Random & Structured Packing",
        category: "filtration",
        subcategory: "Column Internals",
        description:
          "Packed-tower technology with random packing, structured packing, and matching liquid distributors for low-pressure-drop mass transfer.",
        manufacturer: "GTI Solutions",
        origin: "USA",
      },
      {
        id: "gtis-tower-internals",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/gtis-tower-internals.pdf", thumb: "/pdf-thumbs/gtis-tower-internals.jpg", pages: 32 },
        ],
        image: "/products/gtis-tower-internals.jpg",
        name: "Tower Internals",
        category: "filtration",
        subcategory: "Column Internals",
        description:
          "Liquid distributors, collectors, support plates, and feed devices that ensure even distribution and reliable performance throughout the column.",
        manufacturer: "GTI Solutions",
        origin: "USA",
      },
      {
        id: "gtis-separation",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/gtis-separation.pdf", thumb: "/pdf-thumbs/gtis-separation.jpg", pages: 17 },
        ],
        image: "/products/gtis-separation.jpg",
        name: "Separation Technology",
        category: "filtration",
        subcategory: "Column Internals",
        description:
          "Mist eliminators, demisters, and inlet/separation devices that remove entrained droplets and improve vapour–liquid separation.",
        manufacturer: "GTI Solutions",
        origin: "USA",
      },
      {
        id: "sparks-filter-elements",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/sparks-filter-elements.pdf", thumb: "/pdf-thumbs/sparks-filter-elements.jpg", pages: 11 },
        ],
        name: "Process Filter Elements",
        category: "filtration",
        subcategory: "Filter Elements",
        description:
          "Replacement filter and coalescer elements for gas and liquid clean-up across refining, gas processing, and chemical plants — engineered as drop-in equivalents to common OEM cartridges.",
        manufacturer: "SparksFilters",
        origin: "USA",
      },
      {
        id: "inlet-diffuser-basket",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/inlet-diffuser-basket.pdf", thumb: "/pdf-thumbs/inlet-diffuser-basket.jpg", pages: 4 },
        ],
        image: "/products/inlet-diffuser-basket.jpg",
        name: "Inlet Diffuser Basket",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Distributes incoming feed evenly across the top of the catalyst bed while arresting debris, protecting the distributor tray below.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "downflow-reactor-internals",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/downflow-internals.pdf", thumb: "/pdf-thumbs/downflow-internals.jpg", pages: 8 },
        ],
        image: "/products/downflow-reactor-internals.jpg",
        name: "Down-Flow Reactor Internals",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Complete distributor trays, support grids, and quench systems for fixed-bed down-flow hydroprocessing reactors, maximising catalyst utilisation and run length.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "scale-traps",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/downflow-internals.pdf", thumb: "/pdf-thumbs/downflow-internals.jpg", pages: 8 },
        ],
        image: "/products/scale-traps.jpg",
        name: "Scale Trap Baskets",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "High-capacity scale-catching baskets installed at the top of the bed to trap corrosion products and particulates, extending cycle length before pressure-drop build-up.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "support-grids",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/downflow-internals.pdf", thumb: "/pdf-thumbs/downflow-internals.jpg", pages: 8 },
        ],
        image: "/products/support-grids.jpg",
        name: "Support Grids",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Profile-wire support grids that hold the catalyst bed and ceramic ball layers while allowing free flow, combining high open area with structural strength.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "shaped-support-grid",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/shaped-support-grid.pdf", thumb: "/pdf-thumbs/shaped-support-grid.jpg", pages: 5 },
        ],
        image: "/products/shaped-support-grid.jpg",
        name: "Shaped Support Grid",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Contoured (dished) support grids matched to the reactor bottom head, eliminating dead zones and maximising active catalyst volume.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "centerpipes",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/radial-internals.pdf", thumb: "/pdf-thumbs/radial-internals.jpg", pages: 12 },
        ],
        image: "/products/centerpipes.jpg",
        name: "Centerpipes",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Profile-wire centerpipes that collect or distribute flow along the axis of radial-flow reactors with high open area and precise slot control.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "outer-screens",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/radial-internals.pdf", thumb: "/pdf-thumbs/radial-internals.jpg", pages: 12 },
        ],
        image: "/products/outer-screens.jpg",
        name: "Outer Screens",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Profile-wire outer (basket) screens for radial-flow reactors, retaining catalyst while distributing flow uniformly across the annulus.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "scallops",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/scallops.pdf", thumb: "/pdf-thumbs/scallops.jpg", pages: 4 },
        ],
        image: "/products/scallops.jpg",
        name: "Scallops",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Vee-wire, perforated-plate, and optimizer scallops lining the reactor wall to distribute flow in radial-flow reactors, available in multiple profiles.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "radial-spider-lateral",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/radial-spider-lateral.pdf", thumb: "/pdf-thumbs/radial-spider-lateral.jpg", pages: 2 },
        ],
        image: "/products/radial-spider-lateral.jpg",
        name: "Radial Spider Lateral System",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Spider-and-lateral distribution/collection system providing uniform radial flow with significantly more usable reactor volume.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "header-laterals",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/header-laterals.pdf", thumb: "/pdf-thumbs/header-laterals.jpg", pages: 2 },
        ],
        image: "/products/header-laterals.jpg",
        name: "Header–Lateral Systems",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Header-and-lateral distributor and collector systems for even flow distribution across large-diameter vessels and reactors.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "outlet-collectors",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/outlet-collectors.pdf", thumb: "/pdf-thumbs/outlet-collectors.jpg", pages: 1 },
        ],
        image: "/products/outlet-collectors.jpg",
        name: "Outlet Collectors",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Profile-wire outlet collectors that gather treated product from the bottom of the reactor while retaining catalyst fines.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "overlay-screens",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/overlay-screens.pdf", thumb: "/pdf-thumbs/overlay-screens.jpg", pages: 2 },
        ],
        image: "/products/overlay-screens.jpg",
        name: "Overlay Screens",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Profile-wire overlay screens fitted over existing support grids or trays to upgrade retention and flow distribution without full replacement.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "floating-holddown-screen",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/floating-holddown-screen.pdf", thumb: "/pdf-thumbs/floating-holddown-screen.jpg", pages: 2 },
        ],
        image: "/products/floating-holddown-screen.jpg",
        name: "StaySafe Floating Hold-Down Screen",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Self-adjusting floating hold-down screen that keeps the catalyst bed compact through settling, preventing channelling and fines migration.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
      {
        id: "manway-holddown-screen",
        docs: [
          { label: "Technical Datasheet", pdf: "/pdfs/manway-holddown-screen.pdf", thumb: "/pdf-thumbs/manway-holddown-screen.jpg", pages: 2 },
        ],
        image: "/products/manway-holddown-screen.jpg",
        name: "StaySafe Manway Hold-Down Screen",
        category: "filtration",
        subcategory: "Reactor Internals",
        description:
          "Sectional hold-down screen that passes through the reactor manway for fast, bolt-free installation and removal during turnarounds.",
        manufacturer: "Johnson Screens",
        origin: "USA",
      },
    ],
  },
  {
    id: "hoses",
    name: "Hoses & Flexible Connections",
    description:
      "Industrial hoses, hose assemblies, and flexible connections for oil, gas, chemical, and utility transfer — from ERRE.DI.",
    image: "/products/fittings.jpg",
    products: [
      {
        id: "errevi-oil-hose",
        docs: [
          { label: "Company Profile", pdf: "/pdfs/errevi-profile.pdf", thumb: "/pdf-thumbs/errevi-profile.jpg", pages: 14 },
        ],
        name: "Oil & Fuel Transfer Hose",
        category: "hoses",
        subcategory: "Industrial Hoses",
        description:
          "Composite and rubber oil and fuel transfer hoses with wire reinforcement and engineered end fittings for loading, unloading, and transfer duties.",
        manufacturer: "ERRE.DI.",
        origin: "Italy",
      },
      {
        id: "errevi-chemical-hose",
        docs: [
          { label: "Company Profile", pdf: "/pdfs/errevi-profile.pdf", thumb: "/pdf-thumbs/errevi-profile.jpg", pages: 14 },
        ],
        name: "Chemical & Composite Hose",
        category: "hoses",
        subcategory: "Industrial Hoses",
        description:
          "Multi-layer composite hoses for acids, solvents, and aggressive chemicals, built for a wide compatibility range with crimped or built-in fittings.",
        manufacturer: "ERRE.DI.",
        origin: "Italy",
      },
      {
        id: "errevi-steam-hose",
        docs: [
          { label: "Company Profile", pdf: "/pdfs/errevi-profile.pdf", thumb: "/pdf-thumbs/errevi-profile.jpg", pages: 14 },
        ],
        name: "Steam & High-Temperature Hose",
        category: "hoses",
        subcategory: "Industrial Hoses",
        description:
          "EPDM steam hose assemblies for saturated and superheated steam service in a range of pressure ratings.",
        manufacturer: "ERRE.DI.",
        origin: "Italy",
      },
      {
        id: "errevi-metallic-hose",
        docs: [
          { label: "Company Profile", pdf: "/pdfs/errevi-profile.pdf", thumb: "/pdf-thumbs/errevi-profile.jpg", pages: 14 },
        ],
        image: "/products/errevi-metallic-hose.jpg",
        name: "Metallic Hose & Expansion Joint",
        category: "hoses",
        subcategory: "Flexible Connections",
        description:
          "Corrugated metallic hoses and bellows-type expansion joints for thermal-expansion compensation and vibration isolation in piping systems.",
        manufacturer: "ERRE.DI.",
        origin: "Italy",
      },
    ],
  },
  {
    id: "centralizers",
    name: "Centralizers",
    description:
      "Bow spring and rigid centralizers for casing placement and cementing operations in oil and gas wells.",
    image: "/products/VariForm-Centralizers.jpg",
    products: [
      {
        id: "bow-spring-centralizer",
        image: "/products/bow-spring-centralizer.jpg",
        name: "Bow Spring Centralizer",
        category: "centralizers",
        description:
          "Standard bow spring centralizer for use in straight and deviated well sections. High restoring force ensures good centralization.",
      },
      {
        id: "rigid-centralizer",
        name: "Rigid Centralizer",
        category: "centralizers",
        description:
          "One-piece solid rigid centralizer for maximum standoff in deviated and horizontal wells.",
      },
      {
        id: "stop-collar",
        name: "Stop Collar",
        category: "centralizers",
        description:
          "Slip-on and set screw stop collar to prevent centralizer movement along the casing string.",
      },
      {
        id: "turbo-centralizer",
        name: "Turbo Centralizer",
        category: "centralizers",
        description:
          "Turbulence-inducing centralizer that improves cement displacement efficiency in critical cementing operations.",
      },
    ],
  },
  {
    id: "actuators",
    name: "Actuators",
    description:
      "Pneumatic, hydraulic, and electric actuators for automated valve control in oil, gas, and process applications.",
    image: "/products/actuators.jpg",
    products: [
      {
        id: "pneumatic-actuator",
        image: "/products/pneumatic-actuator.jpg",
        name: "Pneumatic Scotch-Yoke Actuator",
        category: "actuators",
        description:
          "Spring return and double acting pneumatic actuator for quarter-turn valves. Fail-safe operation for critical applications.",
      },
      {
        id: "rack-pinion-actuator",
        image: "/products/rack-pinion-actuator.jpg",
        name: "Rack & Pinion Actuator",
        category: "actuators",
        description:
          "Compact rack and pinion actuator for ball and butterfly valves. Available in aluminum and stainless steel.",
      },
      {
        id: "electric-actuator",
        image: "/products/electric-actuator.jpg",
        name: "Electric Multi-Turn Actuator",
        category: "actuators",
        description:
          "Electric actuator for gate, globe, and control valves requiring multi-turn operation.",
      },
      {
        id: "hydraulic-actuator",
        name: "Hydraulic Actuator",
        category: "actuators",
        description:
          "High torque hydraulic actuator for large bore valves and subsea applications. Single and double acting designs.",
      },
    ],
  },
  {
    id: "safety",
    name: "Safety Equipment",
    description:
      "Personal protective equipment and safety systems meeting international standards for the oil and gas industry.",
    image: "/products/SAFETY-VALVES.jpg",
    products: [
      {
        id: "ppe",
        image: "/products/ppe.jpg",
        name: "Personal Protective Equipment",
        category: "safety",
        description:
          "Hard hats, safety glasses, gloves, coveralls, and safety footwear meeting EN and ANSI standards.",
      },
      {
        id: "gas-detection",
        image: "/products/gas-detection.jpg",
        name: "Gas Detection Systems",
        category: "safety",
        description:
          "Fixed and portable gas detectors for H2S, LEL, O2, and toxic gas monitoring. ATEX certified.",
      },
      {
        id: "fire-suppression",
        image: "/products/fire-suppression.jpg",
        name: "Fire Suppression Equipment",
        category: "safety",
        description:
          "Fire extinguishers, suppression systems, and fire detection equipment for industrial facilities.",
      },
      {
        id: "fall-protection",
        name: "Fall Protection",
        category: "safety",
        description:
          "Harnesses, lanyards, self-retracting lifelines, and anchorage systems for work at height.",
      },
    ],
  },
  {
    id: "generators",
    name: "Generators",
    description:
      "Diesel and gas generators for standby and prime power in remote oil field and industrial applications.",
    image: "/products/valves.jpg",
    products: [
      {
        id: "diesel-generator",
        image: "/products/diesel-generator.jpg",
        name: "Diesel Generator Set",
        category: "generators",
        description:
          "Skid-mounted diesel generator from 20 kVA to 3000 kVA. Weatherproof canopy and automatic transfer switch available.",
      },
      {
        id: "gas-generator",
        image: "/products/gas-generator.jpg",
        name: "Natural Gas Generator",
        category: "generators",
        description:
          "Associated gas fueled generator for oil field power generation. Reduces flaring and fuel costs.",
      },
    ],
  },
];
