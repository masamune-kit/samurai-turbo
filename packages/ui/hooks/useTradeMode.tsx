import { useCallback, useEffect, useMemo, useState } from 'react';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
import { errorHandler } from '../utils';

const useTradeMode = (
  wallet: string | null,
  tradeContract: ethers.Contract,
  nftContract: ethers.Contract,
  tokenContract: ethers.Contract
) => {
  const [mode, setMode] = useState<'SELL' | 'BUY'>('SELL');
  const [tradeData, setTradeData] = useState({
    price: 0,
    isPaused: true,
  });
  const [statAddress, setStatAddress] = useState(wallet);

  const handleApprove = useCallback(async () => {
    const address = await tradeContract.getAddress();

    try {
      const tx =
        mode === 'SELL'
          ? await nftContract.setApprovalForAll(address, true)
          : await tokenContract.approve(address, '999999999999999999999999999999999999');

      await toast.promise(tx.wait(), {
        loading: 'Approval has been initiated!',
        success: 'Approval has been successful!',
        error: 'Unable to perform approval!',
      });
    } catch (e) {
      errorHandler(e);
    }
  }, [mode, nftContract, tokenContract, tradeContract]);

  const handleTransact = useCallback(
    async (tokenIds: string[]) => {
      try {
        const tx = mode === 'SELL' ? await tradeContract.sell(tokenIds) : await tradeContract.buy(tokenIds);

        await toast.promise(tx.wait(), {
          loading: 'Trade has been initiated!',
          success: 'Trade transaction has been successful!',
          error: 'Unable to perform trade action!',
        });
      } catch (e) {
        errorHandler(e);
      }
    },
    [mode, tradeContract]
  );

  useEffect(() => {
    if (!wallet) {
      return;
    }

    const initTradeMode = async () => {
      setStatAddress(mode === 'SELL' ? wallet : await tradeContract.getAddress());
    };

    const fetchTradeData = async () => {
      const [price, isPaused] =
        mode === 'SELL'
          ? await Promise.all([tradeContract.sellPrice(), tradeContract.paused()])
          : await Promise.all([tradeContract.buyPrice(), tradeContract.isBuyEnabled()]);

      setTradeData({
        price: Number(ethers.formatEther(price).toString()),
        // the boolean is reverted for buy
        isPaused: mode === 'SELL' ? isPaused : !isPaused,
      });
    };

    initTradeMode();
    fetchTradeData();
  }, [mode, tradeContract, wallet]);

  return { tradeData, statAddress, mode, setMode, handleApprove, handleTransact };
};

export { useTradeMode };
