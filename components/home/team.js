import Image from "next/image";
import React from "react";
import { IoBarChartOutline } from "react-icons/io5";
import { GrTrophy } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";

export default function Teams() {
  return (
    <div className="py-8 px-6 xl:px-0 md:py-14 pt-12 md:pt-20 text-black   bg-[url('/home/team/teambg.png')] bg-cover bg-center">
      <div className="max-w-1200 mx-auto">
        <div className=" flex justify-between flex-col gap-10 md:gap-0 items-center md:flex-row">
          {[
            { value: 215, label: "Satisfied Clients", Icon: FiUsers },
            { value: 20, label: "Expert Team", Icon: GrUserExpert },
            ,
            { value: 310, label: "Activate Project", Icon: IoBarChartOutline },
            ,
            { value: 2, label: "Awards Winning", Icon: GrTrophy },
          ].map((value) => (
            <div className="group   cursor-pointer flex gap-6 items-center">
              <value.Icon className="h-8 text-gray-400 group-hover:rotateY   transition-all duration-300 ease-in-out  group-hover:text-primary w-8 shrink-0  " />
              <div>
                <p className="font-Bitter text-3xl font-semibold ">
                  <span>{value.value}</span>
                  <span className="text-lg font-bold align-top pl-1 ">+</span>
                </p>
                <p className="font-Poppins text-gray-500">{value.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row mt-28 justify-between gap-4 items-start ">
          <p className=" max-w-lg  leading-[40px] text-[36px] md:text-[44px] md:leading-[48px]">
            <span className="font-semibold">We always</span> work with a great
            team
          </p>
          <p className="w-full md:w-2/5 mt-0.5 flex-shrink-0 text-lg leading-7 text-gray-700 font-light font-Nunito">
            Empowering Your Business with the Expertise of Srisudha
            Consultancy’s Great Team of CA and CMA Professionals
          </p>
        </div>
        <div className="mt-12 md:mt-24 mb-0 md:mb-28 md:pb-8 pb-4 justify-center flex overflow-scroll no-scrollbar gap-8">
          {[
            {
              name: "CA Sreenivasa Rao",
              designation: "Founder & MD",
              image: "team1.jpeg",
            },
            {
              name: "CMA Rajesh Kumar Mantry",
              designation: "Business & Management Consultant",
              image: "team1.jpeg",
            },
            {
              name: "CA Shivasri Rajah",
              designation: "Audit & Tax Consultant",
              image: "team1.jpeg",
            },
          ].map((value) => (
            <div className="flex flex-shrink-0 group hover:bg-black hover:text-white transition-all duration-150  rounded-md self-stretch md:self-start flex-col w-72 shadowC p-2 pb-4">
              <div className=" w-full  group-hover:scale-y-110 origin-bottom aspect-square transition-all duration-200 relative">
                <Image
                  src={`/home/team/${value.image}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-2 flex gap-4 py-4 pb-2">
                <div className="space-y-2 flex-1">
                  <p className="self-start text-lg font-semibold ">
                    {value.name}
                  </p>
                  <p className="text-sm group-hover:text-gray-300 font-Nunito text-gray-600 font-light">
                    {value.designation}
                  </p>
                </div>
                <div className=" p-4 rounded-sm  self-start bg-primary">
                  <div className="h-4 w-4 border-2 border-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
