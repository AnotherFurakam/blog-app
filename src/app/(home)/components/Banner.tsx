import Image from 'next/image';
import type { FC } from 'react';

interface BannerProps { }

const Banner: FC<BannerProps> = ({ }) => {
  return (
    <div
      className='
        relative
        w-full
        h-64
      '
    >
      <div
        className='
          absolute
          w-full
          h-full
          bg-black
          bg-opacity-50
          z-10
          px-5
          flex
          flex-col
          items-center
          justify-center
          gap-5
        '
      >
        <h2 className='text-3xl font-semibold text-white w-full max-w-lg text-center'>Technology</h2>
        <p className='text-sm text-white text-center w-full max-w-2xl'>
          Suspendisse viverra massam eget nibhe ultrices mollis. Donec sed lorem tincidunt, ultrices, eunsmod sem. Mauris nec tincidunt diam. Donec varius velit consectetur efficitur. eu tincidunt nun accumsan nec laoreet. Curabitur feugiat posuere odio.
        </p>
      </div>
      <Image
        loading='lazy'
        src={'/img/banner_image.webp'}
        alt='banner_image'
        fill
        className='object-cover z-0'
      />
    </div>
  );
}
export default Banner;