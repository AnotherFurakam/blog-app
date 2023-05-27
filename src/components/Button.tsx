import type { FC } from 'react';

interface ButtonProps {
  text: string
  handleClick?: () => void
}

const Button: FC<ButtonProps> = ({
  text,
  handleClick,
}) => {
  return (
    <button
      className='
        bg-[#2821FC]
        py-3
        px-8
        text-white
        font-semibold
        shadow-lg
        hover:-translate-y-[2px]
        active:translate-y-0
        transition
        ease-out
      '
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
export default Button;