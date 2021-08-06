import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import apiRoutes from './routes/api.js';

const app = express();
dotenv.config();

// Configure middlewares
app.use(cors({ origin: process.env.FRONTEND_HOST || 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// Configure routes
app.use('/api', apiRoutes);


// Connect to the database
const CONNECTION_URL =  process.env.NODE_ENV == "production" ? process.env.DATABASE_URL : 'mongodb://localhost:27017/veion';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);