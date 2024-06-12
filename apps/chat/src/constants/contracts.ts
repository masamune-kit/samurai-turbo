import subscriptionAbi from './abi/subscription.abi.json';
import tokenAbi from './abi/token.abi.json';

const contracts = {
  subscription: {
    address: '0x583495351581e383606B51301Ae0d8CC1e734940',
    abi: subscriptionAbi,
  },
  token: {
    address: '0xd5aa2a5AcFC000c08E8dab3Af830ed4f09120478',
    abi: tokenAbi,
  },
};

export { contracts };
