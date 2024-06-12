import { Modal } from '@samurai/ui';
import getUuid from 'uuid-by-string';

type RpcModalProps = {
  tokenId: string;
  hideRpcIndex: () => void;
};

const RpcModal = ({ tokenId, hideRpcIndex }: RpcModalProps): JSX.Element => {
  const handleClose = () => {
    hideRpcIndex();
  };

  const chains = [
    { name: 'Fantom Opera', token: 'ftm' },
    { name: 'Ethereum', token: 'eth' },
    { name: 'Arbitrum', token: 'arb' },
    { name: 'Polygon', token: 'matic' },
  ];

  return (
    <Modal title="RPC Endpoints" handleClose={handleClose}>
      <div>
        Your provisioned Samurai Node RPC Endpoints. <b>Note:</b> We do NOT recommend using the RPC endpoints for
        critical production ready applications. No level of high infrastructure availability is guaranteed for RPC
        endpoints and we strongly advise to use them with maximum caution.
      </div>
      <div className="space-y-2rem py-3rem">
        {chains.map((chain, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex flex-col justify-between md:flex-row">
              <div className="font-bold text-secondary">{chain.name}</div>
            </div>
            <div>{`https://backend.samurai.financial/rpc/${chain.token}/${tokenId}/${getUuid(tokenId, 5)}`}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default RpcModal;
