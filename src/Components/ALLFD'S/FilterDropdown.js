import React from "react";

import ListSubheader from "@material-ui/core/ListSubheader";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function FilterDropdown() {
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
      <ListSubheader>TENURE</ListSubheader>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="12-18 months"
      />
      <br />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="18-24 months"
      />
      <br />
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
      <br />
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
      <br />
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
      <br />
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
      <ListSubheader>PAYMENT TERM</ListSubheader>
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
      />{" "}
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
  );
}
