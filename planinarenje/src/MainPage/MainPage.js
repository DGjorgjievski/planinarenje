import React from "react";

import {MainCarousel} from '../components/MainCarousel';
import CardsContainer from '../components/CardsContainer';
import {MainMenu} from '../components/MainMenu';
function MainPage() {
  return (
    <div>
        <MainMenu />
        <MainCarousel />
        <CardsContainer />
    </div>
  );
}

export default MainPage;
