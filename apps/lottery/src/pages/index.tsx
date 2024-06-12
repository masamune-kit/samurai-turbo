import { Button, IntroBanner, useContract, useLottery, useStats, useWallet } from '@samurai/ui';
import { CrosshairIcon, TargetIcon } from '@samurai/ui/assets/icons';
import { contracts } from '../constants/contracts';

const LotteryPage = (): JSX.Element => {
  const lottery = contracts.lottery;
  const nft = contracts.nft;
  const token = contracts.token;

  const { signer, wallet } = useWallet();

  const nftContract = useContract(signer, nft.address, nft.abi);
  const tokenContract = useContract(signer, token.address, token.abi);
  const lotteryContract = useContract(signer, lottery.address, lottery.abi);

  const { stats } = useStats(nftContract, wallet);

  const { lotteryBalance, handleApprove, handlePlay } = useLottery(stats.tokenIds, tokenContract, lotteryContract);

  return (
    <div className="flex flex-col space-y-2rem">
      <IntroBanner title="Samurai Lottery">
        <div className="space-y-15 pt-10">
          <p>
            Samurai Lottery allows its NFT node holders to try their luck. Each game has a fixed play cost of 500 xHNR
            tokens, and the entire game process is fully managed by the protocol and its underlying smart contracts.
            Players are required to hold at least 1 NFT and 500 xHNR in order to be eligible to play.
          </p>
          <div>
            <div>Available Rewards in Pool</div>
            <div className="text-20 font-bold text-secondary md:text-24">{lotteryBalance} xHNR</div>
          </div>
          <div>
            <div>Winning Reward</div>
            <div className="text-20 font-bold text-secondary md:text-24">1000 xHNR</div>
          </div>
        </div>
      </IntroBanner>

      <div className="flex flex-col items-center justify-center py-1rem">
        <h1 className="text-center text-18 font-bold text-secondary md:text-26">Select between 2 game modes</h1>
        <p className="p-15 text-center">
          Samurai Lottery currently offers 2 possible game modes. You can choose either depending on your preferences.
        </p>
      </div>

      <div className="flex flex-col space-y-2rem md:flex-row md:space-x-2rem md:space-y-0">
        <div className="stat-box max-w-1/2 flex transform flex-col items-center justify-center space-y-2rem p-[1.5rem] p-3rem transition duration-300 ease-in-out hover:-translate-y-10 hover:scale-[105%]">
          <TargetIcon className="scale-150 transform text-primary" />
          <h1 className="font-bold text-secondary">Play Lottery using Nodes</h1>
          <p>
            Play the Samurai Lottery either win 1000 xHNR or lose 500 xHNR tokens in unclaimed rewards. Should you win,
            the reward will be directly sent to your wallet whereas a defeat will impose a cost on your unclaimed
            rewards. By using your node NFTs to play Samurai Lottery, your unclaimed rewards will not be affected by the
            claims tax mechanism.
          </p>
          <Button onClick={() => handlePlay('nodes')}>Play + Nodes</Button>
        </div>

        <div className="stat-box max-w-1/2 flex transform flex-col items-center justify-center space-y-2rem p-[1.5rem] p-3rem transition duration-300 ease-in-out hover:-translate-y-10 hover:scale-[105%]">
          <CrosshairIcon className="scale-150 transform text-yellow" />
          <h1 className="font-bold text-secondary">Play Lottery using xHNR</h1>
          <p>
            Play the Samurai lottery and either win 1000 xHNR or lose 500 xHNR tokens. Make sure that you own at least 1
            Honour Node NFT and have at least 500 xHNR tokens to start with. Whether you win or lose, the amount will be
            paid to or taken directly from your connected wallet respectively. Connect your wallet & approve the
            contract once and press Play + xHNR.
          </p>
          <div className="flex space-x-1rem">
            <Button type="secondary" onClick={handleApprove}>
              Approve
            </Button>
            <Button onClick={() => handlePlay('tokens')}>Play + xHNR</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryPage;
