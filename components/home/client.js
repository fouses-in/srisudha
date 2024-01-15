import Image from "next/image";
import React from "react";

export default function Clients() {
  return (
    <div className="bg-white max-w-1200 mx-auto py-14 mb-8 pb-14">
      <div className="flex  justify-between gap-4 items-start ">
        <p className=" max-w-lg  leading-[48px] text-[44px]">
          <span className="font-semibold">We have</span> many clients All Over
          India!
        </p>
        <p className="w-2/5 mt-0.5 flex-shrink-0 text-lg leading-7 text-gray-700 font-light font-Nunito">
          At Srisudha Consultancy, we’re proud to serve clients across a wide
          range of industries, including manufacturing, retail, healthcare, IT,
          banking, real estate, energy, logistics, hospitality, education,
          telecommunications, media, food & beverage, agriculture, and
          automotive.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-14 w-full gap-4">
        <div className="bg-[url('/home/client.png')] flex flex-col justify-center items-center bg-cover bg-center h-60 w-full">
          <div>
            <div className="flex gap-2 items-start">
              <p className="text-[80px] font-semibold">80</p>
              <p className="text-2xl font-bold text-primary mt-2">+</p>
            </div>
            <p className="font-Poppins text-2xl font-medium">
              Partners in world wide.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-3 ">
          <ImageCard image={"envato"} style="border-r-1px " />
          <ImageCard image={"figma"} style="border-r-1px " />
          <ImageCard image={"sketch"} />
          <ImageCard image={"google"} style="border-r-1px border-t-1px " />
          <ImageCard image={"slack"} style="border-r-1px border-t-1px " />
          <div className=" border-t-1px p-6 bg-primaryText ">
            <p className="text-gray-300 w-2/3 font-light font-Nunito text-[15px]">
              Real-World Examples of Srisudha Consultancy's Impact
            </p>
            <button className="px-2 py-1 bg-yellow-500 rounded-sm mt-4 text-sm font-medium text-primaryText ">
              Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageCard({ image, style = "" }) {
  return (
    <div className={`py-6 ${style}`}>
      <div className={`place-self-center w-full h-10 relative `}>
        <Image
          src={`/home/client/${image}.png`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
