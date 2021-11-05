import React from "react";
import { useState } from 'react';
// import { useParams } from 'react-router-dom';

// import { Switch, useHistory } from 'react-router-dom';
// import "./RegisterUser.css";

function RegisterUser() {
    // const { id } = useParams();
    
    const [currentId, setCurrentId] = useState({ id: 1 });
    const emptyUserReg = {
        id: `${currentId.id}`,
        name: "",
        username:"",
        email: "",
        password: "",
        postal_code:"", 
        city: "",
        country:"",
        street_number:"", 
        street_name:""
    }
    const [user, setUser] = useState([]);
    const [formData, setFormData] = useState(emptyUserReg);
    const [message, setMessage] = useState({})
    const [status, setStatus] = useState(/*localStorage.getUser()*/);


    const handleChange = (event) => {
        let {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        registerUser(user.name, user.username, user.email, user.password, user.postal_code, user.city, user.country, user.street_number, user.street_name);
    }

/*fetch for POST register*/
    const registerUser = async (name, city, street_number, street_name, postal_code, country, email, username, password) => {
        let newUser = {name, city, street_number, street_name, postal_code, country, email, username, password}
        // user.id = currentId.id;
        // let user = {name, city, email, username, password};
        let options = { method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(newUser)
            // data: {
            //     name: `${name}`,
            //     city: `${city}`,
            //     street_number: `${street_number}`,
            //     street_name: `${street_name}`, 
            //     postal_code: `${postal_code}`,
            //     country: `${country}`,
            //     email:`${email}`,
            //     username:`${username}`,
            //     password:`${password}`,
            // },
                
            }
            await fetch ("register", options)
            .then (result => result.json())
            .then((user) => {
                setUser(user);
            })
            .then (result => {setMessage(result)})
            .catch(error => 
                console.log("network error:", error)
            )};
return (
    <div>

        <div>
            <h2> Register New User</h2>
            <form>
            <label>Name</label>
            <input
            onChange={handleChange}
            name= "name"
            type= "text"
            className= "register-input"
            />

            <label>City</label>
            <input
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
            /> <br />



            <label>Address Number</label>
            <input
            onChange={handleChange}
            name= "street_number"
            type= "text"
            className= "register-input"
            />


            <label>Street Name</label>
            <input
            onChange={handleChange}
            name= "street_name"
            type= "text"
            className= "register-input"
            />

            
            <label>Postal Code</label>
            <input
            onChange={handleChange}
            name= "postal_code"
            type= "text"
            className= "register-input"
            /> <br />

            <label>Email</label>
            <input
            onChange={handleChange}
            name= "email"
            type= "text"
            className= "register-input"
            />

            <label>Username</label>
            <input
            onChange={handleChange}
            name= "username"
            type= "text"
            className= "register-input"
            />

            <label>Password</label>
            <input
            onChange={handleChange}
            name= "password"
            type= "password"
            className= "register-input"
            /> <br />

            <button className= "button" onSubmit= {handleSubmit}> 
            Register
            </button>    
            </form>
        </div>
    </div>
)}

export default RegisterUser;
