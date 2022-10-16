import React, { useEffect, useState } from "react";
import { Link } from "react-chrome-extension-router";
import Home from "./Home";
// import { checkBalance } from "../util/checkBalance";
import * as Neon from "@cityofzion/neon-js";
import Axios from "axios";
import Layout from "./Layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const tx = () => {
  const url = "http://localhost:50012";
  const privateKey =
    "9362faa58374f407faf359861fa1751f3129caaacfaf6a595eb1fdd3d234e2f5";
  const fromAddress = "NNjbSCLoL8aiT3FNVpy7hNygHLAqjz6Mx2";

  const facadePromise = Neon.api.NetworkFacade.fromConfig({
    node: url,
  });

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
};

const Page = () => {
  const [balance, setBalance] = useState();
  const [sendAddress, setSendAddress] = useState(
    "NNWmHwuDsAzozvE2NmPnu5krmorVGqgVKs"
  );
  const [neoAmount, setNeoAmount] = useState(0);
  const [gasAmount, setGasAmount] = useState(0);

  const checkBalance = async () => {
    let tt = await Axios.post("http://localhost:50012", {
      jsonrpc: "2.0",
      method: "getnep17balances",
      params: ["NNWmHwuDsAzozvE2NmPnu5krmorVGqgVKs"],
      id: 1,
    });

    console.log(tt.data.result);
    setBalance(tt.data.result);
  };

  useEffect(() => {
    checkBalance();
  }, []);

  useEffect(() => {
    console.log(balance);
    if (balance) {
      let array = balance.balance;
      console.log(array);
      for (let i = 0; i < array.length; i++) {
        switch (array[i].symbol) {
          case "NEO":
            setNeoAmount(array[i].amount);
            break;
          case "GAS":
            setGasAmount(array[i].amount);
            break;
          default:
            break;
        }
      }
    }
  }, [balance]);

  const onClickSubmit = () => {
    tx();
  };

  return (
    <>
      <Layout>
        <div style={{ marginTop: "16px" }}>
          <Link component={Home}>
            <ArrowBackIcon style={{ width: "16px" }} />
          </Link>
          <span style={{ fontSize: "16px" }}>보내기</span>
          <hr style={{ marginTop: "17px", backgroundColor: "#dada" }} />
        </div>
        <TextField
          id="outlined-read-only-input"
          label="보내는 주소"
          defaultValue={sendAddress}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          label="받는 주소"
          id="outlined-required"
          defaultValue=""
        />
        <TextField
          id="outlined-number"
          label="NEO 수량"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          helperText={<h5>나의 잔액 : {neoAmount && neoAmount} NEO</h5>}
        />
        <TextField
          id="outlined-number"
          label="GAS 수량"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          helperText={<h5>나의 잔액 : {gasAmount && gasAmount} GAS</h5>}
        />

        <h3>예상 수수료? : {gasAmount && gasAmount} GAS</h3>
        <Button variant="contained" onClick={onClickSubmit}>
          확인
        </Button>
      </Layout>
    </>
  );
};

export default Page;
