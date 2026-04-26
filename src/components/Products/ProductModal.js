import React from "react";
import Image from "next/image";
import { prefix } from "@/src/utils";

const ProductModal = ({ product, closeModal }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm">
      <div className="bg-light dark:bg-dark border border-solid border-dark/20 dark:border-light/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-2xl font-bold hover:scale-110 transition-all z-10"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10">
          {/* Images Gallery */}
          <div className="space-y-4">
            {product.images.map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <Image 
                  src={`${prefix}${img}`}
                  alt={`${product.name} ${index}`} 
                  width={500} 
                  height={500} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl font-bold text-accent dark:text-accentDark mb-4">{product.price}</p>
            
            <div className="mb-6">
              <h4 className="font-bold uppercase text-sm mb-1 opacity-70">Description</h4>
              <p>{product.description}</p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold uppercase text-sm mb-1 opacity-70">Specifications</h4>
              <p className="italic">{product.specifications}</p>
            </div>

            <a 
              href={product.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-accent dark:bg-accentDark text-light font-bold rounded-xl hover:scale-[1.02] transition-all"
            >
              Order Now via Google Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;