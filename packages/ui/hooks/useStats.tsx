import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Nullable } from '../utils';

type StatsType = Nullable<{
  tokenIds: string[];
  balance: string;
  totalRewards: string;
  totalSupply: string;
}>;

const useStats = (contract: ethers.Contract, signerAddress: string | null, limit?: number) => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<StatsType>({
    tokenIds: null,
    balance: null,
    totalRewards: null,
    totalSupply: null,
  });

  useEffect(() => {
    if (!signerAddress) {
      return;
    }

    let ignore = false;

    const fetchContractStats = async () => {
      setLoading(true);

      const [balance, totalSupply] = (
        await Promise.all<BigInt>([contract.balanceOf(signerAddress), contract.minted()])
      ).map((res) => res.toString());

      const parsedBalance = Number(balance);

      const tokenIds = (
        await Promise.all<BigInt>(
          Array(limit ? (parsedBalance < limit ? parsedBalance : limit) : parsedBalance)
            .fill(0)
            .map((_, i) => contract.tokenOfOwnerByIndex(signerAddress, i))
        )
      ).map((res) => res.toString());

      const totalRewards = (await contract.calculateTotalDynamicRewards(tokenIds)).toString();

      if (!ignore) {
        setStats({
          tokenIds,
          balance,
          totalRewards: ethers.formatUnits(totalRewards, 18).toString(),
          totalSupply,
        });
        setLoading(false);
      }
    };

    fetchContractStats();

    const interval = setInterval(() => fetchContractStats(), 60000);

    return () => {
      ignore = true;
      clearInterval(interval);
    };
  }, [contract, limit, signerAddress]);

  return { stats, loading };
};

export { useStats };
