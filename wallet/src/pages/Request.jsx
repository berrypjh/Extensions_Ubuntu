import React from "react";
import { Link } from "react-chrome-extension-router";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckMnemonic from "./CheckMnemonic";
import PasswordPage from "./CreatePassword";
import Mnemonic from "./Mnemonic";

const Request = () => {
  return (
    <>
      <div style={{ paddingTop: "30px" }}>
        <Link component={PasswordPage}>
          <ArrowBackIcon style={{ width: "16px", marginLeft: "30px" }} />
        </Link>
      </div>
      <div style={{ textAlign: "center", paddingTop: "30px" }}>
        <img width="80px" height="80px" src="lisk.png" alt="lsk" />
        <h2 style={{ paddingBottom: "20px" }}>
          LISK 지갑 생성이 처음이신가요?
        </h2>
        <h4>아니요. 이미 비밀 복구 구문이 있습니다</h4>
        <Link component={CheckMnemonic} style={{ textDecoration: "none" }}>
          <Button variant="contained">지갑 가져오기</Button>
        </Link>
        <h4>네 처음입니다</h4>
        <Link component={Mnemonic} style={{ textDecoration: "none" }}>
          <Button variant="contained">지갑 생성</Button>
        </Link>
      </div>
    </>
  );
};

export default Request;
