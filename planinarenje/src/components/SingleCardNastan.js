import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SingleCardNastan = () => {
  const btnStyle = {
    float: "right",
    marginTop: "20px"
  };
  const slikaStyle = {
    width: "100%",
    maxHeight: 250,
    height: "100%"
  };

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={require("../SLIKI/s1.jpg")}
        style={slikaStyle}
      />
      <div className="card-body">
        <h5 className="card-title">Љуботен 2499</h5>
        <p className="card-text">
          Атрактивноста на турата е во врвот, кој има форма на пирамида. Љуботен
          важи за малку суров врв поради тоа што претставува еден вид
          "пристаниште" на Шара каде се прекршуваат сите ветришта.{" "}
        </p>
        <Link to="infoNastan/1">
          <button className="btn btn-info" style={btnStyle}>
            Повеќе
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCardNastan;
