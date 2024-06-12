import { Button, Link } from '@samurai/ui';
import { SakuraIcon } from '@samurai/ui/assets/icons';

const HeroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2rem text-center md:mt-5rem md:mb-8rem md:space-y-0">
      <h1 className="max-w-40rem text-24 font-bold leading-tight text-secondary md:text-60">
        Utility NFT Nodes as a Service
      </h1>
      <p className="max-w-30rem py-2rem text-16 text-secondary md:text-18">
        Unique NFT nodes combining blockchain infrastructure utility and DeFi participation.
      </p>
      <div className="flex w-full flex-col items-center justify-center space-y-1rem py-1rem md:max-w-400 md:flex-row md:space-y-0 md:space-x-1rem">
        <Link className="w-full" accented={false} external={false} href="http://app.samurai.financial">
          <Button type="secondary" className="w-full">
            Launch App
          </Button>
        </Link>
        <Link
          className="w-full"
          accented={false}
          href="https://spooky.fi/#/swap?inputCurrency=0xd5aa2a5AcFC000c08E8dab3Af830ed4f09120478"
        >
          <Button className="flex w-full items-center justify-center space-x-10">
            <SakuraIcon className="h-24 w-24" />
            <span>Get xHonour</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
