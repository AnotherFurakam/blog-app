import Image from 'next/image';
import type { FC } from 'react';

interface InstagramItemProps {
  image: string
}

const InstagramItem: FC<InstagramItemProps> = ({
  image,
}) => {
    return (
      <div className='relative aspect-[4/4] overflow-hidden cursor-pointer'>
        <Image className='object-cover hover:scale-110 transition-transform duration-300 ease-in-out' src={image} alt={image} fill/>
      </div>
    );
}
export default InstagramItem;