"use client"
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import { usePathname } from "next/navigation"; 

const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const pathname = usePathname(); 

  const toggle = () => setClick(!click);

  const isActive = (path) => pathname === path;

  return (
    <header className="w-full h-20 px-5 sm:px-10 flex items-center justify-between relative z-50">
        <Logo />

        <button className="inline-block sm:hidden z-50 p-2" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer">
            <div className="relative">
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
                style={{ transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)" }}
              >&nbsp;</span>
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                style={{ opacity: click ? 0 : 1 }}
              >&nbsp;</span>
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                style={{ transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)" }}
              >&nbsp;</span>
            </div>
          </div>
        </button>

        <nav className={cx(
          "fixed right-1/2 translate-x-1/2 flex items-center justify-center rounded-sm font-medium capitalize backdrop-blur-md z-50 transition-all duration-300 ease",
          "sm:top-10 sm:-translate-y-1/2 sm:py-3 sm:px-8", 
          click ? "top-20 py-4 px-6 opacity-100 visible" : "top-[-100%] py-0 px-0 opacity-0 invisible sm:visible sm:opacity-100 sm:top-10",
          mode === "light" ? "bg-white/80 text-dark" : "bg-dark/80 text-light"
        )}>
            <Link 
              href="/" 
              className={cx(
                "mx-2 transition-colors",
                isActive("/") ? "text-accent dark:text-accentDark font-bold" : "hover:text-accent dark:hover:text-accentDark"
              )} 
              onClick={() => setClick(false)}
            >
              Home
            </Link>

            <Link 
              href="/products" 
              className={cx(
                "mx-2 transition-colors",
                isActive("/products") ? "text-accent dark:text-accentDark font-bold" : "hover:text-accent dark:hover:text-accentDark"
              )} 
              onClick={() => setClick(false)}
            >
              Products
            </Link>

            {/* About Dropdown */}
            <div className="relative group mx-2 py-2 cursor-pointer">
              <div className={cx(
                "flex items-center transition-colors",
                isActive("/about") ? "text-accent dark:text-accentDark font-bold" : "hover:text-accent dark:hover:text-accentDark"
              )}>
                About
                <svg 
                  className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>

              {/* Dropdown Menu */}
              <div className={cx(
                "absolute left-0 top-full mt-1 min-w-[160px] flex flex-col rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                mode === "light" ? "bg-white text-dark" : "bg-dark text-light border border-light/10"
              )}>
                <Link 
                  href="/about" 
                  className="px-4 py-2 hover:bg-accent/10 hover:text-accent dark:hover:text-accentDark transition-colors text-sm"
                  onClick={() => setClick(false)}
                >
                  Company Overview
                </Link>
                <Link 
                  href="/about/organization" 
                  className="px-4 py-2 hover:bg-accent/10 hover:text-accent dark:hover:text-accentDark transition-colors text-sm"
                  onClick={() => setClick(false)}
                >
                  Organizational Chart
                </Link>
                <Link 
                  href="/about/branches" 
                  className="px-4 py-2 hover:bg-accent/10 hover:text-accent dark:hover:text-accentDark transition-colors text-sm"
                  onClick={() => setClick(false)}
                >
                  Branches
                </Link>
                <Link 
                  href="/about/partners" 
                  className="px-4 py-2 hover:bg-accent/10 hover:text-accent dark:hover:text-accentDark transition-colors text-sm"
                  onClick={() => setClick(false)}
                >
                  Partners
                </Link>
              </div>
            </div>

            <Link 
              href="/careers" 
              className={cx(
                "mx-2 transition-colors",
                isActive("/careers") ? "text-accent dark:text-accentDark font-bold" : "hover:text-accent dark:hover:text-accentDark"
              )} 
              onClick={() => setClick(false)}
            >
              Careers
            </Link>

            <Link 
              href="/contact" 
              className={cx(
                "mx-2 transition-colors",
                isActive("/contact") ? "text-accent dark:text-accentDark font-bold" : "hover:text-accent dark:hover:text-accentDark"
              )} 
              onClick={() => setClick(false)}
            >
              Contact
            </Link>
            
            <button 
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={cx("w-8 h-8 ease ml-2 flex items-center justify-center rounded-full p-1 transition-transform active:scale-90", 
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark")}
              aria-label="theme-switcher"
            >
                {mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
            </button>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden sm:flex items-center gap-4">
            <a href={siteMetadata.facebook} target="_blank" className="text-dark dark:text-light hover:scale-125 transition-all"><FacebookIcon /></a>
            <a href={siteMetadata.instagram} target="_blank" className="text-dark dark:text-light hover:scale-125 transition-all"><InstagramIcon /></a>
        </div>
    </header>
  )
}

export default Header;