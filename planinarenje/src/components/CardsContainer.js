import React from "react";
import { Link, NavLink } from "react-router-dom";
import SingleCardNastan from "./SingleCardNastan";

const cardStyle = {
  margin: "0 auto",
  padding: "50px"
};
const btnStyle = {
  float: "right",
  marginTop: "20px"
};
const slikaStyle = {
  width: "100%",
  maxHeight: 250,
  height: "100%"
};
const h3Style = {
  textAlign: "center",
  padding: 5,
  fontWeight:'700',
  marginBottom:'3%',
};

function CardsContainer() {
  return (
    <div>
      <h3 style={h3Style}>НАСТАНИ</h3>
      <div className="container">
        {/*PRV RED CARDS*/}
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
        </div>

        {/**VTOR RED CARDS */}
        <div className="row mt-4">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
        </div>

        {/*TRET RED CARDS*/}

        <div className="row mt-4">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SingleCardNastan></SingleCardNastan>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;
