import Image from "next/image";
import React from "react";
import ArrowLeftIcon from "../icons/outline/arrowLeft";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";

export default function BlogCard({ width = " w-2/3 md:w-1/3", value }) {
  const router = useRouter(null);
  let hours = moment().diff(moment(value?.createdAt), "hours");
  return (
    <Link href={`/blog/${value?.slug}`} passHref>
      <a className={`${width} flex-shrink-0`} aria-label={`${value.name}`}>
        <div
          className={`w-full flex-shrink-0 border-1px border-blue-100 cursor-pointer md:hover:-translate-y-1 transition-all duration-150 shadow-md bg-white  overflow-hidden hover:overflow-auto`}
        >
          <div className="w-full h-48 overflow-hidden">
            <div className="w-full hover:scale-105 duration-200 transition-all h-full relative">
              <Image
                alt={`${value.name} image`}
                src={`${process.env.BUCKET_URL}/${value?.imageUrl}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="px-3 border-b-1px py-3">
            <h2 className="text-base md:text-lg font-semibold line-clamp-2 text-ellipsis">
              {value?.name}
            </h2>
            <p className="text-xs md:text-sm mt-2 text-gray-500 md:text-gray-400 line-clamp-2 text-ellipsis">
              {value?.description ??
                "Medicines at apco are curated from healthy process and curable to diseases"}
            </p>
            <div className="flex gap-3 text-xs text-gray-600 md:text-gray-500 mt-3 md:mt-4 items-center">
              <p>{value?.minute ?? 0} min read</p>
              <p className="h-1 w-1 rounded-full bg-gray-400" />
              <p>
                {hours / 24 > 1
                  ? `${parseInt(hours / 24)} days ago`
                  : `${hours % 24} hours ago`}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export function TeamCard({ value }) {
  return (
    <div className="w-2/3 md:w-1/5 hover:-translate-y-1 hover:border-red-200 group py-6 px-10 flex flex-col items-center flex-shrink-0 border-1px rounded-md bg-blue-50  cursor-pointer  transition-all duration-150 shadow-sm   overflow-hidden ">
      <div className="w-full rounded-full  max-w-120 aspect-square overflow-hidden">
        <div className="w-full group-hover:scale-105 duration-200 transition-all h-full relative">
          <Image
            alt={`${value.name} image`}
            src={`/profile/${value.image}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className=" py-3 text-center">
        <h2 className=" font-medium line-clamp-2 text-ellipsis">
          {value.name}
        </h2>
        <p className="text-sm mt-1 text-gray-400 line-clamp-2  text-ellipsis">
          {value.designation}
        </p>
      </div>
      <button className="w-full flex justify-between px-6 items-center rounded-full py-2 font-medium mt-4 md:mt-8 text-red-400 text-sm bg-white">
        <p> Read Bio</p>
        <ArrowLeftIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
