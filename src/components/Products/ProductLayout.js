import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ProductLayout = ({ product, onClick, index = 0 }) => {
  return (
    <Fade direction="up" duration={1000} triggerOnce delay={index * 150}>
      <div 
        className="group flex flex-col bg-[#F8F9FA] dark:bg-dark/40 border border-dark/5 dark:border-light/5 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
        onClick={onClick}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-dark/5">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-accent text-light px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full shadow-sm">
              Best Seller
            </span>
          </div>

          <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <div className="bg-light p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6 text-dark"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
          </div>

          <Image
            src={`${product.images[0]}`}
            alt={product.name}
            fill
            className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-6 flex flex-col items-start bg-light dark:bg-dark/60">
          <span className="text-[10px] uppercase font-bold opacity-50 tracking-tighter mb-1">
            Premium Rice Collection
          </span>
          
          <h2 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h2>

          <div className="w-full flex justify-between items-center pt-4 border-t border-dark/5 dark:border-light/5">
            <span className="text-lg font-bold text-accent dark:text-accentDark">
              {product.price}
            </span>
            <span className="text-xs font-semibold uppercase border-b border-accent/30 group-hover:border-accent transition-all">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProductLayout;