import React from 'react';
import Styles from '../index.css'


export function TopMenu(){
    return(
        <div className="container-fluid bg-info p-0">
            <div className="row">
                <div className="col-6">
                    <p>FONT AWESOME ICONS</p>
                </div>
                <div className="col-6">
                    <a className="text-white float--right" href={"#"}><i className="fa fa-user text-white" aria-hidden="true"></i>&nbsp;Најава / Зачленете Се</a>
                </div>
            </div>
        </div>
    )
}
