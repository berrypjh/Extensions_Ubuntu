import React, { useEffect, useState } from "react";
import { Link } from "react-chrome-extension-router";
import Home from "./Home";
import { sendTx } from "../util/tx";

const Page = () => {
  const [first, setFirst] = useState();
  // const seed = process.env.SEED || "abcde12345";

  // initialize faucet wallet
  // const value = Buffer.from(seed);
  // const hash = bitcore.crypto.Hash.sha256(value);
  // const pk = hash.toString("hex");
  // const neoWallet = Neon.create.account(pk);
  // const faucetNEOAddress = neoWallet.address;
  //NXv5pFZhB39eQ4byEF7a5ncfenSoL7hZoA

  useEffect(() => {
    const gee = sendTx(Number("1"), "NXv5pFZhB39eQ4byEF7a5ncfenSoL7hZoA");
    console.log(gee);
    setFirst(gee);
  }, []);

  console.log(first);
  return (
    <>
      <Link component={Home}>홈으로 가기</Link>
      <div>2페이지!</div>
    </>
  );
};

export default Page;
