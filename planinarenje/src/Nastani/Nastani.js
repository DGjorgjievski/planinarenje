import React from 'react';
import CardsContainer from '../components/CardsContainer';
import NastanCover from '../components/NastanCover';
import NastanContent from '../components/NastanContent';
import NastanInfo from '../components/NastanInfo';
import {MainMenu} from '../components/MainMenu';


function Nastani(){
    return(
        <div>
            <MainMenu /> {/*Da se dosredi menito CSS*/}
            <NastanCover></NastanCover>
            <NastanContent></NastanContent>
            <NastanInfo></NastanInfo>
            
        </div>
    )
}


export default Nastani