import React, { useState} from "react";
import './Vets.css'

function Nav() {
    
    return (
        <div className="navbar navbar-expand-md fixed-left">
            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a>HOME</a>
                    </li>
                    <li>VETS</li>
                    <li>WELLNESS</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav