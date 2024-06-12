import React, { ReactNode } from 'react';
import cn from 'classnames';

type ButtonProps = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ className, children, onClick, type = 'primary' }) => {
  return (
    <button
      className={cn(
        className,
        'rounded-xl py-5 px-10 text-12 font-semibold transition duration-500 ease-in-out md:px-25 md:py-10 md:text-14',
        {
          'border border-secondary bg-secondary text-white hover:border-primary hover:bg-primary': type === 'primary',
          'border border-black/[.15] bg-white text-secondary hover:opacity-70': type === 'secondary',
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
