import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const onChange = (e)=>{
      setlogin({...login, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e)=>{
    e.preventDefault();

    const response = await fetch(
        'http://localhost:5000/api/auth/login',
        {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:login.email,
                password: login.password,
            })
        }
    )

    const json = await response.json();
        
    if(json.success){
        localStorage.setItem("token",json.token);
        navigate("/");

    }
  }

  return (
    <div className="container mt-4">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
