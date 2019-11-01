import React from "react";

function NastanInfo() {
  return (
    <div
      style={{
        backgroundColor: "rgba(227, 228, 226, 1)",
        border: "0px 1px 0px 1px solid gray"
      }}
    >
      <div
        className="container pb-5 "
        style={{
          backgroundColor: "#ffffff",
          border: "0px 1px 0px 1px solid gray",
          paddingRight: "5%",
          paddingLeft: "5%"
        }}
      >
        <div className="row">
          <div className="col-12">
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col-4">
                <img src={require("../SLIKI/македон.jpg")}></img>
              </div>
              <div className="col-8">
                <h3 style={{ textAlign: "initial" }}>За организаторот</h3>
                <p style={{ textAlign: "initial" }}>
                  Основачкото собрание на клубот е одржано на 02.04.2008 год. во
                  салата за состаноци на општина Карпош. Целта на клубот е
                  омасовување на планинарството посебно со млади членови, и
                  создавање на комплетно планинарски образовани членови, без
                  разлика дали се занимаваат рекреативно со планинарски спортови
                  или активно со намера да постигнат врвни резултати.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NastanInfo;
