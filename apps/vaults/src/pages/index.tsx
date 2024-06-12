import HeroSection from '../components/heroSection';
import OptionsSection from '../components/optionsSection';

const VaultsPage = (): JSX.Element => (
  <div className="flex flex-col space-y-2rem">
    <HeroSection />
    <OptionsSection />
  </div>
);

export default VaultsPage;
