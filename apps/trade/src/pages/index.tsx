import { useWallet, useContract, useStats, useTradeMode } from '@samurai/ui';
import { contracts } from '../constants/contracts';
import TableSection from '../components/tableSection';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import ControlSection from '../components/controlSection';

const TradePage = (): JSX.Element => {
  const trade = contracts.trade;
  const nft = contracts.nft;
  const token = contracts.token;

  const { signer, wallet } = useWallet();

  const nftContract = useContract(signer, nft.address, nft.abi);
  const tradeContract = useContract(signer, trade.address, trade.abi);
  const tokenContract = useContract(signer, token.address, token.abi);

  const { tradeData, statAddress, mode, setMode, handleApprove, handleTransact } = useTradeMode(
    wallet,
    tradeContract,
    nftContract,
    tokenContract
  );
  const { stats } = useStats(nftContract, statAddress, 100);
  const [selectedTokenIds, setSelectedTokenIds] = useState<string[]>([]);

  const handleSetMode = useCallback(
    (mode: 'BUY' | 'SELL') => {
      toast.success(`Switched to ${mode} event mode!`);
      setMode(mode);
      setSelectedTokenIds([]);
    },
    [setMode]
  );

  return (
    <div className="flex flex-col space-y-2rem">
      <ControlSection
        mode={mode}
        tradeData={tradeData}
        selectedTokenIds={selectedTokenIds}
        handleApprove={handleApprove}
        handleTransact={handleTransact}
      />
      <TableSection
        contract={nftContract}
        tokenIds={stats.tokenIds}
        selectedTokenIds={selectedTokenIds}
        setSelectedTokenIds={setSelectedTokenIds}
        mode={mode}
        handleSetMode={handleSetMode}
      />
    </div>
  );
};

export default TradePage;
