import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className=" bg-[url('/home/team/testimonialbg.png')] px-6 md:px-0 pb-20 bg-cover bg-center">
      <div className="max-w-1200 mx-auto">
        <div className=" w-full md:max-w-lg pt-4  font-Roboto text-center space-y-1 mx-auto leading-[34px] md:leading-[48px] text-[36px] md:text-[44px]">
          <div className="h-1 mb-2 mx-auto w-20 bg-primary" />
          <p>
            <span className="font-semibold">We are</span> very happy to get
          </p>
          <p>client’s review!</p>
        </div>
        <div className=" flex gap-4 overflow-y-visible pt-24 pb-0 md:pb-0 md:px-4  overflow-scroll no-scrollbar">
          {[
            { value: "", name: "Farhan Rio", designation: "Agent Manager" },
            { value: "", name: "Farhan Rio", designation: "Agent Manager" },
            ,
            { value: "", name: "Farhan Rio", designation: "Agent Manager" },
            ,
            { value: "", name: "Farhan Rio", designation: "Agent Manager" },
          ].map((value, index) => (
            <div className="relative cursor-pointer   flex-shrink-0 w-[400px] bg-white testimonialC p-2  ">
              <div className="p-7 hover:bg-black text-black group">
                <div className="h-24 absolute overflow-hidden rounded-full  aspect-square -top-8 ">
                  <Image
                    src={`/home/testimonial/test${index + 1}.jpeg`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex gap-0.5 justify-end">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <FaStar className="text-primary" />
                  ))}
                </div>

                <p className="mt-14 text-gray-600 group-hover:text-white font-light">
                  Lorem ipsum dolor sit amet, consecte sed do eiusmod tempor
                  incididunt utlao bore et dolore magna aliqua.{" "}
                </p>
                <div className="mt-6 flex items-end gap-2 ">
                  <p className="font-bold group-hover:text-white text-xl">
                    {value.name},
                  </p>
                  <p className="text-sm group-hover:text-gray-300 text-gray-500 mb-1">
                    {value.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
