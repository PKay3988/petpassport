// import { application } from "express";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import router from "../../routes/users";
// import { Switch, useHistory } from 'react-router-dom';
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [currentId, setCurrentId] = useState({ user_id: 0 });
  // const emptyUser = {
  //   username: "",
  //   password: "",
  //   id:`${currentId.user_id}`
  // };
  // const [formData, setFormData] = useState(emptyUser);
  const [user, setUser] = useState({ username: "", password: "" });
  // const [message, setMessage] = useState({})
  const [status, setStatus] = useState({});
  const [authUser, setAuthUser] = useState("");
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
    let { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  /*fetch for POST login*/
  // const loginUser = async (emptyUser) => {
  //   // let loginBody = { username, password }
  //   await fetch("/users/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(emptyUser),
  //   })
  //     .then((result) => result.json())
  //     .then((status) => setStatus(status))
  //     .then((result) => {
  //       //store it locally
  //       localStorage.setItem("token", status.token);
  //       //   console.log(result.data.message, status.token);
  //       // requestData();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setStatus("Invalid login.");
  //     });
  // };
  //localstorage.getItem("token")- pulling saved token

  // /*General purpose fetch for GET (for restricted routes) */
  //     const requestData = async() => {
  //         console.log("hello");
  //         await fetch('/users/profile', {
  //             method: 'GET',
  //             headers: {"x-access-token": localStorage.getItem("token")

  //         }
  //     })
  //     .then(result => result.json())
  //     // .then(id => setUser(id))
  //     .then(result => console.log(result))
  //     .catch(err => setStatus({ message: "Not authenticated."}))
  //     }

  const requestData = async () => {
    console.log("Hello");
    await fetch("/users/profile", {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((result) => result.json())
      .then((user) => setAuthUser(user.name))
      .then((id) => setCurrentId(id))
      .catch((err) => setStatus({ message: "Not authenticated." }));
  };

  // /* function for logout*/
  //     function doLogout() {
  //         localStorage.removeUserInfo();
  //         setUser(null);
  //         history.push('/');
  //     }

  //-----------------------SOFIA'S CODE-----------------------------------------

  const loginUser = () => {
    axios("/users/login", {
      method: "POST",
      data: user,
    })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        console.log(result.data.token);
        getToken();
      })
      .then(setUser({ username: "", password: "" }), requestData())
      .catch((error) => console.log(error));
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
    <div>
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
            See my Pets
          </button>

          <button className="button" onClick={requestData}>
            Req
          </button>

          <button type="button" onClick={signout}>
            Log out
          </button>
          {/* </form> */}
        </div>
      </div>
      {authUser && <h3>Hello {authUser}!</h3>}

      <div className="message">{/* <span>{message}</span> */}</div>

      {/* <button type="button" className="pets-btn" onClick={requestData}>
                See my Pets
            </button> */}
    </div>
  );
}

export default Login;
