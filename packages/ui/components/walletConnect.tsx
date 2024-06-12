import React from 'react';
import { Button, Link } from '../clickables';
import { useWallet } from '../hooks/useWallet';
import cn from 'classnames';
import { truncate } from '../utils';

type WalletConnectProps = {};

const WalletConnect: React.FC<WalletConnectProps> = () => {
  const { wallet, connectWallet, isCorrectNetwork, switchNetwork } = useWallet();

  return (
    <div className="relative flex flex-col md:w-150">
      <Button
        className={cn({
          'bg-primary': !!wallet,
        })}
        onClick={connectWallet}
      >
        {wallet ? truncate(wallet, 4) : 'Connect'}
      </Button>
      {!isCorrectNetwork() && wallet && (
        <Link className="absolute -bottom-2rem right-0 text-14 font-bold" external={false}>
          <div onClick={switchNetwork}>Switch to Fantom</div>
        </Link>
      )}
    </div>
  );
};

export default WalletConnect;
