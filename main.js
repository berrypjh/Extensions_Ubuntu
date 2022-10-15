const { CONST, rpc, sc, wallet, tx, u } = require("@cityofzion/neon-core");
const Axios = require("axios");

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
  //   nodeUrl: "http://localhost:20332", //"http://seed2t.neo.org:20332",
  //   nodeUrl: "http://seed2t.neo.org:20332",
  nodeUrl: "http://seed3t5.neo.org:20332",
};

const vars = {};

const rpcClient = new rpc.RPCClient(inputs.nodeUrl);

async function createTransaction() {
  console.log("\n\n --- Today's Task ---");
  console.log(
    `Sending ${inputs.amountToTransfer} token \n` +
      `from ${inputs.fromAccount.address} \n` +
      `to ${inputs.toAccount.address}`
  );

  // Since the token is now an NEP-5 token, we transfer using a VM script.
  const script = sc.createScript({
    scriptHash: inputs.tokenScriptHash,
    operation: "transfer",
    args: [
      sc.ContractParam.hash160(inputs.fromAccount.address),
      sc.ContractParam.hash160(inputs.toAccount.address),
      inputs.amountToTransfer,
    ],
  });
  console.log("-------------------------------");
  console.log(script);
  console.log("-------------------------------");

  console.log(rpcClient);
  // We retrieve the current block height as we need to
  const currentHeight = await rpcClient.getBlockCount();
  console.log("----------Block------------");
  console.log(currentHeight);
  console.log("-------------------------------");

  vars.tx = new tx.Transaction({
    sender: inputs.fromAccount.scriptHash,
    signers: [
      {
        account: inputs.fromAccount.scriptHash,
        scopes: tx.WitnessScope.CalledByEntry,
      },
    ],
    validUntilBlock: currentHeight + 1000000,
    systemFee: vars.systemFee,
    script: script,
  });
  console.log("\u001b[32m  ✓ Transaction created \u001b[0m");
}

let test = createTransaction();
console.log(test);

async function checkBalance() {
  console.log("++++++++++++++++");
  console.log(rpcClient);
  console.log("++++++++++++++++");

  console.log(inputs.fromAccount.address);
  // let balanceResponse;
  let balanceResponse = await Axios.post(inputs.nodeUrl, {
    jsonrpc: "2.0",
    // method: "getnep5balances",
    method: "getnep17balances",
    params: [inputs.fromAccount.address],
    id: 1,
  });
  console.log(balanceResponse.data);
  // try {
  //   balanceResponse = await rpcClient.query({
  //     jsonrpc: "2.0",
  //     method: "getnep5balances",
  //     // method: "getnep17balances",
  //     params: [inputs.fromAccount.address],
  //     id: 1,
  //   });
  //   console.log(balanceResponse);
  // } catch (e) {
  //   console.log(
  //     "\u001b[31m  ✗ Unable to get balances as plugin was not available. \u001b[0m"
  //   );
  // }
}

checkBalance();
