import { Agentation } from "agentation";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
    Menu, X, ChevronRight, ChevronLeft, Globe, TrendingUp, ShieldCheck, 
    Truck, Building2, HardHat, FileText, MapPin, Phone, 
    Mail, ArrowRight, Anchor, CheckCircle2, ChevronDown,
    Package, Boxes, Scale, Factory, Zap, Plus, Minus,
    Users, Map, Ship, Award, Layers
} from 'lucide-react';

// --- COMPREHENSIVE B2B DATA ---

const COMPANY_NAME = "Raj Nandini Iron and Minerals";
const EMAIL = "sales@rajnandiniiron.com";
const PHONE = "+91 98765 43210"; // Placeholder

const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'founder', label: 'Founder' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'import-export', label: 'Import & Export' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact Us' },
];

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '200+', label: 'Clients Served' },
    { value: '25+', label: 'States Covered' },
    { value: '100%', label: 'Pan India Supply' },
];

const heroAccordionItems = [
    { id: 1, title: 'Structural Steel', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Bars & Rebars', imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Flat Products', imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop' },
    { id: 4, title: 'Raw Materials', imageUrl: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=800&auto=format&fit=crop' },
    { id: 5, title: 'Industrial Scrap', imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=800&auto=format&fit=crop' },
];

const comprehensiveProducts = [
    {
        name: "Structural Steel",
        desc: "Essential structural frameworks for heavy-duty construction and fabrication.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
        items: [
            { 
                name: "MS Angle", 
                shortDesc: "Mild steel angles used for structural support and frameworks.", 
                apps: "Transmission towers, bridges, building frames.", 
                features: "High tensile strength, excellent weldability.", 
                supply: "Available in standard cross-sections; bulk tonnage ready for dispatch.",
                image: "https://images.unsplash.com/photo-1533090481728-3b9e4a3fa0b7?q=80&w=800&auto=format&fit=crop",
                customHTML: `
                    <div style="display:flex; flex-direction:column; gap:1.5rem;">
                        <div>
                            <h4 style="font-size:0.875rem; font-weight:700; color:#0F172A; text-transform:uppercase; letter-spacing:0.1em; border-bottom:1px solid #E2E8F0; padding-bottom:0.5rem; margin-bottom:0.5rem;">Custom HTML Example</h4>
                            <p style="color:#475569; line-height:1.6;">This product uses the <b>customHTML</b> property. You can use raw HTML here to create detailed <ul><li style="margin-left:1.5rem; list-style-type:disc;">Bullet points</li><li style="margin-left:1.5rem; list-style-type:disc;">Tables</li><li style="margin-left:1.5rem; list-style-type:disc;">Or any custom layout!</li></ul></p>
                        </div>
                        <div>
                            <h4 style="font-size:0.875rem; font-weight:700; color:#0F172A; text-transform:uppercase; letter-spacing:0.1em; border-bottom:1px solid #E2E8F0; padding-bottom:0.5rem; margin-bottom:0.5rem;">Applications</h4>
                            <p style="color:#475569; line-height:1.6;">Transmission towers, bridges, building frames.</p>
                        </div>
                    </div>
                `
            },
            { name: "GI Angle", shortDesc: "Galvanized iron angles with enhanced rust protection.", apps: "Outdoor structures, coastal infrastructure.", features: "Corrosion-resistant, extended lifespan.", supply: "Sourced from premium mills with uniform coating thickness." },
            { name: "MS Channel", shortDesc: "U-shaped mild steel structural channels.", apps: "Industrial sheds, vehicle chassis, support brackets.", features: "High structural integrity, easy to machine.", supply: "Supplied in custom lengths for large-scale fabrication projects." },
            { name: "GI Channel", shortDesc: "Galvanized channels for demanding environments.", apps: "Electrical conduits, corrosive environments.", features: "Weather-resistant, high load-bearing capacity.", supply: "Bulk procurement available for national infrastructure initiatives." }
        ]
    },
    {
        name: "Bars & Reinforcement",
        desc: "The backbone of modern construction, ensuring structural safety and longevity.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "TMT Bars", shortDesc: "Thermo Mechanically Treated bars with superior ductility.", apps: "High-rise buildings, dams, concrete reinforcement.", features: "Earthquake resistant, high thermal stability.", supply: "Procured directly from top-tier primary manufacturers." },
            { name: "Round Bars", shortDesc: "Smooth, cylindrical metal bars.", apps: "Machining, automotive components, shafts.", features: "Uniform grain structure, precise dimensions.", supply: "Available in various grades for immediate bulk distribution." },
            { name: "Square Bars", shortDesc: "Solid square steel sections.", apps: "Cranes, agricultural equipment, ornamental work.", features: "High yield strength, easily weldable.", supply: "Consistent supply chain maintaining ready inventory." }
        ]
    },
    {
        name: "Flat Products",
        desc: "Hot-rolled steel products vital for heavy manufacturing and industrial applications.",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "HR Plates", shortDesc: "Heavy-duty hot-rolled steel plates.", apps: "Shipbuilding, pressure vessels, heavy machinery.", features: "High durability, excellent load distribution.", supply: "Imported and domestically sourced in customized dimensions." },
            { name: "HR Sheets", shortDesc: "Thinner gauge hot-rolled flat steel.", apps: "Automotive bodies, storage tanks, pipes.", features: "Formability, consistent thickness.", supply: "Supplied in standard sheets or custom-cut formats." },
            { name: "HR Coils", shortDesc: "Continuously rolled steel supplied in coil form.", apps: "Cold rolling, welded pipe manufacturing.", features: "Cost-effective bulk processing material.", supply: "Logistics optimized for safe transport of heavy coils." }
        ]
    },
    {
        name: "Roofing & Cladding",
        desc: "Durable and weather-resistant roofing solutions for industrial and commercial structures.",
        image: "https://images.unsplash.com/photo-1632341270258-295e8bc1a316?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "PPGI Sheets", shortDesc: "Pre-Painted Galvanized Iron sheets.", apps: "Industrial roofing, warehouse cladding.", features: "Aesthetic finish, superior corrosion resistance.", supply: "Wide range of standard RAL colors available in bulk." },
            { name: "PPGL Sheets", shortDesc: "Pre-Painted Galvalume sheets with aluminum-zinc coating.", apps: "High-corrosion industrial zones, modern architecture.", features: "Heat reflective, exceptional durability.", supply: "Sourced for large-scale infrastructural roofing projects." },
            { name: "GC Sheets", shortDesc: "Galvanized Corrugated sheets for traditional roofing.", apps: "Agricultural sheds, temporary shelters.", features: "High structural rigidity, cost-efficient.", supply: "Readily available for rapid deployment across India." }
        ]
    },
    {
        name: "Wires & Fasteners",
        desc: "Essential connecting, binding, and fastening materials for diverse industrial uses.",
        image: "https://images.unsplash.com/photo-1620310243452-f67341ea22e5?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Wire Rod", shortDesc: "Hot-rolled metal wire, typically supplied in coils.", apps: "Wire drawing, mesh manufacturing, fasteners.", features: "Excellent drawability, uniform metallurgical properties.", supply: "Available in low, medium, and high carbon grades." },
            { name: "HB Wire", shortDesc: "Hard Bright wire with a smooth finish.", apps: "Nail manufacturing, fencing, hangers.", features: "High tensile strength, clean surface.", supply: "Consistent monthly supply allocations available for regular buyers." },
            { name: "GI Wire", shortDesc: "Galvanized wire coated for rust prevention.", apps: "Chain link fencing, heavy-duty binding.", features: "Weather-proof, highly pliable.", supply: "Procured in massive volumes for agricultural and industrial sectors." },
            { name: "Binding Wire", shortDesc: "Soft annealed wire for tying applications.", apps: "Tying TMT bars in RCC construction.", features: "Highly flexible, resistant to breakage.", supply: "Standardized packaging for efficient site distribution." },
            { name: "Wire Nails", shortDesc: "Standard steel nails for general fastening.", apps: "Woodworking, packaging, construction.", features: "Sharp point, strong shank.", supply: "Bulk packaged in standardized weights for wholesale." },
            { name: "Nuts & Bolts", shortDesc: "Industrial grade threaded fasteners.", apps: "Steel fabrication, machinery assembly.", features: "Precision threaded, high shear strength.", supply: "Available in various metric and imperial sizes." }
        ]
    },
    {
        name: "Raw Materials",
        desc: "Core inputs driving the steel smelting, power, and manufacturing sectors.",
        image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Sponge Iron", shortDesc: "Direct reduced iron used in steelmaking.", apps: "Electric arc furnaces, induction furnaces.", features: "High metallization, low tramp elements.", supply: "Sourced from reliable domestic and international plants." },
            { name: "Coal", shortDesc: "Industrial grade thermal and coking coal.", apps: "Power plants, steel manufacturing, cement kilns.", features: "High calorific value, optimized ash content.", supply: "Large-scale import and domestic procurement capabilities." },
            { name: "Billets", shortDesc: "Semi-finished solid steel blocks.", apps: "Rolling into TMT bars, wire rods, and structural shapes.", features: "Uniform chemistry, defect-free surface.", supply: "Traded in massive volumes for secondary steel producers." },
            { name: "Ingots", shortDesc: "Cast steel shapes for further processing.", apps: "Forging, heavy machinery parts.", features: "Solidified structural integrity.", supply: "Sourced to match specific client metallurgical requirements." }
        ]
    },
    {
        name: "Scrap Materials",
        desc: "Crucial recyclable resources supporting the circular industrial economy.",
        image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Iron Scrap", shortDesc: "Heavy melting scrap (HMS) and shredded iron.", apps: "Recycling in steel melting shops.", features: "High yield, sorted and processed.", supply: "Extensive import operations from global scrap yards." },
            { name: "Metal Scrap", shortDesc: "Non-ferrous and mixed metallic scrap.", apps: "Alloy manufacturing, secondary refining.", features: "Economical raw material substitute.", supply: "Handled through specialized logistics for bulk trading." },
            { name: "Slag Iron", shortDesc: "By-product containing recoverable iron content.", apps: "Cement manufacturing, aggregate base.", features: "Cost-effective, environmentally sustainable.", supply: "Sourced directly from major integrated steel plants." }
        ]
    },
    {
        name: "Cement",
        desc: "Foundational binding materials for all infrastructural developments.",
        image: "https://images.unsplash.com/photo-1518683526645-316886e37eb6?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "OPC Cement", shortDesc: "Ordinary Portland Cement (43 & 53 Grade).", apps: "High-strength concrete, pre-cast items, commercial buildings.", features: "Fast setting time, high compressive strength.", supply: "Wholesale distribution from premium national brands." },
            { name: "PPC Cement", shortDesc: "Portland Pozzolana Cement.", apps: "Mass concrete work, marine structures, plastering.", features: "Sulfate resistant, lower heat of hydration.", supply: "Bulk transportation network for mega-project sites." }
        ]
    }
];

const industriesServed = [
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
    { q: "Do you manufacture these products?", a: "No, Raj Nandini Iron and Minerals is a premier B2B Trader, Wholesaler, Supplier, Importer, and Exporter. We bridge the gap between primary manufacturers and large-scale consumers through our robust supply chain." },
    { q: "What is your minimum order quantity (MOQ)?", a: "As a bulk supplier, our minimum order quantities vary by product category (typically in metric tons). Please contact our sales team with your specific requirements for an exact MOQ." },
    { q: "Do you supply outside of India?", a: "Yes, we have a dedicated Import & Export division capable of handling international procurement and exporting materials globally, complete with documentation and logistics support." },
    { q: "How do you ensure the quality of materials?", a: "We only source from certified, primary, and secondary manufacturers. All dispatches can be accompanied by Mill Test Certificates (MTC) and third-party inspection reports upon request." },
    { q: "Can you handle transportation to remote project sites?", a: "Absolutely. Our Pan-India logistics network is designed to deliver materials safely and on time, regardless of the site's geographical location across our 25+ operational states." }
];

// --- ANIMATION VARIANTS ---
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const SectionReveal = ({ children, className = "" }) => (
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

const PageHeader = ({ title, subtitle, bgImage }) => (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <img src={bgImage || "/assets/cta_banner.png"} alt="Background" className="w-full h-full object-cover" />
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
            <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F8F9FA] pt-32 pb-16">
                
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
                        
                        {/* Left side content (Logo & Text) */}
                        <div className="w-full lg:w-[45%] flex flex-col items-center sm:items-start text-center sm:text-left">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                {/* Uses the uploaded golden peacock logo */}
                                <img 
                                    src="/assets/peacockillustration.png" 
                                    alt="Raj Nandini Peacock Logo" 
                                    className="w-56 md:w-72 lg:w-[22rem] h-auto mb-10 object-contain drop-shadow-sm" 
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x400/f8f9fa/b58d54?text=Peacock+Logo"; }} 
                                />
                            </motion.div>
                            
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="w-12 h-[2px] bg-[#B58D54] mb-8"></motion.div>
                            
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl font-bold tracking-[0.25em] text-slate-800 uppercase leading-[2]">
                                Global Sourcing.<br/>Pan India Supply.
                            </motion.h1>
                            
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                                <button onClick={() => setPage('products')} className="mt-12 bg-[#0F172A] hover:bg-slate-800 text-white px-8 py-4 rounded-full flex items-center justify-center gap-4 uppercase tracking-widest text-sm font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                    Explore Products <ArrowRight className="w-4 h-4 text-[#B58D54]" />
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
                                                relative h-[350px] md:h-[450px] rounded-[1.5rem] overflow-hidden cursor-pointer shrink-0
                                                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-lg
                                                ${isActive ? 'w-[200px] sm:w-[260px] md:w-[360px]' : 'w-[45px] sm:w-[60px] md:w-[70px] hover:w-[50px] sm:hover:w-[70px] md:hover:w-[80px]'}
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
        return `
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <div>
                    <h4 style="font-size: 0.875rem; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">Applications</h4>
                    <p style="color: #475569; line-height: 1.6;">${item.apps || 'N/A'}</p>
                </div>
                <div>
                    <h4 style="font-size: 0.875rem; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">Key Features</h4>
                    <p style="color: #475569; line-height: 1.6;">${item.features || 'N/A'}</p>
                </div>
                <div>
                    <h4 style="font-size: 0.875rem; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">Supply Capability</h4>
                    <p style="color: #475569; line-height: 1.6;">${item.supply || 'N/A'}</p>
                </div>
            </div>
        `;
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-stone-50 min-h-screen">
            <PageHeader 
                title="Procurement Catalog" 
                subtitle="Detailed specifications of our bulk-supply capabilities across 8 industrial categories."
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
                            {comprehensiveProducts[activeCategory].items.map((item, idx) => {
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
                    </motion.div>
                </AnimatePresence>

                {/* PRODUCT DETAILS MODAL */}
                <AnimatePresence>
                    {selectedProduct && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
                                <button 
                                    onClick={() => setSelectedProduct(null)} 
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-colors z-20 shadow-sm"
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
                                        <button 
                                            onClick={() => { setSelectedProduct(null); setPage('contact'); window.scrollTo(0,0); }} 
                                            className="w-full sm:w-auto bg-[#0F172A] hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
                                        >
                                            Inquire Bulk Rate <ArrowRight size={16} className="text-[#B58D54]" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </motion.div>
    );
};

const Industries = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
             <PageHeader title="Industries We Serve" subtitle="Delivering vital raw materials to the sectors that build the economy." />
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-2 gap-10">
                    {industriesServed.map((industry, idx) => (
                        <SectionReveal key={idx}>
                            <div className="bg-stone-50 rounded-lg p-8 border border-slate-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-6">
                                    <div className="w-16 h-16 bg-slate-900 rounded-lg shadow-sm flex items-center justify-center text-white shrink-0">
                                        <industry.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 uppercase">{industry.name}</h3>
                                </div>
                                
                                <div className="flex-grow space-y-4 text-sm text-slate-600">
                                    <div>
                                        <span className="font-bold text-slate-900 uppercase tracking-wider text-xs block mb-1">Industry Overview</span>
                                        <p>{industry.desc}</p>
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 uppercase tracking-wider text-xs block mb-1">Key Products Supplied</span>
                                        <p className="font-semibold text-stone-600">{industry.products}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 mt-4">
                                        <div>
                                            <span className="font-bold text-slate-900 uppercase tracking-wider text-xs block mb-1 text-red-600/80">Challenges Solved</span>
                                            <p>{industry.challenges}</p>
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-900 uppercase tracking-wider text-xs block mb-1 text-green-600/80">Our Value</span>
                                            <p>{industry.benefits}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
             </div>
        </motion.div>
    );
};

const ImportExport = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-stone-50 min-h-screen">
            <PageHeader title="Import & Export Operations" subtitle="Bridging global markets with seamless international trade operations." bgImage="https://images.unsplash.com/photo-1551281476-eb34676106e5?q=80&w=2000&auto=format&fit=crop" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                
                <SectionReveal className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase">Global Sourcing & International Procurement</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {COMPANY_NAME} operates a highly specialized Import & Export division. We possess the regulatory expertise, financial bandwidth, and global partnerships necessary to facilitate massive cross-border trade of industrial raw materials, finished steel products, and metal scrap.
                    </p>
                </SectionReveal>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <SectionReveal className="bg-white p-10 border border-slate-200 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <Anchor className="w-8 h-8 text-slate-900" />
                            <h3 className="text-2xl font-bold text-slate-900 uppercase">Import Operations</h3>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We strategically source raw materials that are in high demand within the domestic manufacturing sector. By consolidating bulk import orders, we offer domestic clients price advantages they cannot achieve independently.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-stone-500 mr-3 shrink-0" /> <span className="text-slate-700 font-medium">Heavy Melting Scrap (HMS) & Shredded Scrap</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-stone-500 mr-3 shrink-0" /> <span className="text-slate-700 font-medium">High-grade Coking and Thermal Coal</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-stone-500 mr-3 shrink-0" /> <span className="text-slate-700 font-medium">Specialized flat products and alloys</span></li>
                        </ul>
                    </SectionReveal>

                    <SectionReveal className="bg-slate-900 p-10 rounded-lg shadow-sm text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <Globe className="w-8 h-8 text-stone-400" />
                            <h3 className="text-2xl font-bold uppercase">Export Operations</h3>
                        </div>
                        <p className="text-slate-300 mb-6 leading-relaxed font-light">
                            Representing the quality of Indian manufacturing on the global stage, we export premium construction materials and finished steel products to emerging and established international markets.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-stone-400 mr-3 shrink-0" /> <span className="text-slate-200 font-medium">TMT Bars & Structural Steel profiles</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-stone-400 mr-3 shrink-0" /> <span className="text-slate-200 font-medium">Galvanized and Pre-painted Roofing Sheets</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-stone-400 mr-3 shrink-0" /> <span className="text-slate-200 font-medium">Industrial Fasteners and Wire products</span></li>
                        </ul>
                    </SectionReveal>
                </div>

                {/* Operations Grid */}
                <h3 className="text-2xl font-bold text-slate-900 uppercase text-center mb-10">Trade Management Excellence</h3>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "Documentation Support", desc: "End-to-end handling of Letters of Credit, Bills of Lading, Customs Clearance, and Certificates of Origin." },
                        { title: "Logistics Coordination", desc: "Integration of freight forwarders, shipping lines, and port handling agents for seamless cargo movement." },
                        { title: "Quality Assurance", desc: "Arranging pre-shipment inspections via internationally recognized agencies (SGS, Bureau Veritas)." },
                        { title: "Bulk Trade Management", desc: "Expertise in handling both break-bulk vessel chartering and containerized cargo shipments." }
                    ].map((item, idx) => (
                        <SectionReveal key={idx} className="bg-white border border-slate-100 p-6 rounded-lg text-center">
                            <h4 className="font-bold text-slate-900 uppercase text-sm mb-3">{item.title}</h4>
                            <p className="text-slate-500 text-sm">{item.desc}</p>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Infrastructure = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
            <PageHeader title="Infrastructure & Network" subtitle="The operational backbone that guarantees scale, speed, and reliability." />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <SectionReveal className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase">Operational Excellence</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        As a premier B2B trading house, our actual "factory" is our supply chain infrastructure. We have heavily invested in developing a robust vendor network, massive warehousing capabilities, and a pan-India distribution matrix to ensure order fulfillment happens without friction.
                    </p>
                </SectionReveal>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <SectionReveal className="order-2 lg:order-1">
                        <img src="/assets/global_network.png" alt="Logistics Fleet" className="w-full h-auto rounded-lg shadow-lg" />
                    </SectionReveal>
                    <SectionReveal className="order-1 lg:order-2">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase">Distribution & Transportation</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            With coverage spanning 25+ states, our logistics support is unmatched. We manage a complex network of heavy transport vehicles capable of moving long-length structural steel, heavy coils, and bulk cement safely to the most remote project sites across India.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-stone-50 border border-slate-100 rounded-lg">
                                <Truck className="text-slate-900 w-6 h-6 shrink-0" />
                                <div><span className="font-bold text-slate-900 block uppercase text-sm">Pan India Reach</span><span className="text-sm text-slate-500">Dedicated fleets for inter-state transit.</span></div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-stone-50 border border-slate-100 rounded-lg">
                                <Package className="text-slate-900 w-6 h-6 shrink-0" />
                                <div><span className="font-bold text-slate-900 block uppercase text-sm">Bulk Supply Capability</span><span className="text-sm text-slate-500">Handling capacities measured in thousands of tonnes.</span></div>
                            </div>
                        </div>
                    </SectionReveal>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <SectionReveal className="bg-slate-900 p-10 rounded-lg text-white">
                        <h3 className="text-2xl font-bold mb-4 uppercase">Warehousing Support</h3>
                        <p className="text-slate-300 mb-6 font-light">
                            Strategic stocking yards designed to hold massive inventory buffers. This allows us to protect our clients from sudden market shortages and price volatility. Our facilities are equipped with heavy-duty EOT cranes and forklifts for rapid loading and unloading.
                        </p>
                    </SectionReveal>
                    
                    <SectionReveal className="bg-stone-100 border border-slate-200 p-10 rounded-lg text-slate-900">
                        <h3 className="text-2xl font-bold mb-4 uppercase">Primary Vendor Network</h3>
                        <p className="text-slate-600 mb-6">
                            Our strongest asset is our relationship with primary and secondary steel mills. By committing to large, regular off-takes, we secure priority dispatch and preferred pricing, passing these logistical and economic benefits directly to our clients.
                        </p>
                    </SectionReveal>
                </div>
            </div>
        </motion.div>
    );
};

const Gallery = () => {
    const gallerySections = [
        {
            title: "Warehouse Operations",
            img: "/assets/peacockillustration.png",
            desc: "Extensive stocking of structural steel and TMT bars."
        },
        {
            title: "Dispatch Activities",
            img: "/assets/global_network.png",
            desc: "Fleet loaded with bulk materials ready for pan-India transit."
        },
        {
            title: "Project Deliveries",
            img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
            desc: "On-site material drop-off for mega infrastructure projects."
        },
        {
            title: "Industrial Materials Showcase",
            img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
            desc: "High-grade HR plates and coils awaiting shipment."
        },
        {
            title: "Supply Chain Operations",
            img: "https://images.unsplash.com/photo-1504307651254-35680f356fce?q=80&w=800&auto=format&fit=crop",
            desc: "Coordinating multi-modal transport for import cargo."
        },
        {
            title: "Loading & Unloading",
            img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
            desc: "Heavy-duty crane operations handling massive structural beams."
        }
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-stone-50 min-h-screen">
             <PageHeader title="Operations Gallery" subtitle="Visual evidence of our scale, inventory capacity, and logistical execution." />
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gallerySections.map((item, idx) => (
                        <SectionReveal key={idx}>
                            <div className="relative group rounded-lg overflow-hidden shadow-sm h-80 bg-slate-900 cursor-pointer">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{item.title}</h3>
                                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
             </div>
        </motion.div>
    );
};

const Certifications = () => {
    const certs = [
        { title: "GST Registration", desc: "Fully compliant with Indian taxation frameworks for transparent billing.", icon: FileText },
        { title: "IEC Registration", desc: "Import Export Code enabling authorized international trade operations.", icon: Globe },
        { title: "MSME Registration", desc: "Recognized enterprise contributing to the national supply chain.", icon: Building2 },
        { title: "ISO Certifications", desc: "Adherence to international Quality Management System standards.", icon: ShieldCheck },
        { title: "Trade Licenses", desc: "Legally authorized to trade in industrial materials and scrap.", icon: Anchor },
        { title: "Quality Standards", desc: "Only supplying materials with MTC (Mill Test Certificates).", icon: CheckCircle2 }
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
             <PageHeader title="Compliance & Certifications" subtitle="Operating with absolute transparency and rigorous legal compliance." />
             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                
                <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase">Business Compliance Commitment</h2>
                    <p className="text-slate-600 text-lg">
                        For B2B operations and government contracting, trust is built on paperwork. {COMPANY_NAME} maintains a flawless compliance record, ensuring our corporate partners face zero regulatory friction when procuring through us.
                    </p>
                </SectionReveal>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, idx) => (
                        <SectionReveal key={idx}>
                            <div className="p-8 bg-stone-50 rounded-lg border border-slate-100 hover:border-stone-300 transition-colors h-full">
                                <cert.icon className="w-10 h-10 text-slate-900 mb-6" />
                                <h3 className="font-bold text-slate-900 text-lg mb-3 uppercase">{cert.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{cert.desc}</p>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
             </div>
        </motion.div>
    );
};

const Contact = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-stone-50 min-h-screen">
             <PageHeader title="Contact Operations" subtitle="Direct lines to our procurement and sales teams." />
             
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-12 gap-16 mb-24">
                    
                    {/* INQUIRY FORM */}
                    <SectionReveal className="lg:col-span-7 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-100">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2 uppercase">Business Inquiry Form</h2>
                        <p className="text-slate-500 mb-8 font-light">Submit your bulk material requirements or RFQs directly to our sales desk.</p>
                        
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded border border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-stone-50" placeholder="Enter company name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Contact Person</label>
                                    <input type="text" className="w-full px-4 py-3 rounded border border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-stone-50" placeholder="Enter full name" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded border border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-stone-50" placeholder="corporate@email.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded border border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-stone-50" placeholder="+91 00000 00000" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Inquiry Type</label>
                                <select className="w-full px-4 py-3 rounded border border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-stone-50">
                                    <option>Bulk Order Inquiry</option>
                                    <option>Import / Export Requirement</option>
                                    <option>Vendor / Mill Partnership</option>
                                    <option>General Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Material Specifications & Quantity</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded border border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-stone-50 resize-none" placeholder="Detail grades, dimensions, tonnage, and delivery location..."></textarea>
                            </div>
                            <Button primary className="w-full py-4 text-lg">Submit Request for Quotation</Button>
                        </form>
                    </SectionReveal>

                    {/* CONTACT INFO */}
                    <SectionReveal className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-900 text-white p-8 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold mb-8 uppercase border-b border-slate-700 pb-4">Direct Contacts</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-stone-400 mr-4 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-stone-400">Office Location</h4>
                                        <p className="text-slate-200">123 Industrial Hub, Procurement Zone<br/>Modinagar, Uttar Pradesh, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-stone-400 mr-4 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-stone-400">Sales Desk</h4>
                                        <p className="text-slate-200 text-lg font-semibold">{PHONE}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-stone-400 mr-4 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-stone-400">Email Inquiries</h4>
                                        <p className="text-slate-200">{EMAIL}<br/>import.export@rajnandiniiron.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 p-8 rounded-lg">
                            <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Business Hours</h4>
                            <div className="flex justify-between text-slate-600 text-sm mb-2"><span>Monday - Saturday</span> <span className="font-bold text-slate-900">09:00 AM - 07:00 PM</span></div>
                            <div className="flex justify-between text-slate-600 text-sm"><span>Sunday</span> <span className="font-bold text-red-600">Closed (Operations only)</span></div>
                        </div>

                        <div>
                            <a href={`https://wa.me/${PHONE.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold uppercase tracking-wider shadow-md">
                                Immediate WhatsApp Support
                            </a>
                        </div>
                    </SectionReveal>
                </div>

                {/* FAQs */}
                <SectionReveal className="max-w-4xl mx-auto mt-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center uppercase">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h4 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h4>
                                <p className="text-slate-600">{faq.a}</p>
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
        setPage(id);
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-200' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center gap-4 cursor-pointer group" onClick={() => handleNavClick('home')}>
                    <img src="/assets/logo.png" alt="Raj Nandini Logo" className="w-auto h-16 md:h-20 lg:h-24 object-contain" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
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
                                        : 'text-slate-600'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="relative group">
                            <button className="flex items-center text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#B58D54] text-slate-600">
                                Operations <ChevronDown size={14} className="ml-1" />
                            </button>
                            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 p-2">
                                {navigation.slice(5, 9).map((item) => (
                                    <button 
                                        key={item.id} 
                                        onClick={() => handleNavClick(item.id)}
                                        className="block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider text-slate-700 hover:bg-stone-50 hover:text-stone-600 rounded transition-colors border-b border-slate-50 last:border-0"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Button primary onClick={() => handleNavClick('contact')} className="px-6 py-2 text-xs">
                        RFQ / Contact
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="xl:hidden p-2 rounded-md text-slate-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden fixed inset-0 top-[72px] bg-slate-900 border-t border-slate-800 overflow-y-auto"
                    >
                        <div className="px-6 py-10 flex flex-col gap-2">
                            {navigation.map((item) => (
                                <button 
                                    key={item.id} 
                                    onClick={() => handleNavClick(item.id)}
                                    className={`text-left px-4 py-4 border-b border-slate-800 text-lg font-bold uppercase tracking-wider transition-colors ${currentPage === item.id ? 'text-stone-400' : 'text-white hover:text-stone-300'}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="mt-8">
                                <Button primary onClick={() => handleNavClick('contact')} className="w-full py-4 text-base bg-white text-slate-900 hover:bg-stone-200">
                                    Request Quotation
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const Footer = ({ setPage }) => {
    return (
        <footer className="fixed bottom-0 left-0 w-full h-[70vh] z-0 bg-slate-950 text-white flex flex-col justify-between pt-16 md:pt-24 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Footer Top Links */}
            <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-7xl mx-auto gap-12 md:gap-0">
                <div className="max-w-sm">
                    <div className="flex items-center gap-4 mb-6 text-white">
                        <img src="/assets/logo.png" alt="Raj Nandini Logo" className="w-auto h-16 md:h-20 object-contain brightness-0 invert" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                        <div className="hidden items-center justify-center w-16 h-16 bg-[#B58D54] text-white rounded-full font-bold text-2xl">RN</div>
                    </div>
                    <p className="text-sm leading-relaxed mb-6 text-slate-400 font-light">
                        Premier B2B Trader, Wholesaler, Supplier, Importer, and Exporter serving bulk material requirements across 25+ states in India and international markets.
                    </p>
                    <div className="flex items-center gap-2 text-stone-500 text-xs tracking-widest font-bold uppercase">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Accepting Bulk Orders
                    </div>
                </div>

                <div className="flex flex-wrap gap-16 md:gap-24">
                    <div>
                        <p className="text-slate-100 font-bold mb-6 uppercase tracking-widest text-sm border-b border-slate-800 pb-3">Corporate Links</p>
                        <ul className="space-y-4 text-slate-500 font-medium text-sm">
                            {['about', 'founder', 'certifications', 'contact'].map((id) => (
                                <li key={id}>
                                    <button onClick={() => { setPage(id); window.scrollTo(0,0); }} className="hover:text-white transition-colors uppercase tracking-wider">
                                        {id.replace('-', ' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-bold mb-6 uppercase tracking-widest text-sm border-b border-slate-800 pb-3">Operations</p>
                        <ul className="space-y-4 text-slate-500 font-medium text-sm">
                            {['products', 'industries', 'import-export', 'infrastructure'].map((id) => (
                                <li key={id}>
                                    <button onClick={() => { setPage(id); window.scrollTo(0,0); }} className="hover:text-white transition-colors uppercase tracking-wider">
                                        {id.replace('-', ' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* BIG BOLD TEXT REVEAL */}
            <div className="w-full flex justify-center items-end mt-auto pointer-events-none pb-4 md:pb-0">
                <h1 className="text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] whitespace-nowrap font-black leading-[0.75] tracking-tighter text-slate-100/90 select-none uppercase">
                    Raj Nandini
                </h1>
            </div>
        </footer>
    );
};


const About = ({ setPage }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div ref={ref} className="w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <motion.div style={{ y }} className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#B58D54]">
                                ABOUT RAJ NANDINI IRON & MINERALS
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] text-slate-900 mb-6 uppercase tracking-tight">
                            SUPPLYING THE MATERIALS THAT<br />BUILD INDUSTRIES
                        </h2>
                        
                        <div className="w-16 h-[2px] bg-[#B58D54] mb-8"></div>
                        
                        <p className="text-slate-600 text-lg md:text-xl mb-6 leading-relaxed font-medium">
                            Raj Nandini Iron & Minerals is a trusted name in the trading and supply of steel products, industrial raw materials, construction essentials, and scrap materials.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                            With a strong network of reliable manufacturers and global sourcing partners, we deliver quality products with consistency, transparency, and unmatched commitment.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed">
                            Our solutions support manufacturers, infrastructure developers, fabricators, and contractors in building stronger structures and sustainable future.
                        </p>
                        
                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-10 border-t border-b border-slate-200 py-8 w-full">
                            <div className="flex flex-col items-start">
                                <Users className="w-8 h-8 text-[#B58D54] mb-3 stroke-[1.5]" />
                                <span className="text-3xl font-black text-slate-900 mb-1">200+</span>
                                <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">Trusted Clients</span>
                            </div>
                            <div className="hidden sm:block w-px bg-slate-200"></div>
                            <div className="flex flex-col items-start">
                                <MapPin className="w-8 h-8 text-[#B58D54] mb-3 stroke-[1.5]" />
                                <span className="text-3xl font-black text-slate-900 mb-1">25+</span>
                                <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">States Served</span>
                            </div>
                            <div className="hidden sm:block w-px bg-slate-200"></div>
                            <div className="flex flex-col items-start">
                                <Layers className="w-8 h-8 text-[#B58D54] mb-3 stroke-[1.5]" />
                                <span className="text-3xl font-black text-slate-900 mb-1">One Source</span>
                                <span className="text-sm text-slate-500 font-bold tracking-wider">Steel • Raw Materials • Scrap</span>
                            </div>
                        </div>

                        <Button primary onClick={() => setPage && setPage('products')} className="group flex items-center gap-3 bg-[#1e2532]">
                            EXPLORE OUR PRODUCTS
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                    
                    {/* Right Image */}
                    <motion.div style={{ opacity, clipPath }} className="w-full lg:w-1/2 relative">
                        <img 
                            src="/assets/aboutus.png" 
                            alt="About Raj Nandini Iron and Minerals" 
                            className="w-full h-auto rounded-[2rem] shadow-2xl object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};



const Founder = ({ setPage }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 0 0 100%)", "inset(0 0 0 0)"]);
    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div ref={ref} className="w-full bg-slate-50 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    {/* Text Content */}
                    <motion.div style={{ y }} className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#B58D54]">
                                FOUNDER'S DESK
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] text-slate-900 mb-6 uppercase tracking-tight">
                            MESSAGE FROM<br />LEADERSHIP
                        </h2>
                        
                        <div className="w-16 h-[2px] bg-[#B58D54] mb-8"></div>
                        
                        <p className="text-slate-600 text-lg md:text-xl mb-6 leading-relaxed font-medium italic border-l-4 border-[#B58D54] pl-6 py-2">
                            “In the complex world of industrial procurement, reliability is the ultimate currency. We didn't build this company just to move steel; we built it to remove the anxiety from supply chains.”
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                            Our journey began with a simple vision: to become the most dependable bridge between prime manufacturers and the markets that build our nation. Over the years, we have scaled our operations across 25+ states, but our core philosophy remains unchanged.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed">
                            We believe in forging lasting partnerships through consistency, financial integrity, and an uncompromising commitment to quality. When you partner with Raj Nandini Iron and Minerals, you are not just buying materials—you are securing peace of mind.
                        </p>

                        <div className="flex flex-col items-start gap-1 mt-2">
                            <h4 className="text-xl font-black text-slate-900 tracking-wider">Raj Nandini</h4>
                            <span className="text-[#B58D54] font-bold text-xs tracking-[0.2em] uppercase">Founder & Managing Director</span>
                        </div>
                    </motion.div>
                    
                    {/* Image Content */}
                    <motion.div style={{ opacity, clipPath }} className="w-full lg:w-1/2 relative">
                        <img 
                            src="/assets/founder.png" 
                            alt="Founder of Raj Nandini Iron and Minerals" 
                            className="w-full h-auto rounded-[2rem] shadow-2xl object-cover"
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
        <div ref={ref} className="w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
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
                        <div className="w-16 h-[2px] bg-[#B58D54] mb-8"></div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] text-slate-900 mb-6 uppercase tracking-tight">
                            BUILT FOR<br />MASSIVE SCALE
                        </h2>
                        
                        <p className="text-[#B58D54] text-xl md:text-2xl mb-8 leading-relaxed font-medium tracking-tight">
                            Strong Network. Reliable Supply. Global Reach.
                        </p>

                        <p className="text-slate-600 text-lg md:text-xl mb-6 leading-relaxed font-medium">
                            With a strong presence across 25+ states and a well-established international network, we ensure uninterrupted supply of steel, raw materials, and scrap to industries of every scale.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed">
                            Our advanced logistics infrastructure, trusted transport partners, and experienced team enable us to execute large-volume contracts with precision, safety, and on-time delivery—every time.
                        </p>
                        
                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full border-t border-b border-slate-200 py-8 mb-10 gap-8 sm:gap-4">
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                                <MapPin className="w-8 h-8 text-[#B58D54] mb-3 stroke-[1.5]" />
                                <span className="text-3xl font-black text-slate-900 mb-1">25+</span>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">States Covered</span>
                            </div>
                            <div className="hidden sm:block w-px bg-slate-200 h-16 mt-2"></div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                                <Globe className="w-8 h-8 text-[#B58D54] mb-3 stroke-[1.5]" />
                                <span className="text-3xl font-black text-slate-900 mb-1">50+</span>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Global Partners</span>
                            </div>
                            <div className="hidden sm:block w-px bg-slate-200 h-16 mt-2"></div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                                <Truck className="w-8 h-8 text-[#B58D54] mb-3 stroke-[1.5]" />
                                <span className="text-3xl font-black text-slate-900 mb-1">1000+</span>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Deliveries Completed</span>
                            </div>
                            <div className="hidden sm:block w-px bg-slate-200 h-16 mt-2"></div>
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                                <Users className="w-8 h-8 text-[#B58D54] mb-3 stroke-[1.5]" />
                                <span className="text-3xl font-black text-slate-900 mb-1">500+</span>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfied Customers</span>
                            </div>
                        </div>

                        <Button primary onClick={() => setPage && setPage('infrastructure')} className="group flex items-center gap-3 bg-[#0a1120] w-full sm:w-auto px-8 py-4">
                            EXPLORE OPERATIONS
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                    
                    {/* Right Image */}
                    <motion.div style={{ opacity, clipPath }} className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
                        <img 
                            src="/assets/globalsection.png" 
                            alt="Global Network of Raj Nandini Iron and Minerals" 
                            className="w-full h-auto rounded-[2rem] shadow-2xl object-cover bg-slate-50"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN APP ---

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return <Home setPage={setCurrentPage} />;
            case 'about': return <About setPage={setCurrentPage} />;
            case 'founder': return <Founder setPage={setCurrentPage} />;
            case 'products': return <Products setPage={setCurrentPage} />;
            case 'industries': return <Industries />;
            case 'import-export': return <ImportExport />;
            case 'infrastructure': return <Infrastructure />;
            case 'gallery': return <Gallery />;
            case 'certifications': return <Certifications />;
            case 'contact': return <Contact />;
            default: return <Home setPage={setCurrentPage} />;
        }
    };

    return (
        <div className="relative bg-slate-950 font-sans text-slate-900 selection:bg-stone-300 selection:text-slate-900">
            <Navbar currentPage={currentPage} setPage={setCurrentPage} />
            
            <main className="relative z-10 flex flex-col bg-stone-50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-b-[2rem] sm:rounded-b-[3rem] mb-[70vh] min-h-screen">
                <AnimatePresence mode="wait">
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
                        {/* Make sure to save your uploaded background image as 'cta-bg.jpg' in the assets folder! */}
                        <img 
                            src="/assets/cta_banner.png" 
                            alt="Background Decoration" 
                            className="w-full h-full object-cover object-right lg:object-center" 
                            onError={(e) => e.target.style.display='none'}
                        />
                    </div>
                    
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
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
