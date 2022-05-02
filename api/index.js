const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("몽고DB 연결이 되었습니다."))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(1111, () => {
    console.log("Backend is running");
});
