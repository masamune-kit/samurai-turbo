import nftAbi from './abi/nft.abi.json';
import tradeAbi from './abi/trade.abi.json';
import tokenAbi from './abi/token.abi.json';

const contracts = {
  nft: {
    address: '0x4f89c90E64AE57eaf805Ff2Abf868fE2aD6c55f3',
    abi: nftAbi,
  },
  trade: {
    address: '0x02813A552A58499265d914C1D4E7F85a88520397',
    abi: tradeAbi,
  },
  token: {
    address: '0xd5aa2a5AcFC000c08E8dab3Af830ed4f09120478',
    abi: tokenAbi,
  },
};

export { contracts };
