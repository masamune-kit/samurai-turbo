import React from 'react';

type FeatBoxProps = {
  icon: any;
  title: string;
  description: string;
};

const FeatBox: React.FC<FeatBoxProps> = ({ icon, title, description }) => (
  <div className="stat-box group max-w-350 transform p-24 transition-all duration-500 hover:-translate-y-10">
    <div className="flex items-center space-x-1rem pb-10">
      <span className="rounded-full bg-white p-10 text-black shadow-md transition-all duration-500 group-hover:bg-primary group-hover:text-white">
        {icon}
      </span>
      <h1 className="font-bold text-secondary">{title}</h1>
    </div>
    <p>{description}</p>
  </div>
);

export default FeatBox;
