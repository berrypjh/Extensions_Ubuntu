import { CONST, rpc, sc, wallet, tx, u } from "@cityofzion/neon-core";
import Axios from "axios";

const inputs = {
  fromAccount: new wallet.Account(
    "L1QqQJnpBwbsPGAuutuzPTac8piqvbR1HRjrY5qHup48TBCBFe4g" // 비밀키
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

export const checkBalance = async () => {
  await Axios.post(inputs.nodeUrl, {
    jsonrpc: "2.0",
    method: "getnep17balances",
    params: [inputs.fromAccount.address],
    id: 1,
  })
    .then((result) => {
      return result;
    })
    .catch((err) => console.error(err));
};
