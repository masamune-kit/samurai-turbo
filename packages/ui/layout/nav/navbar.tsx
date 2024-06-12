import React from 'react';
import { Link } from '../../clickables';
import Navdrop from './navdrop';
import WalletConnect from '../../components/walletConnect';
import { LogoHeadIcon, LogoTextIcon } from '../../assets/icons';

type NavbarProps = {
  toggleNavOptions?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ toggleNavOptions = true }) => {
  return (
    <nav className="mx-auto flex justify-between py-25 md:max-w-[1300px]">
      <Link className="relative" href="/" accented={false} underline={false} external={false}>
        <div className="flex max-w-[150px] items-center space-x-15 md:max-w-200">
          <LogoHeadIcon className="h-80 w-80" />
          <LogoTextIcon className="w-200" />
        </div>
      </Link>
      <div className="flex items-center space-x-10">
        {toggleNavOptions && (
          <>
            <Navdrop />
            <WalletConnect />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
