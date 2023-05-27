"use client"
import Link from 'next/link';
import type { FC } from 'react';
import { usePathname } from "next/navigation";
import clsx from 'clsx';

interface NavLinkProps {
  text: string
  href: string
}

const NavLink: FC<NavLinkProps> = ({
  text,
  href
}) => {

  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(`
        text-[14px]
        font-semibold
        hover:text-indigo-600
      `,
      pathname === href && 'text-indigo-600'
      )}
    >
      {
        text
      }
    </Link>
  );
}
export default NavLink;