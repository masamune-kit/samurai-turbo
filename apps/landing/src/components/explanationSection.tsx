import { Link } from '@samurai/ui';
import { BattleOneIcon, BattleThreeIcon, BattleTwoIcon } from '@samurai/ui/assets/icons';

const ExplanationSection = (): JSX.Element => (
  <div className="flex flex-col items-center space-y-1rem">
    <h1 className="text-24 font-bold text-secondary md:text-40">How does it work?</h1>
    <h2 className="text-center text-18">
      Find out how Samurai and its <b>xHNR</b> token function
    </h2>

    <div className="flex flex-col space-y-5rem pt-3rem">
      <div className="flex flex-col items-center space-y-2rem text-18 md:flex-row md:space-y-0 md:space-x-2rem">
        <BattleOneIcon />
        <div className="max-w-[400px]">
          Samurai NFT nodes can be considered a unique gateway to the world of DeFi, NFTs and blockchain infrastructure.
        </div>
      </div>

      <div className="flex flex-col-reverse items-center text-18 md:flex-row md:space-x-2rem">
        <div className="mt-2rem max-w-[400px] md:mt-0">
          xHNR tokens are at the forefront of the protocol&apos;s governance structure. The protocol issues xHNR token
          emissions to Samurai NFT holders and liquidity providers. The emissions are continously refined and adjusted.
        </div>
        <BattleTwoIcon />
      </div>

      <div className="flex flex-col items-center space-y-2rem text-18 md:flex-row md:space-y-0 md:space-x-2rem">
        <BattleThreeIcon />
        <div className="max-w-[400px]">
          To learn more about the functionality of the Samurai protocol, its NFT nodes, governance and much more click{' '}
          <Link className="text-primary" href="https://samurainodes.gitbook.io/docs/">
            here.
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ExplanationSection;
