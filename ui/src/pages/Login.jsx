import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const generateError = (error) => {
    toast.error(error, { position: "bottom-right" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      console.log("data", data);
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          console.log("this is getting triggered");
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <h2>Login Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            name="password"
            placeholder="password"
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an Account? <Link to="/register">Register</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
