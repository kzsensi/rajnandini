const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

const globalNetworkComponent = `
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
`;

// Insert GlobalNetwork right before MAIN APP
if (!content.includes('const GlobalNetwork =')) {
    content = content.replace('// --- MAIN APP ---', globalNetworkComponent + '\n// --- MAIN APP ---');
}

// Now replace the entire "Our Foundation" section in Home with <GlobalNetwork setPage={setPage} />
// We need to carefully replace the block.
const sectionStartStr = `            {/* NEW PARALLAX ABOUT & FOUNDER SECTION */}`;

// Let's use string manipulation to find the bounds of this section and replace it.
const startIndex = content.indexOf(sectionStartStr);
if (startIndex !== -1) {
    const endSearch = `</section>`;
    const endIndex = content.indexOf(endSearch, startIndex);
    if (endIndex !== -1) {
        const fullSection = content.substring(startIndex, endIndex + endSearch.length);
        content = content.replace(fullSection, `<GlobalNetwork setPage={setPage} />`);
    }
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('GlobalNetwork component integrated and old parallax section removed.');
