import React from 'react';




function LandingPageMenu() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-transparent fixed-top">
               
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item active" style={{color:'black'}}>
                            <a className="nav-link" href={"#"} style={{color:'snow'}}>Дома <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#"} style={{color:'snow'}}>Друштва <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href={"#"} style={{color:'snow'}}>Настани <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href={"#"} style={{color:'snow'}}>За нас <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
  </div>
</nav>
        </div>
            )
        }
        
export default LandingPageMenu