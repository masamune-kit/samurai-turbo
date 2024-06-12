import { ethers } from 'ethers';
import { useCallback, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { BlankStarIcon, FullStarIcon } from '../assets/icons';
import { Button } from '../clickables';
import { trim } from '../utils';
import { errorHandler } from '../utils';
import { TableStats } from './useTableStats';

export type RowDataType = {
  id: string;
  name: string;
  tier: JSX.Element;
  tax: string;
  rpc: {
    ftm: string;
    avax: string;
    matic: string;
  };
  rewards: JSX.Element;
  options: JSX.Element;
};

const useParseRowData = (
  { traits, rewards, taxRates, tokenIds }: TableStats,
  contract: ethers.Contract
): { rowData: RowDataType[] | undefined; rpcIndex: number; hideRpcIndex: () => void } => {
  const [rpcIndex, setRpcIndex] = useState(-1);

  const handleClaim = useCallback(
    async (tokenId: string) => {
      try {
        const txHash = await contract.claimRewards(tokenId);

        await toast.promise(txHash.wait(), {
          loading: 'Claim all rewards initiated!',
          success: 'Rewards have been claimed!',
          error: 'Unable to claim!',
        });
      } catch (e) {
        errorHandler(e);
      }
    },
    [contract]
  );

  const handleSetRpcIndex = useCallback((index: number) => setRpcIndex(index), []);
  const hideRpcIndex = useCallback(() => setRpcIndex(-1), []);

  const rowData = useMemo(() => {
    const buke = (
      <div className="flex space-x-5">
        <FullStarIcon />
        <BlankStarIcon />
        <BlankStarIcon />
      </div>
    );

    const mononofu = (
      <div className="flex space-x-5">
        <FullStarIcon />
        <FullStarIcon />
        <BlankStarIcon />
      </div>
    );

    const musha = (
      <div className="flex space-x-5">
        <FullStarIcon />
        <FullStarIcon />
        <FullStarIcon />
      </div>
    );

    const tiers = [buke, mononofu, musha];

    if (traits && rewards && taxRates && tokenIds) {
      const parsedNodes = tokenIds.map((id, index) => {
        const node: RowDataType = {
          id,
          name: traits[index][1],
          tier: tiers[Number(traits[index][0].toString())],
          tax: `${taxRates[index].toString()}%`,
          rpc: {
            ftm: traits[index][2],
            avax: traits[index][3],
            matic: traits[index][4],
          },
          rewards: (
            <span className="text-yellow">
              <span className="font-semibold">{trim(ethers.formatUnits(rewards[index].toString(), 18), 3)}</span>{' '}
              <span className="text-12 text-gray">xHNR</span>
            </span>
          ),
          options: (
            <div className="flex space-x-10">
              <Button className="text-11 md:px-20 md:py-3 md:text-11" type="secondary" onClick={() => handleClaim(id)}>
                Claim
              </Button>
              <Button className="text-11 md:px-20 md:py-3 md:text-11" onClick={() => handleSetRpcIndex(index)}>
                RPC
              </Button>
            </div>
          ),
        };

        return node;
      });

      return parsedNodes;
    }
  }, [handleClaim, handleSetRpcIndex, rewards, taxRates, tokenIds, traits]);

  return { rowData, rpcIndex, hideRpcIndex };
};

export { useParseRowData };
