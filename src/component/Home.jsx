import React, { useEffect, useState } from "react";
import { Link } from "react-chrome-extension-router";
import Layout from "./Layout";
import Page from "./Page";
import Button from "@mui/material/Button";
import Axios from "axios";

const Home = () => {
  const [balance, setBalance] = useState();
  const [myAddress, setMyAddress] = useState("NeXa85P..."); // NeXa85Pzhyz4dErY8VxyAKzYTARpNgpWhJ
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
        <div style={{ textAlign: "center" }}>
          <div style={{ marginTop: "20px" }}>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "16px",
                  marginLeft: "20px",
                }}
              >
                Account 1
              </span>
              <span style={{ fontSize: "16px", marginRight: "20px" }}>
                {myAddress}
              </span>
            </span>
            <hr style={{ marginTop: "20px", backgroundColor: "#dada" }} />
          </div>
          <div style={{ marginTop: "50px" }}>
            <img width="50px" height="50px" src="neo.png" alt="neo gas"></img>
            <h2>NEO</h2>
            <h3>{neoAmount && neoAmount} NEO</h3>
            <img width="50px" height="50px" src="gas.png" alt="neo gas"></img>
            <h2>GAS</h2>
            <h3>{gasAmount && gasAmount} GAS</h3>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link component={Page} style={{ textDecoration: "none" }}>
            <Button variant="contained">전송</Button>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
