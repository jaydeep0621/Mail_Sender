const express = require("express");
const helmet = require("helmet")
const dotenv = require("dotenv").config();
const cors = require("cors")
const bodyparser = require("body-parser");
require("./src/config/config");
const v1route = require("./src/route/route");

const app = express();
const port = process.env.PORT;

// secure apps by setting various HTTP headers
app.use(helmet());

// parse body params and attache them to req.body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//Cross Origin Resource Sharing
app.use(cors());

app.use("/", v1route);

app.listen(port, ()=> {
    console.log(`Successfully Connected at PORT Number ${port}`);
})