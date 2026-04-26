import Image from "next/image";
import React from "react";
import { prefix } from "@/src/utils";

const ProductLayout = ({ product, onClick }) => {
  return (
    <div 
      className="group flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full rounded-xl overflow-hidden bg-gray/10">
        <Image
          src={`${prefix}${product.images[0]}`}
          alt={product.name}
          width={400}
          height={300}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          Best Seller
        </span>
        <h2 className="font-semibold capitalize text-lg sm:text-xl my-1">
          <span className="bg-gradient-to-r from-accent to-accentDark dark:from-accentDark dark:to-accent bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
            {product.name}
          </span>
        </h2>
        <span className="font-bold text-accent dark:text-accentDark">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductLayout;