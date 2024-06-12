import React, { ReactNode } from 'react';
import { Footer } from '../layout/footer';
import { Toaster } from 'react-hot-toast';
import Navbar from '../layout/nav/navbar';
import cn from 'classnames';

type ContainerProps = {
  children?: ReactNode;
  className?: string;
  toggleNav?: boolean;
  toggleBg?: boolean;
  isAuthenticated?: boolean;
  forceRestriction?: boolean;
  limitWidth?: boolean;
};

const MainContainer: React.FC<ContainerProps> = ({
  className,
  children,
  toggleNav = true,
  toggleBg = false,
  forceRestriction = true,
  limitWidth = true,
}: ContainerProps) => (
  <div className={cn(className, 'bg-white-dark p-20 font-main text-gray')}>
    {toggleBg && (
      <div className="absolute -top-20 left-0 right-0 h-[60%] w-full bg-mesh bg-cover md:m-auto md:h-full md:w-[60%]" />
    )}
    <Navbar toggleNavOptions={toggleNav} />
    <main
      className={cn('relative mx-auto mt-30 flex min-h-screen w-full flex-col', {
        'md:max-w-[1300px]': limitWidth,
      })}
    >
      {children}
    </main>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }}
    />
    <Footer forceRestriction={forceRestriction} />
  </div>
);

export { MainContainer };
