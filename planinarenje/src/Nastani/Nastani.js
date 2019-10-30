import React from 'react'
import CardsContainer from '../components/CardsContainer'

const h3Style=
{
    paddingTop:'50px',
    paddingBottom:'50px'
}

function Nastani(){
    return(
        <div>

            <h3 style={h3Style}>НАСТАНИ</h3>
            <CardsContainer />
        </div>
    )
}


export default Nastani