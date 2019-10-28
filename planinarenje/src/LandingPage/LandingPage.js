import React from 'react'
import ReactDOM from 'react-dom'
import LandingPageMenu from '../components/LandingPageMenu'
import LandingPageText from '../components/LandingPageText'


function LandingPage(){
    return(
        <div>
            <LandingPageMenu />

            <LandingPageText/>
        </div>
    )
}

export default LandingPage