import React, { ReactNode } from 'react';

type IntroBannerProps = {
  children?: ReactNode;
  title?: string;
};

const IntroBanner: React.FC<IntroBannerProps> = ({ children, title = 'Welcome to Samurai' }) => (
  <div className="stat-box flex justify-between">
    <div className="p-[1.5rem] md:p-3rem">
      <h1 className="text-20 font-bold text-secondary md:text-30">{title}</h1>
      {children}
    </div>
  </div>
);

export { IntroBanner };
