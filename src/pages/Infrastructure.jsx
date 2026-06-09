import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package } from 'lucide-react';
import { PageHeader, SectionReveal } from '../App.jsx';

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

export default Infrastructure;
