import express from 'express';
import bcrypt from 'bcryptjs';
const router = express.Router();
import '../models/models.js';
import authenticate from '../Middleware/auth.js';
import User from '../schema/schema.js';
router.get('/', (req, res) => {
    console.log("hello from the home page");
})

router.post('/signup', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(401).json({ Message: "enter all input fields!!" });
    }
    try {
        
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(401).json({ Message: "email already exists please enter new one!!" });
        }
        else {
            if (password == cpassword) {
                const userRegistered = new User({ name, email, phone, work, password, cpassword });
                if (!userRegistered) {
                    return res.status(401).json({ message: "user unable to register due to some internal errors!" })
                }
                await userRegistered.save();
                return res.status(200).json({ message: "User registered" });
            }
            return res.status(401).json({ message: "password and current password are not same" });
        }
        
    } catch (error) {
        return res.status(401).send(error);
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({ Message: "enter all input fields!!" });
    }
    try {
        const checkUser = await User.findOne({ email: email});
        if(checkUser){
            const isValid = await bcrypt.compare(password,checkUser.password);
            if(isValid){
                
                const token = await checkUser.generateToken();
                res.cookie('jsonweb',token);
                return res.status(200).send({message:"thisis token"});
            }
            return res.status(401).json({message:"invalid credentials"});
        }
        return res.status(401).json({message:"No user found"})
        
    } catch (error) {
        return res.status(401).json({message:error})
    }
})

router.get('/aboutus',authenticate,(req, res) => {
    res.status(200).send(req.userinfo);
})

router.get('/contact',authenticate,(req, res) => {
    res.status(200).send(req.userinfo);
})

router.get('/logout',(req,res)=>{
    res.clearCookie('jsonweb',{path:"/"});
    res.status(200).send("");
})


export default router;