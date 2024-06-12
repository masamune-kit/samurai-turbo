import { TrendingUpIcon, ThermometerIcon, ClockIcon } from '@samurai/ui/assets/icons';

type StatsSectionProps = {
  experience: number;
  streak: number;
  lastPlayed: string;
};

const StatsSection = ({ experience, streak, lastPlayed }: StatsSectionProps): JSX.Element => (
  <div className="stat-box space-y-1rem p-20 md:p-3rem">
    <h1 className="text-18 font-bold text-secondary md:text-20">Your Levels Statistics</h1>
    <p>
      Player&apos;s Samurai Levels statistics will be displayed here. Players can earn XP and continue Streaks. The
      statistics are earned for sense of self-achievement and have no further usage at the moment.
    </p>
    <div className="flex flex-col space-y-1rem md:flex-row md:space-x-5rem md:space-y-0">
      <div className="flex flex-col justify-between md:w-1/3">
        <div className="flex space-x-10 py-10 font-bold text-secondary">
          <TrendingUpIcon />
          <span>Experience</span>
        </div>
        <div className="mb-4 h-2.5 w-full rounded-full bg-black">
          <div className="h-2.5 rounded-full bg-primary" style={{ width: `${(experience / 500000) * 100}%` }}></div>
        </div>
        <div className="ml-auto">{experience} XP / 500 000 XP</div>
      </div>

      <div className="flex flex-col justify-between md:w-1/3">
        <div className="flex space-x-10 py-10 font-bold text-secondary">
          <ThermometerIcon />
          <span>Streak</span>
        </div>
        <div className="mb-4 h-2.5 w-full rounded-full bg-black">
          <div className="h-2.5 rounded-full bg-primary" style={{ width: `${(streak / 20) * 100}%` }}></div>
        </div>
        <div className="ml-auto">{streak} Consecutive Streaks</div>
      </div>

      <div className="flex flex-col md:w-1/3 md:items-end">
        <div className="flex space-x-10 py-10 font-bold text-secondary">
          <ClockIcon />
          <span>Last Played</span>
        </div>
        <div>{lastPlayed}</div>
      </div>
    </div>
  </div>
);

export default StatsSection;
