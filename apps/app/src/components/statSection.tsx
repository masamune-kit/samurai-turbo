import { StatCard, useCountdown } from '@samurai/ui';
import { NodeIcon, NodesIcon, RewardIcon } from '@samurai/ui/assets/icons';
import { errorHandler, trim } from '@samurai/ui/utils';
import { ethers } from 'ethers';
import React, { useCallback } from 'react';
import { toast } from 'react-hot-toast';

type StatSectionProps = {
  contract: ethers.Contract;
  tokenIds: string[] | null;
  balance: string | null;
  totalSupply: string | null;
  totalRewards: string | null;
  loading: boolean;
};

const StatSection: React.FC<StatSectionProps> = ({
  contract,
  tokenIds,
  balance,
  totalSupply,
  totalRewards,
  loading,
}) => {
  const count = useCountdown(60);

  const handleClaimAll = useCallback(async () => {
    try {
      const txHash = await contract.claimAllRewards(tokenIds);

      await toast.promise(txHash.wait(), {
        loading: 'Claim all rewards initiated!',
        success: 'Rewards have been claimed!',
        error: 'Unable to claim!',
      });
    } catch (e) {
      errorHandler(e);
    }
  }, [contract, tokenIds]);

  return (
    <div>
      <div className="ml-auto flex w-full max-w-[230px] justify-between">
        <span>Resync in approx.</span>
        <span className="font-[700] text-secondary">{count} seconds</span>
      </div>
      <div className="flex flex-col space-y-1rem md:flex-row md:space-y-0 md:space-x-1rem">
        <StatCard icon={<NodeIcon />} title={`${balance} / 100`} description="Owned NFT Nodes" loading={loading} />
        <StatCard icon={<NodesIcon />} title={totalSupply} description="All NFT Nodes" loading={loading} />
        <StatCard
          icon={<RewardIcon />}
          title={totalRewards ? trim(totalRewards, 2) : null}
          description="xHNR Rewards"
          loading={loading}
          buttonText="Claim All"
          onClick={handleClaimAll}
        />
      </div>
    </div>
  );
};

export default StatSection;
