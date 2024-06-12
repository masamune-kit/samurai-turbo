import { useContract, useLevelsStats, useWallet } from '@samurai/ui';
import { contracts } from '../constants/contracts';
import HeroSection from '../components/heroSection';
import StatsSection from '../components/statsSection';
import QuestionsSection from '../components/questionsSection';
import LeaderboardSection from '../components/leaderboardSection';

const LevelsPage: React.FC = () => {
  const levels = contracts.levels;
  const { signer, wallet } = useWallet();
  const levelsContract = useContract(signer, levels.address, levels.abi);
  const levelsStats = useLevelsStats(levelsContract, wallet);

  return (
    <div className="flex flex-col space-y-2rem">
      <HeroSection paused={levelsStats.paused} />
      <LeaderboardSection />
      <StatsSection
        experience={levelsStats.experience}
        streak={levelsStats.streak}
        lastPlayed={levelsStats.lastPlayed}
      />
      <QuestionsSection wallet={wallet} />
    </div>
  );
};

export default LevelsPage;
