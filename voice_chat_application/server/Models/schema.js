import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
     phone: { type: Number, required: true },
     isActivated: { type: Boolean, required: true, default: false }
}, { timestampa: true })

const user = new mongoose.model("user", userSchema);

export default user;