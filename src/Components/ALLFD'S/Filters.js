import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function Filter() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className="row">
        <div style={{ fontSize: "13px", color: "grey" }} class="col">
          FILTERS
        </div>
        <div
          style={{ fontSize: "13px", color: "Red", marginRight: "10px" }}
          className="col"
          className="d-flex justify-content-end"
        >
          Clear all <br />
        </div>
        <hr
          className="container"
          style={{
            color: "black",
            width: "100%",
            marginLeft: "6px",
            marginRight: "6px"
          }}
        />
      </div>
      <div style={{ fontSize: "13px" }}>
        <p>TENURE</p>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="12-18 months"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
          }
          label="18-24 months"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              color="primary"
            />
          }
          label="24-36 months"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
              color="primary"
            />
          }
          label="36-48 months"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={handleChange}
              name="checkedE"
              color="primary"
            />
          }
          label="48-60 months"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChange}
              name="checkedF"
              color="primary"
            />
          }
          label="60+ months"
        />
      </div>
      <hr
        className="container"
        style={{
          color: "black",
          width: "80%"
        }}
      />
      <div style={{ fontSize: "13px" }}>
        <p>PAYMENT TERM</p>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedG}
              onChange={handleChange}
              name="checkedG"
              color="primary"
            />
          }
          label="Monthly"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedH}
              onChange={handleChange}
              name="checkedH"
              color="primary"
            />
          }
          label="Quarterly"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedI}
              onChange={handleChange}
              name="checkedI"
              color="primary"
            />
          }
          label="Semi-Annually"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedJ}
              onChange={handleChange}
              name="checkedJ"
              color="primary"
            />
          }
          label="Annually"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedK}
              onChange={handleChange}
              name="checkedK"
              color="primary"
            />
          }
          label="Cummulative"
        />
      </div>
      <hr
        className="container"
        style={{
          color: "black",
          width: "80%"
        }}
      />
    </div>
  );
}
