import { Button, IntroBanner, Link, useContract, useWallet } from '@samurai/ui';
import { contracts } from '../constants/contracts';
import Home from './api/home';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { errorHandler } from '@samurai/ui/utils';
import { ethers } from 'ethers';

const IndexPage = (): JSX.Element => {
  const subscription = contracts.subscription;
  const token = contracts.token;
  const { signer } = useWallet();
  const [isActive, setIsActive] = useState(false);
  const subscriptionContract = useContract(signer, subscription.address, subscription.abi);
  const tokenContract = useContract(signer, token.address, token.abi);

  useEffect(() => {
    if (!subscriptionContract || !signer) {
      return;
    }

    const checkSubscription = async () => {
      const isSubscribed = await subscriptionContract.isSubscribed();
      setIsActive(false);
    };

    checkSubscription();
  }, [signer, subscriptionContract]);

  const handleApprove = useCallback(async () => {
    try {
      const tx = await tokenContract.approve(subscription.address, ethers.parseEther('100000'));

      await toast.promise(tx.wait(), {
        loading: 'Approval has been initiated!',
        success: 'Approval has been successful!',
        error: 'Unable to perform approval!',
      });
    } catch (e) {
      errorHandler(e);
    }
  }, [subscription.address, tokenContract]);

  const handleSubscription = async () => {
    try {
      const tx = await subscriptionContract.subscribe();

      await toast.promise(tx.wait(), {
        loading: 'Subscription has been initiated!',
        success: 'Subscription has been successful!',
        error: 'Unable to subscribe to Samurai Chat!',
      });

      setIsActive(true);
    } catch (e) {
      errorHandler(e);
    }
  };

  return !isActive ? (
    <div className="mx-auto flex max-w-[1300px] flex-col space-y-2rem">
      <IntroBanner title="Welcome to Samurai Chat">
        <p className="pt-20 pb-2rem">
          Samurai Chat enables use of ChatGPT with a suite of enhanced and improved, custom features such as prompt
          library, history search, folders, integrations and much more. The features of Samurai Chat simplify the use of
          ChatGPT by elevating the existing experience and enable Samurai Node NFT holders to leverage and harness the
          power and capabilites of OpenAI to an unprecedented extent.
        </p>
        <div className="flex space-x-10 text-14">
          <div className="w-max rounded-full border bg-gray bg-opacity-10 px-10 py-5">Release v1.0</div>
        </div>
      </IntroBanner>

      <div className="stat-box p-40">
        <div className="text-22 font-bold text-secondary">Subscription</div>
        <p className="pt-20">
          Your currently connected wallet does not have an active subscription to use Samurai Chat. You can subscribe to
          use Samurai Chat for 100 000 xHNR. The subscription lasts approximately 28 days, and requires your wallet to
          hold a minimum of 100 Honour Nodes to activate. You also need to bring your own OpenAI API Key, which can be
          found{' '}
          <Link href="https://platform.openai.com/account/api-keys" underline>
            here
          </Link>
          . The API Key is only stored in the client application for the sole purpose of interacting with OpenAI&apos;s
          API, and is never sent to any centralised server.
        </p>

        <div className="flex space-x-10 py-1rem">
          <div className="w-max rounded-full border bg-primary bg-opacity-10 px-10 py-5 text-primary">
            Bring Your Own Key
          </div>
          <div className="w-max rounded-full border bg-primary bg-opacity-10 px-10 py-5 text-primary">28 Days</div>
          <div className="w-max rounded-full border bg-primary bg-opacity-10 px-10 py-5 text-primary">100 000 xHNR</div>
          <div className="w-max rounded-full border bg-primary bg-opacity-10 px-10 py-5 text-primary">100 Nodes</div>
        </div>

        <div className="space-x-1rem pt-2rem">
          <Button type="secondary" onClick={handleApprove}>
            Approve Subscription
          </Button>
          <Button onClick={handleSubscription}>Subscribe for 28 days</Button>
        </div>
      </div>
    </div>
  ) : (
    <Home />
  );
};

export default IndexPage;
