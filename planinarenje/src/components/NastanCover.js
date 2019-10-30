import React from 'react';
import Background from '../SLIKI/s8.jpg'

const coverStyle=
{
    backgroundImage:`url(${Background})` ,
    width:'100%',
    maxHeight:'500px',
    height:'100%',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'
    
}

function NastanCover()
{
    return(

        <div>
            <div style={{backgroundColor:'rgba(227, 228, 226, 1)'}}>
            <div className="container" style={{padding:'0'}}>
            <div className="cover" style={coverStyle}>
                <h1 className="slika" style={{paddingTop:'200px',marginBottom:'0',margin:'0 auto',height:'500px',color:'snow'}}>ЉУБОТЕН 2499</h1>
            </div>
            </div>
            </div>
           
        </div>

    )
}


export default NastanCover