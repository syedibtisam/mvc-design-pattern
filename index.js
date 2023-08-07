require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const allRoutes = require("./routes");
const corsMiddleware = require("./cors/index");
const { connectToDatabase } = require("./config/connectMongoose");

app.options("*", corsMiddleware); // pre-flights for cors policy
app.use(corsMiddleware); // enable origins to make request from 
app.use(express.json()); // converts JSON data in body of request to JS Object

const DB_URL = process.env.NODE_ENV === "development" ? process.env.DB_URL_DEVELOPMENT : process.env.DB_URL_PRODUCTION
connectToDatabase(DB_URL);

app.use(allRoutes);

app.listen(port, () => {
    console.log("Server running");
})