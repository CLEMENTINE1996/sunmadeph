import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { Fade } from "react-awesome-reveal";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 sxl:px-32 flex flex-col items-start justify-center">
      <Fade direction="up" duration={1200} triggerOnce cascade damping={0.1}>
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light text-start">
          Featured Posts
        </h2>

        {/* 
            Set the overall grid height. We want it 'not too big'. 
            'h-[650px]' is a good balanced height for the entire section.
            The left post will fill this. Each right post gets exactly 325px (minus gap).
        */}
        <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16 w-full sxl:h-[650px]">
          
          {/* Left Big Post: row-span-2 FILLS the 650px container */}
          <article className="col-span-2 sxl:col-span-1 row-span-2 relative h-full overflow-hidden rounded-xl">
            <BlogLayoutOne blog={sortedBlogs[1]} className="!h-full w-full object-cover" />
          </article>

          {/* Top Right Post */}
          {/* row-span-1 gets exactly 50% height share. We remove all clipping. */}
          <article className="col-span-2 sxl:col-span-1 row-span-1 relative flex flex-col">
            {/* 
                We pass isFeatured={true}. The component will change its internal image 
                to aspect-[16/9], making the component much shorter overall so 
                the image AND text fit within the row height share[cite: 1, 3].
            */}
            <BlogLayoutThree blog={sortedBlogs[2]} isFeatured={true} />
          </article>

          {/* Bottom Right Post */}
          <article className="col-span-2 sxl:col-span-1 row-span-1 relative flex flex-col">
            <BlogLayoutThree blog={sortedBlogs[3]} isFeatured={true} />
          </article>
        </div>
      </Fade>
    </section>
  );
};

export default FeaturedPosts;