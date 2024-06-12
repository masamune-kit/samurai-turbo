import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Nullable } from '../utils';

type Trait = {
  0: BigInt;
  1: string;
  2: string;
  3: string;
  4: string;
  5: BigInt;
  6: BigInt;
};

export type TableStats = Nullable<{
  traits: Trait[];
  rewards: BigInt[];
  taxRates: BigInt[];
  tokenIds: string[];
}>;

const useTableStats = (contract: ethers.Contract, tokenIds: string[] | null, page: number, limit: 20) => {
  const [loading, setLoading] = useState(true);
  const [tableStats, setTableStats] = useState<TableStats>({
    traits: null,
    rewards: null,
    taxRates: null,
    tokenIds: null,
  });

  useEffect(() => {
    if (!tokenIds) {
      return;
    }

    let ignore = false;
    const paginatedTokenIds = tokenIds.slice((page - 1) * limit, page * limit);

    const fetchStats = async () => {
      setLoading(true);

      const traits = await Promise.all<Trait>(paginatedTokenIds.map((id) => contract.getNodeTrait(id)));
      const rewards = await Promise.all<BigInt>(paginatedTokenIds.map((id) => contract.calculateDynamicRewards(id)));
      const taxRates = await Promise.all<BigInt>(paginatedTokenIds.map((id) => contract.calculateSlidingTaxRate(id)));

      if (!ignore) {
        setTableStats({ traits, rewards, taxRates, tokenIds: paginatedTokenIds });
        setLoading(false);
      }
    };

    fetchStats();

    const interval = setInterval(() => fetchStats(), 60000);

    return () => {
      ignore = true;
      clearInterval(interval);
    };
  }, [contract, limit, page, tokenIds]);

  return { tableStats, loading };
};

export { useTableStats };
