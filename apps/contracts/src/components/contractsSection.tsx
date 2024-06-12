import ContractCard from '@samurai/ui/components/contractCard';
import { contractsList } from '../constants/contracts';

const ContractsSection = (): JSX.Element => (
  <>
    {contractsList.map(({ title, contracts }, i) => (
      <div key={i} className="stat-box space-y-2rem p-20 md:p-2rem">
        <h1 className="text-18 font-bold text-secondary md:text-22">{title}</h1>
        <div className="space-y-1rem">
          {contracts.map(({ title, address, chain }, j) => (
            <ContractCard key={j} title={title} address={address} chain={chain} />
          ))}
        </div>
      </div>
    ))}
  </>
);

export default ContractsSection;
