import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { errorHandler } from '../utils';

const useLottery = (tokenIds: string[] | null, tokenContract: ethers.Contract, lotteryContract: ethers.Contract) => {
  const [lotteryBalance, setLotteryBalance] = useState('0');

  useEffect(() => {
    const getLotteryBalance = async () => {
      try {
        const lotteryAddress = await lotteryContract.getAddress();
        const balance = await tokenContract.balanceOf(lotteryAddress);

        setLotteryBalance(ethers.formatEther(balance).toString());
      } catch (e) {
        // let it silently fail - this is a non-critical call
      }
    };

    getLotteryBalance();
  }, [lotteryContract, tokenContract]);

  const handleApprove = useCallback(async () => {
    const lotteryAddress = await lotteryContract.getAddress();

    try {
      const tx = await tokenContract.approve(lotteryAddress, '999999999999999999999999999999999999');

      await toast.promise(tx.wait(), {
        loading: 'Approval has been initiated!',
        success: 'Approval has been successful!',
        error: 'Unable to perform approval!',
      });
    } catch (e) {
      errorHandler(e);
    }
  }, [lotteryContract, tokenContract]);

  const handlePlay = useCallback(
    async (mode: 'tokens' | 'nodes') => {
      if (!tokenIds && mode === 'nodes') {
        return toast.error('Unable to load your nodes for a game!');
      }

      try {
        const txHash =
          mode === 'tokens'
            ? await lotteryContract.play(Math.floor(Math.random() * (278805 - 1) + 1), { gasLimit: 5000000 })
            : await lotteryContract.playTaxFree(Math.floor(Math.random() * (765619 - 1) + 1), tokenIds, {
                gasLimit: 9000000,
              });

        toast.loading(`The game has started using ${mode}!`);

        const rc = await txHash.wait();
        const gameEvent = rc.events.find((e: { event: string }) => e.event === 'LotteryGamePlayed');
        const [_player, result] = gameEvent.args;

        result
          ? toast.success('Congratulations! You have won 1000 xHNR tokens!')
          : toast.error('Sorry! You have lost 500 xHNR tokens.');
      } catch (e) {
        errorHandler(e);
      }
    },
    [lotteryContract, tokenIds]
  );

  return { lotteryBalance, handleApprove, handlePlay };
};

export { useLottery };
