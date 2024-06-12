type ContractType = {
  title: string;
  contracts: {
    title: string;
    address: string;
    chain?: 'ftm' | 'eth' | 'bsc' | 'avax' | 'matic' | undefined;
  }[];
};

const contractsList: ContractType[] = [
  {
    title: 'V4 Contracts and Wallets',
    contracts: [
      {
        title: 'Honour Nodes',
        address: '0x4f89c90E64AE57eaf805Ff2Abf868fE2aD6c55f3',
      },
      {
        title: 'xHNR',
        address: '0xd5aa2a5AcFC000c08E8dab3Af830ed4f09120478',
      },
      {
        title: 'vexHNR',
        address: '0xA42Fa28B17660aF52AECa48066EC23D0Bf1CE638',
      },
      {
        title: 'ZenGarden',
        address: '0x4680420238d8C0bdd27a288A1B2C1E4b65c2Fb7d',
      },
      {
        title: 'Samurai Lottery',
        address: '0xE2E1096Ae5eA96cB5Da185e750d973AB8c60dc75',
      },
      {
        title: 'Samurai AI',
        address: '0xC07A823d24abf78d2A9107A5b105FE44f6436101',
      },
      {
        title: 'Samurai Trade',
        address: '0x02813A552A58499265d914C1D4E7F85a88520397',
      },
      {
        title: 'MultiChain Sender',
        address: '0x983d24957826fdD4B5BB05a9eA33B4287dC8b882',
      },
      {
        title: 'Samurai Vaults',
        address: '0xC9244B42c0c81D8fd756A678A5b33F7B22929eE0',
      },
      {
        title: 'Samurai Levels',
        address: '0x1739daB32bc37cF053cFEF2E30F24E24e09AEdC6',
      },
      {
        title: 'Future Pool',
        address: '0x2338F32fC5C2Fea877f886FceD969a4EDF6DaB74',
      },
      {
        title: 'Distribution Pool',
        address: '0x5bc011C4892f2F2BC2518095ceA1A5D6155ff36F',
      },
      {
        title: 'Tester Wallet',
        address: '0xBe4E8C7273b0C76D23b931472E193b2eD19C4Fd4',
      },
      {
        title: 'ETH ZenGarden',
        address: '0xc9ca6eB01F1ddeE658088cA6033c9b9Cd4dDf565',
        chain: 'eth',
      },
      {
        title: 'ETH Wrapped xHNR',
        address: '0xfb3EE9923Bf433f116F6186ff09A7424c1BD1289',
        chain: 'eth',
      },
      {
        title: 'ETH MultiChain Receiver',
        address: '0x89CE5953ef7378C093327cA33eABAb1dd83DD852',
        chain: 'eth',
      },
      {
        title: 'BSC ZenGarden',
        address: '0xfb3EE9923Bf433f116F6186ff09A7424c1BD1289',
        chain: 'bsc',
      },
      {
        title: 'BSC Wrapped xHNR',
        address: '0x36667966c79dEC0dCDA0E2a41370fb58857F5182',
        chain: 'bsc',
      },
      {
        title: 'BSC MultiChain Receiver',
        address: '0xc9ca6eB01F1ddeE658088cA6033c9b9Cd4dDf565',
        chain: 'bsc',
      },
      {
        title: 'AVAX ZenGarden',
        address: '0xfb3EE9923Bf433f116F6186ff09A7424c1BD1289',
        chain: 'avax',
      },
      {
        title: 'AVAX Wrapped xHNR',
        address: '0x36667966c79dEC0dCDA0E2a41370fb58857F5182',
        chain: 'avax',
      },
      {
        title: 'AVAX MultiChain Receiver',
        address: '0xc9ca6eB01F1ddeE658088cA6033c9b9Cd4dDf565',
        chain: 'avax',
      },
      {
        title: 'MATIC ZenGarden',
        address: '0xfb3EE9923Bf433f116F6186ff09A7424c1BD1289',
        chain: 'matic',
      },
      {
        title: 'MATIC Wrapped xHNR',
        address: '0x36667966c79dEC0dCDA0E2a41370fb58857F5182',
        chain: 'matic',
      },
      {
        title: 'MATIC MultiChain Receiver',
        address: '0xc9ca6eB01F1ddeE658088cA6033c9b9Cd4dDf565',
        chain: 'matic',
      },
    ],
  },
  {
    title: 'V3 Contracts and Wallets',
    contracts: [
      {
        title: 'HNR',
        address: '0x36667966c79dEC0dCDA0E2a41370fb58857F5182',
      },
      {
        title: 'Team Allocation 1',
        address: '0x6Ab30d124cf23aEaEd9Aff8887b2E73f034796ca',
      },
      {
        title: 'Team Allocation 2',
        address: '0xB5B98EB0048a5F745EAD0C7631342F2978004BC8',
      },
      {
        title: 'Future Pool',
        address: '0x6364e2575d59054fA0c13CF54ECcc311B2aa6D56',
      },
      {
        title: 'Distribution Pool',
        address: '0xBAd99C80Cfa1a51b36A7D250fD8CcEbd2496fe51',
      },
    ],
  },
  {
    title: 'V2 Contracts and Wallets',
    contracts: [
      {
        title: 'KTNA V2',
        address: '0x8E36C77E88A0Cb91803D82589DcD13a698A13647',
      },
      {
        title: 'Team Allocation 1',
        address: '0x8DFa450829b0733AE9C968a753907de077cE5642',
      },
      {
        title: 'Team Allocation 2',
        address: '0x4B0c731e6f5A34B5f4d090Fd710caa03BccD13cE',
      },
      {
        title: 'Future Pool',
        address: '0xe0126cfaabD9D3049978DfE035ca419d724F9A11',
      },
      {
        title: 'Distribution Pool',
        address: '0x7F7BF9c92A02940C53EBaf1707144b0eE88Cbda0',
      },
    ],
  },
  {
    title: 'V1 Contracts and Wallets',
    contracts: [
      {
        title: 'KTNA',
        address: '0xBa92dBa29d76a5dFFDEDa840aD4cbf5fe2F2DdaE',
      },
      {
        title: 'Team Allocation 1',
        address: '0x975e437997b74cddc94e764a5497006e9141d881',
      },
      {
        title: 'Team Allocation 2',
        address: '0x098fe85f80567ea2cdcec39100680f85af812712',
      },
      {
        title: 'Team Allocation 3',
        address: '0xb85914aa378a3810ae7e3d7ef1f968fda9cfbf59',
      },
      {
        title: 'Team Allocation 4',
        address: '0xc8494e09ece40927987c0ca7f68c2a4b62d3b3e0',
      },
      {
        title: 'Team Allocation 5',
        address: '0xc1223aa0155b1f39d19088a7f3f88426b885e0a8',
      },
      {
        title: 'Team Allocation 6',
        address: '0xBbD0403BFbC3AB2eBb18590Fdf809113638aC8b1',
      },
      {
        title: 'Team Allocation 7',
        address: '0xD546351ca9Ec4A0d1cc42FD1eC6c424881f04b54',
      },
      {
        title: 'Future Pool',
        address: '0x91568ac24f7480ea9e97c320d6b3e628239789f1',
      },
      {
        title: 'Distribution Pool',
        address: '0xe50ec1021ce736a0c4f45a529faf24daf6f96bad',
      },
    ],
  },
];

export { contractsList };
