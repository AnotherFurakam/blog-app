"use client"
import clsx from 'clsx';
import { useState, type FC } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'

interface SearchInputProps {
  text: string
}

const SearchInput: FC<SearchInputProps> = ({
  text
}) => {

  const [isFocus, setIsFocus] = useState(false)

  const toggleFocus = () => {
    setIsFocus(!isFocus)
  }

  return (
    <div
      className={clsx(
        `
        flex
        px-5
        items-center
        gap-5
        justify-between
        bg-gray-100
        border
        transition-[border]
        duration-200
        ease-in-out
      `,
        !isFocus && 'border-transparent',
        isFocus && 'border-indigo-600'
      )}
    >
      <input
        className='
          w-full
          py-4
          text-gray-600
          text-sm
          font-medium
          bg-transparent
          placeholder:text-gray-500
          outline-none
        '
        placeholder={text}
        type="text"
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
      <BiSearchAlt2
        size={20}
        className='
          text-gray-400
          active:text-gray-400
          hover:text-gray-600
          cursor-pointer
        '
      />
    </div>
  );
}
export default SearchInput;