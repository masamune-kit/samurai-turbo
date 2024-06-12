import { Button, Link } from '@samurai/ui';

const IntroSection = (): JSX.Element => (
  <div className="flex flex-col items-center justify-between md:flex-row">
    <h1 className="text-center text-22 font-bold text-secondary md:text-26">Samurai Protocol Contracts and Wallets</h1>
    <div className="space-x-1rem py-20 md:space-x-10 md:py-0">
      <Link href="https://dune.com/samuraifi/protocol" accented={false}>
        <Button type="secondary">Dune Dashboard</Button>
      </Link>
      <Link href="https://treasury.samurai.financial" accented={false}>
        <Button type="secondary">View Treasury</Button>
      </Link>
    </div>
  </div>
);

export default IntroSection;
