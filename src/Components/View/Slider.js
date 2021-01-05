import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function Toggler() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div style={{}}>
      <div className="row" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            Pre-tax
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            Post-tax
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
