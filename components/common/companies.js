import Image from "next/image";
import React from "react";

export default function CompanyList() {
  return (
    <div className=" flex px-4 xl:px-0 flex-row overflow-scroll no-scrollbar md:grid max-w-monitor pb-10 mx-auto grid-cols-4 gap-8">
      {["audio.png", "codecanyon.png", "envato.png", "slack.png"].map(
        (value) => (
          <div className=" w-1/2 sm:w-1/3 flex-shrink-0 md:w-full grayscale-0 filter relative h-10">
            <Image
              className=" grayscale cursor-pointer opacity-50 filter  sepia-0 hover:grayscale-0 hover:opacity-100"
              src={"/testimonial/" + value}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )
      )}
    </div>
  );
}
