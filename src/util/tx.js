import Neon, { api } from "@cityofzion/neon-js";

export const sendTx = async () => {
  const intent = api.makeIntent(
    { NEO: Number("1") },
    "NXv5pFZhB39eQ4byEF7a5ncfenSoL7hZoA"
  );
  const config = {
    net: "TestNet", // The network to perform the action, MainNet or TestNet.
    address: "NXv5pFZhB39eQ4byEF7a5ncfenSoL7hZoA", // This is the address which the assets come from.
    privateKey:
      "a7411a3704a56d0f9319ab779f26e6b14ab739435ecfa99f4b7c8dafb649b7d8",
    intents: intent,
  };

  console.log(intent);
  let result = await Neon.sendAsset(config);
  return result.response.txid;
};
