import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countryList from "react-select-country-list";

import illu2 from '../assets/illu2.jpg';

function RegisterUser(props) {
    const emptyUserReg = {
        // id: "",
        name: "",
        username:"",
        email: "",
        password: "",
        city: "",
        country:"",
        country_code: "",
        street_number:"", 
        street_name:""
    }
    const [user, setUser] = useState(emptyUserReg);

    const [message, setMessage] = useState({})

    const handleChange = (event) => {
        let {name, value} = event.target;

        // gets country code with method from react-select-countries 
        let country_code = countryList().getValue(user.country);

        setUser((state) => ({
          ...state,
          [name]: value,
          "country_code": country_code
      }));    
    }

    function handleSubmit(event) {
        console.log("Hello there");
        event.preventDefault();
        registerUser();
    }

/*fetch for POST register*/
const registerUser = async () => {
    console.log("Hello");
    await fetch ("/users/register", {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(result => result.json())
        .then (result => {setMessage(result)})
        .catch(error => {
            console.log("network error:", error)
        })};

  return (
    <div className="">
      <div className="register-container">
      <img  className="illu2" src={illu2} width="300" height="400"></img>
      <div className="register">
        <h2> Sign Up</h2>
        <div className="register-form">
        <form >
          {/* <label>Name</label> */}
          <input
            value={user.name}
            onChange={handleChange}
            name="name"
            type="text"
            className="register-input"
            placeholder="Name"
          />
          
          {/* <label>Address Number</label> */}
          <input
            value={user.street_number}
            onChange={handleChange}
            name="street_number"
            type="text"
            className="register-input"
            placeholder="Address Number"

          />
          {/* <label>Street Name</label> */}
          <input
            value={user.street_name}
            onChange={handleChange}
            name="street_name"
            type="text"
            className="register-input"
            placeholder="Street Name"
          />
          {/* <br /> */}
          {/* <label>City</label> */}
          <input
            value={user.city}
            onChange={handleChange}
            name="city"
            type="text"
            className="register-input"
            placeholder="City"
          />
          {/* <label>Country</label> */}
          <select
            className="select-form"
            name="country"
            value={user.country}
            onChange={handleChange}
            placeholder="Country"
          >
            {props.countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
          {/* <br /> */}
          {/* <label>Email</label> */}
          <input
            value={user.email}
            onChange={handleChange}
            name="email"
            type="text"
            className="register-input"
            placeholder="Email"

          />
          {/* <label>Username</label> */}
          <input
            value={user.username}
            onChange={handleChange}
            name="username"
            type="text"
            className="register-input"
            placeholder="Username"
          />
          {/* <label>Password</label> */}
          <input
            value={user.password}
            onChange={handleChange}
            name="password"
            type="password"
            className="register-input"
            placeholder="Password"
          />{" "}
          <br />
          <div className="register-menu">
          <button  className="button btn btn-primary" onClick={handleSubmit}>
            Register
          </button>
            <div className="message"> 
            <span>{message.message}</span>
            </div>
            <p>
              <Link id="link" to="/">
               Back to Login
              </Link>  
            </p>
          </div>
        </form>
        </div>

        
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
