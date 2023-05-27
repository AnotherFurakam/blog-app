import type { FC } from 'react';
import PostItem from './PostItem';
import postService from '@/services/post.service';

interface TopPostsProps { }

const TopPosts: FC<TopPostsProps> = ({ }) => {
  const posts = postService.getPostsByQuantity(5)
  return (
    <div
      className='
        flex 
        flex-col 
        gap-5
        bg-gray-100
        p-8
      '
    >
      <h3 className='text-xl font-semibold'>Top Posts</h3>
      <div className='flex flex-col gap-5'>
        {
          posts.map((post, i) => (
            <PostItem
              key={post.slug}
              number={i+1}
              slug={post.slug}
              title={post.title}
              categories={post.categories}
              date={post.date}
            />
          ))
        }
      </div>
    </div>
  );
}
export default TopPosts;