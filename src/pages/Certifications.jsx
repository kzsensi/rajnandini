import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Globe, Building2, ShieldCheck, Anchor, CheckCircle2 } from 'lucide-react';
import { PageHeader, SectionReveal, COMPANY_NAME } from '../App.jsx';

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
             <PageHeader title="Compliance & Certifications" subtitle="Operating with absolute transparency and rigorous legal compliance." bgImage="/assets/certifications_banner.png" />
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

export default Certifications;
