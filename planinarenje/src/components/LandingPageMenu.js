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
          <ul className="navbar-nav mr-auto" style={{ marginLeft: "77%" }}>
            <li className="nav-item active">
              <Link to="/SignIn">
                <a className="nav-link">
                  Најава<span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href={"#"}>
                Друштва <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href={"#"}>
                Настани <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href={"#"}>
                За нас <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default LandingPageMenu;
