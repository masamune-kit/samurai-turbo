import { IntroBanner } from '@samurai/ui';
import cn from 'classnames';

type HeroSectionProps = {
  paused: boolean;
};

const HeroSection = ({ paused }: HeroSectionProps): JSX.Element => (
  <IntroBanner title="Welcome to Samurai Levels">
    <p className="pt-10 pb-2rem">
      Samurai Levels, with the use of the proposed set of smart contracts, aims to provide an incentivised way of
      building habits and encourage individuals to learn and establish a deeper understanding of web3-related concepts
      and knowledge, through gamification of the learning experience and the Samurai protocol.
    </p>
    <div className="flex space-x-10 text-14">
      <div className="w-max rounded-full border bg-gray bg-opacity-10 px-10 py-5">Release v2.0</div>
      <div
        className={cn('w-max rounded-full border px-10 py-5', {
          'bg-primary bg-opacity-10 text-primary': paused,
          'bg-yellow bg-opacity-10 text-yellow': !paused,
        })}
      >
        Samurai Levels is {paused ? 'Paused' : 'Active'}
      </div>
    </div>
  </IntroBanner>
);

export default HeroSection;
