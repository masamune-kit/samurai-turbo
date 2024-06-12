import { IntroBanner } from '@samurai/ui';

const HeroSection = (): JSX.Element => (
  <IntroBanner title="Samurai Vaults">
    <p className="pt-10">
      The Samurai Vault is a feature which enables Samurai NFT Node holders and xHNR governance token holders to lock up
      the ERC-20 token along with the NFT (ERC-721) in the smart contract outlined below. The feature would effectively
      store and retain the provided tokens and NFTs for a pre-determined period of time (also referred to as lockup
      period) and release an incentive upon the Vault&apos;s maturity period (unlock time). The incentive were comprised
      of a boosted xHNR governance token reward rate being dispersed at the Vault&apos;s maturity period.
    </p>
    <div className="mt-1rem w-max rounded-full border bg-primary bg-opacity-10 px-10 py-5 text-primary">
      Vaults Max Capacity Reached
    </div>
  </IntroBanner>
);
export default HeroSection;
