import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendOtp } from '../url/axiosInstace'
import { setOtp } from '../slice/authSlice'
import Card from './Card'
import './css/phone.css'
function Phone({ clicked }) {
     const [input, setInput] = useState('');
     const dispatch = useDispatch();
     const submit = async () => {
          const { data } = await sendOtp({ phone: input });
          console.log(data);
          dispatch(setOtp(data));
          clicked();
     }
     const changed = (event) => { setInput(event.target.value) }
     return (
          <>
               <Card heading={"Enter Phone Number"} buttonText={"Verify"} clicked={submit}>
                    <div className="register_phoneNumber">
                         <input type="number" name="phoneNumber" id="phone" value={input} onChange={changed} placeholder="Phone No" />
                         <p>By tapping Verify, an SMS may be sent. Message & data rates may apply.</p>
                    </div>
               </Card>
          </>
     )
}

export default Phone