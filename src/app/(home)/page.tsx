import { SearchInput } from '@/components'
import { Banner, CategoryList, GaleryCards, InstagramList, TopPosts, } from './components'

import { MarkdownMetadata } from '@/interfaces/markdow.interfaces'
import postService from '@/services/post.service'

const getPostMetadata = (): MarkdownMetadata[] => {
  const posts = postService.getPostsByQuantity(6)
  return posts
}

export default function Home() {

  const postMetadata = getPostMetadata()

  return (
    <main
      className="
        mx-auto
        container
        py-10
      "
    >
      <Banner />
      <div
        className='
          py-12 
          px-5 
          flex
          flex-col
          gap-8 
          md:grid 
          md:grid-col-2
          md:grid-flow-row
          lg:grid-cols-3 
          lg:gap-5
        '
      >
        <div className='md:col-span-2 lg:col-span-1'>
          <SearchInput text='Search...' />
        </div>

        <div className='md:min-w-[200px] lg:row-start-2 lg:col-start-1'>
          <CategoryList />
        </div>

        <div className='col-span-2 md:row-span-2 lg:row-start-1 lg:col-span-2 lg:row-span-4'>
          <GaleryCards posts={postMetadata} />
        </div>

        <div className='md:col-start-2 md:row-start-2 lg:col-start-1 lg:row-start-3'>
          <TopPosts />
        </div>
        <div className='md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-4'>
          <InstagramList />
        </div>
      </div>
    </main>
  )
}
