import { ethers } from 'ethers';
import { useContract } from './useContract';
import { ChainData } from './useChainData';
import { useMemo } from 'react';

const useZenContracts = (signer: ethers.JsonRpcSigner | null, contractData: ChainData) => {
  // memo the whole thing since we cannot use memo conditionally
  const { staking, multichain, wrappedToken, lpToken, stakingAbi, multichainAbi, tokenAbi } = useMemo(
    () => contractData,
    [contractData]
  );

  const stakingContract = useContract(signer, staking, stakingAbi);
  // hooks cannot be called conditionally
  const multichainContract = multichain ? new ethers.Contract(multichain, multichainAbi, signer) : undefined;
  const wrappedTokenContract = wrappedToken ? new ethers.Contract(wrappedToken, tokenAbi, signer) : undefined;
  const lpTokenContracts = lpToken.map(({ address }) => new ethers.Contract(address, tokenAbi, signer));

  return { stakingContract, multichainContract, wrappedTokenContract, lpTokenContracts };
};

export { useZenContracts };
