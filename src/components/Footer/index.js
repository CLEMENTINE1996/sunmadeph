"use client";
import React from "react";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"; 
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import profileImg from "@/public/profile-img.png"
import Image from "next/image"
import { Fade } from "react-awesome-reveal";

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

const FooterLink = ({ href, children }) => (
  <Link href={href} className="group flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300">
    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
    {children}
  </Link>
);

const SocialLink = ({ href, ariaLabel, children }) => (
  <a 
    href={href} 
    rel="noopener noreferrer" 
    aria-label={ariaLabel} 
    target="_blank"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 border border-white/30 hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:-translate-y-1"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="mt-18 mb-4 relative overflow-hidden sm:mt-24 md:mt-32 px-5 sm:px-10 sxl:px-32 bg-gradient-to-br from-accent to-accentDark dark:from-accentDark dark:to-black
      text-light rounded-sm">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-8 py-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5 space-y-8">
            <Fade direction="up" triggerOnce>
              <div className="flex items-center gap-5">
                <Image 
                  src={profileImg} 
                  alt="Sunmade Rice logo" 
                  className="w-20 h-20 rounded-full border-4 border-white/30 object-cover shadow-xl"
                />
                <div>
                  <h2 className="text-3xl font-black tracking-tight">SunMade</h2>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-bold">Premium Philippine Grain</p>
                </div>
              </div>
              
              <p className="text-l leading-relaxed text-white max-w-md font-medium drop-shadow-sm">
                "A taste of excellence in every grain."A proudly Filipino company producing premium <span className="underline decoration-white/40 underline-offset-4">100% homegrown</span> rice since 2009.
              </p>

              <div className="flex gap-4">
                <SocialLink href={siteMetadata.facebook} ariaLabel="Facebook"><FacebookIcon /></SocialLink>
                <SocialLink href={siteMetadata.instagram} ariaLabel="Instagram"><InstagramIcon /></SocialLink>
              </div>
            </Fade>
          </div>

          <div className="lg:col-span-3 lg:ml-auto">
            <Fade direction="up" delay={100} triggerOnce>
              <h4 className="text-sm uppercase tracking-[0.2em] font-black text-white/60 mb-8">Explore</h4>
              <nav className="flex flex-col gap-5 text-base font-semibold">
                <FooterLink href="/about">Our Heritage</FooterLink>
                <FooterLink href="/products">Rice Varieties</FooterLink>
                <FooterLink href="/quality">Quality Standards</FooterLink>
                <FooterLink href="/contact">Bulk Orders</FooterLink>
              </nav>
            </Fade>
          </div>

          <div className="lg:col-span-4">
            <Fade direction="up" delay={200} triggerOnce>
              <h4 className="text-sm uppercase tracking-[0.2em] font-black text-white/60 mb-8">Get In Touch</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <MapPin size={22} className="shrink-0" />
                  <span className="text-sm font-medium">{siteMetadata.address}</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Phone size={22} className="shrink-0" />
                  <a href={`tel:${siteMetadata.phone}`} className="text-lg font-bold hover:underline">
                    {siteMetadata.phone}
                  </a>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Mail size={22} className="shrink-0" />
                  <span className="text-sm font-medium">acct.mancor@gmail.com</span>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-bold">
          <p>© {new Date().getFullYear()} Sunmade Rice. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;