import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      target={props.target || "_self"}
      href={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10  bg-accentDark dark:bg-accent text-dark rounded-full capitalize font-semibold hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
