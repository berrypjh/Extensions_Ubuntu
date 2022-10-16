const inputs = {
  fromAccount: new wallet.Account(
    "9362faa58374f407faf359861fa1751f3129caaacfaf6a595eb1fdd3d234e2f5" // 비밀키
  ),
  toAccount: new wallet.Account(
    "L2QTooFoDFyRFTxmtiVHt5CfsXfVnexdbENGDkkrrgTTryiLsPMG" // 비밀키
  ),
  tokenScriptHash: CONST.ASSET_ID.NEO,
  amountToTransfer: 1,
  systemFee: 0,
  networkFee: 0,
  // networkMagic: 1234567890, //CONST.MAGIC_NUMBER.TestNet,
  networkMagic: CONST.MAGIC_NUMBER.TestNet,
  //   networkMagic: 1234567890, //CONST.MAGIC_NUMBER.TestNet,
  //   nodeUrl: "http://localhost:20332", //"http://seed2t.neo.org:20332",
  //   nodeUrl: "http://seed2t.neo.org:20332",
  nodeUrl: "http://seed3t5.neo.org:20332",
  //   nodeUrl: "http://localhost:50012",
};
