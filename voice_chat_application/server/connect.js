import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.URL).then(() => {
     console.log('mongoose is connected');
}).catch(() => {
     console.log('Error while connecting to database');
})