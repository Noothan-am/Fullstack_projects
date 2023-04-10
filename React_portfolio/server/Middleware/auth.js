import jwt from 'jsonwebtoken';
import User from '../schema/schema.js'

const authenticate = async (req,res,next)=>{
    try {
        const token = req.cookies.jsonweb;
        const userdetails =  jwt.verify(token,"secretekeyisthis");
        const userinfo = await User.findOne({_id:userdetails._id,"tokens.token":token});
        if(!userinfo){
           res.status(400).send("not registered");
        }
        req.token = token;
        req.userinfo = userinfo;
        req.id = userinfo._id;
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export default authenticate;