import React, { ReactNode } from 'react';
import { default as NextLink } from 'next/link';
import cn from 'classnames';

type LinkProps = {
  className?: string;
  children?: ReactNode;
  href?: string;
  underline?: boolean;
  accented?: boolean;
  external?: boolean;
};

const Link: React.FC<LinkProps> = ({
  className,
  children,
  href = '',
  underline = false,
  accented = true,
  external = true,
}) => {
  const styledClass = cn(className, 'cursor-pointer', {
    underline,
    'transition duration-300 ease-in-out hover:text-primary': accented,
  });

  return external ? (
    <a className={styledClass} href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <NextLink className={styledClass} href={href}>
      {children}
    </NextLink>
  );
};

export { Link };
