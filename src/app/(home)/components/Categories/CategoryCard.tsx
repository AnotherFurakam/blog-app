import Image from 'next/image';
import type { FC } from 'react';

interface CategoryCardProps {
  name: string
  image: string
}

const CategoryCard: FC<CategoryCardProps> = ({
  name,
  image
}) => {
  return (
    <div
      className='
          relative
          w-full
          h-20
          group
          overflow-hidden
          cursor-pointer
          shadow-xl
        '
    >
      <div
        className='
          absolute 
          flex
          items-center justify-center
          z-30 
          bg-black 
          bg-opacity-40 
          h-full 
          w-full
        '
      >
        <h2 className='text-white text-xl font-bold'>{name}</h2>
      </div>
      <Image loading='lazy' src={image} alt={name} fill className='z-0 object-cover group-hover:scale-110 transition-transform duration-200 ease-in-out' />
    </div>
  );
}
export default CategoryCard;