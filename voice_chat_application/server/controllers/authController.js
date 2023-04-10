import otpService from "../service/otpService.js";
import hashServices from "../service/hashServices.js";
import isRegistered from "../service/isRegistered.js";
import jwtAuth from "../service/jwtAuth.js";
// const auth = false;
// we are creating collection of all the callbacks and exporting, it can be done by array, classes 
const controllers = {
     sendOtp: async (req, res) => {

          const { phone } = req.body;

          const expires = Date.now() + 60 * 1000 * 1000000;

          const otp = await otpService.generate();
          const hash = hashServices.hash(`${otp}.${expires}.${phone}`);
          try {
               // await otpService.sendOtp(phone, otp);
               res.json({
                    message: "Otp is sent to your no",
                    otp,
                    hash: `${otp}.${hash}.${expires}`
               })
          } catch (error) {
               console.log(error);
          }
     },

     verifyOtp: async (req, res) => {
          let user;
          // we are getting the data from client
          let { otp, hash, phone } = req.body;
          if (!otp || !hash || !phone) {
               res.status(400).send("enter otp");
          }

          // here as hash sent from client contains three things hash and otp and expiration
          // so we are spliting it because we differentiated it by (.) while sending it from the client side 
          const [hashotp, hash2, hashexpires] = hash.split(".");
          console.log(`${hashotp}, ${hash2}, ${hashexpires}`)
          if (+hashexpires < Date.now()) {
               res.send("Otp expired!");
          }
          // we are sending back the hash, hashexpires, otp and phone from the user to verify
          const isValid = otpService.verifyotp(hash2, `${otp}.${hashexpires}.${phone}`);
          if (!isValid) {
               res.send("Ivalid OTP please enter correct Otp")
          }

          try {
               // we find whether user is present or not 
               user = await isRegistered.findUser({ phone });
               if (!user) {
                    // if user is not present the we create new one by sending user phone
                    user = await isRegistered.createUser({ phone });
               }
          } catch (err) {
               console.log(err);
               res.status(500).json({ message: "there was server error" });
          }

          // JWT Authentication
          // creating the token from the userid from the document
          const { refreshToken, accessToken } = await jwtAuth.token({ id: user._id });
          // storing the accesstoken in cookie and setting it 30 days validity
          res.cookie("refreshToken", refreshToken, {
               maxAge: Date.now() + 1000 * 60 * 60 * 24 * 30,
               httpOnly: true
          })
          // storing the access token in cookie 
          res.cookie("accessToken", accessToken, {
               maxAge: Date.now() + 1000 * 60 * 60 * 24 * 30,
               httpOnly: true
          })

          jwtAuth.setRefreshToken({ token: accessToken, userId: user._id });
          res.json({ token: accessToken, auth: true });
     }


}

export default controllers;