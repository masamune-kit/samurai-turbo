import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';
import { ethers } from 'ethers';

type WalletContextType = {
  wallet: string | null;
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  setWallet: Dispatch<SetStateAction<string | null>>;
  setProvider: Dispatch<SetStateAction<ethers.BrowserProvider | null>>;
  setSigner: Dispatch<SetStateAction<ethers.JsonRpcSigner | null>>;
};

const WalletContext = createContext<WalletContextType>({
  wallet: null,
  provider: null,
  signer: null,
  setWallet: () => {},
  setProvider: () => {},
  setSigner: () => {},
});

type WalletProviderType = {
  children: ReactNode;
};

export const WalletProvider: React.FC<WalletProviderType> = ({ children }) => {
  const [wallet, setWallet] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  const memoizedContext = useMemo(
    () => ({ wallet, setWallet, provider, setProvider, signer, setSigner }),
    [wallet, setWallet, provider, setProvider, signer, setSigner]
  );

  return <WalletContext.Provider value={{ ...memoizedContext }}>{children}</WalletContext.Provider>;
};

export default WalletContext;
