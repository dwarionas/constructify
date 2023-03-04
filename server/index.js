import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';

const PORT = process.env.PORT || 7000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`server started on ${PORT} port`));
    } catch (error) {
        console.log(error);
    }
}

startApp();