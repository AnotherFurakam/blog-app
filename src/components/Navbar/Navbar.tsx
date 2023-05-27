import type { FC } from 'react';
import NavLink from './NavLink';
import Image from 'next/image';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = ({ }) => {
  return (
    <header>
      <nav>
        <div className='flex justify-center gap-3 items-center py-10'>
          <Image src={'/logo.svg'} alt='logo.svg' width={50} height={50} />
          <h2 className='text-4xl font-bold'>FuraBlog</h2>
        </div>
        <div className='flex justify-center items-center py-5 bg-gray-100'>
          <ul className='flex gap-5'>
            <li><NavLink text='Home' href='/' /></li>
            <li><NavLink text='Posts' href='/posts' /></li>
            {/* <li><NavLink text='Blog' href='/blog' /></li>
            <li><NavLink text='Categories' href='/categories' /></li>
            <li><NavLink text='Shop' href='/shop' /></li>
            <li><NavLink text='Elements' href='/elements' /></li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;