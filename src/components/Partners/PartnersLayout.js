"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import partnersData from "@/src/data/partners.json";
import { ChevronDown, MapPin, Briefcase } from 'lucide-react'; 

const PartnersLayout = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const togglePartner = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-5xl mx-auto pt-16 px-6 pb-24">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-accent dark:text-accentDark">
                    Our Partners
                </h1>
                <p className="text-dark dark:text-light text-lg opacity-60 max-w-2xl mx-auto mb-6">
                    We collaborate with industry leaders to bring you the best products and services.
                </p>
            </header>

            <div className="flex flex-col gap-4 w-full">
                {partnersData.map((partner, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <div 
                            key={index}
                            className="group w-full overflow-hidden rounded-2xl border border-dark/10 dark:border-light/10 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => togglePartner(index)}
                                className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 text-left"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">  
                                        <h2 className="text-xl md:text-2xl font-bold text-accent dark:text-accentDark group-hover: transition-colors">
                                            {partner.name}
                                        </h2>  
                                    </div>

                                    <div className="flex flex-wrap gap-4 opacity-60 text-dark dark:text-light">
                                        <span className="flex items-center gap-1.5"><MapPin size={14}/> { partner.location || '' }</span>
                                        <span className="flex items-center gap-1.5"><Briefcase size={14}/> { partner.industry || '' }</span>
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0 flex items-center justify-between text-dark dark:text-light">
                                    <span className="md:hidden text-xs font-bold uppercase ">View Details</span>
                                    <motion.div
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        className="p-2 rounded-full bg-dark/5 dark:bg-light/5"
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </div>
                            </button>   
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }} 

                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 text-dark dark:text-light"
                                    >
                                        <p className="mb-4">{partner.description}</p>
                                        {partner.website && (   
                                            <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-accent dark:text-accentDark font-bold hover:underline">
                                                Visit Website
                                            </a>        

                                        )}
                                    </motion.div>
                                )}  
                            </AnimatePresence>
                        </div>
                    );
                }
                )}

            </div>
        </div>
    );
}

export default PartnersLayout;