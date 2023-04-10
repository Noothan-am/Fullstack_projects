import React, { useState } from 'react'
import Phone from '../components/Phone'
import Username from '../components/Username'
import Photo from '../components/Photo'
import Otp from '../components/Otp'
import './css/register.css'

function Register() {
     var [count, setcount] = useState(0);
     // we are using maping method to render the below given pages 
     // 1. here all components are rendered withought changing the url 
     const process = {
          0: Phone,
          1: Otp,
          2: Username,
          3: Photo,
     }
     // everytime usere clicks on button 
     // 1. button triggers and count is increased
     const clicked = () => {
          setcount(++count);
     }
     // here Page stores the corresponding components after button triggeres 
     const Page = process[count];
     return (
          <>
               <div className="register">
                    {/* here Page acts as a compnent  */}
                    <Page clicked={clicked} />
               </div>
          </>
     )
}

export default Register