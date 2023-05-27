import { Metadata } from 'next';
import Markdown from 'markdown-to-jsx';
import type { FC } from 'react';
import postService from '@/services/post.service';

interface pageProps {
  params: {
    slug: string
  }
}

//Generando metadata de la página
export function generateMetadata({ params }: pageProps): Metadata {
  const { data } = postService.getPostBySlug(params.slug);
  return {
    title: data.title
  }
}

//Generando páginas SSR para cada post mediante su slug
export const generateStaticParams = async () => {
  const posts = postService.getAllPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

const Post: FC<pageProps> = ({ params }) => {

  const slug = params.slug
  const post = postService.getPostBySlug(slug)

  return (
    <main className='mx-auto w-full max-w-2xl my-10 px-5 flex flex-col gap-10'>
      <div className='flex flex-col gap-4'>
        <h1
          className='text-3xl'>
          {post.data.title}
        </h1>
        <span className='text-gray-600'>{post.data.date}</span>
      </div>
      <article
        className='
          prose 
          max-w-none
          prose-indigo 
          prose-pre:font-poppins
          prose-pre:bg-indigo-100
          prose-pre:text-indigo-800
          prose-pre:scrollbar-thin
          prose-pre:scrollbar-thumb-indigo-400
          prose-pre:scrollbar-track-indigo-300
          prose-img:w-full 
          prose-img:max-w-md
          prose-img:mx-auto
        '
      >
        <Markdown>
          {post.content}
        </Markdown>
      </article>
    </main>
  );
}
export default Post;