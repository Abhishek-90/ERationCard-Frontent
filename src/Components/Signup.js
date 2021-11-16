import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [signup, setsignup] = useState({
        email:"",
        password:"",
        cpassword:"",
        name:"",
        aadharNumber:"",
        phoneNumber:"",
        gender:"",
        dob:""
    })

    const onChange = (e)=>{
        setsignup({...signup, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            'http://localhost:5000/api/auth/signup',
            {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name:signup.name,
                    email:signup.email,
                    phoneNumber: signup.phoneNumber,
                    password: signup.password,
                    gender:signup.gender,
                    dob:signup.dob,
                    aadharNumber: signup.aadharNumber
                })
            }
        )
        
        const json = await response.json();
        console.log(json);
        if(json.success === true){
            localStorage.setItem("token",json.token);
            navigate("/");
        }
    }

  return (
      <div className="container mt-4">
        <h3>Signup Page</h3>

    <div className="container mt-4">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <div className="row">
            <div className="col-sm">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                onChange={onChange}
              />
            </div>
            <div className="col-sm">
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
          </div>
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col-sm">
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
            <div className="col-sm">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                required
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col-sm">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                name="gender"
                required
                onChange={onChange}
              />
            </div>
            <div className="col-sm">
              <label htmlFor="dob" className="form-label">
                Date Of Birth
              </label>
              <input
                type="Date"
                className="form-control"
                id="dob"
                name="dob"
                required
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col-sm">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                required
                onChange={onChange}
              />
            </div>
            <div className="col-sm">
              <label htmlFor="aadharNumber" className="form-label">
                Aadhar Number
              </label>
              <input
                type="text"
                className="form-control"
                id="aadharNumber"
                name="aadharNumber"
                required
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
