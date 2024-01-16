import Head from "next/head";
import React from "react";
import Header from "../components/layout/header";
import Image from "next/image";
import InfoCard from "../components/home/infoCard";
import Excellence from "../components/home/excellence";
import Services from "../components/home/services";
import Teams from "../components/home/team";
import Clients from "../components/home/client";
import Testimonials from "../components/home/testimonial";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import Covers from "../components/home/cover";
import Footer from "../components/layout/footer";
import Request from "../components/home/request";

export default function Home() {
  return (
    <div className="bg-white overflow-scroll no-scrollbar h-screen">
      <Head>
        <title>Home-Srisudha Consultancy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="h-[650px] md:h-[898px] relative w-full bg-cover bg-right bg-sliderbg ">
        <div className="absolute hidden md:block  bottom-[84px] right-28 h-[720px]  w-[700px]">
          <Image src={"/home/slider1.png"} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2   right-6 h-16 w-56">
          <Image src={"/home/sliderLogo.png"} layout="fill" objectFit="cover" />
        </div>
        <InfoCard />
      </section>
      <Covers />
      <Excellence />
      <Services />
      <Teams />
      <Clients />
      <Testimonials />
      <Request />
      <div className="bg-[url('/home/teamanoth.jpeg')] mt-20 bg-cover bg-no-repeat  bg-bottom-center  w-full aspect-[899/250]">
        <div className="bg-[url('/home/justbg.png')] bg-cover bg-right-top w-full   h-full" />
      </div>
      <div className="md:pt-[85px] py-10 px-6 md:px-0 md:pb-[125px]  md:bg-[url('/home/storybg.png')] bg-left-top">
        <div className="flex flex-col md:flex-row py-10  justify-between gap-4 items-start ">
          <div className=" md:max-w-xl pt-4 text-black  font-Nunito text-center space-y-1 mx-auto leading-[36px] md:leading-[56px] md:text-[52px] text-[32px]">
            <div className="h-1 mb-2  w-20 bg-primary" />
            <p>
              <span className="font-bold font-Bitter">We're here </span> to
              share
            </p>
            <p>story & more news</p>
          </div>
          <p className="w-full md:w-2/5 mt-4 flex-shrink-0 text-lg leading-7 text-gray-700 font-light font-Nunito">
            Empowering Your Business with Expert Insights and Strategies –
            Srisudha Consultancy’s Blog
          </p>
        </div>
      </div>
      <div className="pb-6 pt-4 relative">
        <div className="h-[380px]  w-full relative">
          <Image src={"/home/map.webp"} layout="fill" objectFit="cover" />
        </div>
        <div className="top-0  px-10 items-start bottom-0 flex flex-col justify-center  bg-black absolute right-20">
          <div className="text-3xl mb-8 font-bold text-white">
            <p>Contact Info</p>
          </div>
          <div className="flex gap-8 flex-col justify-center items-start ">
            {[
              {
                label: "Request a Call:",
                value: "+91 9843045936",
                Icon: MdOutlineWifiCalling3,
              },
              {
                label: "Sreenivasarao@asrfca.com",
                value: "Mail to us",
                Icon: IoMailUnreadOutline,
              },
              {
                label: "2C, Thygraja Complex, Kilpauk",
                value: "chennai",
                Icon: FaRegAddressCard,
              },
            ].map((value) => (
              <div className="flex   text-white gap-3 items-start">
                {<value.Icon className="mt-1 h-8 w-8 text-primary" />}
                <div className="text-[15px] font-Roboto">
                  <p className="  font-normal text-[15px] text-gray-400">
                    {value.label}
                  </p>
                  <p className="font-medium text-xl">{value.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
