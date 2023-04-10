import express, { json } from 'express';
import router from './routes/route.js';
const app = express();

import cookieparser from 'cookie-parser'
app.use(cookieparser());
import './models/models.js';
app.use(json());
const PORT = process.env.PORT || 5000;
app.use(router);

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})

