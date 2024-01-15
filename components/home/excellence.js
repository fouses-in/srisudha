import Image from "next/image";
import React from "react";

export default function Excellence() {
  return (
    <div className="max-w-1200 py-14  mx-auto flex  gap-6">
      <div className="flex-1 relative aspect-square">
        <Image src={"/home/excellence.png"} layout="fill" objectFit="cover" />
      </div>
      <div className="w-[56%] ">
        <div className="border-b-2 mt-4 mb-2 border-primary w-14" />
        <div className="font-Poppins leading-[52px] text-black text-[40px]">
          <h3 className="font-semibold">Pioneering Excellence,</h3>
          <h4>Transforming</h4>
          <h4>Businesses</h4>
        </div>
        <p className="font-Nunito text-lg font-light mt-4 text-[#000E29]">
          Welcome to Srisudha Consultancy., where we strive to deliver
          unparalleled expertise, innovative solutions, and exceptional service
          to empower businesses across various industries. As a trusted partner,
          we’re committed to helping our clients achieve their goals and drive
          sustainable growth. Discover the Srisudha Consultancy difference
          today.
        </p>
        <div className="mt-10 w-4/5 space-y-10">
          <div className=" space-y-2">
            <div className="flex font-bold font-Bitter  justify-between">
              <p>Cost Effective</p>
              <p>60%</p>
            </div>
            <div className="w-full  outline-1 outline rounded-full outline-offset-4 outline-primary">
              <div className="w-[60%] bg-primary h-2 rounded-full" />
            </div>
          </div>
          <div className=" space-y-2">
            <div className="flex font-bold font-Bitter  justify-between">
              <p>Unwavering Support</p>
              <p>100%</p>
            </div>
            <div className="w-full  outline-1 outline rounded-full outline-offset-4 outline-primary">
              <div className=" w-full bg-primary h-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
