import React from "react";
import { Link, NavLink } from "react-router-dom";

function LandingPageText() {
  const paragrafStyle = {
    color: "snow",
    margin: "0 auto",
    textAlign: "center",
    maxWidth: 800,
    width: "100%",
    paddingTop: "50px",
    paddingBottom: "50px"
  };
  const naslovStyle = {
    color: "snow",
    margin: "0 auto",
    width: "100%",
    marginTop: "18%",
    fontWeight: "700",
    textShadow: "2px 2px 2px #d3d3d3",
    textAlign: "center"
  };
  const kopceStyle = {
    height: "50px",
    width: "100px",
    background: "#b51b1b",
    margin: " 20px",
    float: "center",
    boxShadow: "0 0 1px #ccc",
    webkitTransition: "all 0.5s ease-in-out",
    border: "0px",
    color: "#fff"
  };
  return (
    <div>
      <h1 className="naslov" style={naslovStyle}>
        ДОБРЕДОЈДОВТЕ НА ПЛАНИНАРЕЊЕ
      </h1>
      <p className="paragraf" style={paragrafStyle}>
        Ви ја претставуваме нашата страна каде на забавен начин можете да
        пребарувате низ најновите содржини,настани,информации и друштва поврзани
        со планинарењето низ Македонија.За да бидете во тек следете ја нашата
        страна и креирајте свој профил.
      </p>
      <div className="oneButton" style={{ position: "absolute", right: "46%" }}>
        <Link to="/main">
          <button className="btn-change landing-btn" style={kopceStyle}>
            Влез
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPageText;
