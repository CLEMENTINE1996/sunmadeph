"use client";
import React, { useState } from "react";
import ProductLayout from "@/src/components/Products/ProductLayout";
import ProductModal from "@/src/components/Products/ProductModal";
import productsData from "@/src/data/products.json";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="flex flex-col items-center justify-center text-dark dark:text-light">
      <section className="w-full mt-16 sm:mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold capitalize text-2xl md:text-4xl">Our Products</h2>
          <p className="mt-2 text-base opacity-75">Quality grains directly from the mill.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-24">
          {productsData.map((product, index) => (
            <ProductLayout 
              key={product.id} 
              product={product} 
              index={index}
              onClick={() => setSelectedProduct(product)} 
            />
          ))}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          closeModal={() => setSelectedProduct(null)} 
        />
      )}
    </main>
  );
}