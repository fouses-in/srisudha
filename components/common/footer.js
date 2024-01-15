import { useRouter } from "next/router";
import React from "react";

export default function Footer() {
  const router = useRouter(null);
  return (
    <div className="overflow-hidden ">
      <div className="bg-primary flex flex-col items-center md:items-start md:flex-row justify-center gap-4 md:gap-48 px-6 md:px-28 py-8 md:py-16 md:pb-20">
        <div className="text-subheading space-y-1 font-bold text-background">
          <p>Ready.</p>
          <p>Set.</p>
          <p className="text-secondary">Grow</p>
        </div>
        <div className=" flex space-y-4   flex-col justify-center text-background">
          <h1 className="text-xl text-center md:text-start w-72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <div
            onClick={() => {
              router.push("/contact");
            }}
            className="px-6  cursor-pointer text-xl md:self-start self-center  rounded-full text-background py-2 bg-buttonColor"
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="bg-secondary md:h-80 px-6 md:px-28 py-8 md:py-16 md:grid md:grid-cols-3 space-y-6 md:space-y-0 gap-8">
        <div className=" justify-self-center text-background text-opacity-80 space-y-1.5 font-light text-lg md:text-xl leading-7">
          <h1 className="font-semibold  text-primary ">Contact US</h1>
          <div>
            <h1 className="">
              Office Address – Second Floor, No 250/12, Old No. 853/12, Periyar
              E.V.R.
            </h1>
            <h1>Salai, Kilpauk, Chennai, Tamilnadu – 600010.</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:col-span-2 md:gap-8">
          <div className=" md:justify-self-center text-background text-opacity-80 space-y-2 font-light text-lg md:text-xl leading-7">
            <h1 className="font-semibold text-lg md:text-xl text-primary ">
              Social Media
            </h1>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
            <h1>Instagram</h1>
            <h1>LinkedIn</h1>
            <h1>Google</h1>
          </div>
          <div className=" justify-self-center text-background text-opacity-80 space-y-2 font-light text-lg md:text-xl leading-7">
            <h1 className="font-semibold text-lg md:text-xl text-primary ">
              Quick Links
            </h1>
            <h1>Home</h1>
            <h1>About Us</h1>
            <h1>Services</h1>
            <h1>Team</h1>
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
