import React from 'react';
import { AppProps } from 'next/app';
import { MainContainer } from '@samurai/ui';
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
      <MainContainer toggleNav={false} toggleBg>
        <Component {...pageProps} />
      </MainContainer>
    </CookiesProvider>
  );
};

export default App;
