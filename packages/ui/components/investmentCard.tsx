import React from 'react';
import { Link } from '../clickables';

type InvestmentCardProps = {
  type: string;
  value: string;
  currency: string;
  txHash: string;
  date: string;
  isFTM: boolean;
};

const InvestmentCard: React.FC<InvestmentCardProps> = ({ type, value, currency, txHash, date, isFTM }) => (
  <div className="feat-box flex w-full flex-col p-10 shadow-md">
    <div className="flex items-center justify-between p-10 text-16 md:text-18">
      <div className="text-secondary">{type}</div>
      <div className="text-18 font-bold text-secondary md:text-22">
        {value} <span className="pl-5 font-main text-14 text-gray md:text-16">{currency}</span>
      </div>
    </div>
    <div className="flex items-center justify-between p-10">
      <div className="text-gray">{date}</div>
      <Link
        href={isFTM ? `https://ftmscan.com/tx/${txHash}` : `https://finder.terra.money/mainnet/tx/${txHash}`}
        className="cursor-pointer border-b border-dashed border-gray text-gray"
      >
        Tx Hash
      </Link>
    </div>
  </div>
);

export { InvestmentCard };
