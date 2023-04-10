import React, { useEffect,useState } from 'react'
import aboutpic from "../images/aboutpic.png";
import { useNavigate } from 'react-router-dom';
function Aboutus() {
  const [details, setdetails] = useState("");
  const navigate = useNavigate();
  const userauth = async () =>{
    try{
      const res = await fetch('/aboutus',{
        method:'GET',
        headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        credentials:"include"
      })
      if(res.status === 200){ 
        navigate('/aboutus');
        const data = await res.json();
        setdetails(data);
      }
      else{
        console.log("i ma here in try else");
        navigate("/signin");
      }
    }catch(e){
      console.log("failed to send");
      console.log("i ma here in catch");
      navigate("/signin");
    }
  }

  useEffect(() => {
    userauth();
    // fetch('/aboutus').then(res=>{console.log(res)})
    
  }, [])



  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={aboutpic} alt="thapa" />
              </div>

            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{ details.name}</h5>
                <h6>{details.work }</h6>
                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>

                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>

          </div>



          <div className="row">
            {/* left side url  */}
            <div className="col-md-4">
              <div className="profile-work">
                <p> WORK LINK</p>
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Youtube</a> <br />
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Instagram</a> <br />
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Thapa Technical</a> <br />
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">WebsiteGitHubMERN Dev</a> <br />
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Web Developer</a> <br />
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Figma</a> <br />
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Software Engeeneer</a> <br />


              </div>
            </div>

            {/* right side data toogle  */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>787865454546</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>{details.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{details.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{details.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{details.work}</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default Aboutus