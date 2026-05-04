import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tag from '../Elements/Tag';
import { Fade } from "react-awesome-reveal";

const HomeCoverSection = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];

  return (
    <div className='w-full inline-block'>
        <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[50vh] sm:h-[60vh] group overflow-hidden rounded-sm shadow-2xl'>
            
            <div className='absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent z-0' />
            
            <Image src={blog.image.src}
                placeholder='blur'
                blurDataURL={blog.image.blurDataURL}
                alt={blog.title}
                fill
                className='w-full h-full object-center object-cover -z-10 group-hover:scale-110 transition-all duration-700 ease-in-out'
                sizes='100vw'
                priority
            />

            {/* Wrap the text content in a Fade animation */}
            <div className='w-full lg:w-3/4 p-6 sm:p-10 md:p-16 flex flex-col items-start justify-center z-10 text-light'>
                <Fade direction="up" duration={1200} triggerOnce cascade damping={0.2}>
                    <div className="hover:scale-105 transition-transform">
                        <Tag className="text-accent dark:text-accentDark" target="_blank" link="https://docs.google.com/forms/d/e/1FAIpQLSe_HJ2QjKTCqWRXs2XegM9SXTgJl3_MkyU6nF0TyRZUp_t-yQ/viewform" name="Order Now" />
                        <Tag className="text-accent dark:text-accentDark ms-2" target="_blank" link="/products" name="Products" />
                    </div>
                    
                    <Link href={blog.url} className='mt-6 group/title'>
                        <h1 className='font-bold capitalize text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>
                            <span className='bg-gradient-to-r from-accent to-accentDark dark:from-accentDark dark:to-accent bg-[length:0px_6px] group-hover/title:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                                {blog.title}
                            </span>
                        </h1>
                    </Link>
                    
                    <p className='hidden sm:inline-block mt-4 text-lg md:text-xl font-light text-light/80 line-clamp-2 max-w-2xl'>
                        {blog.description}
                    </p>
                </Fade>
            </div>
        </article>
    </div>
  )
}
export default HomeCoverSection;