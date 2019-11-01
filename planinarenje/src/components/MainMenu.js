import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function MainMenu(props) {
  let location = useLocation();
  const [clas, setClas] = useState({ clas: " " });

  useEffect(() => {
    if (location.pathname === "/main") {
      setClas({
        clas: "bg-transparent navbar-light"
      });
    }
    if (location.pathname === "/nastani" || location.pathname === "/pKlubovi") {
      setClas({
        clas: "bg-dark navbar-dark"
      });
    }
  }, [location]);

  // console.log(location.pathname);
  // console.log(clas.clas);

  return (
    <div className="row">
      <div className="col-12">
        <nav className={"navbar navbar-expand-sm " + clas.clas}>
          {/*Navbar Brand*/}
          <Link to="/main">
            <a className="navbar-brand">
              <img src={require("../SLIKI/logo25.png")} />
            </a>
          </Link>
          {/*Toggler/collapsibe Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*Navbar Links*/}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav text-light ml-auto ">
              <li
                className="nav-item active mr-2"
                style={{ fontWeight: "700" }}
              >
                <Link to="/main">
                  <a className="nav-link text-white">ДОМА</a>
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/pKlubovi">
                  <a className="nav-link text-white">ДРУШТВА</a>
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/nastani">
                  <a className="nav-link text-white">НАСТАНИ</a>
                </Link>
              </li>
              <li className="nav-item mr-2">
                <NavLink to="/login">
                  <a className="nav-link text-white">НАЈАВА</a>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
