export const COMPANY_INFO = {
  name: "MAHESWARI FABS",
  tagline: "Precision. Strength. Quality.",
  foundedYear: 1983,
  experienceYears: "40+",
  facilitySize: "3,000 Sq. Ft.",
  employeeCount: "8 Skilled Technicians",
  city: "Coimbatore",
  state: "Tamil Nadu",
  address: "81/2, Adhavan Industrial Estate, Chinnavedampatti, Coimbatore – 641049",
  phone: "+91 9994931372",
  phoneDisplay: "+91 9994931372",
  whatsapp: "+91 9994931372",
  email: "contact@maheswarifabs.com",
  mapsUrl: "https://maps.google.com/?q=81/2+Adhavan+Industrial+Estate+Chinnavedampatti+Coimbatore+641049",
  workingHours: "Monday – Saturday: 8:30 AM – 7:30 PM",
};

export const PROCESSES = [
  {
    id: "laser-cutting",
    title: "LASER CUTTING",
    subtitle: "High-Precision CNC Fiber Laser Cutting",
    shortDesc: "High-precision laser cutting for accurate and clean metal components.",
    fullDesc: "Our high-power CNC fiber laser cutting systems deliver supreme dimensional accuracy, burr-free edge finishing, and high-speed processing across Mild Steel, Stainless Steel, and Aluminum with minimal heat-affected zones.",
    image: "/images/laser-cutting.jpg",
    specs: [
      { label: "Machine 1 Bed Size", value: "3000 × 1500 mm" },
      { label: "Machine 1 Power", value: "3 kW Laser" },
      { label: "Machine 1 Brand", value: "Mitsubishi" },
      { label: "Machine 2 Bed Size", value: "3000 × 1500 mm" },
      { label: "Machine 2 Power", value: "12 kW High-Power Laser" },
      { label: "Machine 2 Brand", value: "HSG" },
    ],
    materials: ["Mild Steel (MS)", "Stainless Steel (SS)", "Aluminum", "Brass & Copper Sheets"],
    tolerances: "±0.05 mm",
    features: [
      "Dual high-speed cutting beds (3000 × 1500 mm)",
      "High power 12 kW HSG fiber laser capability",
      "Clean burr-free edge finishes with nitrogen/oxygen assist",
      "Rapid prototyping to high-volume production nesting"
    ]
  },
  {
    id: "bending",
    title: "BENDING",
    subtitle: "CNC Hydraulic Sheet Metal Press Brake Bending",
    shortDesc: "Precision sheet metal bending with high-capacity press brake machines.",
    fullDesc: "Equipped with high-capacity CNC press brakes from industry leaders Hindustan and Amada, we execute complex multi-bend geometries, acute angles, and heavy gauge forming with repeatable angular precision.",
    image: "/images/bending.jpg",
    specs: [
      { label: "Machine 1 Brand", value: "Hindustan Bending Machine" },
      { label: "Machine 1 Length", value: "3000 mm Bed Length" },
      { label: "Machine 1 Capacity", value: "250 Ton Heavy-Duty" },
      { label: "Machine 2 Brand", value: "Amada Bending Machine" },
      { label: "Machine 2 Length", value: "1200 mm Length" },
      { label: "Machine 2 Capacity", value: "35 Ton Precision" },
    ],
    materials: ["Sheet Metal up to 16mm+", "Stainless Steel 304/316", "Formed Structural Profiles"],
    tolerances: "±0.2° Angular Tolerance",
    features: [
      "250-ton heavy-duty Hindustan 3-meter press brake",
      "High-precision Japanese Amada 35-ton press brake",
      "Sectional precision-ground tooling & segmented dies",
      "Zero deformation bending on pre-finished plates"
    ]
  },
  {
    id: "power-press",
    title: "POWER PRESS",
    subtitle: "High-Tonnage Mechanical & Hydraulic Pressing",
    shortDesc: "Reliable high-force pressing solutions for industrial metal components.",
    fullDesc: "Our heavy-duty mechanical power presses and Parani hydraulic presses enable high-volume blanking, punching, deep drawing, embossing, and uniform component forming with robust structural integrity.",
    image: "/images/power-press.jpg",
    specs: [
      { label: "Primary Power Press", value: "Mechanical Power Press" },
      { label: "Power Press Capacity", value: "60 Ton Force" },
      { label: "Hydraulic Press Brand", value: "Parani" },
      { label: "Hydraulic Capacity", value: "40 Ton Force" },
    ],
    materials: ["Carbon Steel", "CRCA Sheets", "Galvanized Iron", "Perforated Metal"],
    tolerances: "Standard ISO Industrial",
    features: [
      "Heavy 60 Ton mechanical power press for rapid punching",
      "40 Ton Parani hydraulic press for controlled deep forming",
      "Custom compound tooling & continuous feeding setups",
      "High-speed cycle times for volume manufacturing"
    ]
  },
  {
    id: "welding",
    title: "WELDING",
    subtitle: "Industrial TIG, Arc & Precision Resistance Spot Welding",
    shortDesc: "Strong and reliable welding solutions for durable fabricated components.",
    fullDesc: "Our certified welding technicians provide structural arc welding, clean TIG welding for aesthetic stainless joints, and high-efficiency spot welding up to 2+2 mm sheet thickness for enclosure assemblies and structural frameworks.",
    image: "/images/welding.jpg",
    specs: [
      { label: "Arc Welding", value: "Heavy Structural Welding" },
      { label: "TIG Welding", value: "Precision Argon Arc Welding" },
      { label: "Spot Welding", value: "High-Efficiency Resistance" },
      { label: "Spot Welding Thickness", value: "2 + 2 mm Sheet Capacity" },
    ],
    materials: ["Mild Steel Structures", "Stainless Steel Enclosures", "Sheet Assemblies", "Tubular Frames"],
    tolerances: "AWS / IS Quality Standards",
    features: [
      "Resistance Spot Welding up to 2+2 mm gauge",
      "Spatter-free TIG welding for architectural & food-grade finishes",
      "Heavy structural Arc welding with weld penetration testing",
      "Fabrication jigging and fixture setups for consistent batch assemblies"
    ]
  }
];

export const MACHINERY_LIST = [
  {
    id: "m-1",
    name: "CNC Laser Cutting Machine",
    brand: "HSG",
    category: "Laser Cutting",
    specs: "3000 × 1500 mm Bed | 12 kW High-Power Laser",
    details: "High-speed 12kW fiber laser capable of slicing thick MS & SS sheets with clean nitrogen cutting edge.",
    badge: "12 kW High Power",
    image: "/images/laser-hsg.jpg"
  },
  {
    id: "m-2",
    name: "CNC Laser Cutting Machine",
    brand: "Mitsubishi",
    category: "Laser Cutting",
    specs: "3000 × 1500 mm Bed | 3 kW Fiber Laser",
    details: "Precision Japanese laser resonator engineered for high accuracy and fine contour geometry cuts.",
    badge: "High Precision",
    image: "/images/laser-cutting.jpg"
  },
  {
    id: "m-3",
    name: "Heavy CNC Bending Machine",
    brand: "Hindustan",
    category: "Bending",
    specs: "3000 mm Length | 250 Ton Capacity",
    details: "High-tonnage 3-meter press brake designed for bending thick industrial plates and long channel sections.",
    badge: "250 Ton Heavy Duty",
    image: "/images/bending.jpg"
  },
  {
    id: "m-4",
    name: "Precision Bending Machine",
    brand: "Amada",
    category: "Bending",
    specs: "1200 mm Length | 35 Ton Capacity",
    details: "World-class Japanese precision press brake delivering micron-accurate repeatable bend angles.",
    badge: "Precision Japan",
    image: "/images/hero.jpg"
  },
  {
    id: "m-5",
    name: "Industrial Power Press",
    brand: "Standard Industrial",
    category: "Power Press",
    specs: "60 Ton Capacity",
    details: "Heavy rigid frame power press for rapid blanking, punching, and forming operations.",
    badge: "60 Ton Mechanical",
    image: "/images/power-press.jpg"
  },
  {
    id: "m-6",
    name: "Hydraulic Press",
    brand: "Parani",
    category: "Power Press",
    specs: "40 Ton Capacity",
    details: "Controlled hydraulic pressure for deep drawing, embossing, and uniform component pressing.",
    badge: "40 Ton Hydraulic",
    image: "/images/power-press.jpg"
  },
  {
    id: "m-7",
    name: "Hydraulic Press Brake",
    brand: "SLNT",
    category: "Bending",
    specs: "125 Ton Capacity",
    details: "Medium-to-heavy gauge sheet bending with reliable hydraulic pressure synchronization.",
    badge: "125 Ton Hydraulic",
    image: "/images/bending.jpg"
  },
  {
    id: "m-8",
    name: "Hydraulic Press Brake",
    brand: "Industrial Standard",
    category: "Bending",
    specs: "80 Ton Capacity",
    details: "Fast cycle bending press brake optimized for sheet metal enclosures and cabinet components.",
    badge: "80 Ton Capacity",
    image: "/images/bending.jpg"
  },
  {
    id: "m-9",
    name: "Resistance Spot Welding Machine",
    brand: "Industrial Heavy",
    category: "Welding",
    specs: "2 + 2 mm Capacity | Pneumatic Resistance",
    details: "High-efficiency resistance spot welding machine engineered for rapid sheet metal enclosure assemblies and structural brackets.",
    badge: "2 + 2 mm Spot",
    image: "/images/welding.jpg"
  },
  {
    id: "m-10",
    name: "TIG & Arc Welding Station",
    brand: "Industrial Inverter",
    category: "Welding",
    specs: "Argon Shielded TIG & Heavy Arc",
    details: "High-precision welding workstations delivering spatter-free aesthetic stainless steel joints and robust heavy structural welds.",
    badge: "TIG & Arc",
    image: "/images/welding_fabrication_1791296128591.jpg"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Requirement",
    desc: "Consultation on project specifications, raw material requirements, and volume batch sizing.",
    icon: "ClipboardList"
  },
  {
    step: "02",
    title: "Design / Drawing",
    desc: "CAD/CAM nesting optimization, DXF/DWG file verification, and toolpath programming.",
    icon: "FileCode2"
  },
  {
    step: "03",
    title: "Laser Cutting",
    desc: "High-speed fiber laser cutting (up to 12kW) with accurate kerf and burr-free edge quality.",
    icon: "Zap"
  },
  {
    step: "04",
    title: "Bending / Pressing",
    desc: "Precision CNC press brake forming (up to 250T) and hydraulic/power press shaping.",
    icon: "Layers"
  },
  {
    step: "05",
    title: "Welding",
    desc: "Certified TIG, Arc, and spot resistance welding (2+2mm) for strong structural joints.",
    icon: "Flame"
  },
  {
    step: "06",
    title: "Quality Check",
    desc: "Dimensional inspection with digital verniers, angle gauges, and surface finish verification.",
    icon: "ShieldCheck"
  },
  {
    step: "07",
    title: "Delivery",
    desc: "Protective packaging and on-time dispatch across Coimbatore, Tamil Nadu, and South India.",
    icon: "Truck"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "40+ Years of Experience",
    highlight: "Since 1983",
    desc: "Over four decades of dedicated metal fabrication expertise, trusted by hundreds of industrial clients in Coimbatore.",
    icon: "Award"
  },
  {
    title: "Precision Manufacturing",
    highlight: "Micron Level Tolerances",
    desc: "High-grade CNC fiber lasers (up to 12 kW) and Amada/Hindustan press brakes ensure impeccable accuracy.",
    icon: "Crosshair"
  },
  {
    title: "Multiple Processes Under One Roof",
    highlight: "Complete Turnkey Solution",
    desc: "From initial laser cutting to CNC bending, power pressing, and welding—eliminating multiple vendor delays.",
    icon: "Cpu"
  },
  {
    title: "Reliable Quality & Delivery",
    highlight: "Strict QC & Timely Dispatch",
    desc: "Rigorous quality inspection on every batch combined with prompt turnaround to keep your assembly line running.",
    icon: "CheckCircle2"
  }
];
