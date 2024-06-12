import React from 'react';
import HeroSection from '../components/heroSection';
import FeatureSection from '../components/featureSection';
import ExplanationSection from '../components/explanationSection';
import CTASection from '../components/ctaSection';
import DisclaimerSection from '../components/disclaimerSection';
import EcosystemSection from '../components/ecosystemSection';

const LandingPage: React.FC = () => (
  <div className="flex flex-col space-y-10rem md:space-y-[20rem]">
    <HeroSection />
    <FeatureSection />
    <ExplanationSection />
    <EcosystemSection />
    <CTASection />
    <DisclaimerSection />
  </div>
);

export default LandingPage;
