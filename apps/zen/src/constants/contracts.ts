import multichainAbi from './abi/multichain.abi.json';
import tokenAbi from './abi/token.abi.json';
import stakingAbi from './abi/staking.abi.json';

const contracts = {
  wrappedToken: {
    data: {
      eth: '0xfb3EE9923Bf433f116F6186ff09A7424c1BD1289',
      bsc: '0x36667966c79dEC0dCDA0E2a41370fb58857F5182',
      matic: '0x36667966c79dEC0dCDA0E2a41370fb58857F5182',
      avax: '0x36667966c79dEC0dCDA0E2a41370fb58857F5182',
    },
    abi: tokenAbi,
  },
  multichain: {
    data: {
      eth: '0x89CE5953ef7378C093327cA33eABAb1dd83DD852',
      bsc: '0xc9ca6eB01F1ddeE658088cA6033c9b9Cd4dDf565',
      matic: '0xc9ca6eB01F1ddeE658088cA6033c9b9Cd4dDf565',
      avax: '0xc9ca6eB01F1ddeE658088cA6033c9b9Cd4dDf565',
    },
    abi: multichainAbi,
  },
  staking: {
    data: {
      eth: '0xc9ca6eB01F1ddeE658088cA6033c9b9Cd4dDf565',
      bsc: '0xfb3EE9923Bf433f116F6186ff09A7424c1BD1289',
      matic: '0xfb3EE9923Bf433f116F6186ff09A7424c1BD1289',
      avax: '0xfb3EE9923Bf433f116F6186ff09A7424c1BD1289',
      ftm: '0x4680420238d8C0bdd27a288A1B2C1E4b65c2Fb7d',
    },
    abi: stakingAbi,
  },
  lpToken: {
    data: {
      eth: [
        {
          name: 'ohm',
          unit: '50OHM-50WETH',
          address: '0xD1eC5e215E8148D76F4460e4097FD3d5ae0A3558',
        },
        {
          name: 'ldo',
          unit: 'LDOETH-f',
          address: '0xb79565c01b7Ae53618d9B847b9443aAf4f9011e7',
        },
        {
          name: 'rpl',
          unit: '50rETH-50RPL',
          address: '0x0fd5663D4893AE0D579D580584806AAdd2dD0B8b',
        },
      ],
      bsc: [
        {
          name: 'sushi',
          unit: 'SLP',
          address: '0x96337674D5545f357BA353aAa6312d614DcF20cC',
        },
      ],
      matic: [
        {
          name: 'aave',
          unit: 'SLP',
          address: '0x2813D43463C374a680f235c428FB1D7f08dE0B69',
        },
      ],
      avax: [
        {
          name: 'curve',
          unit: 'JLP',
          address: '0x78dA10824F4029Adfb79669c4bd4F1962d08a0Bb',
        },
      ],
      ftm: [
        {
          name: 'spooky',
          unit: 'spLP',
          address: '0x901B230b5527c065305013cEbCf8c8758275A852',
        },
      ],
    },
    abi: tokenAbi,
  },
};

export { contracts };
