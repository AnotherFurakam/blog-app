"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

interface BlogCardProps {
  href: string
  image: string
  categories: string[]
  date: string
  title: string
  description: string
}

const BlogCard: FC<BlogCardProps> = ({
  image,
  categories,
  date,
  title,
  description,
  href
}) => {

  const {push} = useRouter()

  const handlePush = (href: string) => {
    push(href)
  }

  return (
    <div
      className='
        w-full
        mx-auto
        bg-gray-100 
        cursor-pointer 
        group 
        border 
        border-transparent 
        hover:border 
        hover:border-indigo-600 
        transition-[border] 
        duration-200 
        ease-in-out
        shadow-md
        '
      onClick={() => handlePush(href)}
    >
      <div
        className='
          relative
          w-full
          h-56
          overflow-hidden
        '
      >
        <Image loading='lazy' className='object-cover group-hover:scale-105 transition-[transform] duration-200 ease-in-out' src={image} alt={title} fill />
      </div>
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex flex-wrap gap-1 text-[12px] font-medium text-gray-500 uppercase'>
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
        <div>
          <h3 className='text-lg font-medium'>{title}</h3>
          <p className='text-sm font text-gray-500'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default BlogCard;