import { FeatureCard } from '@samurai/ui';
import { FeatOneIcon, FeatThreeIcon, FeatTwoIcon } from '@samurai/ui/assets/icons';

const FeatureSection = (): JSX.Element => {
  const features = [
    {
      img: <FeatOneIcon />,
      preTitle: 'Unique DeFi & NFT Gateway',
      title: 'DeFi Exposure',
      text: 'The protocol combines unique elements of DeFi, NFTs, RPC-embedded endpoints and governance',
    },
    {
      img: <FeatTwoIcon />,
      preTitle: 'Ease, simplicity, clarity',
      title: 'Simple Setup',
      text: 'Samurai enables anyone to easily access and enter the world of web3 within one unified interface and dApp',
    },
    {
      img: <FeatThreeIcon />,
      preTitle: 'Unconventional xHNR token emissions',
      title: 'Honour Rewards',
      text: 'Samurai issues xHNR governance token emissions to Samurai NFT node holders and liquidity providers',
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-1rem">
      <h1 className="text-24 font-bold text-secondary md:text-40">This is your Bushido</h1>
      <h2 className="text-center">Why should you consider joining the Samurai journey?</h2>
      <div className="flex flex-col space-y-2rem pt-2rem md:max-w-1200 md:flex-row md:space-y-0 md:space-x-2rem">
        {features.map(({ img, preTitle, title, text }, i) => (
          <FeatureCard key={i} image={img} preTitle={preTitle} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
