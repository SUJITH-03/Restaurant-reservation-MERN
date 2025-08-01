import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import { dbConnection } from './database/dbConnection.js'
import {errorMiddleware} from './error/error.js'
import reservationRouter from './rotues/reservationRoute.js'

const app = express();
dotenv.config({path: './config/.env'})

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));


app.use("/reservation", reservationRouter);





dbConnection();

app.use(errorMiddleware);




export default app;