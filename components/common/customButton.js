import React, { Fragment } from "react";
import LoaderRelative from "./loader";

export default function CustomButton({
  primary = "",
  secondary = "bg-secondary",
  loading = false,
  label = "Know More",
  weight = "font-semibold",
  onClick,
  width = "w-48",
  aos = "none",
  delay = "2000",
  height = "h-12",
  size = "text-2xl",
  className = "",
  className2 = "",
}) {
  return (
    <div
      data-aos-delay={delay}
      data-aos={aos}
      className={`relative group btn2 hover:-translate-y-1.5  duration-150 transition-all mt-6 cursor-pointer ${height} ${width}`}
      onClick={onClick}
    >
      <div
        className={`px-8 h-full w-full top-1.5 left-1 py-3 absolute  rounded-full text-2xl font-semibold  text-background  inline-block ${secondary} ${className2}`}
      ></div>
      <div
        className={` h-full  bg-white border-1px border-primary transition-all duration-150 group-hover:border-none text-gray-600 group-hover:text-white text-center flex items-center w-full absolute  rounded-full justify-center overflow-hidden ${size} ${weight}   ${primary} ${className}`}
      >
        {loading ? (
          <LoaderRelative />
        ) : (
          <Fragment>
            <span class="absolute hover:translate-x-0  rounded-full inset-0 bg-primary "></span>
            <span class="absolute rounded-full inset-0 flex justify-center items-center font-bold">
              {label}
            </span>
          </Fragment>
        )}
      </div>
    </div>
  );
}
