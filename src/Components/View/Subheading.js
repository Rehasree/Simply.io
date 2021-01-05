import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Subheading(props) {
  return (
    <div>
      <p style={{ color: "grey", fontSize: "17px" }}> {props.name}</p>
    </div>
  );
}
