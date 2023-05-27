import { BlogCard } from '@/components';
import { MarkdownMetadata } from '@/interfaces/markdow.interfaces';
import type { FC } from 'react';

interface PostsGridProps {
  posts: MarkdownMetadata[]
}

const PostsGrid: FC<PostsGridProps> = ({
  posts,
}) => {
  return (
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
  );
}
export default PostsGrid;