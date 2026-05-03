"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import careersData from "@/src/data/careers.json";
import { ChevronDown, MapPin, Briefcase } from 'lucide-react'; 

const CareersPage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleRole = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-5xl mx-auto pt-16 px-6 pb-24">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-accent dark:text-accentDark">
                    Join Our Team
                </h1>
                <p className="text-dark dark:text-light text-lg opacity-60 max-w-2xl mx-auto mb-6">
                    We’re looking for passionate individuals to help us build the future of our industry.
                </p>
            </header>

            <div className="flex flex-col gap-4 w-full">
                {careersData.map((role, index) => {
                    const isExpanded = expandedIndex === index;
                    
                    return (
                        <div 
                            key={index}
                            className="group w-full overflow-hidden rounded-2xl border border-dark/10 dark:border-light/10 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button 
                                onClick={() => toggleRole(index)}
                                className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 text-left"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-xl md:text-2xl font-bold text-accent dark:text-accentDark group-hover:text-blue-500 transition-colors">
                                            {role.title}
                                        </h2>
                                        {role.is_new && (
                                            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full text-dark dark:text-light">New</span>
                                        )}
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-4 opacity-60 text-dark dark:text-light">
                                        <span className="flex items-center gap-1.5"><MapPin size={14}/> { role.work_type || '' } { role.office_location ? '/' : '' } { role.office_location || '' }</span>
                                        <span className="flex items-center gap-1.5"><Briefcase size={14}/> { role.employment_type || '' }</span>
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0 flex items-center justify-between text-dark dark:text-light">
                                    <span className="md:hidden text-xs font-bold uppercase text-blue-500">View Details</span>
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
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="p-6 pb-8 pt-2 border-t border-dark/5 dark:border-light/5">
                                            <div className="grid md:grid-cols-1 gap-8">
                                                <div className="md:col-span-2">
                                                    <h3 className="text-dark dark:text-light font-bold uppercase tracking-wider text-blue-500 mb-3">Description</h3>
                                                    <p className="text-dark dark:text-light leading-relaxed mb-6">
                                                        {role.description}
                                                    </p>
                                                    <h3 className="text-dark dark:text-light font-bold uppercase tracking-wider text-blue-500 mb-3">Qualifications</h3>
                                                    <ul className="text-dark dark:text-light grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                                                        {role.qualifications.map((qual, qualIndex) => (
                                                            <li key={qualIndex} className="flex items-start gap-2"> 
                                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                                                {qual}
                                                            </li>
                                                        ))}
                                                    </ul>   

                                                    <h3 className="text-dark dark:text-light font-bold uppercase tracking-wider text-blue-500 mb-3">Job Details</h3>
                                                    <ul className="text-dark dark:text-light grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                                                        {role.job_details.map((detail, detailIndex) => (
                                                            <li key={detailIndex} className="flex items-start gap-2">
                                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                                                {detail}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <h3 className="text-dark dark:text-light font-bold uppercase tracking-wider text-blue-500 mb-3">Key Requirements</h3>
                                                    <ul className="text-dark dark:text-light grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                        {role.requirements.map((req, reqIndex) => (
                                                            <li key={reqIndex} className="flex items-start gap-2">
                                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                                                {req}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="flex flex-col justify-end">
                                                    <button className="bg-accent dark:bg-accentDark py-4 text-light dark:text-dark font-bold rounded-xl hover:scale-[1.02] transition-transform active:scale-95 w-3xs">
                                                        Apply for this position
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CareersPage;