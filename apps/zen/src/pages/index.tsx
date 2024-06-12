import { IntroBanner, useChainData, useWallet } from '@samurai/ui';
import { contracts } from '../constants/contracts';
import StakingSection from '../components/stakingSection';

const ZenPage = (): JSX.Element => {
  const { signer, chainId } = useWallet();
  const chainData = useChainData(chainId, contracts);

  return (
    <div className="flex flex-col space-y-2rem">
      <IntroBanner title="Samurai Zen">
        <p className="pt-10">
          Liquidity pool tokens (sometimes known as liquidity provider tokens) are given to users who provide liquidity
          in liquidity pools. These tokens act as a receipt, allowing you to claim your original stake and interest
          earned. Provide liquidity to FTM/xHNR liquidity pool and deposit your LP tokens below to Samurai&apos;s native
          yield farm to earn extra xHNR rewards. Please keep in mind that for the duration of your deposit in
          Samurai&apos;s LP yield farm, you will not actually own the associated liquidity for the duration of your
          deposit. Samurai Zen is also available as a multichain feature across ETH, BSC, AVAX, and MATIC.
        </p>
        <div className="mt-20 w-max rounded-full border bg-primary bg-opacity-10 px-10 py-5 text-primary">
          Current Chain <span className="font-bold">{chainData.name}</span>
        </div>
      </IntroBanner>

      <StakingSection signer={signer} chainData={chainData} />
    </div>
  );
};

export default ZenPage;
