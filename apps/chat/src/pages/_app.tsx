import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';

import { MainContainer } from '@samurai/ui';
import { WalletProvider } from '@samurai/ui/hooks/context/walletContext';
import { CookiesProvider } from 'react-cookie';
import '@samurai/ui/assets/styles/global.css';

declare global {
  interface Window {
    ethereum: any;
  }
}

function App({ Component, pageProps }: AppProps<{}>) {
  const queryClient = new QueryClient();

  return (
    <CookiesProvider>
      <WalletProvider>
        <QueryClientProvider client={queryClient}>
          <MainContainer limitWidth={false}>
            <Component {...pageProps} />
          </MainContainer>
        </QueryClientProvider>
      </WalletProvider>
    </CookiesProvider>
  );
}

// export default appWithTranslation(App);
export default App;
