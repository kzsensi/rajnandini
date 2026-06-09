import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, CheckCircle2, Globe } from 'lucide-react';
import { PageHeader, SectionReveal, COMPANY_NAME } from '../App.jsx';

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

export default ImportExport;
