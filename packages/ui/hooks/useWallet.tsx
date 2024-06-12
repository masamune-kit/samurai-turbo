import { ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-hot-toast';
import { errorHandler } from '../utils';
import WalletContext from './context/walletContext';

export const useWallet = () => {
  const { wallet, setWallet, provider, setProvider, signer, setSigner } = useContext(WalletContext);
  const [chainId, setChainId] = useState<number | null>(null);
  const [cookies, setCookie] = useCookies(['wallet_cookie']);

  // this hook will initialize the provider and observe chain changing
  useEffect(() => {
    if (typeof window.ethereum == 'undefined') {
      toast.error('Metamask not available');
      return () => {};
    }
    // listener for changing chains
    const handleChainChanged = () => {
      const browserProvider = new ethers.BrowserProvider(window.ethereum);

      browserProvider.getNetwork().then(({ chainId }) => setChainId(Number(chainId.toString())));
      setProvider(browserProvider);
    };
    // call it at least once to initialize
    handleChainChanged();
    // add the listener
    window.ethereum.on('chainChanged', handleChainChanged);
    // run a clean up function
    return () => {
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, [setProvider]);

  // this hook takes care of switching addresses and network within metamask
  useEffect(() => {
    // if cookies are empty, then it must be a first time visitor
    if (!provider || !cookies.wallet_cookie) {
      return;
    }

    // the listener for changing accounts
    const handleAccountsChanged = async () => {
      try {
        const accounts = await provider.send('eth_requestAccounts', []);
        if (accounts[0] !== wallet) {
          // note that we are only changing the signer if the switched account is different
          // the subsequent hook will take care of changing the address and cookie once the signer is different
          provider.getSigner().then((newSigner) => setSigner(newSigner));
        }
      } catch (e) {
        errorHandler(e);
      }
    };
    // call this function once to initialize the values on browser refresh
    handleAccountsChanged();
    // add the listener
    window.ethereum.on('accountsChanged', handleAccountsChanged);
    // clean up the bound listener
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, [cookies.wallet_cookie, provider, setSigner, wallet]);

  // this hook observes the changing signer and sets the new wallet addresses as well as cookies
  useEffect(() => {
    if (!signer) {
      return;
    }
    // set the address as well as the cookie
    signer.getAddress().then((address) => {
      setWallet(address);
      setCookie('wallet_cookie', address, { path: '/' });
    });
  }, [signer, setWallet, setCookie]);

  // function to switch the network to fantom
  const switchNetwork = async () => {
    if (!provider) {
      return;
    }

    await provider.send('wallet_addEthereumChain', [
      {
        chainId: '0xFA',
        rpcUrls: ['https://rpc.ankr.com/fantom'],
        chainName: 'Fantom Mainnet',
        nativeCurrency: {
          name: 'FTM',
          symbol: 'FTM',
          decimals: 18,
        },
        blockExplorerUrls: ['https://ftmscan.com/'],
      },
    ]);
  };
  // function to check whether the current network has the correct id
  const isCorrectNetwork = () => chainId === 250;
  // function to connect the wallet
  const connectWallet = async () => {
    if (!provider) {
      return toast.error('Metamask not detected!');
    }

    // if the network ID is not correct, ask for a switch
    if (!isCorrectNetwork()) {
      return await switchNetwork();
    }

    try {
      // ask for the actual connection here
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();

      setSigner(signer);
    } catch (e) {
      errorHandler(e);
    }
  };

  return { wallet, provider, signer, chainId, connectWallet, switchNetwork, isCorrectNetwork };
};
