const transactions = [
  {
    type: 'Buyback',
    value: '418.19',
    currency: 'DAI',
    date: '02/03/2022',
    isFTM: true,
    txHash: '0xb0886e132407cbf1d06d5c05868fc7391265a4e1def3c5ac530bcbf37c235cb2',
  },
  {
    type: 'Buyback',
    value: '1494.9',
    currency: 'DAI',
    date: '02/03/2022',
    isFTM: true,
    txHash: '0xab989c4fad906a0d6bb7e2965f6ded12ce72e888f8dd5d31090fa2b246c444aa',
  },
  {
    type: 'Buyback',
    value: '404',
    currency: 'DAI',
    date: '02/03/2022',
    isFTM: true,
    txHash: '0x470a800ae835f3a59f598a2d629bd718060b9996f5ef8d940190e31988ff36c8',
  },
  {
    type: 'Buyback',
    value: '404',
    currency: 'DAI',
    date: '02/03/2022',
    isFTM: true,
    txHash: '0x6f1de616b871eb5ecf4adf49738ed58aa1d69506e7a27d051188b45771a7ae54',
  },
  {
    type: 'Buyback',
    value: '3 636',
    currency: 'DAI',
    date: '02/03/2022',
    isFTM: true,
    txHash: '0x78e8a6e5ece93aae34ab7f32e74f9e5e4e3429da67e020e13d639243cd547272',
  },
  {
    type: 'Buyback',
    value: '354',
    currency: 'DAI',
    date: '26/02/2022',
    isFTM: true,
    txHash: '0xe90f8a645e2879b7d280b8ccce99085b193212641b15a8a05c06f9539fa1e528',
  },
  {
    type: 'Buyback',
    value: '354',
    currency: 'DAI',
    date: '26/02/2022',
    isFTM: true,
    txHash: '0x9ad5a982449c45c63681234aed5ce4b2ebe11039d324bac7c7aaf2a27613b7b7',
  },
  {
    type: 'Buyback',
    value: '354',
    currency: 'DAI',
    date: '26/02/2022',
    isFTM: true,
    txHash: '0xf2ff2242b613891035f18533e6d23541a2497365b0bce9fb82d42c26ea5d0107',
  },
  {
    type: 'Buyback',
    value: '354',
    currency: 'DAI',
    date: '26/02/2022',
    isFTM: true,
    txHash: '0x1f8c478e05c413a41e4f952b9c0962274f7ec3dd25ce2f86d514fdb4074db64b',
  },
  {
    type: 'Buyback',
    value: '354',
    currency: 'DAI',
    date: '26/02/2022',
    isFTM: true,
    txHash: '0x2d63ca0b0984b217288d57fa98770c192e8965f564ef633a949d4f54a3bdb4aa',
  },
  {
    type: 'Buyback',
    value: '354',
    currency: 'DAI',
    date: '26/02/2022',
    isFTM: true,
    txHash: '0x6b14ae3f147fb75bbddd14236380633c3c405515e9cee49f608e609621b298af',
  },
  {
    type: 'Buyback',
    value: '354',
    currency: 'DAI',
    date: '26/02/2022',
    isFTM: true,
    txHash: '0x70bc574b6bbe6eef17325074b60cac5453ac5bc624ffa3b483e31a0b2b044ae6',
  },
  {
    type: 'Investment',
    value: '25 000',
    currency: 'DAI',
    date: '26/02/2022',
    isFTM: false,
    txHash: '8FF2E131D7AB2E338E1325BB0B08CE1F6B710273A560AA4FFA3076374051B5F5',
  },
  {
    type: 'Investment',
    value: '25 000',
    currency: 'DAI',
    date: '25/02/2022',
    isFTM: true,
    txHash: '0x76adb293bbba626983307eb6de6d68ed1e940ad466b1c01111f5895cbd7f7a56',
  },
  {
    type: 'Investment',
    value: '25 000',
    currency: 'DAI',
    date: '25/02/2022',
    isFTM: true,
    txHash: '0x6dd22f607b5b7569484b92931a9e63ec7bbe38b8429746fbb0504f11f7391539',
  },
  {
    type: 'Investment',
    value: '25 000',
    currency: 'DAI',
    date: '25/02/2022',
    isFTM: true,
    txHash: '0xfa938852cd20deddaf5358fa914593b465ab885b3c128f2a15d38d06b7c91e36',
  },
  {
    type: 'Investment',
    value: '10 000',
    currency: 'DAI',
    date: '29/12/2021',
    isFTM: true,
    txHash: '0x3f044c67774eb159017a8ff56daf05018ca49ed6753f6dea8ff10f3db1178bf6',
  },
  {
    type: 'Buyback',
    value: '15 645',
    currency: 'DAI',
    date: '11/12/2021',
    isFTM: true,
    txHash: '0x7238fda6764e1ec1c4616b5a4faad64e79158e6ff1541f25bf440d48daa08c33',
  },
  {
    type: 'Buyback',
    value: '5 811',
    currency: 'DAI',
    date: '11/12/2021',
    isFTM: true,
    txHash: '0x77771a77a72489f6d2b75bd07f07fa2f93d169b96a92f87265987770625a9733',
  },
  {
    type: 'Buyback',
    value: '7 003',
    currency: 'DAI',
    date: '11/12/2021',
    isFTM: true,
    txHash: '0x3756ddd60bece9ffed2a83ceb0b97a34363e950cc8998da0fbc7ba5be18f8243',
  },
  {
    type: 'Buyback',
    value: '42 176.37',
    currency: 'DAI',
    date: '11/12/2021',
    isFTM: true,
    txHash: '0xed520ab1d01ab47693245f964cd7b2c95ad50a385d9c028c5904cb464cc9d919',
  },
  {
    type: 'Buyback',
    value: '52 156.90',
    currency: 'DAI',
    date: '11/12/2021',
    isFTM: true,
    txHash: '0xff55d577765cbd6a0223869cd94d0746eb17b97a5e3d580e75e4b5d5b51b4a9d',
  },
  {
    type: 'Buyback',
    value: '67 944',
    currency: 'DAI',
    date: '11/12/2021',
    isFTM: true,
    txHash: '0xb113617bb755044dbedf8c62ed47a002dcac29a8b883c7ad864b549285ea37fc',
  },
  {
    type: 'Buyback',
    value: '80 907',
    currency: 'DAI',
    date: '11/12/2021',
    isFTM: true,
    txHash: '0xa1075b83bb7e8ac72cbed0e843a482eeb11e70f99bb6fb4a41fb88e91f1b5f4f',
  },
  {
    type: 'Buyback',
    value: '119 647',
    currency: 'DAI',
    date: '11/12/2021',
    isFTM: true,
    txHash: '0x5bedd7540ca44aeda5dc58489debd23f96859c7f45c35361ab09df52ac5dc0e1',
  },
  {
    type: 'Buyback',
    value: '26 270',
    currency: 'DAI',
    date: '10/12/2021',
    isFTM: true,
    txHash: '0x8103cb864323b31f5d7eb474ab26fc63916abdfa09349afc2f624d0292843249',
  },
  {
    type: 'Buyback',
    value: '173 808',
    currency: 'DAI',
    date: '10/12/2021',
    isFTM: true,
    txHash: '0xf1c70d6b72860aa84c7dd92d73cd3d923b030c1f58033845fb0527b48ccb07be',
  },
];

export { transactions };
