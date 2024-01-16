import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Covers() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      <div className="flex z-[60] flex-col md:flex-row mx-auto gap-6 px-4 py-4 -mt-28 md:-mt-40 max-w-[1232px]">
        {[
          {
            image: "cover1.jpeg",
            label: "Boost your business with our expert solutions.",
            value:
              "Explore services for business growth and long-term success.",
          },
          {
            image: "cover2.jpeg",
            label: "Boosting businesses with expertise.",
            value:
              "Meet our dedicated team, offering exceptional service and tailored solutions",
          },
          {
            image: "cover3.jpeg",
            label: "Success Stories That Speak for Themselves",
            value:
              "Explore our clients' success and satisfaction across industries.",
          },
        ].map((value, index) => (
          <div
            onClick={() => {
              setOpen(index);
            }}
            className={`testimonialC flex flex-col md:flex-row   z-50  flex-shrink-0 ${
              open == index ? "flex-[2]" : "flex-1"
            } p-2 cursor-pointer bg-white`}
          >
            <div
              className={`${
                index == open ? "w-full md:w-1/2" : "w-full"
              } h-60 md:aspect-square relative`}
            >
              <Image
                src={`/home/cover/${value.image}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                open == index
                  ? "bg-black px-4 text-opacity-100  flex-1 text-white  flex flex-col justify-center"
                  : "flex-1 md:flex-0 md:text-opacity-0 bg-black md:bg-transparent px-4 md:px-0 py-4 md:py-0 text-opacity-100 text-white md:text-primaryText"
              }`}
            >
              <p
                className={`font-medium ${
                  open == index ? "block" : "block md:hidden"
                } transition-all delay-150 pt-4 md:pt-0 leading-7 text-lg md:text-[22px] `}
              >
                {value.label}
              </p>
              <p
                className={`text-gray-400 ${
                  open == index ? "block" : "block md:hidden"
                } transition-all delay-150 mt-2 md:mt-4 text-[14px] md:text-[15px] font-light font-Roboto`}
              >
                {value.value}
              </p>
              <button className=" font-medium pb-4 md:pb-0 flex items-center gap-2 text-white self-start mt-4 md:mt-6">
                <span>Get started</span>
                <FaArrowRight className="text-primary h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
