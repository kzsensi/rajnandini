import { Agentation } from "agentation";
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
    Menu, X, ChevronRight, ChevronLeft, Globe, TrendingUp, ShieldCheck, 
    Truck, Building2, HardHat, FileText, MapPin, Phone, 
    Mail, ArrowRight, Anchor, CheckCircle2, ChevronDown,
    Package, Boxes, Scale, Factory, Zap, Plus, Minus,
    Users, Map, Ship, Award, Layers
} from 'lucide-react';

import Industries from './pages/Industries';
import ImportExport from './pages/ImportExport';
import Infrastructure from './pages/Infrastructure';

// --- COMPREHENSIVE B2B DATA ---

export const COMPANY_NAME = "Rajnandini Iron and Minerals";
export const SITE_NAME = "Rajnandini Iron and Minerals";
const EMAIL = "rajnandiniironandminerals@gmail.com";
const PHONE = "+91 91137 52733 / +91 93342 37331";
const WHATSAPP_PHONE = "919113752733";
const GSTIN = "20HXGPP9326A1ZN";
const REG_OFFICE = "Plot No. 71, Arya Vihar, Bari Co-Operative, Bokaro (JH)";
const CORP_OFFICE = "1, Crooked Lane, Room No. 104, 1st Floor, Kolkata - 700069";

const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'founder', label: 'Founder' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'import-export', label: 'Import & Export' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'contact', label: 'Contact Us' },
];

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '200+', label: 'Clients Served' },
    { value: '25+', label: 'States Covered' },
    { value: '100%', label: 'Pan India Supply' },
];

const heroAccordionItems = [
    { id: 1, title: 'Structural Steel', imageUrl: '/assets/hero_structural_steel.png' },
    { id: 2, title: 'Bars & Rebars', imageUrl: '/assets/hero_bars_and_rebars.png' },
    { id: 3, title: 'Flat Products', imageUrl: '/assets/hero_flat_products.png' },
    { id: 4, title: 'Raw Materials', imageUrl: '/assets/hero_raw_material.png' },
    { id: 5, title: 'Industrial Scrap', imageUrl: '/assets/hero_industrial_scrape.png' },
];

const comprehensiveProducts = [
    {
        "name": "Structural Steel & Sections",
        "desc": "Heavy-duty structural sections offering optimal load-bearing support for infrastructure and construction.",
        "image": "/assets/ms-gi-angle.jpg",
        "items": [
            {
                "name": "MS / GI Angle",
                "shortDesc": "L-shaped structural steel sections used in construction and engineering.",
                "image": "/assets/ms-gi-angle.jpg",
                "specs": [
                    {
                        "label": "Grade (MS)",
                        "value": "IS 2062 Gr. A/B"
                    },
                    {
                        "label": "Specification (GI)",
                        "value": "Hot-Dip Galvanized as per IS 2629"
                    },
                    {
                        "label": "Size Range",
                        "value": "20 x 20 x 3 mm to 200 x 200 x 24 mm"
                    }
                ],
                "apps": "transmission towers, industrial sheds, bridges, framing, architectural structures",
                "features": "high tensile strength, excellent weldability, superior corrosion resistance for GI"
            },
            {
                "name": "MS / GI Channel",
                "shortDesc": "C-shaped or U-shaped steel beams for structural support.",
                "image": "/assets/ms-gi-channel.webp",
                "specs": [
                    {
                        "label": "Material / Grade",
                        "value": "IS 2062 E250 / E350"
                    },
                    {
                        "label": "Size Range",
                        "value": "75 x 40 mm to 400 x 100 mm"
                    }
                ],
                "apps": "warehouses, machinery frames, vehicle chassis, building columns",
                "features": "heavy load-bearing capacity, bending resistance, precise dimensions"
            }
        ]
    },
    {
        "name": "Steel Bars & Long Products",
        "desc": "High-yield reinforcing bars and solid sections for engineering, forging, and structural frameworks.",
        "image": "/assets/tmt_bar.jpg",
        "items": [
            {
                "name": "TMT Bars",
                "shortDesc": "High-strength reinforcement steel bars for concrete structures.",
                "image": "/assets/tmt_bar.jpg",
                "specs": [
                    {
                        "label": "Grades",
                        "value": "Fe 500, Fe 500D, Fe 550, Fe 550D, Fe 600, CRS available"
                    },
                    {
                        "label": "Size Range",
                        "value": "8 mm to 40 mm diameter"
                    }
                ],
                "apps": "residential buildings, high-rises, dams, bridges, highways",
                "features": "excellent ductility, earthquake resistance, high fatigue strength, superior bonding with concrete"
            },
            {
                "name": "MS / GI Round Bars",
                "shortDesc": "Solid cylindrical metal bars for machining and structural jobs.",
                "image": "/assets/ms-gi-round-bars.webp",
                "specs": [
                    {
                        "label": "Material / Grade (MS)",
                        "value": "MS (EN8, EN9, IS 2062)"
                    },
                    {
                        "label": "Specification (GI)",
                        "value": "GI zinc coated"
                    },
                    {
                        "label": "Size Range",
                        "value": "6 mm to 200 mm diameter"
                    }
                ],
                "apps": "forging, bright bars, fasteners, grills, shafts, axles",
                "features": "smooth surface finish, easy to machine and weld, uniform dimensions"
            },
            {
                "name": "MS / GI Square Bars",
                "shortDesc": "Solid square-shaped steel bars for heavy-duty applications.",
                "image": "/assets/ms-gi-square-bars.jpeg",
                "specs": [
                    {
                        "label": "Material / Grade",
                        "value": "Standard Mild Steel / Galvanized Steel"
                    },
                    {
                        "label": "Size Range",
                        "value": "6 x 6 mm to 100 x 100 mm"
                    }
                ],
                "apps": "industrial gratings, window grills, gates, agricultural implements, machinery parts",
                "features": "high impact resistance, structural rigidity, clean geometric edges"
            }
        ]
    },
    {
        "name": "Wires, Nails & Fasteners",
        "desc": "Precision-drawn wire products, binding materials, and heavy-duty industrial fasteners.",
        "image": "/assets/ms-wire-rod.jpg",
        "items": [
            {
                "name": "MS Wire Rod",
                "shortDesc": "Semi-finished rolled steel product used as raw material for wire drawing.",
                "image": "/assets/ms-wire-rod.jpg",
                "specs": [
                    {
                        "label": "Grades",
                        "value": "SAE 1006, SAE 1008, SAE 1010, medium/high carbon"
                    },
                    {
                        "label": "Size Range",
                        "value": "5.5 mm to 16 mm coil form"
                    }
                ],
                "apps": "wire drawing, nail manufacturing, electrode production, auto-components",
                "features": "uniform chemical composition, excellent drawability, minimal surface defects"
            },
            {
                "name": "MS HB Wire",
                "shortDesc": "Hard drawn bright wire drawn from wire rods without heat treatment.",
                "image": "/assets/ms-hb-wire.webp",
                "specs": [
                    {
                        "label": "Material / Grade",
                        "value": "Low carbon steel"
                    },
                    {
                        "label": "Size Range",
                        "value": "1.2 mm to 6.0 mm (8 to 18 SWG)"
                    }
                ],
                "apps": "welded wire mesh, bucket handles, iron nails, conveyor belts, display racks",
                "features": "high tensile strength, smooth bright finish, rigid structure"
            },
            {
                "name": "GI Wire",
                "shortDesc": "Galvanized steel wire coated with zinc for rust protection.",
                "image": "/assets/gl-wire.jpg",
                "specs": [
                    {
                        "label": "Zinc Coating",
                        "value": "commercial 30–60 g/m², heavy 200–300 g/m²"
                    },
                    {
                        "label": "Size Range",
                        "value": "0.9 mm to 4.0 mm"
                    }
                ],
                "apps": "fencing, barbed wire, cable armoring, netting, tying",
                "features": "rust protection, long lifespan, uniform zinc adhesion"
            },
            {
                "name": "MS Binding Wire",
                "shortDesc": "Soft annealed mild steel wire used for tying rebar.",
                "image": "/assets/ms-binding-wire.jpg",
                "specs": [
                    {
                        "label": "Material / Grade",
                        "value": "Soft annealed mild steel, low carbon"
                    },
                    {
                        "label": "Size Range",
                        "value": "0.91 mm to 1.22 mm (20 SWG to 18 SWG)"
                    }
                ],
                "apps": "tying TMT bars, bundling cargo, packaging",
                "features": "highly flexible, easy to twist, uniform softness"
            },
            {
                "name": "MS Wire Nail",
                "shortDesc": "Standard industrial and construction nails made from hard-drawn steel wire.",
                "image": "/assets/ms-wire-nail.jpg",
                "specs": [
                    {
                        "label": "Material / Grade",
                        "value": "High-quality hard drawn mild steel"
                    },
                    {
                        "label": "Size Range",
                        "value": "0.5 inches to 6 inches"
                    }
                ],
                "apps": "carpentry, wooden packaging, building construction, general fastening",
                "features": "sharp diamond point, strong countersunk heads, high bending resistance"
            },
            {
                "name": "MS Nut & Bolt",
                "shortDesc": "Industrial fasteners used to mechanically join objects.",
                "image": "/assets/ms-nut-and-bolt.jpg",
                "specs": [
                    {
                        "label": "Grades",
                        "value": "4.6, 4.8, 5.6, 8.8, high tensile available"
                    },
                    {
                        "label": "Size Range",
                        "value": "M4 to M64, lengths as per client specification"
                    },
                    {
                        "label": "Finishes",
                        "value": "plain / black-phosphated / galvanized finishes"
                    }
                ],
                "apps": "heavy machinery, structural steel fabrication, automotive, infrastructure projects",
                "features": "high thread precision, excellent shear strength"
            }
        ]
    },
    {
        "name": "Primary Raw Materials & Smelting Inputs",
        "desc": "High-grade ore reductions, coal, and metallurgical inputs for electric and induction furnaces.",
        "image": "/assets/sponge-iron-dri.jpg",
        "items": [
            {
                "name": "Sponge Iron / DRI",
                "shortDesc": "Premium raw material made by direct reduction of iron ore.",
                "image": "/assets/sponge-iron-dri.jpg",
                "specs": [
                    {
                        "label": "Fe Metallic",
                        "value": "80% to 84% min"
                    },
                    {
                        "label": "Total Fe",
                        "value": "90% to 92% min"
                    },
                    {
                        "label": "Metallization",
                        "value": "88% to 92%"
                    },
                    {
                        "label": "Carbon content",
                        "value": "0.15% to 0.25%"
                    }
                ],
                "apps": "EAF and induction furnaces for steel production",
                "features": "low sulfur and phosphorus, uniform size, excellent scrap substitute"
            },
            {
                "name": "Coal",
                "shortDesc": "Industrial coal for power generation, heating, and smelting.",
                "image": "/assets/coal.jpg",
                "specs": [
                    {
                        "label": "Types",
                        "value": "coking coal, non-coking / thermal coal, anthracite coal"
                    },
                    {
                        "label": "Thermal coal GCV",
                        "value": "3,000 kcal/kg to 6,500+ kcal/kg"
                    },
                    {
                        "label": "Anthracite",
                        "value": "high fixed carbon 85%+, low volatile matter"
                    }
                ],
                "apps": "steel plants, cement factories, power plants, brick kilns",
                "features": "suitable for metallurgical coke making, heating, filtration, and industrial energy use"
            }
        ]
    },
    {
        "name": "Recycled Metals & By-Products",
        "desc": "High-yield recyclable scrap and iron-rich recovered by-products for secondary smelting.",
        "image": "/assets/Iron-Scrap.jpg",
        "items": [
            {
                "name": "Iron Scrap",
                "shortDesc": "Recyclable ferrous metal from industrial waste, demolition, obsolete machinery.",
                "image": "/assets/Iron-Scrap.jpg",
                "specs": [
                    {
                        "label": "Classifications",
                        "value": "HMS 1, HMS 2, LMS, shredded scrap"
                    }
                ],
                "apps": "remelting in induction and electric arc furnaces",
                "features": "cost-effective, eco-friendly, high yield"
            },
            {
                "name": "Other Metal Scrap",
                "shortDesc": "Non-ferrous and specialized metal scrap for secondary smelting.",
                "image": "/assets/other-metal-scrap.jpg",
                "specs": [
                    {
                        "label": "Types",
                        "value": "aluminum scrap, copper scrap, stainless steel scrap, brass scrap"
                    }
                ],
                "apps": "foundries, alloy manufacturing, extrusion plants, refining units",
                "features": "suitable for recycling, remelting, and secondary production"
            },
            {
                "name": "Slag Iron",
                "shortDesc": "Iron recovered from metallurgical slag.",
                "image": "/assets/iron-slag.jpg",
                "specs": [
                    {
                        "label": "Fe content",
                        "value": "40% to 60%"
                    }
                ],
                "apps": "charging in furnaces, cement manufacturing, road base construction",
                "features": "economical, environmentally sound recycling option"
            }
        ]
    },
    {
        "name": "Flat Steel Products (Hot Rolled)",
        "desc": "Hot-rolled flat products, plates, and coils designed for heavy fabrication, transport, and manufacturing.",
        "image": "/assets/HR-Coil.jpg",
        "items": [
            {
                "name": "HR Plates",
                "shortDesc": "Thick flat steel plates for high-load structural use.",
                "image": "/assets/HR-Plate.jpg",
                "specs": [
                    {
                        "label": "Grades",
                        "value": "IS 2062 (E250A, E250BR, E350), ASTM A36"
                    },
                    {
                        "label": "Thickness",
                        "value": "5.0 mm to 110 mm"
                    },
                    {
                        "label": "Standard widths",
                        "value": "1250 mm, 1500 mm, 2000 mm, 2500 mm"
                    }
                ],
                "apps": "heavy machinery, ship hulls, bridges, pressure vessels, storage tanks",
                "features": "high tensile strength, excellent weldability, exceptional load-bearing capacity"
            },
            {
                "name": "HR Coils",
                "shortDesc": "Hot rolled flat steel wound into industrial coils.",
                "image": "/assets/HR-Coil.jpg",
                "specs": [
                    {
                        "label": "Grades",
                        "value": "IS 2062 Grade A/B, SAE 1006 / 1008, Tata Astrum"
                    },
                    {
                        "label": "Thickness",
                        "value": "1.6 mm to 20 mm"
                    },
                    {
                        "label": "Width",
                        "value": "900 mm to 2500 mm"
                    }
                ],
                "apps": "pipe and tube manufacturing, automotive chassis, railway coaches, roll-forming",
                "features": "high malleability, consistent chemical composition, structural integrity"
            },
            {
                "name": "HR Sheets",
                "shortDesc": "Hot rolled steel cut into flat rectangular sheets.",
                "image": "/assets/HR-Sheet.jpg",
                "specs": [
                    {
                        "label": "Grades",
                        "value": "IS 2062 E250, IS 1079"
                    },
                    {
                        "label": "Thickness",
                        "value": "1.2 mm to 5.0 mm"
                    },
                    {
                        "label": "Standard lengths",
                        "value": "2500 mm, 4000 mm, 4500 mm, cut-to-length options"
                    }
                ],
                "apps": "agricultural equipment, bus bodies, fabrication, industrial containers",
                "features": "smooth finish, dimensional accuracy, easy formability"
            }
        ]
    },
    {
        "name": "Roofing & Cladding Solutions",
        "desc": "Corrugated and color-coated steel sheets offering premium weather protection and architectural elegance.",
        "image": "/assets/color-coated-roofing-sheet.jpg",
        "items": [
            {
                "name": "Color-Coated Roofing Sheets",
                "shortDesc": "Pre-painted galvanized iron or galvalume sheets for weather protection and aesthetics.",
                "image": "/assets/color-coated-roofing-sheet.jpg",
                "specs": [
                    {
                        "label": "Substrate",
                        "value": "Cold-rolled galvanized or galvalume, AZ-150 coating"
                    },
                    {
                        "label": "Thickness",
                        "value": "0.30 mm to 0.80 mm"
                    },
                    {
                        "label": "Profiles",
                        "value": "trapezoidal, corrugated, tile-profile"
                    },
                    {
                        "label": "Standard widths",
                        "value": "3.5 feet, 4 feet"
                    },
                    {
                        "label": "Colors",
                        "value": "Royal Blue, Brick Red, Caulfield Green, Off-White, Slate Grey"
                    }
                ],
                "apps": "warehouses, factory sheds, commercial complexes, residential roofing",
                "features": "anti-corrosion, UV-resistant paint, heat reflectivity, leak resistance"
            },
            {
                "name": "GC Sheets",
                "shortDesc": "Galvanized corrugated sheets for economical weather protection.",
                "image": "/assets/gc-sheets.jpg",
                "specs": [
                    {
                        "label": "Material / Brand",
                        "value": "galvanized steel, branded options like JSW Vishwas / Tata Galvano"
                    },
                    {
                        "label": "Thickness",
                        "value": "0.35 mm to 0.60 mm"
                    },
                    {
                        "label": "Standard sizes",
                        "value": "3 or 4 feet width; 8, 10, 12, 14 feet length"
                    },
                    {
                        "label": "Zinc coating",
                        "value": "80 GSM to 120 GSM"
                    }
                ],
                "apps": "low-cost housing, site boundaries, barricading, agricultural sheds, rural roofing",
                "features": "durable, rust resistant, cost-efficient, ISI compliant"
            }
        ]
    },
    {
        "name": "Semi-Finished Steel Products",
        "desc": "Continuous-cast solid steel bars and blocks used for rolling mills and forging.",
        "image": "/assets/ms-billet.jpg",
        "items": [
            {
                "name": "MS Billet",
                "shortDesc": "Continuous-cast solid steel bars with square cross-sections used for rolling mills.",
                "image": "/assets/ms-billet.jpg",
                "specs": [
                    {
                        "label": "Grades",
                        "value": "IS 2830, IS 2831, low carbon / medium carbon grades"
                    },
                    {
                        "label": "Standard sizes",
                        "value": "100 x 100 mm, 125 x 125 mm, 150 x 150 mm"
                    },
                    {
                        "label": "Lengths",
                        "value": "6 m to 12 m"
                    }
                ],
                "apps": "re-rolling mills for TMT bars, wire rods, structural steel sections",
                "features": "uniform grain structure, no internal pipe defects or blowholes, excellent surface smoothness"
            },
            {
                "name": "MS Ingot",
                "shortDesc": "Solid steel blocks cast in molds for forging and smelting.",
                "image": "/assets/ms-ingot.jpg",
                "specs": [
                    {
                        "label": "Material / Grade",
                        "value": "commercial grade mild steel, high-carbon steel variants"
                    },
                    {
                        "label": "Size / weight",
                        "value": "custom tapered rectangular dimensions, typically 100 kg to 500+ kg"
                    }
                ],
                "apps": "forging industries, small re-rolling mills, bars, plates, forged components",
                "features": "cost-effective, easy to melt, suitable for heavy forging tasks"
            }
        ]
    },
    {
        "name": "Bulk Construction Binding Materials",
        "desc": "Premium hydraulic building binders for concrete reinforcement, masonry, and architectural structures.",
        "image": "/assets/cement.webp",
        "items": [
            {
                "name": "Cement",
                "shortDesc": "Premium hydraulic building binder for structural stability.",
                "image": "/assets/cement.webp",
                "specs": [
                    {
                        "label": "Types",
                        "value": "OPC 53 Grade, OPC 43 Grade, PPC"
                    },
                    {
                        "label": "OPC 53 Spec",
                        "value": "53 MPa min, governed by IS 12269"
                    },
                    {
                        "label": "OPC 43 Spec",
                        "value": "governed by IS 8112"
                    },
                    {
                        "label": "PPC Spec",
                        "value": "fly ash blend, governed by IS 1489"
                    },
                    {
                        "label": "Packaging",
                        "value": "50 kg moisture-resistant PP woven sacks"
                    }
                ],
                "apps": "RCC frameworks, masonry mortar, plastering, marine and dam foundations, precast concrete",
                "features": "high bonding strength, sulfate resistance, chemical resistance, good workability"
            }
        ]
    }
];

export const industriesServed = [
    { name: "Construction", desc: "Supplying TMT bars, cement, and structural steel to residential and commercial real estate developers.", products: "TMT Bars, Cement, Binding Wire, Structural Steel", challenges: "Inconsistent material quality and delayed site deliveries.", benefits: "Just-in-time delivery and verified material testing certificates.", icon: Building2 },
    { name: "Infrastructure", desc: "Providing massive volumes of raw materials for roads, bridges, and dam projects.", products: "HR Plates, Heavy Structural Steel, Bitumen/Coal", challenges: "Handling massive volume requirements on strict timelines.", benefits: "Financial strength to execute massive orders and pan-India logistics.", icon: MapPin },
    { name: "Manufacturing", desc: "Ensuring a steady flow of flat products and billets to secondary manufacturers.", products: "HR Sheets, Coils, Billets, Wire Rods", challenges: "Fluctuating raw material prices and supply chain gaps.", benefits: "Strategic procurement and long-term price hedging support.", icon: Factory },
    { name: "Engineering", desc: "Delivering precision round bars and fasteners for heavy machinery production.", products: "Round Bars, Square Bars, Fasteners", challenges: "Requirement of highly specific metallurgical grades.", benefits: "Access to a global network of specialized mills.", icon: HardHat },
    { name: "Warehousing", desc: "Supplying roofing and structural components for massive logistics hubs.", products: "PPGI/PPGL Sheets, PEB Structural Steel", challenges: "Requirement of rapid assembly materials.", benefits: "Pre-fabricated and ready-to-deploy material sourcing.", icon: Boxes },
    { name: "Fabrication", desc: "Equipping fabrication yards with plates, angles, and welding consumables.", products: "MS Angles, Channels, HR Plates", challenges: "Need for varied dimensions and cut-to-length services.", benefits: "Customized procurement and processing partnerships.", icon: Scale },
    { name: "Power Plants", desc: "Supplying high-grade coal and specialized steel for energy infrastructure.", products: "Coal, Specialized Pipes, Structural Steel", challenges: "Stringent quality compliance and uninterrupted supply.", benefits: "Global sourcing capabilities and rigorous quality checks.", icon: Zap },
    { name: "Government Projects", desc: "Partnering with contractors for state and central government initiatives.", products: "All infrastructural raw materials", challenges: "Strict documentation, compliance, and audit trails.", benefits: "Complete statutory compliance (GST, ISO, MSME) and transparency.", icon: ShieldCheck },
];

const faqs = [
    { q: "Do you manufacture these products?", a: "No, Rajnandini Iron and Minerals is a premier B2B Trader, Wholesaler, Supplier, Importer, and Exporter. We bridge the gap between primary manufacturers and large-scale consumers through our robust supply chain." },
    { q: "What is your minimum order quantity (MOQ)?", a: "As a bulk supplier, our minimum order quantities vary by product category (typically in metric tons). Please contact our sales team with your specific requirements for an exact MOQ." },
    { q: "Do you supply outside of India?", a: "Yes, we have a dedicated Import & Export division capable of handling international procurement and exporting materials globally, complete with documentation and logistics support." },
    { q: "How do you ensure the quality of materials?", a: "We only source from certified, primary, and secondary manufacturers. All dispatches can be accompanied by Mill Test Certificates (MTC) and third-party inspection reports upon request." },
    { q: "Can you handle transportation to remote project sites?", a: "Absolutely. Our Pan-India logistics network is designed to deliver materials safely and on time, regardless of the site's geographical location across our 25+ operational states." }
];

// --- ANIMATION VARIANTS ---
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export const SectionReveal = ({ children, className = "" }) => (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={className}>
        {children}
    </motion.div>
);

// --- SCROLL ANIMATION COMPONENTS ---
const parallaxSections = [
    {
        id: 1,
        subtitle: `About ${COMPANY_NAME}`,
        title: "The Bridge Between Manufacturers & Markets",
        description: "We are supply chain experts. Our mission is to streamline the procurement process for mega-projects, factories, and commercial developers by providing an unbroken pipeline of essential materials.",
        imageUrl: '/assets/peacockillustration.png',
        reverse: false,
        btnText: "Discover Our Strength",
        btnLink: "about"
    },
    {
        id: 2,
        subtitle: "Founder's Desk",
        title: "Message From Leadership",
        description: "â€œIn the complex world of industrial procurement, reliability is the ultimate currency. We didn't build this company just to move steel; we built it to remove the anxiety from supply chains.â€",
        imageUrl: '/assets/founder.png',
        reverse: true,
        btnText: "Read Full Message",
        btnLink: "founder"
    },
    {
        id: 3,
        subtitle: "Global Network",
        title: "Built For Massive Scale",
        description: "With coverage spanning 25+ states and robust international trade routes, our logistics support is unmatched. We manage a complex network of heavy transport vehicles capable of fulfilling massive tonnage contracts.",
        imageUrl: '/assets/global_network.png',
        reverse: false,
        btnText: "Explore Operations",
        btnLink: "infrastructure"
    }
];

const ParallaxSectionItem = ({ section, setPage }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "center center"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPathLeft = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clipPathRight = useTransform(scrollYProgress, [0, 0.7], ["inset(0 0 0 100%)", "inset(0 0 0 0)"]);
    const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

    return (
        <div 
            ref={ref} 
            className={`min-h-[50vh] max-w-[85rem] mx-auto w-full flex flex-col items-center justify-center lg:gap-24 gap-12 py-12 md:py-20 px-4 sm:px-6 lg:px-8 ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        >
            <motion.div style={{ y, opacity }} className="flex-1 w-full text-center lg:text-left z-10">
                <div className="font-bold text-stone-500 tracking-widest uppercase text-sm mb-4">{section.subtitle}</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight">{section.title}</h2>
                <p className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
                    {section.description}
                </p>
                <button onClick={() => { setPage(section.btnLink); window.scrollTo(0,0); }} className="bg-[#0F172A] hover:bg-slate-800 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-4 uppercase tracking-widest text-xs md:text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    {section.btnText} <ArrowRight className="w-4 h-4 text-[#B58D54]" />
                </button>
            </motion.div>
            
            <motion.div 
                style={{ 
                    opacity,
                    clipPath: section.reverse ? clipPathRight : clipPathLeft
                }}
                className="flex-1 w-full relative h-[350px] md:h-[500px] lg:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
            >
                <img 
                    src={section.imageUrl} 
                    className="w-full h-full object-cover transition-all duration-700" 
                    alt={section.title}
                />
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
            </motion.div>
        </div>
    );
};

// --- SHARED UI COMPONENTS ---
const Button = ({ children, primary = false, onClick, className = "" }) => {
    const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-md transition-all duration-300 ease-in-out text-sm md:text-base uppercase tracking-wider";
    const primaryStyle = "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-0.5";
    const secondaryStyle = "bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white";
    return <button onClick={onClick} className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle} ${className}`}>{children}</button>;
};

export const PageHeader = ({ title, subtitle, bgImage }) => (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <img src={bgImage || "/assets/cta_banner_mobile.jpg"} alt="Background Mobile" className="w-full h-full object-cover lg:hidden" />
            <img src={bgImage || "/assets/cta_banner.png"} alt="Background Desktop" className="hidden lg:block w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 uppercase">
                {title}
            </motion.h1>
            {subtitle && (
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                    {subtitle}
                </motion.p>
            )}
        </div>
    </div>
);

// --- PAGE COMPONENTS ---

const Home = ({ setPage }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play the accordion, pause on hover or touch
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroAccordionItems.length);
        }, 3000); // Changes every 3 seconds
        return () => clearInterval(timer);
    }, [isPaused]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-stone-50">
            {/* NEW LOGO + ACCORDION HERO SECTION */}
            <div className="relative min-h-[70vh] lg:min-h-[90vh] flex items-center overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16">
                
                {/* Dynamic Background Image based on active card */}
                <div 
                    className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center z-0" 
                    style={{ backgroundImage: `url(${heroAccordionItems[activeIndex].imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        
                        {/* Left side content (Logo & Text) */}
                        <div className="w-full lg:w-[45%] flex flex-col items-center sm:items-start text-center sm:text-left">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                {/* Uses the uploaded golden peacock logo */}
                                <img 
                                    src="/assets/peacockillustration.png" 
                                    alt="Rajnandini Peacock Logo" 
                                    className="w-48 md:w-72 lg:w-[22rem] h-auto mb-6 lg:mb-10 object-contain drop-shadow-lg brightness-0 invert" 
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x400/f8f9fa/b58d54?text=Peacock+Logo"; }} 
                                />
                            </motion.div>
                            
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="w-12 h-[2px] bg-[#B58D54] mb-4 lg:mb-8"></motion.div>
                            
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl font-bold tracking-[0.25em] text-white uppercase leading-[2] drop-shadow-md">
                                Global Sourcing.<br/>Pan India Supply.
                            </motion.h1>
                            
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                                <button onClick={() => setPage('products')} className="mt-6 lg:mt-12 bg-[#B58D54] hover:bg-[#A37B42] text-white px-8 py-4 rounded-full flex items-center justify-center gap-4 uppercase tracking-widest text-sm font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                    Explore Products <ArrowRight className="w-4 h-4 text-white" />
                                </button>
                            </motion.div>
                        </div>

                        {/* Right side content (Interactive Accordion) */}
                        <div 
                            className="w-full lg:w-[55%] flex flex-col items-center lg:items-end"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setIsPaused(false)}
                        >
                            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-row items-center justify-center lg:justify-end gap-2 md:gap-4 overflow-x-auto hide-scrollbar w-full max-w-3xl">
                                {heroAccordionItems.map((item, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <div
                                            key={item.id}
                                            className={`
                                                relative h-[250px] sm:h-[300px] md:h-[450px] rounded-[1.5rem] overflow-hidden cursor-pointer shrink-0
                                                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-lg
                                                ${isActive ? 'w-[180px] sm:w-[220px] md:w-[360px]' : 'w-[40px] sm:w-[50px] md:w-[70px] hover:w-[50px] sm:hover:w-[60px] md:hover:w-[80px]'}
                                            `}
                                            onMouseEnter={() => setActiveIndex(index)}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-70'}`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/90 via-[#1A1F2C]/30 to-transparent mix-blend-multiply"></div>
                                            
                                            <span
                                                className={`
                                                    absolute text-white font-bold uppercase tracking-widest whitespace-nowrap
                                                    transition-all duration-500 ease-in-out drop-shadow-md
                                                    ${isActive 
                                                        ? 'text-base md:text-lg bottom-8 left-1/2 -translate-x-1/2 rotate-0' 
                                                        : 'text-[10px] md:text-xs w-auto text-left bottom-24 left-1/2 -translate-x-1/2 -rotate-90 opacity-80'
                                                    }
                                                `}
                                            >
                                                {item.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </motion.div>

                            {/* Bottom Slider/Indicator bar */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex items-center gap-3 mt-6 w-full max-w-3xl justify-center lg:justify-end">
                                <ChevronLeft className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-700 transition-colors" onClick={() => { setActiveIndex(Math.max(0, activeIndex - 1)); setIsPaused(true); }} />
                                <div className="flex-1 max-w-xs md:max-w-md h-2 bg-slate-200 rounded-full relative overflow-hidden">
                                    <div 
                                        className="absolute top-0 left-0 h-full bg-[#B58D54] rounded-full transition-all duration-500 ease-out"
                                        style={{ 
                                            width: `${100 / heroAccordionItems.length}%`,
                                            transform: `translateX(${activeIndex * 100}%)`
                                        }}
                                    />
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-700 transition-colors" onClick={() => { setActiveIndex(Math.min(heroAccordionItems.length - 1, activeIndex + 1)); setIsPaused(true); }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM FEATURES BAR */}
            <div className="bg-white/95 backdrop-blur-md border-y border-slate-200 py-8 relative z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-slate-200">
                        <div className="flex items-center gap-4 lg:pl-4 first:pl-0">
                            <Globe className="w-10 h-10 text-slate-500 stroke-[1]" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase">Trader & Wholesaler</h4>
                                <p className="text-sm text-slate-500">Wide range. Ready stock.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 lg:pl-8">
                            <Ship className="w-10 h-10 text-slate-500 stroke-[1]" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase">Importer & Exporter</h4>
                                <p className="text-sm text-slate-500">Global sourcing. Timely delivery.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 lg:pl-8">
                            <Truck className="w-10 h-10 text-slate-500 stroke-[1]" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase">Bulk Supply Solutions</h4>
                                <p className="text-sm text-slate-500">Large volumes. On-time supply.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 lg:pl-8">
                            <Award className="w-10 h-10 text-slate-500 stroke-[1]" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase">Reliable. Responsive. Trusted.</h4>
                                <p className="text-sm text-slate-500">Building long-term relationships.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PRODUCT CATEGORIES OVERVIEW */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionReveal className="text-center mb-16">
                        <div className="font-bold text-stone-500 tracking-widest uppercase text-sm mb-4">Procurement Catalog</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Materials We Supply</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">A comprehensive portfolio of industrial goods available for bulk domestic supply and international trade.</p>
                    </SectionReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {comprehensiveProducts.map((cat, idx) => (
                            <SectionReveal key={idx}>
                                <div onClick={() => setPage('products')} className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-slate-900/40"></div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">{cat.name}</h3>
                                        <p className="text-slate-500 text-sm flex-grow mb-4">{cat.desc}</p>
                                        <div className="text-sm font-bold text-slate-900 group-hover:text-stone-500 flex items-center transition-colors uppercase tracking-wider">
                                            View Range <ChevronRight className="ml-1 w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            <About setPage={setPage} />
            <Founder setPage={setPage} />

<GlobalNetwork setPage={setPage} />
        </motion.div>
    );
};

const Products = ({ setPage }) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productPage, setProductPage] = useState(1);
    const ITEMS_PER_PAGE = 8;

    // Reset pagination when category changes
    useEffect(() => {
        setProductPage(1);
    }, [activeCategory]);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProduct]);

    // Helper to generate formatted HTML if customHTML is not provided
    const getProductHTML = (item) => {
        if (item.customHTML) return item.customHTML;
        
        let specsHTML = '';
        if (item.specs && item.specs.length > 0) {
            specsHTML = `
                <div>
                    <h4 style="font-size: 0.875rem; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">Specifications</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 0.5rem;">
                        ${item.specs.map(spec => `
                            <div>
                                <span style="font-size: 0.75rem; font-weight: 700; color: #64748B; text-transform: uppercase; tracking: 0.05em; display: block;">${spec.label}</span>
                                <span style="color: #334155; font-size: 0.95rem; font-weight: 500;">${spec.value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        return `
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                ${specsHTML}
                <div>
                    <h4 style="font-size: 0.875rem; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">Applications</h4>
                    <p style="color: #475569; line-height: 1.6;">${item.apps || 'N/A'}</p>
                </div>
                <div>
                    <h4 style="font-size: 0.875rem; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">Key Features</h4>
                    <p style="color: #475569; line-height: 1.6;">${item.features || 'N/A'}</p>
                </div>
                ${item.supply ? `
                <div>
                    <h4 style="font-size: 0.875rem; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">Supply Capability</h4>
                    <p style="color: #475569; line-height: 1.6;">${item.supply}</p>
                </div>` : ''}
            </div>
        `;
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-stone-50 min-h-screen">
            <PageHeader 
                title="Procurement Catalog" 
                subtitle="Detailed specifications of our bulk-supply capabilities across 9 industrial categories."
                bgImage="/assets/product_banner.png"
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
                {/* Category Navigation */}
                <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 pb-4 border-b border-slate-200">
                    {comprehensiveProducts.map((cat, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveCategory(idx)}
                            className={`whitespace-nowrap px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all rounded-t-lg border-b-2 ${activeCategory === idx ? 'bg-slate-900 text-white border-slate-900' : 'bg-transparent text-slate-500 border-transparent hover:text-slate-900 hover:bg-slate-100'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 uppercase mb-4">{comprehensiveProducts[activeCategory].name}</h2>
                            <p className="text-xl text-slate-600 font-light">{comprehensiveProducts[activeCategory].desc}</p>
                        </div>

                        {/* PRODUCT CARDS GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {comprehensiveProducts[activeCategory].items.slice((productPage - 1) * ITEMS_PER_PAGE, productPage * ITEMS_PER_PAGE).map((item, idx) => {
                                // Fallback to category image if specific product image is missing
                                const itemImage = item.image || comprehensiveProducts[activeCategory].image;
                                
                                return (
                                    <div 
                                        key={idx} 
                                        onClick={() => setSelectedProduct({ ...item, displayImage: itemImage })}
                                        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden cursor-pointer group flex flex-col h-full"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <img 
                                                src={itemImage} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            />
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2">{item.name}</h3>
                                            <p className="text-slate-500 text-sm mb-6 line-clamp-2 flex-grow">{item.shortDesc}</p>
                                            
                                            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">View Specs</span>
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#B58D54] transition-colors">
                                                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Pagination Controls */}
                        {Math.ceil(comprehensiveProducts[activeCategory].items.length / ITEMS_PER_PAGE) > 1 && (
                            <div className="mt-12 flex justify-center items-center gap-2">
                                <button 
                                    onClick={() => setProductPage(p => Math.max(1, p - 1))}
                                    disabled={productPage === 1}
                                    className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                
                                {Array.from({ length: Math.ceil(comprehensiveProducts[activeCategory].items.length / ITEMS_PER_PAGE) }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setProductPage(i + 1)}
                                        className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${productPage === i + 1 ? 'bg-[#B58D54] text-white shadow-md' : 'bg-transparent text-slate-600 hover:bg-slate-100'}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button 
                                    onClick={() => setProductPage(p => Math.min(Math.ceil(comprehensiveProducts[activeCategory].items.length / ITEMS_PER_PAGE), p + 1))}
                                    disabled={productPage === Math.ceil(comprehensiveProducts[activeCategory].items.length / ITEMS_PER_PAGE)}
                                    className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* PRODUCT DETAILS MODAL (Portal to body to avoid stacking context issues) */}
                {createPortal(
                    <AnimatePresence>
                        {selectedProduct && (
                            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
                                {/* Backdrop */}
                                <motion.div 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    exit={{ opacity: 0 }} 
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
                                ></motion.div>
                                
                                {/* Modal Content Box */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 flex flex-col hide-scrollbar"
                                >
                                    {/* Close Button floating top-right (higher z-index, clearly visible above header on mobile) */}
                                    <button 
                                        onClick={() => setSelectedProduct(null)} 
                                        className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-colors z-20 shadow-sm border border-slate-200"
                                    >
                                        <X size={20} />
                                    </button>
                                    
                                    {/* Modal Hero Image */}
                                    <div className="h-64 sm:h-80 w-full relative shrink-0">
                                        <img src={selectedProduct.displayImage} alt={selectedProduct.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">{selectedProduct.name}</h2>
                                            <p className="text-slate-200 mt-2 text-sm md:text-base font-light">{selectedProduct.shortDesc}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Dynamic HTML Content Area */}
                                    <div className="p-6 md:p-10 flex-grow bg-white">
                                        <div 
                                            className="text-slate-700 prose prose-slate max-w-none"
                                            dangerouslySetInnerHTML={{ __html: getProductHTML(selectedProduct) }}
                                        />
                                        
                                        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <p className="text-sm text-slate-500 font-medium">Ready to fulfill large-scale requirements.</p>
                                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                                {/* Mobile Close Button (at the bottom, next to CTA, highly reachable for thumbs) */}
                                                <button 
                                                    onClick={() => setSelectedProduct(null)} 
                                                    className="w-full sm:w-auto border border-slate-300 hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center"
                                                >
                                                    Close
                                                </button>
                                                <button 
                                                    onClick={() => { setSelectedProduct(null); setPage('contact'); window.scrollTo(0,0); }} 
                                                    className="w-full sm:w-auto bg-[#0F172A] hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
                                                >
                                                    Inquire Bulk Rate <ArrowRight size={16} className="text-[#B58D54]" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}

            </div>
        </motion.div>
    );
};

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedGst, setCopiedGst] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleCopyGst = () => {
        navigator.clipboard.writeText(GSTIN);
        setCopiedGst(true);
        setTimeout(() => setCopiedGst(false), 2000);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-stone-50 min-h-screen">
             <PageHeader title="Contact Operations" subtitle="Direct connections to our procurement, sales, and logistics teams." bgImage="/assets/product_banner.png" />
             
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-24">
                    
                    {/* PRIMARY CONTACT PATHWAYS */}
                    <div className="lg:col-span-7 space-y-8">
                        <SectionReveal className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.117-2.875-6.976C16.592 1.888 14.114.869 11.488.869c-5.442 0-9.87 4.42-9.874 9.86-.001 1.77.476 3.495 1.385 5.023L1.936 21.05l5.59-1.467c-.29-.118-.567-.282-.879-.429zm11.233-5.277c-.3-.149-1.772-.874-2.046-.975-.274-.1-.474-.149-.674.15-.2.299-.774.975-.949 1.173-.175.199-.349.224-.649.075-.3-.149-1.266-.467-2.41-1.484-.89-.791-1.49-1.77-1.665-2.07-.175-.299-.019-.461.13-.609.135-.133.3-.349.449-.523.15-.174.2-.299.3-.498.1-.2.05-.374-.025-.523-.075-.149-.674-1.62-.923-2.219-.242-.585-.487-.506-.674-.515-.173-.008-.374-.01-.574-.01-.2 0-.524.075-.798.374-.275.299-1.047 1.022-1.047 2.492 0 1.47 1.073 2.89 1.222 3.09.15.199 2.112 3.224 5.116 4.522.714.31 1.272.495 1.707.633.717.227 1.37.195 1.887.118.575-.085 1.772-.723 2.022-1.42.25-.697.25-1.295.175-1.42-.075-.125-.275-.199-.575-.349z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 uppercase">WhatsApp Channels</h3>
                                    <p className="text-slate-500 text-sm font-light">Get immediate support, quote requests, and order updates.</p>
                                </div>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                <a 
                                    href="https://wa.me/919113752733?text=Hello,%20I'm%20interested%20in%20bulk%20iron%20and%20minerals%20materials.%20Please%20provide%20a%20quote." 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex flex-col p-6 rounded-2xl border border-slate-100 bg-stone-50 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group"
                                >
                                    <span className="text-xs font-bold text-stone-500 group-hover:text-stone-400 uppercase tracking-widest mb-1">Support Desk 1</span>
                                    <span className="text-lg font-bold tracking-tight mb-4">+91 91137 52733</span>
                                    <span className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-wider text-green-600 group-hover:text-green-400">
                                        Chat Now <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>

                                <a 
                                    href="https://wa.me/919334237331?text=Hello,%20I'm%20interested%20in%20bulk%20iron%20and%20minerals%20materials.%20Please%20provide%20a%20quote." 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex flex-col p-6 rounded-2xl border border-slate-100 bg-stone-50 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group"
                                >
                                    <span className="text-xs font-bold text-stone-500 group-hover:text-stone-400 uppercase tracking-widest mb-1">Support Desk 2</span>
                                    <span className="text-lg font-bold tracking-tight mb-4">+91 93342 37331</span>
                                    <span className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-wider text-green-600 group-hover:text-green-400">
                                        Chat Now <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                            </div>
                        </SectionReveal>

                        <SectionReveal className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#B58D54]/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#B58D54]/10 flex items-center justify-center text-[#B58D54]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 uppercase">Email Dispatch</h3>
                                    <p className="text-slate-500 text-sm font-light">Submit technical requests, purchase orders, or detailed RFQs.</p>
                                </div>
                            </div>
                            
                            <div className="p-6 rounded-2xl border border-slate-100 bg-stone-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1 block">Inquiry Mailbox</span>
                                    <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 break-all">{EMAIL}</span>
                                </div>
                                <div className="flex gap-2 w-full md:w-auto">
                                    <button 
                                        onClick={handleCopyEmail}
                                        className="flex-1 md:flex-none border border-slate-200 bg-white hover:bg-stone-100 text-slate-800 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all"
                                    >
                                        {copiedEmail ? 'Copied!' : 'Copy Address'}
                                    </button>
                                    <a 
                                        href={`mailto:${EMAIL}?subject=Industrial%20Material%20Inquiry%20-%20Raj%20%26%20Nandini%20Iron%20and%20Minerals&body=Dear%20Sales%20Team,%0D%0A%0D%0AWe%20are%20interested%20in%20procuring%20the%20following%20materials:%0D%0A%0D%0A-%20Material%20Type:%20%0D%0A-%20Specifications%20/%20Grade:%20%0D%0A-%20Required%20Quantity%20(in%20Tons):%20%0D%0A-%20Delivery%20Location:%20%0D%0A%0D%0APlease%20provide%20your%20best%20quotation%20along%20with%20lead%20times.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A[Your%20Company%20Name]%0D%0A[Contact%20Number]`}
                                        className="flex-1 md:flex-none bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl text-center transition-all shadow-md"
                                    >
                                        Send Mail
                                    </a>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>

                    {/* CORPORATE REGISTRATION & COMPLIANCE DETAILS */}
                    <SectionReveal className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#B58D54]/10 rounded-full blur-2xl"></div>
                            
                            <h2 className="text-xl font-bold mb-6 uppercase tracking-wider border-b border-slate-800 pb-4 flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-[#B58D54]" /> Corporate Compliance
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Phone className="w-5 h-5 text-stone-400 mr-4 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-stone-400">Direct Call Lines</h4>
                                        <p className="text-slate-200 text-base font-semibold">{PHONE}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FileText className="w-5 h-5 text-stone-400 mr-4 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-stone-400">GSTIN Registration</h4>
                                        <p className="text-slate-200 font-mono tracking-wider font-semibold mb-2">{GSTIN}</p>
                                        <button 
                                            onClick={handleCopyGst}
                                            className="text-xs text-[#B58D54] hover:text-[#A37B42] font-semibold transition-colors flex items-center gap-1.5"
                                        >
                                            {copiedGst ? 'Copied!' : 'Copy GSTIN'}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-stone-400 mr-4 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-stone-400">Registered Office</h4>
                                        <p className="text-slate-200 text-sm leading-relaxed">{REG_OFFICE}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Building2 className="w-5 h-5 text-stone-400 mr-4 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-stone-400">Corporate Office</h4>
                                        <p className="text-slate-200 text-sm leading-relaxed">{CORP_OFFICE}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Globe className="w-5 h-5 text-stone-400 mr-4 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-stone-400">Scope of Work</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Domestic Wholesale Trading, Importing, Exporting & Custom Procurement Projects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SectionReveal>

                </div>

                {/* FAQs */}
                <SectionReveal className="max-w-4xl mx-auto mt-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </SectionReveal>
             </div>
        </motion.div>
    );
};

// --- LAYOUT COMPONENTS ---

const Navbar = ({ currentPage, setPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        window.scrollTo(0, 0);
        setPage(id);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-sm py-4 border-b border-stone-200' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-20">
                    <div className="flex items-center gap-4 cursor-pointer group" onClick={() => handleNavClick('home')}>
                        <img src="/assets/logo.png" alt="Rajnandini Logo" className="w-auto h-16 md:h-20 lg:h-24 object-contain" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                        <div className="hidden items-center justify-center w-16 h-16 bg-[#B58D54] text-white rounded-full font-bold text-2xl">RN</div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navigation.slice(0, 5).map((item) => (
                                <button 
                                    key={item.id} 
                                    onClick={() => handleNavClick(item.id)}
                                    className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#B58D54] ${
                                        currentPage === item.id 
                                            ? 'text-[#B58D54]' 
                                            : 'text-stone-600'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="relative group">
                                <button className="flex items-center text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#B58D54] text-stone-600">
                                    Operations <ChevronDown size={14} className="ml-1" />
                                </button>
                                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-xl border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 p-2">
                                    {navigation.slice(5, 7).map((item) => (
                                        <button 
                                            key={item.id} 
                                            onClick={() => handleNavClick(item.id)}
                                            className="block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider text-stone-700 hover:bg-stone-50 hover:text-[#B58D54] rounded transition-colors border-b border-stone-50 last:border-0"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Button primary onClick={() => handleNavClick('contact')} className="px-6 py-2 text-xs bg-stone-900 hover:bg-stone-800">
                            RFQ / Contact
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className={`xl:hidden p-2 hover:text-[#B58D54] transition-colors focus:outline-none [-webkit-tap-highlight-color:transparent] ${isScrolled || mobileMenuOpen || currentPage !== 'home' ? 'text-stone-800' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="xl:hidden fixed inset-x-0 top-[88px] bottom-0 bg-white border-t border-stone-100 overflow-y-auto z-40"
                    >
                        <div className="px-6 py-8 flex flex-col gap-1 min-h-full">
                            {navigation.map((item, i) => (
                                <motion.button 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                    key={item.id} 
                                    onClick={() => handleNavClick(item.id)}
                                    className={`text-left px-4 py-5 text-xl font-black uppercase tracking-widest transition-colors flex items-center justify-between border-b border-stone-100 ${currentPage === item.id ? 'text-[#B58D54]' : 'text-stone-800 hover:text-[#B58D54]'}`}
                                >
                                    {item.label}
                                    <ChevronRight size={20} className={currentPage === item.id ? 'text-[#B58D54]' : 'text-stone-300'} />
                                </motion.button>
                            ))}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navigation.length * 0.05 + 0.1 }}
                                className="mt-auto pt-10 pb-6"
                            >
                                <Button primary onClick={() => handleNavClick('contact')} className="w-full py-5 text-sm tracking-widest bg-stone-900 hover:bg-[#B58D54] shadow-xl">
                                    REQUEST QUOTATION
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Footer = ({ setPage }) => {
    return (
        <footer className="relative md:fixed bottom-0 left-0 w-full h-auto md:h-[550px] z-0 bg-slate-950 text-white flex flex-col justify-between pt-10 md:pt-14 pb-6 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Footer Top Links */}
            <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-7xl mx-auto gap-10 md:gap-0">
                <div className="max-w-sm">
                    <div className="flex items-center gap-4 mb-4 text-white">
                        <img src="/assets/logo.png" alt={`${SITE_NAME} Logo`} className="w-auto h-12 md:h-14 object-contain brightness-0 invert" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                        <div className="hidden items-center justify-center w-12 h-12 bg-[#B58D54] text-white rounded-full font-bold text-xl">RN</div>
                    </div>
                    <p className="text-xs leading-relaxed mb-4 text-slate-400 font-light">
                        {SITE_NAME} – Premier B2B Trader, Wholesaler, Supplier, Importer &amp; Exporter of steel products, raw materials &amp; industrial scrap. Serving 25+ states across India.
                    </p>
                    <div className="flex items-center gap-2 text-stone-500 text-[10px] tracking-widest font-bold uppercase">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Accepting Bulk Orders
                    </div>
                </div>

                <div className="flex flex-wrap gap-12 md:gap-16">
                    <div>
                        <p className="text-slate-100 font-bold mb-4 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">Corporate Links</p>
                        <ul className="space-y-3 text-slate-500 font-medium text-xs">
                            {['about', 'founder', 'contact'].map((id) => (
                                <li key={id}>
                                    <button onClick={() => { setPage(id); window.scrollTo(0,0); }} className="hover:text-white transition-colors uppercase tracking-wider">
                                        {id.replace('-', ' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-bold mb-4 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">Operations</p>
                        <ul className="space-y-3 text-slate-500 font-medium text-xs">
                            {['products', 'industries', 'import-export', 'infrastructure'].map((id) => (
                                <li key={id}>
                                    <button onClick={() => { setPage(id); window.scrollTo(0,0); }} className="hover:text-white transition-colors uppercase tracking-wider">
                                        {id.replace('-', ' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-bold mb-4 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">Contact Us</p>
                        <ul className="space-y-3 text-slate-500 font-medium text-xs">
                            <li className="flex flex-col gap-0.5">
                                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider block">Email</span>
                                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">
                                    {EMAIL}
                                </a>
                            </li>
                            <li className="flex flex-col gap-0.5">
                                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider block">Phone</span>
                                <span className="text-slate-300">
                                    +91 91137 52733<br />
                                    +91 93342 37331
                                </span>
                            </li>
                            <li className="flex flex-col gap-0.5">
                                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider block">Regd. Office</span>
                                <span className="text-slate-300 leading-normal">
                                    {REG_OFFICE}
                                </span>
                            </li>
                            <li className="flex flex-col gap-0.5">
                                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider block">Corp. Office</span>
                                <span className="text-slate-300 leading-normal">
                                    {CORP_OFFICE}
                                </span>
                            </li>
                            <li className="flex flex-col gap-0.5">
                                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider block">GSTIN</span>
                                <span className="text-slate-300 font-mono text-[10px]">
                                    {GSTIN}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* BIG BOLD TEXT REVEAL */}
            <div className="w-full flex flex-col items-center justify-end mt-8 md:mt-auto pointer-events-none pb-2 md:pb-0">
                <img 
                    src="/assets/rajnandini_text_logo.png" 
                    alt="Rajnandini" 
                    className="w-[80%] md:w-[50%] max-w-2xl h-auto max-h-[75px] object-contain select-none pointer-events-auto opacity-80 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                    }}
                />
                <h2 style={{ display: 'none' }} className="text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] whitespace-nowrap font-black leading-[0.75] tracking-tighter text-slate-100/90 select-none uppercase">
                    Rajnandini
                </h2>
                <p className="pointer-events-auto text-slate-600 text-[10px] tracking-widest uppercase mt-2 pb-1">
                    © {new Date().getFullYear()} {SITE_NAME} · GSTIN: {GSTIN} · All Rights Reserved
                </p>
            </div>
        </footer>
    );
};


const About = ({ setPage, isStandalone = false }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div ref={ref} className={`w-full bg-white pb-12 lg:pb-16 ${isStandalone ? 'pt-32 lg:pt-48' : 'pt-16 lg:pt-20'}`}>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <motion.div style={{ y }} className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#B58D54]">
                                ABOUT RAJNANDINI IRON & MINERALS
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-black leading-[1.1] text-slate-900 mb-4 uppercase tracking-tight">
                            SUPPLYING THE MATERIALS THAT<br />BUILD INDUSTRIES
                        </h2>
                        
                        <div className="w-16 h-[2px] bg-[#B58D54] mb-6"></div>
                        
                        <p className="text-slate-600 text-lg md:text-xl mb-4 leading-relaxed font-medium">
                            Rajnandini Iron & Minerals is a trusted name in the trading and supply of steel products, industrial raw materials, construction essentials, and scrap materials.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-4 leading-relaxed">
                            With a strong network of reliable manufacturers and global sourcing partners, we deliver quality products with consistency, transparency, and unmatched commitment.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                            Our solutions support manufacturers, infrastructure developers, fabricators, and contractors in building stronger structures and sustainable future.
                        </p>
                        
                        {/* Stats */}
                        <div className="flex flex-row justify-between sm:justify-start gap-4 sm:gap-12 mb-6 border-t border-b border-slate-200 py-6 w-full overflow-x-auto hide-scrollbar">
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-[#B58D54] mb-2 sm:mb-3 stroke-[1.5]" />
                                <span className="text-xl sm:text-3xl font-black text-slate-900 mb-1">200+</span>
                                <span className="text-[10px] sm:text-sm text-slate-500 font-bold uppercase tracking-wider">Trusted Clients</span>
                            </div>
                            <div className="w-px bg-slate-200 h-16 self-center"></div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-[#B58D54] mb-2 sm:mb-3 stroke-[1.5]" />
                                <span className="text-xl sm:text-3xl font-black text-slate-900 mb-1">25+</span>
                                <span className="text-[10px] sm:text-sm text-slate-500 font-bold uppercase tracking-wider">States Served</span>
                            </div>
                            <div className="w-px bg-slate-200 h-16 self-center"></div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <Layers className="w-6 sm:w-8 h-6 sm:h-8 text-[#B58D54] mb-2 sm:mb-3 stroke-[1.5]" />
                                <span className="text-xl sm:text-3xl font-black text-slate-900 mb-1">One Source</span>
                                <span className="text-[10px] sm:text-sm text-slate-500 font-bold tracking-wider">Steel • Raw Materials • Scrap</span>
                            </div>
                        </div>

                        <Button primary onClick={() => setPage && setPage('products')} className="group flex items-center gap-3 bg-[#1e2532]">
                            EXPLORE OUR PRODUCTS
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                    
                    {/* Right Image */}
                    <motion.div style={{ opacity, clipPath }} className="w-full lg:w-1/2 relative flex justify-center items-center">
                        <img 
                            src="/assets/aboutus.png" 
                            alt="About Rajnandini Iron and Minerals" 
                            className="max-w-full w-auto h-auto max-h-[60vh] lg:max-h-[75vh] rounded-[2rem] shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};



const Founder = ({ setPage, isStandalone = false }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 0 0 100%)", "inset(0 0 0 0)"]);
    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div ref={ref} className={`w-full bg-slate-50 pb-12 lg:pb-16 overflow-hidden ${isStandalone ? 'pt-32 lg:pt-48' : 'pt-16 lg:pt-20'}`}>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    {/* Text Content */}
                    <motion.div style={{ y }} className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#B58D54]">
                                FOUNDER'S DESK
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-black leading-[1.1] text-slate-900 mb-4 uppercase tracking-tight">
                            MESSAGE FROM<br />LEADERSHIP
                        </h2>
                        
                        <div className="w-16 h-[2px] bg-[#B58D54] mb-6"></div>
                        
                        <p className="text-slate-600 text-lg md:text-xl mb-4 leading-relaxed font-medium italic border-l-4 border-[#B58D54] pl-6 py-2">
                            “In the complex world of industrial procurement, reliability is the ultimate currency. We didn't build this company just to move steel; we built it to remove the anxiety from supply chains.”
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-4 leading-relaxed">
                            Our journey began with a simple vision: to become the most dependable bridge between prime manufacturers and the markets that build our nation. Over the years, we have scaled our operations across 25+ states, but our core philosophy remains unchanged.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                            We believe in forging lasting partnerships through consistency, financial integrity, and an uncompromising commitment to quality. When you partner with Rajnandini Iron and Minerals, you are not just buying materials—you are securing peace of mind.
                        </p>

                        <div className="flex flex-col items-start gap-1 mt-2">
                            <h4 className="text-xl font-black text-slate-900 tracking-wider">Vinatak Pandey</h4>
                            <span className="text-[#B58D54] font-bold text-xs tracking-[0.2em] uppercase">Founder & Managing Director</span>
                        </div>
                    </motion.div>
                    
                    {/* Image Content */}
                    <motion.div style={{ opacity, clipPath }} className="w-full lg:w-1/2 relative flex justify-center items-center">
                        <img 
                            src="/assets/founder.png" 
                            alt="Founder of Rajnandini Iron and Minerals" 
                            className="max-w-full w-auto h-auto max-h-[60vh] lg:max-h-[75vh] rounded-[2rem] shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};


const GlobalNetwork = ({ setPage }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div ref={ref} className="w-full bg-white pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <motion.div style={{ y }} className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-8">
                        <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-5 h-5 text-[#B58D54]" />
                            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#B58D54]">
                                GLOBAL NETWORK
                            </span>
                        </div>
                        <div className="w-16 h-[2px] bg-[#B58D54] mb-6"></div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-black leading-[1.1] text-slate-900 mb-4 uppercase tracking-tight">
                            BUILT FOR<br />MASSIVE SCALE
                        </h2>
                        
                        <p className="text-[#B58D54] text-xl md:text-2xl mb-4 leading-relaxed font-medium tracking-tight">
                            Strong Network. Reliable Supply. Global Reach.
                        </p>

                        <p className="text-slate-600 text-lg md:text-xl mb-4 leading-relaxed font-medium">
                            With a strong presence across 25+ states and a well-established international network, we ensure uninterrupted supply of steel, raw materials, and scrap to industries of every scale.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                            Our advanced logistics infrastructure, trusted transport partners, and experienced team enable us to execute large-volume contracts with precision, safety, and on-time delivery—every time.
                        </p>
                        
                        {/* Stats */}
                        <div className="flex flex-row items-center sm:items-start justify-between w-full border-t border-b border-slate-200 py-6 mb-6 gap-2 sm:gap-4 overflow-x-auto hide-scrollbar">
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 min-w-[80px]">
                                <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-[#B58D54] mb-2 sm:mb-3 stroke-[1.5]" />
                                <span className="text-xl sm:text-3xl font-black text-slate-900 mb-1">25+</span>
                                <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">States Covered</span>
                            </div>
                            <div className="w-px bg-slate-200 h-16 self-center mx-1 sm:mx-0"></div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 min-w-[80px]">
                                <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-[#B58D54] mb-2 sm:mb-3 stroke-[1.5]" />
                                <span className="text-xl sm:text-3xl font-black text-slate-900 mb-1">50+</span>
                                <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Global Partners</span>
                            </div>
                            <div className="w-px bg-slate-200 h-16 self-center mx-1 sm:mx-0"></div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 min-w-[80px]">
                                <Truck className="w-6 sm:w-8 h-6 sm:h-8 text-[#B58D54] mb-2 sm:mb-3 stroke-[1.5]" />
                                <span className="text-xl sm:text-3xl font-black text-slate-900 mb-1">1000+</span>
                                <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Deliveries Completed</span>
                            </div>
                            <div className="w-px bg-slate-200 h-16 self-center mx-1 sm:mx-0"></div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 min-w-[80px]">
                                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-[#B58D54] mb-2 sm:mb-3 stroke-[1.5]" />
                                <span className="text-xl sm:text-3xl font-black text-slate-900 mb-1">50 Lakh+</span>
                                <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">MTS Sold Successfully</span>
                            </div>
                        </div>

                        <Button primary onClick={() => setPage && setPage('infrastructure')} className="group flex items-center gap-3 bg-[#0a1120] w-full sm:w-auto px-8 py-4">
                            EXPLORE OPERATIONS
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                    
                    {/* Right Image */}
                    <motion.div style={{ opacity, clipPath }} className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center items-center">
                        <img 
                            src="/assets/globalsection.png" 
                            alt="Global Network of Rajnandini Iron and Minerals" 
                            className="max-w-full w-auto h-auto max-h-[60vh] lg:max-h-[75vh] rounded-[2rem] shadow-2xl bg-slate-50"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const LogoPreloader = () => {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[99999] bg-[#050B14] flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* Golden ambient glow */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: [0.15, 0.35, 0.15], 
                        scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute w-64 h-64 bg-[#B58D54]/10 rounded-full blur-3xl"
                />

                {/* Peacock Logo */}
                <motion.img 
                    src="/assets/peacockillustration.png" 
                    alt="Peacock Preloader"
                    initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(5px)" }}
                    animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        filter: "blur(0px)",
                        transition: { duration: 1.2, ease: [0.215, 0.610, 0.355, 1.000] }
                    }}
                    exit={{ 
                        opacity: 0, 
                        y: -40, 
                        scale: 0.98,
                        filter: "blur(3px)",
                        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 brightness-0 invert"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />

                {/* Decorative golden progress line */}
                <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                        width: 140, 
                        opacity: 0.6,
                        transition: { delay: 0.4, duration: 1.2, ease: "easeInOut" }
                    }}
                    exit={{ 
                        width: 0, 
                        opacity: 0,
                        transition: { duration: 0.4, ease: "easeInOut" }
                    }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-[#B58D54] to-transparent mt-6"
                />

                <motion.img 
                    src="/assets/rajnandini_text_logo.png" 
                    alt="Rajnandini"
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: [0.5, 0.85, 0.5],
                        transition: { delay: 0.6, duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    exit={{ opacity: 0 }}
                    className="w-36 md:w-44 h-auto mt-4 object-contain select-none"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>
        </motion.div>
    );
};

// --- MAIN APP ---

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Determine the initial page from the browser URL path on load
    const [currentPage, setCurrentPage] = useState(() => {
        const path = window.location.pathname.replace(/^\//, '');
        return navigation.some(n => n.id === path) ? path : 'home';
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);

    // Listen for browser back/forward navigation
    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname.replace(/^\//, '');
            const validPage = navigation.some(n => n.id === path) ? path : 'home';
            setCurrentPage(validPage);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Sync the state change back to the browser URL
    useEffect(() => {
        const path = currentPage === 'home' ? '/' : `/${currentPage}`;
        if (window.location.pathname !== path) {
            window.history.pushState(null, '', path);
        }
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return <Home setPage={setCurrentPage} />;
            case 'about': return <About setPage={setCurrentPage} isStandalone />;
            case 'founder': return <Founder setPage={setCurrentPage} isStandalone />;
            case 'products': return <Products setPage={setCurrentPage} />;
            case 'industries': return <Industries />;
            case 'import-export': return <ImportExport />;
            case 'infrastructure': return <Infrastructure />;
            case 'contact': return <Contact />;
            default: return <Home setPage={setCurrentPage} />;
        }
    };

    return (
        <div className="relative bg-slate-950 font-sans text-slate-900 selection:bg-stone-300 selection:text-slate-900">
            <AnimatePresence>
                {isLoading && <LogoPreloader key="preloader" />}
            </AnimatePresence>
            
            <Navbar currentPage={currentPage} setPage={setCurrentPage} />
            
            <main className="relative z-10 flex flex-col bg-stone-50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-b-[2rem] sm:rounded-b-[3rem] mb-0 md:mb-[550px] min-h-screen">
                <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex-grow flex flex-col"
                    >
                        {renderPage()}
                    </motion.div>
                </AnimatePresence>

                {/* NEW CTA SECTION matching the uploaded mockup */}
                <section className="relative py-24 sm:py-32 px-6 sm:px-12 mt-auto border-t border-slate-200 overflow-hidden bg-[#F6F4F0]">
                    {/* Background image uploaded by user */}
                    <div className="absolute inset-0 z-0">
                        {/* Mobile Background */}
                        <img 
                            src="/assets/cta_banner_mobile.jpg" 
                            alt="Background Decoration Mobile" 
                            className="w-full h-full object-cover object-center lg:hidden" 
                            onError={(e) => e.target.style.display='none'}
                        />
                        {/* Desktop Background */}
                        <img 
                            src="/assets/cta_banner.png" 
                            alt="Background Decoration" 
                            className="hidden lg:block w-full h-full object-cover object-right lg:object-center" 
                            onError={(e) => e.target.style.display='none'}
                        />
                    </div>
                    
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 bg-white/85 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-8 sm:p-12 lg:p-0 rounded-3xl lg:rounded-none border border-white/60 lg:border-transparent shadow-xl lg:shadow-none my-8 lg:my-0">
                        {/* Golden Dash */}
                        <div className="w-12 h-[2px] bg-[#B58D54] mb-8"></div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black mb-6 tracking-tight uppercase leading-[1.1] text-[#1E2532]">
                            Ready to scale your<br/>procurement?
                        </h2>
                        
                        <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl font-light">
                            Partner with {COMPANY_NAME} for a reliable, seamless, and high-volume supply of premium industrial materials.
                        </p>
                        
                        <button 
                            onClick={() => { setCurrentPage('contact'); window.scrollTo(0,0); }}
                            className="group relative inline-flex items-center justify-center p-1.5 pr-8 font-bold text-slate-800 border border-[#B58D54] rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-sm shadow-sm hover:shadow-md bg-white/40 backdrop-blur-sm hover:bg-white/80"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#B58D54] flex items-center justify-center mr-4 transition-transform group-hover:translate-x-1 shadow-inner">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                            Let's Build Together
                        </button>

                        {/* Bottom Trust Features */}
                        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-[#B58D54] stroke-[1.5]" />
                                <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Trusted Supply</span>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-[#B58D54]/40"></div>
                            <div className="flex items-center gap-3">
                                <Award className="w-8 h-8 text-[#B58D54] stroke-[1.5]" />
                                <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Premium Quality</span>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-[#B58D54]/40"></div>
                            <div className="flex items-center gap-3">
                                <Truck className="w-8 h-8 text-[#B58D54] stroke-[1.5]" />
                                <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">On Time. Every Time.</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer setPage={setCurrentPage} />
            {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}
        </div>
    );
}
