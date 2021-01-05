import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";
import CalculatorMain from "./Calculatorleft";
import CalculatorRight from "./Calculatorright";
export default function Calculator() {
  return (
    <div>
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="col-lg-5">
            <CalculatorMain />
          </div>
          <div
            className="col-lg-6"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            <CalculatorRight />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
