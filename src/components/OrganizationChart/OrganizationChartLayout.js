"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import orgData from "@/src/data/organizational-chart.json";

const cn = (...classes) => classes.filter(Boolean).join(' ');

const OrgNode = ({ node, isExecutiveTier = false }) => {
  const isBranchNode = !!node.branch;
  
  let children = [];
  if (node.manager) children = [node.manager];
  else if (node.subordinates) children = node.subordinates;
  else if (node.staff) children = node.staff;

  const isPresident = node.role === "President";
  const isVP = node.role === "Vice President";

  return (
    <li className={cn(isBranchNode ? "is-branch-root" : "relative")}>
      <div className="node-content flex flex-col items-center bg:light dark:bg:accentDark">
        <motion.div 
          whileHover={{ 
            scale: isExecutiveTier ? 1.1 : 1.05, 
            translateY: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          className={cn(
            "node-card transition-all duration-300 ease-out cursor-pointer relative z-10 shadow-sm",
            isExecutiveTier ? "min-w-[220px] py-6" : "min-w-[180px] py-4",
            isBranchNode 
              ? "bg-gradient-to-br from-accent to-accentDark text-light border-none shadow-lg" 
              : "bg-light dark:bg-dark/10 border border-dark/10 dark:border-light/10 text-dark dark:text-light"
          )}
        >
          <div className={cn(
            "font-bold tracking-tight capitalize",
            isExecutiveTier ? "text-base md:text-lg" : "text-sm md:text-base"
          )}>
            {isBranchNode ? `${node.branch.toUpperCase()}` : node.name}
          </div>
          <div className={cn(
            "uppercase tracking-widest mt-1 font-semibold opacity-70",
            isExecutiveTier ? "text-[11px] md:text-xs" : "text-[9px] md:text-[10px]",
            isBranchNode ? "text-light/90" : "text-dark dark:text-accentDark"
          )}>
            {isBranchNode ? "Branch Location" : node.role}
          </div>
        </motion.div>
      </div>

      {children.length > 0 && (
        <ul>
          {children.map((child, idx) => (
            <OrgNode 
              key={`${child.name}-${idx}`} 
              node={child} 
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
    // Deep clone to prevent data loss on switch
    const root = JSON.parse(JSON.stringify(orgData.org_chart || orgData));
    
    // President -> VP -> Director path
    if (root.subordinates?.[0]?.subordinates?.[0]) {
      const director = root.subordinates[0].subordinates[0];
      // Keep only the selected branch
      director.subordinates = director.subordinates.filter(
        (b) => b.branch?.toLowerCase() === selectedBranch.toLowerCase()
      );
    }
    return root;
  }, [selectedBranch]);

  return (
    <main className="min-h-screen py-16 px-5 transition-colors duration-300 overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <span className="text-accent dark:text-accentDark font-bold tracking-[0.2em] text-xs uppercase">
          Internal Structure
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-light mt-4 capitalize">
          Organizational Chart
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {branches.map((branch) => (
            <button
              key={branch}
              onClick={() => setSelectedBranch(branch)}
              className={cn(
                "px-8 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 border",
                selectedBranch === branch
                  ? "bg-accent dark:bg-accentDark border-accent text-light dark:text-dark shadow-xl scale-110"
                  : "bg-white dark:bg-zinc-900 border-dark/10 dark:border-light/10 text-dark dark:text-light hover:border-accent hover:dark:border-accentDark hover:bg-accent/10 dark:hover:bg-accentDark/10 dark:hover:text-accent dark:hover:text-accentDark"
              )}
            >
              {branch}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="org-chart-wrapper custom-scrollbar overflow-x-auto pb-20">
        <AnimatePresence mode="wait">
          <motion.ul 
            key={selectedBranch}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="tree"
          >
            <OrgNode node={filteredData} isExecutiveTier={true} />
          </motion.ul>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .org-chart-wrapper { display: flex; justify-content: center; width: 100%; }
        .node-card { border-radius: 16px; text-align: center; }
        
        .tree, .tree ul { display: flex; justify-content: center; position: relative; padding-top: 40px; }
        .tree li { float: left; text-align: center; list-style-type: none; position: relative; padding: 40px 15px 0 15px; }

        .tree li::before, .tree li::after {
          content: ''; position: absolute; top: 0; right: 50%;
          border-top: 2px solid rgba(123, 157, 106, 0.2); width: 50%; height: 40px;
        }
        .tree li::after { right: auto; left: 50%; border-left: 2px solid rgba(123, 157, 106, 0.2); }
        .dark .tree li::before, .dark .tree li::after { border-color: rgba(123, 157, 106, 0.1); }

        .tree li:only-child::after, .tree li:only-child::before { display: none; }
        .tree li:only-child { padding-top: 0; }
        .tree li:first-child::before, .tree li:last-child::after { border: 0 none; }
        .tree li:last-child::before { border-right: 2px solid rgba(123, 157, 106, 0.2); border-radius: 0 12px 0 0; }
        .tree li:first-child::after { border-radius: 12px 0 0 0; }

        .tree ul::before {
          content: ''; position: absolute; top: 0; left: 50%;
          border-left: 2px solid rgba(123, 157, 106, 0.2); width: 0; height: 40px;
        }
        
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #7b9d6a; border-radius: 10px; }
      `}</style>
    </main>
  );
}

export default OrganizationPage;