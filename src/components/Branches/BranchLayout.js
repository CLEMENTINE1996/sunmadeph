"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import branchData from "@/src/data/branches.json";
import { ChevronDown, MapPin, Briefcase } from 'lucide-react'; 

const BranchPage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleRole = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
        };

    return (
        <div className="w-full max-w-5xl mx-auto pt-16 px-6 pb-24">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-accent dark:text-accentDark">
                    Our Branches
                </h1>
                <p className="text-dark dark:text-light text-lg opacity-60 max-w-2xl mx-auto mb-6">
                    Explore our network of branches across the country, each dedicated to delivering the best quality rice to your doorstep.
                </p>
            </header>

            <div className="flex flex-col gap-4 w-full">
                {branchData.map((branch, index) => {
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
                                            {branch.name}
                                        </h2>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm opacity-60 text-dark dark:text-light">
                                        <span className="flex items-center gap-1.5"><MapPin size={14}/> { branch.location || '' }</span>
                                        <span className="flex items-center gap-1.5"><Briefcase size={14}/> { branch.branch_manager?.name || '' }</span>
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
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="p-6 pb-6 text-dark dark:text-light"
                                    >
                                       
                                        <p className="mb-6">{branch.description}</p>

                                         <h5 className='mb-2 text-accent dark:text-accentDark font-semibold'>Services</h5>
                                        <ul className="list-disc list-inside space-y-2 mb-4">
                                            {branch.services.map((service, idx) => (
                                                <li key={idx}>{service}</li>
                                            ))}
                                        </ul>

                                        <h5 className='mb-2 text-accent dark:text-accentDark font-semibold'>Staff</h5>
                                        <ul className="list-disc list-inside space-y-1 mt-2">
                                            {branch?.branch_manager?.staff.map((staff, idx) => (
                                                <li key={idx}>{staff.name} - {staff.role}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                }
                )}
                </div>

                </div>
    )
            
}

export default BranchPage;