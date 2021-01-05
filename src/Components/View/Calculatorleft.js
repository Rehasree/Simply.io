import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";
function valuetext(value) {
  return `${value}°C`;
}
export default function CalculatorMain() {
  return (
    <div>
      <div>
        <br />
        <div
          className="card"
          id="calci"
          style={{ marginLeft: "20px", marginRight: "20px" }}
        >
          <br />
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <label style={{ color: "white", fontSize: "17px" }}>
              I would like to invest
            </label>
            <input
              class="form-control form-control "
              type="number"
              min="100000"
              max="10000000"
              placeholder={valuetext}
            />

            <br />
            <label style={{ color: "white", fontSize: "17px" }}>
              Investment Period
            </label>
            <input
              class="form-control form-control"
              type="number"
              min="100000"
              max="10000000"
            />
            <br />
            <label style={{ color: "white", fontSize: "17px" }}>
              Interest Payout Frequency
            </label>
            <select class="custom-select custom-select mb-3">
              <option value="4">Cummulative</option>
              <option value="1">Annually</option>
              <option value="2">Semi Annually</option>
              <option value="3">Quarterly</option>
              <option value="3">Monthly</option>
            </select>
            <br />
            <label style={{ color: "white", fontSize: "17px" }}>Tax Rate</label>
            <select class="custom-select custom-select mb-3">
              <option value="4">0.5%</option>
              <option value="1">2.3%</option>
              <option value="2">1.2%</option>
              <option value="3">3.4%</option>
              <option value="3">7%</option>
            </select>
            <br />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
