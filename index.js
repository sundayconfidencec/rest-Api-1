
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bookRoute = require("./myRoutes/book");


const server = express();

server.use(bodyParser.json());




server.use(bookRoute);
mongoose.connect("mongodb+srv://confidence:0987654321@cluster0.wu5qavl.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true}).then(result => {

    server.listen(3005, "localhost",()=>{console.log("server is ready")});
}).catch(err=> console.log(err));