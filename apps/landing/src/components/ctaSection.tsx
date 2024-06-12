import { Button, Link } from '@samurai/ui';
import { SakuraIcon } from '@samurai/ui/assets/icons';

const CTASection = (): JSX.Element => (
  <div className="flex flex-col items-center justify-center">
    <div className="text-center text-36 font-bold leading-snug text-secondary md:text-48">Become the Samurai!</div>
    <div className="p-35 text-center text-18">
      Your journey starts now, brave Samurai. Are you ready to enter the DeFi battlefield?
    </div>
    <div className="flex space-x-20 p-10 md:p-20">
      <Link accented={false} href="https://spooky.fi/#/swap?inputCurrency=0xd5aa2a5AcFC000c08E8dab3Af830ed4f09120478">
        <Button type="secondary" className="flex min-w-150 items-center justify-center space-x-5">
          <SakuraIcon className="h-20 w-20" />
          <span>Get xHNR</span>
        </Button>
      </Link>
      <Link accented={false} href="https://discord.com/invite/meDYK5qeRt">
        <Button type="primary" className="min-w-150">
          Join Discord
        </Button>
      </Link>
    </div>
  </div>
);

export default CTASection;
