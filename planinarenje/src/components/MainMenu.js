import React from 'react';

export function MainMenu(){
    return(
        <div className="row">
            <div className="col-12">
            <nav className="navbar navbar-expand-sm bg-transparent navbar-light">
                {/*Navbar Brand*/}
                <a className="navbar-brand" href={"#"}>Logo</a>

                {/*Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*Navbar Links*/}
                <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
                    <ul className="navbar-nav text-dark">
                        <li className="nav-item active">
                            <a className="nav-link" href={"#"}>ДОМА</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#"}>ДРУШТВА</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#"}>НАСТАНИ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#"}>ЗА НАС</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
    )
}

