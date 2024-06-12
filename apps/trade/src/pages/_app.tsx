import React from 'react';
import { AppProps } from 'next/app';
import { MainContainer } from '@samurai/ui';
import { WalletProvider } from '@samurai/ui/hooks/context/walletContext';
import { CookiesProvider } from 'react-cookie';
import '@samurai/ui/assets/styles/global.css';

declare global {
  interface Window {
    ethereum: any;
  }
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CookiesProvider>
      <WalletProvider>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </WalletProvider>
    </CookiesProvider>
  );
};

export default App;
