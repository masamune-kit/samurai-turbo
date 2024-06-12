import { ethers } from 'ethers';
import { Button, ChainData, useZenContracts, useZenMode } from '@samurai/ui';
import { ArrowDownIcon } from '@samurai/ui/assets/icons';
import aave from '@samurai/ui/assets/images/zen/aave.webp';
import eth from '@samurai/ui/assets/images/zen/eth.png';
import ftm from '@samurai/ui/assets/images/zen/ftm.png';
import sushi from '@samurai/ui/assets/images/zen/sushi.jpeg';
import bnb from '@samurai/ui/assets/images/zen/bnb.webp';
import curve from '@samurai/ui/assets/images/zen/curve.png';
import avax from '@samurai/ui/assets/images/zen/avax.webp';
import ohm from '@samurai/ui/assets/images/zen/olympus.png';
import ldo from '@samurai/ui/assets/images/zen/lido.png';
import rpl from '@samurai/ui/assets/images/zen/rpl.png';
import samuraiLogo from '@samurai/ui/assets/images/logo.png';
import Image from 'next/image';
import { useState } from 'react';

type StakingSectionProps = {
  signer: ethers.JsonRpcSigner | null;
  chainData: ChainData;
};

const StakingSection: React.FC<StakingSectionProps> = ({ signer, chainData }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { stakingContract, multichainContract, wrappedTokenContract, lpTokenContracts } = useZenContracts(
    signer,
    chainData
  );
  const {
    lpTokenIndex,
    stakingState,
    handleAction,
    handleApprove,
    handleMultichainSwap,
    lpAmount,
    wxHNRAmount,
    setLpAmount,
    setLpTokenIndex,
    setWxHNRAmount,
  } = useZenMode(signer, stakingContract, multichainContract, wrappedTokenContract, lpTokenContracts);

  const getCorrectLogos = () => {
    switch (chainData.symbol) {
      case 'ftm':
        return [[ftm, samuraiLogo]];
      case 'eth': {
        return [
          [ohm, eth],
          [ldo, eth],
          [rpl, eth],
        ];
      }
      case 'avax':
        return [[curve, avax]];
      case 'bsc':
        return [[sushi, bnb]];
      case 'matic':
        return [[aave, eth]];
    }
  };

  const statCards = [
    {
      value: stakingState.lpBalance,
      label: 'Total Tokens Locked',
      unit: chainData.lpToken[lpTokenIndex].unit,
    },
    {
      value: stakingState.xHnrPerBlock,
      label: 'Rewards Per Block',
      unit: chainData.symbol === 'ftm' ? 'xHNR' : 'wxHNR',
    },
    {
      value: stakingState.pendingRewards,
      label: 'Your Pending Rewards',
      unit: chainData.symbol === 'ftm' ? 'xHNR' : 'wxHNR',
    },
    {
      value: stakingState.amountStaked,
      label: 'Your Amount Staked',
      unit: chainData.lpToken[lpTokenIndex].unit,
    },
    {
      value: stakingState.currentBlock,
      label: 'Current Block',
      unit: undefined,
    },
    {
      value: stakingState.startingBlock,
      label: 'Starting Block',
      unit: undefined,
    },
    {
      value: stakingState.endingBlock,
      label: 'Ending Block',
      unit: undefined,
    },
  ];

  return (
    <div className="space-y-2rem">
      <div className="flex flex-col space-y-2rem md:flex-row md:space-x-2rem md:space-y-0">
        <div className="stat-box space-y-1rem p-[1.5rem] p-3rem md:w-1/3">
          {statCards.map(({ value, label, unit }, i) => (
            <div key={i}>
              <div>{label}</div>
              <div className="flex space-x-5 text-24 font-bold text-secondary">
                <div>{value}</div>
                {unit && <div className="text-20 text-gray">{unit}</div>}
              </div>
            </div>
          ))}
          <div>Blockchain Data Refreshes Every 5s</div>
        </div>

        <div className="stat-box space-y-2rem p-[1.5rem] p-3rem md:w-2/3">
          <div>
            <h1 className="text-18 font-bold text-secondary md:text-20">Deposit or Withdraw</h1>
            <p>
              Ensure that you hold the correct LP Tokens before depositing. You can switch chains using your connected
              wallet interface.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex justify-end text-14 font-[600] text-gray">
              {Number(stakingState.userLpBalance).toPrecision(3) ?? '0'} {chainData.lpToken[lpTokenIndex].unit} in your
              wallet
            </div>
            <div className="flex w-full items-center rounded-md border border-gray bg-transparent py-5 px-1rem ">
              <div className="flex w-full space-x-30">
                <div className="relative flex">
                  {(() => {
                    const logos = getCorrectLogos()[lpTokenIndex];

                    return (
                      <>
                        <Image src={logos[0]} className="h-40 w-40 rounded-full border-2 border-primary" alt="" />
                        <Image
                          src={logos[1]}
                          className="absolute left-[1.7rem] h-40 w-40 rounded-full border-2 border-primary bg-primary"
                          alt=""
                        />
                      </>
                    );
                  })()}
                </div>
                {lpTokenContracts.length > 1 && (
                  <div className="relative flex flex-col items-center justify-center">
                    <div onClick={() => setShowOptions(!showOptions)} className="cursor-pointer pr-5">
                      <ArrowDownIcon />
                    </div>
                    {showOptions && (
                      <div className="absolute top-50 flex w-100 flex-col space-y-10 rounded-md border bg-white p-10">
                        {lpTokenContracts.map((_, idx) => {
                          const logos = getCorrectLogos()[idx];

                          if (idx !== lpTokenIndex) {
                            return (
                              <div
                                key={idx}
                                className="relative flex w-full cursor-pointer rounded-sm p-5 hover:bg-white"
                                onClick={() => {
                                  setShowOptions(false);
                                  setLpTokenIndex(idx);
                                }}
                              >
                                <Image
                                  src={logos[0]}
                                  className="h-40 w-40 rounded-full border-2 border-primary"
                                  alt=""
                                />
                                <Image
                                  src={logos[1]}
                                  className="absolute left-[2rem] h-40 w-40 rounded-full border-2 border-primary bg-primary"
                                  alt=""
                                />
                              </div>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <input
                className="ml-auto w-full max-w-[410px] bg-transparent text-right text-18"
                required
                value={lpAmount}
                placeholder={`Amount of ${chainData.lpToken[lpTokenIndex].unit} to stake`}
                onChange={(e) => setLpAmount(Number(e.target.value))}
              />
              <div
                className="ml-1rem cursor-pointer text-14 font-bold"
                onClick={() => setLpAmount(Number(Number(stakingState.userLpBalance).toPrecision(3)))}
              >
                MAX
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-10 pt-1rem">
            <Button type="secondary" onClick={() => handleApprove('staking')}>
              Approve
            </Button>
            <Button onClick={() => handleAction('DEPOSIT')}>Deposit</Button>
            <Button onClick={() => handleAction('WITHDRAW')}>Withdraw</Button>
          </div>
        </div>
      </div>

      <div className="stat-box p-3rem">
        {chainData.symbol !== 'ftm' ? (
          <div className="mx-auto max-w-[700px]">
            <div className="pb-10 text-18 font-bold text-secondary md:text-20">Swap wxHNR to xHNR</div>
            <div className="flex w-full items-center rounded-md border border-gray bg-transparent py-5 px-1rem ">
              <input
                className="ml-auto w-full max-w-[420px] bg-transparent py-5 text-right text-18"
                required
                value={wxHNRAmount}
                placeholder="Amount of wxHNR to exchange"
                onChange={(e) => setWxHNRAmount(Number(e.target.value))}
              />
              <div
                className="ml-1rem cursor-pointer text-14 font-bold"
                onClick={() => setWxHNRAmount(Number(Number(stakingState.userLpBalance).toPrecision(3)))}
              >
                MAX
              </div>
            </div>
            <div className="flex w-full justify-end space-x-1rem pt-1rem">
              <Button type="secondary" onClick={() => handleApprove('multichain')}>
                Approve
              </Button>
              <Button onClick={handleMultichainSwap}>Swap</Button>
            </div>
          </div>
        ) : (
          <h1 className="text-18 font-bold text-secondary">
            Switch to ETH, AVAX, MATIC, or BSC to access Multichain Swap
          </h1>
        )}
      </div>
    </div>
  );
};

export default StakingSection;
