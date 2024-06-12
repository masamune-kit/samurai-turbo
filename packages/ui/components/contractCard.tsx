import React from 'react';
import { Link } from '../clickables';

type ContractCardProps = {
  title: string;
  address: string;
  chain?: 'ftm' | 'matic' | 'eth' | 'bsc' | 'avax';
};

const ContractCard: React.FC<ContractCardProps> = ({ title, address, chain = 'ftm' }) => {
  const getCorrectUrl = () => {
    switch (chain) {
      case 'ftm':
        return 'https://ftmscan.com/address/';
      case 'eth':
        return 'https://etherscan.io/address/';
      case 'bsc':
        return 'https://bscscan.com/address/';
      case 'matic':
        return 'https://polygonscan.com/address/';
      case 'avax':
        return 'https://snowtrace.io/address/';
    }
  };

  return (
    <div className="feat-box flex w-full flex-col p-10 shadow-md">
      <div className="flex items-center justify-between space-x-15 truncate p-10 text-16 text-secondary md:text-18">
        <div className="font-bold">{title}</div>
        <div className="text-16 md:text-18">{address}</div>
      </div>
      <div className="flex items-center justify-between p-10">
        <Link
          className="cursor-pointer border-b border-dashed border-gray text-gray"
          href={`${getCorrectUrl()}${address}`}
        >
          View Address
        </Link>
      </div>
    </div>
  );
};

export default ContractCard;
