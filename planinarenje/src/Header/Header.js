<<<<<<< HEAD
import React from "react";
import { TopMenu, MainCarousel, MainMenu } from "../components";

function Header() {
  return (
    <section className="header-section">
      <MainCarousel />
    </section>
  );
=======
import React from 'react';
import {TopMenu, MainCarousel, MainMenu} from '../components';



function Header(){
    return(
        <section className="header-section">
            <MainMenu style={{position:'absolute', top:100}} />
        </section>
    )
>>>>>>> d696f699f0732fe1bbed2ce751d28af14885ac34
}

export default Header;
