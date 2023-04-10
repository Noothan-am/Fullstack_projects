import axios from "axios"

const url = axios.create({
     baseURL: 'http://localhost:5000',
     headers: {
          'Content-type': 'application/json',
          Accept: 'application/json'
     }
})

export const sendOtp = (payload) => url.post('/send-otp', payload);
export const verifyOtp = (payload) => url.post('/verify-otp', payload);

