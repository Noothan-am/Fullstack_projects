import crypto from "crypto"
const hastServices = {
     hash: (payload) => {
          const hash = crypto.createHmac("sha256", "secreteKey").update(`${payload}`).digest("hex");
          return hash;
     }
}

export default hastServices;