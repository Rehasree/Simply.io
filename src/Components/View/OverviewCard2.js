import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Overviewcard2() {
  return (
    <div>
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <img
          class="w-100"
          src="https://cdn.indiawealth.in/public/images/icons/fmpMeter/lowRisk.svg"
          alt="low"
          style={{
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: "bold"
          }}
        >
          Low Risk
        </p>
      </div>
    </div>
  );
}
