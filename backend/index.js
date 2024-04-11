import 'dotenv/config';
import express from 'express';
import router from './Router/router.js';
import connectDB from './Model/connection.js';
import cors from 'cors';

const app = express();
const port  = process.env.PORT;

app.use(
    cors({
      origin: process.env.CORS_ORIGIN, 
      credentials: true, 
    })
  );

app.use(express.json());
app.use('/api',router);

connectDB();

app.listen(port, () => console.log(`server running on port ${port}`));