import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import CardSkeleton from "./card";

export default function DetailSkeleton() {
  const router = useRouter(null);
  return (
    <div className="mx-4 mt-2 space-y-4 ">
      <SkeletonTheme baseColor="#f1f5f9" highlightColor="#e2e8f0">
        <Skeleton className="h-10" width="100%" />
      </SkeletonTheme>
      <div className="space-y-4">
        {Array.apply(null, Array(8)).map((value) => (
          <CardSkeleton />
        ))}
      </div>
    </div>
  );
}
