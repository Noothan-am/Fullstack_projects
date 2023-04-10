import user from "../Models/schema.js"
const isRegistered = {
     findUser: async ({ phone }) => { return await user.findOne({ phone: phone }) },
     createUser: async ({ phone }) => { return await user.create({ phone: phone }) }
}

export default isRegistered; 