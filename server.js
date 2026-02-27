const express = require("express");
const dotenv = require("dotenv");
const connect = require("./config/db");
const createcateg = require("./routers/categ.router")
//
dotenv.config({ path: ".env" });

const app = express();


app.use(express.json());

const port = process.env.PORT || 3000;


connect();

app.use("/",createcateg)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


