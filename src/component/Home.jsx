import React from "react";
import { wallet as wallet2 } from "@cityofzion/neon-js";
import { Link } from "react-chrome-extension-router";
import Page from "./Page";
import { Observable, from, Observer, of, Subject, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

export function str2ab(str) {
  if (typeof str !== "string") {
    throw new Error(`str2ab expected a string but got ${typeof str} instead.`);
  }
  const result = new Uint8Array(str.length);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    result[i] = str.charCodeAt(i);
  }
  return result;
}

export function ab2hexstring(arr) {
  if (typeof arr !== "object") {
    throw new Error(`ab2hexstring expects an array. Input was ${arr}`);
  }
  let result = "";
  const intArray = new Uint8Array(arr);
  for (const i of intArray) {
    let str = i.toString(16);
    str = str.length === 0 ? "00" : str.length === 1 ? "0" + str : str;
    result += str;
  }
  return result;
}

function str2hexstring(str) {
  return ab2hexstring(str2ab(str));
}

const Home = () => {
  const parameter = { message: "0x500489A3cC124Ce3F21197b2E1859DbD584D8FA5" };
  const parameterHexString = str2hexstring(parameter.message);
  const lengthHex = (parameterHexString.length / 2)
    .toString(16)
    .padStart(2, "0");
  const messageHex = lengthHex + parameterHexString;
  const serializedTransaction = "010001f0" + messageHex + "0000";
  console.log(serializedTransaction);

  const account = new wallet2.Account();
  console.log(account);
  const wif = account.WIF;
  console.log(wif);
  const w = new wallet2.Wallet({
    name: "NeoLineUser",
  });

  w.addAccount(account);
  console.log(w);
  let re = from(w.accounts[0].encrypt("111")).pipe(
    map(() => {
      w.accounts[0].wif = wif;
      return w;
    })
  );
  console.log(re);

  return (
    <>
      <Link component={Page}>2 페이지로 가기</Link>
      <div>Home</div>
      <div>Home</div>
    </>
  );
};

export default Home;
