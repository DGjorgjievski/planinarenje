import React from 'react';

export function MainMenu(){
    return(
        <div className="row">
            <div className="col-12">
            <nav className="navbar navbar-expand-sm bg-transparent navbar-light">
                {/*Navbar Brand*/}
                <a className="navbar-brand" href={"#"}>
                    <img src={require("../SLIKI/logo25.png")} />
                    
                </a>

                {/*Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*Navbar Links*/}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav text-light ml-auto">
                        <li className="nav-item active mr-2" style={{fontWeight:'700'}}>
                            <a className="nav-link text-white" href={"#"}>ДОМА</a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link text-white" href={"#"}>ДРУШТВА</a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link text-white" href={"#"}>НАСТАНИ</a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link text-white" href={"#"}>ЗА НАС</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
    )
}

