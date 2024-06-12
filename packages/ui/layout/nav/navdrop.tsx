import React from 'react';
import {
  AiIcon,
  BarChartRandomIcon,
  BoxIcon,
  ChatIcon,
  ChevronsDownIcon,
  GovernanceIcon,
  GridIcon,
  LayersIcon,
  RepeatIcon,
  SakuraIcon,
  TargetIcon,
  TreasuryIcon,
  VaultsIcon,
} from '../../assets/icons';
import { Button, Link } from '../../clickables';
import { useComponentVisible } from '../../hooks/useComponentVisible';
import cn from 'classnames';

const Navdrop: React.FC = () => {
  const { ref, isVisible, toggleVisible } = useComponentVisible(false);

  const navButtons = [
    {
      title: 'Dashboard',
      icon: GridIcon,
      href: 'https://app.samurai.financial',
    },
    {
      title: 'Levels',
      icon: BarChartRandomIcon,
      href: 'https://levels.samurai.financial',
    },
    {
      title: 'Zen',
      icon: LayersIcon,
      href: 'https://zen.samurai.financial',
    },
    {
      title: 'Chat',
      icon: ChatIcon,
      href: 'https://chat.samurai.financial',
    },
    {
      title: 'AI Writer',
      icon: AiIcon,
      href: 'https://ai.samurai.financial',
    },
    {
      title: 'Vaults',
      icon: VaultsIcon,
      href: 'https://vaults.samurai.financial',
    },
    {
      title: 'Lottery',
      icon: TargetIcon,
      href: 'https://lottery.samurai.financial',
    },
    {
      title: 'Trade',
      icon: RepeatIcon,
      href: 'https://trade.samurai.financial',
    },
    {
      title: 'Contracts',
      icon: BoxIcon,
      href: 'https://contracts.samurai.financial',
    },
    {
      title: 'Governance',
      icon: GovernanceIcon,
      href: 'https://governance.samurai.financial',
    },
    {
      title: 'Treasury',
      icon: TreasuryIcon,
      href: 'https://treasury.samurai.financial',
    },
    {
      title: 'xHonour',
      icon: SakuraIcon,
      href: 'https://spooky.fi/#/swap?inputCurrency=0xd5aa2a5AcFC000c08E8dab3Af830ed4f09120478',
    },
  ];

  return (
    <div className="flex items-center space-x-10">
      <div ref={ref} className="relative z-[100] transition-all duration-500 ease-in-out">
        <Button className="flex items-center space-x-3" type="secondary" onClick={() => toggleVisible()}>
          <ChevronsDownIcon
            className={cn('transition duration-300 ease-in-out', { 'rotate-180 transform': isVisible })}
          />
          <span>Menu</span>
        </Button>
        <div
          className={cn(
            'absolute -left-[2.5rem] z-10 mt-10 flex w-200 flex-col space-y-10 rounded-2xl border border-black/[.15] bg-white p-10 shadow-lg md:left-0',
            {
              hidden: !isVisible,
            }
          )}
        >
          {navButtons.map(({ title, icon: Icon, href }, i) => (
            <Link key={i} accented={false} href={href}>
              <Button className="flex w-full items-center justify-start space-x-10" type="secondary">
                <Icon className="h-24 w-24" />
                <span>{title}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navdrop;
