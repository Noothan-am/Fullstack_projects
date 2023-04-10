import dotenv from 'dotenv';
dotenv.config();
import crypto from "crypto"
import hashServices from "../service/hashServices.js";
import twilio from "twilio"

const sendotp = twilio(process.env.accSid, process.env.token, {
     lazyLoading: true
});

const otpService = {
     generate: async () => {
          const otp = crypto.randomInt(10000, 99999);
          return otp;
     },
     sendOtp: async (phone, otp) => {
          sendotp.messages.create({
               to: phone,
               from: process.env.twiliono,
               body: `your project otp is ${otp}`
          });
     },
     verifyotp: (hash, data) => {
          // here we are reciving the hash sent buy the user (hash) 
          // data contains the otp ,phone and expires 
          // we hash the data and compare it to recieved hash 
          const computedHash = hashServices.hash(data);
          return hash === computedHash;
     }

}

export default otpService; 