import { IntroBanner, Button, Link } from '@samurai/ui';
import { SakuraIcon, TreasuryIcon } from '@samurai/ui/assets/icons';
import React from 'react';

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  const buttons = [
    {
      title: 'Trade Nodes',
      href: 'https://tofunft.com/collection/samurai-honour-nodes/items',
      icon: undefined,
    },
    {
      title: 'Get xHonour',
      href: 'https://spooky.fi/#/swap?inputCurrency=0xd5aa2a5AcFC000c08E8dab3Af830ed4f09120478',
      icon: <SakuraIcon className="h-20 w-20" />,
    },
    {
      title: 'See Treasury',
      href: 'https://treasury.samurai.financial',
      icon: <TreasuryIcon className="h-24 w-24 pb-3" />,
    },
  ];

  return (
    <IntroBanner>
      <div className="max-w-600 space-y-2rem pt-1rem md:space-y-3rem md:pt-2rem">
        <p>
          From this dashboard, you can view and manage Honour-Nodes. You can also see how many rewards have been
          allocated, and claim them here. If you want to, you can also view them on TofuNFT. We strongly recommend
          allocating no more than a maximum of 100 NFTs per wallet due to application performance.
        </p>
        <div className="flex flex-col space-y-1rem md:flex-row md:space-y-0 md:space-x-[1.5rem]">
          {buttons.map(({ title, href, icon }, i) => (
            <Link key={i} accented={false} href={href}>
              <Button
                type={i === 0 ? 'primary' : 'secondary'}
                className="flex w-full items-center justify-center md:min-w-[175px]"
              >
                {!!icon && <span className="pr-5">{icon}</span>}
                <span>{title}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </IntroBanner>
  );
};

export default HeroSection;
