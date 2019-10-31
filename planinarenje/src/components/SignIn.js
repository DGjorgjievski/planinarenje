import React from "react";
import "../Styles/SignIn.css";
import { Link, NavLink } from "react-router-dom";
const SignIn = props => {
  return (
    <div className="bgLogin ">
      <div className="container m-auto">
        <div className="row justify-content-center log-in-form">
          <div className="col-md-4 form-style p-3">
            <form>
              <div className="form-group login-input-style ">
                <label for="exampleInputEmail1">Емаил адреса</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group login-input-style">
                <label for="exampleInputPassword1">Лозинка</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Лозинка *"
                />
              </div>
              <div className="log-in-with-social"></div>
              <button type="submit" className="btn btn-success form-control">
                Најави се!
              </button>
              <div className="row mt-5">
                <div className="col-md-6 ">
                  <p>Доколку немате корисничка сметка:</p>
                </div>
                <div className="col-md-6 mt-1">
                  <Link to="signUp">
                    <button
                      type="button"
                      className="btn btn-info form-control signIn"
                    >
                      Регистрација
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
