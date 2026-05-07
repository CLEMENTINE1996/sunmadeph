import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const ProductModal = ({ product, closeModal }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-white/60 backdrop-blur-md">
      <div className="absolute inset-0" onClick={closeModal} />

      <Fade direction="up" duration={600} triggerOnce className="w-full max-w-5xl z-10">
        <div className="bg-white dark:bg-dark rounded-sm overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row max-h-[90vh] border border-dark/5">
          
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 p-2 bg-white/90 dark:bg-dark/80 backdrop-blur-md rounded-full text-dark dark:text-light hover:rotate-90 transition-all duration-300 z-20 border border-dark/10 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full md:w-1/2 overflow-y-auto bg-[#FBFBFB] p-4 space-y-4 custom-scrollbar border-r border-dark/5">
            {product.images.map((img, index) => (
              <div key={index} className="relative aspect-square rounded-sm overflow-hidden bg-white shadow-sm">
                <Image 
                  src={`${img}`}
                  alt={`${product.name} ${index}`} 
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-between bg-white dark:bg-dark">
            <div>
              <span className="text-[10px] uppercase font-bold text-accent tracking-[0.2em] mb-2 block">
                SunMade Premium Selection
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-dark dark:text-light">
                {product.name}
              </h2>
              <p className="text-2xl font-bold text-accent dark:text-accentDark mb-8">
                {product.price}
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold uppercase text-[11px] tracking-widest mb-3 text-dark/40 dark:text-light/40">Description</h4>
                  <p className="text-base leading-relaxed text-dark/80 dark:text-light/80">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold uppercase text-[11px] tracking-widest mb-3 text-dark/40 dark:text-light/40">Specifications</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <p className="text-sm italic p-4 bg-accent/[0.03] rounded-sm border-l-2 border-accent text-dark/70 dark:text-light/70">
                      {product.specifications}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-dark/5">
              <a 
                href={product.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-full py-4 bg-accent text-white font-bold rounded-sm overflow-hidden transition-all shadow-md hover:shadow-lg hover:shadow-accent/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Order Now via Google Form
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
              <p className="text-[10px] text-center mt-4 text-dark/30 dark:text-light/30 uppercase tracking-tighter">
                Secure checkout via official distributor forms
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ProductModal;