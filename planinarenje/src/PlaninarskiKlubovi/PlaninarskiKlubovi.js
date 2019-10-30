import React from "react";
<<<<<<< HEAD

const PlaninarskiKlubovi = () => {
  return <p>Worsk Klubovi</p>;
=======
import ClubView from "./ClubView/ClubView";
import ClubList from "./ClubList/ClubList";

const PlaninarskiKlubovi = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ClubList></ClubList>
          </div>
          <div className="col-md-8">
            <ClubView></ClubView>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> master
};

export default PlaninarskiKlubovi;
