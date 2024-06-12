import nftAbi from './abi/nft.abi.json';
import lotteryAbi from './abi/lottery.abi.json';
import tokenAbi from './abi/token.abi.json';

const contracts = {
  nft: {
    address: '0x4f89c90E64AE57eaf805Ff2Abf868fE2aD6c55f3',
    abi: nftAbi,
  },
  lottery: {
    address: '0xE2E1096Ae5eA96cB5Da185e750d973AB8c60dc75',
    abi: lotteryAbi,
  },
  token: {
    address: '0xd5aa2a5AcFC000c08E8dab3Af830ed4f09120478',
    abi: tokenAbi,
  },
};

export { contracts };
