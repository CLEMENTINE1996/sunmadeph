"use client";
import React from "react";
import { MapPin, Phone } from "lucide-react"; 
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import profileImg from "@/public/profile-img.png"
import Image from "next/image"

// Helper for vibrant social circles
const SocialLink = ({ href, ariaLabel, children }) => (
  <a 
    href={href} 
    rel="noopener noreferrer" 
    aria-label={ariaLabel} 
    target="_blank"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-light/10 dark:bg-dark/10 border border-light/20 dark:border-dark/20 backdrop-blur-md hover:bg-light hover:text-accent transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg"
  >
    {children}
  </a>
);

const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl mb-8 flex flex-col items-center overflow-hidden relative
      bg-gradient-to-br from-accent to-accentDark dark:from-accentDark dark:to-black
      text-light shadow-2xl border border-white/10">
      
      {/* Decorative Glow Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-light/50 to-transparent" />

      {/* Profile/Logo Image with Glow */}
      <div className="relative mt-12 group">
        <div className="absolute inset-0 bg-light rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
        <Image 
          src={profileImg} 
          alt="Sunmade Rice logo" 
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-light/20 object-cover shadow-inner" 
          sizes="20vw" 
        />
      </div>

      <h3 className="mt-8 font-bold text-center capitalize text-2xl sm:text-4xl lg:text-5xl px-6 max-w-4xl tracking-tight leading-tight">
        SunMade Rice. <span className="text-light/80">A Taste of Excellence in Every Grain.</span>
      </h3>

      <p className="mt-6 px-6 text-center w-full sm:w-3/5 font-light text-base sm:text-lg leading-relaxed text-light/90">
        A Proudly Filipino company. Producing premium quality <span className="font-semibold text-light">100% homegrown</span> Philippine rice since 2009.
      </p>

      {/* Vibrant Contact Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 mt-12 py-6 px-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-3 group cursor-default">
          <div className="p-2 bg-light/10 rounded-lg group-hover:bg-light group-hover:text-accent transition-colors">
            <MapPin size={22} />
          </div>
          <span className="text-sm sm:text-base">{siteMetadata.address}</span>
        </div>
        
        <div className="flex items-center gap-3 group">
          <div className="p-2 bg-light/10 rounded-lg group-hover:bg-light group-hover:text-accent transition-colors">
            <Phone size={22} />
          </div>
          <a href={`tel:${siteMetadata.phone.replace(/\s/g, '')}`} className="text-sm sm:text-base hover:text-light/70 transition-colors font-bold">
            {siteMetadata.phone}
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center gap-5 mt-10">
        <SocialLink href={siteMetadata.facebook} ariaLabel="Follow on Facebook">
          <FacebookIcon />
        </SocialLink>
        <SocialLink href={siteMetadata.instagram} ariaLabel="Follow on Instagram">
          <InstagramIcon />
        </SocialLink>
      </div>

      {/* Bottom Footer Area */}
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-white/10 py-8 px-8 flex flex-col md:flex-row items-center justify-between text-sm bg-black/10">
        <span className="text-center opacity-80">
          &copy;{new Date().getFullYear()} {siteMetadata.author}. All rights reserved.
        </span>
      

        <div className="flex items-center gap-1 opacity-80">
          Made with <span className="text-red-500 animate-pulse">&hearts;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;