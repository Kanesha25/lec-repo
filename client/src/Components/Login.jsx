import React, { useState } from "react";
import logolmp from "../../public/images/Login.png";
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [selects, setSelects] = useState("Admin");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      selects,
      username,
      password,
    })
      .then((response) => {
        console.log("response", response.data);
        if (response.data.role) {
          if (
            response.data.role === "Admin" ||
            response.data.role === "admin"
          ) {
            navigate("/admin");
          }

          if (
            response.data.role === "Lecturer" ||
            response.data.role === "lecturer"
          ) {
            navigate("/lecturer");
          }

          if (
            response.data.role === "Student" ||
            response.data.role === "student"
          ) {
            navigate("/student");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Login_BG">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="left">
            <img src={logolmp} alt="React" className="logo" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h2 align="center">Login Portal</h2>
            <form className="form-divider"></form>
            {/* 
        <label htmlFor="selects">Select the Type:</label>
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
          <option value={"Admin"}>Admin</option>
          <option value={"Lecturer"}>Lecturer</option>
          <option value={"Student"}>Student</option>
        </select>
        */}

            <h3>
              <label htmlFor="username">Username:</label>
            </h3>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <h3>
              <label htmlFor="password">Password:</label>
            </h3>
            <input
              type="password"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p></p>

            <button type="submit" class="button button1">
              Login
            </button>

            <Link to="/forgotPassword">
              <h4>Forgot Password?</h4>
            </Link>
            <h4>
              Don't have Account? <Link to="/signup">Sign Up</Link>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
