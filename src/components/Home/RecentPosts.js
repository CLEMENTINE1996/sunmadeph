import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { Fade } from "react-awesome-reveal";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  
  return (
    /* Changed items-start to items-center to allow full-width distribution */
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 sxl:px-32 flex flex-col items-center justify-center">
      
      {/* 1. Wrap in a div that is explicitly w-full */}
      <div className="w-full">
        <Fade direction="up" triggerOnce duration={1000}>
          <div className="w-full flex items-center justify-between">
            <h2 className="inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
              Previous Posts
            </h2>
            
            <Link
              href="/categories/all"
              className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
            >
              View All
            </Link>
          </div>
        </Fade>
      </div>

      {/* 2. Grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 w-full">
        {sortedBlogs.slice(4, 10).map((blog, index) => (
          <Fade key={index} direction="up" triggerOnce delay={index * 100} duration={1000}>
            <article className="col-span-1 relative">
              <BlogLayoutThree blog={blog} isFeatured={false} />
            </article>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;