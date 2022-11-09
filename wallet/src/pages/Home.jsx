import React from "react";
import { Link } from "react-chrome-extension-router";
import Button from "@mui/material/Button";
import Layout from "../components/layout/Layout";
import Transaction from "./Transaction";

const Home = () => {
  return (
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
            <span
              style={{
                cursor: "pointer",
                fontSize: "16px",
                marginRight: "20px",
              }}
            >
              Account 1
            </span>
          </span>
          <hr style={{ marginTop: "20px", backgroundColor: "#dada" }} />
        </div>
        <div style={{ marginTop: "45px" }}>
          <img width="50px" height="50px" src="lisk.png" alt="lisk gas" />
          <h2>LSK</h2>
          <h3>0 LSK</h3>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link component={Transaction} style={{ textDecoration: "none" }}>
          <Button variant="contained">전송</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
