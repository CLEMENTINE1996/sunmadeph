"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from "react-awesome-reveal";
import orgData from "@/src/data/organizational-chart.json";

const cn = (...classes) => classes.filter(Boolean).join(' ');

const OrgNode = ({ node, isExecutiveTier = false, index = 0 }) => {
  const isBranchNode = !!node.branch;
  
  let children = [];
  if (node.manager) children = [node.manager];
  else if (node.subordinates) children = node.subordinates;
  else if (node.staff) children = node.staff;

  const isPresident = node.role === "President";
  const isVP = node.role === "Vice President";

  return (
    <li className={cn(isBranchNode ? "is-branch-root" : "relative")}>
      <div className="node-content flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.03, 
            translateY: -5,
          }}
          className={cn(
            "node-card transition-all duration-300 ease-out cursor-pointer relative z-10",
            isExecutiveTier ? "min-w-[240px] py-8" : "min-w-[190px] py-5",
            isBranchNode 
              ? "bg-accent text-light border-none shadow-xl shadow-accent/20" 
              : "bg-white dark:bg-dark/40 border border-dark/5 dark:border-light/10 text-dark dark:text-light shadow-sm hover:shadow-md"
          )}
        >
          {!isBranchNode && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-accent/30 rounded-full" />
          )}

          <div className={cn(
            "font-bold tracking-tight capitalize px-4",
            isExecutiveTier ? "text-lg md:text-xl" : "text-sm md:text-base"
          )}>
            {isBranchNode ? `${node.branch.toUpperCase()}` : node.name}
          </div>
          
          <div className={cn(
            "uppercase tracking-[0.15em] mt-2 font-bold opacity-50",
            isExecutiveTier ? "text-[10px]" : "text-[9px]",
            isBranchNode ? "text-light/90" : "text-accent"
          )}>
            {isBranchNode ? "Primary Branch" : node.role}
          </div>
        </motion.div>
      </div>

      {children.length > 0 && (
        <ul className="flex justify-center">
          {children.map((child, idx) => (
            <OrgNode 
              key={`${child.name}-${idx}`} 
              node={child} 
              index={idx}
              isExecutiveTier={isPresident || isVP} 
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const OrganizationPage = () => {
  const [selectedBranch, setSelectedBranch] = useState("davao");
  const branches = ["davao", "cebu", "cagayan de oro", "manila", "sinaragan rice mill"];

  const filteredData = useMemo(() => {
    const root = JSON.parse(JSON.stringify(orgData.org_chart || orgData));
    if (root.subordinates?.[0]?.subordinates?.[0]) {
      const director = root.subordinates[0].subordinates[0];
      director.subordinates = director.subordinates.filter(
        (b) => b.branch?.toLowerCase() === selectedBranch.toLowerCase()
      );
    }
    return root;
  }, [selectedBranch]);

  return (
    <main className="min-h-screen py-24 px-5 bg-[#FDFDFD] dark:bg-dark transition-colors duration-300 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <Fade direction="up" duration={1000} triggerOnce>
          <div className="text-center mb-16">
            <span className="text-accent dark:text-accentDark font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
              SunMade Leadership
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-dark dark:text-light leading-none">
              Our Structure
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={cn(
                    "px-6 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all duration-500 border",
                    selectedBranch === branch
                      ? "bg-accent border-accent text-white shadow-lg shadow-accent/20 scale-105"
                      : "bg-white dark:bg-zinc-900 border-dark/10 dark:border-light/10 text-dark/60 dark:text-light/60 hover:border-accent hover:text-accent"
                  )}
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>
        </Fade>

        <div className="org-chart-wrapper custom-scrollbar overflow-x-auto pb-32">
          <AnimatePresence mode="wait">
            <motion.ul 
              key={selectedBranch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="tree"
            >
              <OrgNode node={filteredData} isExecutiveTier={true} />
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .org-chart-wrapper { display: flex; justify-content: center; width: 100%; }
        .node-card { border-radius: 4px; text-align: center; } /* Reduced rounding to match SunMade aesthetic */
        
        .tree, .tree ul { display: flex; justify-content: center; position: relative; padding-top: 50px; }
        .tree li { text-align: center; list-style-type: none; position: relative; padding: 50px 20px 0 20px; transition: all 0.5s; }

        /* Subtle Connector Lines */
        .tree li::before, .tree li::after {
          content: ''; position: absolute; top: 0; right: 50%;
          border-top: 1.5px solid rgba(0, 0, 0, 0.08); width: 50%; height: 50px;
        }
        .tree li::after { right: auto; left: 50%; border-left: 1.5px solid rgba(0, 0, 0, 0.08); }
        .dark .tree li::before, .dark .tree li::after { border-color: rgba(255, 255, 255, 0.1); }

        .tree li:only-child::after, .tree li:only-child::before { display: none; }
        .tree li:only-child { padding-top: 0; }
        .tree li:first-child::before, .tree li:last-child::after { border: 0 none; }
        .tree li:last-child::before { border-right: 1.5px solid rgba(0, 0, 0, 0.08); border-radius: 0 8px 0 0; }
        .tree li:first-child::after { border-radius: 8px 0 0 0; }

        .tree ul::before {
          content: ''; position: absolute; top: 0; left: 50%;
          border-left: 1.5px solid rgba(0, 0, 0, 0.08); width: 0; height: 50px;
        }
        .dark .tree ul::before { border-color: rgba(255, 255, 255, 0.1); }
        
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #7b9d6a; border-radius: 10px; opacity: 0.3; }
      `}</style>
    </main>
  );
}

export default OrganizationPage;