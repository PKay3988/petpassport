import React, { useState} from "react";
import { Link } from "react-router-dom";
import './Vets.css'

function Nav() {
    
    return (
        <nav>
            <div className="navbar navbar-expand-md fixed-left">
            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a>HOME</a>
                    </li>
                    <Link to="/Vets"><li>VETS</li>
                    </Link>

                    <link>
                    <li>WELLNESS</li>
                    </link>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav