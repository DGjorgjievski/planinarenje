import React from "react";
import { Link, NavLink } from "react-router-dom";

function LandingPageMenu() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-transparent fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto" style={{ fontWeight: "bold" }}>
            <li className="nav-item mr-2">
              <Link to="/logIn">
                <a className="nav-link text-white">НАЈАВА</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default LandingPageMenu;
