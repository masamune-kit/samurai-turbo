import { useState, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button, useContract, useWallet } from '@samurai/ui';
import { errorHandler } from '@samurai/ui/utils';
import { contracts } from '../constants/contracts';
import toast from 'react-hot-toast';

const OptionsSection = (): JSX.Element => {
  const vaults = contracts.vaults;
  const [vaultsData, setVaultsData] = useState({
    remainingBlocks: '0',
    targetBlock: '0',
    rewardRate: '0',
  });

  const { signer } = useWallet();
  const vaultContract = useContract(signer, vaults.address, vaults.abi);

  const handleClaimTokens = useCallback(async () => {
    try {
      const tx = await vaultContract.claim();

      await toast.promise(tx.wait(), {
        loading: 'Claim has been initiated!',
        success: 'Claim transaction has been successful!',
        error: 'Unable to perform claim action!',
      });
    } catch (e) {
      errorHandler(e);
    }
  }, [vaultContract]);

  const handleUnlock = useCallback(async () => {
    try {
      const tx = await vaultContract.unlock();

      await toast.promise(tx.wait(), {
        loading: 'Unlocking vaults has been initiated!',
        success: 'Vaults unlocking was successful!',
        error: 'Unable to perform unlocking action!',
      });
    } catch (e) {
      errorHandler(e);
    }
  }, [vaultContract]);

  useEffect(() => {
    let ignore = false;

    const fetchBlocks = async () => {
      try {
        const [remainingBlocks, targetBlock, rewardRate] = (
          await Promise.all<BigInt>([
            vaultContract.remainingBlocks(),
            vaultContract.targetBlockNumber(),
            vaultContract.boostedRewardRate(),
          ])
        ).map((value) => value.toString());

        if (!ignore) {
          setVaultsData({
            remainingBlocks,
            targetBlock,
            rewardRate: ethers.formatEther(rewardRate).toString(),
          });
        }
      } catch (e) {
        // let it silently fail - this is not critical
      }
    };

    const interval = setInterval(() => {
      fetchBlocks();
    }, 3000);

    return () => {
      ignore = true;
      clearInterval(interval);
    };
  }, [vaultContract]);

  return (
    <div className="flex flex-col space-y-2rem md:flex-row md:space-x-2rem md:space-y-0">
      <div className="stat-box flex flex-col justify-between p-[1.5rem] p-3rem md:w-1/3">
        <div className="space-y-1rem">
          <h1 className="text-20 font-bold text-secondary">Claim Voting Escrow xHNR</h1>
          <p>If your NFT nodes & xHNR tokens were locked into a vault, you may be eligible to claim vexHNR</p>
        </div>
        <Button onClick={handleClaimTokens}>Claim vexHNR</Button>
      </div>
      <div className="stat-box space-y-3rem p-[1.5rem] p-3rem md:w-2/3">
        <div className="space-y-1rem">
          <h1 className="text-20 font-bold text-secondary">Unlock the Vaults</h1>
          <div>
            <div>Remaining Blocks</div>
            <div className="text-20 font-bold text-secondary md:text-22">
              {vaultsData.remainingBlocks} <span className="text-16 text-gray md:text-18">(lockup period)</span>
            </div>
          </div>
          <div>
            <div>Target Block Maturity</div>
            <div className="text-20 font-bold text-secondary md:text-22">
              {vaultsData.targetBlock} <span className="text-16 text-gray md:text-18">(unlock time)</span>
            </div>
          </div>
          <div>
            <div>Remaining Blocks (Lockup Period)</div>
            <div className="text-20 font-bold text-secondary md:text-22">
              {vaultsData.rewardRate} <span className="text-16 text-gray md:text-18">(xHNR per Block)</span>
            </div>
          </div>
          <p>
            Once the remaining blocks pass and the final target block is reached, you will be able to unlock your xHNR
            and node NFTs.
          </p>
        </div>

        <Button className="w-full" onClick={handleUnlock}>
          Unlock xHNR + Node NFTs
        </Button>
      </div>
    </div>
  );
};

export default OptionsSection;
