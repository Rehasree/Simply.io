import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";
import Toggler from "./Slider";
export default function CalculatorRight() {
  return (
    <div>
      <br />
      <br />
      <Toggler />
      <div class="row">
        <div className="col-lg-8 col-sm-6">
          <br />
          <b>Total Interest</b>
          <br />
          <span style={{ fontSize: "15px", color: "grey" }}>
            {" "}
            (Received till maturity)
          </span>
        </div>
        <div className="col-lg-3 col-sm-6">
          <br />
          <br />
          <p>₹ 56,500</p>
        </div>
      </div>
      <hr
        style={{
          color: "black",
          width: "90%",
          marginLeft: "6px",
          marginRight: "16px"
        }}
      />
      <div class="row">
        <div className="col-lg-8 col-sm-6">
          <b>Payment Per Period</b>
        </div>
        <div className="col-lg-3 col-sm-6">
          <p>NA</p>
        </div>
      </div>
      <hr
        style={{
          color: "black",
          width: "90%",
          marginLeft: "6px",
          marginRight: "16px"
        }}
      />
      <div class="row">
        <div className="col-lg-8 col-sm-6">
          <b>Maturity Value</b>
        </div>
        <div className="col-lg-3 col-sm-6">
          <p>₹10.56Lac</p>
        </div>
      </div>
      <hr
        style={{
          color: "black",
          width: "90%",
          marginLeft: "6px",
          marginRight: "16px"
        }}
      />
      <div class="row">
        <div className="col-lg-8 col-sm-6">
          <b>XIRR</b>
        </div>
        <div className="col-lg-3 col-sm-6">
          <p>5.56%</p>
        </div>
      </div>
    </div>
  );
}
