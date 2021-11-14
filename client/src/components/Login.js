// import { application } from "express";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import router from "../../routes/users";
// import { Switch, useHistory } from 'react-router-dom';
import "./Login.css";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";

function Login(props) {

  const [user, setUser] = useState({ username: "", password: "" });

  const [message, setMessage] = useState({});

  const [authUser, setAuthUser] = useState("");

  //adding this to store all of user info (except pass) on login & send it to reactroutes
  const [fullUser, setFullUser] = useState();

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  // // Commenting this out and moving it inside the login function so it can do both on one click
  // const requestData = async () => {
  //   console.log("Hello");
  //   await fetch("/users/profile", {
  //     method: "GET",
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   })
  //     .then((result) => result.json())
  //     .then((user) => {
  //       setFullUser(user);
  //       // props.onLogin(fullUser);
  //       setAuthUser(user.name);
  //       // setCurrentId(user.id);
  //     })
  //     // .then((id) => setCurrentId(id))
  //     .catch((err) => setStatus({ message: "Not authenticated." }));
  // };

  //-----------------------SOFIA'S CODE-----------------------------------------

  const loginUser = async () => {
    await axios("/users/login", {
      method: "POST",
      data: user,
    })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        console.log(result.data.token);
        setFullUser(result.data.user);
      })
      .then(props.onLogin(fullUser))
      .catch((error) => console.log(error));

    await fetch("/users/profile", {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token")
      },
    })
      .then((result) => result.json())
      .then((user) => {
        setAuthUser(user.name);
        props.onLogin(fullUser);
      })
      .catch((err) => setMessage({ message: err.message }));
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    // setToken(token);
  };

  const signout = () => {
    localStorage.clear("token");
    console.log("Bye!");
    setAuthUser("");
    // getToken();
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="login-container">
      <div>
        <h2> Login here to see your pets!</h2>

        <div>
          {/* <form> */}
          <label>Username</label>
          <input
            value={user.username}
            onChange={handleChange}
            name="username"
            type="text"
            className="register-input"
          />

          <label>Password</label>
          <input
            value={user.password}
            onChange={handleChange}
            name="password"
            type="password"
            className="register-input"
          />

          <button className="button" onClick={loginUser}>
            Login
          </button>

          <button className="button">
            <Link to="/registeruser">
            Create new user
            </Link>
          </button>

          <button type="button" onClick={signout}>
            Log out
          </button>
          {/* </form> */}
        </div>
      </div>
      {authUser && <h3>Hello {authUser}!</h3>}

      <div className="message">{message.message}</div>

      <button type="button" className="pets-btn" onClick={props.onLogin(fullUser)}>
                <Link to="/ChoosePet">See my Pets</Link>
      </button>
    </div>
  );
}

export default Login;
