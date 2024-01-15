import React from "react";

export default function InfoCard() {
  return (
    <div className="absolute shadow-md shadow-gray-300 border-primary border-l-8 max-w-[640px] bg-white text-blackText p-8 py-20 z-20 bg-opacity-70 -translate-y-80 top-1/2 left-32   ">
      <p className="text-black text-lg font-Nunito font-light">
        Welocome to Srisudha Consultancy
      </p>
      <h2 className="flex mt-4 mb-6 leading-[64px] font-Poppins text-[56px] font-semibold flex-col font- ">
        <span>We are dedicated</span> <span>to serve you!</span>
      </h2>
      <p className="pr-8 text-blackText font-Nunito font-light text-lg text-opacity-70">
        At Srisudha Consultancy, our commitment is to provide top-notch service
        and tailored solutions, ensuring your business thrives in today's
        competitive landscape.
      </p>
      <div className="flex px-2 gap-4 mt-4">
        <div className="h-14 rounded-full aspect-square bg-blackText" />
        <button className="bg-primary text-Poppins text-base font-medium text-white self-center py-3.5  px-8 ">
          View Services
        </button>
      </div>
    </div>
  );
}
