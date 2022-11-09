import React, { useState } from "react";
import { Link, goTo } from "react-chrome-extension-router";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Home from "./Home";
import Main from "./Request";

const CheckMnemonic = () => {
  const [text, setText] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const numArray = [1, 2, 3, 4, 5, 6];

  const onChangeText = (e, num) => {
    let array = text;
    array[num] = e.target.value;
    setText(array);
  };

  const onClickSubmit = () => {
    goTo(Home);
  };

  return (
    <>
      <div style={{ paddingTop: "15px" }}>
        <Link component={Main}>
          <ArrowBackIcon style={{ width: "16px", marginLeft: "30px" }} />
        </Link>
      </div>
      <div style={{ marginTop: "-25px", textAlign: "center" }}>
        <h1>시드 구문 입력</h1>
      </div>
      {numArray.map((num) => (
        <div style={{ paddingTop: "5px", width: "100%", textAlign: "center" }}>
          <TextField
            label={`${num * 2 - 1}.`}
            onChange={(e) => onChangeText(e, num * 2 - 2)}
            id="outlined-required"
            defaultValue=""
            style={{ margin: "7px", width: "140px" }}
          />
          <TextField
            label={`${num * 2}.`}
            onChange={(e) => onChangeText(e, num * 2 - 1)}
            id="outlined-required"
            defaultValue=""
            style={{ margin: "7px", width: "140px" }}
          />
        </div>
      ))}
      <div style={{ paddingTop: "11px", width: "100%", textAlign: "center" }}>
        <Button variant="contained" onClick={onClickSubmit}>
          확인
        </Button>
      </div>
    </>
  );
};

export default CheckMnemonic;
