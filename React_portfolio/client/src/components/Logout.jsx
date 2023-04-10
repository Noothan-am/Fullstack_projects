import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Logout() {
  const navigate = useNavigate();

  const userauth = async () =>{
    
    try{
      const res = await fetch('/logout',{
        method:'GET',
        headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        credentials:"include"
      })
      if(res.status === 200){ 
        console.log("i ma here in try");
        navigate("/signin",{replace: true});
      }
      else{
        console.log("error");
        navigate("/signup",{replace: true});
      }
    }catch(e){
      console.log(e);
      navigate("/",{replace: true});
    }
  }

  useEffect(() => {
    userauth();    
  }, [])

  return (
    <></>
  )
}

export default Logout