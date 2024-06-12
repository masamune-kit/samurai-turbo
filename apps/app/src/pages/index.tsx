import React from 'react';
import { useContract, useStats, useWallet } from '@samurai/ui';
import HeroSection from '../components/heroSection';
import StatSection from '../components/statSection';
import TableSection from '../components/tableSection';
import { contracts } from '../constants/contracts';

const AppPage: React.FC = () => {
  const { signer, wallet } = useWallet();
  const nftContract = useContract(signer, contracts.nft.address, contracts.nft.abi);
  const { stats, loading } = useStats(nftContract, wallet);

  return (
    <div className="flex flex-col space-y-2rem">
      <HeroSection />
      <StatSection
        contract={nftContract}
        tokenIds={stats.tokenIds}
        balance={stats.balance}
        totalSupply={stats.totalSupply}
        totalRewards={stats.totalRewards}
        loading={loading}
      />
      <TableSection contract={nftContract} tokenIds={stats.tokenIds} />
    </div>
  );
};

export default AppPage;
