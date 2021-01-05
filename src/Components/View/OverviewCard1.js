import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export default function OverviewCard1() {
  return (
    <div>
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <div class="row" style={{ marginLeft: "15px", marginTop: "10px" }}>
          <div class="col">
            <p style={{ color: "grey", fontSize: "15px" }}>
              Interest Rate
              <br />
              <span style={{ color: "black", fontSize: "25px" }}>5.95%</span>
            </p>
          </div>
          <div class="col">
            <p style={{ color: "grey", fontSize: "15px" }}>
              Min Investment
              <br />
              <span style={{ color: "black", fontSize: "20px" }}>₹ 20,000</span>
            </p>
          </div>
          <div class="col">
            <p style={{ color: "grey", fontSize: "15px" }}>
              Tenure
              <br />
              <span style={{ color: "black", fontSize: "20px" }}>
                48-59months
              </span>
            </p>
          </div>
          <div class="col">
            <p style={{ color: "grey", fontSize: "15px" }}>
              Payment term
              <br />
              <span style={{ color: "black", fontSize: "20px" }}>
                Cummulative
              </span>
            </p>
          </div>
        </div>
        <hr style={{ marginLeft: "10px", marginRight: "10px" }} />
        <a
          className="link"
          href="url"
          style={{
            marginLeft: "20px",
            marginBottom: "20px",
            fontSize: "17px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          {" "}
          Why Should you invest
          <KeyboardArrowRightIcon Style={{ fontSize: "small" }} />
        </a>
      </div>
    </div>
  );
}
