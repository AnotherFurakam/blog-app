"use client"
import type { FC } from 'react';
import { MarkdownMetadata } from '@/interfaces/markdow.interfaces';
import { useRouter } from 'next/navigation';
import { BlogCard, Button } from '@/components';

interface GaleryCardsProps {
  posts: MarkdownMetadata[]
}

const GaleryCards: FC<GaleryCardsProps> = ({
  posts,
}) => {

  const { push } = useRouter()

  const handleSeeMore = () => {
    push("/posts")
  }  

  return (
    <div className='flex flex-col gap-16'>
      <div className='galery-grid'>
        {
          posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              href={`/posts/${post.slug}`}
              image={post.poster}
              categories={post.categories}
              date={post.date}
              title={post.title}
              description={post.subtitle}
            />
          ))
        }
      </div>
      <div className='flex justify-center'>
        <Button handleClick={handleSeeMore} text='See More' />
      </div>
    </div>
  );
}
export default GaleryCards;