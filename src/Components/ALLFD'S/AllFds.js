import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./Filters";
import SearchIcon from "@material-ui/icons/Search";
import SearchFd from "./Search";
import SearchBar from "./SearchBar";
import "./Allfd.css";
import MobileFilters from "./MobileFilters";
import Post from "../Post";
export default function Allfd() {
  return (
    <div className="row">
      <div
        className="col-3"
        id="filters"
        style={{ borderRight: "1px solid black" }}
      >
        <Filter />
      </div>
      <div id="mobileFilters">
        <MobileFilters />
      </div>
      <div className="col-lg-8 col-xs-12" id="col9">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <SearchIcon />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search "
            aria-label="Username"
            aria-describedby="basic-addon1"
            
          />
        </div>
        <div id="sort">
          <SearchBar />
        </div>
        <Post />
      </div>
    </div>
  );
}
