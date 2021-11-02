import { application } from "express";
import React from "react";
// import axios from "axios";
import { useState } from 'react';
import router from "../../routes/users";
import "./Login.css";

function Login(props) {
    const newUser = {
        name= "",
        city= "",
        email= "",
        userName= "",
        password= "",
    }

    const [user, setUser] = useState(Local.getUser());
    const [message, setMessage] = useState({})

    function handleChange(event) {
        let { name, value } = event.target;
        switch (name) {
            case 'usernameInput':
                setUsername(value);
                break;
            case 'passwordInput':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(username, password);

        setUser((state) => ({
            ...state,
            [name]: value,
        }))
    }

    // const handleChange = (event) => {
    //     let {name, value} = event.target;

    //     setUser((state) => ({
    //         ...state,
    //         [name]: value,
    //     }))
    // }

    async const register = (name, city, email, userName, password) => {
        // let user = {name, city, email, userName, password};
        let options = { method: "POST",
            headers: {"Content-Type": "application/json" },
            data: {
                name: `${name}`,
                city: `${city}`,
                email:`${email}`,
                userName:`${userName}`,
                password:`${password}`,
            },
            body: JSON.stringify(data)};
            await fetch ("users/register", options)
            .then (result => result.json())
            .then (result => {setMessage(result)})
            .catch(error => 
                console.log("network error:", error)
            )}

    const login = async (username, password) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
          await fetch("/users/login", {
      method: "POST",
      data: { 
        "userName":``    
    },
      body: JSON.stringify(newUser)
    })
      .then(result => {
        //store it locally
        localStorage.setItem("token", result.data.token);
        console.log(result.data.message, result.data.token);
      })
      .catch(error => console.log(error));
  };
    

    const request = () => {

    }









    return ( <div>
        <div>
            <input
            value={}
            onChange={}
            name= "name"
            type= "text"
            className= "register-input"
            />

            <input /*should this be zipcode?*/
            value={}
            onChange={}
            name= "city"
            type= "text"
            className= "register-input"
            />

            <input
            value={}
            onChange={}
            name= "email"
            type= "text"
            className= "register-input"
            />

            <input
            value={}
            onChange={}
            name= "username"
            type= "text"
            className= "register-input"
            />

            <input
            value={}
            onChange={}
            name= "password"
            type= "password"
            className= "register-input"
            />

            <button className= "button" onClick= {}> 
            Register
            </button>    
            </div>

            <div>
            <input
            value={}
            onChange={}
            name= ""
            type= ""
            className= ""
            />

            <button className= "button" onClick= {}> 
            Log in</button>
                </div> 



    </div>
)};

export default Login;
