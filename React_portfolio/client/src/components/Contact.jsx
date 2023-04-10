import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Contact() {
  
  const [details, setdetails] = useState("");
  const navigate = useNavigate();

  const userauth = async () =>{
    try{
      const res = await fetch('/contact',{
        method:'GET',
        headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        credentials:"include"
      })
      if(res.status === 200){ 
        console.log("i ma here in try");
        const data = await res.json();
        setdetails(data);
      }
      else{
        console.log("i ma here in try else");
        navigate("/contact");
      }
    }catch(e){
      console.log("failed to send");
      console.log("i ma here in catch");
      navigate("/contact");
    }
  }

  useEffect(() => {
    userauth();    
  }, [])

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="" /></div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">{details.phone}</div>
                  </div>
                </div>
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="" /></div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Email</div>
                    <div className="contact_info_text">{details.email}</div>
                  </div>
                </div>
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="" /></div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Address</div>
                    <div className="contact_info_text">Pune, MH, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form  */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">
                  Get in Touch </div>
                <form id="contact_form">
                  <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                    <input type="text" id="contact_form_name"
                      className="contact_form_name input_field" name = "name" disabled placeholder={details.name} required />

                    <input type="email" id="contact_form_email"
                      className="contact_form_email input_field" name="email" disabled placeholder={details.email} required />

                    <input type="number" id="contact_form_phone"
                      className="contact_form_phone input_field" name="phone" disabled placeholder={details.phone} required />
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea className="text_field contact_form_message" name="message" placeholder="Message" cols="30" rows="10"></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button type="submit" className="button contact_submit_button" >Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact