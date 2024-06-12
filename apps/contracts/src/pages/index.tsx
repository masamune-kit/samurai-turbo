import ContractsSection from '../components/contractsSection';
import IntroSection from '../components/introSection';

const ContractsPage = (): JSX.Element => (
  <div className="flex flex-col space-y-2rem">
    <IntroSection />
    <ContractsSection />
  </div>
);

export default ContractsPage;
