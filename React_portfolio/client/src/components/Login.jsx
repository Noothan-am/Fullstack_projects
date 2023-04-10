import React, { useState } from 'react'
import loginpic from "../images/login.svg";
import { useNavigate,NavLink } from "react-router-dom";
function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: ""
  })

  let inputname, value;
  const navigate = useNavigate();
  const loginChanged = (e) => {
    inputname = e.target.name;
    value = e.target.value;
    setlogin({ ...login, [inputname]: value });
  }


  const loginSubmit = async (e) => {
    e.preventDefault();
    const { email, password  } = login;
    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,password
      })
    });

    if(res.status === 200 && res)
    {
      window.alert("login succesfull");
      await res.json();
      navigate('/aboutus');
    }
    else{
      window.alert("user login unsuccesfull");
    }
  }

  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={loginpic} alt="Login pic" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" methon="POST" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" id="email" value={login.email} onChange={loginChanged} placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="Password" value={login.password} onChange={loginChanged} placeholder="Your Password" />
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" onClick={loginSubmit} className="form-submit"
                    value="Log In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login