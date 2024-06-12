import { Button, Link } from '@samurai/ui';
import { GovernanceIcon } from '@samurai/ui/assets/icons';

const PowerSection = (): JSX.Element => (
  <div className="my-2rem flex flex-col items-center">
    <h1 className="mb-1rem text-24 font-bold text-secondary md:text-40">Governance Power</h1>
    <h2 className="max-w-800 pb-2rem text-center">
      xHNR token holders receive governance powers proportionally to the sum of their balance. There are initially two
      powers associated with each governance token
    </h2>

    <div className="my-3rem flex flex-col items-center p-20 md:flex-row md:space-x-2rem md:divide-x-2 md:p-0">
      <div className="max-w-[350px]">
        <h1 className="text-18 font-bold text-secondary md:text-20">Voting</h1>
        <p>The voting power which is used to vote for or against existing proposals.</p>
      </div>
      <div className="max-w-[350px] pt-6rem md:pl-3rem md:pt-0">
        <h1 className="text-18 font-bold text-secondary md:text-20">Proposal</h1>
        <p>The proposal power that gives access to creating and sustaining a proposal.</p>
      </div>
    </div>

    <h3 className="mt-5rem mb-1rem max-w-650 pt-3rem text-center text-20 font-bold text-secondary md:text-24">
      The governance site and all of its current and future proposals can be found on Snapshot
    </h3>
    <Link className="py-1rem" href="https://snapshot.org/#/samuraifi.eth" accented={false}>
      <Button className="flex items-center space-x-10">
        <GovernanceIcon className="h-24 w-24" />
        <span>Participate in Governance</span>
      </Button>
    </Link>
  </div>
);

export default PowerSection;
