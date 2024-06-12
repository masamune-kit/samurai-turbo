import { Button, IntroBanner } from '@samurai/ui';
import { GovernanceIcon } from '@samurai/ui/assets/icons';

const HeroSection = (): JSX.Element => (
  <IntroBanner title="Samurai Governance">
    <p className="pt-1rem">
      Samurai Governance introduces a formalized path to the decentralization and autonomy of the Samurai Protocol.
      Covering governance mechanisms and incentives, it aims to share a vision of alignment between various participants
      within the Samurai ecosystem, protocol functionality and the xHNR token & nodes as a core element of the Samurai
      Protocol.
    </p>
    <Button className="mt-3rem flex items-center space-x-10">
      <GovernanceIcon className="h-24 w-24" />
      <span>Join Samurai Governance</span>
    </Button>
  </IntroBanner>
);

export default HeroSection;
