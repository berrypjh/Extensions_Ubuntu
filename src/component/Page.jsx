import React, { useEffect, useState } from "react";
import { Link } from "react-chrome-extension-router";
import Home from "./Home";
import { CONST, rpc, sc, wallet, tx, u } from "@cityofzion/neon-core";
// import { checkBalance } from "../util/checkBalance";
import Axios from "axios";
import Layout from "./Layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Page = () => {
  const [balance, setBalance] = useState();
  const [sendAddress, setSendAddress] = useState(
    "NeXa85Pzhyz4dErY8VxyAKzYTARpNgpWhJ"
  );
  const [neoAmount, setNeoAmount] = useState(0);
  const [gasAmount, setGasAmount] = useState(0);

  const checkBalance = async () => {
    let tt = await Axios.post("http://localhost:50012", {
      jsonrpc: "2.0",
      method: "getnep17balances",
      params: ["NeXa85Pzhyz4dErY8VxyAKzYTARpNgpWhJ"],
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
        <h3>보내는 주소: {sendAddress}</h3>
        <h3>받는 주소: {sendAddress}</h3>
        <h3>NEO 잔액 : {neoAmount && neoAmount} NEO</h3>
        {/* <h3>GAS 잔액 : {gasAmount && gasAmount} GAS</h3> */}
        <h3>전송 수량 : 0 NEO</h3>
        <h3>예상 수수료? : {gasAmount && gasAmount} GAS</h3>
      </Layout>
    </>
  );
};

export default Page;
