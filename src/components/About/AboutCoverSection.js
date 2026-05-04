import Image from 'next/image'
import React from 'react'
import MainLogo from "../../../public/main-logo.png"
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

const AboutCoverSection = () => {

  const JOURNEY_DATA = [
    { 
      year: "2014", 
      title: "The Humble Mill",
      description: "Started as a small family-owned mill with a vision to modernize local rice production." 
    },
    { 
      year: "2018", 
      title: "Fair Trade Expansion",
      description: "Partnered with over 200 local farmers to ensure sustainable and fair-trade sourcing." 
    },
    { 
      year: "2024", 
      title: "Nationwide Reach",
      description: "Expanded our distribution nationwide, bringing SunMade quality to every Filipino household." 
    }
  ];

  const FOUNDERS_DATA = [
    {
      name: "Cristofer Arcand",
      role: "Founder, CEO",
      image: "https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg",
      isPrimary: true, 
      bio: "Born from firsthand experience building and shaping local agriculture, we understand the journey of quality from soil to shelf.",
      socials: { linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
      name: "Cooper Saris",
      role: "Business Expert",
      image: "https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg",
      isPrimary: false
    },
    {
      name: "Marley Vaccaro",
      role: "Strategy Lead",
      image: "https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg",
      isPrimary: false
    },
    {
      name: "Gustavo Dorwart",
      role: "Experience Designer",
      image: "https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg", 
      isPrimary: false
    }
  ];

  const AWARDS_DATA = [
    { title: "Best Local Produce 2023", org: "Agri-Business Council", icon: "🏅" },
    { title: "Sustainable Packaging Award", org: "Eco-Friendly Asia", icon: "🌱" },
    { title: "Top Quality Rice Brand", org: "Consumers Choice", icon: "🏆" },
    { title: "Community Impact Award", org: "Rural Dev. Network", icon: "🤝" }
  ];

  const primaryFounder = FOUNDERS_DATA.find(f => f.isPrimary);
  const teamMembers = FOUNDERS_DATA.filter(f => !f.isPrimary);

  return (
    <section className='w-full flex flex-col items-center justify-center text-dark dark:text-light overflow-hidden'>
      {/* Hero Section */}
      <div className='w-full md:min-h-[75vh] flex flex-col md:flex-row items-center justify-center py-12'>
        <div className='w-full md:w-1/2 h-full flex justify-center'> 
          <Fade direction="left" triggerOnce duration={1200}>
            <Image src={MainLogo} alt="SunMade Logo" 
            className='w-4/5 xs:w-3/4 md:w-[60%] h-auto object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Fade>
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 lg:px-16'>
          <Fade direction="up" duration={1200} triggerOnce cascade damping={0.1}>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left leading-tight'>
              From the Mill to Your Hand! Offering the best quality rice
            </h2>
            <p className='font-medium mt-4 text-base md:text-lg opacity-90'>
              At SunMade, we bridge the gap between local farmers and your dinner table. 
              Our commitment starts at the paddy field, ensuring every grain undergoes 
              rigorous quality checks.
            </p>
          </Fade>
        </div>
      </div>

      {/* Stats Section */}
      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-accent/5 dark:bg-accent/5 border-y border-dark/10 dark:border-light/10'>
        <Fade direction="up" duration={1200} triggerOnce cascade damping={0.1} className="w-full h-full flex justify-center">
            {[
            { label: "Years of Quality", value: "10+" },
            { label: "Partner Farms", value: "500+" },
            { label: "Rice Varieties", value: "12" },
            { label: "Happy Families", value: "10k+" },
            ].map((stat, index) => (
            <div key={index} className='flex flex-col items-center group cursor-default'>
                <span className='text-3xl font-bold text-accent dark:text-accentDark group-hover:scale-110 transition-transform duration-300'>{stat.value}</span>
                <span className='text-sm font-semibold uppercase tracking-wider'>{stat.label}</span>
            </div>
            ))}
        </Fade>
      </div>

      {/* Journey Section */}
      <div className='w-full px-5 xs:px-10 lg:px-16 py-20 bg-dark/5 dark:bg-light/5'>
        <div className='max-w-4xl mx-auto'>
          <Fade direction="up" duration={1200} triggerOnce>
            <h3 className='text-3xl font-bold mb-16 text-center'>Our Journey</h3>
          </Fade>
          
          <div className='relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent before:to-transparent'>
            {JOURNEY_DATA.map((item, idx) => (
                <div key={idx} className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group'>
   
                    <div className='flex items-center justify-center w-10 h-10 rounded-full border-2 border-accent bg-light dark:bg-dark text-accent font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10'>
                        {idx + 1}
                    </div>

                    {/* The Animated Card */}
                    <div className='w-[calc(100%-4rem)] md:w-[45%]'>
                        <Fade direction={idx % 2 === 0 ? "left" : "right"} duration={1200} triggerOnce>
                            <div className='p-8 rounded-2xl border border-dark/10 dark:border-light/10 bg-light dark:bg-dark shadow-sm hover:shadow-md transition-shadow'>
                                <span className='font-bold text-accent text-xl'>{item.year}</span>
                                <h4 className='font-bold text-xl mt-1'>{item.title}</h4>
                                <p className='text-base mt-3 opacity-80 leading-relaxed'>{item.description}</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className='w-full px-5 xs:px-10 lg:px-16 py-24 max-w-7xl mx-auto'>
        <Fade direction="up" duration={1200} triggerOnce cascade damping={0.1}>
            <div className='w-full flex flex-col md:flex-row bg-[#F8F9FA] dark:bg-dark/40 overflow-hidden rounded-sm border border-dark/5 dark:border-light/5 mb-8'>
                <div className='w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-between'>
                    <div>
                        <h3 className='text-4xl font-bold mb-6'>Founder Story</h3>
                        <p className='text-lg opacity-70 leading-relaxed mb-8'>
                            {primaryFounder?.bio}
                        </p>
                    </div>
                    <div className='flex gap-8 mt-auto pt-10'>
                        <div className='flex flex-col'><span className='font-bold text-2xl'>5.0</span><span className='text-[10px] uppercase font-bold opacity-50'>Quality Score</span></div>
                        <div className='flex flex-col'><span className='font-bold text-2xl'>12</span><span className='text-[10px] uppercase font-bold opacity-50'>Varieties</span></div>
                        <div className='flex flex-col'><span className='font-bold text-2xl'>500+</span><span className='text-[10px] uppercase font-bold opacity-50'>Farmers</span></div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 relative min-h-[400px]'>
                    <img src={primaryFounder?.image} alt={primaryFounder?.name} className='absolute inset-0 w-full h-full object-cover object-top' />
                    <div className='absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white'>
                        <h4 className='text-xl font-bold'>{primaryFounder?.name}</h4>
                        <p className='text-sm opacity-80'>{primaryFounder?.role}</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {teamMembers.map((member, i) => (
                    <div key={i} className='bg-[#F8F9FA] dark:bg-dark/40 border border-dark/5 dark:border-light/5 rounded-sm overflow-hidden group'>
                        <div className='aspect-[4/5] overflow-hidden'>
                            <img src={member.image} alt={member.name} className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100' />
                        </div>
                        <div className='p-6'>
                            <h4 className='font-bold text-lg'>{member.name}</h4>
                            <p className='text-sm opacity-60'>{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Fade>
      </div>

      {/* Awards Section */}
      <div className='w-full px-5 xs:px-10 lg:px-16 py-20 bg-dark/5 dark:bg-light/5'>
        <Fade direction="up" duration={1200} triggerOnce cascade damping={0.1}>
            <h3 className='text-3xl font-bold mb-12 text-center'>Recognition & Excellence</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {AWARDS_DATA.map((award, i) => (
                    <div key={i} className='flex flex-col items-center p-8 bg-light dark:bg-dark rounded-xl text-center border border-dark/10 dark:border-light/10 group shadow-sm'>
                        <div className='mb-4 text-4xl group-hover:rotate-12 transition-transform duration-300'>{award.icon}</div>
                        <h5 className='font-bold text-sm md:text-base'>{award.title}</h5>
                        <span className='text-[10px] opacity-60 mt-2 uppercase font-bold tracking-widest'>{award.org}</span>
                    </div>
                ))}
            </div>
        </Fade>
      </div>

      {/* Quality Process Section */}
      <div className='w-full px-5 xs:px-10 lg:px-16 py-24 text-center'>
        <Fade direction="up" duration={1200} triggerOnce cascade damping={0.1}>
            <h3 className='text-3xl font-bold mb-4'>The SunMade Standard</h3>
            <p className='max-w-2xl mx-auto mb-12 opacity-80 italic'>Meticulous steps to ensure peak freshness.</p>
            <div className='flex flex-wrap justify-center gap-6'>
                {['Harvesting', 'Drying', 'Hulling', 'Polishing', 'Grading'].map((step, idx) => (
                    <div key={idx} className='px-8 py-4 border-2 border-accent/20 rounded-full font-bold hover:bg-accent hover:text-light transition-all'>
                        {idx + 1}. {step}
                    </div>
                ))}
            </div>
        </Fade>
      </div>

      {/* Experience Section */}
      <div className='w-full px-5 py-24 flex flex-col items-center justify-center bg-accent/10 dark:bg-accent/5 text-center'>
        <Fade direction="up" duration={1200} triggerOnce>
            <div className='max-w-4xl p-12 md:p-20 rounded-2xl bg-light dark:bg-dark shadow-xl border border-accent/10'>
                <h3 className='text-accent dark:text-accentDark text-4xl md:text-5xl font-bold mb-8'>
                Experience the SunMade Difference
                </h3>
                <p className='text-lg mb-10 opacity-90 max-w-xl mx-auto'>
                Ready to elevate your daily meals? Join thousands of families who trust our grains for their table.
                </p>
                <Link href="/products">
                    <button className='px-12 py-4 bg-accent text-light font-bold rounded-full hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-1 transition-all'>
                        Browse Our Products
                    </button>
                </Link>
            </div>
        </Fade>
      </div>

    </section>
  )
}

export default AboutCoverSection