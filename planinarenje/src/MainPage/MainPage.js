import React from 'react';
import Header from '../Header/Header';
import {MainCarousel} from '../components';
import CardsContainer from '../components/CardsContainer';

function MainPage(){
    return(
        <div>
            <Header />
            <MainCarousel />
            <CardsContainer />
        </div>
    )
}

export default MainPage