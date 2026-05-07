"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Send, CheckCircle2, AlertCircle, Loader2, 
  Mail, User, Building, MessageSquare, 
  Phone, Globe, Clock, ShieldCheck 
} from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";

import contactData from "@/src/data/contact.json";

const cn = (...classes) => classes.filter(Boolean).join(' ');

const ContactInfoCard = ({ icon: Icon, title, detail, subDetail }) => (
  <div className="flex flex-col p-8 bg-white dark:bg-white/5 border border-dark/5 dark:border-light/5 rounded-sm hover:border-accent/30 transition-colors group">
    <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accentDark/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-accent dark:text-accentDark" size={20} />
    </div>
    <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-dark/40 dark:text-light/40 mb-2">{title}</h4>
    <p className="text-xl font-bold text-dark dark:text-light mb-1">{detail}</p>
    <p className="text-sm text-dark/50 dark:text-light/50">{subDetail}</p>
  </div>
);

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${contactData.formspree_id}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClasses = (hasError) => cn(
    "w-full bg-transparent border-b py-4 outline-none transition-all duration-500 placeholder:text-dark/20 dark:placeholder:text-light/20 text-lg md:text-xl font-medium",
    hasError 
      ? "border-red-500 focus:border-red-500" 
      : "border-dark/10 dark:border-light/10 focus:border-accent dark:focus:border-accentDark"
  );

  return (
    <div className="w-full">
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Fade direction="up" triggerOnce>
            <div className="max-w-3xl">
              <span className="text-accent dark:text-accentDark font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">
                Connect With SunMade
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-dark dark:text-light mb-8 tracking-tighter">
                We're here to <span className="text-accent dark:text-accentDark">help.</span>
              </h1>
              <p className="text-xl text-dark/60 dark:text-light/60 leading-relaxed italic border-l-2 border-accent/20 pl-6">
                "Quality grains start with quality communication. Whether you are a local distributor or a family home, your inquiries are our priority."
              </p>
            </div>
          </Fade>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              <ContactInfoCard icon={Mail} title="Email Us" detail={contactData.support_email} subDetail="Response within 24 hours" />
              <ContactInfoCard icon={Phone} title="Call Support" detail={contactData.support_no} subDetail="Mon-Fri, 8am-5pm" />
              <ContactInfoCard icon={Globe} title="Headquarters" detail={contactData.headquarters} subDetail="Global Distribution Hub" />
              <ContactInfoCard icon={Clock} title="Working Hours" detail={contactData.working_hours} subDetail="UTC +8 Timezone" />
            </Fade>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-white/[0.02] border-y border-dark/5 dark:border-light/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 space-y-12">
            <Fade direction="left" triggerOnce>
              <div>
                <h3 className="text-2xl font-bold text-dark dark:text-light mb-4">Partner with us</h3>
                <p className="text-dark/60 dark:text-light/60 mb-8">{contactData.partner_us_label}</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-bold text-dark dark:text-light">Secure Inquiry</p>
                      <p className="text-xs text-dark/50 tracking-wide uppercase">Encrypted Data Handling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-bold text-dark dark:text-light">Verified Response</p>
                      <p className="text-xs text-dark/50 tracking-wide uppercase">Talk to Real Humans</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-black tracking-widest text-accent mb-1">Full Name *</label>
                  <input {...register("name", { required: true })} placeholder="Full Name" className={inputClasses(errors.name)} />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-black tracking-widest text-dark/40 mb-1">Company</label>
                  <input {...register("company")} placeholder="Organization Name" className={inputClasses(false)} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-black tracking-widest text-accent mb-1">Email *</label>
                  <input {...register("email", { required: true })} type="email" placeholder="email@address.com" className={inputClasses(errors.email)} />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-black tracking-widest text-accent mb-1">Inquiry Category</label>
                  <select {...register("interest")} className={cn(inputClasses(false), "bg-transparent cursor-pointer appearance-none")}>
                    <option value="Bulk Distribution">Bulk Distribution</option>
                    <option value="Retail Partnership">Retail Partnership</option>
                    <option value="Export Inquiry">Export Inquiry</option>
                    <option value="Other">General Question</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-black tracking-widest text-accent mb-1">Message Details *</label>
                <textarea {...register("message", { required: true })} rows={5} placeholder="Tell us how we can help..." className={cn(inputClasses(errors.message), "resize-none")} />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === "sending"}
                  className={cn("w-full md:w-auto px-12 py-5 font-black uppercase text-[11px] tracking-[0.3em] rounded-sm transition-all flex items-center justify-center gap-4",
                    status === "success" ? "bg-green-600 text-white" : "bg-dark dark:bg-light text-light dark:text-dark")}
                >
                  {status === "idle" && <>Send Message <Send size={16} /></>}
                  {status === "sending" && <>Processing... <Loader2 size={16} className="animate-spin" /></>}
                  {status === "success" && <>Message Delivered <CheckCircle2 size={16} /></>}
                  {status === "error" && <>Submission Failed <AlertCircle size={16} /></>}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}