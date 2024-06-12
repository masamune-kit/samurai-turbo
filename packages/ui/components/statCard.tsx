import React from 'react';
import cn from 'classnames';
import { Button } from '../clickables';

type StatCardProps = {
  icon: JSX.Element;
  title: string | null;
  description: string;
  buttonText?: string;
  loading?: boolean;
  truncate?: boolean;
  onClick?: () => void;
};

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  description,
  buttonText = undefined,
  loading = false,
  truncate = true,
  onClick,
}) => (
  <div className="stat-box flex w-full items-center justify-between space-x-2rem rounded-md p-20 md:p-30">
    <div className="flex flex-col">
      <div className="flex items-center space-x-20">
        <div className="text-gray">{icon}</div>
        <div
          className={cn('text-16 font-[800] text-secondary md:text-32', {
            'max-w-140 truncate': truncate,
          })}
        >
          {loading ? <div className="h-27 w-130 animate-pulse rounded-md bg-white-darker" /> : title}
        </div>
      </div>
      <div className="pl-[60px] pt-10 text-14 text-gray">{description}</div>
    </div>
    {buttonText && (
      <Button className="text-10 md:text-12" type="primary" onClick={onClick}>
        {buttonText}
      </Button>
    )}
  </div>
);
export { StatCard };
