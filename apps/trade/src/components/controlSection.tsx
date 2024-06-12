import { Button, IntroBanner } from '@samurai/ui';
import cn from 'classnames';

type ControlSectionProps = {
  mode: string;
  tradeData: {
    price: number;
    isPaused: boolean;
  };
  selectedTokenIds: string[];
  handleApprove: () => void;
  handleTransact: (selectedTokenIds: string[]) => void;
};

const ControlSection = ({
  mode,
  tradeData,
  selectedTokenIds,
  handleApprove,
  handleTransact,
}: ControlSectionProps): JSX.Element => (
  <IntroBanner title="Samurai Trade">
    <div className="space-y-14 pt-10">
      <p>
        Samurai Trade allows you to sell your Node NFTs for a specified SELL Price or buy Node NFTs for a specified BUY
        Price using the OTC Trade Contract. The indicator below will signal whether BUY or SELL events are currently
        active.
      </p>

      <div>
        <div>NFT {mode} Price</div>
        <div className="text-20 font-bold text-secondary md:text-24">{tradeData.price} xHNR</div>
      </div>
      <div>
        <div>{mode} Total</div>
        <div className="text-20 font-bold text-secondary md:text-24">
          {selectedTokenIds.length * tradeData.price} xHNR{' '}
          <span className="text-16 text-gray md:text-20">({selectedTokenIds.length}) Nodes</span>
        </div>
      </div>
      <div className="flex flex-col space-y-1rem md:flex-row md:space-y-0 md:space-x-1rem">
        <div
          className={cn('w-max rounded-full border px-10 py-5 text-12', {
            'border-primary bg-primary/[.15] bg-opacity-5 text-primary': tradeData.isPaused,
          })}
        >
          {mode} Event is {tradeData.isPaused ? 'Not Active' : 'Active'}
        </div>
        <Button className="md:py-5" type="secondary" onClick={handleApprove}>
          Approve
        </Button>
        <Button className="md:py-5" onClick={() => handleTransact(selectedTokenIds)}>
          Execute Trade
        </Button>
      </div>
    </div>
  </IntroBanner>
);

export default ControlSection;
