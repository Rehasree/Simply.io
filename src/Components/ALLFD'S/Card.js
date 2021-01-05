import React,{useState} from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import "./Card.css";
import View from "../View";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

export default function Card(props) {
  const classes = useStyles();
  
  return (
    <Router>
    <div>
      <div className="card">
        <div className="row">
          <div
            className="col"
            class={classes.root}
            userId={props.id}
            uniqueId={props.cin}
            payoutFreq={props.payout_frequency}
            purchaseApiV1={props.purchase_api_v1}
            searchDisplay={props.search_display}
            style={{ marginLeft: "10px" }}
          >
            <Avatar
              alt="Remy Sharp"
              style={{ marginLeft: "10px" }}
              src={props.src}
              className={classes.large}
            />
          </div>
          <div className="col">
            <p style={{ fontSize: "15px", color: "blue", paddingTop: "10px" }}>
            
             <Link to="../View">{props.name}</Link>
              <br />
             <Switch>
                <Route path="/View" component={View} />
             </Switch>
              <span style={{ fontSize: "10px", color: "grey" }}>
                {" "}
                {props.lowerName} | {props.creditRating}
              </span>
            </p>
          </div>
          <div className="col">
            <p style={{ fontSize: "10px", color: "grey", paddingTop: "10px" }}>
              Tenure
              <br />
              <span style={{ fontSize: "15px", color: "black" }}>
                {" "}
                {props.Tenure}
              </span>
            </p>
          </div>
          <div className="col">
            <p style={{ fontSize: "10px", color: "grey", paddingTop: "10px" }}>
              Min.Investment
              <br />
              <span style={{ fontSize: "15px", color: "black" }}>
                ₹ {props.minInvestment}
              </span>
            </p>
          </div>
          <div className="col">
            <p style={{ fontSize: "10px", color: "grey", paddingTop: "10px" }}>
              Interest Rate
              <br />
              <span style={{ fontSize: "15px", color: "black" }}>
                {props.InterestRate}%
              </span>
            </p>
          </div>
          <div className="col">
            <p style={{ fontSize: "10px", color: "grey", paddingTop: "10px" }}>
              Overall Rating
              <br />
              <span style={{ fontSize: "15px", color: "black" }}>
                <Rating
                  name="read-only"
                  value={props.count}
                  size="small"
                  readOnly
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
    </Router>
  );
}
