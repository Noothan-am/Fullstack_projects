import mongoose from 'mongoose'
import schema from './schema'
const userSchema = new mongoose.Schema({
     token: { type: String, required: true },
     userId: { type: schema.Types.objectId, ref: "user" }

})

const usertoken = new mongoose.model("token", userSchema);
export default usertoken;