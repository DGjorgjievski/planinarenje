import React from "react";

import {MainCarousel} from '../components/MainCarousel';
import CardsContainer from '../components/CardsContainer';

function MainPage() {
  return (
    <div>
        <MainCarousel />
        <CardsContainer />
    </div>
  );
}

export default MainPage;
