import React from 'react';
import {TopMenu, MainCarousel, MainMenu} from '../components';



function Header(){
    return(
        <section className="header-section">
            <MainMenu style={{position:'absolute', top:100}} />
        </section>
    )
}


export default Header