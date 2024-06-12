import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export type LevelsStats = {
  paused: boolean;
  experience: number;
  streak: number;
  lastPlayed: string;
};

const useLevelsStats = (levelsContract: ethers.Contract, wallet: string | null) => {
  const [levelsStats, setLevelsStats] = useState<LevelsStats>({
    paused: true,
    experience: 0,
    streak: 1,
    lastPlayed: 'Never',
  });

  useEffect(() => {
    if (!wallet) {
      return;
    }

    const fetchStats = async () => {
      const stats: {
        experience: BigInt;
        streak: BigInt;
        lastClaimed: BigInt;
      } = await levelsContract.users(wallet);
      const paused: boolean = await levelsContract.paused();

      setLevelsStats({
        paused,
        experience: Number(stats.experience),
        streak: Number(stats.streak),
        lastPlayed: new Date(Number(stats.lastClaimed) * 1000).toLocaleString(),
      });
    };

    fetchStats();
  }, [levelsContract, wallet]);

  return levelsStats;
};

export { useLevelsStats };
