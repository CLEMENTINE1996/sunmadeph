import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-start justify-center">
      <Fade direction="up" duration={1200} triggerOnce cascade damping={0.1}>
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light text-start">
          Featured Posts
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16 w-full">
          {/* Left Big Post */}
          <article className="col-span-2 sxl:col-span-1 row-span-2 relative flex">
            <BlogLayoutOne blog={sortedBlogs[1]} className="flex-1 !h-full" />
          </article>

          {/* Top Right Post */}
          <article className="col-span-2 sxl:col-span-1 row-span-1 relative flex">
            <BlogLayoutTwo blog={sortedBlogs[2]} className="flex-1 !h-full" />
          </article>

          {/* Bottom Right Post */}
          <article className="col-span-2 sxl:col-span-1 row-span-1 relative flex">
            <BlogLayoutTwo blog={sortedBlogs[3]} className="flex-1 !h-full" />
          </article>
        </div>
      </Fade>
    </section>
  );
};

export default FeaturedPosts;