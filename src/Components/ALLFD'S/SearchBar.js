import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="url">
          Sort by:
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <select className="custom-select" id="inputGroupSelect01">
                <option disabled selected>
                  Name
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </li>
            <li className="nav-item">
              <select className="custom-select" id="inputGroupSelect01">
                <option disabled selected>
                  Min Investment
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </li>
            <li class="nav-item">
              <select className="custom-select" id="inputGroupSelect01">
                <option disabled selected>
                  Fund Size
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </li>
            <li className="nav-item">
              <select className="custom-select" id="inputGroupSelect01">
                <option disabled selected>
                  Returns
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
