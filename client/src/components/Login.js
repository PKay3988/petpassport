// import { application } from "express";
import React from "react";
// import axios from "axios";
import { useState } from 'react';
// import router from "../../routes/users";
// import { Switch, useHistory } from 'react-router-dom';
import "./Login.css";

function Login(props) {
    const emptyUser = {
        username: "",
        password: ""
    }

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
                See my Pets
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

            {/* <button type="button" className="pets-btn" onClick={requestData}>
                See my Pets
            </button> */}

    </div>
)};

export default Login;
