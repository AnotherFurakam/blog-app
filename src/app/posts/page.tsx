import type { FC } from 'react';
import { GaleryCards } from '../(home)/components';
import postService from '@/services/post.service';
import PostsGrid from './components/PostsGrid';

interface PostsProps { }

const Posts: FC<PostsProps> = ({ }) => {

  const posts = postService.getAllPosts()

  return (
    <main className='container max-w-6xl mx-auto my-10 px-5'>
      <PostsGrid posts={posts} />
    </main>
  );
}
export default Posts;