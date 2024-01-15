import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BottomNav from '../layout/bottomNav'

export default function ProfileSkeleton() {
  return (
    <div className=" h-screen pb-16">
      <div className="">
        <Skeleton height={160} />
        <div className="-mt-16 ml-4">
          <SkeletonTheme baseColor="#f1f5f9" highlightColor="#e2e8f0">
            <Skeleton className="h-32 w-28" width={112} />
          </SkeletonTheme>
        </div>
      </div>
      <div className="mx-4 mt-4 flex items-center justify-between">
        <Skeleton width={120} height={20} />
        <div className="flex gap-3">
          <Skeleton circle width={32} height={32} />
          <Skeleton circle width={32} height={32} />
        </div>
      </div>
      <div className="mx-4 mt-6 space-y-1 ">
        <Skeleton width={120} />
        <Skeleton w="100%" height={100} />
      </div>
      <div className="mt-6 space-y-2 px-4 ">
        <Skeleton height={30} />
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 ">
          {[1, 2, 3, 4].map((value) => (
            <Skeleton className="h-36 rounded-md md:h-60" />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
