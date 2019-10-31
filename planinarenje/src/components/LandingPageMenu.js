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
                    <ul className="navbar-nav ml-auto" style={{fontWeight:'bold'}}>
                        <li className="nav-item active mr-2" style={{color:'black'}}>
                            <a className="nav-link" href={"#"} style={{color:'snow'}}>ДОМА <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link" href={"#"} style={{color:'snow'}}>ДРУШТВА <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link" href={"#"} style={{color:'snow'}}>НАСТАНИ <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link" href={"#"} style={{color:'snow'}}>ЗА НАС <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
            </div>
          </nav>
        </div>
  );
}

export default LandingPageMenu;
