import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Vets.css";

function Nav() {
  return (
    <div className="navbar navbar-expand-md fixed-left">
      <div className="collapse navbar-collapse" id="navbar-content">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Dashboard">
                <a>PICTURE OF ANIMAL</a>
            </Link>
          </li>
          <li>Name, description</li>
          <li className="nav-item">
            <Link to="/Vets">
              <button>VETS</button>
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link to="/Wellness"> */}
              <button>WELLNESS</button>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
