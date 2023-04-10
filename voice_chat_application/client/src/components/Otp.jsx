import React, { useState } from 'react'
import Card from './Card'
// import { verifyOtp } from '../url/axiosInstace'
// import { useSelector } from 'react-redux'
import './css/otp.css'
function Otp({ clicked }) {
     // const counter = useSelector(state => state.auth);
     // const { phone, hash } = counter;
     // const [hashotp, hash2, hashexpires] = hash.spilt(".");
     // console.log(counter);
     // const [input, setInput] = useState('');
     const submit = () => {
          // console.log(verifyOtp({ otp: input, hash: hash2, phone: phone }));
          clicked();
     }
     // const changed = (event) => { setInput(event.target.value) }
     return (
          <>
               <Card heading={"Enter Otp"} buttonText={"Verify"} clicked={submit}>
                    <div className="register-otp">
                         <div className="otp_input">
                              <input type="text" name="otp" /*value={input} onChange={changed}*/ placeholder='Enter Otp' />
                         </div>
                         <p>Enter otp and you will be register to is site</p>
                    </div>
               </Card>
          </>
     )
}

export default Otp