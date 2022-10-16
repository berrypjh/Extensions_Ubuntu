const Neon = require("@cityofzion/neon-js");

console.log(Neon);
const url = "http://localhost:50012";
const privateKey =
  "9362faa58374f407faf359861fa1751f3129caaacfaf6a595eb1fdd3d234e2f5";
const fromAddress = "NNjbSCLoL8aiT3FNVpy7hNygHLAqjz6Mx2";

const facadePromise = Neon.api.NetworkFacade.fromConfig({
  node: url,
});
console.log(facadePromise);

const intent = {
  from: new Neon.wallet.Account(privateKey),
  to: fromAddress,
  decimalAmt: 10000,
  contractHash: Neon.CONST.NATIVE_CONTRACT_HASH.NeoToken,
};

const signingConfig = {
  signingCallback: Neon.api.signWithAccount(
    new Neon.wallet.Account(privateKey)
  ),
};

let tt = new Neon.wallet.Account(privateKey);
console.log(tt);

facadePromise
  .then((facade) => facade.transferToken([intent], signingConfig))
  .then((txid) => console.log(txid))
  .catch((err) => console.log(err));
