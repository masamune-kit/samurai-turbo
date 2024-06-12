import { useEffect, useState } from 'react';
import { ChainSymbols, errorHandler, getChainbyId } from '../utils';
import { InterfaceAbi } from 'ethers';

export type ChainData = {
  name: string;
  symbol: ChainSymbols;
  wrappedToken: string | undefined;
  multichain: string | undefined;
  staking: string;
  lpToken: { name: string; unit: string; address: string }[];
  tokenAbi: InterfaceAbi;
  stakingAbi: InterfaceAbi;
  multichainAbi: InterfaceAbi;
};

const useChainData = (chainId: number | null, contracts: any) => {
  const [chainData, setChainData] = useState<ChainData>({
    name: 'Fantom',
    symbol: 'ftm',
    wrappedToken: contracts.wrappedToken.data['ftm'],
    multichain: contracts.multichain.data['ftm'],
    staking: contracts.staking.data['ftm'],
    lpToken: contracts.lpToken.data['ftm'],
    tokenAbi: contracts.lpToken.abi,
    multichainAbi: contracts.multichain.abi,
    stakingAbi: contracts.staking.abi,
  });

  useEffect(() => {
    if (chainId) {
      try {
        const basicChainData = getChainbyId(chainId);
        const wrappedToken: string | undefined = contracts.wrappedToken.data[basicChainData.symbol];
        const multichain: string | undefined = contracts.multichain.data[basicChainData.symbol];
        const staking: string = contracts.staking.data[basicChainData.symbol];
        const lpToken: { name: string; unit: string; address: string }[] =
          contracts.lpToken.data[basicChainData.symbol];

        setChainData({
          name: basicChainData.name,
          symbol: basicChainData.symbol,
          wrappedToken,
          multichain,
          staking,
          lpToken,
          tokenAbi: contracts.lpToken.abi,
          multichainAbi: contracts.multichain.abi,
          stakingAbi: contracts.staking.abi,
        });
      } catch (e) {
        errorHandler(e);
      }
    }
  }, [
    chainId,
    contracts.lpToken.abi,
    contracts.lpToken.data,
    contracts.multichain.abi,
    contracts.multichain.data,
    contracts.staking.abi,
    contracts.staking.data,
    contracts.wrappedToken.data,
  ]);

  return chainData;
};

export { useChainData };
