import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader, SectionReveal } from '../App.jsx';

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

export default Gallery;
