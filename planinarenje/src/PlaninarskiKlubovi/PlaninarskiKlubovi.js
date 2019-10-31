import React from "react";
import ClubView from "../components/ClubView";
import ClubList from "../components/ClubList";

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
};

export default PlaninarskiKlubovi;
