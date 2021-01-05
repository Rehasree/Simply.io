import React from "react";

import ListSubheader from "@material-ui/core/ListSubheader";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function SortDropdown() {
  const [state, setState] = React.useState({
    checkedL: false,
    checkedM: false,
    checkedN: false,
    checkedO: false,
    checkedP: false,
    checkedQ: false,
    checkedR: false,
    checkedS: false
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <ListSubheader>NAME</ListSubheader>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedL}
            onChange={handleChange}
            name="checkedL"
            color="primary"
          />
        }
        label="A-Z"
      />
      <br />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedM}
            onChange={handleChange}
            name="checkedM"
            color="primary"
          />
        }
        label="Z-A"
      />

      <ListSubheader>Min Investment</ListSubheader>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedN}
            onChange={handleChange}
            name="checkedN"
            color="primary"
          />
        }
        label="High-low"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedO}
            onChange={handleChange}
            name="checkedO"
            color="primary"
          />
        }
        label="Low-High"
      />
      <ListSubheader>Fund Size</ListSubheader>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedP}
            onChange={handleChange}
            name="checkedP"
            color="primary"
          />
        }
        label="High-low"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedQ}
            onChange={handleChange}
            name="checkedQ"
            color="primary"
          />
        }
        label="Low-High"
      />
      <ListSubheader>Returns</ListSubheader>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedR}
            onChange={handleChange}
            name="checkedR"
            color="primary"
          />
        }
        label="High-low"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedS}
            onChange={handleChange}
            name="checkedS"
            color="primary"
          />
        }
        label="Low-High"
      />
    </div>
  );
}
