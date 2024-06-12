import { ethers } from 'ethers';
import { useMemo } from 'react';

const useContract = (signer: ethers.Signer | null, address: string, abi: ethers.InterfaceAbi) => {
  const memoContract = useMemo(() => {
    return new ethers.Contract(address, abi, signer);
  }, [abi, address, signer]);

  return memoContract;
};

export { useContract };
