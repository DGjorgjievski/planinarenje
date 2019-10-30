import React from 'react';
import {TopMenu, MainCarousel, MainMenu} from '../components';



function Header(){
    return(
        <section className="header-section">
            <TopMenu />
            <MainMenu />
            <MainCarousel />
        </section>
    )
}


export default Header