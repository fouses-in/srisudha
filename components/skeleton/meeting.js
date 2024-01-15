import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function MeetingSkeleton() {
  return (
    <div className=" px-4 pb-4 pt-2 bg-gray-50 rounded-md border-1px border-gray-100">
      <div className="flex gap-2 items-center">
        <div className="h-10 w-10">
          <Skeleton circle={true} height="100%" width="100%" />
        </div>

        <div className="flex-1 space-y-1">
          <div className="h-4 w-40">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="h-4 w-28">
            <Skeleton width="100%" height="100%" />
          </div>
        </div>
      </div>
      <div className="mt-6 mb-2 w-48 h-4">
        <Skeleton width="100%" height="100%" />
      </div>
      <Skeleton width="100%" height="100%" />
      <div className="flex mt-6 justify-between items-center">
        <Skeleton width="100px" height="36px" />
        <Skeleton width="100px" height="20px" />
      </div>
    </div>
  );
}

export function MeetingListSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((value) => (
        <MeetingSkeleton />
      ))}
    </div>
  );
}
