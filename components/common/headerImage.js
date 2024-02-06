import Image from "next/image";
import React from "react";

export default function HeroImage({
  src = "/team/banner.jpeg",
  title = "Team",
  subtitle = "Home - Our Team",
}) {
  return (
    <div className="w-full h-72 flex-shrink-0 relative ">
      <Image src={src} layout="fill" objectFit="cover" />
      <div className="inset-0 text-white flex flex-col items-center justify-center  absolute bg-black bg-opacity-50">
        <div className="text-center">
          <h2 className="text-3xl xl:text-5xl font-medium font-Roboto">
            {title}
          </h2>
          <h3>{subtitle}</h3>
        </div>
      </div>
    </div>
  );
}
