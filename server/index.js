const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// routes

// create todo

// get all todos

// get todo

// update todo

// delete todo

app.listen(5000, () => {
    console.log("started server on port 5000");
});
