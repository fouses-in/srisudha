import React from 'react'

import PostSkeleton from './post'

export default function IndexSkeleton() {
  return (
    <div className="mt-4 space-y-6">
      {[1, 2, 3, 4, 5].map((value) => (
        <PostSkeleton />
      ))}
    </div>
  )
}
