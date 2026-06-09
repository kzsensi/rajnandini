const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

if (!content.includes('Layers')) {
    content = content.replace('Users, Map, Ship, Award', 'Users, Map, Ship, Award, Layers');
}

const aboutComponent = `
const About = ({ setPage }) => {
    return (
        <div className="w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-8">
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
                    </div>
                    
                    {/* Right Image */}
                    <div className="w-full lg:w-1/2">
                        <img 
                            src="/assets/aboutus.png" 
                            alt="About Raj Nandini Iron and Minerals" 
                            className="w-full h-auto rounded-[2rem] shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
`;

content = content.replace('// --- MAIN APP ---', aboutComponent + '\n\n// --- MAIN APP ---');

const parallaxStartSearch = `            {/* NEW PARALLAX ABOUT & FOUNDER SECTION */}\n            <section className="bg-white py-24 md:py-32 overflow-hidden flex flex-col gap-12 md:gap-0">`;
const parallaxReplacement = `            <About setPage={setPage} />\n\n            {/* NEW PARALLAX ABOUT & FOUNDER SECTION */}\n            <section className="bg-white py-24 md:py-32 overflow-hidden flex flex-col gap-12 md:gap-0">`;

content = content.replace(parallaxStartSearch, parallaxReplacement);
content = content.replace(parallaxStartSearch.replace(/\n/g, '\r\n'), parallaxReplacement.replace(/\n/g, '\r\n'));

content = content.replace(`{parallaxSections.map((section) => (`, `{parallaxSections.filter(s => s.id !== 1).map((section) => (`);

content = content.replace(`case 'about': return <About />;`, `case 'about': return <About setPage={setCurrentPage} />;`);

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx About component fully integrated!');
