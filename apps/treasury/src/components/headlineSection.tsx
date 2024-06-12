import { Button, Link, StatCard } from '@samurai/ui';
import { RewardIcon } from '@samurai/ui/assets/icons';
import { transactions } from '../constants/transactions';

const HeadlineSection = (): JSX.Element => (
  <div className="space-y-2rem">
    <div className="flex items-center justify-between">
      <h1 className="text-20 font-bold text-secondary md:text-24">Treasury</h1>
      <Link href="https://ftmscan.com/address/0x50dbdf977e9e949e2fdf02848c31b3f59818e06c" accented={false}>
        <Button type="secondary">View Treasury Wallet</Button>
      </Link>
    </div>
    <StatCard
      icon={<RewardIcon />}
      title={`${transactions.map((t) => Number(t.value.replace(/\s/g, ''))).reduce((prev, curr) => prev + curr)} DAI`}
      description="Total Transactions Value"
      truncate={false}
    />
  </div>
);

export default HeadlineSection;
