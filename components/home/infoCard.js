import { useRouter } from "next/router";
import React from "react";

export default function InfoCard() {
  const router = useRouter(null);
  return (
    <div className="absolute shadow-md shadow-gray-300 border-primary border-l-8 w-4/5 md:max-w-[640px] bg-white text-blackText p-8 py-10 md:py-10 z-20 bg-opacity-80  md:bg-opacity-70 md:-translate-y-80 top-12 md:top-1/2 left-6 md:left-32   ">
      <p className="text-black text-lg font-Nunito font-light">
        Welocome to Srisudha Consultancy
      </p>
      <h2 className="flex mt-4 mb-6 leading-[28px] md:leading-[64px] font-Poppins text-[24px] md:text-[56px] font-semibold flex-col font- ">
        <span>We are dedicated</span> <span>to serve you!</span>
      </h2>
      <p className="pr-8 text-blackText font-Nunito md:font-light text-sm text-opacity-70">
        At Srisudha Consultancy, our commitment is to provide top-notch service
        and tailored solutions, ensuring your business thrives in today's
        competitive landscape.
      </p>
      <div className="flex px-2 gap-4 mt-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/@srisudhaconsultancy"
        >
          <div className="h-14 flex items-center justify-center rounded-full aspect-square bg-blackText">
            <i class="fa-brands fa-youtube text-2xl text-primary"></i>
          </div>
        </a>
        <button
          onClick={() => {
            router.push("/services");
          }}
          className="bg-primary text-Poppins text-sm font-medium text-white self-center py-2 md:py-3.5  px-4 md:px-8 "
        >
          View Services
        </button>
      </div>
    </div>
  );
}
