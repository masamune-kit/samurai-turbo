import HeroSection from '../components/heroSection';
import DescriptionSection from '../components/descriptionSection';
import RulesSection from '../components/rulesSection';
import PowerSection from '../components/powerSection';
import FAQSection from '../components/faqSection';

const GovernancePage = (): JSX.Element => (
  <div className="flex flex-col space-y-4rem md:space-y-8rem">
    <HeroSection />
    <DescriptionSection />
    <RulesSection />
    <PowerSection />
    <FAQSection />
  </div>
);

export default GovernancePage;
