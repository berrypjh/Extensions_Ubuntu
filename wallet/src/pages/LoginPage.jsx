import React from "react";
import { goTo } from "react-chrome-extension-router";
import TextField from "@mui/material/TextField";
import { useInput } from "../hooks/useInput";
import { Button } from "@mui/material";
import Home from "./Home";

const LoginPage = () => {
  const [login, onChangeLogin] = useInput("");

  const onClickSubmit = () => {
    goTo(Home);
  };

  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <TextField
          label="비밀번호입력"
          onChange={onChangeLogin}
          id="outlined-required"
          type="password"
          defaultValue=""
          style={{ margin: "10px auto", width: "280px" }}
        />
        <div style={{ paddingTop: "10px" }}>
          <Button variant="contained" onClick={onClickSubmit}>
            확인
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
