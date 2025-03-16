//imports
// const express = require("express");
import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/connection.js";

//routes import
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';

//dot ENV config
dotenv.config()


//Mongodb connecion
connectDB();

//rest object 
const app = express();

//middlewares
app.use(express.json());

//routes
// app.get("/", (req, res) => {
//     res.send("<h1>Welcome To Job portal</h1>");
// });
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);

//PORT
const PORT = process.env.PORT || 3000;

//listen
app.listen(PORT, () => {
    console.log(
        `Node Server is running in ${process.env.DEV_MODE} Mode on port ${PORT}`
    );
});