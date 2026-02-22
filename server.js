const express = require("express");
const dotenv = require("dotenv");
const connect = require("./config/db");
const rouet = require("./routers/project.router")

dotenv.config({ path: ".env" });

const app = express();

// 🔥 لازم عشان يقرأ JSON من Postman
app.use(express.json());

const port = process.env.PORT || 3000;

// 🔥 اتصال الداتا بيز
connect();

// 🔥 ربط الراوتر
app.use("/api/users", rouet);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});