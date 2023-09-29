'use client'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SmallSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton count={1} width={'94%'} height={'2.8125rem'} />
    </SkeletonTheme>
  )
}

export default SmallSkeleton
