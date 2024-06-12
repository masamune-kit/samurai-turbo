import {
  AiIcon,
  BarChartRandomIcon,
  GovernanceIcon,
  LayersIcon,
  RepeatIcon,
  TargetIcon,
  TreasuryIcon,
  VaultsIcon,
} from '@samurai/ui/assets/icons';

type BigFeatureProps = {
  title: string;
  subtitle: string;
  icon: JSX.Element;
};

const BigFeature = ({ title, subtitle, icon }: BigFeatureProps): JSX.Element => (
  <div className="stat-box row-span-2 flex space-x-10 p-30">
    <div className="scale-[1.30] transform px-10 pt-20 text-primary">{icon}</div>
    <div className="flex flex-col space-y-10">
      <div className="text-20 font-bold text-secondary">{title}</div>
      <div className="text-18">{subtitle}</div>
    </div>
  </div>
);

type SmallFeatureProps = {
  title: string;
  icon: JSX.Element;
};

const SmallFeature = ({ title, icon }: SmallFeatureProps): JSX.Element => (
  <div className="stat-box flex items-center space-x-10 p-20">
    <span className="px-10">{icon}</span>
    <span className="text-20 font-bold text-secondary">{title}</span>
  </div>
);

const EcosystemSection = (): JSX.Element => (
  <div className="flex flex-col items-center">
    <h1 className="text-24 font-bold text-secondary md:text-40">The Samurai Ecosystem</h1>
    <div className="max-w-800 pt-25 text-left text-18 md:text-center">
      The Samurai protocol encompasses a wide-scope ecosystem of unique features, products and tools that are accessible
      to xHNR token holders and Samurai Node NFT holders.
    </div>
    <div className="flex flex-col gap-20 pt-4rem md:grid md:grid-cols-3 md:grid-rows-4 md:gap-32">
      <BigFeature
        title="Levels"
        subtitle="Levels is a unique dApp that helps you improve your knowledge, skills and understanding across different fields through a gamified experience."
        icon={<BarChartRandomIcon />}
      />
      <BigFeature
        title="Zen Garden"
        subtitle="Zen Garden is a unique staking solution that aims to incentivise liquidity provision for different protocols across different chains."
        icon={<LayersIcon />}
      />
      <BigFeature
        title="AI Writer"
        subtitle="An AI tool enabling creators, influencers, copywriters and others to seamlessly automate and delegate the creative process of writing."
        icon={<AiIcon className="h-26 w-26" />}
      />

      <SmallFeature title="Vaults" icon={<VaultsIcon className="h-34 w-34 text-primary" />} />
      <SmallFeature title="Lottery" icon={<TargetIcon className="mx-5 scale-[1.40] transform text-primary" />} />
      <SmallFeature title="Trade" icon={<RepeatIcon className="scale-[1.30] transform text-primary" />} />
      <SmallFeature title="Governance" icon={<GovernanceIcon className="h-34 w-34 transform text-primary" />} />
      <SmallFeature title="Treasury" icon={<TreasuryIcon className="h-34 w-34 text-primary" />} />
    </div>
  </div>
);

export default EcosystemSection;
