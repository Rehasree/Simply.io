import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./styles.css";
import ScrollableTabsButtonAuto from "./Components/Tabs.js";
import Post from "./Components/Post";
//import View from "./Components/View";
export default function App() {
  return (
    <div className="App" class="container">
      <br />
      <br />
      <div className="row">
        <ArrowBackIcon />
        <h4> Fixed Deposit </h4>
      </div>
      <br />
      <ScrollableTabsButtonAuto />
      <Post/>
      
    </div>
   
  );
}
