import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProfileCardSkeleton from "./card";

export default function PostSkeleton({ loading }) {
  return (
    <div className="post mx-auto  space-y-1 md:rounded-lg lg:max-w-lg xl:max-w-2xl">
      <ProfileCardSkeleton />
      <Skeleton height={300} />
    </div>
  );
}
