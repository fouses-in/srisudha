import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function CardSkeleton() {
  return (
    <div className="w-full h-28">
      <Skeleton width="100%" height="100%" />
    </div>
  );
}
export default function DashboardSkeleton() {
  return (
    <div className="baseClass">
      <div className="flex flex-col gap-6 flex-1 overflow-y-scroll no-scrollbar">
        <div className="flex gap-6 ">
          <div className=" p-6 flex space-y-4 flex-col items-center px-8 w-96 flex-shrink-0  bg-white  rounded-md">
            <Skeleton width="180px" height="20px" />
            <div className="h-72 w-72">
              <Skeleton circle={true} width="100%" height="100%" />
            </div>
            <div className="flex justify-center flex-1 mt-4 gap-2">
              <div className="w-20 h-8">
                <Skeleton width="100%" height="100%" />
              </div>
              <div className="w-20 h-8">
                <Skeleton width="100%" height="100%" />
              </div>
              <div className="w-20 h-8">
                <Skeleton width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className=" p-6 flex-1 justify-between space-y-8 flex flex-col items-center px-8 w-96 flex-shrink-0  bg-white  rounded-md">
            <Skeleton width="180px" height="20px" />
            <div className="h-64 w-64">
              <div className="flex gap-10 justify-center h-full items-end">
                <div className="h-full">
                  <Skeleton width="80px" height="100%" />
                </div>
                <div>
                  <Skeleton width="80px" height="200px" />
                </div>
                <div className="h-full">
                  <Skeleton width="80px" height="100%" />
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-1 mt-4 gap-2">
              <div className="w-20 h-8">
                <Skeleton width="100%" height="100%" />
              </div>
              <div className="w-20 h-8">
                <Skeleton width="100%" height="100%" />
              </div>
              <div className="w-20 h-8">
                <Skeleton width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-1 p-6 bg-white rounded-md">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4   ">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </div>
          <div className="w-124 flex flex-col  space-y-6 rounded-lg py-4 px-6 bg-white ">
            <Skeleton width="180px" height="20px" />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
