import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  const filteredBlogs = blogs.filter(blog => blog.isPublished);

  return filteredBlogs
    .slice()
    .sort((a, b) => {
      if (a.isFeatured !== b.isFeatured) {
        return b.isFeatured ? 1 : -1;
      }
      return compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt));
    });
};

//export const prefix = process.env.NODE_ENV === 'production' ? '/sunmadeph' : '';
export const prefix = '/sunmadeph';