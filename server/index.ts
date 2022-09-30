import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from  './router';

require('dotenv').config();

// const db = require('../db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/libre', router);


app.listen(port, (): void => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});