import React, { useState } from "react";
import "../App.css";
import logolmp from "../../public/images/Forgot.png";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [selects, setSelects] = useState("");

  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
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
          navigate("/login");
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
            <h2 align="center">Reset Password</h2>
            <form className="form-divider"></form>
            {/* <label htmlFor="selects">Select the Type:</label>
                <select>
                    <option>Admin</option>
                    <option>Lecturer</option>
                    <option>Student</option>
                </select> */}

            <h3>
              <label htmlFor="newpassword">New Password:</label>
            </h3>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setNewpassword(e.target.value)}
            />

            <h3>
              <label htmlFor="confirmpassword">Confirm Password:</label>
            </h3>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit" class="button button5">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
