import React, { useEffect, useState } from 'react';
import { MediumIcon, TwitterIcon, DiscordIcon, BookIcon, LogoTextIcon } from '../assets/icons';
import { Link } from '../clickables';
import TermsModal from '../components/termsModal';
import { useComponentVisible } from '../hooks';
import { useTermsAcceptance } from '../hooks/useTermsAcceptance';
import DisclaimersModal from '../components/disclaimersModal';
import { Modal } from '../components';
import { restrictionDisclaimer } from '../constants/restrictionDisclaimer';

const isProduction = process.env.NODE_ENV === 'production';

type FooterProps = {
  forceRestriction: boolean;
};

const Footer: React.FC<FooterProps> = ({ forceRestriction }) => {
  const { isVisible, toggleVisible } = useComponentVisible(false);
  const { termsAccepted, handleAcceptTerms } = useTermsAcceptance();
  const [showDisclaimers, setShowDisclaimers] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);

  useEffect(() => {
    if (!isProduction || !forceRestriction) {
      return;
    }

    const fetchInfo = async () => {
      const res = await fetch('https://backend.samurai.financial/api/v1/info');
      // const res = await fetch('http://localhost:3000/api/v1/info');
      const data = await res.json();

      setIsRestricted(data.isRestricted);
    };

    fetchInfo();
  }, [forceRestriction, isRestricted]);

  useEffect(() => {
    toggleVisible(!termsAccepted);
  }, [termsAccepted, toggleVisible]);

  return (
    <footer className="items-between mx-auto mt-8rem flex flex-col justify-between px-30 pt-3rem pb-10rem md:mt-15rem md:max-w-[1800px] md:px-5rem">
      <LogoTextIcon className="mb-20 w-130" />
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col justify-between space-y-10">
          <div className="max-w-500 text-14">
            <span className="font-bold text-primary">Disclaimer:</span> Samurai is an experimental software. The reward
            rate, node price, and any other function can change at any given time without prior notice. Click{' '}
            <Link href="https://samurainodes.gitbook.io/docs/" underline>
              here
            </Link>{' '}
            to find out more.
          </div>
          <div className="max-w-500 text-14">
            Do your own research before investing. Investing is risky and may result in monetary loss. Samurai is beta
            software and may contain bugs. By using Samurai, you agree that the Samurai Financial team is not
            responsible for any financial losses from investing in Samurai (KTNA, HNR).
          </div>
          <div onClick={() => toggleVisible()}>
            <Link href="/" external={false} underline>
              Terms of Service
            </Link>
          </div>
          <div onClick={() => setShowDisclaimers(true)}>
            <Link href="/" external={false} underline>
              Disclaimers and Risks
            </Link>
          </div>
        </div>
        <div className="mt-3rem flex items-center justify-center space-x-2rem text-secondary md:mt-0 md:space-x-20">
          <Link href="https://samurainodes.gitbook.io/docs/">
            <BookIcon />
          </Link>
          <Link href="https://medium.com/@samurainodes">
            <MediumIcon className="h-30 w-30 p-5" />
          </Link>
          <Link href="https://twitter.com/samurainodes">
            <TwitterIcon />
          </Link>
          <Link href="https://discord.gg/meDYK5qeRt">
            <DiscordIcon />
          </Link>
        </div>
      </div>
      {isVisible && (
        <TermsModal termsAccepted={termsAccepted} toggleVisible={toggleVisible} handleAcceptTerms={handleAcceptTerms} />
      )}
      {!isVisible && isRestricted && (
        <Modal title="You are accessing Samurai Financial from a restricted area">
          <p className="whitespace-pre-line">{restrictionDisclaimer}</p>
        </Modal>
      )}
      {showDisclaimers && <DisclaimersModal toggleVisible={() => setShowDisclaimers(!showDisclaimers)} />}
    </footer>
  );
};

export { Footer };
