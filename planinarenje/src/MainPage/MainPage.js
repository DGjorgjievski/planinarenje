<<<<<<< HEAD
import React from "react";
import Header from "../Header/Header";

function MainPage() {
  return (
    <div>
      <Header />
    </div>
  );
=======
import React from 'react';
import Header from '../Header/Header';
import {MainCarousel} from '../components';
import CardsContainer from '../components/CardsContainer';

function MainPage(){
    return(
        <div>
            <MainCarousel />
            <CardsContainer />
        </div>
    )
>>>>>>> d696f699f0732fe1bbed2ce751d28af14885ac34
}

export default MainPage;
