const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

const founderComponent = `
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
`;

// Insert Founder immediately after About
if (!content.includes('const Founder =')) {
    content = content.replace('// --- MAIN APP ---', founderComponent + '\n// --- MAIN APP ---');
}

// Ensure the Home component renders Founder correctly right after About
const homeTarget = `<About setPage={setPage} />`;
const homeReplacement = `<About setPage={setPage} />\n            <Founder setPage={setPage} />`;
if (!content.includes('<Founder setPage={setPage} />') && content.includes(homeTarget)) {
    content = content.replace(homeTarget, homeReplacement);
}

// Remove id: 2 (Founder) from the parallaxSections render in Home
const parallaxRenderRegex = /\{parallaxSections\.filter\(s => s\.id !== 1\)\.map/g;
if (content.match(parallaxRenderRegex)) {
    content = content.replace(parallaxRenderRegex, '{parallaxSections.filter(s => s.id !== 1 && s.id !== 2).map');
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('Founder section integrated!');
