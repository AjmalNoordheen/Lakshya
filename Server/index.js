const express=require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv').config()

const adminRouter =require("./routes/adminRouter.js");
const userRouter =require("./routes/userRouter.js");

const app=express()

app.use(cors());
app.use(express.json({ limit: "100mb", extended: true }));

app.use("/admin", adminRouter);
app.use("/", userRouter);

const PORT = process.env.MONGODB_PORT;
const MONGO_URL=process.env.MONGODB_URL

mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
  });
