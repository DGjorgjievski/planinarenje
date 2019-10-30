
import React from 'react'

function LandingPageText(){
    return(
        <div></div>
    )

const paragrafStyle={

    color:'snow',
    margin:'0 auto',
    width:'46%',
    paddingTop:"50px",
    paddingBottom:"50px",
    fontWeight:'bold'

}
const naslovStyle={
    color:'snow',
    margin:'0 auto',
    width:'46%',
    paddingTop:"200px"
    
}
const kopceStyle={
    margin:'0 auto',
    color:'snow'
    
}

function LandingPageText(){

    return(
        <div>
            <h1 className="naslov" style={naslovStyle}>ДОБРЕДОЈДОВТЕ НА ПЛАНИНАРЕЊЕ</h1>
            <p className="paragraf" style={paragrafStyle}>
            Ви ја претставуваме нашата страна каде на забавен начин можете да пребарувате низ најновите 
        содржини,настани,информации и друштва поврзани со планинарењето низ Македонија.За да бидете во тек следете ја нашата 
        страна и креирајте свој профил.
            </p>
            <button type="button" className="btn btn-primary" style={kopceStyle}>Влез</button>
        </div>
    )
}

export default LandingPageText