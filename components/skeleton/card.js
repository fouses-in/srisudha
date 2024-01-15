import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function CardSkeleton() {
  return (
    <div className="bg-gray-50 h-16 rounded-md pb-4 py-2 px-2   grid grid-cols-6 gap-4 ">
      <div className=" col-span-2 ">
        <Skeleton width="100%" height="100%" />
      </div>
      <Skeleton width="100%" height="100%" />
      <Skeleton width="100%" height="100%" />
      <Skeleton width="100%" height="100%" />
      <Skeleton width="100%" height="100%" />
    </div>
  );
}

export function FileSkeleton() {
  return (
    <div className="bg-gray-50 h-16 rounded-md pb-4 py-2 px-2   grid grid-cols-5 gap-8 ">
      <div className=" col-span-2 ">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className=" col-span-2 ">
        <Skeleton width="100%" height="100%" />
      </div>
      <Skeleton width="100%" height="100%" />
    </div>
  );
}

export function FileShareSkeleton() {
  return (
    <div className="bg-gray-100 space-y-2  rounded-md pb-4 py-2 px-2   ">
      <div className="flex items-center gap-2 bg-secondary rounded-md bg-opacity-80 px-4 py-2 pb-2 ">
        <Skeleton width="20px" height="20px" circle={true} />

        <div className=" flex-1 h-8 mb-2">
          <Skeleton width="100%" height="100%" />
        </div>
        <Skeleton width="20px " height="20px" circle={true} />
      </div>
      <div className="flex justify-between">
        <div className="w-20 h-4 overflow-hidden ">
          <SkeletonTheme baseColor="#e2e8f0" highlightColor="#cbd5e0">
            <Skeleton width="100%" height="100%" />
          </SkeletonTheme>
        </div>
        <div className="w-12 h-4">
          <SkeletonTheme baseColor="#e2e8f0" highlightColor="#cbd5e0">
            <Skeleton width="100%" height="100%" />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
}

export function ProjectImageSkeleton() {
  return (
    <div className="bg-gray-50 items-center  rounded-md pb-4 py-2 px-6   grid grid-cols-6 gap-6 ">
      <div className=" col-span-2 h-6">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className="  h-6">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className="  h-6">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className="  h-6">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className=" h-12">
        <Skeleton width="100%" height="100%" />
      </div>
    </div>
  );
}
