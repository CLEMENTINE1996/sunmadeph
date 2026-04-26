"use client";
import React, { useState } from "react";
import ProductLayout from "@/src/components/Products/ProductLayout";
import ProductModal from "@/src/components/Products/ProductModal";

const productsData = [
  {
    id: 1,
    name: "SunMade Brown Rice (5kg)",
    description: "Make the healthy switch with our premium brown rice. A nutrient-dense option that brings the goodness of the mill directly to your home.",
    specifications: "100% Whole Grain, Rich in Fiber, Locally Sourced",
    price: "₱350", 
    images: ["/brown-rice.jpg", "/brown-rice-2.jpg"],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_HJ2QjKTCqWRXs2XegM9SXTgJl3_MkyU6nF0TyRZUp_t-yQ/viewform"
  },
  {
    id: 2,
    name: "SunMade Brown Rice (2kg)",
    description: "Expertly produced by local farmers, this 2kg pack is perfect for maintaining a balanced diet with fresh, farm-to-table quality.",
    specifications: "Natural Bran Layer, Locally Farmed, Freshly Milled",
    price: "₱150",
    images: ["/brown-rice.jpg", "/brown-rice-2.jpg"],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_HJ2QjKTCqWRXs2XegM9SXTgJl3_MkyU6nF0TyRZUp_t-yQ/viewform"
  },
  {
    id: 3,
    name: "SunMade Brown Rice (1kg)",
    description: "A compact pack of brown rice that is rich in antioxidants. Ideal for individuals looking for a healthy, small-batch rice staple.",
    specifications: "High Antioxidant Content, 1kg Trial Pack, Farm Fresh",
    price: "₱80",
    images: ["/brown-rice.jpg", "/brown-rice-2.jpg"],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_HJ2QjKTCqWRXs2XegM9SXTgJl3_MkyU6nF0TyRZUp_t-yQ/viewform"
  },
  {
    id: 4,
    name: "SunMade Well-Milled Rice (2kg)",
    description: "Our signature well-milled white rice offers a clean, versatile taste and soft texture, produced with care by our community of local farmers.",
    specifications: "Double Polished, Soft Texture, Premium White Rice",
    price: "₱120",
    images: ["/white-rice.jpg"],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_HJ2QjKTCqWRXs2XegM9SXTgJl3_MkyU6nF0TyRZUp_t-yQ/viewform"
  },
  {
    id: 5,
    name: "SunMade Milled Rice (5kg)",
    description: "The ideal family choice for daily meals. High-quality milled rice delivered straight from the mill to your home for maximum freshness.",
    specifications: "Standard Mill, Daily Staple, Value Family Pack",
    price: "₱280",
    images: ["/white-rice.jpg"],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_HJ2QjKTCqWRXs2XegM9SXTgJl3_MkyU6nF0TyRZUp_t-yQ/viewform"
  }
];

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
          {productsData.map((product) => (
            <ProductLayout 
              key={product.id} 
              product={product} 
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