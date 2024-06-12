import { useState, useEffect } from 'react';
import { contracts } from '../constants/contracts';
import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';
import { errorHandler } from '@samurai/ui/utils';
import { Button, IntroBanner, useContract, useWallet } from '@samurai/ui';
import { ZapIcon, ClockIcon, BookIcon, ArrowDownIcon } from '@samurai/ui/assets/icons';
import FeatBox from '../components/featBox';
import GeneratedText from '../components/generatedText';
import TextArea from '../components/textArea';
import Loader from '../components/loader';

const AIPage = (): JSX.Element => {
  const [slideText, setSlideText] = useState('Journalists');
  const [seedText, setSeedText] = useState<string | undefined>(undefined);
  const [generatedText, setGeneratedText] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const { signer, wallet } = useWallet();
  const token = contracts.token;
  const tokenContract = useContract(signer, token.address, token.abi);

  useEffect(() => {
    const slideTexts = ['Influencers', 'Marketing Agencies', 'Copy Writers', 'Bloggers', 'Social Media Managers'];

    const interval = setInterval(() => {
      setSlideText(slideTexts[Math.floor(Math.random() * slideTexts.length)]);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sendStringSeed = async () => {
    const res = await fetch(`https://web-production-85be.up.railway.app/api/v1/generate/${wallet}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: seedText }),
    });

    const data = await res.json();

    return data.text;
  };

  const handleApprove = async () => {
    const allowance = await tokenContract.allowance(wallet, contracts.ai.address);
    const parsedAllowance = Number(ethers.formatEther(allowance));

    if (parsedAllowance >= 200) {
      return toast('You have already approved 200 xHNR! You can generate your text!');
    }

    try {
      const tx = await tokenContract.approve(contracts.ai.address, ethers.parseEther('200'));

      await toast.promise(tx.wait(), {
        loading: 'Approval has been initiated!',
        success: 'Approval has been successful!',
        error: 'Unable to perform approval!',
      });
    } catch (e) {
      errorHandler(e);
    }
  };

  const handleOnGenerate = async () => {
    if (!seedText || seedText.length < 30) {
      return toast.error('Your text is too short!');
    }

    if (seedText.length > 1000) {
      return toast.error('Your text is too long!');
    }

    const allowance = await tokenContract.allowance(wallet, contracts.ai.address);
    const parsedAllowance = Number(ethers.formatEther(allowance));

    if (parsedAllowance < 200) {
      return toast.error('Approve the contract to refresh allowance!');
    }

    try {
      setIsLoading(true);
      if (generatedText) {
        setGeneratedText(undefined);
      }
      toast('Text Generation is in process!');
      const wordsList = await sendStringSeed();

      setGeneratedText(wordsList);
      setIsLoading(false);
      toast.success('Text Generation is complete!');
    } catch (e) {
      setIsLoading(false);
      errorHandler(e);
    }
  };

  return (
    <div>
      <IntroBanner>
        <div className="space-y-1rem py-10">
          <p>
            Samurai AI is a unique copywriting tool enabling anyone to leverage the power of Artificial Intelligence.
            Simply approve the contract before usage, followed by entering your text prompt for completion. Once
            you&apos;re satisfied with the prompt, click on Generate Text.
          </p>
          <p>
            A cost of 200 xHNR will be automatically taken from your wallet without confirmation and a completed text of
            around 400 characters long will be returned. If you wish to generate another text, you must approve the
            contract again to refresh the allowance that the contract is able to automatically charge you.
          </p>
        </div>
      </IntroBanner>

      <div className="mt-4rem mb-3rem flex flex-col items-center justify-center text-center text-30 font-bold md:text-35">
        <h1 className="text-secondary">Samurai AI can be used by...</h1>
        <h2 className="my-1rem flex h-70 justify-center text-primary">{slideText}</h2>
      </div>

      <div className="flex flex-col justify-between space-y-1rem py-2rem md:flex-row md:space-y-0 md:space-x-1rem">
        <FeatBox
          icon={<ZapIcon />}
          title={'Increase the quality of your content'}
          description={
            'Leverage the power of AI to produce high quality, refined content and forget about content ideation.'
          }
        />
        <FeatBox
          icon={<ClockIcon />}
          title={'Automate content creation'}
          description={'Generate high quality copy for your needs and delegate the creative process to Samurai AI.'}
        />
        <FeatBox
          icon={<BookIcon />}
          title={'Make content writing & ideation faster'}
          description={
            'Streamline and scale content production by leveraging the power of AI & focus on what really matters.'
          }
        />
      </div>

      <div className="flex flex-col items-center space-y-2rem py-3rem md:flex-row md:space-x-1rem md:space-y-0">
        <h1 className="flex h-50 w-full transform items-center justify-center space-x-10 rounded-md bg-white p-10 text-center text-20 font-bold text-black transition duration-500 ease-in-out hover:-translate-y-10 md:h-70 md:w-400">
          Create content swiftly
        </h1>
        <h1 className="flex h-50 w-full transform items-center justify-center space-x-10 rounded-md bg-white p-10 text-center text-20 font-bold text-black transition duration-500 ease-in-out hover:-translate-y-10 md:h-70 md:w-400">
          Expand your audience
        </h1>
        <h1 className="flex h-50 w-full transform items-center justify-center space-x-10 rounded-md bg-white p-10 text-center text-20 font-bold text-black transition duration-500 ease-in-out hover:-translate-y-10 md:h-70 md:w-400">
          Grow your email lists
        </h1>
        <h1 className="flex h-50 w-full transform items-center justify-center space-x-10 rounded-md bg-white p-10 text-center text-20 font-bold text-black transition duration-500 ease-in-out hover:-translate-y-10 md:h-70 md:w-400">
          Complete your thesis
        </h1>
      </div>

      <div className="mx-auto mt-2rem flex w-max animate-bounce justify-center rounded-full bg-white p-10 text-black">
        <ArrowDownIcon />
      </div>

      <div className="flex w-full flex-col items-center">
        <TextArea setSeedText={setSeedText} isLoading={false} />
        <div className="flex w-full space-x-1rem py-1rem">
          <Button className="w-full" type="secondary" onClick={handleApprove}>
            Approve
          </Button>
          <Button className="w-full" onClick={handleOnGenerate}>
            Generate Text
          </Button>
        </div>
        {generatedText && seedText ? (
          <GeneratedText seedText={seedText} generatedText={generatedText} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AIPage;
