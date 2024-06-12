import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { errorHandler, trim } from '../utils';
import toast from 'react-hot-toast';

type StakingState = {
  lpBalance: string;
  userLpBalance: string;
  pendingRewards: string;
  amountStaked: string;
  xHnrPerBlock: string;
  currentBlock: string;
  startingBlock: string;
  endingBlock: string;
};

const useZenMode = (
  signer: ethers.JsonRpcSigner | null,
  stakingContract: ethers.Contract,
  multichainContract: ethers.Contract | undefined,
  wrappedTokenContract: ethers.Contract | undefined,
  lpTokenContracts: ethers.Contract[]
) => {
  const [lpTokenIndex, setLpTokenIndex] = useState(0);
  const [wxHNRAmount, setWxHNRAmount] = useState(0);
  const [lpAmount, setLpAmount] = useState(0);
  const [stakingState, setStakingState] = useState<StakingState>({
    lpBalance: '0',
    userLpBalance: '0',
    pendingRewards: '0',
    amountStaked: '0',
    xHnrPerBlock: '0',
    currentBlock: '0',
    startingBlock: '0',
    endingBlock: '0',
  });

  useEffect(() => {
    let ignore = false;

    const load = async () => {
      if (!signer) {
        return;
      }

      const wallet = await signer.getAddress();

      const spBalance = lpTokenContracts[lpTokenIndex].balanceOf(await stakingContract.getAddress());
      const userSpBalance = lpTokenContracts[lpTokenIndex].balanceOf(wallet);
      const pending = stakingContract.pendingHNR(lpTokenIndex, wallet);
      const hnrStaked = stakingContract.userInfo(lpTokenIndex, wallet);
      const rewPerBlock = stakingContract.HNRPerBlock();
      const current = stakingContract.blockNumber();
      const start = stakingContract.startBlock();
      const end = stakingContract.endBlock();

      const [lpBalance, userLpBalance, rewards, staked, HNRPerBlock, currentBlock, startingBlock, endingBlock] =
        await Promise.all([spBalance, userSpBalance, pending, hnrStaked, rewPerBlock, current, start, end]);

      if (!ignore) {
        setStakingState({
          lpBalance: trim(Number(ethers.formatEther(lpBalance)), 3),
          userLpBalance: ethers.formatEther(userLpBalance),
          pendingRewards: trim(Number(ethers.formatEther(rewards)), 3),
          amountStaked: trim(Number(ethers.formatEther(staked[0])), 3),
          xHnrPerBlock: trim(Number(ethers.formatEther(HNRPerBlock)), 5),
          currentBlock: ethers.formatUnits(currentBlock, 0),
          startingBlock: ethers.formatUnits(startingBlock, 0),
          endingBlock: ethers.formatUnits(endingBlock, 0),
        });
      }
    };

    const interval = setInterval(() => load(), 5000);

    return () => {
      ignore = true;
      clearInterval(interval);
    };
  }, [lpTokenContracts, lpTokenIndex, signer, stakingContract, stakingState]);

  const handleApprove = useCallback(
    async (mode: 'staking' | 'multichain') => {
      if (mode === 'multichain' && (!wrappedTokenContract || !multichainContract)) {
        return;
      }

      try {
        const tx =
          mode === 'staking'
            ? await lpTokenContracts[lpTokenIndex].approve(
                await stakingContract.getAddress(),
                '999999999999999999999999999999999999'
              )
            : await wrappedTokenContract?.approve(
                await multichainContract?.getAddress(),
                '999999999999999999999999999999999999'
              );

        await toast.promise(tx.wait(), {
          loading: 'Approval has been initiated!',
          success: 'Approval has been successful!',
          error: 'Unable to perform approval!',
        });
      } catch (e) {
        errorHandler(e);
      }
    },
    [lpTokenContracts, lpTokenIndex, multichainContract, stakingContract, wrappedTokenContract]
  );

  const handleMultichainSwap = useCallback(async () => {
    const isValid = !isNaN(wxHNRAmount);

    if (!isValid) {
      return toast.error('Enter a number, please!');
    }

    if (!multichainContract) {
      return toast.error('Invalid chain for handling swaps!');
    }

    if (wxHNRAmount > 0) {
      try {
        const tx = await multichainContract.swap(ethers.parseUnits(wxHNRAmount.toString(), 18));

        await toast.promise(tx.wait(), {
          loading: 'Multichain Swap has been initiated!',
          success: 'Multichain Swap has been successful!',
          error: 'Unable to perform Multichain Swap!',
        });
      } catch (e) {
        errorHandler(e);
      }
    }
  }, [multichainContract, wxHNRAmount]);

  const handleAction = useCallback(
    async (action: 'DEPOSIT' | 'WITHDRAW') => {
      const isValid = !isNaN(lpAmount);

      if (!isValid) {
        return toast.error('Enter a number, please!');
      }

      if (lpAmount > 0) {
        try {
          const tx =
            action === 'DEPOSIT'
              ? await stakingContract.deposit(lpTokenIndex, ethers.parseUnits(lpAmount.toString(), 18))
              : await stakingContract.withdraw(lpTokenIndex, ethers.parseUnits(lpAmount.toString(), 18));

          await toast.promise(tx.wait(), {
            loading: `${action} has been initiated!`,
            success: `${action} has been successful!`,
            error: `Unable to perform ${action}!`,
          });
        } catch (e) {
          errorHandler(e);
        }
      } else {
        toast.error('Enter a value higher than 0!');
      }
    },
    [lpAmount, lpTokenIndex, stakingContract]
  );

  return {
    lpTokenIndex,
    stakingState,
    handleApprove,
    handleMultichainSwap,
    handleAction,
    lpAmount,
    wxHNRAmount,
    setLpTokenIndex,
    setLpAmount,
    setWxHNRAmount,
  };
};

export { useZenMode };
