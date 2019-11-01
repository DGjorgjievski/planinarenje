import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="page-footer font-small  pt-4 bg-dark"
        style={{ color: "white" }}
      >
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Кратко за нас
              </h6>
              <p>
                Ние сме тројца студенти кои имаа замисла и цел да направат
                страна за сите љубители на планинарењето,да бидат информирани за
                сите настани,друштва и новости на забавен начин.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <img
                src={require("../SLIKI/plan.jpg")}
                style={{ width: "100%" }}
              ></img>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Контакт</h6>
              <p>
                <i className="fas fa-home mr-3"></i>gicevafrose@gmail.com
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>dgjorgjievski@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i>brsjak996@gmail.com
              </p>
              <p>
                <i className="fas fa-print mr-3"></i>022461765
              </p>
            </div>
          </div>
          <hr />
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © 2019 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/">
                  <strong style={{ color: "white" }}>
                    Сите права задржани
                  </strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
