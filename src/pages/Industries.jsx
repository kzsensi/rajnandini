import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader, SectionReveal } from '../App.jsx';

/* ─── Brand data ─────────────────────────────────────────────────────────── */
const BRAND_CATEGORIES = [
    {
        label: 'Core Industry Brands',
        description: 'Leading partners in primary steel and resource production',
        brands: [
            { name: 'Steel Authority of India Limited (SAIL)', logo: 'sail.png' },
            { name: 'Tata Steel Limited', logo: 'tata_steel.png' },
            { name: 'JSW Steel Limited', logo: 'jws.png' },
            { name: 'ArcelorMittal Nippon Steel India Limited (AM/NS India)', logo: 'AMNS-Logo.webp' },
            { name: 'Rashtriya Ispat Nigam Limited (RINL / Vizag Steel)', logo: 'rinl-vinzag-steel-logo.png' },
            { name: 'Coal India Limited (CIL)', logo: 'coal-india-limited.webp' },
            { name: 'Essar Steel India Limited', logo: 'esaar-steel.jpg' },
            { name: 'Bhushan Steel Limited', logo: 'bhushan-steel-limited.jpg' },
        ],
    },
    {
        label: 'Smelting & Metal Alloys',
        description: 'Key collaborators in metal processing and specialized alloys',
        brands: [
            { name: 'Electrosteel Steels Limited', logo: 'Electrosteel-Steels-Limited.png' },
            { name: 'Rungta Mines Limited', logo: 'rungta_mines_limited_logo.jpg' },
            { name: 'Rashmi Metaliks Limited', logo: 'rashmi-metaliks-logo.png' },
            { name: 'Shyam SEL and Power Limited', logo: 'shyam-sel-and-power-limited.png' },
            { name: 'Shakambari Straw Products Limited (Shakambari Group)', logo: 'Shakambari-Straw-Products-Limited.jpg' },
            { name: 'Maan Steel and Power ltd.', logo: 'Maan-Steel-and-power.jpg' },
            { name: 'Paras Steel Industries', logo: 'Paras-Steel-Industries.png' },
            { name: 'Shree Narayani Ispat', logo: null, fallback: 'N' },
            { name: 'Sarda Energy & Minerals Limited', logo: 'SardaEnerg.png' },
            { name: 'Kamdhenu Limited', logo: 'Kamdhenu-Limited.png' },
            { name: 'Asian Colour Coated Ispat Limited', logo: 'asian-color-coated-ispat-limited.jpg' },
        ],
    },
    {
        label: 'Cement & Binding Materials',
        description: 'Top-tier manufacturers in the construction materials sector',
        brands: [
            { name: 'UltraTech Cement Limited', logo: 'ultratech-cement-logo.png' },
            { name: 'ACC Limited', logo: 'acc-logo.jpg' },
            { name: 'Ambuja Cements Limited', logo: 'ambuja-cement.webp' },
            { name: 'Dalmia Bharat Limited', logo: 'dalmia-bharat-logo.png' },
            { name: 'Shree Cement Limited', logo: 'shree_cement_ltd_logo.jpg' },
            { name: 'Nuvoco Vistas Corporation Limited', logo: 'nuvoco-vistas_logo.jpg' },
            { name: 'The Ramco Cements Limited', logo: 'the_ramco_cements_limited_logo.jpg' },
            { name: 'Rungta cement', logo: 'rungta-cement-logo.jpg' },
        ],
    },
];

/* ─── Circular Logo Component ────────────────────────────────────────────── */
const BrandLogo = ({ brand }) => {
    const [imageError, setImageError] = React.useState(false);
    // Custom fallback text or computed initials
    const fallbackText = brand.fallback || brand.name.substring(0, 2).toUpperCase();

    // Show fallback only if logo is missing or image load has failed
    const showFallback = !brand.logo || imageError;

    return (
        <div className="flex flex-col items-center group w-full">
            {/* Circular Container - Significantly smaller on mobile */}
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-2 sm:p-4 md:p-6 mb-2 sm:mb-4 transition-all duration-500 ease-out group-hover:shadow-xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:border-[#B58D54] overflow-hidden relative">
                
                {/* Fallback Text - Only render if logo is missing or error occurred */}
                {showFallback && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
                       <span className="text-slate-350 font-black text-base sm:text-xl md:text-2xl tracking-widest">{fallbackText}</span>
                    </div>
                )}

                {/* Logo Image */}
                {brand.logo && !imageError && (
                    <img 
                        src={`/assets/industries/${brand.logo}`} 
                        alt={brand.name}
                        className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                        onError={() => {
                            setImageError(true);
                        }}
                    />
                )}
            </div>
            
            {/* Brand Name Label - Smaller text on mobile */}
            <h3 className="text-center font-bold text-slate-700 text-[9px] sm:text-xs md:text-sm lg:text-base leading-tight max-w-[64px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[220px] group-hover:text-[#B58D54] transition-colors duration-300">
                {brand.name}
            </h3>
        </div>
    );
};

/* ─── Page component ─────────────────────────────────────────────────────── */
const Industries = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-slate-50 min-h-screen">
             <PageHeader 
                title="Industries We Work With" 
                subtitle="A curated network of India's leading manufacturers, smelters, and cement producers." 
                bgImage="/assets/industries_we_server_banner.png" 
             />
             
             {/* Reduced padding and spacing on mobile */}
             <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 md:py-24 space-y-12 md:space-y-32">
                {BRAND_CATEGORIES.map((category, idx) => (
                    <SectionReveal key={idx}>
                        {/* Category Header */}
                        <div className="mb-6 md:mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-6">
                            <div>
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#B58D54] mb-1 md:mb-3 block">Sector</span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
                                    {category.label}
                                </h2>
                                <div className="h-1 w-16 md:w-24 bg-[#B58D54] mt-2 md:mt-6 mx-auto md:mx-0"></div>
                            </div>
                            <p className="text-slate-500 text-xs sm:text-sm md:text-lg max-w-md md:text-right px-4 md:px-0">
                                {category.description}
                            </p>
                        </div>

                        {/* Modern Grid of Circular Logos - 4 cols on mobile */}
                        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:gap-x-6 md:gap-y-12 justify-items-center">
                            {category.brands.map((brand, bIdx) => (
                                <BrandLogo key={bIdx} brand={brand} />
                            ))}
                        </div>
                    </SectionReveal>
                ))}
             </div>
        </motion.div>
    );
};

export default Industries;
