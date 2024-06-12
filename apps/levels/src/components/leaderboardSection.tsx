import React, { useEffect, useState } from 'react';
import { truncate } from '@samurai/ui/utils';

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;

type LeaderboardEntryProps = {
  wallet: string;
  streak: number;
  experience: number;
};

const LeaderboardEntry = ({ wallet, streak, experience }: LeaderboardEntryProps) => (
  <div className="flex justify-between rounded-md bg-white bg-opacity-[5%] px-15 py-10 text-secondary transition duration-300 ease-in-out hover:bg-opacity-[10%]">
    <div>{truncate(wallet, 7)}</div>
    <div>{streak} Streaks</div>
    <div>{experience} XP</div>
  </div>
);

const LeaderboardSection = (): JSX.Element => {
  const [entries, setEntries] = useState<LeaderboardEntryProps[]>([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      const res = await fetch(`${BE_URL}/api/v1/levels/leaderboard`);
      setEntries(await res.json());
    };

    getLeaderboard();
  }, []);

  return (
    <div className="stat-box space-y-1rem p-20 md:p-3rem">
      <h1 className="text-18 font-bold text-secondary md:text-20">Leaderboard</h1>
      <p>The Top 5 Levels Players</p>
      <div className="flex flex-col space-y-10">
        {entries.length < 1 ? (
          <div>No players yet...</div>
        ) : (
          entries.map((entry, idx) => (
            <React.Fragment key={idx}>
              <LeaderboardEntry wallet={entry.wallet} streak={entry.streak} experience={entry.experience} />
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default LeaderboardSection;
