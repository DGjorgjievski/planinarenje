import React from "react";
import "../Styles/SignUp.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bgLogin">
      <div className="container m-auto">
        <div className="row justify-content-center sign-up-form">
          <div
            className="col-md-5 sign-up-formLayout p-5 kopce1"
            style={{
              color: "black",
              backgroundColor: "white",
              boxShadow: "5px 1px 15px 2px rgba(138, 165, 182, 0.75)"
            }}
          >
            <div className="form-group sign-up-style">
              <label htmlFor="exampleInputEmail1">Име</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Име *"
              />
            </div>
            <div className="form-group sign-up-style">
              <label htmlFor="exampleInputEmail1">Презиме</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Презиме *"
              />
            </div>
            <div className="form-group sign-up-style">
              <label htmlFor="exampleInputEmail1">Емаил адреса</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group sign-up-style">
              <label htmlFor="exampleInputEmail1">Лозинка</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Лозинка"
              />
            </div>
            <div className="form-group sign-up-style">
              <label htmlFor="exampleInputEmail1">Потврди лозинка</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Потврди лозинка"
              />
            </div>
            <div className="row  p-0 pl-3 pr-3 ">
              <p>Изберете пол:</p>
            </div>
            <div className="row gender-input-section pl-3 pr-3" id="gender">
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" defaultChecked /> Машки
                </Label>
              </FormGroup>
              <FormGroup className="ml-5" check>
                <Label check>
                  <Input type="radio" name="radio1" /> Женски
                </Label>
              </FormGroup>
            </div>
            <Link to="logIn">
              <button className="btn btn-info form-control mt-5">
                Регистрација
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
