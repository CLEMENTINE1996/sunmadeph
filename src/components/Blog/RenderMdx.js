"use client"
import React from 'react'
import MDXContent from './MdxContent'
import Image from "next/image" // Import Next.js Image
import { prefix } from "@/src/utils" // Import your prefix utility

const mdxComponents = {
  // This intercepts the <Image /> tag used inside your .mdx files
  Image: (props) => {
    // If the src starts with "./", we redirect it to the public/blogs folder with the prefix
    const optimizedSrc = props.src.startsWith('./') 
      ? `${prefix}/blogs/${props.src.replace('./', '')}` 
      : props.src;

    return (
      <Image 
        {...props} 
        src={optimizedSrc} 
        unoptimized={true} // Required for GitHub Pages static export
        className={`w-full h-auto rounded-xl ${props.className || ""}`}
      />
    );
  }
}

const RenderMdx = ({blog}) => {
  return (
    <div className='col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-figure:relative
    prose-figcaption:mt-1
    prose-figcaption:mb-2

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl'> 
        <MDXContent code={blog.body} components={mdxComponents}/>
    </div>
  )
}

export default RenderMdx