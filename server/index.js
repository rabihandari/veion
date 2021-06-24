import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Configure middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Configure routes
app.use('/', (req, res) => {
    res.send('Hello')
});

// Connect to the database
const CONNECTION_URL =  process.env.NODE_ENV == "production" ? DATABASE_URL : 'mongodb://localhost:27017/veion';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);