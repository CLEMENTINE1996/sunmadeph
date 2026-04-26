"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-accent dark:focus:border-accentDark bg-transparent"
      />
      and I represent
      <input 
        type="text" 
        placeholder="your company" 
        {...register("company", {})} 
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-accent dark:focus:border-accentDark bg-transparent"/>
      
      . You can reach me at
      <input 
        type="email" 
        placeholder="your@email" 
        {...register("email", { required: true })} 
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-accent dark:focus:border-accentDark bg-transparent"/>
      
      to discuss
      <select 
        {...register("interest")}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 border-b border-gray bg-transparent cursor-pointer"
      >
        <option value="bulk" className="text-dark">Bulk Ordering</option>
        <option value="distribution" className="text-dark">Distribution</option>
        <option value="feedback" className="text-dark">General Inquiry</option>
      </select>

      . Here are some additional details: <br />
      <textarea 
        {...register("details", {})} 
        placeholder="I am interested in..."
        rows={3}
        className="w-full mt-4 outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-lg border-b border-gray 
        focus:border-accent dark:focus:border-accentDark bg-transparent" 
      />
      
      <button 
        type="submit" 
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all"
      >
        send inquiry
      </button>
    </form>
  );
}