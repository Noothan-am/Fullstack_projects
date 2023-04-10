import jwt from "jsonwebtoken"
import usertoken from "../Models/activate-schema"
const jwtAuth = {
     token: async (payload) => {
          const accessToken = jwt.sign(payload, "thisIsJustAsampleSecreateKey", {
               expiresIn: '1h'
          })
          const refreshToken = jwt.sign(payload, "thisIsJustAsampleSecreateKeyfor2nd", {
               expiresIn: '1y'
          })
          return { refreshToken, accessToken };
     },
     setRefreshToken: async ({ token, userId }) => {
          try {
               return usertoken.create({
                    token,
                    userId
               })
          } catch (error) {
               console.log(error);
          }
     }
}

export default jwtAuth; 