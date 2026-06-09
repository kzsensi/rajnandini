import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader, SectionReveal, industriesServed } from '../App.jsx';
import { Factory, Building2, HardHat, ShieldCheck } from 'lucide-react';

const Industries = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
             <PageHeader title="Industries We Serve" subtitle="Delivering vital raw materials to the sectors that build the economy." bgImage="/assets/industries_we_server_banner.png" />
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

export default Industries;
