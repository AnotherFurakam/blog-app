import type { FC } from 'react';
import InstagramItem from './InstagramItem';

interface InstagramListProps {}

const InstagramList: FC<InstagramListProps> = ({}) => {
    return (
      <div className='flex flex-col gap-5'>
        <h3 className='text-lg font-semibold'>Instagram</h3>
        <div className='grid gap-1 grid-cols-3 grid-rows-2'>
          <InstagramItem image='/img/instagram/post-1.jpg' />
          <InstagramItem image='/img/instagram/post-2.jpg' />
          <InstagramItem image='/img/instagram/post-3.jpg' />
          <InstagramItem image='/img/instagram/post-4.jpg' />
          <InstagramItem image='/img/instagram/post-5.jpg' />
          <InstagramItem image='/img/instagram/post-6.jpg' />
        </div>
      </div>
    );
}
export default InstagramList;