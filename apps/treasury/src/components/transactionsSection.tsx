import { InvestmentCard } from '@samurai/ui';
import { transactions } from '../constants/transactions';

const TransactionsSection = (): JSX.Element => (
  <div className="space-y-2rem">
    <div className="flex space-x-10">
      <h1 className="text-20 font-bold text-secondary md:text-24">Transactions</h1>
      <h3 className="text-16 font-bold md:text-20">({transactions.length})</h3>
    </div>
    <div className="space-y-1rem">
      {transactions.map((t, i) => (
        <InvestmentCard
          key={i}
          type={t.type}
          value={t.value}
          currency={t.currency}
          date={t.date}
          txHash={t.txHash}
          isFTM={t.isFTM}
        />
      ))}
    </div>
  </div>
);

export default TransactionsSection;
