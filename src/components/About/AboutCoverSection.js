import Image from 'next/image'
import React from 'react'
import MainLogo from "../../../public/main-logo.png"
import Link from 'next/link';

const AboutCoverSection = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center text-dark dark:text-light'>
      {/* Hero Section */}
      <div className='w-full md:min-h-[75vh] flex flex-col md:flex-row items-center justify-center py-12'>
        <div className='w-full md:w-1/2 h-full flex justify-center'> 
            <Image src={MainLogo} alt="SunMade Logo" 
            className='w-4/5 xs:w-3/4 md:w-[60%] h-auto object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left leading-tight'>
              From the Mill to Your Hand! Offering the best quality rice
            </h2>
            <p className='font-medium mt-4 text-base md:text-lg'>
              At SunMade, we bridge the gap between local farmers and your dinner table. 
              Our commitment starts at the paddy field, ensuring every grain undergoes 
              rigorous quality checks before it reaches your home. 
            </p>
            <p className='mt-4 text-sm opacity-80'>
              Founded on the principles of sustainability and community support, 
              we take pride in delivering rice that isn't just a meal, but a 
              tradition of excellence.
            </p>
        </div>
      </div>

      {/* Stats / Quick Info Section */}
      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-accent/5 dark:bg-accent/5 border-y border-dark/10 dark:border-light/10'>
        {[
          { label: "Years of Quality", value: "10+" },
          { label: "Partner Farms", value: "500+" },
          { label: "Rice Varieties", value: "12" },
          { label: "Happy Families", value: "10k+" },
        ].map((stat, index) => (
          <div key={index} className='flex flex-col items-center'>
            <span className='text-3xl font-bold text-accent dark:text-accentDark'>{stat.value}</span>
            <span className='text-sm font-semibold uppercase tracking-wider'>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Core Values Section */}
      <div className='w-full px-5 xs:px-10 lg:px-16 py-20'>
        <h3 className='text-3xl font-bold mb-12 text-center underline underline-offset-8'>Why Choose SunMade?</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='space-y-3'>
            <h4 className='text-xl font-bold'>🌱 Sustainably Sourced</h4>
            <p className='text-sm italic'>Supporting eco-friendly farming practices to protect our lands for the next generation.</p>
          </div>
          <div className='space-y-3'>
            <h4 className='text-xl font-bold'>🚜 Farm Direct</h4>
            <p className='text-sm italic'>Eliminating unnecessary middlemen to ensure our farmers get the best price and you get the freshest stock.</p>
          </div>
          <div className='space-y-3'>
            <h4 className='text-xl font-bold'>🏆 Premium Milling</h4>
            <p className='text-sm italic'>Utilizing state-of-the-art milling technology to preserve the nutritional value and texture of every grain.</p>
          </div>
        </div>
      </div>

      {/* --- NEW SECTIONS ADDED BELOW --- */}

      {/* Our Journey Section */}
      <div className='w-full px-5 xs:px-10 lg:px-16 py-16 bg-dark/5 dark:bg-light/5'>
        <div className='max-w-4xl mx-auto'>
          <h3 className='text-3xl font-bold mb-8 text-center'>Our Journey</h3>
          <div className='space-y-8'>
            <div className='flex gap-4'>
                <span className='font-bold text-accent dark:text-accentDark text-xl'>2014</span>
                <p className='text-base'>Started as a small family-owned mill with a vision to modernize local rice production.</p>
            </div>
            <div className='flex gap-4'>
                <span className='font-bold text-accent dark:text-accentDark text-xl'>2018</span>
                <p className='text-base'>Partnered with over 200 local farmers to ensure sustainable and fair-trade sourcing.</p>
            </div>
            <div className='flex gap-4'>
                <span className='font-bold text-accent dark:text-accentDark text-xl'>2024</span>
                <p className='text-base'>Expanded our distribution nationwide, bringing SunMade quality to every Filipino household.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Process Section */}
      <div className='w-full px-5 xs:px-10 lg:px-16 py-20 text-center'>
        <h3 className='text-3xl font-bold mb-4'>The SunMade Standard</h3>
        <p className='max-w-2xl mx-auto mb-12 opacity-80'>We follow a meticulous 5-step process to ensure that only the cleanest, most flavorful grains make it into our sacks.</p>
        
        <div className='flex flex-wrap justify-center gap-6'>
            {['Harvesting', 'Drying', 'Hulling', 'Polishing', 'Grading'].map((step, idx) => (
                <div key={idx} className='px-6 py-3 border border-dark/20 dark:border-light/20 rounded-full font-semibold hover:bg-accent hover:text-light transition-all cursor-default'>
                    {idx + 1}. {step}
                </div>
            ))}
        </div>
      </div>

      <div className='w-full px-5 py-20 flex flex-col items-center justify-center bg-accent/5 dark:bg-accent/5 text-light text-center'>
        <h3 className='text-accent dark:text-accentDark text-3xl md:text-4xl font-bold mb-6'>
          Experience the SunMade Difference
        </h3>
        <p className='text-dark dark:text-light max-w-xl mb-8'>
          Ready to elevate your daily meals? Find a retailer near you or order online today.
        </p>
        
        <Link href="/products" className="inline-block">
          <button className='px-8 py-3 bg-accent text-light font-bold rounded-md hover:scale-105 transition-transform'>
            Browse Our Products
          </button>
        </Link>
      </div>

    </section>
  )
}

export default AboutCoverSection