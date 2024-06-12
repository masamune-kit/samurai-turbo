export type ChainSymbols = 'ftm' | 'eth' | 'avax' | 'bsc' | 'matic';

const getChainbyId = (chainId: number): { symbol: ChainSymbols; name: string } => {
  switch (chainId) {
    case 1:
      return { symbol: 'eth', name: 'Ethereum' };
    case 56:
      return { symbol: 'bsc', name: 'Binance Smart Chain' };
    case 43114:
      return { symbol: 'avax', name: 'Avalanche' };
    case 137:
      return { symbol: 'matic', name: 'Polygon' };
    case 250:
      return { symbol: 'ftm', name: 'Fantom' };
    default:
      throw new Error('Unknown Chain ID');
  }
};

export { getChainbyId };
