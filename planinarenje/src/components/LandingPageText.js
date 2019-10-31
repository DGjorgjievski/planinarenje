import React from "react";

  function LandingPageText() {
    const paragrafStyle = {
      color: "snow",
      margin: "0 auto",
      textAlign: 'center',
      maxWidth: 800,
      width: '100%',
      paddingTop: "50px",
      paddingBottom: "50px",
    };
    const naslovStyle = {
      color: "snow",
      margin: "0 auto",
      width: '100%',
      marginTop: '18%',
      fontWeight: "700",
      textShadow: '2px 2px 2px #d3d3d3',
      textAlign:'center',
    };
    const kopceStyle = {
      margin: "0 auto",
      display:'block',
      color: "snow",
      textAlign:'center',
    };
    return (
      <div>
        <h1 className="naslov" style={naslovStyle}>
          ДОБРЕДОЈДОВТЕ НА ПЛАНИНАРЕЊЕ
        </h1>
        <p className="paragraf" style={paragrafStyle}>
          Ви ја претставуваме нашата страна каде на забавен начин можете да
          пребарувате низ најновите содржини,настани,информации и друштва
          поврзани со планинарењето низ Македонија.За да бидете во тек следете
          ја нашата страна и креирајте свој профил.
        </p>
        <button type="button" className="btn btn-lg btn-primary" style={kopceStyle}>
          Влез
        </button>
      </div>
    );
  }
export default LandingPageText;
