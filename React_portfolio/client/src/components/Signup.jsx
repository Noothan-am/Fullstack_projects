import React, { useState } from 'react'
import signpic from "../images/signup.svg";
import { NavLink, useNavigate } from 'react-router-dom';
function Signup() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  })
  let inputName, value;
  const handleChange = (event) => {
    inputName = event.target.name;
    value = event.target.value;
    setUser({ ...user, [inputName]: value })
  }

  const Submit = async (e) => {
    e.preventDefault();
    const {name,email,phone,work,password,cpassword} = user;
    const res = await fetch('/signup', {
      method:'POST',
      headers:
      {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });
    // console.log(data.status);
    if(res.status === 401 || !res)
    {
      window.alert("user registration unsuccesfull");
    }
    else{
      window.alert("registration succesfull");
      history('/signin');
      await res.json();
    }
  }


  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">

                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" value={user.name} onChange={handleChange} placeholder="Your Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" id="email" value={user.email} onChange={handleChange} placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="number" name="phone" id="phone" value={user.phone} onChange={handleChange} placeholder="Your Phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="text" name="work" id="work" value={user.work} onChange={handleChange} placeholder="Your Profession"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleChange} placeholder="Confirm Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" onClick={Submit} value="register" />
                </div>

              </form>
            </div>

            <div className="signup-image">
              <figure>
                <img src={signpic} alt="registration pic" />
              </figure>
              <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Signup