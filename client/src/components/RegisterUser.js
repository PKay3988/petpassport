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
    const [user, setUser] = useState(emptyUserReg);
    // const [formData, setFormData] = useState(emptyUserReg);
    const [message, setMessage] = useState({})
    // const [status, setStatus] = useState(/*localStorage.getUser()*/);


    const handleChange = (event) => {
        let {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        registerUser(user.name, user.username, user.email, user.password, user.postal_code, user.city, user.country, user.street_number, user.street_name);
    }

/*fetch for POST register*/
    const registerUser = async () => {
        await fetch ("/users/register", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            data: user,
        })
        
            // body: JSON.stringify(newUser)
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
                
            // }
            // await fetch ("register", options)
            // .then (result => result.json())
            // .then((user) => {
            //     setUser(user);
            // })
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
            value={user.name}
            onChange={handleChange}
            name= "name"
            type= "text"
            className= "register-input"
            />

            <label>City</label>
            <input
            value={user.city}
            onChange={handleChange}
            name= "city"
            type= "text"
            className= "register-input"
            />

           
            <label>Country</label>
            <input
            value={user.country}
            onChange={handleChange}
            name= "country"
            type= "text"
            className= "register-input"
            /> <br />



            <label>Address Number</label>
            <input
            alue={user.street_number}
            onChange={handleChange}
            name= "street_number"
            type= "text"
            className= "register-input"
            />


            <label>Street Name</label>
            <input
            value={user.street_name}
            onChange={handleChange}
            name= "street_name"
            type= "text"
            className= "register-input"
            />

            
            <label>Postal Code</label>
            <input
            value={user.postal_code}
            onChange={handleChange}
            name= "postal_code"
            type= "text"
            className= "register-input"
            /> <br />

            <label>Email</label>
            <input
            value={user.email}
            onChange={handleChange}
            name= "email"
            type= "text"
            className= "register-input"
            />

            <label>Username</label>
            <input
            value={user.username}
            onChange={handleChange}
            name= "username"
            type= "text"
            className= "register-input"
            />

            <label>Password</label>
            <input
            value={user.password}
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
