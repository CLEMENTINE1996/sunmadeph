"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from "react-awesome-reveal";
import partnersData from "@/src/data/partners.json";
import { ChevronDown, MapPin, Briefcase, Globe, ExternalLink } from 'lucide-react'; 

const cn = (...classes) => classes.filter(Boolean).join(' ');

const PartnersLayout = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const togglePartner = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-[#FDFDFD] dark:bg-dark px-6 transition-colors duration-300 w-full">
            <div className="w-full max-w-5xl mx-auto pt-16 pb-24">
                <Fade direction="up" duration={1000} triggerOnce>
                    <header className="text-center mb-20">
                        <span className="text-accent dark:text-accentDark font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
                            Collaboration
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-dark dark:text-light mb-6">
                            Our Partners
                        </h1>
                        <p className="text-dark/60 dark:text-light/60 text-lg max-w-2xl mx-auto leading-relaxed">
                            We collaborate with industry leaders to bring you the best products and services across the rice supply chain.
                        </p>
                    </header>
                </Fade>

                <div className="flex flex-col gap-6 w-full">
                    {partnersData.map((partner, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <Fade key={index} direction="up" delay={index * 150} triggerOnce>
                                <div 
                                    className={cn(
                                        "group w-full overflow-hidden rounded-sm border transition-all duration-500",
                                        isExpanded 
                                            ? "bg-white dark:bg-dark/60 border-accent/30 dark:border-accentDark/30 shadow-xl" 
                                            : "bg-white dark:bg-dark/20 border-dark/5 dark:border-light/5 hover:border-accent/20 dark:border-accentDark/20 hover:shadow-lg"
                                    )}
                                >
                                    <button 
                                        onClick={() => togglePartner(index)}
                                        className="w-full flex flex-col md:flex-row md:items-center justify-between p-8 text-left outline-none"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={cn(
                                                    "w-2 h-2 rounded-full transition-all duration-500",
                                                    isExpanded ? "bg-accent dark:bg-accentDark scale-125" : "bg-dark/10 dark:bg-light/10"
                                                )} />
                                                <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light tracking-tight"> 
                                                    {partner.name}
                                                </h2>
                                            </div>

                                            <div className="flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-widest text-dark/40 dark:text-light">
                                                <span className="flex items-center gap-2 transition-colors">
                                                    <MapPin size={14} className="text-accent/60 dark:text-accentDark" /> 
                                                    { partner.location || 'Global Partner' }
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Briefcase size={14} className="text-accent/60 dark:text-accentDark" /> 
                                                    { partner.industry || 'Industry Leader' }
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-6 md:mt-0 flex items-center gap-4">
                                            <span className="hidden md:block text-[10px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity text-dark dark:text-light">
                                                {isExpanded ? "Close Details" : "View Details"}
                                            </span>
                                            <motion.div 
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                className={cn(
                                                    "p-3 rounded-full border transition-colors",
                                                    isExpanded ? "bg-accent dark:bg-accentDark border-accent dark:border-accentDark text-white dark:text-dark" : "bg-transparent border-dark/10 text-dark/40 dark:border-light dark:text-light"
                                                )}
                                            >
                                                <ChevronDown size={18} />
                                            </motion.div>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="px-8 pb-10 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-dark/5 dark:border-light/5 pt-10">
                                                    
                                                    <div>
                                                        <h5 className="text-[10px] uppercase font-black tracking-[0.2em] text-accent dark:text-accentDark mb-4">Partner Profile</h5>
                                                        <p className="text-dark/70 dark:text-light/70 leading-relaxed mb-8 italic">
                                                            "{partner.description}"
                                                        </p>
                                                        
                                                        {partner.website && (
                                                            <a 
                                                                href={partner.website} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent dark:bg-accentDark text-white dark:text-dark text-[10px] font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
                                                            >
                                                                Visit Website <ExternalLink size={14} />
                                                            </a>
                                                        )}
                                                    </div>

                                                    <div className="bg-[#FBFBFB] dark:bg-white/5 p-8 rounded-sm">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <Globe size={18} className="text-accent dark:text-accentDark" />
                                                            <h5 className="text-[10px] uppercase font-black tracking-[0.2em] text-dark/40 dark:text-light">Partnership Details</h5>
                                                        </div>
                                                        <div className="space-y-4">
                                                            <div className="flex flex-col border-b border-dark/5 pb-3">
                                                                <span className="text-[10px] uppercase tracking-widest text-accent dark:text-accentDark font-semibold mb-1">Status</span>
                                                                <span className="font-bold text-dark dark:text-light">{partner.status}</span>
                                                            </div>
                                                            <div className="flex flex-col border-b border-dark/5 pb-3 last:border-0">
                                                                <span className="text-[10px] uppercase tracking-widest text-accent dark:text-accentDark font-semibold mb-1">Collaboration Type</span>
                                                                <span className="font-bold text-dark dark:text-light">{partner.collaboration_type}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Fade>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default PartnersLayout;