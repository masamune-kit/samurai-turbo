import HeadlineSection from '../components/headlineSection';
import TransactionsSection from '../components/transactionsSection';

const TreasuryPage = (): JSX.Element => (
  <div className="stat-box flex flex-col space-y-4rem p-[1.5rem] md:p-3rem">
    <HeadlineSection />
    <TransactionsSection />
  </div>
);

export default TreasuryPage;
