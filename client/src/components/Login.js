// import { application } from "express";
import React from "react";
// import axios from "axios";
import { useState } from 'react';
// import router from "../../routes/users";
// import { Switch, useHistory } from 'react-router-dom';
import "./Login.css";

function Login(props) {
    // const newUser = {
    //     name: "",
    //     city: "",
    //     addNumber:"", 
    //     streetName:"", 
    //     postalCode:"", 
    //     country:"",
    //     email: "",
    //     userName: "",
    //     password: ""
    // }

    const [user, setUser] = useState(/*localStorage.getUser()*/);
    const [message, setMessage] = useState({})
    const [status, setStatus] = useState(/*localStorage.getUser()*/);
    // const history = useHistory();

    // function handleChange(event) {
    //     let { name, value } = event.target;
    //     switch (name) {
    //         case 'usernameInput':
    //             setUsername(value);
    //             break;
    //         case 'passwordInput':
    //             setPassword(value);
    //             break;
    //         default:
    //             break;
    //     }
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     onSubmit(username, password);
    // }

    const handleChange = (event) => {
        let {name, value} = event.target;

        setUser((state) => ({
            ...state,
            [name]: value,
        }))
    }

/*fetch for POST register*/
    const registerUser = async (name, city, addNumber, streetName, postalCode, country, email, userName, password) => {
        // let user = {name, city, email, userName, password};
        let options = ({ method: "POST",
            headers: {"Content-Type": "application/json" },
            data: {
                name: `${name}`,
                city: `${city}`,
                addNumber: `${addNumber}`,
                streetName: `${streetName}`, 
                postalCode: `${postalCode}`,
                country: `${country}`,
                email:`${email}`,
                userName:`${userName}`,
                password:`${password}`,
            },
                body: JSON.stringify(user)
            })
            await fetch ("users/register", options)
            .then (result => result.json())
            .then (result => {setMessage(result)})
            .catch(error => 
                console.log("network error:", error)
            )}
/*fetch for POST login*/
    const loginUser = async (username, password) => {
        let loginBody = { username, password }
        let options = { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginBody)
        };
        await fetch("/users/login", options)
      .then(result => {
        //store it locally
        localStorage.setItem("token", result.data.token);
        console.log(result.data.message, result.data.token);
      })
      .catch(error => console.log(error));
  };
    
/*General purpose fetch for GET (for restricted routes) */
    const requestData = async() => {
        await fetch('/users/profile', {
            method: 'GET',
            headers: {"x-access-token": localStorage.getItem("token")
        }
    })
    .then(result => result.json())
    .then(id => setUser(id))
    .catch(err => setStatus({ message: "Not authenticated."}))
    }

// /* function for logout*/
//     function doLogout() {
//         localStorage.removeUserInfo();
//         setUser(null);
//         history.push('/');
//     }






    return ( 
    <div>
        <div>
            <h2> Register New User</h2>
            <form>
            <label>Name</label>
            <input
            value= ""
            onChange={handleChange}
            name= "name"
            type= "text"
            className= "register-input"
            />



            <label>Address Number</label>
            <input
            value=""
            onChange={handleChange}
            name= "addnumber"
            type= "text"
            className= "register-input"
            />


            <label>Street Name</label>
            <input
            value=""
            onChange={handleChange}
            name= "streetname"
            type= "text"
            className= "register-input"
            />

            
            <label>Postal Code</label>
            <input
            value=""
            onChange={handleChange}
            name= "postalcode"
            type= "text"
            className= "register-input"
            />

            <label>City</label>
            <input
            value=""
            onChange={handleChange}
            name= "city"
            type= "text"
            className= "register-input"
            />

           
            <label>Country</label>
            <input
            onChange={handleChange}
            name= "country"
            type= "text"
            className= "register-input"
            />

            <input
            value=""
            onChange={handleChange}
            name= "email"
            type= "text"
            className= "register-input"
            />

            <label>Username</label>
            <input
            value=""
            onChange={handleChange}
            name= "username"
            type= "text"
            className= "register-input"
            />

            <label>Password</label>
            <input
            value=""
            onChange={handleChange}
            name= "password"
            type= "password"
            className= "register-input"
            />

            <button className= "button" onSubmit= {registerUser}> 
            Register
            </button>    
            </form>
        </div>

        <div>
            <h2> Login here</h2>

            <div>
                <form>
                <label>Username</label>
                <input
                value=""
                onChange={handleChange}
                name= "username"
                type= "text"
                className= "register-input"
                />

                <label>Password</label>
                <input
                value=""
                onChange={handleChange}
                name= "password"
                type= "password"
                className= "register-input"
                />

                <button className= "button" onClick= {loginUser}> 
                Log in
                </button>

                <button type="button">
                Log out
                </button>
                </form>
            </div> 
        </div>

            <div className="message">
                    {/* <span>{message}</span> */}
            </div>

            <button type="button" className="pets-btn" onClick={requestData}>
                See my Pets
            </button>

    </div>
)};

export default Login;
