import React from 'react';

export function TopMenu(){
    return(
        <div className="container-fluid bg-dark">
            <div className="container">
            <div className="container-fluid bg-info">
                    <a href={"#"}>
                        <i className="fa fa-facebook text-white" aria-hidden="true" href=""></i>
                    </a>
                    <a href={"#"}>
                        <i className="fa fa-twitter text-white" aria-hidden="true"></i>
                    </a>
                    <a href={"#"}>
                        <i className="fa fa-instagram text-white" aria-hidden="true"></i>
                    </a>
                    <a href={"#"}>
                        <i className="fa fa-youtube text-white" aria-hidden="true"></i>
                    </a>
                    <a className="text-white float--right" href={"#"}><i className="fa fa-user text-white" aria-hidden="true"></i>&nbsp;Најава / Зачленете Се</a>
                </div>
            </div>
	    </div>
    )
}
