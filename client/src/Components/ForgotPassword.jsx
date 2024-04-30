import React, { useState } from "react";
import "../App.css";
import logolmp from "../../public/images/Forgot.png";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [selects, setSelects] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/forgotPassword", {
      selects,
      username,
      email,
    })
      .then((response) => {
        if (response.data.status) {
          alert("check you email for reset password link");
          navigate("/resetpassword");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Login_BG">
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="right">
            <img src={logolmp} alt="React" className="logo" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2 align="center">Forgot Password</h2>
            <form className="form-divider"></form>
            {/* <label htmlFor="selects">Select the Type:</label>
                <select>
                    <option>Admin</option>
                    <option>Lecturer</option>
                    <option>Student</option>
                </select> */}

            <h3>
              <label htmlFor="username">Username:</label>
            </h3>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <h3>
              <label htmlFor="email">Email:</label>
            </h3>
            <input
              type="email"
              placeholder="abc@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit" class="button button3">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
/*this is the forgot password*/

export default ForgotPassword;
