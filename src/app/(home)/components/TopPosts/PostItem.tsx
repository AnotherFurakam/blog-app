"use client"
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

interface PostItemProps {
  slug: string
  number: number
  title: string
  categories: string[]
  date: string
}

const PostItem: FC<PostItemProps> = ({
  number,
  slug,
  title,
  categories,
  date,
}) => {
  const { push } = useRouter()

  const handlePushToPost = (slug: string) => {
    push(`/posts/${slug}`)
  }

  return (
    <div
      className='
        flex
        gap-4
        group
        cursor-pointer
      '
      onClick={() => handlePushToPost(slug)}
    >
      <span className='text-3xl font-bold'>{number}</span>
      <div className='flex flex-col gap-2'>
        <h2 className='text-md font-medium group-hover:text-indigo-700'>{title}</h2>
        <div className='flex gap-1 text-[12px] font-medium text-gray-500 uppercase'>
          <div>
            {
              categories.map((category, index) => (
                <span key={index}>{category}{categories.length - 1 !== index && ', '}</span>
              ))
            }
          </div>
          <span>-</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
export default PostItem;